import { DialectId } from '../types';
import {
  isServerAudioUnavailable,
  markServerAudioUnavailable,
  speakNatively,
  ttsUrl
} from './audio';

/* ------------------------------------------------------------------ *
 * Speaking
 * ------------------------------------------------------------------ */

export interface SpokenLine {
  /** 'fr' = the coach talking, 'ar' = something to repeat */
  lang: 'fr' | 'ar';
  /** French sentence, or the phonetic transcription of the Arabic */
  text: string;
  /** Arabic script, when there is one */
  arabic?: string;
  rate?: number;
}

/** Cancels whatever is currently being said, whichever path is playing it. */
let currentAudio: HTMLAudioElement | null = null;

export function stopSpeaking(): void {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.src = '';
    currentAudio = null;
  }
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
}

function nativeSpeak(line: SpokenLine): Promise<void> {
  return new Promise((resolve) => {
    speakNatively(line.text, line.lang === 'ar' ? line.arabic : undefined, {
      onEnd: resolve,
      rate: line.rate
    });
  });
}

/**
 * Says one line and resolves when it is actually finished.
 *
 * Arabic goes through the server voice when it can: it is the only one that
 * pronounces the dialect properly. But the daily quota runs out, and a session
 * in the middle of a workout cannot stop for that, so every line falls back to
 * the browser voice rather than going silent.
 */
export async function speakLine(line: SpokenLine, dialect: DialectId): Promise<void> {
  const spokenText = line.arabic || line.text;
  if (!spokenText) return;

  if (line.lang === 'fr') return nativeSpeak(line);

  const url = ttsUrl(dialect, line.text, line.arabic);
  if (isServerAudioUnavailable(url)) return nativeSpeak(line);

  try {
    await new Promise<void>((resolve, reject) => {
      const audio = new Audio(url);
      audio.playbackRate = line.rate ?? 1;
      currentAudio = audio;
      audio.onended = () => {
        if (currentAudio === audio) currentAudio = null;
        resolve();
      };
      audio.onerror = () => {
        if (currentAudio === audio) currentAudio = null;
        markServerAudioUnavailable(url);
        reject(new Error('tts-unavailable'));
      };
      audio.play().catch(reject);
    });
  } catch {
    // A paused session is not a failure: only fall back if we were not stopped
    if (currentAudio === null && !('speechSynthesis' in window)) return;
    await nativeSpeak(line);
  }
}

/** Says a whole block in order, stopping the moment `isCancelled` turns true. */
export async function speakSequence(
  lines: SpokenLine[],
  dialect: DialectId,
  isCancelled: () => boolean,
  onLine?: (index: number) => void
): Promise<void> {
  for (let i = 0; i < lines.length; i++) {
    if (isCancelled()) return;
    onLine?.(i);
    await speakLine(lines[i], dialect);
  }
}

/* ------------------------------------------------------------------ *
 * Listening
 * ------------------------------------------------------------------ */

type RecognitionCtor = new () => any;

function getRecognitionCtor(): RecognitionCtor | null {
  const w = window as any;
  return w.SpeechRecognition || w.webkitSpeechRecognition || null;
}

export function isListeningSupported(): boolean {
  return getRecognitionCtor() !== null;
}

export interface ListenHandle {
  /** Resolves with what was heard, or '' if the window closed on silence */
  result: Promise<string>;
  abort: () => void;
}

/**
 * Opens the mic for one answer.
 *
 * Recognition is asked for French: the user thinks and gives his instructions in
 * French, and his Arabic repetitions only need to be *detected*, not
 * transcribed. `no-speech` is the normal case here, not an error: between two
 * sets he often says nothing at all.
 */
export function listenOnce(timeoutMs = 6000): ListenHandle {
  const Ctor = getRecognitionCtor();
  if (!Ctor) {
    return { result: Promise.resolve(''), abort: () => {} };
  }

  const recognition = new Ctor();
  recognition.lang = 'fr-FR';
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;

  let settled = false;
  let heard = '';
  let timer: number | undefined;

  const result = new Promise<string>((resolve) => {
    const finish = (value: string) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timer);
      try {
        recognition.stop();
      } catch {
        /* already stopped */
      }
      resolve(value.trim());
    };

    recognition.onresult = (event: any) => {
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const alt = event.results[i][0];
        if (!alt) continue;
        if (event.results[i].isFinal) return finish(alt.transcript || '');
        heard = alt.transcript || heard;
      }
    };
    recognition.onerror = () => finish(heard);
    recognition.onend = () => finish(heard);

    timer = window.setTimeout(() => finish(heard), timeoutMs);

    try {
      recognition.start();
    } catch {
      finish('');
    }
  });

  return {
    result,
    abort: () => {
      try {
        recognition.abort();
      } catch {
        /* already gone */
      }
    }
  };
}

/* ------------------------------------------------------------------ *
 * Voice commands
 *
 * Matched locally, before anything is sent to the network: switching theme or
 * saying "stop" must work instantly and must keep working when the AI quota is
 * spent or the phone drops off the network mid-session.
 * ------------------------------------------------------------------ */

export type VoiceCommand =
  | { kind: 'theme'; theme: string }
  | { kind: 'repeat' }
  | { kind: 'next' }
  | { kind: 'slower' }
  | { kind: 'faster' }
  | { kind: 'pause' }
  | { kind: 'quit' };

const THEME_WORDS: Record<string, string[]> = {
  rue: ['rue', 'argot', 'quotidien', 'la street'],
  sons: ['son', 'sons', 'prononciation', 'prononcer', 'lettre', 'lettres', 'alphabet'],
  compter: ['compter', 'chiffre', 'chiffres', 'nombre', 'nombres', 'compte'],
  resto: ['resto', 'restaurant', 'café', 'cafe', 'manger', 'commander'],
  taxi: ['taxi', 'direction', 'directions', 'chemin', 'route'],
  souk: ['souk', 'négocier', 'negocier', 'marchander', 'prix', 'achat'],
  libre: ['libre', 'discuter', 'discussion', 'parler', 'conversation', 'dialogue']
};

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function parseCommand(transcript: string): VoiceCommand | null {
  const text = normalize(transcript);
  if (!text) return null;

  if (/\b(stop|arrete|arreter|pause|silence|chut)\b/.test(text)) return { kind: 'pause' };
  if (/\b(quitte|quitter|ferme|fermer|termine|terminer|fini)\b/.test(text)) return { kind: 'quit' };

  // Themes come before "suivant": "passe aux chiffres" is a switch, not a skip,
  // and both sentences start with the same verb.
  const wantsSwitch = /\b(je veux|on (va|fait)|passe|passons|change|plutot|maintenant|apprend|apprendre|entraine|revise|reviser)\b/.test(
    text
  );
  if (wantsSwitch) {
    for (const [theme, words] of Object.entries(THEME_WORDS)) {
      if (words.some((word) => text.includes(normalize(word)))) return { kind: 'theme', theme };
    }
  }

  if (/\b(encore|repete|repeter|redis|rejoue)\b/.test(text)) return { kind: 'repeat' };
  if (/\b(suivant|suivante|passe|next|autre chose)\b/.test(text)) return { kind: 'next' };
  if (/\b(moins vite|plus lentement|lentement|doucement)\b/.test(text)) return { kind: 'slower' };
  if (/\b(plus vite|plus rapide|accelere)\b/.test(text)) return { kind: 'faster' };

  return null;
}

/**
 * A repetition or a real question?
 *
 * Recognition is running in French, so an Arabic repetition comes back as one
 * or two garbled words. Anything longer, or anything shaped like a question, is
 * meant for the coach and is worth a network round trip.
 */
export function looksLikeQuestion(transcript: string): boolean {
  const text = normalize(transcript);
  if (!text) return false;
  if (/\b(comment|pourquoi|quoi|qu est ce|c est quoi|est ce que|explique|dis moi|je veux|je comprends|traduis)\b/.test(text)) {
    return true;
  }
  return text.split(' ').length >= 4;
}

/* ------------------------------------------------------------------ *
 * Screen wake lock
 * ------------------------------------------------------------------ */

/**
 * Keeps the screen on for the length of the session. Not for looking at it: a
 * locked screen suspends the page, which kills both the speech queue and the
 * mic mid-set.
 */
export async function keepScreenAwake(): Promise<() => void> {
  const nav = navigator as any;
  if (!nav.wakeLock?.request) return () => {};
  try {
    let sentinel = await nav.wakeLock.request('screen');
    // The lock is dropped whenever the tab is hidden, and never comes back on
    // its own: re-take it when the user comes back to the app.
    const onVisible = async () => {
      if (document.visibilityState !== 'visible') return;
      try {
        sentinel = await nav.wakeLock.request('screen');
      } catch {
        /* denied, the session still works */
      }
    };
    document.addEventListener('visibilitychange', onVisible);
    return () => {
      document.removeEventListener('visibilitychange', onVisible);
      sentinel?.release?.().catch(() => {});
    };
  } catch {
    return () => {};
  }
}
