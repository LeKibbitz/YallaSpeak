export type DialectId = 'levantin' | 'egyptien' | 'darija' | 'golfe';

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
  | 'urgences_quotidien';

export interface VocabItem {
  id: string;
  category: VocabCategory;
  french: string;
  literalTranslation?: string;
  phonetic: string;
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
}

export interface AICoachMessage {
  id: string;
  sender: 'user' | 'hakim';
  text: string;
  timestamp: string;
}
