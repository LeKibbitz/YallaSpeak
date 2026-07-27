import { DialectId, VocabCategory } from '../types';
import { VOCABULARY_LIST } from './vocabulary';
import { ARABIC_ALPHABET } from './alphabet';

/**
 * Themes of the hands-free session.
 *
 * The ids are the contract with `/api/gemini/sport`: the server has the same
 * list and refuses anything else. `spoken` is what the coach says out loud when
 * the theme changes, so it has to sound like a sentence, not like a menu entry.
 */
export interface SportTheme {
  id: string;
  label: string;
  icon: string;
  spoken: string;
  /** What to say to switch to it, read out during the intro */
  trigger: string;
}

export const SPORT_THEMES: SportTheme[] = [
  { id: 'rue', label: 'Arabe de rue', icon: '🔥', spoken: "l'arabe de la rue", trigger: 'je veux la rue' },
  { id: 'sons', label: 'Les sons', icon: '🎙️', spoken: 'les sons difficiles', trigger: 'je veux les sons' },
  { id: 'compter', label: 'Compter', icon: '🔢', spoken: 'les chiffres', trigger: 'je veux compter' },
  { id: 'resto', label: 'Café & resto', icon: '☕', spoken: 'le café et le restaurant', trigger: 'je veux le resto' },
  { id: 'taxi', label: 'Taxi & route', icon: '🚕', spoken: 'le taxi et la route', trigger: 'je veux le taxi' },
  { id: 'souk', label: 'Négocier', icon: '🛍️', spoken: 'la négociation au souk', trigger: 'je veux négocier' },
  { id: 'libre', label: 'Discussion libre', icon: '💬', spoken: 'la discussion libre', trigger: 'je veux discuter' }
];

export const DEFAULT_SPORT_THEME = 'rue';

export function findTheme(id: string): SportTheme {
  return SPORT_THEMES.find((theme) => theme.id === id) || SPORT_THEMES[0];
}

/** One thing to say and repeat. `tip` is spoken too, when there is one. */
export interface DrillCard {
  id: string;
  french: string;
  phonetic: string;
  arabic: string;
  tip?: string;
}

const THEME_CATEGORIES: Record<string, VocabCategory[]> = {
  rue: ['salutations', 'emotions_argot', 'verbes_moteurs'],
  compter: ['chiffres'],
  resto: ['cafe_resto'],
  taxi: ['taxi_directions', 'urgences_quotidien'],
  souk: ['negociation_souk'],
  libre: [
    'salutations',
    'cafe_resto',
    'taxi_directions',
    'negociation_souk',
    'emotions_argot',
    'verbes_moteurs',
    'urgences_quotidien',
    'chiffres'
  ]
};

/**
 * Deterministic shuffle.
 *
 * A seed rather than Math.random so a paused session resumed on the same theme
 * keeps the same order instead of starting the deck over in a new one.
 */
function shuffle<T>(items: T[], seed: number): T[] {
  const out = items.slice();
  let state = seed || 1;
  for (let i = out.length - 1; i > 0; i--) {
    state = (state * 1103515245 + 12345) % 2147483648;
    const j = state % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * The deck the session falls back on: entirely local, so a spent AI quota or a
 * dead network in the middle of a run costs nothing. The coach only comes in
 * when there is something to say back.
 */
export function buildDeck(themeId: string, dialect: DialectId, seed: number): DrillCard[] {
  if (themeId === 'sons') {
    return shuffle(ARABIC_ALPHABET, seed).map((letter) => ({
      id: `son-${letter.id}`,
      french: `La lettre ${letter.translit}`,
      phonetic: letter.example.translit,
      arabic: letter.example.ar,
      tip: letter.hack
    }));
  }

  const categories = THEME_CATEGORIES[themeId] || THEME_CATEGORIES.libre;
  const items = VOCABULARY_LIST.filter((item) => categories.includes(item.category));

  return shuffle(items, seed).map((item) => {
    const variant = item.dialects?.[dialect];
    return {
      id: item.id,
      french: item.french,
      phonetic: variant?.phonetic || item.phonetic,
      arabic: variant?.arabic || item.arabic,
      tip: variant?.note || item.tip
    };
  });
}
