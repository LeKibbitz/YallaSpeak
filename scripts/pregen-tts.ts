/**
 * Pre-generate the TTS disk cache by walking a language pack and requesting
 * every phrase x variant against the production endpoint. Each phrase is
 * generated once, then served from cache forever.
 *
 * Usage: esbuild scripts/pregen-tts.ts --bundle --platform=node --outfile=.tmp/pregen-tts.cjs && node .tmp/pregen-tts.cjs
 */
import { VOCABULARY_LIST_IT } from '../src/data/vocabulary.italian';
import { VOCABULARY_LIST_MD } from '../src/data/vocabulary.mandarin';
import { VOCABULARY_LIST_TH } from '../src/data/vocabulary.thai';
import { VOCABULARY_LIST_JP } from '../src/data/vocabulary.japanese';
import { VOCABULARY_LIST_RU } from '../src/data/vocabulary.russian';
import { VOCABULARY_LIST_EL } from '../src/data/vocabulary.greek';
import { VOCABULARY_LIST_MG } from '../src/data/vocabulary.malagasy';
import { VOCABULARY_LIST_ES } from '../src/data/vocabulary.spanish';
import { VOCABULARY_LIST_PT } from '../src/data/vocabulary.portuguese';
import { DIALECTS } from '../src/data/dialects';
import { DialectId, VocabItem } from '../src/types';

const BASE = process.env.PREGEN_BASE || 'https://yallaspeak.lekibbitz.fr';

// Kept in sync with DIALECT_TTS_NAMES (src/lib/audio.ts); duplicated here so
// the script never drags browser-only code into a node bundle. Packs run in
// order: cached clips fly by, so each daily quota window drains into the
// first pack that still has uncached clips.
const PACKS: { vocabulary: VocabItem[]; variants: Partial<Record<DialectId, string>> }[] = [
  // Thai first: it is the pack currently being tested in prod, so tomorrow's
  // quota window fills its cache before the untouched packs.
  {
    vocabulary: VOCABULARY_LIST_TH,
    variants: {
      thai_central: 'Central Thai',
      isan: 'Isan Thai',
      thai_nord: 'Northern Thai'
    }
  },
  {
    vocabulary: VOCABULARY_LIST_IT,
    variants: {
      italien_standard: 'Standard Italian',
      milanais: 'Northern Italian',
      romanesco: 'Roman Italian',
      napolitain: 'Neapolitan Italian'
    }
  },
  {
    vocabulary: VOCABULARY_LIST_MD,
    variants: {
      mandarin_standard: 'Standard Mandarin Chinese',
      pekinois: 'Beijing Mandarin Chinese',
      taiwanais: 'Taiwanese Mandarin Chinese',
      dongbei: 'Northeastern Mandarin Chinese'
    }
  },
  {
    vocabulary: VOCABULARY_LIST_JP,
    variants: {
      japonais_standard: 'Standard Japanese',
      kansai: 'Kansai Japanese',
      hakata: 'Hakata Japanese'
    }
  },
  {
    vocabulary: VOCABULARY_LIST_RU,
    variants: {
      russe_standard: 'Standard Russian',
      piterski: 'Saint Petersburg Russian',
      russe_sud: 'Southern Russian'
    }
  },
  {
    vocabulary: VOCABULARY_LIST_EL,
    variants: {
      grec_standard: 'Standard Greek',
      cretois: 'Cretan Greek',
      chypriote: 'Cypriot Greek'
    }
  },
  {
    vocabulary: VOCABULARY_LIST_MG,
    variants: {
      merina: 'Merina Malagasy',
      cotier: 'Coastal Malagasy'
    }
  },
  {
    vocabulary: VOCABULARY_LIST_ES,
    variants: {
      castillan: 'Castilian Spanish',
      andalou: 'Andalusian Spanish',
      mexicain: 'Mexican Spanish',
      argentin: 'Argentine Spanish'
    }
  },
  {
    vocabulary: VOCABULARY_LIST_PT,
    variants: {
      portugais_pt: 'European Portuguese',
      bresilien: 'Brazilian Portuguese',
      angolais: 'Angolan Portuguese'
    }
  }
];

interface Job { label: string; dialect: string; text: string; written: string; }

const jobs: Job[] = [];
for (const pack of PACKS) {
  for (const [variantId, ttsName] of Object.entries(pack.variants) as [DialectId, string][]) {
    const sig = DIALECTS[variantId].signatureWord;
    jobs.push({ label: `${variantId}/signature`, dialect: ttsName, text: sig.word, written: sig.arabic });
    for (const item of pack.vocabulary) {
      const v = item.dialects?.[variantId];
      jobs.push({
        label: `${variantId}/${item.id}`,
        dialect: ttsName,
        text: v?.phonetic || item.phonetic,
        written: v?.arabic || item.arabic
      });
    }
  }
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function main() {
  let ok = 0, failed = 0, bytes = 0;
  const t0 = Date.now();
  for (const [i, job] of jobs.entries()) {
    const url = `${BASE}/api/tts?dialect=${encodeURIComponent(job.dialect)}&text=${encodeURIComponent(job.text)}&arabic=${encodeURIComponent(job.written)}`;
    let attempts = 0;
    let cacheHit = false;
    while (true) {
      attempts++;
      try {
        const tReq = Date.now();
        const res = await fetch(url);
        if (res.ok) {
          const buf = await res.arrayBuffer();
          bytes += buf.byteLength;
          ok++;
          // A sub-second response is a disk cache hit on the server: no Gemini
          // call happened, so no need to pace for the per-minute quota.
          cacheHit = Date.now() - tReq < 1000;
          console.log(`[${i + 1}/${jobs.length}] OK ${job.label} (${(buf.byteLength / 1024).toFixed(0)} kB${cacheHit ? ', cached' : ''})`);
          break;
        }
        const body = await res.text();
        if (res.status === 429 && attempts <= 5) {
          const retryAfter = Number(JSON.parse(body).retryAfter) || 60;
          if (retryAfter > 600) {
            // Not a per-minute rate limit: daily quota or depleted credits.
            console.log(`[${i + 1}/${jobs.length}] 429 retryAfter=${retryAfter}s on ${job.label}, credits/daily quota exhausted, aborting.`);
            failed++;
            printSummary(ok, failed, bytes, t0);
            return;
          }
          console.log(`[${i + 1}/${jobs.length}] rate limited on ${job.label}, waiting ${retryAfter + 2}s...`);
          await sleep((retryAfter + 2) * 1000);
          continue;
        }
        failed++;
        console.log(`[${i + 1}/${jobs.length}] HTTP ${res.status} ${job.label}: ${body.slice(0, 120)}`);
        break;
      } catch (e) {
        if (attempts <= 5) {
          console.log(`[${i + 1}/${jobs.length}] network error on ${job.label}, retrying in 10s: ${e}`);
          await sleep(10000);
          continue;
        }
        failed++;
        console.log(`[${i + 1}/${jobs.length}] ERROR ${job.label}: ${e}`);
        break;
      }
    }
    // ~8 requests/min steady state to stay under the tier 1 per-minute quota.
    if (!cacheHit) await sleep(7000);
  }
  printSummary(ok, failed, bytes, t0);
}

function printSummary(ok: number, failed: number, bytes: number, t0: number) {
  const mins = ((Date.now() - t0) / 60000).toFixed(1);
  console.log(`\nDone: ${ok} generated/cached, ${failed} failed, ${(bytes / 1024 / 1024).toFixed(1)} MB of audio, ${mins} min.`);
}

main();
