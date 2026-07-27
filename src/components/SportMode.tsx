import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Dumbbell, Mic, Pause, Play, Volume2, X, Loader2, AlertTriangle } from 'lucide-react';
import { DialectId } from '../types';
import { DIALECT_TTS_NAMES } from '../lib/audio';
import {
  isListeningSupported,
  listenOnce,
  keepScreenAwake,
  looksLikeQuestion,
  parseCommand,
  speakSequence,
  stopSpeaking,
  SpokenLine
} from '../lib/handsfree';
import {
  buildDeck,
  DEFAULT_SPORT_THEME,
  DrillCard,
  findTheme,
  SPORT_THEMES
} from '../data/sportThemes';

interface SportModeProps {
  dialect: DialectId;
  onClose: () => void;
}

type Phase = 'ready' | 'speaking' | 'listening' | 'thinking' | 'paused';

const PHASE_LABEL: Record<Phase, string> = {
  ready: 'Prêt',
  speaking: 'Le coach parle',
  listening: 'À toi',
  thinking: 'Le coach réfléchit',
  paused: 'En pause'
};

/** Long enough to repeat a phrase between two reps, short enough to keep the pace. */
const LISTEN_MS = 6500;
/** Without a mic, the same pause has to be held blind. */
const BLIND_PAUSE_MS = 4000;
/** The browser fires onend a hair before the sound dies; the mic must not hear the coach. */
const GAP_MS = 300;

const PRAISE = ['Batal !', 'Yalla, encore.', 'Voilà.', 'Bien.', 'Continue comme ça.'];

interface CoachReply {
  reply: string;
  drill: { arabic: string; phonetic: string; french: string }[];
  askBack: string;
}

const delay = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

/**
 * Hands-free session: the app talks, listens, and answers, so a whole workout
 * can go by without the screen being touched once.
 *
 * The deck is local and the coach is optional on purpose. A drill that stops
 * because a daily AI quota ran out mid-set is worse than no drill at all, so
 * everything that matters (the phrases, the theme switching, the pacing)
 * works with the network off, and Gemini only comes in to answer a real
 * question.
 */
export const SportMode: React.FC<SportModeProps> = ({ dialect, onClose }) => {
  const [phase, setPhase] = useState<Phase>('ready');
  const [themeId, setThemeId] = useState(DEFAULT_SPORT_THEME);
  const [card, setCard] = useState<DrillCard | null>(null);
  const [heard, setHeard] = useState('');
  const [coachLine, setCoachLine] = useState('');
  const [count, setCount] = useState(0);
  const micSupported = isListeningSupported();

  // The loop is a plain async function, not a chain of effects: every step
  // waits on the previous one to *finish speaking*, which no render cycle knows.
  const aliveRef = useRef(false);
  const themeRef = useRef(themeId);
  const deckRef = useRef<DrillCard[]>([]);
  const cursorRef = useRef(0);
  const rateRef = useRef(1);
  const pendingRef = useRef<SpokenLine[] | null>(null);
  const replayRef = useRef(false);
  const historyRef = useRef<{ role: 'coach' | 'eleve'; text: string }[]>([]);
  const listenRef = useRef<{ abort: () => void } | null>(null);
  const seedRef = useRef(1);
  const introducedRef = useRef(false);
  const releaseWakeLockRef = useRef<(() => void) | null>(null);

  const cancelled = useCallback(() => !aliveRef.current, []);

  const loadDeck = useCallback(
    (id: string) => {
      seedRef.current = seedRef.current * 31 + id.length + 7;
      deckRef.current = buildDeck(id, dialect, seedRef.current);
      cursorRef.current = 0;
    },
    [dialect]
  );

  const say = useCallback(
    async (lines: SpokenLine[]) => {
      if (!lines.length) return;
      setPhase('speaking');
      const paced = lines.map((line) => ({ ...line, rate: (line.rate ?? 1) * rateRef.current }));
      await speakSequence(paced, dialect, cancelled);
      await delay(GAP_MS);
    },
    [dialect, cancelled]
  );

  const cardLines = useCallback((item: DrillCard, withTip: boolean): SpokenLine[] => {
    const lines: SpokenLine[] = [
      { lang: 'fr', text: item.french },
      { lang: 'ar', text: item.phonetic, arabic: item.arabic },
      { lang: 'ar', text: item.phonetic, arabic: item.arabic, rate: 0.75 }
    ];
    if (withTip && item.tip) lines.push({ lang: 'fr', text: item.tip });
    return lines;
  }, []);

  const askCoach = useCallback(
    async (utterance: string): Promise<SpokenLine[]> => {
      setPhase('thinking');
      try {
        const response = await fetch('/api/gemini/sport', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            utterance,
            theme: themeRef.current,
            dialect: DIALECT_TTS_NAMES[dialect],
            history: historyRef.current.slice(-8)
          })
        });
        if (!response.ok) throw new Error(String(response.status));
        const data: CoachReply = await response.json();

        historyRef.current.push({ role: 'eleve', text: utterance });
        historyRef.current.push({ role: 'coach', text: data.reply });
        setCoachLine(data.reply);

        const lines: SpokenLine[] = [];
        if (data.reply) lines.push({ lang: 'fr', text: data.reply });
        for (const item of data.drill || []) {
          if (item.french) lines.push({ lang: 'fr', text: item.french });
          lines.push({ lang: 'ar', text: item.phonetic, arabic: item.arabic });
          lines.push({ lang: 'ar', text: item.phonetic, arabic: item.arabic, rate: 0.75 });
        }
        if (data.askBack) lines.push({ lang: 'fr', text: data.askBack });
        return lines;
      } catch {
        // Never strand the session on a network or quota failure: the local deck
        // is right there and the user is mid-set.
        setCoachLine('');
        return [{ lang: 'fr', text: "Le coach ne répond pas là. On continue l'entraînement." }];
      }
    },
    [dialect]
  );

  const switchTheme = useCallback(
    (id: string) => {
      const theme = findTheme(id);
      themeRef.current = theme.id;
      setThemeId(theme.id);
      loadDeck(theme.id);
      historyRef.current = [];
      pendingRef.current = [{ lang: 'fr', text: `On passe à ${theme.spoken}.` }];
    },
    [loadDeck]
  );

  const handleTranscript = useCallback(
    async (transcript: string) => {
      if (!transcript) return;
      setHeard(transcript);

      const command = parseCommand(transcript);
      if (command) {
        switch (command.kind) {
          case 'pause':
            aliveRef.current = false;
            setPhase('paused');
            return;
          case 'quit':
            aliveRef.current = false;
            onClose();
            return;
          case 'theme':
            switchTheme(command.theme);
            return;
          case 'repeat':
            replayRef.current = true;
            return;
          case 'next':
            return;
          case 'slower':
            rateRef.current = Math.max(0.6, rateRef.current - 0.15);
            pendingRef.current = [{ lang: 'fr', text: 'Je ralentis.' }];
            return;
          case 'faster':
            rateRef.current = Math.min(1.4, rateRef.current + 0.15);
            pendingRef.current = [{ lang: 'fr', text: "J'accélère." }];
            return;
        }
      }

      if (looksLikeQuestion(transcript)) {
        pendingRef.current = await askCoach(transcript);
        return;
      }

      // Anything else is him repeating the phrase out loud: acknowledge sometimes,
      // stay out of the way the rest of the time.
      if (Math.random() < 0.35) {
        pendingRef.current = [{ lang: 'fr', text: PRAISE[Math.floor(Math.random() * PRAISE.length)] }];
      }
    },
    [askCoach, onClose, switchTheme]
  );

  const runLoop = useCallback(async () => {
    let spoken = 0;

    while (aliveRef.current) {
      const pending = pendingRef.current;
      pendingRef.current = null;

      if (pending) {
        await say(pending);
      } else {
        if (!deckRef.current.length) loadDeck(themeRef.current);
        if (cursorRef.current >= deckRef.current.length) cursorRef.current = 0;

        if (replayRef.current) {
          replayRef.current = false;
          cursorRef.current = Math.max(0, cursorRef.current - 1);
        }

        const current = deckRef.current[cursorRef.current];
        if (!current) break;
        cursorRef.current += 1;
        setCard(current);
        setCoachLine('');
        setCount((n) => n + 1);

        // The pronunciation tips are the whole point of the "sons" theme; on the
        // other decks they turn into chatter if they come with every card.
        const withTip = themeRef.current === 'sons' || spoken % 3 === 0;
        spoken += 1;
        await say(cardLines(current, withTip));
      }

      if (!aliveRef.current) break;

      if (!micSupported) {
        setPhase('listening');
        await delay(BLIND_PAUSE_MS);
        continue;
      }

      setPhase('listening');
      const handle = listenOnce(LISTEN_MS);
      listenRef.current = handle;
      const transcript = await handle.result;
      listenRef.current = null;
      if (!aliveRef.current) break;
      await handleTranscript(transcript);
    }
  }, [say, cardLines, handleTranscript, loadDeck, micSupported]);

  const start = useCallback(async () => {
    if (aliveRef.current) return;
    aliveRef.current = true;

    releaseWakeLockRef.current?.();
    releaseWakeLockRef.current = await keepScreenAwake();

    if (!deckRef.current.length) loadDeck(themeRef.current);

    // The rules are said once. Hearing them again at every "reprendre" would be
    // twenty seconds of lecture between two sets.
    if (!introducedRef.current) {
      introducedRef.current = true;
      const theme = findTheme(themeRef.current);
      pendingRef.current = [
        {
          lang: 'fr',
          text: `Mode sport. On travaille ${theme.spoken}. Répète après moi. Pour changer, dis par exemple : je veux compter. Dis stop pour mettre en pause. Yalla !`
        }
      ];
    }
    runLoop();
  }, [loadDeck, runLoop]);

  const pause = useCallback(() => {
    aliveRef.current = false;
    listenRef.current?.abort();
    listenRef.current = null;
    stopSpeaking();
    setPhase('paused');
  }, []);

  const close = useCallback(() => {
    aliveRef.current = false;
    listenRef.current?.abort();
    stopSpeaking();
    releaseWakeLockRef.current?.();
    releaseWakeLockRef.current = null;
    onClose();
  }, [onClose]);

  // Leaving the mode must never leave a voice talking in the background
  useEffect(() => {
    return () => {
      aliveRef.current = false;
      listenRef.current?.abort();
      stopSpeaking();
      releaseWakeLockRef.current?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [close]);

  const running = phase !== 'ready' && phase !== 'paused';
  const theme = findTheme(themeId);

  return (
    <div className="fixed inset-0 z-50 bg-stone-950 text-stone-100 flex flex-col animate-fadeIn">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-stone-800">
        <div className="flex items-center gap-2 min-w-0">
          <Dumbbell className="w-5 h-5 text-amber-400 shrink-0" />
          <span className="font-black tracking-tight truncate">Mode Sport</span>
          <span className="text-xs text-stone-500 hidden sm:inline">mains libres</span>
        </div>
        <div
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border ${
            phase === 'listening'
              ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40'
              : phase === 'speaking'
                ? 'bg-amber-500/15 text-amber-300 border-amber-500/40'
                : 'bg-stone-800 text-stone-400 border-stone-700'
          }`}
        >
          {phase === 'listening' && <Mic className="w-3.5 h-3.5" />}
          {phase === 'speaking' && <Volume2 className="w-3.5 h-3.5" />}
          {phase === 'thinking' && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
          {PHASE_LABEL[phase]}
        </div>
        <button
          onClick={close}
          aria-label="Fermer le mode sport"
          className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 border border-stone-700 active:scale-95"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* The card, sized to be read at arm's length */}
      <div className="flex-1 flex flex-col items-center justify-center px-5 text-center gap-4 overflow-y-auto">
        {coachLine ? (
          <p className="text-lg sm:text-2xl text-emerald-300 font-semibold max-w-2xl">{coachLine}</p>
        ) : null}

        {card ? (
          <>
            <p className="text-sm sm:text-base text-stone-400 uppercase tracking-wider font-bold">
              {card.french}
            </p>
            <p
              className="text-5xl sm:text-7xl text-amber-400 leading-tight"
              style={{ fontFamily: 'Amiri, serif' }}
              dir="rtl"
            >
              {card.arabic}
            </p>
            <p className="text-2xl sm:text-4xl font-black text-white">{card.phonetic}</p>
            {card.tip ? (
              <p className="text-sm text-stone-400 max-w-xl leading-relaxed">{card.tip}</p>
            ) : null}
          </>
        ) : (
          <div className="max-w-md space-y-3">
            <p className="text-2xl sm:text-3xl font-black text-white">
              Ton coach dans les oreilles
            </p>
            <p className="text-sm text-stone-400 leading-relaxed">
              Lance la séance, pose le téléphone et entraîne-toi. Le coach dit une phrase, tu la
              répètes, il enchaîne. Tu peux lui parler à tout moment : pose ta question, ou dis
              «&nbsp;je veux compter&nbsp;», «&nbsp;je veux les sons&nbsp;», «&nbsp;stop&nbsp;».
            </p>
          </div>
        )}

        {heard ? (
          <p className="text-xs text-stone-500 italic max-w-lg">Entendu : «&nbsp;{heard}&nbsp;»</p>
        ) : null}

        {!micSupported ? (
          <div className="flex items-start gap-2 text-left text-xs text-amber-300/90 bg-amber-500/10 border border-amber-500/25 rounded-2xl px-3 py-2 max-w-md">
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>
              Ce navigateur ne sait pas écouter : la séance se déroule quand même, avec une pause
              après chaque phrase pour que tu la répètes. Pour la commande vocale, utilise Chrome.
            </span>
          </div>
        ) : null}
      </div>

      {/* Themes: tappable, but every one of them is also a spoken command */}
      <div className="px-3 pb-2 overflow-x-auto no-scrollbar">
        <div className="flex gap-2 justify-start sm:justify-center min-w-max">
          {SPORT_THEMES.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                switchTheme(item.id);
                if (!aliveRef.current) {
                  // Nothing is running yet: just arm the theme, do not queue a line
                  pendingRef.current = null;
                }
              }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-bold border whitespace-nowrap transition-colors active:scale-95 ${
                item.id === themeId
                  ? 'bg-amber-500 text-stone-950 border-amber-300'
                  : 'bg-stone-900 text-stone-300 border-stone-800 hover:bg-stone-800'
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Controls: big enough to hit with sweaty hands, without looking */}
      <div className="px-4 pb-6 pt-2 border-t border-stone-800 flex items-center gap-3">
        <button
          onClick={running ? pause : start}
          className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-black text-lg border transition-colors active:scale-95 ${
            running
              ? 'bg-stone-800 text-stone-100 border-stone-700 hover:bg-stone-700'
              : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-400/40 shadow-lg shadow-emerald-900/40'
          }`}
        >
          {running ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          {running ? 'Pause' : phase === 'paused' ? 'Reprendre' : 'Démarrer la séance'}
        </button>
        <div className="text-right shrink-0">
          <div className="text-2xl font-black text-amber-400 leading-none">{count}</div>
          <div className="text-[10px] uppercase tracking-wider text-stone-500 font-bold">
            {theme.label}
          </div>
        </div>
      </div>
    </div>
  );
};
