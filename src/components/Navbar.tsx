import React from 'react';
import { Zap, Flame, Trophy, BookOpen, MessageSquare, Mic, Bot, ChevronDown, PenLine, Dumbbell, Clapperboard } from 'lucide-react';
import { DialectId, LanguageId, UserProgress } from '../types';
import { DIALECTS } from '../data/dialects';
import { LANGUAGES, languageInfoOf } from '../data/languages';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  progress: UserProgress;
  onSelectDialect: (dialect: DialectId) => void;
  onOpenCoach: () => void;
  onOpenSport: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  progress,
  onSelectDialect,
  onOpenCoach,
  onOpenSport
}) => {
  const currentDialect = DIALECTS[progress.selectedDialect] || DIALECTS.levantin;
  const language = languageInfoOf(currentDialect.id);
  const accent = language.accent;

  // speed / vocab / studio work for every language; the rest depends on
  // whether the language pack ships that content yet.
  const navItems: { id: string; label: string; icon: React.ElementType; badge?: string }[] = [
    { id: 'speed', label: 'Mode Éclair (Speed 5s)', icon: Zap, badge: '⚡ Turbo' },
    { id: 'vocab', label: 'Les 500 Mots d\'Or', icon: BookOpen },
    ...(language.features.roleplay
      ? [{ id: 'roleplay', label: 'Simulateur de Rue', icon: MessageSquare, badge: 'IA' }]
      : []),
    { id: 'studio', label: 'Studio Doublage', icon: Clapperboard, badge: 'Nouveau' },
    ...(language.features.hacks
      ? [{ id: 'hacks', label: 'Sons & Prononciation', icon: Mic }]
      : []),
    ...(language.features.alphabet
      ? [{ id: 'alphabet', label: 'Alphabet', icon: PenLine, badge: 'Écriture' }]
      : [])
  ];

  const selectClass =
    'appearance-none cursor-pointer bg-stone-800 hover:bg-stone-700/80 text-stone-100 border border-stone-700 rounded-xl pl-3 pr-8 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-colors focus:outline-none';

  return (
    <header className="sticky top-0 z-40 bg-stone-900 text-stone-100 shadow-xl border-b border-stone-800">
      {/* Top Bar: Logo, Language/Variant Selects & Progress */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">

          {/* Logo & Subtitle */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('speed')}>
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3 transition-transform hover:rotate-0"
              style={{ background: `linear-gradient(135deg, ${accent}, ${accent}66)` }}
            >
              <span className={`font-black text-stone-950 ${language.logoGlyph.length > 3 ? 'text-sm sm:text-base' : 'text-xl sm:text-2xl'}`}>
                {language.logoGlyph}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-black tracking-tight" style={{ color: accent }}>
                  {language.brandName}
                </h1>
                <span
                  className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border"
                  style={{ color: accent, backgroundColor: `${accent}22`, borderColor: `${accent}55` }}
                >
                  ⚡ Quotidien
                </span>
              </div>
              <p className="text-xs text-stone-400 hidden sm:block">
                La méthode super accélérée • 0% grammaire scolaire, 100% rue
              </p>
            </div>
          </div>

          {/* Center/Right: language dropdown, then that language's variants */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <select
                  value={language.id}
                  onChange={(e) => onSelectDialect(LANGUAGES[e.target.value as LanguageId].defaultVariant)}
                  className={selectClass}
                  style={{ borderColor: `${accent}88` }}
                  title="Choisir la langue"
                >
                  {Object.values(LANGUAGES).map((lang) => (
                    <option key={lang.id} value={lang.id}>
                      {lang.flag} {lang.name.replace(' du quotidien', '')}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: accent }} />
              </div>
              <div className="relative hidden sm:block">
                <select
                  value={currentDialect.id}
                  onChange={(e) => onSelectDialect(e.target.value as DialectId)}
                  className={selectClass}
                  style={{ borderColor: `${accent}88` }}
                  title={`Choisir le ${language.variantNoun}`}
                >
                  {language.variants.map((variantId) => (
                    <option key={variantId} value={variantId}>
                      {DIALECTS[variantId].flag} {DIALECTS[variantId].name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: accent }} />
              </div>
            </div>

            {/* Stats: Streak & Mastery */}
            <div className="hidden md:flex items-center gap-2 bg-stone-800/80 border border-stone-700/60 px-3 py-1.5 rounded-xl text-xs sm:text-sm">
              <div className="flex items-center gap-1 font-bold" title="Jours consécutifs" style={{ color: accent }}>
                <Flame className="w-4 h-4 animate-bounce" style={{ color: accent, fill: accent }} />
                <span>{progress.streak}j</span>
              </div>
              <div className="h-4 w-[1px] bg-stone-700 my-auto" />
              <div className="flex items-center gap-1 text-emerald-400 font-bold" title="Mots maîtrisés réflexe">
                <Trophy className="w-4 h-4 text-emerald-400" />
                <span>{progress.masteredWords.length} mots</span>
              </div>
            </div>

            {/* Hands-free sport session: reachable from every tab (when the language ships it) */}
            {language.features.sport && (
            <button
              onClick={onOpenSport}
              title="Mode sport : séance mains libres"
              className="hidden sm:flex items-center gap-2 bg-stone-800 hover:bg-stone-700 font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm border border-stone-700 transition-all duration-200 active:scale-95"
              style={{ color: accent }}
            >
              <Dumbbell className="w-4 h-4" />
              <span className="hidden lg:inline">Mode Sport</span>
            </button>
            )}

            {/* IA Coach Button */}
            {language.features.coach && (
            <button
              onClick={onOpenCoach}
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm shadow-lg shadow-emerald-900/40 transition-all duration-200 active:scale-95 border border-emerald-400/30 animate-pulse hover:animate-none"
            >
              <Bot className="w-4 h-4" />
              <span className="hidden lg:inline">Coach Sidi Hakim</span>
              <span className="lg:hidden">IA</span>
            </button>
            )}
          </div>
        </div>

        {/* Variant select on its own row on mobile (no room next to the logo) */}
        <div className="sm:hidden pb-2">
          <div className="relative">
            <select
              value={currentDialect.id}
              onChange={(e) => onSelectDialect(e.target.value as DialectId)}
              className={`${selectClass} w-full`}
              style={{ borderColor: `${accent}88` }}
              title={`Choisir le ${language.variantNoun}`}
            >
              {language.variants.map((variantId) => (
                <option key={variantId} value={variantId}>
                  {DIALECTS[variantId].flag} {DIALECTS[variantId].name}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: accent }} />
          </div>
        </div>
      </div>

      {/* Bottom Navigation Tabs */}
      <div className="bg-stone-950/80 border-t border-stone-800/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-start sm:justify-center gap-1 sm:gap-2 py-2 overflow-x-auto no-scrollbar">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 sm:px-5 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-stone-950 shadow-lg scale-[1.02]'
                      : 'text-stone-300 hover:text-white hover:bg-stone-800'
                  }`}
                  style={isActive ? { backgroundColor: accent, boxShadow: `0 10px 15px -3px ${accent}33` } : undefined}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-stone-950' : 'text-stone-400'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-black uppercase ${
                        isActive
                          ? 'bg-stone-950'
                          : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      }`}
                      style={isActive ? { color: accent } : undefined}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};
