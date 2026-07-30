import React, { useEffect, useRef, useState } from 'react';
import { Volume2, Loader2 } from 'lucide-react';
import { DialectId } from '../types';
import {
  clearServerAudioFailure,
  isServerAudioUnavailable,
  markServerAudioUnavailable,
  speakNatively,
  ttsUrl
} from '../lib/audio';

interface AudioPlayerButtonProps {
  text: string;
  arabicText?: string;
  dialect: DialectId;
  label?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

type PlayerState = 'idle' | 'loading' | 'playing';

// One <audio> per phrase, kept for the whole session: replays are instant and
// the HTTP layer (immutable Cache-Control) survives reloads.
const audioElements = new Map<string, HTMLAudioElement>();
const MAX_ELEMENTS = 120;

// Generation takes up to ~5 s on a cold cache; past that the load is stuck.
const STALL_TIMEOUT_MS = 9000;

/** HAVE_CURRENT_DATA: enough is buffered that play() starts on this frame. */
const READY_TO_PLAY = 2;

function getAudioElement(url: string): HTMLAudioElement {
  const existing = audioElements.get(url);
  if (existing) return existing;

  if (audioElements.size >= MAX_ELEMENTS) {
    const oldest = audioElements.keys().next().value;
    if (oldest) audioElements.delete(oldest);
  }
  const audio = new Audio(url);
  audio.preload = 'auto';
  audioElements.set(url, audio);
  return audio;
}

// Only one phrase plays at a time across the whole app
let currentAudio: HTMLAudioElement | null = null;

export const AudioPlayerButton: React.FC<AudioPlayerButtonProps> = ({
  text,
  arabicText,
  dialect,
  label,
  className = '',
  size = 'md'
}) => {
  const [state, setState] = useState<PlayerState>('idle');
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  const url = ttsUrl(dialect, text, arabicText);

  const set = (next: PlayerState) => {
    if (mounted.current) setState(next);
  };

  const playAudio = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (state !== 'idle') return;

    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();

    // The server just refused this phrase (spent quota): asking again only buys
    // a round trip before the same fallback. Speak now instead.
    if (isServerAudioUnavailable(url)) {
      set('playing');
      await speakNatively(text, arabicText, { onEnd: () => set('idle') });
      return;
    }

    const audio = getAudioElement(url);
    currentAudio = audio;
    audio.currentTime = 0;
    // Already buffered from a previous play: no spinner, no perceived latency
    set(audio.readyState >= READY_TO_PLAY ? 'playing' : 'loading');

    let settled = false;

    const cleanup = () => {
      clearTimeout(watchdog);
      audio.onplaying = null;
      audio.onended = null;
      audio.onerror = null;
    };

    // A stalled media load fires neither `playing` nor `error`, and play() never
    // settles: without this the button would spin forever.
    const fallback = () => {
      if (settled) return;
      settled = true;
      cleanup();
      audio.pause();
      audioElements.delete(url);
      // Remembered app-wide: the next click on this phrase skips the server
      markServerAudioUnavailable(url);
      set('playing');
      speakNatively(text, arabicText, { onEnd: () => set('idle') });
    };

    const watchdog = window.setTimeout(fallback, STALL_TIMEOUT_MS);

    audio.onplaying = () => {
      settled = true;
      clearTimeout(watchdog);
      clearServerAudioFailure(url);
      set('playing');
    };
    audio.onended = () => {
      cleanup();
      set('idle');
    };
    audio.onerror = fallback;

    try {
      await audio.play();
    } catch {
      // Autoplay policy or codec refusal: fall back to native synthesis
      fallback();
    }
  };

  const sizeClasses = {
    sm: 'p-1.5 text-xs gap-1',
    md: 'p-2 text-sm gap-1.5',
    lg: 'p-3 text-base gap-2'
  }[size];

  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  }[size];

  return (
    <button
      onClick={playAudio}
      disabled={state !== 'idle'}
      aria-label={label || 'Écouter la prononciation'}
      title="Écouter la prononciation"
      className={`inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 ${
        state === 'playing'
          ? 'bg-accent text-white shadow-md animate-pulse'
          : state === 'loading'
          ? 'bg-stone-700 text-stone-300 cursor-wait'
          : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow active:scale-95'
      } ${sizeClasses} ${className}`}
    >
      {state === 'loading' ? (
        <Loader2 className={`${iconSizes} animate-spin`} />
      ) : (
        <Volume2 className={iconSizes} />
      )}
      {label && <span>{label}</span>}
    </button>
  );
};
