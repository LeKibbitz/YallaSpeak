import { DialectId, LanguageId, LanguageInfo, ScriptInfo, VocabItem } from '../types';
import { VOCABULARY_LIST } from './vocabulary';
import { VOCABULARY_LIST_IT } from './vocabulary.italian';
import { VOCABULARY_LIST_MD } from './vocabulary.mandarin';
import { VOCABULARY_LIST_TH } from './vocabulary.thai';
import { VOCABULARY_LIST_JP } from './vocabulary.japanese';
import { VOCABULARY_LIST_RU } from './vocabulary.russian';
import { VOCABULARY_LIST_EL } from './vocabulary.greek';
import { VOCABULARY_LIST_MG } from './vocabulary.malagasy';
import { VOCABULARY_LIST_ES } from './vocabulary.spanish';
import { VOCABULARY_LIST_PT } from './vocabulary.portuguese';

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
  },
  greek: {
    id: 'greek',
    label: 'Alphabet grec',
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
  },
  thai: {
    id: 'thai',
    name: 'Thaï du quotidien',
    flag: '🇹🇭',
    // "Pai!" (ไป, "go!") is the Thai "yalla".
    brandName: 'PaiSpeak',
    logoGlyph: 'ไป!',
    tagline: "Le thaï qui se parle vraiment, des street foods de Bangkok aux montagnes de Chiang Mai.",
    script: SCRIPTS.thai,
    variantNoun: 'parler régional',
    variants: ['thai_central', 'isan', 'thai_nord'],
    defaultVariant: 'thai_central',
    features: { roleplay: false, hacks: false, alphabet: false, coach: false, sport: false }
  },
  japonais: {
    id: 'japonais',
    name: 'Japonais du quotidien',
    flag: '🗾',
    // "Ikuzo!" (行くぞ, "let's go!") is the Japanese "yalla".
    brandName: 'IkuzoSpeak',
    logoGlyph: '行くぞ',
    tagline: "Le japonais qui se parle vraiment, des izakayas de Tokyo aux comptoirs à ramen de Fukuoka.",
    script: SCRIPTS.kana,
    variantNoun: 'dialecte régional',
    variants: ['japonais_standard', 'kansai', 'hakata'],
    defaultVariant: 'japonais_standard',
    features: { roleplay: false, hacks: false, alphabet: false, coach: false, sport: false }
  },
  russe: {
    id: 'russe',
    name: 'Russe du quotidien',
    flag: '🪆',
    // "Davaï!" (Давай) is the Russian "yalla".
    brandName: 'DavaiSpeak',
    logoGlyph: 'Давай',
    tagline: "Le russe qui se parle vraiment, du métro de Moscou aux cours d'immeubles de Saint-Pétersbourg.",
    script: SCRIPTS.cyrillic,
    variantNoun: 'accent régional',
    variants: ['russe_standard', 'piterski', 'russe_sud'],
    defaultVariant: 'russe_standard',
    features: { roleplay: false, hacks: false, alphabet: false, coach: false, sport: false }
  },
  grec: {
    id: 'grec',
    name: 'Grec du quotidien',
    flag: '🇬🇷',
    // "Páme!" (Πάμε, "let's go!") is the Greek "yalla".
    brandName: 'PameSpeak',
    logoGlyph: 'Πάμε!',
    tagline: "Le grec qui se parle vraiment, des terrasses d'Athènes aux tavernes de Crète.",
    script: SCRIPTS.greek,
    variantNoun: 'variante régionale',
    variants: ['grec_standard', 'cretois', 'chypriote'],
    defaultVariant: 'grec_standard',
    features: { roleplay: false, hacks: false, alphabet: false, coach: false, sport: false }
  },
  malgache: {
    id: 'malgache',
    name: 'Malgache du quotidien',
    flag: '🇲🇬',
    // "Andao!" ("let's go!") is the Malagasy "yalla".
    brandName: 'AndaoSpeak',
    logoGlyph: 'Andao!',
    tagline: "Le malgache qui se parle vraiment, des collines de Tana aux pirogues vezo.",
    script: SCRIPTS.latin,
    variantNoun: 'dialecte',
    variants: ['merina', 'cotier'],
    defaultVariant: 'merina',
    features: { roleplay: false, hacks: false, alphabet: false, coach: false, sport: false }
  },
  espagnol: {
    id: 'espagnol',
    name: 'Espagnol du quotidien',
    flag: '🇪🇸',
    // "¡Vamos!" is the Spanish "yalla".
    brandName: 'VamosSpeak',
    logoGlyph: '¡Vamos!',
    tagline: "L'espagnol qui se parle vraiment, des bars de Madrid aux taquerías de Mexico.",
    script: SCRIPTS.latin,
    variantNoun: 'variante régionale',
    variants: ['castillan', 'andalou', 'mexicain', 'argentin'],
    defaultVariant: 'castillan',
    features: { roleplay: false, hacks: false, alphabet: false, coach: false, sport: false }
  },
  portugais: {
    id: 'portugais',
    name: 'Portugais du quotidien',
    flag: '🇵🇹',
    // "Bora!" (from "embora", "let's go!") is the Portuguese "yalla".
    brandName: 'BoraSpeak',
    logoGlyph: 'Bora!',
    tagline: "Le portugais qui se parle vraiment, des tascas de Lisbonne aux plages de Rio.",
    script: SCRIPTS.latin,
    variantNoun: 'variante',
    variants: ['portugais_pt', 'bresilien', 'angolais'],
    defaultVariant: 'portugais_pt',
    features: { roleplay: false, hacks: false, alphabet: false, coach: false, sport: false }
  }
};

const VOCABULARIES: Record<LanguageId, VocabItem[]> = {
  arabe: VOCABULARY_LIST,
  italien: VOCABULARY_LIST_IT,
  mandarin: VOCABULARY_LIST_MD,
  thai: VOCABULARY_LIST_TH,
  japonais: VOCABULARY_LIST_JP,
  russe: VOCABULARY_LIST_RU,
  grec: VOCABULARY_LIST_EL,
  malgache: VOCABULARY_LIST_MG,
  espagnol: VOCABULARY_LIST_ES,
  portugais: VOCABULARY_LIST_PT
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
