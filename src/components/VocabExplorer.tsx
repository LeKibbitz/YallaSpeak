import React, { useState } from 'react';
import { Search, Filter, BookOpen, CheckCircle2, Bookmark, Sparkles, HelpCircle, Volume2, Globe } from 'lucide-react';
import { VocabItem, DialectId, VocabCategory } from '../types';
import { DIALECTS, CATEGORIES_INFO } from '../data/dialects';
import { languageInfoOf, scriptOf, vocabularyOf } from '../data/languages';
import { AudioPlayerButton } from './AudioPlayerButton';

interface VocabExplorerProps {
  selectedDialect: DialectId;
  masteredIds: string[];
  savedIds: string[];
  onToggleMastered: (id: string) => void;
  onToggleSaved: (id: string) => void;
}

export const VocabExplorer: React.FC<VocabExplorerProps> = ({
  selectedDialect,
  masteredIds,
  savedIds,
  onToggleMastered,
  onToggleSaved
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<VocabCategory | 'all' | 'saved' | 'mastered'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const currentDialectInfo = DIALECTS[selectedDialect];
  const language = languageInfoOf(selectedDialect);
  const script = scriptOf(selectedDialect);
  const vocabulary = vocabularyOf(selectedDialect);

  const filteredList = vocabulary.filter(item => {
    // Category or filter check
    if (selectedCategory === 'saved') {
      if (!savedIds.includes(item.id)) return false;
    } else if (selectedCategory === 'mastered') {
      if (!masteredIds.includes(item.id)) return false;
    } else if (selectedCategory !== 'all') {
      if (item.category !== selectedCategory) return false;
    }

    // Search query check
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      const matchFrench = item.french.toLowerCase().includes(q);
      const matchPhonetic = item.phonetic.toLowerCase().includes(q);
      const matchArabic = item.arabic.includes(q);
      const matchTip = item.tip?.toLowerCase().includes(q);
      return matchFrench || matchPhonetic || matchArabic || matchTip;
    }

    return true;
  });

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 space-y-6 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 p-6 sm:p-8 rounded-3xl border border-stone-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" /> La Loi de Pareto 80/20
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Les 500 Mots & Expressions d'Or
          </h2>
          <p className="text-xs sm:text-sm text-stone-300">
            Pas besoin de 10 000 mots pour parler ! Ces formules de survie couvrent 80% des conversations au café, dans le taxi ou avec vos amis.
          </p>
        </div>

        {/* Quick Dialect Indicator */}
        <div className="bg-stone-950/80 p-4 rounded-2xl border border-stone-800 flex items-center gap-3 shrink-0">
          <span className="text-3xl">{currentDialectInfo.flag}</span>
          <div>
            <div className="text-xs text-stone-400">
              {language.variantNoun.charAt(0).toUpperCase() + language.variantNoun.slice(1)} actif
            </div>
            <div className="text-sm font-bold text-amber-400">{currentDialectInfo.name.split(' ')[0]}</div>
          </div>
        </div>
      </div>

      {/* Search & Filter Controls */}
      <div className="space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
          <input
            type="text"
            placeholder="Rechercher par mot français (ex: thé, merci) ou phonétique (ex: baddi, yalla, labas)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-stone-900 border border-stone-700 focus:border-amber-500 rounded-2xl pl-12 pr-4 py-3.5 text-sm sm:text-base text-white placeholder-stone-400 focus:outline-none shadow-inner transition-colors"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-white font-bold bg-stone-800 px-2.5 py-1 rounded-lg"
            >
              Effacer
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-amber-500 text-stone-950 shadow'
                : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
            }`}
          >
            🌟 Tout le vocabulaire ({vocabulary.length})
          </button>
          <button
            onClick={() => setSelectedCategory('saved')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              selectedCategory === 'saved'
                ? 'bg-amber-500 text-stone-950 shadow'
                : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
            }`}
          >
            <Bookmark className="w-4 h-4 fill-current" />
            <span>Favoris ({savedIds.length})</span>
          </button>
          <button
            onClick={() => setSelectedCategory('mastered')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              selectedCategory === 'mastered'
                ? 'bg-amber-500 text-stone-950 shadow'
                : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Maîtrisés ({masteredIds.length})</span>
          </button>
          {Object.entries(CATEGORIES_INFO).map(([key, info]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key as VocabCategory)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
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
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-stone-400 px-2">
        <span>Affichage de <strong>{filteredList.length}</strong> expression(s)</span>
        <span>💡 Astuce : Cliquez sur une carte pour voir les variantes par pays</span>
      </div>

      {/* Vocab Cards Grid */}
      {filteredList.length === 0 ? (
        <div className="bg-stone-900 border border-stone-800 rounded-3xl p-12 text-center space-y-4">
          <HelpCircle className="w-12 h-12 text-stone-500 mx-auto" />
          <h3 className="text-lg font-bold text-white">Aucune expression trouvée</h3>
          <p className="text-sm text-stone-400 max-w-md mx-auto">
            Nous n'avons pas trouvé de mot correspondant à "{searchTerm}". Essayez une autre recherche ou demandez au Coach IA !
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredList.map((item) => {
            const isMastered = masteredIds.includes(item.id);
            const isSaved = savedIds.includes(item.id);
            const isExpanded = expandedId === item.id;
            
            // Dialect specific variation if available
            const dialectVariation = item.dialects?.[selectedDialect];
            const displayPhonetic = dialectVariation?.phonetic || item.phonetic;
            const displayArabic = dialectVariation?.arabic || item.arabic;

            return (
              <div
                key={item.id}
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className={`bg-stone-900 border transition-all duration-200 rounded-2xl p-5 cursor-pointer flex flex-col justify-between hover:shadow-lg ${
                  isMastered
                    ? 'border-emerald-500/40 bg-gradient-to-br from-stone-900 via-stone-900 to-emerald-950/20'
                    : 'border-stone-800 hover:border-stone-600'
                }`}
              >
                <div>
                  {/* Top bar: Category Badge & Actions */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 bg-stone-950 px-2.5 py-1 rounded-lg flex items-center gap-1">
                      <span>{CATEGORIES_INFO[item.category]?.icon}</span>
                      <span className="truncate max-w-[120px]">{CATEGORIES_INFO[item.category]?.label.split('&')[0]}</span>
                    </span>
                    <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => onToggleSaved(item.id)}
                        title={isSaved ? "Retirer des favoris" : "Ajouter aux favoris"}
                        className={`p-1.5 rounded-lg transition-colors ${
                          isSaved
                            ? 'bg-amber-500/20 text-amber-400'
                            : 'text-stone-500 hover:text-white hover:bg-stone-800'
                        }`}
                      >
                        <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-400' : ''}`} />
                      </button>
                      <button
                        onClick={() => onToggleMastered(item.id)}
                        title={isMastered ? "Marquer comme à revoir" : "Marquer comme maîtrisé"}
                        className={`p-1.5 rounded-lg transition-colors ${
                          isMastered
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : 'text-stone-500 hover:text-white hover:bg-stone-800'
                        }`}
                      >
                        <CheckCircle2 className={`w-4 h-4 ${isMastered ? 'fill-emerald-400' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* French Translation */}
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    {item.french}
                  </h3>
                  {item.literalTranslation && (
                    <p className="text-xs text-stone-400 italic mb-3">
                      Litteral : "{item.literalTranslation}"
                    </p>
                  )}

                  {/* Phonetic & Arabic Highlight Box */}
                  <div className="bg-stone-950/90 rounded-xl p-3.5 border border-stone-800/80 mb-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-wide flex items-center gap-1">
                        <span>{currentDialectInfo.flag}</span>
                        <span>Phonétique :</span>
                      </span>
                      <AudioPlayerButton
                        text={displayPhonetic}
                        arabicText={displayArabic}
                        dialect={selectedDialect}
                        size="sm"
                      />
                    </div>
                    <div className="text-lg sm:text-xl font-black text-amber-300 font-mono tracking-wide">
                      {displayPhonetic}
                    </div>
                    <div className="text-right pt-1 border-t border-stone-800/60">
                      <span
                        dir={script.direction}
                        className={`text-xl sm:text-2xl font-bold text-stone-200 ${script.fontClass || ''}`}
                      >
                        {displayArabic}
                      </span>
                    </div>
                  </div>

                  {/* Tip */}
                  {(dialectVariation?.note || item.tip) && (
                    <div className="text-xs text-stone-300 bg-stone-800/60 rounded-xl p-2.5 flex items-start gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{dialectVariation?.note || item.tip}</span>
                    </div>
                  )}
                </div>

                {/* Expanded Section: Dialect Comparison */}
                {isExpanded && (
                  <div className="mt-4 pt-3 border-t border-stone-800 space-y-2 text-xs animate-fadeIn" onClick={(e) => e.stopPropagation()}>
                    <div className="font-bold text-stone-400 flex items-center gap-1 mb-2">
                      <Globe className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Variantes selon les pays :</span>
                    </div>
                    {/* Only the variants of the current language: Italian accents
                        have nothing to say on an Arabic card and vice versa. */}
                    {language.variants.map((dId) => {
                      const dInfo = DIALECTS[dId];
                      const dVal = item.dialects?.[dId];
                      return (
                        <div key={dId} className="flex items-center justify-between bg-stone-950 p-2 rounded-lg">
                          <div className="flex items-center gap-1.5 font-medium text-stone-300">
                            <span>{dInfo.flag}</span>
                            <span>{dInfo.name.split(' ')[0]} :</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-amber-300 font-bold">
                              {dVal?.phonetic || item.phonetic}
                            </span>
                            <AudioPlayerButton
                              text={dVal?.phonetic || item.phonetic}
                              arabicText={dVal?.arabic || item.arabic}
                              dialect={dId}
                              size="sm"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                <div className="mt-3 pt-2 border-t border-stone-800/60 flex items-center justify-between text-[11px] text-stone-500">
                  <span>Niveau : {"⭐️".repeat(item.difficulty)}</span>
                  <span className="text-amber-400 font-semibold">
                    {isExpanded ? '▲ Réduire' : '▼ Voir les autres pays'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
