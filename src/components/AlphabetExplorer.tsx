import React, { useCallback, useEffect, useState } from 'react';
import { PenLine, RotateCcw, ChevronLeft, ChevronRight, Sparkles, Play, Pause } from 'lucide-react';
import { ARABIC_ALPHABET } from '../data/alphabet';
import { DialectId } from '../types';
import { AudioPlayerButton } from './AudioPlayerButton';
import { LetterWriter } from './LetterWriter';

interface AlphabetExplorerProps {
  selectedDialect: DialectId;
}

const WRITE_MS = 1700;
// Long enough for the name to be spoken before the next letter takes over
const TOUR_STEP_MS = 3400;

export const AlphabetExplorer: React.FC<AlphabetExplorerProps> = ({ selectedDialect }) => {
  const [index, setIndex] = useState(0);
  const [runId, setRunId] = useState(0);
  const [touring, setTouring] = useState(false);

  const letter = ARABIC_ALPHABET[index];

  const select = useCallback((next: number) => {
    setIndex(((next % ARABIC_ALPHABET.length) + ARABIC_ALPHABET.length) % ARABIC_ALPHABET.length);
    setRunId((r) => r + 1);
  }, []);

  const replay = useCallback(() => setRunId((r) => r + 1), []);

  // Arrow keys walk the alphabet without leaving the keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') select(index + 1); // left = next, Arabic reads right to left
      else if (e.key === 'ArrowRight') select(index - 1);
      else if (e.key === ' ') {
        e.preventDefault();
        replay();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, select, replay]);

  useEffect(() => {
    if (!touring) return;
    const timer = window.setInterval(() => select(index + 1), TOUR_STEP_MS);
    return () => window.clearInterval(timer);
  }, [touring, index, select]);

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-900 to-stone-950 p-6 sm:p-8 rounded-3xl border border-stone-800 shadow-xl">
        <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <PenLine className="w-3.5 h-3.5" /> 28 lettres, écrites à la main
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">L'Alphabet en Mouvement</h2>
        <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-2xl">
          Chaque lettre s'écrit sous tes yeux, dans le sens du stylo, de droite à gauche. Clique
          une lettre pour l'entendre et la voir se tracer. Flèches ← → pour naviguer, Espace pour
          rejouer.
        </p>
      </div>

      {/* Hero: the letter being written */}
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,260px)_1fr] gap-6 bg-stone-900 border border-stone-800 rounded-3xl p-5 sm:p-7 shadow-xl">
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-stone-950 border border-stone-800 overflow-hidden">
            <LetterWriter
              letter={letter}
              runId={runId}
              durationMs={WRITE_MS}
              className="w-full h-full"
            />
          </div>
          <div className="absolute top-2 left-2 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-stone-800/90 text-stone-400 border border-stone-700">
            {index + 1} / {ARABIC_ALPHABET.length}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="text-3xl font-black text-white">{letter.translit}</span>
              <span className="text-2xl text-amber-400" style={{ fontFamily: 'Amiri, serif' }}>
                {letter.name}
              </span>
            </div>

            <div className="bg-stone-950/70 border border-stone-800 rounded-2xl p-4 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Le son
              </div>
              <p className="text-sm text-stone-200">{letter.sound}</p>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/25 rounded-2xl p-4 space-y-1.5">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Le hack
              </div>
              <p className="text-sm text-stone-200">{letter.hack}</p>
            </div>

            <div className="flex items-center gap-3 flex-wrap bg-stone-950/70 border border-stone-800 rounded-2xl p-3">
              <span className="text-2xl text-white" style={{ fontFamily: 'Amiri, serif' }}>
                {letter.example.ar}
              </span>
              <span className="text-sm text-stone-300 font-semibold">
                {letter.example.translit}
              </span>
              <span className="text-sm text-stone-500">{letter.example.fr}</span>
              <AudioPlayerButton
                text={letter.example.translit}
                arabicText={letter.example.ar}
                dialect={selectedDialect}
                size="sm"
                className="ml-auto"
                label="Le mot"
              />
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 flex-wrap">
            <AudioPlayerButton
              key={letter.id}
              text={letter.translit}
              arabicText={letter.name}
              dialect={selectedDialect}
              label="Écouter la lettre"
            />
            <button
              onClick={replay}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-sm font-semibold border border-stone-700 transition-colors active:scale-95"
            >
              <RotateCcw className="w-4 h-4" /> Rejouer l'écriture
            </button>
            <button
              onClick={() => setTouring((t) => !t)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold border transition-colors active:scale-95 ${
                touring
                  ? 'bg-amber-500 text-stone-950 border-amber-400'
                  : 'bg-stone-800 hover:bg-stone-700 text-stone-200 border-stone-700'
              }`}
            >
              {touring ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {touring ? 'Stop' : 'Tout enchaîner'}
            </button>
            <div className="flex items-center gap-1 ml-auto">
              <button
                onClick={() => select(index - 1)}
                aria-label="Lettre précédente"
                className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => select(index + 1)}
                aria-label="Lettre suivante"
                className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* The full alphabet, right to left */}
      <div
        dir="rtl"
        className="grid grid-cols-4 sm:grid-cols-7 gap-2 sm:gap-3 bg-stone-900 border border-stone-800 rounded-3xl p-4 sm:p-5 shadow-xl"
      >
        {ARABIC_ALPHABET.map((item, i) => {
          const isActive = i === index;
          return (
            <button
              key={item.id}
              onClick={() => select(i)}
              aria-current={isActive}
              className={`group flex flex-col items-center justify-center gap-0.5 rounded-2xl py-3 border transition-all duration-200 ${
                isActive
                  ? 'bg-amber-500 border-amber-300 text-stone-950 shadow-lg shadow-amber-500/25 scale-105'
                  : 'bg-stone-950/60 border-stone-800 text-stone-300 hover:bg-stone-800 hover:border-stone-600'
              }`}
            >
              <span
                className={`text-3xl leading-none ${isActive ? 'text-stone-950' : 'text-amber-400 group-hover:text-amber-300'}`}
                style={{ fontFamily: 'Amiri, serif' }}
              >
                {item.char}
              </span>
              <span
                dir="ltr"
                className={`text-[10px] font-bold tracking-wide ${isActive ? 'text-stone-800' : 'text-stone-500'}`}
              >
                {item.translit}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
