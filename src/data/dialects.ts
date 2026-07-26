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
  }
};
