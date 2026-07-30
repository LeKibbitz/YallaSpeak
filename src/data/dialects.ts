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
  },
  thai_central: {
    id: 'thai_central',
    name: 'Thaï central (Bangkok)',
    flag: '🇹🇭',
    countries: ['Thaïlande (Bangkok et région Centre)'],
    description: "Le thaï standard de la télévision, des écoles et du business, celui qu'on entend de Bangkok à Hua Hin. Direct, tonal, ponctué du sourire perpétuel qui a donné son surnom au pays.",
    vibe: "Urbain, tonal, poli, débrouillard.",
    signatureWord: {
      word: "Mai pen rai!",
      meaning: "C'est pas grave / pas de souci (la philosophie nationale)",
      arabic: "ไม่เป็นไร"
    },
    popularMedia: "Séries thaïes (lakorn) et BL romances, muay thai, street food de Bangkok, cinéma de Pen-Ek Ratanaruang."
  },
  isan: {
    id: 'isan',
    name: 'Isan (Nord-Est)',
    flag: '🌶️',
    countries: ['Thaïlande (Nord-Est, plateau frontalier du Laos)'],
    description: "Le dialecte le plus proche du lao, parlé par un tiers du pays mais longtemps snobé par Bangkok avant de devenir culte grâce à sa cuisine et son franc-parler. Direct, épicé, fier de ses racines.",
    vibe: "Épicé, cash, chaleureux, fier.",
    signatureWord: {
      word: "Sèp ilii!",
      meaning: "Trop bon ! (le compliment culinaire isan)",
      arabic: "แซ่บอีหลี"
    },
    popularMedia: "Molam (musique traditionnelle isan), som tam et larb des marchés, films Isan-core, football des clubs du Nord-Est."
  },
  thai_nord: {
    id: 'thai_nord',
    name: 'Nord (Chiang Mai)',
    flag: '⛰️',
    countries: ['Thaïlande (Chiang Mai, Chiang Rai, ancien royaume Lanna)'],
    description: "Le parler doux et chantant de l'ancien royaume Lanna, reconnaissable à sa particule finale jâo et à son débit ralenti par rapport à Bangkok. La langue des temples de montagne et des marchés de nuit de Chiang Mai.",
    vibe: "Doux, chantant, montagnard, zen.",
    signatureWord: {
      word: "Jâo",
      meaning: "La particule douce et chantante du Nord",
      arabic: "เจ้า"
    },
    popularMedia: "Festival Yi Peng (lanternes), Loy Krathong à Chiang Mai, cuisine khao soi, cinéma d'Apichatpong Weerasethakul."
  },
  japonais_standard: {
    id: 'japonais_standard',
    name: 'Tokyo (Hyōjungo)',
    flag: '🗼',
    countries: ['Tout le Japon', 'Tokyo'],
    description: "Le japonais standard, celui de la télé, des écoles et des transactions professionnelles. Compris de Sapporo à Okinawa, c'est la base sur laquelle se greffent tous les accents régionaux.",
    vibe: "Poli, mesuré, précis et omniprésent.",
    signatureWord: {
      word: "Yabai!",
      meaning: "Fou / génial / la cata : l'adjectif à tout faire des jeunes",
      arabic: "やばい"
    },
    popularMedia: "Animes de Studio Ghibli, séries Netflix japonaises, J-pop, jeux vidéo Nintendo et PlayStation."
  },
  kansai: {
    id: 'kansai',
    name: 'Kansai (Osaka / Kyōto)',
    flag: '🎭',
    countries: ['Osaka', 'Kyōto', 'Kōbe'],
    description: "L'accent le plus expressif du Japon, langue naturelle de la comédie manzai et du commerce depuis des siècles. Direct, chaleureux et fier de sa différence face au Tokyo jugé trop guindé.",
    vibe: "Théâtral, chaleureux, commerçant et moqueur.",
    signatureWord: {
      word: "Nande yanen!",
      meaning: "Mais pourquoi ?! (la réplique comique d'Osaka)",
      arabic: "なんでやねん"
    },
    popularMedia: "Duos de manzai (Downtown), stand-up d'Osaka, ramen d'Osaka et de Kyōto, festival de Gion."
  },
  hakata: {
    id: 'hakata',
    name: 'Hakata (Fukuoka)',
    flag: '🍜',
    countries: ['Fukuoka', 'Kyūshū'],
    description: "L'accent chantant du grand Sud, réputé pour sa douceur et ses particules finales bien à lui (-tai, -to). Le foyer historique du tonkotsu ramen et d'un franc-parler chaleureux.",
    vibe: "Chantant, chaleureux, direct et gourmand.",
    signatureWord: {
      word: "Suitō",
      meaning: "Je t'aime bien / j'adore (le mot doux de Fukuoka)",
      arabic: "好いとう"
    },
    popularMedia: "Stands de yatai à Fukuoka, tonkotsu ramen, festival Hakata Gion Yamakasa, groupes de J-pop originaires de Fukuoka."
  },
  russe_standard: {
    id: "russe_standard",
    name: "Russe standard (Moscou)",
    flag: "🇷🇺",
    countries: ["Russie (Moscou et grandes villes)", "Biélorussie", "Asie centrale (lingua franca)"],
    description: "Le russe de la télé, de l'école et des affaires, celui qu'on comprend de Kaliningrad à Vladivostok. La base sur laquelle se greffent tous les accents régionaux, du gouailleur pétersbourgeois au chantant sudiste.",
    vibe: "Direct, cash, chaleureux sous la carapace, débrouillard.",
    signatureWord: {
      word: "Davaï!",
      meaning: "Allez ! / vas-y / à plus (le couteau suisse russe)",
      arabic: "Давай!"
    },
    popularMedia: "Le cinéma de Balabanov (Brat), la série culte Slovo Patsana, le rock de Kino (Viktor Tsoï) et la pop de Zemfira."
  },
  piterski: {
    id: "piterski",
    name: "Saint-Pétersbourg (Piterski)",
    flag: "🌉",
    countries: ["Saint-Pétersbourg", "Léningrad Oblast"],
    description: "L'accent de l'ex-capitale impériale, plus posé et plus littéraire que celui de Moscou, célèbre pour tout un vocabulaire parallèle (poребрик, парадная, кура...) qui trahit un Pétersbourgeois en une seule phrase. La ville qui a donné Dostoïevski et la moitié du rock russe.",
    vibe: "Littéraire, fier, mélancolique, un brin snob envers Moscou.",
    signatureWord: {
      word: "Parádnaya",
      meaning: "L'entrée d'immeuble : LE mot qui trahit un Pétersbourgeois",
      arabic: "Парадная"
    },
    popularMedia: "La scène rock historique de Piter (Kino, Akvarium, Leningrad de Sergueï Chnourov), les romans de Dostoïevski qui hantent encore ses cours intérieures, et les ponts levants de la Neva."
  },
  russe_sud: {
    id: "russe_sud",
    name: "Sud (Rostov / Kouban)",
    flag: "🌻",
    countries: ["Rostov-sur-le-Don", "Krasnodar (Kouban)", "Stavropol"],
    description: "L'accent cosaque du grand Sud, reconnaissable à son г fricatif (prononcé comme un h aspiré) et à son « шо » qui remplace « что ». Terre des Cosaques du Don et du Kouban, avec une bonne dose d'influence ukrainienne dans le vocabulaire du quotidien.",
    vibe: "Chantant, cash, hospitalier, mélangé.",
    signatureWord: {
      word: "Cho?",
      meaning: "Quoi ? (le « chto » raboté du Sud, g fricatif inclus)",
      arabic: "Шо?"
    },
    popularMedia: "Le roman Le Don paisible de Cholokhov, les chants cosaques traditionnels, le folklore du Kouban (Kubanskie Kazaki) et l'humour direct popularisé par les blogueurs de Rostov."
  },
  grec_standard: {
    id: 'grec_standard',
    name: 'Grec standard (Athènes)',
    flag: '🇬🇷',
    countries: ['Toute la Grèce', 'Athènes', 'la diaspora grecque'],
    description: "Le grec de la télé, de l'école et des affaires, celui qu'on entend d'Athènes à Thessalonique. Compris partout dans le pays, c'est la base sur laquelle se greffent tous les accents régionaux et insulaires.",
    vibe: "Chaleureux, direct, théâtral et fier.",
    signatureWord: {
      word: "Éla!",
      meaning: "Viens / allez / sérieux ? (le mot grec à tout faire)",
      arabic: "Έλα!"
    },
    popularMedia: "Cinéma de Yórgos Lánthimos, sirtaki de Zorba le Grec, rébétiko et chansons de Stelios Kazantzidis."
  },
  cretois: {
    id: 'cretois',
    name: 'Crétois (Crète)',
    flag: '🫒',
    countries: ['Crète'],
    description: "L'accent le plus fier de Grèce, celui d'une île qui s'est longtemps sentie à part : particule « nde » en fin de phrase, « ti » qui devient « inta », hospitalité et honneur (philotimo) élevés en art de vivre. La convivialité s'y mesure en verres de raki offerts.",
    vibe: "Fier, hospitalier, direct et bruyamment généreux.",
    signatureWord: {
      word: "Ínta?",
      meaning: "Quoi ? (le « ti » devenu « inta », signature crétoise)",
      arabic: "Ίντα;"
    },
    popularMedia: "Lyra crétoise de la famille Xylouris et de Psarantonis, mantinades improvisées dans les fêtes de village (kritiko glenti)."
  },
  chypriote: {
    id: 'chypriote',
    name: 'Chypriote (Chypre)',
    flag: '🇨🇾',
    countries: ['Chypre'],
    description: "Un grec insulaire qui a gardé des formes anciennes disparues ailleurs : la négation « den » raccourcie en « en », des consonnes qui chuintent (« k » qui devient « tch »), et un lexique bien à lui. L'humour local se transmet encore par joutes poétiques improvisées, les tsiattista.",
    vibe: "Chaleureux, terrien, moqueur et fier de sa différence.",
    signatureWord: {
      word: "Re koumbáre!",
      meaning: "Eh mon pote ! (l'interpellation chypriote par excellence)",
      arabic: "Ρε κουμπάρε!"
    },
    popularMedia: "Anna Vissi (icône pop née à Limassol), joutes poétiques traditionnelles tsiattista, scène rap chypriote locale."
  },
  merina: {
    id: 'merina',
    name: 'Merina (Tana / Hautes Terres)',
    flag: '🇲🇬',
    countries: ['Madagascar (Hautes Terres, région d\'Antananarivo)'],
    description: "La variante des Hautes Terres et de la capitale Antananarivo : celle de l'administration, de l'école et de la télévision nationale, la base 'officielle' du malgache. Terrain du hiragasy et d'une fihavanana plus posée, plus cérémonieuse que les parlers du littoral.",
    vibe: "Posé, cérémonieux, précis et un brin formel.",
    signatureWord: {
      word: "Mora mora",
      meaning: "Doucement, tranquille (la philosophie malgache du temps)",
      arabic: "Mora mora"
    },
    popularMedia: "Le hiragasy (théâtre-concert traditionnel des Hautes Terres), le valiha (cithare en bambou emblématique), les groupes historiques Mahaleo et Rajery."
  },
  cotier: {
    id: 'cotier',
    name: 'Côtier (Sakalava / Betsimisaraka / Vezo)',
    flag: '🏝️',
    countries: ['Madagascar (côte ouest sakalava)', 'Madagascar (côte est betsimisaraka)', 'Madagascar (Sud-Ouest vezo)'],
    description: "Les parlers des littoraux sakalava, betsimisaraka et vezo, pêcheurs et rizicultures face à l'océan : plus courts, plus chantants, avec leur propre vocabulaire de salutation. Le rythme salegy et les pirogues vezo en sont la bande-son, à des années-lumière du formalisme de Tana.",
    vibe: "Solaire, direct, marin et décontracté.",
    signatureWord: {
      word: "Salama é!",
      meaning: "Salut ! (le bonjour solaire des côtes)",
      arabic: "Salama é!"
    },
    popularMedia: "Le salegy sakalava porté par Jaojoby, le tsapiky du Sud-Ouest, les marchés de poisson et pirogues vezo des ports de la côte."
  },
  castillan: {
    id: 'castillan',
    name: 'Castillan (Madrid)',
    flag: '🇪🇸',
    countries: ['Espagne (Madrid, Castille)'],
    description: "L'espagnol de référence, celui de la télé et des livres, reconnaissable à son th caractéristique (gracias, cerveza) que le reste du monde hispanophone ne fait pas. La base à maîtriser avant de jouer avec les accents régionaux.",
    vibe: "Clair, direct, ponctué de venga et un rien formel.",
    signatureWord: {
      word: "¡Venga!",
      meaning: "Allez ! (ponctue une phrase espagnole sur deux)",
      arabic: "¡Venga!"
    },
    popularMedia: "Séries La Casa de Papel et Élite, cinéma d'Almodóvar, musique de Rosalía."
  },
  andalou: {
    id: 'andalou',
    name: 'Andalou (Séville / Cadix)',
    flag: '💃',
    countries: ['Andalousie (Séville, Cadix, Malaga, Grenade)'],
    description: "Le parler du sud, chantant et contracté : les s et les d finaux s'avalent ou deviennent un souffle, tout roule plus vite et plus chaud. La langue du flamenco, des tapas et de l'humour gaditan.",
    vibe: "Chaleureux, contracté, moqueur et musical.",
    signatureWord: {
      word: "¡Quillo!",
      meaning: "Mon gars ! (contraction de chiquillo, pur Cadix)",
      arabic: "¡Quillo!"
    },
    popularMedia: "Flamenco et humoristas gaditanos, série La Peste, football du Betis et du Séville FC."
  },
  mexicain: {
    id: 'mexicain',
    name: 'Mexicain (CDMX)',
    flag: '🇲🇽',
    countries: ['Mexique (Mexico, CDMX)'],
    description: "L'espagnol le plus regardé au monde grâce à la télé et au cinéma mexicains, truffé de diminutifs (ahorita, cafecito) et de politesse feutrée même dans l'argot. Compris et imité dans toute l'Amérique latine.",
    vibe: "Chaleureux, imagé, poli en surface et bourré d'expressions.",
    signatureWord: {
      word: "¡Órale!",
      meaning: "Allez / wow / OK (le couteau suisse mexicain)",
      arabic: "¡Órale!"
    },
    popularMedia: "Cinéma de Cuarón et Iñárritu, séries Netflix mexicaines, luchas libres, chansons de Luis Miguel."
  },
  argentin: {
    id: 'argentin',
    name: 'Argentin (Buenos Aires)',
    flag: '🇦🇷',
    countries: ['Argentine (Buenos Aires)', 'Uruguay'],
    description: "L'espagnol le plus reconnaissable à l'oreille : voseo (vos tenés au lieu de tú tienes), ll et y prononcés « ch », et un argot de rue entier, le lunfardo, hérité de l'immigration italienne du port de Buenos Aires.",
    vibe: "Théâtral, mélodique, direct et bourré de lunfardo.",
    signatureWord: {
      word: "¡Che, boludo!",
      meaning: "Eh mec ! (l'Argentine entière en deux mots)",
      arabic: "¡Che, boludo!"
    },
    popularMedia: "Tango de Buenos Aires, cinéma de Damián Szifron, football de Boca Juniors et River Plate, séries El Marginal."
  },
  portugais_pt: {
    id: 'portugais_pt',
    name: 'Portugal (Lisbonne)',
    flag: '🇵🇹',
    countries: ['Portugal'],
    description: "L'accent d'origine, reconnaissable à ses voyelles avalées et ses fins de mots qui disparaissent presque : « obrigado » devient « obrigad' ». Le pays du fado, de la saudade et du système D (« desenrascanço ») érigé en art de vivre.",
    vibe: "Discret, mélancolique, débrouillard et fier.",
    signatureWord: {
      word: "Fixe!",
      meaning: "Cool ! (l'approbation lisboète)",
      arabic: "Fixe!"
    },
    popularMedia: "Fado d'Amália Rodrigues et Mariza, cinéma de Miguel Gomes, séries RTP, football avec Cristiano Ronaldo."
  },
  bresilien: {
    id: 'bresilien',
    name: 'Brésilien (Rio / São Paulo)',
    flag: '🇧🇷',
    countries: ['Brésil'],
    description: "Le portugais le plus parlé au monde, aux voyelles ouvertes et chantantes, à mille lieues de la retenue lisboète. Volume sonore plus haut, gérondif partout (« estou fazendo »), et un vocabulaire qui a largement divergé du Portugal : ônibus, trem, celular.",
    vibe: "Chaleureux, expansif, festif et direct.",
    signatureWord: {
      word: "Beleza?",
      meaning: "Ça roule ? (littéralement « beauté », le salut brésilien)",
      arabic: "Beleza?"
    },
    popularMedia: "Funk carioca, bossa nova de João Gilberto, novelas Globo, samba de l'école Mangueira, football et Carnaval de Rio."
  },
  angolais: {
    id: 'angolais',
    name: 'Angolais (Luanda)',
    flag: '🇦🇴',
    countries: ['Angola'],
    description: "Le portugais tropicalisé par les langues bantoues, kimbundu en tête, qui a donné au Portugal lui-même des mots comme « bué » ou « bazuca ». À Luanda, le Portugais de métropole se fait affectueusement appeler « tuga », et la rue invente son propre argot urbain.",
    vibe: "Fier, urbain, chaleureux et cash.",
    signatureWord: {
      word: "Bué!",
      meaning: "Trop / vachement (né à Luanda, adopté à Lisbonne)",
      arabic: "Bué!"
    },
    popularMedia: "Kuduro et semba de Luanda, kizomba, cinéma angolais post-guerre civile, télénovelas locales."
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
