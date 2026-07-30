import React, { useState } from 'react';
import { MessageSquare, Sparkles, Loader2, Plus, Volume2, ShieldAlert, ArrowRight, User, Bot, Check } from 'lucide-react';
import { DialectId, ScenarioDialogue } from '../types';
import { SAMPLE_SCENARIOS } from '../data/vocabulary';
import { DIALECTS } from '../data/dialects';
import { AudioPlayerButton } from './AudioPlayerButton';
import { DIALECT_TTS_NAMES, prefetchAudio } from '../lib/audio';

interface RoleplaySimulatorProps {
  selectedDialect: DialectId;
  onAddXp: (amount: number) => void;
}

export const RoleplaySimulator: React.FC<RoleplaySimulatorProps> = ({
  selectedDialect,
  onAddXp
}) => {
  const [activeScenario, setActiveScenario] = useState<ScenarioDialogue>(() => {
    return SAMPLE_SCENARIOS.find(s => s.dialect === selectedDialect) || SAMPLE_SCENARIOS[0];
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [customPrompt, setCustomPrompt] = useState('');
  const [customDifficulty, setCustomDifficulty] = useState('Débutant Débrouillard');
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [generationError, setGenerationError] = useState<string | null>(null);
  const [sessionDone, setSessionDone] = useState(false);

  React.useEffect(() => {
    const matching = SAMPLE_SCENARIOS.find(s => s.dialect === selectedDialect);
    if (matching) {
      setActiveScenario(matching);
    }
  }, [selectedDialect]);

  // A dialogue is 4 to 6 lines: generate them all up front, staggered so the
  // first line is ready almost immediately and the rest follow silently.
  React.useEffect(() => {
    setSessionDone(false);
    const timers = activeScenario.lines.map((line, idx) =>
      window.setTimeout(
        () => prefetchAudio(activeScenario.dialect, line.phonetic, line.arabic),
        idx * 300
      )
    );
    return () => timers.forEach(clearTimeout);
  }, [activeScenario]);

  const currentDialectInfo = DIALECTS[selectedDialect];

  const handleGenerateAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customPrompt.trim() || isGenerating) return;

    setIsGenerating(true);
    setGenerationError(null);
    try {
      const response = await fetch('/api/gemini/roleplay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          dialect: DIALECT_TTS_NAMES[selectedDialect],
          scenario: customPrompt,
          difficulty: customDifficulty
        })
      });

      if (response.status === 429) throw new Error("Trop de dialogues générés d'affilée, patiente une minute.");
      if (!response.ok) throw new Error("Erreur serveur lors de la génération");
      const data = await response.json();

      if (data && data.dialogue) {
        const newScenario: ScenarioDialogue = {
          id: 'custom-' + Date.now(),
          title: `✨ Scénario IA : ${customPrompt.slice(0, 35)}...`,
          dialect: selectedDialect,
          category: 'emotions_argot',
          description: `Généré sur mesure pour le niveau ${customDifficulty} en arabe ${currentDialectInfo.name.split(' ')[0]}.`,
          survivalHack: data.survivalHack || "Écoutez bien l'intonation locale et n'hésitez pas à ponctuer vos phrases de sourires !",
          lines: data.dialogue.map((l: any) => ({
            speaker: l.speaker === 'Moi' ? 'Moi' : 'Natif',
            arabic: l.arabic || '',
            phonetic: l.phonetic || '',
            french: l.french || '',
            tip: l.tip
          }))
        };

        setActiveScenario(newScenario);
        setShowCustomForm(false);
        setCustomPrompt('');
        onAddXp(30);
      }
    } catch (err) {
      console.error("Erreur de génération de dialogue:", err);
      setGenerationError(
        err instanceof Error && err.message.includes('patiente')
          ? err.message
          : "Impossible de générer ce dialogue pour le moment. Réessaie dans un instant."
      );
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-6 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 p-6 sm:p-8 rounded-3xl border border-stone-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent border border-accent/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" /> Immersion Vocale Directe
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Simulateur de Rue & Dialogues
          </h2>
          <p className="text-xs sm:text-sm text-stone-300">
            Vivez de vraies situations de rue ligne par ligne. Écoutez, répétez et imprégnez-vous de la logique culturelle !
          </p>
        </div>

        <button
          onClick={() => setShowCustomForm(!showCustomForm)}
          className="bg-gradient-to-r from-accent to-accent/80 hover:brightness-110 text-stone-950 font-black px-5 py-3 rounded-2xl text-sm shadow-lg shadow-accent/20 flex items-center gap-2 transition-all shrink-0"
        >
          <Sparkles className="w-4 h-4 fill-stone-950" />
          <span>Créer un Scénario IA</span>
        </button>
      </div>

      {/* AI Scenario Generator Form */}
      {showCustomForm && (
        <form onSubmit={handleGenerateAI} className="bg-stone-900 border-2 border-accent/50 rounded-3xl p-6 shadow-2xl space-y-4 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-stone-800 pb-3">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent" />
              <span>Générateur d'Immersion Instantanée (IA)</span>
            </h3>
            <span className="text-xs text-accent font-semibold bg-accent/10 px-3 py-1 rounded-full">
              Dialecte : {currentDialectInfo.name} {currentDialectInfo.flag}
            </span>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
              Dans quelle situation voulez-vous vous débrouiller ?
            </label>
            <input
              type="text"
              placeholder="ex: Négocier un tapis au souk, commander un chawarma poulet sans ail, discuter avec un chauffeur à Beyrouth..."
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              disabled={isGenerating}
              className="w-full bg-stone-950 border border-stone-700 focus:border-accent rounded-2xl p-4 text-sm sm:text-base text-white placeholder-stone-500 focus:outline-none shadow-inner"
              required
            />
          </div>

          {generationError && (
            <div className="flex items-start gap-2 rounded-2xl border border-red-500/40 bg-red-500/10 p-3 text-xs text-red-300">
              <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{generationError}</span>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="text-xs text-stone-400 font-bold shrink-0">Niveau :</span>
              <select
                value={customDifficulty}
                onChange={(e) => setCustomDifficulty(e.target.value)}
                disabled={isGenerating}
                className="bg-stone-800 border border-stone-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
              >
                <option value="Débutant Débrouillard">⚡ Débutant Débrouillard (Phrases courtes)</option>
                <option value="Intermédiaire Courant">🔥 Intermédiaire Courant (Argots & expressions)</option>
                <option value="Expert Négociateur">🏆 Expert Négociateur (Proverbes & verve locale)</option>
              </select>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                type="button"
                onClick={() => setShowCustomForm(false)}
                disabled={isGenerating}
                className="px-4 py-2 text-xs font-bold text-stone-400 hover:text-white"
              >
                Annuler
              </button>
              <button
                type="submit"
                disabled={isGenerating || !customPrompt.trim()}
                className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm shadow-md flex items-center gap-2 transition-all"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>L'IA écrit le dialogue...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Générer le dialogue (+30 XP)</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Scenario Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {SAMPLE_SCENARIOS.map((scen) => {
          const isSelected = activeScenario.id === scen.id;
          const sDialect = DIALECTS[scen.dialect];
          return (
            <button
              key={scen.id}
              onClick={() => setActiveScenario(scen)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                isSelected
                  ? 'bg-accent text-stone-950 shadow-lg shadow-accent/20 scale-[1.02]'
                  : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
              }`}
            >
              <span>{sDialect?.flag}</span>
              <span>{scen.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Dialogue Board */}
      <div className="bg-stone-900 border border-stone-800 rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Title Bar */}
        <div className="bg-stone-950/80 p-6 border-b border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{DIALECTS[activeScenario.dialect]?.flag}</span>
              <h3 className="text-xl font-bold text-white">{activeScenario.title}</h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-400">{activeScenario.description}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-xl self-start sm:self-center">
            <Sparkles className="w-3.5 h-3.5" /> Dialecte : {DIALECTS[activeScenario.dialect]?.name.split(' ')[0]}
          </span>
        </div>

        {/* Survival Hack Box */}
        {activeScenario.survivalHack && (
          <div className="m-6 p-4 rounded-2xl bg-gradient-to-r from-accent/10 via-stone-800 to-accent/10 border border-accent/30 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-accent mb-1">
                ⚡ Hack Linguistique & Culturel :
              </h4>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                {activeScenario.survivalHack}
              </p>
            </div>
          </div>
        )}

        {/* Dialogue Lines Chat */}
        <div className="p-6 space-y-6">
          {activeScenario.lines.map((line, idx) => {
            const isMe = line.speaker === 'Moi';
            return (
              <div
                key={idx}
                className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} space-y-1.5 animate-fadeIn`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Speaker label */}
                <div className="flex items-center gap-1.5 text-xs font-bold px-2 text-stone-400">
                  {isMe ? (
                    <>
                      <span>Moi (Élève)</span>
                      <User className="w-3.5 h-3.5 text-accent" />
                    </>
                  ) : (
                    <>
                      <Bot className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Locuteur Natif</span>
                    </>
                  )}
                </div>

                {/* Bubble */}
                <div
                  className={`max-w-2xl w-full sm:w-4/5 rounded-3xl p-5 border shadow-md transition-all ${
                    isMe
                      ? 'bg-gradient-to-br from-stone-800 to-stone-850 border-accent/30 text-right rounded-tr-none'
                      : 'bg-stone-950 border-stone-800 text-left rounded-tl-none'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    {isMe ? (
                      <div className="flex items-center gap-2 order-1">
                        <AudioPlayerButton
                          text={line.phonetic}
                          arabicText={line.arabic}
                          dialect={activeScenario.dialect}
                          size="sm"
                        />
                      </div>
                    ) : null}

                    <div className="flex-1">
                      {/* Large Phonetic */}
                      <div className="text-base sm:text-xl font-black text-accent font-mono tracking-wide">
                        "{line.phonetic}"
                      </div>
                      
                      {/* Arabic script */}
                      <div className="text-lg sm:text-2xl font-arabic font-bold text-stone-200 mt-2">
                        {line.arabic}
                      </div>
                      
                      {/* French meaning */}
                      <div className="text-xs sm:text-sm text-stone-400 mt-2 pt-2 border-t border-stone-800/80">
                        {line.french}
                      </div>
                    </div>

                    {!isMe ? (
                      <div className="flex items-center gap-2 order-2">
                        <AudioPlayerButton
                          text={line.phonetic}
                          arabicText={line.arabic}
                          dialect={activeScenario.dialect}
                          size="sm"
                        />
                      </div>
                    ) : null}
                  </div>

                  {/* Tip inside line */}
                  {line.tip && (
                    <div className="mt-3 pt-2 border-t border-stone-800/50 text-[11px] text-accent/90 flex items-center gap-1.5 justify-end">
                      <Sparkles className="w-3 h-3 text-accent shrink-0" />
                      <span>{line.tip}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Action */}
        <div className="p-6 bg-stone-950/60 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-xs text-stone-400">
            💡 Répétez ce dialogue 3 fois à haute voix. La mémoire vocale s'active beaucoup plus vite que la lecture !
          </div>
          <button
            onClick={() => {
              onAddXp(15);
              setSessionDone(true);
            }}
            disabled={sessionDone}
            className="bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-900 disabled:text-emerald-300 text-white font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm shadow flex items-center gap-2 shrink-0 transition-all active:scale-95"
          >
            <Check className="w-4 h-4" />
            <span>
              {sessionDone
                ? "🎉 Session validée, +15 XP !"
                : "J'ai pratiqué à voix haute (+15 XP)"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
