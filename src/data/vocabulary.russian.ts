import { VocabItem } from "../types";

/**
 * Russian vocabulary pack. Same philosophy as the other packs: the street
 * language, not the textbook one. The `arabic` field holds the written
 * Russian (Cyrillic), `phonetic` a French-style transliteration with the
 * stressed syllable in CAPS: for a non-latin script the phonetic field IS
 * the course, Cyrillic being a separate module. Base register: standard
 * spoken Moscow Russian. Piterski overrides reflect Saint Petersburg's
 * famous parallel vocabulary; russe_sud overrides reflect the Rostov/Kouban
 * accent (fricative г, "шо" for "что", Ukrainian-influenced words).
 */
export const VOCABULARY_LIST_RU: VocabItem[] = [

  /* ------------------------- Salutations ------------------------- */
  {
    id: "ru-sal-1",
    category: "salutations",
    french: "Salut / bonjour",
    phonetic: "pri-VIET",
    arabic: "Привет",
    tip: "Le message parfait entre potes, ça marche à toute heure du jour.",
    difficulty: 1
  },
  {
    id: "ru-sal-2",
    category: "salutations",
    french: "Bonjour (poli, vouvoiement)",
    phonetic: "ZDRAST-vouy-tie",
    arabic: "Здравствуйте",
    tip: "Le mot le plus dur à prononcer du russe : dites-le vite et sans réfléchir, ça passe toujours.",
    difficulty: 1
  },
  {
    id: "ru-sal-3",
    category: "salutations",
    french: "Merci",
    phonetic: "spa-SI-ba",
    arabic: "Спасибо",
    tip: "Contraction très ancienne de « que Dieu sauve » (spassi Bog).",
    difficulty: 1
  },
  {
    id: "ru-sal-4",
    category: "salutations",
    french: "De rien / je t'en prie / s'il te plaît",
    phonetic: "pa-JAL-sta",
    arabic: "Пожалуйста",
    tip: "Le mot à tout faire : « s'il te plaît », « je t'en prie » et « de rien », toujours le même.",
    difficulty: 1
  },
  {
    id: "ru-sal-5",
    category: "salutations",
    french: "Pardon / excuse-moi",
    phonetic: "iz-vi-NI-tie",
    arabic: "Извините",
    tip: "Pour interpeller quelqu'un dans la rue ou s'excuser d'un pied écrasé, exactement le même mot.",
    difficulty: 1
  },
  {
    id: "ru-sal-6",
    category: "salutations",
    french: "Salut (en partant) / à plus",
    phonetic: "pa-KA",
    arabic: "Пока",
    tip: "L'au revoir informel universel. Version pressée entre amis : « poka poka ».",
    difficulty: 1
  },
  {
    id: "ru-sal-7",
    category: "salutations",
    french: "Ça va ? / comment tu vas ?",
    phonetic: "kak di-LA?",
    arabic: "Как дела?",
    tip: "La réponse par défaut 90% du temps : « norm » ou « normalno », jamais un roman de vie.",
    difficulty: 2
  },
  {
    id: "ru-sal-8",
    category: "salutations",
    french: "Enchanté(e)",
    phonetic: "O-tchen pri-YAT-na",
    arabic: "Очень приятно",
    tip: "Littéralement « très agréable », dit en serrant la main, regard dans les yeux.",
    difficulty: 2
  },

  /* ------------------------- Café & Resto ------------------------- */
  {
    id: "ru-caf-1",
    category: "cafe_resto",
    french: "Un café, s'il vous plaît",
    phonetic: "a-DIN ko-FIE, pa-JAL-sta",
    arabic: "Один кофе, пожалуйста",
    tip: "« Odin » (un) placé devant n'importe quel plat suffit à commander sans complication.",
    difficulty: 1
  },
  {
    id: "ru-caf-2",
    category: "cafe_resto",
    french: "L'addition, s'il vous plaît",
    phonetic: "stchiot, pa-JAL-sta",
    arabic: "Счёт, пожалуйста",
    tip: "Un seul mot, « stchiot », suffit si vous mimez le geste de signer en l'air.",
    difficulty: 1
  },
  {
    id: "ru-caf-3",
    category: "cafe_resto",
    french: "C'est délicieux !",
    phonetic: "OTCH-in VKOUS-na!",
    arabic: "Очень вкусно!",
    tip: "Le compliment qui ouvre toutes les portes chez une babouchka aux fourneaux.",
    difficulty: 1
  },
  {
    id: "ru-caf-4",
    category: "cafe_resto",
    french: "Poulet grillé",
    phonetic: "kou-RI-tsa gril",
    arabic: "Курица гриль",
    dialects: {
      piterski: { phonetic: "kou-RA gril", arabic: "Кура гриль", note: "À Saint-Pétersbourg le poulet se dit « koura », pas « kouritsa » : un classicisme qui trahit instantanément un Pétersbourgeois." }
    },
    tip: "Le plat de base de toute gastronomie de rue, du kiosque au resto chic.",
    difficulty: 1
  },
  {
    id: "ru-caf-5",
    category: "cafe_resto",
    french: "Sarrasin (kacha)",
    phonetic: "GRIE-tchka",
    arabic: "Гречка",
    dialects: {
      piterski: { phonetic: "GRIE-tcha", arabic: "Греча", note: "« Gretcha » sans le « k » final : encore un réflexe lexical purement pétersbourgeois." }
    },
    tip: "L'accompagnement national, présent à toutes les tables du petit-déj au dîner.",
    difficulty: 2
  },
  {
    id: "ru-caf-6",
    category: "cafe_resto",
    french: "Santé ! (trinquer)",
    phonetic: "bou-DIEM zda-RO-vy!",
    arabic: "Будем здоровы!",
    tip: "« Soyons en bonne santé ! » Version courte entre amis : juste « za zda-RO-vie ».",
    difficulty: 1
  },
  {
    id: "ru-caf-7",
    category: "cafe_resto",
    french: "Un chawarma (sandwich grec/turc)",
    phonetic: "cha-our-MA",
    arabic: "Шаурма",
    dialects: {
      piterski: { phonetic: "cha-vier-MA", arabic: "Шаверма", note: "Le débat national résumé en un mot : Moscou et le reste du pays disent « chaourma », Saint-Pétersbourg s'entête avec « chaverma »." }
    },
    tip: "Le kebab russe, vendu à chaque coin de rue, dévoré après une soirée arrosée.",
    difficulty: 1
  },

  /* ------------------------- Taxi & Directions ------------------------- */
  {
    id: "ru-tax-1",
    category: "taxi_directions",
    french: "Où est... ?",
    phonetic: "GDIE na-KHO-di-tsa...?",
    arabic: "Где находится...?",
    tip: "Version courte 100% naturelle à l'oral : juste « gdie... » suivi du mot.",
    difficulty: 1
  },
  {
    id: "ru-tax-2",
    category: "taxi_directions",
    french: "Tout droit / à gauche / à droite",
    phonetic: "PRIA-ma / na-LIE-va / na-PRA-va",
    arabic: "Прямо / налево / направо",
    difficulty: 1
  },
  {
    id: "ru-tax-3",
    category: "taxi_directions",
    french: "Arrêtez-vous ici",
    phonetic: "as-ta-na-VI-tie ZDIES",
    arabic: "Остановите здесь",
    tip: "Dans un taxi non officiel, c'est la phrase qui évite le détour touristique.",
    difficulty: 2
  },
  {
    id: "ru-tax-4",
    category: "taxi_directions",
    french: "Le trottoir / la bordure",
    phonetic: "bar-DIOUR",
    arabic: "Бордюр",
    dialects: {
      piterski: { phonetic: "pa-rieb-RIK", arabic: "Поребрик", note: "LE mot mythique de Saint-Pétersbourg : toute la Russie dit « bordiour », les Pétersbourgeois seuls disent « porebrik »." }
    },
    tip: "Utile pour indiquer au chauffeur où se garer exactement, au centimètre près.",
    difficulty: 2
  },
  {
    id: "ru-tax-5",
    category: "taxi_directions",
    french: "L'entrée de l'immeuble",
    phonetic: "pad-YEZD",
    arabic: "Подъезд",
    dialects: {
      piterski: { phonetic: "pa-RAD-na-ya", arabic: "Парадная", note: "Le mot signature de Piter, littéralement « la solennelle » : à retenir pour donner une adresse comme un local." }
    },
    tip: "Indispensable pour une adresse précise : chaque immeuble russe a plusieurs entrées numérotées.",
    difficulty: 2
  },
  {
    id: "ru-tax-6",
    category: "taxi_directions",
    french: "Tout de suite / maintenant",
    phonetic: "siy-TCHAS",
    arabic: "Сейчас",
    dialects: {
      russe_sud: { phonetic: "za-RAZ", arabic: "Зараз", note: "Dans le Sud, influence ukrainienne oblige, « seytchas » devient « zaraz » : à retenir si le chauffeur répond ça sans bouger d'un pouce." }
    },
    tip: "À double sens en russe : ça peut vouloir dire « tout de suite » ou « dans un petit moment », le ton tranche.",
    difficulty: 2
  },

  /* ------------------------- Négociation ------------------------- */
  {
    id: "ru-neg-1",
    category: "negociation_souk",
    french: "Combien ça coûte ?",
    phonetic: "SKOL'-ka STO-it?",
    arabic: "Сколько стоит?",
    tip: "La phrase la plus rentable du voyage. Pointez l'objet du doigt, elle suffit à tout négocier.",
    difficulty: 1
  },
  {
    id: "ru-neg-2",
    category: "negociation_souk",
    french: "C'est trop cher !",
    phonetic: "ET-a SLICH-kam DOR-a-ga!",
    arabic: "Это слишком дорого!",
    tip: "À dire avec une petite grimace théâtrale : le marchandage au rynok (marché) est un sport, pas une gêne.",
    difficulty: 1
  },
  {
    id: "ru-neg-3",
    category: "negociation_souk",
    french: "Faites-moi un prix, un tout petit peu moins cher",
    phonetic: "SDIE-lai-tie TCHUT'-tchut' de-CHIEV-lie",
    arabic: "Сделайте чуть-чуть дешевле",
    dialects: {
      russe_sud: { phonetic: "SDIE-lai-tie TROCH-ki de-CHIEV-lie", arabic: "Сделайте трошки дешевле", note: "Dans le Sud, « tchout'-tchout' » (un chouïa) se remplace souvent par « trochki », emprunté à l'ukrainien voisin." }
    },
    tip: "« Tchout'-tchout' » (un chouïa) est LE mot magique de tout marchandage russe, à glisser partout.",
    difficulty: 2
  },
  {
    id: "ru-neg-4",
    category: "negociation_souk",
    french: "Non merci, je ne veux pas",
    phonetic: "niet spa-SI-ba, mnie nie NA-da",
    arabic: "Нет спасибо, мне не надо",
    tip: "Poli mais ferme : dit sans sourire, ça coupe court à tout vendeur insistant.",
    difficulty: 1
  },
  {
    id: "ru-neg-5",
    category: "negociation_souk",
    french: "D'accord, je le prends",
    phonetic: "LAD-na, ya E-ta vaz'-MOU",
    arabic: "Ладно, я это возьму",
    tip: "« Ladno » c'est le « bon, ok, allez » universel russe, utilisé cent fois par jour.",
    difficulty: 1
  },
  {
    id: "ru-neg-6",
    category: "negociation_souk",
    french: "Vous avez ce col roulé en taille en dessous / au-dessus ?",
    phonetic: "ye-ST' E-ta va-da-LAS-ka MIEN'-che / BOL'-che?",
    arabic: "Есть эта водолазка меньше / больше?",
    dialects: {
      piterski: { phonetic: "ye-ST' E-tat bad-LON MIEN'-che / BOL'-che?", arabic: "Есть этот бадлон меньше / больше?", note: "Le col roulé s'appelle « vodolazka » partout... sauf à Piter, où c'est un « badlon », du nom de la marque Bodylon." }
    },
    tip: "Utile toute l'année dans un pays où il fait -20°C six mois sur douze.",
    difficulty: 2
  },

  /* ------------------------- Émotions & Argot ------------------------- */
  {
    id: "ru-emo-1",
    category: "emotions_argot",
    french: "Allez ! / vas-y ! (le mot passe-partout)",
    phonetic: "da-VAI!",
    arabic: "Давай!",
    tip: "Le couteau suisse du russe parlé : « vas-y », « allez », « à plus tard », « on y va », selon le ton.",
    difficulty: 1
  },
  {
    id: "ru-emo-2",
    category: "emotions_argot",
    french: "Zut ! (juron soft)",
    phonetic: "BLINE!",
    arabic: "Блин!",
    tip: "Littéralement « crêpe » : un juron édulcoré qui évite le vrai gros mot russe, qui commence pareil. Utilisable devant une grand-mère.",
    difficulty: 2
  },
  {
    id: "ru-emo-3",
    category: "emotions_argot",
    french: "Ça va, c'est correct / pas mal",
    phonetic: "NORM!",
    arabic: "Норм!",
    tip: "Contraction de « normalno », la réponse par défaut à absolument toute question fermée.",
    difficulty: 1
  },
  {
    id: "ru-emo-4",
    category: "emotions_argot",
    french: "Bon, d'accord, allez",
    phonetic: "LAD-na",
    arabic: "Ладно",
    tip: "Le mot qui ferme une conversation en douceur, entre résignation et accord total.",
    difficulty: 1
  },
  {
    id: "ru-emo-5",
    category: "emotions_argot",
    french: "Sérieux ?! / pas possible !",
    phonetic: "da LAD-na?!",
    arabic: "Да ладно?!",
    tip: "Littéralement « mais oui bien sûr », dit en mode ironique : la stupéfaction russe par excellence.",
    difficulty: 2
  },
  {
    id: "ru-emo-6",
    category: "emotions_argot",
    french: "Ouais / mouais (particule d'accord)",
    phonetic: "a-GA",
    arabic: "Ага",
    dialects: {
      russe_sud: { phonetic: "a-HA", arabic: "Ага", note: "Le г du Sud se prononce comme un h aspiré, le fameux « g fricatif » : même mot, souffle différent." }
    },
    tip: "Le petit mot qu'on place partout pour ponctuer une conversation, façon « mh mh ».",
    difficulty: 1
  },
  {
    id: "ru-emo-7",
    category: "emotions_argot",
    french: "Trop bien ! / génial !",
    phonetic: "OTCH-in KROU-ta!",
    arabic: "Очень круто!",
    dialects: {
      russe_sud: { phonetic: "DIOU-je KROU-ta!", arabic: "Дюже круто!", note: "Dans le Sud, « otchen' » (très) cède souvent la place à « diouje », intensif cosaque bien plus expressif." }
    },
    tip: "« Krouta » (cool, stylé) s'applique à tout : une personne, une voiture, une soirée.",
    difficulty: 1
  },
  {
    id: "ru-emo-8",
    category: "emotions_argot",
    french: "Mon pote / mon gars",
    phonetic: "DROUG / tchou-VAK",
    arabic: "Друг / чувак",
    tip: "« Droug » (ami) est le mot classique, « tchouvak » (mec, type) est 100% argot des jeunes.",
    difficulty: 2
  },
  {
    id: "ru-emo-9",
    category: "emotions_argot",
    french: "Une petite minute (diminutif affectueux)",
    phonetic: "mi-NOU-tach-ka",
    arabic: "Минуточка",
    tip: "Les diminutifs sont partout en russe : « minoutka » devient « minoutatchka », plus doux, presque câlin, même pour attendre un bus.",
    difficulty: 3
  },

  /* ------------------------- Verbes Moteurs ------------------------- */
  {
    id: "ru-ver-1",
    category: "verbes_moteurs",
    french: "Vouloir / je veux",
    phonetic: "ya kha-TCHOU",
    arabic: "Я хочу",
    tip: "Base de toutes les demandes : « ya khatchou » + n'importe quel nom, zéro conjugaison en plus.",
    difficulty: 1
  },
  {
    id: "ru-ver-2",
    category: "verbes_moteurs",
    french: "Avoir / il y a",
    phonetic: "ye-ST' / niet",
    arabic: "Есть / нет",
    tip: "« Yest' » (il y en a) et « niet » (il n'y en a pas) : les deux mots qui répondent à tout dans un magasin.",
    difficulty: 1
  },
  {
    id: "ru-ver-3",
    category: "verbes_moteurs",
    french: "Aller",
    phonetic: "i-TTI / ye-KHAT'",
    arabic: "Идти / ехать",
    tip: "Deux verbes selon le moyen de transport : « itti » à pied, « yekhat' » en voiture/train/bus. Le russe adore ce genre de nuance.",
    difficulty: 2
  },
  {
    id: "ru-ver-4",
    category: "verbes_moteurs",
    french: "Parler / discuter",
    phonetic: "ga-va-RIT'",
    arabic: "Говорить",
    dialects: {
      russe_sud: { phonetic: "gou-ta-RIT'", arabic: "Гутарить", note: "Le verbe cosaque du Sud (Don, Kouban) pour « discuter, papoter » : hérité des Cosaques, encore bien vivant à la campagne." }
    },
    tip: "« Ty gavarich' pa-frantsouzski? » (tu parles français ?) est la question de survie ultime.",
    difficulty: 1
  },
  {
    id: "ru-ver-5",
    category: "verbes_moteurs",
    french: "Manger",
    phonetic: "ye-ST'",
    arabic: "Есть",
    tip: "Attention, même mot que « il y a » (yest') : le contexte tranche toujours, jamais de vraie confusion à l'oral.",
    difficulty: 1
  },
  {
    id: "ru-ver-6",
    category: "verbes_moteurs",
    french: "Acheter",
    phonetic: "kou-PIT'",
    arabic: "Купить",
    difficulty: 1
  },
  {
    id: "ru-ver-7",
    category: "verbes_moteurs",
    french: "Aimer / kiffer",
    phonetic: "lyu-BIT'",
    arabic: "Любить",
    tip: "« Ya lioubliou » (j'aime/j'adore) marche pour un plat, une série ou une personne, sans nuance de degré à l'oral.",
    difficulty: 1
  },

  /* ------------------------- Urgences & Quotidien ------------------------- */
  {
    id: "ru-urg-1",
    category: "urgences_quotidien",
    french: "Au secours !",
    phonetic: "pa-ma-GHI-tie!",
    arabic: "Помогите!",
    difficulty: 1
  },
  {
    id: "ru-urg-2",
    category: "urgences_quotidien",
    french: "Où sont les toilettes ?",
    phonetic: "GDIE tou-a-LIET?",
    arabic: "Где туалет?",
    difficulty: 1
  },
  {
    id: "ru-urg-3",
    category: "urgences_quotidien",
    french: "Je ne comprends pas",
    phonetic: "ya nie pa-ni-MA-you",
    arabic: "Я не понимаю",
    tip: "LA phrase de survie numéro un, à sortir avec un sourire désarmant plutôt qu'un air paniqué.",
    difficulty: 1
  },
  {
    id: "ru-urg-4",
    category: "urgences_quotidien",
    french: "Quoi ? / comment ?",
    phonetic: "CHTO?",
    arabic: "Что?",
    dialects: {
      russe_sud: { phonetic: "CHO?", arabic: "Шо?", note: "Le marqueur numéro un du Sud : « chto » se rabote en « cho », г fricatif et tout le folklore rostovien inclus." }
    },
    tip: "Le mot russe le plus court et le plus utile quand on n'a rien suivi.",
    difficulty: 1
  },
  {
    id: "ru-urg-5",
    category: "urgences_quotidien",
    french: "C'est quoi le mot de passe wifi ?",
    phonetic: "ka-KOY pa-ROL' at vai-FAI?",
    arabic: "Какой пароль от wifi?",
    tip: "La vraie urgence moderne, acceptée dans n'importe quel café ou appartement.",
    difficulty: 2
  },

  /* ------------------------- Chiffres ------------------------- */
  {
    id: "ru-chi-1",
    category: "chiffres",
    french: "Un, deux, trois",
    phonetic: "a-DIN, DVA, TRI",
    arabic: "Один, два, три",
    difficulty: 1
  },
  {
    id: "ru-chi-2",
    category: "chiffres",
    french: "Quatre, cinq... jusqu'à dix",
    phonetic: "tchi-TY-rie, PYAT', CHEST', SIEM', VO-siem', DIE-viat', DIE-siat'",
    arabic: "Четыре, пять, шесть, семь, восемь, девять, десять",
    tip: "Avec 1 à 10 vous comptez déjà tout : onze, c'est juste « dix-un » (adinnadtsat').",
    difficulty: 2
  },
  {
    id: "ru-chi-3",
    category: "chiffres",
    french: "Cent / mille",
    phonetic: "STO / TY-sia-tcha",
    arabic: "Сто / тысяча",
    tip: "Les prix russes se comptent vite en milliers de roubles : ces deux mots servent tous les jours.",
    difficulty: 2
  },
  {
    id: "ru-chi-4",
    category: "chiffres",
    french: "Combien (de personnes/objets) ?",
    phonetic: "SKOL'-ka?",
    arabic: "Сколько?",
    tip: "Le mot passe-partout de la quantité, du prix au nombre de verres à commander.",
    difficulty: 1
  }
];
