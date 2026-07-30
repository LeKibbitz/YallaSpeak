import React from 'react';
import { Mic, Volume2, Sparkles, CheckCircle, ShieldAlert, ArrowRight, HelpCircle, Heart, Zap } from 'lucide-react';
import { PRONUNCIATION_HACKS } from '../data/vocabulary';
import { DIALECTS } from '../data/dialects';
import { DialectId } from '../types';
import { AudioPlayerButton } from './AudioPlayerButton';

interface PronunciationGuideProps {
  selectedDialect: DialectId;
}

export const PronunciationGuide: React.FC<PronunciationGuideProps> = ({ selectedDialect }) => {
  const currentDialectInfo = DIALECTS[selectedDialect];

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-8 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 p-6 sm:p-8 rounded-3xl border border-stone-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent border border-accent/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Mic className="w-3.5 h-3.5" /> Démystification totale
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Les Sons "Secrets" & Spécificités Émiraties
          </h2>
          <p className="text-xs sm:text-sm text-stone-300">
            Oubliez les cours de phonétique compliqués. Voici les astuces corporelles et les particularités de prononciation (dont les secrets du Golfe & Émirats 🇦🇪) pour parler avec un accent naturel dès aujourd'hui !
          </p>
        </div>

        <div className="bg-stone-950/80 p-4 rounded-2xl border border-stone-800 shrink-0 text-center">
          <div className="text-xs text-stone-400">Accent Ciblé</div>
          <div className="text-lg font-black text-accent flex items-center justify-center gap-1.5 mt-0.5">
            <span>{currentDialectInfo.flag}</span>
            <span>{currentDialectInfo.name.split(' ')[0]}</span>
          </div>
        </div>
      </div>

      {/* The Hacks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PRONUNCIATION_HACKS.map((hack, idx) => {
          const badge = hack.badge;
          return (
            <div
              key={idx}
              className={`rounded-3xl p-6 shadow-xl flex flex-col justify-between transition-all ${
                badge
                  ? 'bg-gradient-to-b from-stone-900 via-stone-900 to-accent/10 border-2 border-accent/60 shadow-accent/10'
                  : 'bg-stone-900 border border-stone-800 hover:border-stone-600'
              }`}
            >
              <div>
                {badge && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black bg-gradient-to-r from-accent/20 to-emerald-500/20 text-accent border border-accent/40 mb-3 shadow-sm">
                    <span>✨</span>
                    <span>{badge}</span>
                  </div>
                )}
                {/* Title & Badge */}
                <div className="flex items-center justify-between border-b border-stone-800 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-accent to-accent/80 text-stone-950 font-black text-lg flex items-center justify-center shadow">
                      #{idx + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-white">{hack.letter}</h3>
                      <span className="text-xs text-accent font-semibold">Le son arabe authentique</span>
                    </div>
                  </div>
                </div>

              {/* Description */}
              <div className="space-y-3">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-1">
                    À quoi ça ressemble ?
                  </div>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {hack.sound}
                  </p>
                </div>

                {/* The Body Hack */}
                <div className="bg-stone-950/90 rounded-2xl p-4 border border-accent/30 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-accent uppercase tracking-wide">
                    <Zap className="w-4 h-4 fill-accent" />
                    <span>Le "Hack" Physique Facile :</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-medium">
                    {hack.hack}
                  </p>
                </div>
              </div>
            </div>

            {/* The word the audio actually says: script, phonetic, meaning */}
            <div className="mt-5 pt-4 border-t border-stone-800/80 bg-stone-950/40 p-4 rounded-xl space-y-3">
              <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">
                Le mot à répéter
              </span>
              <div className="flex items-end justify-between gap-3">
                <div className="min-w-0">
                  <div
                    className="text-3xl sm:text-4xl font-bold text-white leading-tight"
                    style={{ fontFamily: 'Amiri, serif' }}
                    dir="rtl"
                    lang="ar"
                  >
                    {hack.arabic}
                  </div>
                  <div className="text-base font-black text-accent mt-1">{hack.phonetic}</div>
                  <div className="text-xs text-stone-300 mt-0.5">{hack.french}</div>
                </div>
                <AudioPlayerButton
                  text={hack.phonetic}
                  arabicText={hack.speakPhonetic ? undefined : hack.arabic}
                  dialect={selectedDialect}
                  label="Écouter"
                  size="sm"
                  className="shrink-0"
                />
              </div>
            </div>
          </div>
        );
      })}
      </div>

      {/* Why Arabizi (Phonetic alphabet) is good for speed learning */}
      <div className="bg-gradient-to-br from-stone-900 via-stone-850 to-stone-900 p-6 sm:p-8 rounded-3xl border border-stone-800 shadow-xl space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-black">
            💡
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Pourquoi nous utilisons l'Arabizi (Phonétique) dans notre méthode accélérée ?
            </h3>
            <p className="text-xs text-stone-400">Le secret des diplomates et des voyageurs fréquents</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="bg-stone-950 p-4 rounded-2xl border border-stone-800">
            <h4 className="text-sm font-bold text-accent mb-1">1. Gain de temps immédiat (6 mois d'économie)</h4>
            <p className="text-xs text-stone-300">
              Apprendre à lire l'alphabet arabe couramment et sans voyelles prend des mois. La phonétique vous permet de parler dès la première minute !
            </p>
          </div>
          <div className="bg-stone-950 p-4 rounded-2xl border border-stone-800">
            <h4 className="text-sm font-bold text-emerald-400 mb-1">2. C'est l'alphabet des jeunes sur WhatsApp</h4>
            <p className="text-xs text-stone-300">
              Dans tout le monde arabe, les jeunes écrivent leurs SMS en alphabet latin avec des chiffres (ex: 3 pour Ain, 7 pour H, 5 pour Kh). Vous apprenez le code des natifs !
            </p>
          </div>
          <div className="bg-stone-950 p-4 rounded-2xl border border-stone-800">
            <h4 className="text-sm font-bold text-teal-400 mb-1">3. L'écoute avant la vue</h4>
            <p className="text-xs text-stone-300">
              Comme un enfant qui apprend sa langue maternelle, vos réflexes vocaux se développent 3 fois plus vite par l'oreille que par la lecture visuelle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
