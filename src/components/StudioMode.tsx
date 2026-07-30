import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Clapperboard,
  Mic,
  Square,
  Play,
  Loader2,
  Repeat,
  Layers,
  ArrowLeftRight,
  Headphones,
  Turtle,
  ChevronLeft,
  ChevronRight,
  XCircle,
  Volume2
} from 'lucide-react';
import { DialectId, VocabCategory, VocabItem } from '../types';
import { VOCABULARY_LIST } from '../data/vocabulary';
import { CATEGORIES_INFO } from '../data/dialects';
import { ttsUrl, markServerAudioUnavailable } from '../lib/audio';
import {
  computePeaks,
  fetchAudioBuffer,
  playSequence,
  playSlices,
  startRecording,
  PlaybackHandle,
  Recorder
} from '../lib/studio';

interface StudioModeProps {
  selectedDialect: DialectId;
  onAddXp: (amount: number) => void;
}

type Activity =
  | 'idle'
  | 'loading'
  | 'playing-ref'
  | 'recording'
  | 'playing-me'
  | 'playing-ab'
  | 'playing-overlay';

interface Selection {
  start: number;
  end: number;
}

/* ------------------------------------------------------------------ *
 * Waveform: canvas drawing + selection gestures
 * ------------------------------------------------------------------ */

interface WaveformProps {
  buffer: AudioBuffer | null;
  color: string;
  /** Position of the playhead in seconds, null = hidden. */
  playhead: number | null;
  selection?: Selection | null;
  onSelect?: (selection: Selection | null) => void;
  onSeekPreview?: (seconds: number) => void;
  emptyLabel: string;
  heightClass?: string;
}

const Waveform: React.FC<WaveformProps> = ({
  buffer,
  color,
  playhead,
  selection,
  onSelect,
  onSeekPreview,
  emptyLabel,
  heightClass = 'h-28'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef<number | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(() => setWidth(el.clientWidth));
    observer.observe(el);
    setWidth(el.clientWidth);
    return () => observer.disconnect();
  }, []);

  // Redraw on any visual change; peaks are cheap enough (<1 ms) to recompute
  // with the waveform, so no caching layer to keep in sync.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || width === 0) return;
    const height = canvas.clientHeight;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    const g = canvas.getContext('2d');
    if (!g) return;
    g.scale(dpr, dpr);
    g.clearRect(0, 0, width, height);
    if (!buffer) return;

    const mid = height / 2;
    const peaks = computePeaks(buffer, width);

    // Selection under the wave
    if (selection && onSelect) {
      const x1 = (selection.start / buffer.duration) * width;
      const x2 = (selection.end / buffer.duration) * width;
      g.fillStyle = 'rgba(245, 158, 11, 0.18)';
      g.fillRect(x1, 0, x2 - x1, height);
      g.fillStyle = 'rgba(245, 158, 11, 0.8)';
      g.fillRect(x1, 0, 1.5, height);
      g.fillRect(x2 - 1.5, 0, 1.5, height);
    }

    g.fillStyle = color;
    for (let x = 0; x < width; x++) {
      const min = peaks[x * 2];
      const max = peaks[x * 2 + 1];
      const top = mid + min * (mid - 4);
      const bottom = mid + max * (mid - 4);
      g.fillRect(x, Math.min(top, bottom), 1, Math.max(1, Math.abs(bottom - top)));
    }

    if (playhead !== null) {
      const x = (playhead / buffer.duration) * width;
      g.fillStyle = '#fafaf9';
      g.fillRect(x - 0.75, 0, 1.5, height);
    }
  }, [buffer, color, playhead, selection, width, onSelect]);

  const toSeconds = useCallback(
    (clientX: number): number => {
      const canvas = canvasRef.current;
      if (!canvas || !buffer) return 0;
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
      return ratio * buffer.duration;
    },
    [buffer]
  );

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!buffer || !onSelect) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    dragStart.current = toSeconds(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (dragStart.current === null || !onSelect) return;
    const now = toSeconds(e.clientX);
    onSelect({
      start: Math.min(dragStart.current, now),
      end: Math.max(dragStart.current, now)
    });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (dragStart.current === null || !onSelect || !buffer) return;
    const now = toSeconds(e.clientX);
    const start = Math.min(dragStart.current, now);
    const end = Math.max(dragStart.current, now);
    dragStart.current = null;
    // A drag shorter than 150 ms is a click: clear the loop, preview from there
    if (end - start < 0.15) {
      onSelect(null);
      onSeekPreview?.(start);
    } else {
      onSelect({ start, end });
    }
  };

  return (
    <div ref={containerRef} className={`relative w-full ${heightClass}`}>
      <canvas
        ref={canvasRef}
        className={`w-full h-full rounded-xl bg-stone-900/80 border border-stone-800 ${
          buffer && onSelect ? 'cursor-crosshair touch-none' : ''
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      />
      {!buffer && (
        <div className="absolute inset-0 flex items-center justify-center text-xs text-stone-500 pointer-events-none">
          {emptyLabel}
        </div>
      )}
    </div>
  );
};

/* ------------------------------------------------------------------ *
 * Studio
 * ------------------------------------------------------------------ */

export const StudioMode: React.FC<StudioModeProps> = ({ selectedDialect, onAddXp }) => {
  const [category, setCategory] = useState<VocabCategory | 'all'>('all');
  const [index, setIndex] = useState(0);
  const [refBuffer, setRefBuffer] = useState<AudioBuffer | null>(null);
  const [myBuffer, setMyBuffer] = useState<AudioBuffer | null>(null);
  const [selection, setSelection] = useState<Selection | null>(null);
  const [activity, setActivity] = useState<Activity>('idle');
  const [refHead, setRefHead] = useState<number | null>(null);
  const [myHead, setMyHead] = useState<number | null>(null);
  const [slow, setSlow] = useState(false);
  const [stereoSplit, setStereoSplit] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rewardedIds, setRewardedIds] = useState<Set<string>>(() => new Set());

  const playbackRef = useRef<PlaybackHandle | null>(null);
  const recorderRef = useRef<Recorder | null>(null);

  const list = useMemo(
    () => VOCABULARY_LIST.filter((item) => category === 'all' || item.category === category),
    [category]
  );
  const item: VocabItem | undefined = list[index % (list.length || 1)];
  const variant = item?.dialects?.[selectedDialect];
  const phonetic = variant?.phonetic || item?.phonetic || '';
  const arabic = variant?.arabic || item?.arabic || '';

  const rate = slow ? 0.72 : 1;

  const stopAll = useCallback(() => {
    playbackRef.current?.stop();
    playbackRef.current = null;
    recorderRef.current?.cancel();
    recorderRef.current = null;
    setActivity('idle');
    setRefHead(null);
    setMyHead(null);
  }, []);

  // Load (and decode) the reference take whenever the phrase changes
  useEffect(() => {
    if (!item) return;
    let cancelled = false;
    stopAll();
    setRefBuffer(null);
    setMyBuffer(null);
    setSelection(null);
    setError(null);
    setActivity('loading');

    const url = ttsUrl(selectedDialect, phonetic, arabic);
    fetchAudioBuffer(url)
      .then((buffer) => {
        if (cancelled) return;
        setRefBuffer(buffer);
        setActivity('idle');
      })
      .catch((err: Error & { retryAfter?: number }) => {
        if (cancelled) return;
        markServerAudioUnavailable(url, err.retryAfter);
        setError("Audio de référence indisponible pour l'instant (quota TTS). Réessaie dans quelques minutes.");
        setActivity('idle');
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item?.id, selectedDialect]);

  useEffect(() => () => stopAll(), [stopAll]);

  const refSlice = useCallback(
    (pan?: number) =>
      refBuffer
        ? {
            buffer: refBuffer,
            start: selection?.start,
            end: selection?.end,
            pan
          }
        : null,
    [refBuffer, selection]
  );

  const run = (next: Activity, handle: PlaybackHandle) => {
    playbackRef.current?.stop();
    playbackRef.current = handle;
    setActivity(next);
    handle.done.then(() => {
      if (playbackRef.current === handle) {
        playbackRef.current = null;
        setActivity('idle');
        setRefHead(null);
        setMyHead(null);
      }
    });
  };

  /** Listen to the reference (or its selected slice) n times in a row. */
  const playReference = (times: 1 | 2 | 3) => {
    const slice = refSlice();
    if (!slice) return;
    const steps = Array.from({ length: times }, () => ({
      slices: [slice],
      onFrame: (positions: Array<number | null>) => setRefHead(positions[0])
    }));
    run('playing-ref', playSequence(steps, { rate }));
  };

  const playMine = () => {
    if (!myBuffer) return;
    run(
      'playing-me',
      playSlices([{ buffer: myBuffer }], {
        rate,
        onFrame: (positions) => setMyHead(positions[0])
      })
    );
  };

  /** Reference then my take, back to back — the ear catches the gap. */
  const playAB = () => {
    const slice = refSlice();
    if (!slice || !myBuffer) return;
    run(
      'playing-ab',
      playSequence(
        [
          { slices: [slice], onFrame: (p) => setRefHead(p[0]) },
          { slices: [{ buffer: myBuffer }], onFrame: (p) => setMyHead(p[0]) }
        ],
        { rate, gapMs: 300 }
      )
    );
  };

  /** Both takes at once; with headphones the split puts one voice per ear. */
  const playOverlay = () => {
    if (!refBuffer || !myBuffer) return;
    run(
      'playing-overlay',
      playSlices(
        [
          { buffer: refBuffer, pan: stereoSplit ? -0.9 : 0, gain: 0.9 },
          { buffer: myBuffer, pan: stereoSplit ? 0.9 : 0 }
        ],
        {
          rate,
          onFrame: (positions) => {
            setRefHead(positions[0]);
            setMyHead(positions[1]);
          }
        }
      )
    );
  };

  const toggleRecording = async () => {
    if (activity === 'recording') {
      const recorder = recorderRef.current;
      recorderRef.current = null;
      setActivity('idle');
      if (!recorder) return;
      try {
        const buffer = await recorder.stop();
        setMyBuffer(buffer);
        if (item && !rewardedIds.has(item.id)) {
          setRewardedIds((prev) => new Set(prev).add(item.id));
          onAddXp(10);
        }
      } catch {
        setError("Impossible de décoder l'enregistrement. Réessaie.");
      }
      return;
    }

    stopAll();
    setError(null);
    try {
      recorderRef.current = await startRecording();
      setActivity('recording');
    } catch {
      setError('Micro inaccessible : autorise le micro dans le navigateur pour enregistrer.');
    }
  };

  const previewFrom = (seconds: number) => {
    if (!refBuffer) return;
    run(
      'playing-ref',
      playSlices([{ buffer: refBuffer, start: seconds }], {
        rate,
        onFrame: (positions) => setRefHead(positions[0])
      })
    );
  };

  const changePhrase = (delta: number) => {
    if (!list.length) return;
    setIndex((prev) => (prev + delta + list.length) % list.length);
  };

  if (!item) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center text-stone-300">
        <p>Aucune phrase dans cette catégorie.</p>
        <button
          onClick={() => setCategory('all')}
          className="mt-4 bg-amber-500 text-stone-950 font-bold px-6 py-2 rounded-xl"
        >
          Tout le vocabulaire
        </button>
      </div>
    );
  }

  const busy = activity !== 'idle' && activity !== 'recording';
  const canCompare = Boolean(refBuffer && myBuffer);

  const controlBtn =
    'flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all active:scale-95 disabled:opacity-40 disabled:pointer-events-none';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rose-500 to-amber-500 flex items-center justify-center shadow-lg">
            <Clapperboard className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-black text-white">Studio Doublage</h2>
            <p className="text-xs text-stone-400">
              Écoute, sélectionne un passage, répète, compare ta voix à l'originale.
            </p>
          </div>
        </div>
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value as VocabCategory | 'all');
            setIndex(0);
          }}
          className="bg-stone-800 border border-stone-700 text-stone-200 text-xs sm:text-sm font-semibold rounded-xl px-3 py-2"
        >
          <option value="all">Toutes les catégories</option>
          {Object.entries(CATEGORIES_INFO).map(([key, info]) => (
            <option key={key} value={key}>
              {info.icon} {info.label}
            </option>
          ))}
        </select>
      </div>

      {/* Phrase card */}
      <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => changePhrase(-1)}
            className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 shrink-0"
            title="Phrase précédente"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="text-center space-y-1.5 min-w-0">
            <div dir="rtl" className="text-2xl sm:text-4xl font-black text-white leading-snug font-arabic">
              {arabic}
            </div>
            <div className="text-amber-400 font-bold text-base sm:text-lg">{phonetic}</div>
            <div className="text-stone-400 text-xs sm:text-sm italic">{item.french}</div>
          </div>
          <button
            onClick={() => changePhrase(1)}
            className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 shrink-0"
            title="Phrase suivante"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 text-rose-300 bg-rose-500/10 border border-rose-500/30 rounded-xl px-4 py-3 text-xs sm:text-sm">
          <XCircle className="w-4 h-4 shrink-0" />
          {error}
        </div>
      )}

      {/* Timelines */}
      <div className="bg-stone-900 border border-stone-800 rounded-2xl p-4 sm:p-5 space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-wider font-black">
            <span className="text-amber-400">Référence</span>
            <span className="text-stone-500 normal-case font-semibold tracking-normal">
              {selection
                ? `Boucle : ${selection.start.toFixed(1)}s → ${selection.end.toFixed(1)}s (glisse pour ajuster, clic pour effacer)`
                : 'Glisse sur l’onde pour boucler un passage'}
            </span>
          </div>
          {activity === 'loading' ? (
            <div className="h-28 rounded-xl bg-stone-900/80 border border-stone-800 flex items-center justify-center gap-2 text-stone-400 text-xs">
              <Loader2 className="w-4 h-4 animate-spin" /> Génération de la voix de référence…
            </div>
          ) : (
            <Waveform
              buffer={refBuffer}
              color="#f59e0b"
              playhead={refHead}
              selection={selection}
              onSelect={setSelection}
              onSeekPreview={previewFrom}
              emptyLabel="Référence indisponible"
            />
          )}
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-wider font-black">
            <span className="text-emerald-400">Ma voix</span>
            {myBuffer && (
              <span className="text-stone-500 normal-case font-semibold tracking-normal">
                {myBuffer.duration.toFixed(1)}s
              </span>
            )}
          </div>
          <Waveform
            buffer={myBuffer}
            color="#34d399"
            playhead={myHead}
            emptyLabel="Enregistre-toi pour voir ta prise ici"
            heightClass="h-20"
          />
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {/* Listen ×1/×2/×3 */}
          <div className="flex items-center rounded-xl overflow-hidden border border-stone-700">
            {([1, 2, 3] as const).map((n) => (
              <button
                key={n}
                onClick={() => playReference(n)}
                disabled={!refBuffer || busy}
                className="flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-bold bg-stone-800 hover:bg-amber-500 hover:text-stone-950 text-amber-400 transition-colors disabled:opacity-40 disabled:pointer-events-none border-r border-stone-700 last:border-r-0"
                title={`Écouter la référence ${n} fois`}
              >
                {n === 1 ? <Volume2 className="w-4 h-4" /> : <Repeat className="w-4 h-4" />}×{n}
              </button>
            ))}
          </div>

          <button
            onClick={() => setSlow((s) => !s)}
            className={`${controlBtn} border ${
              slow
                ? 'bg-teal-500 text-stone-950 border-teal-400'
                : 'bg-stone-800 text-teal-300 border-stone-700 hover:bg-stone-700'
            }`}
            title="Vitesse ralentie (0.72x)"
          >
            <Turtle className="w-4 h-4" />
            Lent
          </button>

          {/* Record */}
          <button
            onClick={toggleRecording}
            disabled={busy}
            className={`${controlBtn} ${
              activity === 'recording'
                ? 'bg-rose-500 text-white animate-pulse'
                : 'bg-rose-500/15 text-rose-300 border border-rose-500/40 hover:bg-rose-500/25'
            }`}
          >
            {activity === 'recording' ? <Square className="w-4 h-4 fill-white" /> : <Mic className="w-4 h-4" />}
            {activity === 'recording' ? 'Stop' : 'Enregistrer'}
          </button>

          <button
            onClick={playMine}
            disabled={!myBuffer || busy}
            className={`${controlBtn} bg-emerald-500/15 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/25`}
          >
            <Play className="w-4 h-4" />
            Ma voix
          </button>

          <button
            onClick={playAB}
            disabled={!canCompare || busy}
            className={`${controlBtn} bg-stone-800 text-stone-100 border border-stone-700 hover:bg-stone-700`}
            title="Référence puis ma voix, enchaînées"
          >
            <ArrowLeftRight className="w-4 h-4" />
            A/B
          </button>

          <button
            onClick={playOverlay}
            disabled={!canCompare || busy}
            className={`${controlBtn} bg-stone-800 text-stone-100 border border-stone-700 hover:bg-stone-700`}
            title="Les deux voix en même temps"
          >
            <Layers className="w-4 h-4" />
            Superposer
          </button>

          <button
            onClick={() => setStereoSplit((s) => !s)}
            className={`${controlBtn} border ${
              stereoSplit
                ? 'bg-indigo-500 text-white border-indigo-400'
                : 'bg-stone-800 text-indigo-300 border-stone-700 hover:bg-stone-700'
            }`}
            title="Au casque : référence à gauche, ma voix à droite"
          >
            <Headphones className="w-4 h-4" />
            Stéréo
          </button>

          {busy && (
            <button onClick={stopAll} className={`${controlBtn} bg-stone-700 text-white`}>
              <Square className="w-4 h-4" />
              Stop
            </button>
          )}
        </div>

        <p className="text-[11px] text-stone-500">
          Astuce doubleur : écoute ×3, enregistre, puis « Superposer » avec « Stéréo » au casque — une
          voix par oreille, les écarts de rythme et d'accent sautent aux oreilles.
        </p>
      </div>
    </div>
  );
};
