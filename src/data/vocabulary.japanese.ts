import { VocabItem } from '../types';

/**
 * Japanese vocabulary pack. Same philosophy as the other packs: the street
 * language, not the textbook one (no keigo, the polite register taught in
 * classrooms). The `arabic` field holds the written Japanese (kanji + kana),
 * `phonetic` a French-friendly romaji: syllables hyphenated, circumflex for
 * long vowels, diaeresis for the "ai" glide. For a non-latin script the
 * phonetic field IS the course, kanji/kana being a separate module.
 * Kansai and Hakata overrides appear only where the variant genuinely
 * differs; the negociation_souk category is reframed in the tips as
 * "acheter malin", since haggling barely exists in Japan.
 */
export const VOCABULARY_LIST_JP: VocabItem[] = [

  /* ------------------------- Salutations ------------------------- */
  {
    id: 'jp-sal-1',
    category: 'salutations',
    french: 'Salut / bonjour',
    phonetic: 'kon-ni-tchi-wa',
    arabic: 'こんにちは',
    tip: "Poli et un peu scolaire entre potes : les jeunes disent plutôt le prénom avec un signe de tête, ou juste « ossu » entre mecs.",
    difficulty: 1
  },
  {
    id: 'jp-sal-2',
    category: 'salutations',
    french: 'Bonjour (le matin)',
    phonetic: 'o-ha-yô go-zaï-mass',
    arabic: 'おはようございます',
    tip: "Entre amis, on coupe tout : juste « ohayô », le « gozaimasu » poli saute.",
    difficulty: 1
  },
  {
    id: 'jp-sal-3',
    category: 'salutations',
    french: 'Merci',
    phonetic: 'a-ri-ga-tô go-zaï-mass',
    arabic: 'ありがとうございます',
    dialects: {
      kansai: { phonetic: 'ô-ki-ni', arabic: 'おおきに', note: "Le merci iconique d'Osaka, entendu dans toutes les boutiques du Kansai." }
    },
    tip: "Version courte entre amis : « arigatô » tout court, le « gozaimasu » disparaît.",
    difficulty: 1
  },
  {
    id: 'jp-sal-4',
    category: 'salutations',
    french: 'De rien',
    phonetic: 'i-é i-é',
    arabic: 'いえいえ',
    tip: "Le vrai « de rien » de la rue. « Dôitashimashite » existe mais sonne aussi pédant que « je vous en prie » en français.",
    difficulty: 1
  },
  {
    id: 'jp-sal-5',
    category: 'salutations',
    french: 'Pardon / excusez-moi',
    phonetic: 'sou-mi-ma-sen',
    arabic: 'すみません',
    tip: "Le mot à tout faire : pardon, merci léger, et « monsieur / madame ! » pour héler quelqu'un dans la rue.",
    difficulty: 1
  },
  {
    id: 'jp-sal-6',
    category: 'salutations',
    french: 'Au revoir',
    phonetic: 'djâ né',
    arabic: 'じゃあね',
    dialects: {
      kansai: { phonetic: 'ho-na, ma-ta!', arabic: 'ほな、また！', note: "« Hona » (bon, alors...) ouvre presque toutes les phrases de départ à Osaka." }
    },
    tip: "« Sayônara » sonne définitif, presque un adieu. Entre potes, c'est « jaa ne » ou « mata ne » (à plus).",
    difficulty: 1
  },
  {
    id: 'jp-sal-7',
    category: 'salutations',
    french: 'Ça va ? (comment tu vas)',
    phonetic: 'guén-ki?',
    arabic: '元気？',
    tip: "Réponse réflexe : « genki genki ! » (ça va, ça va). Personne ne développe.",
    difficulty: 1
  },
  {
    id: 'jp-sal-8',
    category: 'salutations',
    french: 'Enchanté ! (à toute nouvelle rencontre)',
    phonetic: 'yo-ro-chi-kou o-né-gaï-chi-mass',
    arabic: 'よろしくお願いします',
    tip: "Intraduisible et obligatoire : ni tout à fait « enchanté » ni tout à fait « compte sur moi », à dire à chaque nouvelle rencontre ou collaboration.",
    difficulty: 2
  },

  /* ------------------------- Café & Resto ------------------------- */
  {
    id: 'jp-caf-1',
    category: 'cafe_resto',
    french: 'Bon appétit (avant de manger)',
    phonetic: 'i-ta-da-ki-mass',
    arabic: 'いただきます',
    tip: "Se dit avant chaque repas, même seul devant un bento au bureau. Le sauter, c'est le seul vrai impair de table.",
    difficulty: 1
  },
  {
    id: 'jp-caf-2',
    category: 'cafe_resto',
    french: "C'était délicieux (après le repas)",
    phonetic: 'go-tchi-so-sa-ma dé-chi-ta',
    arabic: 'ごちそうさまでした',
    dialects: {
      hakata: { phonetic: 'go-tchi-so-sa-ma, ba-ri ou-ma-kat-ta!', arabic: 'ごちそうさま、バリうまかった！', note: "« Bari » (vachement) collé à « umakatta » (c'était bon) : la version enthousiaste de Fukuoka." }
    },
    tip: "Le pendant obligatoire d'« itadakimasu », même au konbini pour un onigiri à 150 yens.",
    difficulty: 1
  },
  {
    id: 'jp-caf-3',
    category: 'cafe_resto',
    french: "C'est délicieux !",
    phonetic: 'oï-chii!',
    arabic: 'おいしい',
    dialects: {
      kansai: { phonetic: 'ou-maï!', arabic: 'うまい！', note: "Version plus cash, façon pote : à Osaka les mecs disent « umai » plutôt que le poli « oishii »." }
    },
    difficulty: 1
  },
  {
    id: 'jp-caf-4',
    category: 'cafe_resto',
    french: 'Serveur ! (héler)',
    phonetic: 'sou-mi-ma-sen!',
    arabic: 'すみません！',
    tip: "Même mot que « pardon », lancé fort et la main levée : au Japon, héler ainsi est normal, pas grossier.",
    difficulty: 1
  },
  {
    id: 'jp-caf-5',
    category: 'cafe_resto',
    french: "L'addition, s'il vous plaît",
    phonetic: 'o-kaï-kéï o-né-gaï-chi-mass',
    arabic: 'お会計お願いします',
    difficulty: 2
  },
  {
    id: 'jp-caf-6',
    category: 'cafe_resto',
    french: 'Santé ! (trinquer)',
    phonetic: 'kan-paï!',
    arabic: '乾杯！',
    tip: "Contrairement à la Chine, pas de cul sec obligatoire après le premier verre : ensuite, on sirote tranquille.",
    difficulty: 1
  },
  {
    id: 'jp-caf-7',
    category: 'cafe_resto',
    french: 'Vous pouvez réchauffer ça ? (konbini)',
    phonetic: 'tchin chi-té kou-da-saï',
    arabic: 'チンしてください',
    tip: "« Chin » imite le bip du micro-ondes. Le dire en caisse de konbini, c'est le réflexe qui trahit (en bien) le local.",
    difficulty: 2
  },

  /* ------------------------- Taxi & Directions ------------------------- */
  {
    id: 'jp-tax-1',
    category: 'taxi_directions',
    french: 'Où est... ?',
    phonetic: '... wa do-ko dess ka?',
    arabic: '...はどこですか？',
    difficulty: 1
  },
  {
    id: 'jp-tax-2',
    category: 'taxi_directions',
    french: 'Arrêtez-vous ici',
    phonetic: 'ko-ko dé ii dess',
    arabic: 'ここでいいです',
    tip: "Littéralement « ici ça ira » : la formule taxi standard, jamais un ordre sec.",
    difficulty: 1
  },
  {
    id: 'jp-tax-3',
    category: 'taxi_directions',
    french: 'Le métro',
    phonetic: 'tchi-ka-té-tsou',
    arabic: '地下鉄',
    difficulty: 1
  },
  {
    id: 'jp-tax-4',
    category: 'taxi_directions',
    french: 'Tout droit / à gauche / à droite',
    phonetic: 'mass-sou-gou / hi-da-ri / mi-gi',
    arabic: 'まっすぐ／左／右',
    difficulty: 2
  },
  {
    id: 'jp-tax-5',
    category: 'taxi_directions',
    french: "C'est loin ?",
    phonetic: 'tô-i dess ka?',
    arabic: '遠いですか？',
    difficulty: 1
  },
  {
    id: 'jp-tax-6',
    category: 'taxi_directions',
    french: 'Plus vite ! / dépêche',
    phonetic: 'i-so-i-dé!',
    arabic: '急いで！',
    dialects: {
      hakata: { phonetic: 'ha-yô sen ka!', arabic: 'はよせんか！', note: "« Hayô » contracte « hayaku » (vite) : l'accent pressé typique du Kyûshû." }
    },
    difficulty: 1
  },

  /* ------------------------- Acheter malin ------------------------- */
  {
    id: 'jp-neg-1',
    category: 'negociation_souk',
    french: 'Combien ça coûte ?',
    phonetic: 'i-kou-ra dess ka?',
    arabic: 'いくらですか？',
    tip: "Marchander ne se fait quasiment jamais au Japon, prix fixe partout : cette catégorie, c'est acheter malin, pas négocier.",
    difficulty: 1
  },
  {
    id: 'jp-neg-2',
    category: 'negociation_souk',
    french: 'Trop cher !',
    phonetic: 'ta-ka-i!',
    arabic: '高い！',
    dialects: {
      kansai: { phonetic: 'mec-tcha ta-kaï yan!', arabic: 'めっちゃ高いやん！', note: "Le « yan » final, la signature grammaticale du Kansai, colle à toutes les phrases." }
    },
    tip: "Ça se dit, mais ça ne fait pas baisser le prix : un cri du cœur, pas une ouverture de négociation.",
    difficulty: 1
  },
  {
    id: 'jp-neg-3',
    category: 'negociation_souk',
    french: 'Je regarde seulement',
    phonetic: 'mi-té-rou da-ké dess',
    arabic: '見てるだけです',
    tip: "La phrase magique pour faire fuir gentiment un vendeur trop zélé.",
    difficulty: 2
  },
  {
    id: 'jp-neg-4',
    category: 'negociation_souk',
    french: 'Je prends celui-ci',
    phonetic: 'ko-ré kou-da-saï',
    arabic: 'これください',
    difficulty: 1
  },
  {
    id: 'jp-neg-5',
    category: 'negociation_souk',
    french: "Tax-free, s'il vous plaît",
    phonetic: 'men-zéï dé o-né-gaï-chi-mass',
    arabic: '免税でお願いします',
    tip: "Passeport en main à la caisse : les grands magasins et les drugstores détaxent directement sur place.",
    difficulty: 2
  },
  {
    id: 'jp-neg-6',
    category: 'negociation_souk',
    french: "C'est gratuit ?",
    phonetic: 'ko-ré, ta-da dess ka?',
    arabic: 'これ、タダですか？',
    difficulty: 1
  },

  /* ------------------------- Émotions & Argot ------------------------- */
  {
    id: 'jp-emo-1',
    category: 'emotions_argot',
    french: 'Fou / dingue (en bien ou en mal)',
    phonetic: 'ya-baï!',
    arabic: 'やばい',
    tip: "L'adjectif à tout faire des jeunes : catastrophe ou génie, seul le ton fait la différence.",
    difficulty: 2
  },
  {
    id: 'jp-emo-2',
    category: 'emotions_argot',
    french: 'Trop / vachement (intensif)',
    phonetic: 'tchô',
    arabic: '超',
    dialects: {
      kansai: { phonetic: 'mec-tcha', arabic: 'めっちゃ', note: "LE mot d'Osaka pour « très », devenu si populaire qu'il a envahi tout le Japon via la télé." },
      hakata: { phonetic: 'ba-ri', arabic: 'ばり', note: "L'équivalent de Fukuoka : « bari » se colle devant n'importe quel adjectif." }
    },
    tip: "« Chô » + adjectif = version Tokyo du « trop » français. La base avant d'apprendre les variantes régionales.",
    difficulty: 2
  },
  {
    id: 'jp-emo-3',
    category: 'emotions_argot',
    french: 'Génial ! / impressionnant !',
    phonetic: 'sou-goï!',
    arabic: 'すごい',
    dialects: {
      kansai: { phonetic: 'sou-goï yan!', arabic: 'すごいやん！', note: "Le « yan » kansaï en bout de phrase, encore et toujours." },
      hakata: { phonetic: 'sou-go-ka!', arabic: 'すごかー', note: "Au Kyûshû, l'adjectif finit en « -ka » au lieu de « -i » : « sugoka » plutôt que « sugoi »." }
    },
    difficulty: 1
  },
  {
    id: 'jp-emo-4',
    category: 'emotions_argot',
    french: "Ça va / t'inquiète / non merci (poli)",
    phonetic: 'da-i-djô-bou',
    arabic: '大丈夫',
    tip: "Le mot couteau suisse : ça va bien, pas de souci, ou un refus tout en douceur pour décliner une offre.",
    difficulty: 1
  },
  {
    id: 'jp-emo-5',
    category: 'emotions_argot',
    french: 'Sérieux ?! / sans blague',
    phonetic: 'ma-dji dé?!',
    arabic: 'マジで？！',
    dialects: {
      kansai: { phonetic: 'hon-ma?!', arabic: 'ほんまー？！', note: "« Honma » (vrai) remplace « honto » partout dans le Kansai, y compris pour douter de tout ce qu'on vous raconte." }
    },
    difficulty: 2
  },
  {
    id: 'jp-emo-6',
    category: 'emotions_argot',
    french: 'Quelle galère / la flemme',
    phonetic: 'men-do-kou-saï',
    arabic: '面倒くさい',
    dialects: {
      hakata: { phonetic: 'men-do-kou-saï-taï', arabic: '面倒くさいたい', note: "Le « -tai » final de Fukuoka, une particule qui appuie la phrase : à ne pas confondre avec le « -tai » du désir." }
    },
    tip: "Le mot fourre-tout de la flemme japonaise, il se glisse dans dix phrases par jour.",
    difficulty: 2
  },
  {
    id: 'jp-emo-7',
    category: 'emotions_argot',
    french: 'Euh... (refuser en douceur)',
    phonetic: 'tchot-to...',
    arabic: 'ちょっと...',
    tip: "Jamais de « non » frontal au Japon : un « chotto... » suivi d'une grimace polie vaut un refus définitif.",
    difficulty: 2
  },
  {
    id: 'jp-emo-8',
    category: 'emotions_argot',
    french: 'Relou / ça me gonfle',
    phonetic: 'ou-za-i',
    arabic: 'うざい',
    dialects: {
      hakata: { phonetic: 'ba-ri mou-ka-tsou-kou', arabic: 'バリむかつく', note: "« Bari » (vachement) plus « mukatsuku » (ça m'énerve) : l'agacement intensifié façon Fukuoka." }
    },
    difficulty: 2
  },
  {
    id: 'jp-emo-9',
    category: 'emotions_argot',
    french: "N'importe quoi ! / c'est quoi ce délire",
    phonetic: 'na-ni so-ré?!',
    arabic: '何それ？！',
    dialects: {
      kansai: { phonetic: 'nan-dé ya-nen!', arabic: 'なんでやねん！', note: "LA réplique comique d'Osaka, star du manzai : on la lance en tapant l'épaule du copain qui vient de dire une bêtise." }
    },
    difficulty: 3
  },

  /* ------------------------- Verbes Moteurs ------------------------- */
  {
    id: 'jp-ver-1',
    category: 'verbes_moteurs',
    french: 'Vouloir',
    phonetic: 'ho-chii / ...taï',
    arabic: '欲しい／〜たい',
    tip: "« Hoshii » pour un objet (« mizu hoshii » : je veux de l'eau), « -tai » collé au verbe pour une action (« tabetai » : je veux manger). Zéro conjugaison.",
    difficulty: 1
  },
  {
    id: 'jp-ver-2',
    category: 'verbes_moteurs',
    french: 'Avoir / il y a',
    phonetic: 'a-rou / i-rou',
    arabic: 'ある／いる',
    tip: "« Aru » pour les choses, « iru » pour les êtres vivants : la distinction est obligatoire, sans exception.",
    difficulty: 2
  },
  {
    id: 'jp-ver-3',
    category: 'verbes_moteurs',
    french: 'Aller',
    phonetic: 'i-kou',
    arabic: '行く',
    difficulty: 1
  },
  {
    id: 'jp-ver-4',
    category: 'verbes_moteurs',
    french: 'Manger',
    phonetic: 'ta-bé-rou',
    arabic: '食べる',
    difficulty: 1
  },
  {
    id: 'jp-ver-5',
    category: 'verbes_moteurs',
    french: 'Acheter',
    phonetic: 'ka-ou',
    arabic: '買う',
    difficulty: 1
  },
  {
    id: 'jp-ver-6',
    category: 'verbes_moteurs',
    french: "Pouvoir / c'est bon",
    phonetic: 'dé-ki-rou / ii yo',
    arabic: 'できる／いいよ',
    tip: "« Dekiru? » : c'est possible ? « Ii yo ! » : vas-y, pas de souci. Le feu vert universel.",
    difficulty: 1
  },
  {
    id: 'jp-ver-7',
    category: 'verbes_moteurs',
    french: 'Aimer / kiffer',
    phonetic: 'sou-ki',
    arabic: '好き',
    dialects: {
      hakata: { phonetic: 'soui-tô', arabic: '好いとう', note: "Le mot doux de Fukuoka : « suitou » sert autant pour « je t'aime bien » que pour une vraie déclaration." }
    },
    tip: "« Suki » sert pour un plat, un film ET une déclaration d'amour : un seul mot pour tout ça.",
    difficulty: 1
  },

  /* ------------------------- Urgences & Quotidien ------------------------- */
  {
    id: 'jp-urg-1',
    category: 'urgences_quotidien',
    french: 'Au secours ! / aidez-moi',
    phonetic: 'ta-sou-ké-té!',
    arabic: '助けて！',
    difficulty: 1
  },
  {
    id: 'jp-urg-2',
    category: 'urgences_quotidien',
    french: 'Où sont les toilettes ?',
    phonetic: 'toi-ré wa do-ko dess ka?',
    arabic: 'トイレはどこですか？',
    difficulty: 1
  },
  {
    id: 'jp-urg-3',
    category: 'urgences_quotidien',
    french: 'Je ne comprends pas',
    phonetic: 'wa-ka-ri-ma-sen',
    arabic: '分かりません',
    dialects: {
      hakata: { phonetic: 'wa-ka-ran-to', arabic: '分からんと', note: "Le « -to » final de Fukuoka, une particule explicative qu'on colle en bout de phrase." }
    },
    tip: "LA phrase de survie numéro un, à sortir dès que le débit devient trop rapide.",
    difficulty: 1
  },
  {
    id: 'jp-urg-4',
    category: 'urgences_quotidien',
    french: 'Tu parles anglais ?',
    phonetic: 'éï-go, ha-na-sé-mass ka?',
    arabic: '英語、話せますか？',
    difficulty: 2
  },
  {
    id: 'jp-urg-5',
    category: 'urgences_quotidien',
    french: "C'est quoi le mot de passe wifi ?",
    phonetic: 'waï-faï no pa-sou-wâ-do wa nan dess ka?',
    arabic: 'Wi-Fiのパスワードは何ですか？',
    tip: "L'urgence moderne par excellence, acceptée partout, même dans le plus petit café de quartier.",
    difficulty: 2
  },

  /* ------------------------- Chiffres ------------------------- */
  {
    id: 'jp-chi-1',
    category: 'chiffres',
    french: 'Un, deux, trois',
    phonetic: 'i-tchi, ni, san',
    arabic: '一、二、三',
    difficulty: 1
  },
  {
    id: 'jp-chi-2',
    category: 'chiffres',
    french: "Quatre, cinq, six... jusqu'à dix",
    phonetic: 'yon, go, ro-kou, na-na, ha-tchi, kyou, djuu',
    arabic: '四、五、六、七、八、九、十',
    tip: "Avec 1 à 10 vous comptez tout : 11 = 10-1 (juuichi), 20 = 2-10 (nijuu), 99 = 9-10-9.",
    difficulty: 1
  },
  {
    id: 'jp-chi-3',
    category: 'chiffres',
    french: 'Cent / mille',
    phonetic: 'hya-kou / sen',
    arabic: '百／千',
    tip: "Les prix japonais grimpent vite en yens : ces deux-là servent dès le premier konbini.",
    difficulty: 2
  },
  {
    id: 'jp-chi-4',
    category: 'chiffres',
    french: 'Combien ? (quantité)',
    phonetic: 'i-kou-tsou?',
    arabic: 'いくつ？',
    difficulty: 2
  }
];
