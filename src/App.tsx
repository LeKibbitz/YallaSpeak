/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { SpeedTrainer } from './components/SpeedTrainer';
import { VocabExplorer } from './components/VocabExplorer';
import { RoleplaySimulator } from './components/RoleplaySimulator';
import { StudioMode } from './components/StudioMode';
import { PronunciationGuide } from './components/PronunciationGuide';
import { AlphabetExplorer } from './components/AlphabetExplorer';
import { DialectSelectorModal } from './components/DialectSelectorModal';
import { AICoachModal } from './components/AICoachModal';
import { SportMode } from './components/SportMode';
import { DialectId, UserProgress } from './types';
import { DIALECTS } from './data/dialects';
import { Sparkles, Trophy, Flame, Globe, ArrowRight, ShieldCheck, Zap, Dumbbell } from 'lucide-react';

const STORAGE_KEY = 'yallaspeak_progress_v1';

const DEFAULT_PROGRESS: UserProgress = {
  selectedDialect: 'levantin',
  xp: 120,
  streak: 3,
  masteredWords: ['sal-1', 'sal-2', 'sal-3', 'emo-1'],
  savedWords: ['sal-6', 'emo-3', 'caf-1'],
  completedScenarios: ['souk-marrakech']
};

export default function App() {
  const [activeTab, setActiveTab] = useState('speed');
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : DEFAULT_PROGRESS;
    } catch {
      return DEFAULT_PROGRESS;
    }
  });

  const [isDialectModalOpen, setIsDialectModalOpen] = useState(false);
  const [isCoachModalOpen, setIsCoachModalOpen] = useState(false);
  const [isSportOpen, setIsSportOpen] = useState(false);
  const [hasSeenIntro, setHasSeenIntro] = useState(() => {
    return localStorage.getItem('yallaspeak_intro_seen') === 'true';
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.warn('Impossible de sauvegarder la progression dans localStorage', e);
    }
  }, [progress]);

  const handleSelectDialect = (dialect: DialectId) => {
    setProgress(prev => ({ ...prev, selectedDialect: dialect }));
  };

  const handleAddXp = (amount: number) => {
    setProgress(prev => ({ ...prev, xp: prev.xp + amount }));
  };

  const handleToggleMastered = (id: string) => {
    setProgress(prev => {
      const exists = prev.masteredWords.includes(id);
      const newMastered = exists
        ? prev.masteredWords.filter(item => item !== id)
        : [...prev.masteredWords, id];
      return { ...prev, masteredWords: newMastered, xp: exists ? prev.xp : prev.xp + 15 };
    });
  };

  const handleMarkMastered = (id: string) => {
    if (!progress.masteredWords.includes(id)) {
      setProgress(prev => ({
        ...prev,
        masteredWords: [...prev.masteredWords, id]
      }));
    }
  };

  const handleToggleSaved = (id: string) => {
    setProgress(prev => {
      const exists = prev.savedWords.includes(id);
      const newSaved = exists
        ? prev.savedWords.filter(item => item !== id)
        : [...prev.savedWords, id];
      return { ...prev, savedWords: newSaved };
    });
  };

  const activeDialectInfo = DIALECTS[progress.selectedDialect] || DIALECTS.levantin;

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950 pb-20">
      
      {/* Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        progress={progress}
        onOpenDialectSelector={() => setIsDialectModalOpen(true)}
        onOpenCoach={() => setIsCoachModalOpen(true)}
        onOpenSport={() => setIsSportOpen(true)}
      />

      {/* Intro Welcome Banner (only if not dismissed or first time) */}
      {!hasSeenIntro && (
        <div className="bg-gradient-to-r from-amber-500/20 via-stone-900 to-emerald-500/20 border-b border-stone-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-1.5 bg-amber-500 text-stone-950 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 fill-stone-950" /> La Loi des 80/20
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Bienvenue dans la méthode super accélérée pour parler l'arabe du quotidien !
              </h2>
              <p className="text-xs sm:text-sm text-stone-300">
                Pourquoi s'enfermer à apprendre la grammaire littéraire du VIIIe siècle ? Ici, nous enseignons uniquement l'arabe <strong className="text-amber-400">parlé sur le terrain</strong> (cafés, taxis, souks, amitié). Choisissez votre dialecte et entraînez vos réflexes en 5 secondes !
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setIsDialectModalOpen(true)}
                className="bg-stone-800 hover:bg-stone-700 text-amber-400 font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm border border-stone-700 shadow flex items-center gap-2"
              >
                <span>{activeDialectInfo.flag}</span>
                <span>Changer de dialecte</span>
              </button>
              <button
                onClick={() => {
                  setHasSeenIntro(true);
                  localStorage.setItem('yallaspeak_intro_seen', 'true');
                }}
                className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-black px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-lg shadow-amber-500/20 flex items-center gap-2 transition-all active:scale-95"
              >
                <span>Yalla ! C'est parti</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="py-6 sm:py-8">
        {activeTab === 'speed' && (
          <SpeedTrainer
            selectedDialect={progress.selectedDialect}
            masteredIds={progress.masteredWords}
            onMarkMastered={handleMarkMastered}
            onAddXp={handleAddXp}
          />
        )}

        {activeTab === 'vocab' && (
          <VocabExplorer
            selectedDialect={progress.selectedDialect}
            masteredIds={progress.masteredWords}
            savedIds={progress.savedWords}
            onToggleMastered={handleToggleMastered}
            onToggleSaved={handleToggleSaved}
          />
        )}

        {activeTab === 'roleplay' && (
          <RoleplaySimulator
            selectedDialect={progress.selectedDialect}
            onAddXp={handleAddXp}
          />
        )}

        {activeTab === 'studio' && (
          <StudioMode
            selectedDialect={progress.selectedDialect}
            onAddXp={handleAddXp}
          />
        )}

        {activeTab === 'hacks' && (
          <PronunciationGuide
            selectedDialect={progress.selectedDialect}
          />
        )}

        {activeTab === 'alphabet' && (
          <AlphabetExplorer selectedDialect={progress.selectedDialect} />
        )}
      </main>

      {/* Dialect Selector Modal */}
      <DialectSelectorModal
        isOpen={isDialectModalOpen}
        onClose={() => setIsDialectModalOpen(false)}
        selectedDialect={progress.selectedDialect}
        onSelect={handleSelectDialect}
      />

      {/* AI Coach Sidi Hakim Modal */}
      <AICoachModal
        isOpen={isCoachModalOpen}
        onClose={() => setIsCoachModalOpen(false)}
        selectedDialect={progress.selectedDialect}
      />

      {/* Hands-free session: full screen, on top of everything, from any tab */}
      {isSportOpen && (
        <SportMode
          dialect={progress.selectedDialect}
          onClose={() => setIsSportOpen(false)}
        />
      )}

      {/* Floating Action Buttons on mobile: sport session above the AI coach */}
      <div className="fixed bottom-6 right-6 z-30 sm:hidden flex flex-col items-center gap-3">
        <button
          onClick={() => setIsSportOpen(true)}
          className="bg-stone-900 text-amber-400 p-4 rounded-full shadow-2xl border-2 border-amber-500/60 flex items-center justify-center"
          title="Mode Sport : séance mains libres"
        >
          <Dumbbell className="w-5 h-5" />
        </button>
        <button
          onClick={() => setIsCoachModalOpen(true)}
          className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 rounded-full shadow-2xl border-2 border-emerald-400 flex items-center justify-center animate-bounce"
          title="Ouvrir le Coach IA"
        >
          <span className="text-xl">🤖</span>
        </button>
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6 border-t border-stone-800/80 text-center text-xs text-stone-500 space-y-2">
        <div className="flex items-center justify-center gap-2 text-stone-400 font-bold">
          <span className="text-amber-500">⚡ YallaSpeak</span> • La méthode 100% dialectal & vocabulaire quotidien
        </div>
        <p>
          Dialectes pris en charge : Levantin (Chami 🇱🇧🇸🇾), Égyptien (Masri 🇪🇬), Maghrébin (Darija 🇲🇦🇩🇿🇹🇳), et Golfe (Khaleeji 🇦🇪🇸🇦).
        </p>
        <p className="text-[11px] text-stone-600">
          Propulsé par l'IA Gemini 3.6 Flash & synthèse vocale pour une prononciation naturelle en temps réel.
        </p>
      </footer>
    </div>
  );
}

