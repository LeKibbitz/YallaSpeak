import React, { useState, useEffect } from 'react';
import { Zap, Flame, Trophy, RotateCcw, Volume2, ArrowRight, Eye, CheckCircle2, AlertCircle, Sparkles, Filter } from 'lucide-react';
import confetti from 'canvas-confetti';
import { VocabItem, DialectId, VocabCategory } from '../types';
import { DIALECTS, CATEGORIES_INFO } from '../data/dialects';
import { languageOf, scriptOf, vocabularyOf } from '../data/languages';
import { AudioPlayerButton } from './AudioPlayerButton';
import { prefetchAudio } from '../lib/audio';

interface SpeedTrainerProps {
  selectedDialect: DialectId;
  masteredIds: string[];
  onMarkMastered: (id: string) => void;
  onAddXp: (amount: number) => void;
}

export const SpeedTrainer: React.FC<SpeedTrainerProps> = ({
  selectedDialect,
  masteredIds,
  onMarkMastered,
  onAddXp
}) => {
  const [selectedCategory, setSelectedCategory] = useState<VocabCategory | 'all'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [streakInSession, setStreakInSession] = useState(0);

  const vocabulary = vocabularyOf(selectedDialect);
  const script = scriptOf(selectedDialect);

  // Filter items
  const filteredList = vocabulary.filter(item => {
    if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
    return true;
  });

  const currentItem: VocabItem | undefined = filteredList[currentIndex % (filteredList.length || 1)];

  // Dialect-specific data for current item
  const dialectData = currentItem?.dialects?.[selectedDialect] || {
    phonetic: currentItem?.phonetic || '',
    arabic: currentItem?.arabic || '',
    note: currentItem?.tip
  };

  // Generate the audio while the learner is still thinking: by the time the
  // card is revealed and "Écouter" is clicked, the file is already cached.
  // handleNext jumps 1 to 3 cards ahead, so all three candidates are warmed.
  useEffect(() => {
    if (!currentItem || filteredList.length === 0) return;
    for (let offset = 0; offset <= 3; offset++) {
      const item = filteredList[(currentIndex + offset) % filteredList.length];
      if (!item) continue;
      const data = item.dialects?.[selectedDialect];
      prefetchAudio(
        selectedDialect,
        data?.phonetic || item.phonetic,
        data?.arabic || item.arabic
      );
    }
  }, [currentIndex, selectedDialect, selectedCategory, currentItem, filteredList.length]);

  // Timer 5 seconds countdown
  useEffect(() => {
    if (!isTimerRunning || isRevealed || !currentItem) return;

    if (timeLeft <= 0) {
      setIsRevealed(true);
      setIsTimerRunning(false);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, isTimerRunning, isRevealed, currentItem]);

  const handleNext = () => {
    setIsRevealed(false);
    setTimeLeft(5);
    setIsTimerRunning(true);
    setCurrentIndex(prev => (prev + Math.floor(Math.random() * 3) + 1) % filteredList.length);
  };

  const handleSuccess = () => {
    if (!currentItem) return;
    
    onMarkMastered(currentItem.id);
    onAddXp(20);
    const newStreak = streakInSession + 1;
    setStreakInSession(newStreak);

    if (newStreak % 3 === 0) {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    }

    handleNext();
  };

  const handleReview = () => {
    setStreakInSession(0);
    onAddXp(5);
    handleNext();
  };

  if (!currentItem) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center text-stone-300">
        <p>Aucun mot dans cette catégorie pour le moment.</p>
        <button
          onClick={() => setSelectedCategory('all')}
          className="mt-4 bg-amber-500 text-stone-950 font-bold px-6 py-2 rounded-xl"
        >
          Voir tout le vocabulaire
        </button>
      </div>
    );
  }

  const isMastered = masteredIds.includes(currentItem.id);
  const progressPercent = ((5 - timeLeft) / 5) * 100;

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6 animate-fadeIn">
      
      {/* Header Info Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 p-6 rounded-3xl border border-stone-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Zap className="w-3.5 h-3.5 fill-amber-400" /> Le Cœur de la Méthode Accélérée
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Mode Éclair (Speed 5 Secondes)
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-1">
            Dans la rue, vous avez 5 secondes pour répondre. Entraînez votre réflexe vocal à voix haute !
          </p>
        </div>

        {/* Session Stats */}
        <div className="flex items-center gap-3 bg-stone-950/80 p-3 rounded-2xl border border-stone-800 shrink-0">
          <div className="text-center px-3">
            <div className="text-xs text-stone-400">Série actuelle</div>
            <div className="text-lg font-black text-amber-400 flex items-center justify-center gap-1">
              <Flame className="w-4 h-4 fill-amber-400" />
              <span>{streakInSession}</span>
            </div>
          </div>
          <div className="h-8 w-[1px] bg-stone-800" />
          <div className="text-center px-3">
            <div className="text-xs text-stone-400">Maîtrisés</div>
            <div className="text-lg font-black text-emerald-400 flex items-center justify-center gap-1">
              <Trophy className="w-4 h-4" />
              <span>{masteredIds.length} / {vocabulary.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        <div className="flex items-center gap-1 text-xs font-bold text-stone-400 px-2 shrink-0">
          <Filter className="w-3.5 h-3.5" />
          <span>Filtrer :</span>
        </div>
        <button
          onClick={() => { setSelectedCategory('all'); setCurrentIndex(0); }}
          className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
            selectedCategory === 'all'
              ? 'bg-amber-500 text-stone-950 shadow'
              : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
          }`}
        >
          🔥 Tous les 500 Mots
        </button>
        {Object.entries(CATEGORIES_INFO).map(([key, info]) => (
          <button
            key={key}
            onClick={() => { setSelectedCategory(key as VocabCategory); setCurrentIndex(0); }}
            className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              selectedCategory === key
                ? 'bg-amber-500 text-stone-950 shadow'
                : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
            }`}
          >
            <span>{info.icon}</span>
            <span>{info.label.split('&')[0]}</span>
          </button>
        ))}
      </div>

      {/* Interactive Flashcard Card */}
      <div className="bg-stone-900 border-2 border-stone-700/80 rounded-3xl shadow-2xl overflow-hidden relative transition-all">
        
        {/* Top bar on card: Category & Mastered Status */}
        <div className="bg-stone-950/60 px-6 py-4 border-b border-stone-800 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-400 uppercase tracking-wider">
            <span>{CATEGORIES_INFO[currentItem.category]?.icon}</span>
            <span>{CATEGORIES_INFO[currentItem.category]?.label}</span>
          </span>
          <div className="flex items-center gap-2">
            {isMastered && (
              <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Réflexe Maîtrisé
              </span>
            )}
            <span className="text-xs text-stone-500 font-mono">
              #{currentItem.id}
            </span>
          </div>
        </div>

        {/* Chronometer Progress Bar */}
        {!isRevealed && (
          <div className="w-full bg-stone-950 h-2 relative">
            <div
              className={`h-full transition-all duration-1000 linear ${
                timeLeft <= 2 ? 'bg-red-500' : timeLeft <= 3 ? 'bg-amber-500' : 'bg-emerald-500'
              }`}
              style={{ width: `${100 - progressPercent}%` }}
            />
          </div>
        )}

        {/* Card Main Body */}
        <div className="p-6 sm:p-10 text-center min-h-[300px] flex flex-col justify-between items-center relative">
          
          {/* Question / French phrase */}
          <div className="w-full">
            <div className="text-xs font-bold uppercase tracking-widest text-amber-400/80 mb-3">
              Comment dit-on en {languageOf(selectedDialect)} ({DIALECTS[selectedDialect].name.split(' ')[0]}) ?
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white px-4 leading-tight">
              "{currentItem.french}"
            </h3>
            {currentItem.literalTranslation && (
              <p className="text-xs text-stone-400 mt-2 italic">
                (Sens littéral : "{currentItem.literalTranslation}")
              </p>
            )}
          </div>

          {/* Countdown badge or Revealed content */}
          <div className="w-full my-6">
            {!isRevealed ? (
              <div className="flex flex-col items-center justify-center space-y-4 py-4">
                <div 
                  onClick={() => setIsRevealed(true)}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-stone-800 to-stone-900 border-4 border-amber-500/50 flex items-center justify-center cursor-pointer shadow-lg hover:scale-105 transition-transform group"
                >
                  <span className="text-3xl sm:text-4xl font-black text-amber-400 group-hover:hidden">
                    {timeLeft}s
                  </span>
                  <Eye className="w-8 h-8 text-amber-400 hidden group-hover:block" />
                </div>
                <p className="text-xs text-stone-400 max-w-sm animate-pulse">
                  🗣️ Prononcez-le à voix haute maintenant ! Cliquez sur le chrono ou le bouton pour vérifier.
                </p>
              </div>
            ) : (
              <div className="bg-stone-950/80 rounded-2xl p-6 border border-amber-500/30 space-y-4 animate-scaleUp">
                
                {/* Large Phonetic Arabizi */}
                <div>
                  <div className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">
                    Phonétique Française (À lire comme ça s'écrit) :
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-amber-400 tracking-wide mt-1 font-mono">
                    {dialectData.phonetic || currentItem.phonetic}
                  </div>
                </div>

                {/* Written form & Audio */}
                <div className="flex items-center justify-center gap-4 pt-2 border-t border-stone-800">
                  <span
                    dir={script.direction}
                    className={`text-2xl sm:text-3xl font-bold text-white ${script.fontClass || ''}`}
                  >
                    {dialectData.arabic || currentItem.arabic}
                  </span>
                  <AudioPlayerButton
                    text={dialectData.phonetic || currentItem.phonetic}
                    arabicText={dialectData.arabic || currentItem.arabic}
                    dialect={selectedDialect}
                    label="Écouter la voix"
                    size="md"
                  />
                </div>

                {/* Tip / Cultural Note */}
                {(dialectData.note || currentItem.tip) && (
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 text-left flex items-start gap-2 text-xs text-amber-200 mt-3">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{dialectData.note || currentItem.tip}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3">
            {!isRevealed ? (
              <button
                onClick={() => setIsRevealed(true)}
                className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-black px-8 py-4 rounded-2xl text-base shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <Eye className="w-5 h-5" />
                <span>Révéler la prononciation</span>
              </button>
            ) : (
              <>
                <button
                  onClick={handleReview}
                  className="w-full sm:w-1/2 bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold px-6 py-3.5 rounded-2xl text-sm border border-stone-700 flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <RotateCcw className="w-4 h-4 text-amber-400" />
                  <span>J'ai hésité / À revoir (+5 XP)</span>
                </button>
                <button
                  onClick={handleSuccess}
                  className="w-full sm:w-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black px-6 py-3.5 rounded-2xl text-sm shadow-lg shadow-emerald-900/40 flex items-center justify-center gap-2 transition-all active:scale-95 border border-emerald-400/30"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Réflexe Impeccable ! (+20 XP)</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Footer hint */}
      <div className="text-center text-xs text-stone-400 flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 text-amber-400" />
        <span>
          {script.phoneticFirst
            ? "Astuce Turbo : Ne cherchez pas à lire l'écriture au début ! Écoutez, répétez à haute voix et mémorisez le son."
            : "Astuce Turbo : Écoutez, répétez à haute voix et mémorisez la musique de la phrase avant de la lire."}
        </span>
      </div>
    </div>
  );
};
