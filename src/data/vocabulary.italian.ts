import { VocabItem } from '../types';

/**
 * Italian vocabulary pack — same categories and philosophy as the Arabic
 * list: the everyday spoken language, not the textbook one. The `arabic`
 * field holds the written Italian, `phonetic` a French-friendly reading.
 * Variants carry the regional flavour (Rome, Naples, Milan).
 */
export const VOCABULARY_LIST_IT: VocabItem[] = [

  /* ------------------------- Salutations ------------------------- */
  {
    id: 'it-sal-1',
    category: 'salutations',
    french: 'Salut ! (bonjour et au revoir)',
    phonetic: 'tchaò',
    arabic: 'Ciao!',
    dialects: {
      napolitain: { phonetic: 'ouè', arabic: 'Uè!', note: "Le « Uè » napolitain remplace ciao entre amis." },
      romanesco: { phonetic: 'aò', arabic: 'Aò!', note: "« Aò » : l'interpellation romaine par excellence." }
    },
    tip: "Un seul mot pour arriver ET partir : rentabilité maximale.",
    difficulty: 1
  },
  {
    id: 'it-sal-2',
    category: 'salutations',
    french: 'Bonjour (le matin/journée)',
    phonetic: 'bouonn DJOR-no',
    arabic: 'Buongiorno',
    dialects: {
      napolitain: { phonetic: 'bouon-DJOR-no ouè', arabic: "Buongiorno, uè!", note: "Souvent accompagné d'un geste de la main." }
    },
    tip: "Après 14h, basculez sur « buonasera » : les Italiens y tiennent.",
    difficulty: 1
  },
  {
    id: 'it-sal-3',
    category: 'salutations',
    french: 'Bonsoir',
    phonetic: 'bouona-SÉ-ra',
    arabic: 'Buonasera',
    difficulty: 1
  },
  {
    id: 'it-sal-4',
    category: 'salutations',
    french: 'Comment ça va ?',
    phonetic: 'KO-mé staï',
    arabic: 'Come stai?',
    dialects: {
      romanesco: { phonetic: 'ko-me sta-AÏ, tou-to a-PO-sto?', arabic: "Come stai? Tutto a posto?", note: "« Tutto a posto? » = tout est en ordre ?" },
      napolitain: { phonetic: 'komm sta-yé', arabic: "Comme staje?", note: "Version napolitaine, très chantée." }
    },
    tip: "Réponse standard : « Tutto bene! » (tout va bien).",
    difficulty: 1
  },
  {
    id: 'it-sal-5',
    category: 'salutations',
    french: 'Merci (beaucoup)',
    phonetic: 'GRA-tsié (MIL-lé)',
    arabic: 'Grazie (mille)',
    tip: "« Grazie mille » = merci mille fois. Le -zie se prononce -tsié, jamais -zi.",
    difficulty: 1
  },
  {
    id: 'it-sal-6',
    category: 'salutations',
    french: "De rien / je t'en prie",
    phonetic: 'PRÉ-go',
    arabic: 'Prego',
    tip: "Mot magique : de rien, entrez, allez-y, je vous écoute... tout est prego.",
    difficulty: 1
  },
  {
    id: 'it-sal-7',
    category: 'salutations',
    french: 'Excusez-moi / pardon',
    phonetic: 'SKOU-zi / SKOU-za',
    arabic: 'Scusi / Scusa',
    tip: "« Scusi » en vouvoiement (serveur, inconnu), « scusa » entre amis.",
    difficulty: 1
  },
  {
    id: 'it-sal-8',
    category: 'salutations',
    french: 'Enchanté !',
    phonetic: 'pia-TCHÉ-ré',
    arabic: 'Piacere!',
    difficulty: 2
  },

  /* ------------------------- Café & Resto ------------------------- */
  {
    id: 'it-caf-1',
    category: 'cafe_resto',
    french: 'Un café, s\'il vous plaît',
    phonetic: 'oun kaf-FÈ, pér fa-VO-ré',
    arabic: 'Un caffè, per favore',
    dialects: {
      napolitain: { phonetic: "oun kaf-FÈ, dja'", arabic: "Un caffè, jà!", note: "À Naples, le café est une religion : toujours serré, debout au comptoir." }
    },
    tip: "« Un caffè » = un expresso. Ne demandez jamais « un expresso », c'est redondant.",
    difficulty: 1
  },
  {
    id: 'it-caf-2',
    category: 'cafe_resto',
    french: "L'addition, s'il vous plaît",
    phonetic: 'il KON-to, pér fa-VO-ré',
    arabic: 'Il conto, per favore',
    difficulty: 1
  },
  {
    id: 'it-caf-3',
    category: 'cafe_resto',
    french: 'C\'est délicieux !',
    phonetic: 'è bouo-NIS-si-mo',
    arabic: 'È buonissimo!',
    dialects: {
      napolitain: { phonetic: 'è na dé-LI-tsia', arabic: "È 'na delizia!", note: "Avec le geste de la main qui pivote, obligatoire." },
      romanesco: { phonetic: 'è la FI-né dér MON-no', arabic: "È la fine der monno!", note: "« La fin du monde » : le compliment suprême à Rome." }
    },
    tip: "Le superlatif en -issimo marche partout : buonissimo, bellissimo...",
    difficulty: 1
  },
  {
    id: 'it-caf-4',
    category: 'cafe_resto',
    french: 'Je voudrais...',
    phonetic: 'vor-RÈ-i',
    arabic: 'Vorrei...',
    tip: "Le conditionnel poli : « Vorrei una pizza margherita ». Passe-partout.",
    difficulty: 1
  },
  {
    id: 'it-caf-5',
    category: 'cafe_resto',
    french: 'Une table pour deux',
    phonetic: 'oun TA-vo-lo pér DOU-é',
    arabic: 'Un tavolo per due',
    difficulty: 2
  },
  {
    id: 'it-caf-6',
    category: 'cafe_resto',
    french: "Qu'est-ce que vous me conseillez ?",
    phonetic: 'KO-za mi kon-SI-lia',
    arabic: 'Cosa mi consiglia?',
    tip: "La question qui fait plaisir au serveur et débloque les vrais plats du jour.",
    difficulty: 2
  },
  {
    id: 'it-caf-7',
    category: 'cafe_resto',
    french: "Un verre de vin rouge / blanc",
    phonetic: 'oun bik-KIÉ-ré di VI-no ROS-so / BIAN-ko',
    arabic: 'Un bicchiere di vino rosso / bianco',
    difficulty: 2
  },
  {
    id: 'it-caf-8',
    category: 'cafe_resto',
    french: "On prend l'apéro ?",
    phonetic: 'fa-TCHIA-mo la-pé-ri-TI-vo?',
    arabic: "Facciamo l'aperitivo?",
    dialects: {
      milanais: { phonetic: 'a-pé-ri-TI-vo? DAÏ, an-DIA-mo', arabic: "Aperitivo? Dai, andiamo!", note: "Milan a inventé l'apericena : l'apéro qui remplace le dîner." }
    },
    tip: "L'aperitivo (18h-20h) est une institution : spritz + buffet.",
    difficulty: 2
  },

  /* ------------------------- Taxi & Directions ------------------------- */
  {
    id: 'it-tax-1',
    category: 'taxi_directions',
    french: 'Où est... ?',
    phonetic: 'DO-vé...',
    arabic: "Dov'è...?",
    tip: "« Dov'è la stazione? » (la gare), « Dov'è il bagno? » (les toilettes : vital).",
    difficulty: 1
  },
  {
    id: 'it-tax-2',
    category: 'taxi_directions',
    french: 'Tout droit',
    phonetic: 'SÈM-pré DRIT-to',
    arabic: 'Sempre dritto',
    tip: "Littéralement « toujours droit ». La réponse italienne par défaut, même quand c'est faux.",
    difficulty: 1
  },
  {
    id: 'it-tax-3',
    category: 'taxi_directions',
    french: 'À droite / à gauche',
    phonetic: 'a DÈS-tra / a si-NIS-tra',
    arabic: 'A destra / a sinistra',
    difficulty: 1
  },
  {
    id: 'it-tax-4',
    category: 'taxi_directions',
    french: "C'est loin / c'est près ?",
    phonetic: 'è lon-TA-no / è vi-TCHI-no?',
    arabic: 'È lontano / è vicino?',
    difficulty: 2
  },
  {
    id: 'it-tax-5',
    category: 'taxi_directions',
    french: 'Arrêtez-vous ici, merci',
    phonetic: 'si FÈR-mi kouï, GRA-tsié',
    arabic: 'Si fermi qui, grazie',
    difficulty: 2
  },
  {
    id: 'it-tax-6',
    category: 'taxi_directions',
    french: 'Le train / le bus / le métro',
    phonetic: 'il TRÈ-no / laou-to-BOUS / la mé-tro',
    arabic: "Il treno / l'autobus / la metro",
    difficulty: 1
  },

  /* ------------------------- Négociation & Achats ------------------------- */
  {
    id: 'it-neg-1',
    category: 'negociation_souk',
    french: 'Combien ça coûte ?',
    phonetic: 'KOUAN-to KOS-ta?',
    arabic: 'Quanto costa?',
    dialects: {
      romanesco: { phonetic: "a KOUAN-to sta?", arabic: 'A quanto sta?', note: "Version marché de Rome." },
      napolitain: { phonetic: 'KOUAN-to vé-né?', arabic: 'Quanto vene?', note: "Sur les marchés de Naples." }
    },
    tip: "LA phrase à dégainer partout : marché, boutique, taxi.",
    difficulty: 1
  },
  {
    id: 'it-neg-2',
    category: 'negociation_souk',
    french: "C'est trop cher !",
    phonetic: 'è TROP-po KA-ro!',
    arabic: 'È troppo caro!',
    dialects: {
      romanesco: { phonetic: 'ma stai a skér-TSA? è na ra-PI-na!', arabic: 'Ma stai a scherzà? È una rapina!', note: "« Tu plaisantes ? C'est un braquage ! » : théâtral, efficace." }
    },
    tip: "Sur les marchés du Sud, on négocie ; dans les boutiques, non.",
    difficulty: 1
  },
  {
    id: 'it-neg-3',
    category: 'negociation_souk',
    french: 'Vous me faites un prix ?',
    phonetic: 'mi fa oun PRÈ-tso?',
    arabic: 'Mi fa un prezzo?',
    tip: "Avec le sourire. « Mi fa uno sconto? » (une remise) marche aussi.",
    difficulty: 2
  },
  {
    id: 'it-neg-4',
    category: 'negociation_souk',
    french: 'Je regarde seulement, merci',
    phonetic: 'STO SO-lo gouar-DAN-do, GRA-tsié',
    arabic: 'Sto solo guardando, grazie',
    difficulty: 2
  },
  {
    id: 'it-neg-5',
    category: 'negociation_souk',
    french: "D'accord, je le prends !",
    phonetic: 'va BÈ-né, lo PRÈN-do!',
    arabic: 'Va bene, lo prendo!',
    difficulty: 1
  },
  {
    id: 'it-neg-6',
    category: 'negociation_souk',
    french: 'On peut payer par carte ?',
    phonetic: 'si pouò pa-GA-ré kon la KAR-ta?',
    arabic: 'Si può pagare con la carta?',
    tip: "Réponse fréquente au Sud : « Solo contanti » (espèces seulement).",
    difficulty: 2
  },

  /* ------------------------- Émotions & Argot ------------------------- */
  {
    id: 'it-emo-1',
    category: 'emotions_argot',
    french: 'Allez ! / Vas-y ! / Courage !',
    phonetic: 'DAÏ!',
    arabic: 'Dai!',
    dialects: {
      romanesco: { phonetic: 'DA-djé!', arabic: 'Daje!', note: "LE mot de Rome. Encouragement, joie, impatience : tout." },
      napolitain: { phonetic: 'DJAM-mé!', arabic: 'Jamme!', note: "« Jamme jà » : allez, on y va !" }
    },
    tip: "Le couteau suisse émotionnel italien : allez, arrête, sérieux ?!",
    difficulty: 1
  },
  {
    id: 'it-emo-2',
    category: 'emotions_argot',
    french: 'Trop bien / trop cool !',
    phonetic: 'ké FI-go!',
    arabic: 'Che figo!',
    dialects: {
      milanais: { phonetic: 'FI-go!', arabic: 'Figo!', note: "L'adjectif signature du Nord." },
      romanesco: { phonetic: 'ké fi-ga-TA!', arabic: 'Che figata!', note: "« Che figata » : quel truc génial." }
    },
    difficulty: 1
  },
  {
    id: 'it-emo-3',
    category: 'emotions_argot',
    french: 'Quel dommage !',
    phonetic: 'ké pék-KA-to!',
    arabic: 'Che peccato!',
    difficulty: 1
  },
  {
    id: 'it-emo-4',
    category: 'emotions_argot',
    french: 'Pas de souci / tranquille',
    phonetic: 'tran-KOUIL-lo',
    arabic: 'Tranquillo',
    dialects: {
      romanesco: { phonetic: 'sta TRAN-kouil-lo, ao', arabic: 'Sta tranquillo, aò', note: "Souvent raccourci en « tranqui »." }
    },
    tip: "Réponse à toute excuse : « Tranquillo! » avec un geste apaisant.",
    difficulty: 1
  },
  {
    id: 'it-emo-5',
    category: 'emotions_argot',
    french: 'Mamma mia ! (surprise, exaspération)',
    phonetic: 'MAM-ma MI-a!',
    arabic: 'Mamma mia!',
    dialects: {
      napolitain: { phonetic: "mamma d'ô Kar-mi-né!", arabic: "Mamma d'o Carmine!", note: "Version napolitaine invoquant la Madonna del Carmine." }
    },
    tip: "Oui, les Italiens le disent VRAIMENT. Constamment.",
    difficulty: 1
  },
  {
    id: 'it-emo-6',
    category: 'emotions_argot',
    french: "C'est pas grave / laisse tomber",
    phonetic: 'non FA NIÈN-té / la-SHA STA-ré',
    arabic: 'Non fa niente / lascia stare',
    difficulty: 2
  },
  {
    id: 'it-emo-7',
    category: 'emotions_argot',
    french: 'Sérieux ?! / Sans blague ?',
    phonetic: 'da-VÉ-ro?! / ma DAÏ!',
    arabic: 'Davvero?! / Ma dai!',
    tip: "« Ma dai! » avec les mains jointes qui montent et descendent : incrédulité totale.",
    difficulty: 1
  },
  {
    id: 'it-emo-8',
    category: 'emotions_argot',
    french: 'Quel bordel !',
    phonetic: 'ké ka-ZI-no!',
    arabic: 'Che casino!',
    tip: "« Casino » = bazar, chaos. Rien à voir avec le jeu (ça, c'est casinò, accent final).",
    difficulty: 2
  },

  /* ------------------------- Verbes moteurs ------------------------- */
  {
    id: 'it-ver-1',
    category: 'verbes_moteurs',
    french: 'Je veux / je voudrais',
    phonetic: 'VO-lio / vor-RÈ-i',
    arabic: 'Voglio / vorrei',
    tip: "« Voglio » est direct, « vorrei » est poli. Au resto : toujours vorrei.",
    difficulty: 1
  },
  {
    id: 'it-ver-2',
    category: 'verbes_moteurs',
    french: "J'ai / tu as",
    phonetic: 'O / AÏ',
    arabic: 'Ho / hai',
    tip: "« Ho fame » (j'ai faim), « ho sete » (soif), « ho caldo » (chaud).",
    difficulty: 1
  },
  {
    id: 'it-ver-3',
    category: 'verbes_moteurs',
    french: 'Je vais / on va',
    phonetic: 'VA-do / an-DIA-mo',
    arabic: 'Vado / andiamo',
    dialects: {
      napolitain: { phonetic: 'DJAM-mé', arabic: 'Jamme', note: "« Andiamo » se dit « jamme » à Naples." }
    },
    tip: "« Andiamo! » = on y va ! Le cri de ralliement universel.",
    difficulty: 1
  },
  {
    id: 'it-ver-4',
    category: 'verbes_moteurs',
    french: 'Je peux... ?',
    phonetic: 'POS-so...?',
    arabic: 'Posso...?',
    tip: "« Posso? » tout seul en désignant une chaise : puis-je ? Très utile.",
    difficulty: 1
  },
  {
    id: 'it-ver-5',
    category: 'verbes_moteurs',
    french: 'Je sais / je ne sais pas',
    phonetic: 'lo SO / non lo SO',
    arabic: 'Lo so / non lo so',
    difficulty: 1
  },
  {
    id: 'it-ver-6',
    category: 'verbes_moteurs',
    french: 'Je comprends / je ne comprends pas',
    phonetic: 'ka-PI-sko / non ka-PI-sko',
    arabic: 'Capisco / non capisco',
    dialects: {
      romanesco: { phonetic: 'nn-ho ka-PI-to niente', arabic: "Nun ho capito gnente", note: "Version romaine relâchée." }
    },
    tip: "« Non capisco » + sourire = le natif ralentit et rephrase. Magique.",
    difficulty: 1
  },
  {
    id: 'it-ver-7',
    category: 'verbes_moteurs',
    french: 'Il faut / il ne faut pas',
    phonetic: 'bi-ZO-nia / non bi-ZO-nia',
    arabic: 'Bisogna / non bisogna',
    difficulty: 2
  },
  {
    id: 'it-ver-8',
    category: 'verbes_moteurs',
    french: "C'est / ce n'est pas",
    phonetic: 'è / non è',
    arabic: 'È / non è',
    tip: "Le verbe le plus rentable : « È bello », « è caro », « è lontano »...",
    difficulty: 1
  },

  /* ------------------------- Urgences & Quotidien ------------------------- */
  {
    id: 'it-urg-1',
    category: 'urgences_quotidien',
    french: "Au secours ! / À l'aide !",
    phonetic: 'a-YOU-to!',
    arabic: 'Aiuto!',
    difficulty: 1
  },
  {
    id: 'it-urg-2',
    category: 'urgences_quotidien',
    french: "J'ai besoin d'un médecin",
    phonetic: 'o bi-ZO-nio di oun MÈ-di-ko',
    arabic: 'Ho bisogno di un medico',
    difficulty: 2
  },
  {
    id: 'it-urg-3',
    category: 'urgences_quotidien',
    french: 'Où est la pharmacie ?',
    phonetic: "DO-vé la far-ma-TCHI-a?",
    arabic: "Dov'è la farmacia?",
    tip: "La croix verte lumineuse : ouverte = allumée.",
    difficulty: 1
  },
  {
    id: 'it-urg-4',
    category: 'urgences_quotidien',
    french: "J'ai perdu mon portefeuille",
    phonetic: 'o PÈR-so il por-ta-FO-lio',
    arabic: 'Ho perso il portafoglio',
    difficulty: 2
  },
  {
    id: 'it-urg-5',
    category: 'urgences_quotidien',
    french: 'Vous parlez français / anglais ?',
    phonetic: 'PAR-la fran-TCHÉ-zé / in-GLÉ-zé?',
    arabic: 'Parla francese / inglese?',
    difficulty: 1
  },
  {
    id: 'it-urg-6',
    category: 'urgences_quotidien',
    french: 'Doucement, parlez lentement',
    phonetic: 'PIA-no, PAR-li len-ta-MEN-té',
    arabic: 'Piano, parli lentamente',
    tip: "« Piano piano » = doucement doucement. Aussi une philosophie de vie.",
    difficulty: 1
  },

  /* ------------------------- Chiffres ------------------------- */
  {
    id: 'it-chi-1',
    category: 'chiffres',
    french: 'Un, deux, trois',
    phonetic: 'OU-no, DOU-é, TRÉ',
    arabic: 'Uno, due, tre',
    difficulty: 1
  },
  {
    id: 'it-chi-2',
    category: 'chiffres',
    french: 'Quatre, cinq, six',
    phonetic: 'KOUAT-tro, TCHIN-koué, SÈ-i',
    arabic: 'Quattro, cinque, sei',
    difficulty: 1
  },
  {
    id: 'it-chi-3',
    category: 'chiffres',
    french: 'Sept, huit, neuf, dix',
    phonetic: 'SÈT-té, OT-to, NO-vé, DIÈ-tchi',
    arabic: 'Sette, otto, nove, dieci',
    difficulty: 1
  },
  {
    id: 'it-chi-4',
    category: 'chiffres',
    french: 'Vingt, cinquante, cent',
    phonetic: 'VEN-ti, tchin-KOUAN-ta, TCHÈN-to',
    arabic: 'Venti, cinquanta, cento',
    difficulty: 2
  },
  {
    id: 'it-chi-5',
    category: 'chiffres',
    french: 'Ça fait dix euros',
    phonetic: 'SO-no DIÈ-tchi ÈOU-ro',
    arabic: 'Sono dieci euro',
    tip: "« Euro » est invariable : dieci euro, jamais « euri ».",
    difficulty: 2
  },
  {
    id: 'it-chi-6',
    category: 'chiffres',
    french: 'À quelle heure ?',
    phonetic: 'a ké O-ra?',
    arabic: 'A che ora?',
    difficulty: 1
  }
];
