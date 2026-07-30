import { DialectId, LanguageId, LanguageInfo, ScriptInfo, VocabItem } from '../types';
import { VOCABULARY_LIST } from './vocabulary';
import { VOCABULARY_LIST_IT } from './vocabulary.italian';
import { VOCABULARY_LIST_MD } from './vocabulary.mandarin';

/**
 * Writing systems known to the app. The 'non-latin' group is the heart of
 * the method: for those languages the fast track is pronunciation-first
 * (the phonetic field IS the course), the native script being a separate
 * optional module. Scripts already declared for the roadmap languages
 * (thaï → thai, mandarin → han, japonais → kana, russe → cyrillic) so a
 * new language only has to point at its script.
 */
export const SCRIPTS: Record<ScriptInfo['id'], ScriptInfo> = {
  latin: {
    id: 'latin',
    label: 'Alphabet latin',
    group: 'latin',
    direction: 'ltr',
    phoneticFirst: false
  },
  arabic: {
    id: 'arabic',
    label: 'Alphabet arabe',
    group: 'non-latin',
    direction: 'rtl',
    phoneticFirst: true,
    fontClass: 'font-arabic'
  },
  cyrillic: {
    id: 'cyrillic',
    label: 'Alphabet cyrillique',
    group: 'non-latin',
    direction: 'ltr',
    phoneticFirst: true
  },
  thai: {
    id: 'thai',
    label: 'Écriture thaïe',
    group: 'non-latin',
    direction: 'ltr',
    phoneticFirst: true
  },
  han: {
    id: 'han',
    label: 'Caractères chinois (hanzi)',
    group: 'non-latin',
    direction: 'ltr',
    phoneticFirst: true
  },
  kana: {
    id: 'kana',
    label: 'Kana & kanji',
    group: 'non-latin',
    direction: 'ltr',
    phoneticFirst: true
  }
};

export const LANGUAGES: Record<LanguageId, LanguageInfo> = {
  arabe: {
    id: 'arabe',
    name: 'Arabe du quotidien',
    flag: '🕌',
    brandName: 'YallaSpeak',
    logoGlyph: 'يلا',
    tagline: "0% grammaire littéraire, 100% rue : le parler réel de Beyrouth au Caire.",
    script: SCRIPTS.arabic,
    variantNoun: 'dialecte',
    variants: ['levantin', 'egyptien', 'darija', 'golfe'],
    defaultVariant: 'levantin',
    features: { roleplay: true, hacks: true, alphabet: true, coach: true, sport: true }
  },
  italien: {
    id: 'italien',
    name: 'Italien du quotidien',
    flag: '🇮🇹',
    // "Dai!" is the Italian "yalla": same brand, local energy.
    brandName: 'DaiSpeak',
    logoGlyph: 'Dai!',
    tagline: "L'italien qui se parle vraiment, de l'aperitivo milanais à la pizzeria napolitaine.",
    script: SCRIPTS.latin,
    variantNoun: 'accent régional',
    variants: ['italien_standard', 'milanais', 'romanesco', 'napolitain'],
    defaultVariant: 'italien_standard',
    // Roleplay/sounds/alphabet/coach: Arabic-only content for now
    features: { roleplay: false, hacks: false, alphabet: false, coach: false, sport: false }
  },
  mandarin: {
    id: 'mandarin',
    name: 'Mandarin du quotidien',
    flag: '🀄',
    // "Zǒu ba!" (走吧, "allez, on y va") is the Mandarin "yalla".
    brandName: 'ZouSpeak',
    logoGlyph: '走吧',
    tagline: "Le mandarin qui se parle vraiment, des hutongs de Pékin aux night markets de Taipei.",
    script: SCRIPTS.han,
    variantNoun: 'accent régional',
    variants: ['mandarin_standard', 'pekinois', 'taiwanais', 'dongbei'],
    defaultVariant: 'mandarin_standard',
    // Roleplay/sounds/alphabet/coach: Arabic-only content for now
    features: { roleplay: false, hacks: false, alphabet: false, coach: false, sport: false }
  }
};

const VOCABULARIES: Record<LanguageId, VocabItem[]> = {
  arabe: VOCABULARY_LIST,
  italien: VOCABULARY_LIST_IT,
  mandarin: VOCABULARY_LIST_MD
};

/** Variant ids are globally unique, so the variant alone names its language. */
const VARIANT_TO_LANGUAGE: Record<DialectId, LanguageId> = Object.fromEntries(
  Object.values(LANGUAGES).flatMap((lang) => lang.variants.map((v) => [v, lang.id]))
) as Record<DialectId, LanguageId>;

export function languageOf(variant: DialectId): LanguageId {
  return VARIANT_TO_LANGUAGE[variant] || 'arabe';
}

export function languageInfoOf(variant: DialectId): LanguageInfo {
  return LANGUAGES[languageOf(variant)];
}

export function scriptOf(variant: DialectId): ScriptInfo {
  return languageInfoOf(variant).script;
}

export function vocabularyOf(variant: DialectId): VocabItem[] {
  return VOCABULARIES[languageOf(variant)];
}
