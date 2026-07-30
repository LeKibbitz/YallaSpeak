/**
 * A language of the app. Adding one = adding its variants to DialectId,
 * its entry in LANGUAGES (data/languages.ts) and its vocabulary file.
 */
export type LanguageId = 'arabe' | 'italien' | 'mandarin';

/**
 * How a language is written. The 'non-latin' group (arabe, thaï, han,
 * kana, cyrillique...) is the priority target of the method: those
 * languages are learned pronunciation-first, exactly like the Arabic
 * version: the phonetic field is the learning material, the native
 * script stays an optional module (the Alphabet tab), never a
 * prerequisite learned letter by letter.
 */
export type ScriptGroup = 'latin' | 'non-latin';

export interface ScriptInfo {
  id: 'latin' | 'arabic' | 'cyrillic' | 'thai' | 'han' | 'kana';
  label: string;
  group: ScriptGroup;
  direction: 'ltr' | 'rtl';
  /** True = learn by sound, the script is a separate optional module. */
  phoneticFirst: boolean;
  /** Extra CSS class for rendering the native script, if any. */
  fontClass?: string;
}

export interface LanguageInfo {
  id: LanguageId;
  /** Display name, e.g. "Arabe du quotidien". */
  name: string;
  flag: string;
  tagline: string;
  /** Per-language brand: "YallaSpeak" for Arabic, "DaiSpeak" for Italian... */
  brandName: string;
  /** Short interjection shown in the logo square ("يلا", "Dai!"). */
  logoGlyph: string;
  script: ScriptInfo;
  /** What the variants are called in this language ("dialecte", "accent régional"...). */
  variantNoun: string;
  variants: DialectId[];
  defaultVariant: DialectId;
  /** Tabs/features that have content for this language. */
  features: {
    roleplay: boolean;
    hacks: boolean;
    alphabet: boolean;
    coach: boolean;
    sport: boolean;
  };
}

/**
 * A variant of a language: Arabic dialect or Italian regional accent.
 * Ids are globally unique across languages: the language is derived
 * from the variant, so stored progress needs no migration.
 */
export type DialectId =
  | 'levantin'
  | 'egyptien'
  | 'darija'
  | 'golfe'
  | 'italien_standard'
  | 'milanais'
  | 'romanesco'
  | 'napolitain'
  | 'mandarin_standard'
  | 'pekinois'
  | 'taiwanais'
  | 'dongbei';

export interface DialectInfo {
  id: DialectId;
  name: string;
  flag: string;
  countries: string[];
  description: string;
  vibe: string;
  signatureWord: {
    word: string;
    meaning: string;
    /** Written form in the language's own script (Arabic script, Italian text...). */
    arabic: string;
  };
  popularMedia: string;
}

export type VocabCategory = 
  | 'salutations'
  | 'cafe_resto'
  | 'taxi_directions'
  | 'negociation_souk'
  | 'emotions_argot'
  | 'verbes_moteurs'
  | 'urgences_quotidien'
  | 'chiffres';

export interface VocabItem {
  id: string;
  category: VocabCategory;
  french: string;
  literalTranslation?: string;
  phonetic: string;
  /**
   * Written form in the language's own script. Historical field name from
   * the Arabic-only era, kept to avoid rewriting the data files and the
   * TTS cache keys; for Italian it simply holds the Italian text.
   */
  arabic: string;
  dialects?: {
    [key in DialectId]?: {
      phonetic: string;
      arabic: string;
      note?: string;
    };
  };
  tip?: string;
  difficulty: 1 | 2 | 3; // 1: Survie immédiate, 2: Courant, 3: Argot/Expert
}

export interface DialogueLine {
  speaker: 'Natif' | 'Moi';
  arabic: string;
  phonetic: string;
  french: string;
  tip?: string;
}

export interface ScenarioDialogue {
  id: string;
  title: string;
  dialect: DialectId;
  category: VocabCategory;
  description: string;
  lines: DialogueLine[];
  survivalHack?: string;
}

export interface UserProgress {
  selectedDialect: DialectId;
  xp: number;
  streak: number;
  masteredWords: string[]; // vocab item ids
  savedWords: string[];
  completedScenarios: string[];
}

export interface ArabicLetter {
  id: string;
  char: string;
  name: string; // Arabic name of the letter
  translit: string;
  sound: string;
  hack: string;
  example: { ar: string; translit: string; fr: string };
  /** Pen centreline for the isolated form, in the 100x100 writing viewBox */
  penPath: string;
  /**
   * Diacritic dots, same viewBox, measured from the Amiri outlines (a group of
   * touching dots comes out as one blob, which is also how a hand writes them).
   * A hand lifts the pen for these, so they are punched out of the body reveal
   * and land afterwards, in order.
   */
  dots?: { x: number; y: number; r: number }[];
}

export interface AICoachMessage {
  id: string;
  sender: 'user' | 'hakim';
  text: string;
  timestamp: string;
}
