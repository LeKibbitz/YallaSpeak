import React, { useEffect, useState } from 'react';
import { X, Check, Sparkles, MapPin, Film, ChevronLeft, ChevronRight } from 'lucide-react';
import { DialectId, LanguageId } from '../types';
import { DIALECTS } from '../data/dialects';
import { LANGUAGES, languageOf } from '../data/languages';
import { AudioPlayerButton } from './AudioPlayerButton';

interface DialectSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDialect: DialectId;
  onSelect: (dialect: DialectId) => void;
}

/**
 * Two-step picker: first the language, then its variants. With 10+ languages
 * a single flat list of every variant card became unusable.
 */
export const DialectSelectorModal: React.FC<DialectSelectorModalProps> = ({
  isOpen,
  onClose,
  selectedDialect,
  onSelect
}) => {
  const activeLanguage = languageOf(selectedDialect);
  const [viewLanguage, setViewLanguage] = useState<LanguageId | null>(null);

  // Every opening restarts on the language grid.
  useEffect(() => {
    if (isOpen) setViewLanguage(null);
  }, [isOpen]);

  if (!isOpen) return null;

  const language = viewLanguage ? LANGUAGES[viewLanguage] : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-stone-900 border border-stone-700/80 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 text-stone-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-stone-800 pb-5 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              {language ? `Étape 2/2 : ${language.variantNoun}` : 'Étape 1/2 : la langue'}
            </div>
            {language ? (
              <>
                <button
                  onClick={() => setViewLanguage(null)}
                  className="flex items-center gap-1 text-xs font-bold text-stone-400 hover:text-amber-400 transition-colors mb-1"
                >
                  <ChevronLeft className="w-4 h-4" /> Toutes les langues
                </button>
                <h2 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-amber-400 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  {language.flag} {language.name}
                </h2>
                <p className="text-sm text-stone-300 mt-1">{language.tagline}</p>
              </>
            ) : (
              <>
                <h2 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-amber-400 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  Quelle Langue Voulez-Vous Maîtriser ?
                </h2>
                <p className="text-sm text-stone-300 mt-1">
                  Choisissez d'abord la langue, puis le parler régional qui correspond à vos voyages ou à votre entourage.
                </p>
              </>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white hover:bg-stone-800 rounded-xl transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Step 1: language grid */}
        {!language && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.values(LANGUAGES).map((lang) => {
              const isActive = activeLanguage === lang.id;
              return (
                <div
                  key={lang.id}
                  onClick={() => setViewLanguage(lang.id)}
                  className={`relative cursor-pointer rounded-2xl p-5 border-2 transition-all duration-200 flex flex-col gap-3 ${
                    isActive
                      ? 'bg-gradient-to-br from-amber-500/10 via-stone-800 to-stone-900 border-amber-500 shadow-lg shadow-amber-500/10'
                      : 'bg-stone-800/60 hover:bg-stone-800 border-stone-700 hover:border-stone-500'
                  }`}
                >
                  {isActive && (
                    <div className="absolute top-4 right-4 bg-amber-500 text-stone-950 px-2.5 py-1 rounded-full text-[10px] font-black flex items-center gap-1 shadow">
                      <Check className="w-3 h-3 stroke-[3]" /> Active
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{lang.flag}</span>
                    <div>
                      <h3 className="text-lg font-black text-white leading-tight">{lang.name}</h3>
                      <p className="text-[11px] font-bold text-amber-400/90">{lang.brandName}</p>
                    </div>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed flex-1">{lang.tagline}</p>
                  <div className="pt-3 border-t border-stone-700/60 flex items-center justify-between">
                    <span className="text-base tracking-wider">
                      {lang.variants.map((v) => DIALECTS[v].flag).join(' ')}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-bold text-stone-300">
                      {lang.variants.length} {lang.variantNoun.split(' ')[0]}{lang.variants.length > 1 ? 's' : ''}
                      <ChevronRight className="w-4 h-4 text-amber-400" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Step 2: variants of the chosen language */}
        {language && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {language.variants.map((variantId) => {
              const dialect = DIALECTS[variantId];
              const isSelected = selectedDialect === dialect.id;
              return (
                <div
                  key={dialect.id}
                  onClick={() => {
                    onSelect(dialect.id);
                    onClose();
                  }}
                  className={`relative cursor-pointer rounded-2xl p-5 border-2 transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gradient-to-br from-amber-500/10 via-stone-800 to-stone-900 border-amber-500 shadow-lg shadow-amber-500/10'
                      : 'bg-stone-800/60 hover:bg-stone-800 border-stone-700 hover:border-stone-500'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-4 right-4 bg-amber-500 text-stone-950 px-2.5 py-1 rounded-full text-xs font-black flex items-center gap-1 shadow">
                      <Check className="w-3.5 h-3.5 stroke-[3]" /> Actif
                    </div>
                  )}

                  <div>
                    {/* Flag & Title */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-4xl sm:text-5xl">{dialect.flag}</span>
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                          {dialect.name}
                        </h4>
                        <div className="flex items-center gap-1 text-xs text-stone-400 mt-0.5">
                          <MapPin className="w-3 h-3 text-amber-400" />
                          <span>{dialect.countries.join(', ')}</span>
                        </div>
                      </div>
                    </div>

                    {/* Vibe & Description */}
                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-4">
                      {dialect.description}
                    </p>

                    <div className="bg-stone-900/80 rounded-xl p-3 mb-4 border border-stone-700/60 space-y-2">
                      <div className="flex items-center justify-between text-xs font-semibold text-amber-400">
                        <span>✨ Expression Signature :</span>
                        <AudioPlayerButton
                          text={dialect.signatureWord.word}
                          arabicText={dialect.signatureWord.arabic}
                          dialect={dialect.id}
                          size="sm"
                        />
                      </div>
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="font-bold text-white text-sm">
                          "{dialect.signatureWord.word}"
                        </span>
                        {/* Only show the written form next to it when it adds something (another script) */}
                        {dialect.signatureWord.arabic !== dialect.signatureWord.word && (
                          <span className={`text-amber-300 text-base font-bold ${language.script.fontClass || ''}`}>
                            {dialect.signatureWord.arabic}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-stone-400 italic">
                        👉 {dialect.signatureWord.meaning}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-stone-400">
                      <Film className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">Séries/Musique : {dialect.popularMedia}</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-stone-700/60 flex items-center justify-between">
                    <span className="text-xs font-medium text-stone-400">
                      Ambiance : <strong className="text-stone-200">{dialect.vibe.split(',')[0]}</strong>
                    </span>
                    <button
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                        isSelected
                          ? 'bg-amber-500 text-stone-950'
                          : 'bg-stone-700 hover:bg-stone-600 text-white'
                      }`}
                    >
                      {isSelected ? 'Sélectionné' : 'Choisir'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Footer info */}
        <div className="mt-8 p-4 bg-stone-950/60 rounded-2xl border border-stone-800 text-center">
          <p className="text-xs text-stone-400">
            💡 <strong className="text-stone-200">Conseil d'immersion :</strong> Vous pouvez changer de langue ou de {language ? language.variantNoun : 'variante'} à tout moment depuis le menu en haut. Le vocabulaire s'adapte automatiquement !
          </p>
        </div>
      </div>
    </div>
  );
};
