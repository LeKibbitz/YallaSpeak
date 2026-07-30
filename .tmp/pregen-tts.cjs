// src/data/vocabulary.italian.ts
var VOCABULARY_LIST_IT = [
  /* ------------------------- Salutations ------------------------- */
  {
    id: "it-sal-1",
    category: "salutations",
    french: "Salut ! (bonjour et au revoir)",
    phonetic: "tcha\xF2",
    arabic: "Ciao!",
    dialects: {
      napolitain: { phonetic: "ou\xE8", arabic: "U\xE8!", note: "Le \xAB U\xE8 \xBB napolitain remplace ciao entre amis." },
      romanesco: { phonetic: "a\xF2", arabic: "A\xF2!", note: "\xAB A\xF2 \xBB : l'interpellation romaine par excellence." }
    },
    tip: "Un seul mot pour arriver ET partir : rentabilit\xE9 maximale.",
    difficulty: 1
  },
  {
    id: "it-sal-2",
    category: "salutations",
    french: "Bonjour (le matin/journ\xE9e)",
    phonetic: "bouonn DJOR-no",
    arabic: "Buongiorno",
    dialects: {
      napolitain: { phonetic: "bouon-DJOR-no ou\xE8", arabic: "Buongiorno, u\xE8!", note: "Souvent accompagn\xE9 d'un geste de la main." }
    },
    tip: "Apr\xE8s 14h, basculez sur \xAB buonasera \xBB : les Italiens y tiennent.",
    difficulty: 1
  },
  {
    id: "it-sal-3",
    category: "salutations",
    french: "Bonsoir",
    phonetic: "bouona-S\xC9-ra",
    arabic: "Buonasera",
    difficulty: 1
  },
  {
    id: "it-sal-4",
    category: "salutations",
    french: "Comment \xE7a va ?",
    phonetic: "KO-m\xE9 sta\xEF",
    arabic: "Come stai?",
    dialects: {
      romanesco: { phonetic: "ko-me sta-A\xCF, tou-to a-PO-sto?", arabic: "Come stai? Tutto a posto?", note: "\xAB Tutto a posto? \xBB = tout est en ordre ?" },
      napolitain: { phonetic: "komm sta-y\xE9", arabic: "Comme staje?", note: "Version napolitaine, tr\xE8s chant\xE9e." }
    },
    tip: "R\xE9ponse standard : \xAB Tutto bene! \xBB (tout va bien).",
    difficulty: 1
  },
  {
    id: "it-sal-5",
    category: "salutations",
    french: "Merci (beaucoup)",
    phonetic: "GRA-tsi\xE9 (MIL-l\xE9)",
    arabic: "Grazie (mille)",
    tip: "\xAB Grazie mille \xBB = merci mille fois. Le -zie se prononce -tsi\xE9, jamais -zi.",
    difficulty: 1
  },
  {
    id: "it-sal-6",
    category: "salutations",
    french: "De rien / je t'en prie",
    phonetic: "PR\xC9-go",
    arabic: "Prego",
    tip: "Mot magique : de rien, entrez, allez-y, je vous \xE9coute... tout est prego.",
    difficulty: 1
  },
  {
    id: "it-sal-7",
    category: "salutations",
    french: "Excusez-moi / pardon",
    phonetic: "SKOU-zi / SKOU-za",
    arabic: "Scusi / Scusa",
    tip: "\xAB Scusi \xBB en vouvoiement (serveur, inconnu), \xAB scusa \xBB entre amis.",
    difficulty: 1
  },
  {
    id: "it-sal-8",
    category: "salutations",
    french: "Enchant\xE9 !",
    phonetic: "pia-TCH\xC9-r\xE9",
    arabic: "Piacere!",
    difficulty: 2
  },
  /* ------------------------- Café & Resto ------------------------- */
  {
    id: "it-caf-1",
    category: "cafe_resto",
    french: "Un caf\xE9, s'il vous pla\xEEt",
    phonetic: "oun kaf-F\xC8, p\xE9r fa-VO-r\xE9",
    arabic: "Un caff\xE8, per favore",
    dialects: {
      napolitain: { phonetic: "oun kaf-F\xC8, dja'", arabic: "Un caff\xE8, j\xE0!", note: "\xC0 Naples, le caf\xE9 est une religion : toujours serr\xE9, debout au comptoir." }
    },
    tip: "\xAB Un caff\xE8 \xBB = un expresso. Ne demandez jamais \xAB un expresso \xBB, c'est redondant.",
    difficulty: 1
  },
  {
    id: "it-caf-2",
    category: "cafe_resto",
    french: "L'addition, s'il vous pla\xEEt",
    phonetic: "il KON-to, p\xE9r fa-VO-r\xE9",
    arabic: "Il conto, per favore",
    difficulty: 1
  },
  {
    id: "it-caf-3",
    category: "cafe_resto",
    french: "C'est d\xE9licieux !",
    phonetic: "\xE8 bouo-NIS-si-mo",
    arabic: "\xC8 buonissimo!",
    dialects: {
      napolitain: { phonetic: "\xE8 na d\xE9-LI-tsia", arabic: "\xC8 'na delizia!", note: "Avec le geste de la main qui pivote, obligatoire." },
      romanesco: { phonetic: "\xE8 la FI-n\xE9 d\xE9r MON-no", arabic: "\xC8 la fine der monno!", note: "\xAB La fin du monde \xBB : le compliment supr\xEAme \xE0 Rome." }
    },
    tip: "Le superlatif en -issimo marche partout : buonissimo, bellissimo...",
    difficulty: 1
  },
  {
    id: "it-caf-4",
    category: "cafe_resto",
    french: "Je voudrais...",
    phonetic: "vor-R\xC8-i",
    arabic: "Vorrei...",
    tip: "Le conditionnel poli : \xAB Vorrei una pizza margherita \xBB. Passe-partout.",
    difficulty: 1
  },
  {
    id: "it-caf-5",
    category: "cafe_resto",
    french: "Une table pour deux",
    phonetic: "oun TA-vo-lo p\xE9r DOU-\xE9",
    arabic: "Un tavolo per due",
    difficulty: 2
  },
  {
    id: "it-caf-6",
    category: "cafe_resto",
    french: "Qu'est-ce que vous me conseillez ?",
    phonetic: "KO-za mi kon-SI-lia",
    arabic: "Cosa mi consiglia?",
    tip: "La question qui fait plaisir au serveur et d\xE9bloque les vrais plats du jour.",
    difficulty: 2
  },
  {
    id: "it-caf-7",
    category: "cafe_resto",
    french: "Un verre de vin rouge / blanc",
    phonetic: "oun bik-KI\xC9-r\xE9 di VI-no ROS-so / BIAN-ko",
    arabic: "Un bicchiere di vino rosso / bianco",
    difficulty: 2
  },
  {
    id: "it-caf-8",
    category: "cafe_resto",
    french: "On prend l'ap\xE9ro ?",
    phonetic: "fa-TCHIA-mo la-p\xE9-ri-TI-vo?",
    arabic: "Facciamo l'aperitivo?",
    dialects: {
      milanais: { phonetic: "a-p\xE9-ri-TI-vo? DA\xCF, an-DIA-mo", arabic: "Aperitivo? Dai, andiamo!", note: "Milan a invent\xE9 l'apericena : l'ap\xE9ro qui remplace le d\xEEner." }
    },
    tip: "L'aperitivo (18h-20h) est une institution : spritz + buffet.",
    difficulty: 2
  },
  /* ------------------------- Taxi & Directions ------------------------- */
  {
    id: "it-tax-1",
    category: "taxi_directions",
    french: "O\xF9 est... ?",
    phonetic: "DO-v\xE9...",
    arabic: "Dov'\xE8...?",
    tip: "\xAB Dov'\xE8 la stazione? \xBB (la gare), \xAB Dov'\xE8 il bagno? \xBB (les toilettes : vital).",
    difficulty: 1
  },
  {
    id: "it-tax-2",
    category: "taxi_directions",
    french: "Tout droit",
    phonetic: "S\xC8M-pr\xE9 DRIT-to",
    arabic: "Sempre dritto",
    tip: "Litt\xE9ralement \xAB toujours droit \xBB. La r\xE9ponse italienne par d\xE9faut, m\xEAme quand c'est faux.",
    difficulty: 1
  },
  {
    id: "it-tax-3",
    category: "taxi_directions",
    french: "\xC0 droite / \xE0 gauche",
    phonetic: "a D\xC8S-tra / a si-NIS-tra",
    arabic: "A destra / a sinistra",
    difficulty: 1
  },
  {
    id: "it-tax-4",
    category: "taxi_directions",
    french: "C'est loin / c'est pr\xE8s ?",
    phonetic: "\xE8 lon-TA-no / \xE8 vi-TCHI-no?",
    arabic: "\xC8 lontano / \xE8 vicino?",
    difficulty: 2
  },
  {
    id: "it-tax-5",
    category: "taxi_directions",
    french: "Arr\xEAtez-vous ici, merci",
    phonetic: "si F\xC8R-mi kou\xEF, GRA-tsi\xE9",
    arabic: "Si fermi qui, grazie",
    difficulty: 2
  },
  {
    id: "it-tax-6",
    category: "taxi_directions",
    french: "Le train / le bus / le m\xE9tro",
    phonetic: "il TR\xC8-no / laou-to-BOUS / la m\xE9-tro",
    arabic: "Il treno / l'autobus / la metro",
    difficulty: 1
  },
  /* ------------------------- Négociation & Achats ------------------------- */
  {
    id: "it-neg-1",
    category: "negociation_souk",
    french: "Combien \xE7a co\xFBte ?",
    phonetic: "KOUAN-to KOS-ta?",
    arabic: "Quanto costa?",
    dialects: {
      romanesco: { phonetic: "a KOUAN-to sta?", arabic: "A quanto sta?", note: "Version march\xE9 de Rome." },
      napolitain: { phonetic: "KOUAN-to v\xE9-n\xE9?", arabic: "Quanto vene?", note: "Sur les march\xE9s de Naples." }
    },
    tip: "LA phrase \xE0 d\xE9gainer partout : march\xE9, boutique, taxi.",
    difficulty: 1
  },
  {
    id: "it-neg-2",
    category: "negociation_souk",
    french: "C'est trop cher !",
    phonetic: "\xE8 TROP-po KA-ro!",
    arabic: "\xC8 troppo caro!",
    dialects: {
      romanesco: { phonetic: "ma stai a sk\xE9r-TSA? \xE8 na ra-PI-na!", arabic: "Ma stai a scherz\xE0? \xC8 una rapina!", note: "\xAB Tu plaisantes ? C'est un braquage ! \xBB : th\xE9\xE2tral, efficace." }
    },
    tip: "Sur les march\xE9s du Sud, on n\xE9gocie ; dans les boutiques, non.",
    difficulty: 1
  },
  {
    id: "it-neg-3",
    category: "negociation_souk",
    french: "Vous me faites un prix ?",
    phonetic: "mi fa oun PR\xC8-tso?",
    arabic: "Mi fa un prezzo?",
    tip: "Avec le sourire. \xAB Mi fa uno sconto? \xBB (une remise) marche aussi.",
    difficulty: 2
  },
  {
    id: "it-neg-4",
    category: "negociation_souk",
    french: "Je regarde seulement, merci",
    phonetic: "STO SO-lo gouar-DAN-do, GRA-tsi\xE9",
    arabic: "Sto solo guardando, grazie",
    difficulty: 2
  },
  {
    id: "it-neg-5",
    category: "negociation_souk",
    french: "D'accord, je le prends !",
    phonetic: "va B\xC8-n\xE9, lo PR\xC8N-do!",
    arabic: "Va bene, lo prendo!",
    difficulty: 1
  },
  {
    id: "it-neg-6",
    category: "negociation_souk",
    french: "On peut payer par carte ?",
    phonetic: "si pou\xF2 pa-GA-r\xE9 kon la KAR-ta?",
    arabic: "Si pu\xF2 pagare con la carta?",
    tip: "R\xE9ponse fr\xE9quente au Sud : \xAB Solo contanti \xBB (esp\xE8ces seulement).",
    difficulty: 2
  },
  /* ------------------------- Émotions & Argot ------------------------- */
  {
    id: "it-emo-1",
    category: "emotions_argot",
    french: "Allez ! / Vas-y ! / Courage !",
    phonetic: "DA\xCF!",
    arabic: "Dai!",
    dialects: {
      romanesco: { phonetic: "DA-dj\xE9!", arabic: "Daje!", note: "LE mot de Rome. Encouragement, joie, impatience : tout." },
      napolitain: { phonetic: "DJAM-m\xE9!", arabic: "Jamme!", note: "\xAB Jamme j\xE0 \xBB : allez, on y va !" }
    },
    tip: "Le couteau suisse \xE9motionnel italien : allez, arr\xEAte, s\xE9rieux ?!",
    difficulty: 1
  },
  {
    id: "it-emo-2",
    category: "emotions_argot",
    french: "Trop bien / trop cool !",
    phonetic: "k\xE9 FI-go!",
    arabic: "Che figo!",
    dialects: {
      milanais: { phonetic: "FI-go!", arabic: "Figo!", note: "L'adjectif signature du Nord." },
      romanesco: { phonetic: "k\xE9 fi-ga-TA!", arabic: "Che figata!", note: "\xAB Che figata \xBB : quel truc g\xE9nial." }
    },
    difficulty: 1
  },
  {
    id: "it-emo-3",
    category: "emotions_argot",
    french: "Quel dommage !",
    phonetic: "k\xE9 p\xE9k-KA-to!",
    arabic: "Che peccato!",
    difficulty: 1
  },
  {
    id: "it-emo-4",
    category: "emotions_argot",
    french: "Pas de souci / tranquille",
    phonetic: "tran-KOUIL-lo",
    arabic: "Tranquillo",
    dialects: {
      romanesco: { phonetic: "sta TRAN-kouil-lo, ao", arabic: "Sta tranquillo, a\xF2", note: "Souvent raccourci en \xAB tranqui \xBB." }
    },
    tip: "R\xE9ponse \xE0 toute excuse : \xAB Tranquillo! \xBB avec un geste apaisant.",
    difficulty: 1
  },
  {
    id: "it-emo-5",
    category: "emotions_argot",
    french: "Mamma mia ! (surprise, exasp\xE9ration)",
    phonetic: "MAM-ma MI-a!",
    arabic: "Mamma mia!",
    dialects: {
      napolitain: { phonetic: "mamma d'\xF4 Kar-mi-n\xE9!", arabic: "Mamma d'o Carmine!", note: "Version napolitaine invoquant la Madonna del Carmine." }
    },
    tip: "Oui, les Italiens le disent VRAIMENT. Constamment.",
    difficulty: 1
  },
  {
    id: "it-emo-6",
    category: "emotions_argot",
    french: "C'est pas grave / laisse tomber",
    phonetic: "non FA NI\xC8N-t\xE9 / la-SHA STA-r\xE9",
    arabic: "Non fa niente / lascia stare",
    difficulty: 2
  },
  {
    id: "it-emo-7",
    category: "emotions_argot",
    french: "S\xE9rieux ?! / Sans blague ?",
    phonetic: "da-V\xC9-ro?! / ma DA\xCF!",
    arabic: "Davvero?! / Ma dai!",
    tip: "\xAB Ma dai! \xBB avec les mains jointes qui montent et descendent : incr\xE9dulit\xE9 totale.",
    difficulty: 1
  },
  {
    id: "it-emo-8",
    category: "emotions_argot",
    french: "Quel bordel !",
    phonetic: "k\xE9 ka-ZI-no!",
    arabic: "Che casino!",
    tip: "\xAB Casino \xBB = bazar, chaos. Rien \xE0 voir avec le jeu (\xE7a, c'est casin\xF2, accent final).",
    difficulty: 2
  },
  /* ------------------------- Verbes moteurs ------------------------- */
  {
    id: "it-ver-1",
    category: "verbes_moteurs",
    french: "Je veux / je voudrais",
    phonetic: "VO-lio / vor-R\xC8-i",
    arabic: "Voglio / vorrei",
    tip: "\xAB Voglio \xBB est direct, \xAB vorrei \xBB est poli. Au resto : toujours vorrei.",
    difficulty: 1
  },
  {
    id: "it-ver-2",
    category: "verbes_moteurs",
    french: "J'ai / tu as",
    phonetic: "O / A\xCF",
    arabic: "Ho / hai",
    tip: "\xAB Ho fame \xBB (j'ai faim), \xAB ho sete \xBB (soif), \xAB ho caldo \xBB (chaud).",
    difficulty: 1
  },
  {
    id: "it-ver-3",
    category: "verbes_moteurs",
    french: "Je vais / on va",
    phonetic: "VA-do / an-DIA-mo",
    arabic: "Vado / andiamo",
    dialects: {
      napolitain: { phonetic: "DJAM-m\xE9", arabic: "Jamme", note: "\xAB Andiamo \xBB se dit \xAB jamme \xBB \xE0 Naples." }
    },
    tip: "\xAB Andiamo! \xBB = on y va ! Le cri de ralliement universel.",
    difficulty: 1
  },
  {
    id: "it-ver-4",
    category: "verbes_moteurs",
    french: "Je peux... ?",
    phonetic: "POS-so...?",
    arabic: "Posso...?",
    tip: "\xAB Posso? \xBB tout seul en d\xE9signant une chaise : puis-je ? Tr\xE8s utile.",
    difficulty: 1
  },
  {
    id: "it-ver-5",
    category: "verbes_moteurs",
    french: "Je sais / je ne sais pas",
    phonetic: "lo SO / non lo SO",
    arabic: "Lo so / non lo so",
    difficulty: 1
  },
  {
    id: "it-ver-6",
    category: "verbes_moteurs",
    french: "Je comprends / je ne comprends pas",
    phonetic: "ka-PI-sko / non ka-PI-sko",
    arabic: "Capisco / non capisco",
    dialects: {
      romanesco: { phonetic: "nn-ho ka-PI-to niente", arabic: "Nun ho capito gnente", note: "Version romaine rel\xE2ch\xE9e." }
    },
    tip: "\xAB Non capisco \xBB + sourire = le natif ralentit et rephrase. Magique.",
    difficulty: 1
  },
  {
    id: "it-ver-7",
    category: "verbes_moteurs",
    french: "Il faut / il ne faut pas",
    phonetic: "bi-ZO-nia / non bi-ZO-nia",
    arabic: "Bisogna / non bisogna",
    difficulty: 2
  },
  {
    id: "it-ver-8",
    category: "verbes_moteurs",
    french: "C'est / ce n'est pas",
    phonetic: "\xE8 / non \xE8",
    arabic: "\xC8 / non \xE8",
    tip: "Le verbe le plus rentable : \xAB \xC8 bello \xBB, \xAB \xE8 caro \xBB, \xAB \xE8 lontano \xBB...",
    difficulty: 1
  },
  /* ------------------------- Urgences & Quotidien ------------------------- */
  {
    id: "it-urg-1",
    category: "urgences_quotidien",
    french: "Au secours ! / \xC0 l'aide !",
    phonetic: "a-YOU-to!",
    arabic: "Aiuto!",
    difficulty: 1
  },
  {
    id: "it-urg-2",
    category: "urgences_quotidien",
    french: "J'ai besoin d'un m\xE9decin",
    phonetic: "o bi-ZO-nio di oun M\xC8-di-ko",
    arabic: "Ho bisogno di un medico",
    difficulty: 2
  },
  {
    id: "it-urg-3",
    category: "urgences_quotidien",
    french: "O\xF9 est la pharmacie ?",
    phonetic: "DO-v\xE9 la far-ma-TCHI-a?",
    arabic: "Dov'\xE8 la farmacia?",
    tip: "La croix verte lumineuse : ouverte = allum\xE9e.",
    difficulty: 1
  },
  {
    id: "it-urg-4",
    category: "urgences_quotidien",
    french: "J'ai perdu mon portefeuille",
    phonetic: "o P\xC8R-so il por-ta-FO-lio",
    arabic: "Ho perso il portafoglio",
    difficulty: 2
  },
  {
    id: "it-urg-5",
    category: "urgences_quotidien",
    french: "Vous parlez fran\xE7ais / anglais ?",
    phonetic: "PAR-la fran-TCH\xC9-z\xE9 / in-GL\xC9-z\xE9?",
    arabic: "Parla francese / inglese?",
    difficulty: 1
  },
  {
    id: "it-urg-6",
    category: "urgences_quotidien",
    french: "Doucement, parlez lentement",
    phonetic: "PIA-no, PAR-li len-ta-MEN-t\xE9",
    arabic: "Piano, parli lentamente",
    tip: "\xAB Piano piano \xBB = doucement doucement. Aussi une philosophie de vie.",
    difficulty: 1
  },
  /* ------------------------- Chiffres ------------------------- */
  {
    id: "it-chi-1",
    category: "chiffres",
    french: "Un, deux, trois",
    phonetic: "OU-no, DOU-\xE9, TR\xC9",
    arabic: "Uno, due, tre",
    difficulty: 1
  },
  {
    id: "it-chi-2",
    category: "chiffres",
    french: "Quatre, cinq, six",
    phonetic: "KOUAT-tro, TCHIN-kou\xE9, S\xC8-i",
    arabic: "Quattro, cinque, sei",
    difficulty: 1
  },
  {
    id: "it-chi-3",
    category: "chiffres",
    french: "Sept, huit, neuf, dix",
    phonetic: "S\xC8T-t\xE9, OT-to, NO-v\xE9, DI\xC8-tchi",
    arabic: "Sette, otto, nove, dieci",
    difficulty: 1
  },
  {
    id: "it-chi-4",
    category: "chiffres",
    french: "Vingt, cinquante, cent",
    phonetic: "VEN-ti, tchin-KOUAN-ta, TCH\xC8N-to",
    arabic: "Venti, cinquanta, cento",
    difficulty: 2
  },
  {
    id: "it-chi-5",
    category: "chiffres",
    french: "\xC7a fait dix euros",
    phonetic: "SO-no DI\xC8-tchi \xC8OU-ro",
    arabic: "Sono dieci euro",
    tip: "\xAB Euro \xBB est invariable : dieci euro, jamais \xAB euri \xBB.",
    difficulty: 2
  },
  {
    id: "it-chi-6",
    category: "chiffres",
    french: "\xC0 quelle heure ?",
    phonetic: "a k\xE9 O-ra?",
    arabic: "A che ora?",
    difficulty: 1
  }
];

// src/data/dialects.ts
var DIALECTS = {
  levantin: {
    id: "levantin",
    name: "Levantin (Chami / \u0627\u0644\u0634\u0627\u0645\u064A)",
    flag: "\u{1F1F1}\u{1F1E7}",
    countries: ["Liban", "Syrie", "Jordanie", "Palestine"],
    description: "Le dialecte le plus doux et musical. Immens\xE9ment populaire gr\xE2ce aux s\xE9ries dramatiques et \xE0 la musique de Beyrouth \xE0 Damas. Compris dans tout le Moyen-Orient.",
    vibe: "Romantique, expressif, accueillant et moderne.",
    signatureWord: {
      word: "Yatik el aafiye",
      meaning: "Que Dieu te donne la force/sant\xE9 (salutation supr\xEAme)",
      arabic: "\u064A\u0639\u0637\u064A\u0643 \u0627\u0644\u0639\u0627\u0641\u064A\u0629"
    },
    popularMedia: "S\xE9ries libanaises/syriennes (Bab Al-Hara, Al-Hayba), chansons de Fairouz et Nancy Ajram."
  },
  egyptien: {
    id: "egyptien",
    name: "\xC9gyptien (Masri / \u0645\u0635\u0631\u064A)",
    flag: "\u{1F1EA}\u{1F1EC}",
    countries: ["\xC9gypte"],
    description: "Le 'Hollywood' du monde arabe ! Parl\xE9 par 100+ millions d'\xC9gyptiens et compris par 99% du monde arabe gr\xE2ce au cin\xE9ma, aux com\xE9dies et \xE0 la chanson.",
    vibe: "Joyeux, chaleureux, bourr\xE9 d'humour et d'autod\xE9rision.",
    signatureWord: {
      word: "Izayyak / Ya Bacha",
      meaning: "Comment \xE7a va ? / Mon chef (respectueux et amical)",
      arabic: "\u0625\u0632\u064A\u0643 / \u064A\u0627 \u0628\u0627\u0634\u0627"
    },
    popularMedia: "Cin\xE9ma du Caire, com\xE9dies d'Adel Imam, chansons d'Amr Diab et Oum Kalthoum."
  },
  darija: {
    id: "darija",
    name: "Maghr\xE9bin (Darija / \u0627\u0644\u062F\u0627\u0631\u062C\u0629)",
    flag: "\u{1F1F2}\u{1F1E6}",
    countries: ["Maroc", "Alg\xE9rie", "Tunisie"],
    description: "Un dialecte ultra-dynamique, rythm\xE9 et expressif, teint\xE9 de berb\xE8re (amazigh), d'arabe andalou et de mots fran\xE7ais/espagnols r\xE9invent\xE9s.",
    vibe: "\xC9nergique, direct, po\xE9tique et indispensable en Afrique du Nord.",
    signatureWord: {
      word: "Labas / Wakha / Bzaf",
      meaning: "\xC7a va / D'accord / Beaucoup",
      arabic: "\u0644\u0627\u0628\u0627\u0633 / \u0648\u0627\u062E\u0627 / \u0628\u0632\u0627\u0641"
    },
    popularMedia: "Musique Gnawa, Rai, Chaabi, rap maghr\xE9bin et cin\xE9ma marocain/alg\xE9rien."
  },
  golfe: {
    id: "golfe",
    name: "\xC9mirati & Golfe (Khaleeji / \u062E\u0644\u064A\u062C\u064A)",
    flag: "\u{1F1E6}\u{1F1EA}",
    countries: ["\xC9mirats Arabes Unis (Duba\xEF, Abu Dhabi)", "Arabie Saoudite", "Qatar", "Kowe\xEFt", "Bahre\xEFn", "Oman"],
    description: "Le dialecte prestigieux des \xC9mirats et du business au Moyen-Orient ! Empreint d'une hospitalit\xE9 b\xE9douine l\xE9gendaire, il se distingue par la prononciation du 'Qaf' en 'G' (Gahwa au lieu de Qahwa), le 'Kaf' f\xE9minin en 'Ch', et des formules d'honneur royales.",
    vibe: "Hospitalier, noble, \xE9l\xE9gant (Kashkha) et orient\xE9 business & tradition.",
    signatureWord: {
      word: "Ya Marhaba el sa'a / Abshir",
      meaning: "Bienvenue \xE0 cette heure / Consid\xE8re que c'est fait avec honneur !",
      arabic: "\u064A\u0627 \u0645\u0631\u062D\u0628\u0627 \u0627\u0644\u0633\u0627\u0639 / \u0623\u0628\u0634\u0631"
    },
    popularMedia: "Podcasts de Duba\xEF et Abu Dhabi, po\xE9sie b\xE9douine (Nabati), s\xE9ries Khaleeji et rencontres au Majlis."
  },
  /* ------------------------- Italien ------------------------- */
  italien_standard: {
    id: "italien_standard",
    name: "Italien standard (Toscan)",
    flag: "\u{1F1EE}\u{1F1F9}",
    countries: ["Toute l'Italie", "Tessin (Suisse)"],
    description: "L'italien de la t\xE9l\xE9, des livres et de Florence. Compris partout de Milan \xE0 Palerme : c'est la base \xE0 ma\xEEtriser avant de jouer avec les accents r\xE9gionaux.",
    vibe: "Clair, m\xE9lodieux, \xE9l\xE9gant et universel.",
    signatureWord: {
      word: "Che bello!",
      meaning: "Comme c'est beau ! (l'enthousiasme italien par d\xE9faut)",
      arabic: "Che bello!"
    },
    popularMedia: "Cin\xE9ma de Sorrentino, s\xE9ries RAI, chansons de Lucio Battisti et M\xE5neskin."
  },
  milanais: {
    id: "milanais",
    name: "Nord (Milanais / Settentrionale)",
    flag: "\u{1F3D4}\uFE0F",
    countries: ["Milan", "Lombardie", "Pi\xE9mont", "V\xE9n\xE9tie"],
    description: "L'italien du business et du design, d\xE9bit rapide et voyelles ferm\xE9es. Ponctu\xE9 d'expressions du Nord et d'anglicismes de bureau.",
    vibe: "Efficace, press\xE9, branch\xE9 et un brin snob.",
    signatureWord: {
      word: "Figo!",
      meaning: "Cool / classe ! (l'adjectif passe-partout du Nord)",
      arabic: "Figo!"
    },
    popularMedia: "Fashion week de Milan, football de San Siro, rap milanais (Sfera Ebbasta, Lazza)."
  },
  romanesco: {
    id: "romanesco",
    name: "Rome (Romanesco)",
    flag: "\u{1F3DB}\uFE0F",
    countries: ["Rome", "Latium"],
    description: "Le parler gouailleur de la capitale : consonnes qui tombent, humour cash et th\xE9\xE2tralit\xE9 permanente. La langue des trattorie et du cin\xE9 italien classique.",
    vibe: "Gouailleur, chaleureux, moqueur et th\xE9\xE2tral.",
    signatureWord: {
      word: "Daje!",
      meaning: "Allez ! / Vas-y ! (l'encouragement romain universel)",
      arabic: "Daje!"
    },
    popularMedia: "Films d'Alberto Sordi et Verdone, s\xE9ries Suburra et SKAM Italia, l'AS Roma."
  },
  napolitain: {
    id: "napolitain",
    name: "Sud (Napolitain / Meridionale)",
    flag: "\u{1F30B}",
    countries: ["Naples", "Campanie", "Sud de l'Italie"],
    description: "L'italien le plus expressif : gestes, musicalit\xE9 et c\u0153ur sur la main. Teint\xE9 de napolitain, la langue de la pizza, de Maradona et de la sceneggiata.",
    vibe: "Passionn\xE9, g\xE9n\xE9reux, dramatique et d\xE9bordant de vie.",
    signatureWord: {
      word: "U\xE8, jamme!",
      meaning: "H\xE9, allons-y ! (le cri de ralliement napolitain)",
      arabic: "U\xE8, jamme!"
    },
    popularMedia: "Gomorra, L'amica geniale, chansons de Pino Daniele, stade Diego Maradona."
  }
};

// scripts/pregen-tts.ts
var BASE = process.env.PREGEN_BASE || "https://yallaspeak.lekibbitz.fr";
var VARIANTS = {
  italien_standard: "Standard Italian",
  milanais: "Northern Italian",
  romanesco: "Roman Italian",
  napolitain: "Neapolitan Italian"
};
var jobs = [];
for (const [variantId, ttsName] of Object.entries(VARIANTS)) {
  const sig = DIALECTS[variantId].signatureWord;
  jobs.push({ label: `${variantId}/signature`, dialect: ttsName, text: sig.word, written: sig.arabic });
  for (const item of VOCABULARY_LIST_IT) {
    const v = item.dialects?.[variantId];
    jobs.push({
      label: `${variantId}/${item.id}`,
      dialect: ttsName,
      text: v?.phonetic || item.phonetic,
      written: v?.arabic || item.arabic
    });
  }
}
var sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function main() {
  let ok = 0, failed = 0, bytes = 0;
  const t0 = Date.now();
  for (const [i, job] of jobs.entries()) {
    const url = `${BASE}/api/tts?dialect=${encodeURIComponent(job.dialect)}&text=${encodeURIComponent(job.text)}&arabic=${encodeURIComponent(job.written)}`;
    let attempts = 0;
    let cacheHit = false;
    while (true) {
      attempts++;
      try {
        const tReq = Date.now();
        const res = await fetch(url);
        if (res.ok) {
          const buf = await res.arrayBuffer();
          bytes += buf.byteLength;
          ok++;
          cacheHit = Date.now() - tReq < 1e3;
          console.log(`[${i + 1}/${jobs.length}] OK ${job.label} (${(buf.byteLength / 1024).toFixed(0)} kB${cacheHit ? ", cached" : ""})`);
          break;
        }
        const body = await res.text();
        if (res.status === 429 && attempts <= 5) {
          const retryAfter = Number(JSON.parse(body).retryAfter) || 60;
          if (retryAfter > 600) {
            console.log(`[${i + 1}/${jobs.length}] 429 retryAfter=${retryAfter}s on ${job.label}, credits/daily quota exhausted, aborting.`);
            failed++;
            printSummary(ok, failed, bytes, t0);
            return;
          }
          console.log(`[${i + 1}/${jobs.length}] rate limited on ${job.label}, waiting ${retryAfter + 2}s...`);
          await sleep((retryAfter + 2) * 1e3);
          continue;
        }
        failed++;
        console.log(`[${i + 1}/${jobs.length}] HTTP ${res.status} ${job.label}: ${body.slice(0, 120)}`);
        break;
      } catch (e) {
        if (attempts <= 5) {
          console.log(`[${i + 1}/${jobs.length}] network error on ${job.label}, retrying in 10s: ${e}`);
          await sleep(1e4);
          continue;
        }
        failed++;
        console.log(`[${i + 1}/${jobs.length}] ERROR ${job.label}: ${e}`);
        break;
      }
    }
    if (!cacheHit) await sleep(7e3);
  }
  printSummary(ok, failed, bytes, t0);
}
function printSummary(ok, failed, bytes, t0) {
  const mins = ((Date.now() - t0) / 6e4).toFixed(1);
  console.log(`
Done: ${ok} generated/cached, ${failed} failed, ${(bytes / 1024 / 1024).toFixed(1)} MB of audio, ${mins} min.`);
}
main();
