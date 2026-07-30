import { DialectId } from '../types';

export const DIALECT_TTS_NAMES: Record<DialectId, string> = {
  levantin: 'Levantine Arabic',
  egyptien: 'Egyptian Arabic',
  darija: 'Moroccan Arabic',
  golfe: 'Gulf Arabic',
  italien_standard: 'Standard Italian',
  milanais: 'Northern Italian',
  romanesco: 'Roman Italian',
  napolitain: 'Neapolitan Italian'
};

/**
 * Audio is served by a GET endpoint with an immutable Cache-Control, so the
 * browser HTTP cache does the caching for us: same phrase = same URL = 0 ms
 * on every replay, across reloads and across components.
 */
export function ttsUrl(dialect: DialectId, text: string, arabicText?: string): string {
  const params = new URLSearchParams({
    dialect: DIALECT_TTS_NAMES[dialect] || DIALECT_TTS_NAMES.levantin,
    text: text || ''
  });
  if (arabicText) params.set('arabic', arabicText);
  return `/api/tts?${params.toString()}`;
}

/**
 * Server audio that just failed, with the moment it is worth trying again.
 *
 * Without this, a spent daily quota means every single click pays the network
 * round trip again before falling back to the browser voice. Shared between the
 * prefetcher and the player so one failure teaches both.
 */
const unavailableUntil = new Map<string, number>();
const DEFAULT_COOLDOWN_MS = 10 * 60_000;

export function isServerAudioUnavailable(url: string): boolean {
  const until = unavailableUntil.get(url);
  if (until === undefined) return false;
  if (Date.now() >= until) {
    unavailableUntil.delete(url);
    return false;
  }
  return true;
}

/** `retryAfter` comes from the server in seconds, capped so a daily quota does not pin the whole session. */
export function markServerAudioUnavailable(url: string, retryAfterSeconds?: number): void {
  const ms =
    retryAfterSeconds && retryAfterSeconds > 0
      ? Math.min(retryAfterSeconds * 1000, 30 * 60_000)
      : DEFAULT_COOLDOWN_MS;
  unavailableUntil.set(url, Date.now() + ms);
}

export function clearServerAudioFailure(url: string): void {
  unavailableUntil.delete(url);
}

/** Warm the HTTP cache ahead of the click (next flashcard, next dialogue line). */
const prefetched = new Set<string>();

export function prefetchAudio(dialect: DialectId, text: string, arabicText?: string): void {
  if (!text && !arabicText) return;
  const url = ttsUrl(dialect, text, arabicText);
  if (prefetched.has(url) || isServerAudioUnavailable(url)) return;
  prefetched.add(url);
  fetch(url, { method: 'GET', cache: 'force-cache' })
    .then((response) => {
      if (response.ok) return;
      // A quota 429 is temporary: forget it so the next visit retries
      prefetched.delete(url);
      const retryAfter = Number(response.headers.get('Retry-After'));
      markServerAudioUnavailable(url, Number.isFinite(retryAfter) ? retryAfter : undefined);
    })
    .catch(() => prefetched.delete(url));
}

/**
 * speechSynthesis.getVoices() is empty on the first call in Chrome: the list
 * arrives asynchronously. Resolving it before speaking is what makes the
 * fallback audible instead of silent.
 */
let voicesPromise: Promise<SpeechSynthesisVoice[]> | null = null;

export function getVoicesReady(): Promise<SpeechSynthesisVoice[]> {
  if (voicesPromise) return voicesPromise;
  voicesPromise = new Promise((resolve) => {
    if (!('speechSynthesis' in window)) return resolve([]);
    const existing = window.speechSynthesis.getVoices();
    if (existing.length) return resolve(existing);

    const timer = setTimeout(() => resolve(window.speechSynthesis.getVoices()), 2000);
    window.speechSynthesis.addEventListener(
      'voiceschanged',
      () => {
        clearTimeout(timer);
        resolve(window.speechSynthesis.getVoices());
      },
      { once: true }
    );
  });
  return voicesPromise;
}

/** Chrome silently pauses the speech queue; a periodic resume() keeps it running. */
function keepSpeechAlive(): () => void {
  const interval = setInterval(() => {
    if (window.speechSynthesis.speaking) window.speechSynthesis.resume();
  }, 5000);
  return () => clearInterval(interval);
}

export interface SpeakOptions {
  onStart?: () => void;
  onEnd?: () => void;
  /** 1 = normal. The hands-free drill slows the second pass down so it can be copied. */
  rate?: number;
}

/** Last-resort fallback: native synthesis, only when the server audio failed. */
export async function speakNatively(
  text: string,
  arabicText: string | undefined,
  options: SpeakOptions = {}
): Promise<void> {
  if (!('speechSynthesis' in window)) {
    options.onEnd?.();
    return;
  }

  const voices = await getVoicesReady();
  const arabicVoice = voices.find((v) => v.lang.toLowerCase().startsWith('ar'));

  // Reading Arabic script with a French voice produces gibberish or silence:
  // without an Arabic voice installed, speak the phonetic transcription instead.
  const useArabic = Boolean(arabicText) && Boolean(arabicVoice);
  const spoken = (useArabic ? arabicText : text) || arabicText || text;
  if (!spoken) {
    options.onEnd?.();
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(spoken);
  const voice = useArabic
    ? arabicVoice
    : voices.find((v) => v.lang.toLowerCase().startsWith('fr'));
  if (voice) {
    utterance.voice = voice;
    utterance.lang = voice.lang;
  } else {
    utterance.lang = useArabic ? 'ar' : 'fr-FR';
  }
  utterance.rate = options.rate ?? 0.9;

  const stopKeepAlive = keepSpeechAlive();
  let settled = false;
  const finish = () => {
    if (settled) return;
    settled = true;
    stopKeepAlive();
    clearTimeout(guard);
    options.onEnd?.();
  };

  // Chrome sometimes fires neither onend nor onerror: bound the visual state
  const guard = setTimeout(finish, Math.max(4000, spoken.length * 200));

  utterance.onstart = () => options.onStart?.();
  utterance.onend = finish;
  utterance.onerror = finish;

  // A speak() issued in the same tick as cancel() is dropped by Chrome
  setTimeout(() => window.speechSynthesis.speak(utterance), 60);
}
