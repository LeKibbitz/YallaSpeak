/**
 * Pre-generates the audio of every static phrase of the app into .cache/tts.
 *
 * Why: the provider caps requests per minute, and a cold cache makes the first
 * visitor wait seconds on every phrase. Once this cache is built and shipped
 * with the deployment, the whole static content (vocabulary, sample dialogues,
 * pronunciation guide, dialect picker) plays instantly and costs zero API call.
 *
 * Usage: the server must be running.
 *   BASE=http://localhost:3000 npx tsx tools/warm-tts.ts
 */
import { VOCABULARY_LIST, SAMPLE_SCENARIOS, PRONUNCIATION_HACKS } from "../src/data/vocabulary";
import { DIALECTS } from "../src/data/dialects";
import { DIALECT_TTS_NAMES } from "../src/lib/audio";
import { DialectId } from "../src/types";

const BASE = process.env.BASE || "http://localhost:3000";
const PAUSE_MS = Number(process.env.PAUSE_MS) || 1500;

const DIALECT_IDS = Object.keys(DIALECT_TTS_NAMES) as DialectId[];

interface Phrase {
  dialect: DialectId;
  text: string;
  arabic?: string;
}

function collect(): Phrase[] {
  const phrases: Phrase[] = [];

  // Flashcards + vocabulary explorer: every item in every dialect
  for (const item of VOCABULARY_LIST) {
    for (const dialect of DIALECT_IDS) {
      const variant = item.dialects?.[dialect];
      phrases.push({
        dialect,
        text: variant?.phonetic || item.phonetic,
        arabic: variant?.arabic || item.arabic,
      });
    }
  }

  // Sample dialogues: each line is spoken in the scenario's own dialect
  for (const scenario of SAMPLE_SCENARIOS) {
    for (const line of scenario.lines) {
      phrases.push({ dialect: scenario.dialect, text: line.phonetic, arabic: line.arabic });
    }
  }

  // Pronunciation guide: the example word, in every dialect
  for (const hack of PRONUNCIATION_HACKS) {
    for (const dialect of DIALECT_IDS) {
      phrases.push({ dialect, text: hack.audioWord, arabic: hack.example });
    }
  }

  // Dialect picker signature words
  for (const dialect of DIALECT_IDS) {
    const signature = DIALECTS[dialect]?.signatureWord;
    if (signature) phrases.push({ dialect, text: signature.word, arabic: signature.arabic });
  }

  // Same phrase in two places = one URL = one generation
  const seen = new Set<string>();
  return phrases.filter((phrase) => {
    const key = url(phrase);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function url({ dialect, text, arabic }: Phrase): string {
  const params = new URLSearchParams({ dialect: DIALECT_TTS_NAMES[dialect], text: text || "" });
  if (arabic) params.set("arabic", arabic);
  return `${BASE}/api/tts?${params.toString()}`;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  const phrases = collect();
  console.log(`${phrases.length} phrases a generer (pause ${PAUSE_MS} ms)`);

  let done = 0;
  let cached = 0;
  let failed = 0;

  for (const [index, phrase] of phrases.entries()) {
    const target = url(phrase);
    const started = Date.now();
    try {
      const response = await fetch(target);
      const elapsed = Date.now() - started;

      if (response.status === 429) {
        const wait = (Number(response.headers.get("Retry-After")) || 25) * 1000;
        console.warn(`  quota atteint, pause ${wait} ms`);
        await sleep(wait);
        phrases.push(phrase); // retry at the end of the queue
        continue;
      }
      if (!response.ok) {
        failed += 1;
        console.error(`  ${response.status} sur "${phrase.text.slice(0, 40)}"`);
        continue;
      }

      const bytes = (await response.arrayBuffer()).byteLength;
      done += 1;
      if (elapsed < 100) cached += 1;
      console.log(
        `[${index + 1}/${phrases.length}] ${phrase.dialect} "${phrase.text.slice(0, 38)}" ` +
          `${(bytes / 1024).toFixed(0)} ko ${elapsed} ms${elapsed < 100 ? " (deja en cache)" : ""}`
      );
      if (elapsed >= 100) await sleep(PAUSE_MS);
    } catch (error) {
      failed += 1;
      console.error(`  echec sur "${phrase.text.slice(0, 40)}"`, error);
    }
  }

  console.log(`\nTermine : ${done} ok (${cached} deja en cache), ${failed} echecs`);
  if (failed) process.exitCode = 1;
}

main();
