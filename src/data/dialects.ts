import { DialectId, DialectInfo, VocabCategory } from '../types';

export const DIALECTS: Record<DialectId, DialectInfo> = {
  levantin: {
    id: 'levantin',
    name: 'Levantin (Chami / الشامي)',
    flag: '🇱🇧',
    countries: ['Liban', 'Syrie', 'Jordanie', 'Palestine'],
    description: "Le dialecte le plus doux et musical. Immensément populaire grâce aux séries dramatiques et à la musique de Beyrouth à Damas. Compris dans tout le Moyen-Orient.",
    vibe: "Romantique, expressif, accueillant et moderne.",
    signatureWord: {
      word: "Yatik el aafiye",
      meaning: "Que Dieu te donne la force/santé (salutation suprême)",
      arabic: "يعطيك العافية"
    },
    popularMedia: "Séries libanaises/syriennes (Bab Al-Hara, Al-Hayba), chansons de Fairouz et Nancy Ajram."
  },
  egyptien: {
    id: 'egyptien',
    name: 'Égyptien (Masri / مصري)',
    flag: '🇪🇬',
    countries: ['Égypte'],
    description: "Le 'Hollywood' du monde arabe ! Parlé par 100+ millions d'Égyptiens et compris par 99% du monde arabe grâce au cinéma, aux comédies et à la chanson.",
    vibe: "Joyeux, chaleureux, bourré d'humour et d'autodérision.",
    signatureWord: {
      word: "Izayyak / Ya Bacha",
      meaning: "Comment ça va ? / Mon chef (respectueux et amical)",
      arabic: "إزيك / يا باشا"
    },
    popularMedia: "Cinéma du Caire, comédies d'Adel Imam, chansons d'Amr Diab et Oum Kalthoum."
  },
  darija: {
    id: 'darija',
    name: 'Maghrébin (Darija / الدارجة)',
    flag: '🇲🇦',
    countries: ['Maroc', 'Algérie', 'Tunisie'],
    description: "Un dialecte ultra-dynamique, rythmé et expressif, teinté de berbère (amazigh), d'arabe andalou et de mots français/espagnols réinventés.",
    vibe: "Énergique, direct, poétique et indispensable en Afrique du Nord.",
    signatureWord: {
      word: "Labas / Wakha / Bzaf",
      meaning: "Ça va / D'accord / Beaucoup",
      arabic: "لاباس / واخا / بزاف"
    },
    popularMedia: "Musique Gnawa, Rai, Chaabi, rap maghrébin et cinéma marocain/algérien."
  },
  golfe: {
    id: 'golfe',
    name: 'Émirati & Golfe (Khaleeji / خليجي)',
    flag: '🇦🇪',
    countries: ['Émirats Arabes Unis (Dubaï, Abu Dhabi)', 'Arabie Saoudite', 'Qatar', 'Koweït', 'Bahreïn', 'Oman'],
    description: "Le dialecte prestigieux des Émirats et du business au Moyen-Orient ! Empreint d'une hospitalité bédouine légendaire, il se distingue par la prononciation du 'Qaf' en 'G' (Gahwa au lieu de Qahwa), le 'Kaf' féminin en 'Ch', et des formules d'honneur royales.",
    vibe: "Hospitalier, noble, élégant (Kashkha) et orienté business & tradition.",
    signatureWord: {
      word: "Ya Marhaba el sa'a / Abshir",
      meaning: "Bienvenue à cette heure / Considère que c'est fait avec honneur !",
      arabic: "يا مرحبا الساع / أبشر"
    },
    popularMedia: "Podcasts de Dubaï et Abu Dhabi, poésie bédouine (Nabati), séries Khaleeji et rencontres au Majlis."
  },

  /* ------------------------- Italien ------------------------- */

  italien_standard: {
    id: 'italien_standard',
    name: 'Italien standard (Toscan)',
    flag: '🇮🇹',
    countries: ['Toute l\'Italie', 'Tessin (Suisse)'],
    description: "L'italien de la télé, des livres et de Florence. Compris partout de Milan à Palerme : c'est la base à maîtriser avant de jouer avec les accents régionaux.",
    vibe: "Clair, mélodieux, élégant et universel.",
    signatureWord: {
      word: "Che bello!",
      meaning: "Comme c'est beau ! (l'enthousiasme italien par défaut)",
      arabic: "Che bello!"
    },
    popularMedia: "Cinéma de Sorrentino, séries RAI, chansons de Lucio Battisti et Måneskin."
  },
  milanais: {
    id: 'milanais',
    name: 'Nord (Milanais / Settentrionale)',
    flag: '🏔️',
    countries: ['Milan', 'Lombardie', 'Piémont', 'Vénétie'],
    description: "L'italien du business et du design, débit rapide et voyelles fermées. Ponctué d'expressions du Nord et d'anglicismes de bureau.",
    vibe: "Efficace, pressé, branché et un brin snob.",
    signatureWord: {
      word: "Figo!",
      meaning: "Cool / classe ! (l'adjectif passe-partout du Nord)",
      arabic: "Figo!"
    },
    popularMedia: "Fashion week de Milan, football de San Siro, rap milanais (Sfera Ebbasta, Lazza)."
  },
  romanesco: {
    id: 'romanesco',
    name: 'Rome (Romanesco)',
    flag: '🏛️',
    countries: ['Rome', 'Latium'],
    description: "Le parler gouailleur de la capitale : consonnes qui tombent, humour cash et théâtralité permanente. La langue des trattorie et du ciné italien classique.",
    vibe: "Gouailleur, chaleureux, moqueur et théâtral.",
    signatureWord: {
      word: "Daje!",
      meaning: "Allez ! / Vas-y ! (l'encouragement romain universel)",
      arabic: "Daje!"
    },
    popularMedia: "Films d'Alberto Sordi et Verdone, séries Suburra et SKAM Italia, l'AS Roma."
  },
  napolitain: {
    id: 'napolitain',
    name: 'Sud (Napolitain / Meridionale)',
    flag: '🌋',
    countries: ['Naples', 'Campanie', 'Sud de l\'Italie'],
    description: "L'italien le plus expressif : gestes, musicalité et cœur sur la main. Teinté de napolitain, la langue de la pizza, de Maradona et de la sceneggiata.",
    vibe: "Passionné, généreux, dramatique et débordant de vie.",
    signatureWord: {
      word: "Uè, jamme!",
      meaning: "Hé, allons-y ! (le cri de ralliement napolitain)",
      arabic: "Uè, jamme!"
    },
    popularMedia: "Gomorra, L'amica geniale, chansons de Pino Daniele, stade Diego Maradona."
  },
  mandarin_standard: {
    id: 'mandarin_standard',
    name: 'Mandarin standard (Pǔtōnghuà)',
    flag: '🇨🇳',
    countries: ['Toute la Chine', 'Singapour'],
    description: "La langue commune d'un milliard de locuteurs : celle de la télé, de l'école et des affaires. Comprise de Pékin à Kunming, c'est la base sur laquelle tous les accents régionaux se greffent.",
    vibe: "Clair, neutre, passe-partout et efficace.",
    signatureWord: {
      word: "Jiāyóu!",
      meaning: "Allez ! / Courage ! (littéralement « ajoute de l'essence »)",
      arabic: "加油！"
    },
    popularMedia: "Cinéma de Zhang Yimou, séries iQiyi, C-pop, jeux vidéo de miHoYo."
  },
  pekinois: {
    id: 'pekinois',
    name: 'Pékin (Běijīnghuà)',
    flag: '🏮',
    countries: ['Pékin', 'Nord de la Chine'],
    description: "L'accent de la capitale, base historique du standard, reconnaissable à son « -r » final (érisation) qui fait rouler la fin des mots. Le parler gouailleur des hutongs et des chauffeurs de taxi.",
    vibe: "Gouailleur, impérial, sûr de lui.",
    signatureWord: {
      word: "Gēmenr!",
      meaning: "Mon pote ! (le « frérot » pékinois, avec le -r signature)",
      arabic: "哥们儿！"
    },
    popularMedia: "Stand-up xiangsheng, films de Feng Xiaogang, rock de Pékin (Cui Jian)."
  },
  taiwanais: {
    id: 'taiwanais',
    name: 'Taïwan (Guóyǔ)',
    flag: '🇹🇼',
    countries: ['Taïwan'],
    description: "Le mandarin de Taipei : plus doux, plus chantant, sans érisation, truffé de particules finales (la, o, ne) et de mots à lui. S'écrit en caractères traditionnels.",
    vibe: "Doux, poli, mélodique et kawaii.",
    signatureWord: {
      word: "Zhēn de jiǎ de?",
      meaning: "Sérieux ?! (littéralement « vrai ou faux ? »)",
      arabic: "真的假的？"
    },
    popularMedia: "Mandopop de Jay Chou, séries Netflix taïwanaises, night markets de Taipei."
  },
  dongbei: {
    id: 'dongbei',
    name: 'Nord-Est (Dōngběihuà)',
    flag: '❄️',
    countries: ['Heilongjiang', 'Jilin', 'Liaoning'],
    description: "Le parler du Grand Nord-Est, star de la comédie et des livestreams chinois : direct, imagé, volume maximal. L'accent le plus drôle du mandarin, celui qui réchauffe des hivers à -30°C.",
    vibe: "Cash, hilarant, chaleureux, glacial dehors.",
    signatureWord: {
      word: "Lǎotiě!",
      meaning: "Frérot ! (littéralement « vieux fer » : un ami en béton)",
      arabic: "老铁！"
    },
    popularMedia: "Livestreams Douyin, sketchs de Zhao Benshan, série The Long Season."
  }
};

export const CATEGORIES_INFO: Record<VocabCategory, { label: string; icon: string; description: string }> = {
  salutations: {
    label: "Salutations & Hospitalité",
    icon: "🤝",
    description: "Les formules magiques pour briser la glace et se faire des amis instantanément."
  },
  cafe_resto: {
    label: "Au Café & Restaurant",
    icon: "☕",
    description: "Commander un chawarma, un thé à la menthe ou le compte comme un vrai local."
  },
  taxi_directions: {
    label: "Taxis, Uber & Dans la rue",
    icon: "🚕",
    description: "Tout pour guider le chauffeur sans se faire arnaquer et trouver son chemin."
  },
  negociation_souk: {
    label: "Souk, Achats & Négociation",
    icon: "🛍️",
    description: "Les phrases indispensables pour marchander dans la joie et le respect."
  },
  emotions_argot: {
    label: "Émotions, Rire & Argot urbain",
    icon: "🔥",
    description: "Le vrai parler de la rue : exprimer sa joie, sa surprise, ou couper court."
  },
  verbes_moteurs: {
    label: "Les 20 Verbes Moteurs",
    icon: "⚡",
    description: "La loi de Pareto : 20 verbes qui permettent de construire 80% des phrases du quotidien."
  },
  urgences_quotidien: {
    label: "Survie & Urgences",
    icon: "🚨",
    description: "Phrases de secours, santé, pharmacie et demander de l'aide rapidement."
  },
  chiffres: {
    label: "Chiffres & Nombres",
    icon: "🔢",
    description: "Compter, comprendre un prix, donner une heure : le bloc qui débloque le souk et le taxi."
  }
};
