import { VocabItem } from '../types';

/**
 * Mandarin vocabulary pack. Same philosophy as the other packs: the street
 * language, not the textbook one. The `arabic` field holds the written
 * Chinese (hanzi), `phonetic` the pinyin with tone marks: for a non-latin
 * script the phonetic field IS the course, hanzi being a separate module.
 * Taiwanese overrides are written in traditional characters, as in Taiwan.
 */
export const VOCABULARY_LIST_MD: VocabItem[] = [

  /* ------------------------- Salutations ------------------------- */
  {
    id: 'md-sal-1',
    category: 'salutations',
    french: 'Salut / bonjour',
    phonetic: 'nǐ hǎo',
    arabic: '你好',
    dialects: {
      dongbei: { phonetic: 'hāi, gàn shá ne?', arabic: '嗨，干啥呢？', note: 'Au Dongbei on attaque direct : « hé, tu fais quoi ? »' }
    },
    tip: 'Deux 3e tons qui se suivent : le premier devient montant, on dit « ní hǎo ».',
    difficulty: 1
  },
  {
    id: 'md-sal-2',
    category: 'salutations',
    french: 'Bonjour (poli, vouvoiement)',
    phonetic: 'nín hǎo',
    arabic: '您好',
    tip: 'Le « nín » de politesse est un réflexe pékinois : serveurs, aînés, clients.',
    difficulty: 1
  },
  {
    id: 'md-sal-3',
    category: 'salutations',
    french: 'Merci',
    phonetic: 'xièxie',
    arabic: '谢谢',
    dialects: {
      taiwanais: { phonetic: 'xièxie', arabic: '謝謝', note: 'Taïwan écrit en caractères traditionnels : même mot, plus de traits.' }
    },
    tip: 'Le « x » se prononce entre « s » et « ch » doux : « syé-syé ».',
    difficulty: 1
  },
  {
    id: 'md-sal-4',
    category: 'salutations',
    french: 'De rien',
    phonetic: 'bú kèqi',
    arabic: '不客气',
    dialects: {
      taiwanais: { phonetic: 'bú huì', arabic: '不會', note: 'Le « de rien » 100% taïwanais : littéralement « mais non ».' }
    },
    difficulty: 1
  },
  {
    id: 'md-sal-5',
    category: 'salutations',
    french: 'Pardon / excusez-moi',
    phonetic: 'bù hǎoyìsi',
    arabic: '不好意思',
    tip: 'Le vrai « pardon » du quotidien. « Duìbuqǐ » (对不起) est réservé aux vraies excuses.',
    difficulty: 1
  },
  {
    id: 'md-sal-6',
    category: 'salutations',
    french: 'Au revoir',
    phonetic: 'zàijiàn',
    arabic: '再见',
    dialects: {
      taiwanais: { phonetic: 'bàibài', arabic: '拜拜', note: 'À Taïwan (et chez les jeunes partout), c\'est « bye bye » sinisé.' }
    },
    difficulty: 1
  },
  {
    id: 'md-sal-7',
    category: 'salutations',
    french: 'Tu as mangé ? (salut authentique)',
    phonetic: 'nǐ chī le ma?',
    arabic: '你吃了吗？',
    tip: 'Le vrai bonjour chinois. Personne ne veut le menu : répondez « chī le » (oui) et souriez.',
    difficulty: 2
  },
  {
    id: 'md-sal-8',
    category: 'salutations',
    french: 'Enchanté !',
    phonetic: 'hěn gāoxìng rènshi nǐ',
    arabic: '很高兴认识你',
    difficulty: 2
  },

  /* ------------------------- Café & Resto ------------------------- */
  {
    id: 'md-caf-1',
    category: 'cafe_resto',
    french: 'Serveur ! (appeler)',
    phonetic: 'fúwùyuán!',
    arabic: '服务员！',
    dialects: {
      taiwanais: { phonetic: 'bù hǎoyìsi!', arabic: '不好意思！', note: 'À Taïwan on n\'interpelle pas : un « excusez-moi » suffit.' },
      dongbei: { phonetic: 'fúwùyuán, lái yíxiàr!', arabic: '服务员，来一下儿！', note: 'Version Dongbei : « serveur, viens voir ! », volume inclus.' }
    },
    tip: 'En Chine continentale, héler le serveur est normal et attendu. Zéro gêne.',
    difficulty: 1
  },
  {
    id: 'md-caf-2',
    category: 'cafe_resto',
    french: "L'addition !",
    phonetic: 'mǎidān!',
    arabic: '买单！',
    dialects: {
      pekinois: { phonetic: 'jiézhàng!', arabic: '结账！', note: 'À Pékin on entend plutôt « jiézhàng », le mot du Nord.' }
    },
    difficulty: 1
  },
  {
    id: 'md-caf-3',
    category: 'cafe_resto',
    french: 'C\'est délicieux !',
    phonetic: 'hǎochī!',
    arabic: '好吃！',
    dialects: {
      dongbei: { phonetic: 'zéi hǎochī!', arabic: '贼好吃！', note: '« Zéi » (voleur) = « vachement » en dongbei. Compliment maximal.' }
    },
    tip: 'Pour une boisson on dit « hǎohē » (好喝) : bon à boire.',
    difficulty: 1
  },
  {
    id: 'md-caf-4',
    category: 'cafe_resto',
    french: 'De l\'eau chaude, s\'il vous plaît',
    phonetic: 'qǐng gěi wǒ rè shuǐ',
    arabic: '请给我热水',
    tip: 'L\'eau glacée n\'existe pas : en Chine, l\'eau se boit chaude, même en été. Résistez ou adoptez.',
    difficulty: 2
  },
  {
    id: 'md-caf-5',
    category: 'cafe_resto',
    french: 'Pas épicé, s\'il vous plaît',
    phonetic: 'bú yào là',
    arabic: '不要辣',
    tip: 'Vital au Sichuan. Version réaliste : « wēi là » (微辣) = légèrement épicé, déjà costaud.',
    difficulty: 1
  },
  {
    id: 'md-caf-6',
    category: 'cafe_resto',
    french: 'Santé ! (trinquer)',
    phonetic: 'gānbēi!',
    arabic: '干杯！',
    dialects: {
      dongbei: { phonetic: 'zǒu yí gè!', arabic: '走一个！', note: 'Le toast dongbei : « allez, on en fait un ! ». Refuser est un sport de combat.' }
    },
    tip: 'Littéralement « sèche le verre » : c\'est un cul sec, pas une gorgée. Dosez.',
    difficulty: 1
  },
  {
    id: 'md-caf-7',
    category: 'cafe_resto',
    french: 'Je suis calé / j\'ai bien mangé',
    phonetic: 'chī bǎo le',
    arabic: '吃饱了',
    tip: 'La formule magique pour arrêter un hôte qui ressert : « je suis plein, merci ».',
    difficulty: 2
  },

  /* ------------------------- Taxi & Directions ------------------------- */
  {
    id: 'md-tax-1',
    category: 'taxi_directions',
    french: 'Où est... ?',
    phonetic: '... zài nǎlǐ?',
    arabic: '在哪里？',
    dialects: {
      pekinois: { phonetic: '... zài nǎr?', arabic: '在哪儿？', note: 'L\'érisation pékinoise : « nǎlǐ » devient « nǎr », un seul son qui roule.' }
    },
    difficulty: 1
  },
  {
    id: 'md-tax-2',
    category: 'taxi_directions',
    french: 'Arrêtez-vous ici',
    phonetic: 'jiù zài zhèlǐ tíng',
    arabic: '就在这里停',
    dialects: {
      pekinois: { phonetic: 'jiù zhèr tíng', arabic: '就这儿停', note: 'Version taxi pékinois, plus courte, avec le -r.' }
    },
    difficulty: 1
  },
  {
    id: 'md-tax-3',
    category: 'taxi_directions',
    french: 'Le métro',
    phonetic: 'dìtiě',
    arabic: '地铁',
    dialects: {
      taiwanais: { phonetic: 'jiéyùn', arabic: '捷運', note: 'À Taipei le métro s\'appelle le MRT : « jiéyùn », jamais dìtiě.' }
    },
    difficulty: 1
  },
  {
    id: 'md-tax-4',
    category: 'taxi_directions',
    french: 'Tout droit / à gauche / à droite',
    phonetic: 'yìzhí zǒu / zuǒ guǎi / yòu guǎi',
    arabic: '一直走 / 左拐 / 右拐',
    difficulty: 2
  },
  {
    id: 'md-tax-5',
    category: 'taxi_directions',
    french: 'C\'est loin ?',
    phonetic: 'yuǎn ma?',
    arabic: '远吗？',
    tip: 'Ajoutez « ma » (吗) à n\'importe quelle phrase : question instantanée, zéro grammaire.',
    difficulty: 1
  },
  {
    id: 'md-tax-6',
    category: 'taxi_directions',
    french: 'Plus vite ! / dépêche',
    phonetic: 'kuài diǎn!',
    arabic: '快点！',
    dialects: {
      pekinois: { phonetic: 'kuài diǎnr!', arabic: '快点儿！', note: 'Encore le -r : à Pékin, « diǎn » finit toujours en « diǎnr ».' },
      dongbei: { phonetic: 'màliu de!', arabic: '麻溜的！', note: '« Màliu de » : le « grouille-toi » dongbei, intraduisible et parfait.' }
    },
    difficulty: 1
  },

  /* ------------------------- Négociation ------------------------- */
  {
    id: 'md-neg-1',
    category: 'negociation_souk',
    french: 'Combien ça coûte ?',
    phonetic: 'duōshao qián?',
    arabic: '多少钱？',
    tip: 'LA phrase la plus rentable du mandarin. Prononcez « touo-chao tchien ».',
    difficulty: 1
  },
  {
    id: 'md-neg-2',
    category: 'negociation_souk',
    french: 'Trop cher !',
    phonetic: 'tài guì le!',
    arabic: '太贵了！',
    tip: 'Structure en or : « tài ... le » = trop [adjectif]. Tài hǎo le : super !',
    difficulty: 1
  },
  {
    id: 'md-neg-3',
    category: 'negociation_souk',
    french: 'Fais un prix, allez',
    phonetic: 'piányi diǎn ba',
    arabic: '便宜点吧',
    tip: 'Le « ba » final adoucit tout : c\'est la particule du « allez, quoi ».',
    difficulty: 2
  },
  {
    id: 'md-neg-4',
    category: 'negociation_souk',
    french: 'Non merci / je ne veux pas',
    phonetic: 'bú yào',
    arabic: '不要',
    tip: 'Court, net, poli. L\'anti-vendeur universel, à sortir en marchant.',
    difficulty: 1
  },
  {
    id: 'md-neg-5',
    category: 'negociation_souk',
    french: 'Je paie en scannant (QR code)',
    phonetic: 'wǒ sǎo mǎ',
    arabic: '我扫码',
    tip: 'Le cash a quasi disparu : tout se paie en scannant via WeChat ou Alipay, même 1 yuan au marché.',
    difficulty: 2
  },
  {
    id: 'md-neg-6',
    category: 'negociation_souk',
    french: 'Je prends celui-ci',
    phonetic: 'wǒ yào zhège',
    arabic: '我要这个',
    dialects: {
      pekinois: { phonetic: 'wǒ yào zhèige', arabic: '我要这个', note: 'À Pékin « zhège » se dit souvent « zhèige », plus relâché.' }
    },
    difficulty: 1
  },

  /* ------------------------- Émotions & Argot ------------------------- */
  {
    id: 'md-emo-1',
    category: 'emotions_argot',
    french: 'Génial / trop bien !',
    phonetic: 'tài bàng le!',
    arabic: '太棒了！',
    dialects: {
      pekinois: { phonetic: 'niú!', arabic: '牛！', note: '« Niú » (vache) = balèze. Le compliment pékinois par excellence.' },
      dongbei: { phonetic: 'gànggàng de!', arabic: '杠杠的！', note: '« Gànggàng de » : du solide, du béton. Approbation dongbei totale.' }
    },
    difficulty: 1
  },
  {
    id: 'md-emo-2',
    category: 'emotions_argot',
    french: 'Mon pote / frérot',
    phonetic: 'gēmen',
    arabic: '哥们',
    dialects: {
      pekinois: { phonetic: 'gēmenr', arabic: '哥们儿', note: 'Avec le -r, évidemment. Le « poto » des hutongs.' },
      dongbei: { phonetic: 'lǎotiě', arabic: '老铁', note: '« Vieux fer » : une amitié qui ne rouille pas. Star des livestreams.' }
    },
    difficulty: 2
  },
  {
    id: 'md-emo-3',
    category: 'emotions_argot',
    french: 'Sérieux ?! / sans blague',
    phonetic: 'zhēn de jiǎ de?',
    arabic: '真的假的？',
    tip: 'Littéralement « vrai ou faux ? ». Réaction par défaut à toute info surprenante.',
    difficulty: 2
  },
  {
    id: 'md-emo-4',
    category: 'emotions_argot',
    french: 'Pas de souci / t\'inquiète',
    phonetic: 'méi wèntí',
    arabic: '没问题',
    dialects: {
      pekinois: { phonetic: 'méi shìr', arabic: '没事儿', note: '« Méi shìr » : c\'est rien, ça roule. Le -r détend tout.' }
    },
    difficulty: 1
  },
  {
    id: 'md-emo-5',
    category: 'emotions_argot',
    french: 'Trop mignon !',
    phonetic: 'hǎo kě\'ài!',
    arabic: '好可爱！',
    tip: '« Hǎo + adjectif » = tellement [adjectif]. Réflexe taïwanais devant tout ce qui est kawaii.',
    difficulty: 1
  },
  {
    id: 'md-emo-6',
    category: 'emotions_argot',
    french: 'Je lâche l\'affaire (flemme totale)',
    phonetic: 'tǎng píng',
    arabic: '躺平',
    tip: '« S\'allonger à plat » : refuser la course au succès. Le mot d\'une génération.',
    difficulty: 3
  },
  {
    id: 'md-emo-7',
    category: 'emotions_argot',
    french: 'On n\'y peut rien / c\'est comme ça',
    phonetic: 'méi bànfǎ',
    arabic: '没办法',
    tip: 'Le fatalisme opérationnel chinois en trois syllabes. S\'utilise dix fois par jour.',
    difficulty: 2
  },
  {
    id: 'md-emo-8',
    category: 'emotions_argot',
    french: 'Quelle galère / relou',
    phonetic: 'hǎo máfan',
    arabic: '好麻烦',
    tip: '« Máfan » : ennui, complication, corvée. En verbe : « máfan nǐ » = désolé de te déranger.',
    difficulty: 2
  },
  {
    id: 'md-emo-9',
    category: 'emotions_argot',
    french: 'Trop fort ! (argot internet : 666)',
    phonetic: 'liù liù liù!',
    arabic: '666！',
    tip: '« 6 » (liù) sonne comme « fluide, habile ». Tripler = standing ovation numérique.',
    difficulty: 3
  },

  /* ------------------------- Verbes Moteurs ------------------------- */
  {
    id: 'md-ver-1',
    category: 'verbes_moteurs',
    french: 'Vouloir / je veux',
    phonetic: 'yào',
    arabic: '要',
    tip: 'Zéro conjugaison en mandarin : « wǒ yào » (je veux), « nǐ yào ma? » (tu veux ?). C\'est tout.',
    difficulty: 1
  },
  {
    id: 'md-ver-2',
    category: 'verbes_moteurs',
    french: 'Avoir / il y a',
    phonetic: 'yǒu / méi yǒu',
    arabic: '有 / 没有',
    tip: '« Yǒu » couvre avoir ET il y a. « Méi yǒu » : le refrain national des choses épuisées.',
    difficulty: 1
  },
  {
    id: 'md-ver-3',
    category: 'verbes_moteurs',
    french: 'Aller',
    phonetic: 'qù',
    arabic: '去',
    tip: '« Wǒ qù Běijīng » : je vais à Pékin. Sujet + verbe + lieu, dans cet ordre, toujours.',
    difficulty: 1
  },
  {
    id: 'md-ver-4',
    category: 'verbes_moteurs',
    french: 'Manger',
    phonetic: 'chī',
    arabic: '吃',
    tip: '« Chī fàn » (manger le riz) = manger tout court. Le riz EST le repas.',
    difficulty: 1
  },
  {
    id: 'md-ver-5',
    category: 'verbes_moteurs',
    french: 'Acheter',
    phonetic: 'mǎi',
    arabic: '买',
    tip: 'Piège tonal : « mǎi » (3e ton) = acheter, « mài » (4e ton) = vendre. Un ton, un sens inverse.',
    difficulty: 2
  },
  {
    id: 'md-ver-6',
    category: 'verbes_moteurs',
    french: 'Pouvoir / c\'est OK',
    phonetic: 'kěyǐ',
    arabic: '可以',
    tip: '« Kěyǐ ma? » : je peux ? « Kěyǐ! » : vas-y. Le feu vert universel.',
    difficulty: 1
  },
  {
    id: 'md-ver-7',
    category: 'verbes_moteurs',
    french: 'Aimer / kiffer',
    phonetic: 'xǐhuan',
    arabic: '喜欢',
    tip: '« Wǒ xǐhuan » + n\'importe quoi. Pour l\'amour sérieux : « wǒ ài nǐ » (我爱你).',
    difficulty: 1
  },

  /* ------------------------- Urgences & Quotidien ------------------------- */
  {
    id: 'md-urg-1',
    category: 'urgences_quotidien',
    french: 'Au secours ! / aidez-moi',
    phonetic: 'jiùmìng! / bāng bāng wǒ',
    arabic: '救命！/ 帮帮我',
    difficulty: 1
  },
  {
    id: 'md-urg-2',
    category: 'urgences_quotidien',
    french: 'Où sont les toilettes ?',
    phonetic: 'cèsuǒ zài nǎlǐ?',
    arabic: '厕所在哪里？',
    dialects: {
      taiwanais: { phonetic: 'xǐshǒujiān zài nǎlǐ?', arabic: '洗手間在哪裡？', note: 'À Taïwan on dit « salle pour se laver les mains », plus élégant.' }
    },
    difficulty: 1
  },
  {
    id: 'md-urg-3',
    category: 'urgences_quotidien',
    french: 'Je ne comprends pas',
    phonetic: 'tīng bù dǒng',
    arabic: '听不懂',
    tip: 'Littéralement « j\'écoute sans comprendre ». LA phrase de survie numéro un.',
    difficulty: 1
  },
  {
    id: 'md-urg-4',
    category: 'urgences_quotidien',
    french: 'Tu parles anglais ?',
    phonetic: 'nǐ huì shuō Yīngyǔ ma?',
    arabic: '你会说英语吗？',
    difficulty: 2
  },
  {
    id: 'md-urg-5',
    category: 'urgences_quotidien',
    french: 'C\'est quoi le mot de passe wifi ?',
    phonetic: 'wifi mìmǎ shì duōshao?',
    arabic: 'wifi密码是多少？',
    tip: 'Se dit « wai-fai mi-ma ». L\'urgence moderne par excellence, acceptée partout.',
    difficulty: 2
  },

  /* ------------------------- Chiffres ------------------------- */
  {
    id: 'md-chi-1',
    category: 'chiffres',
    french: 'Un, deux, trois',
    phonetic: 'yī, èr, sān',
    arabic: '一、二、三',
    tip: 'Trois traits horizontaux : les trois premiers hanzi s\'apprennent en trois secondes.',
    difficulty: 1
  },
  {
    id: 'md-chi-2',
    category: 'chiffres',
    french: 'Quatre, cinq, six... jusqu\'à dix',
    phonetic: 'sì, wǔ, liù, qī, bā, jiǔ, shí',
    arabic: '四、五、六、七、八、九、十',
    tip: 'Avec 1-10 vous savez tout compter : 11 = 10-1 (shíyī), 20 = 2-10 (èrshí), 99 = 9-10-9.',
    difficulty: 1
  },
  {
    id: 'md-chi-3',
    category: 'chiffres',
    french: 'Cent / mille',
    phonetic: 'bǎi / qiān',
    arabic: '百 / 千',
    tip: '« Yìbǎi » = 100, « yìqiān » = 1000. Les prix chinois montent vite, ces deux-là servent.',
    difficulty: 2
  },
  {
    id: 'md-chi-4',
    category: 'chiffres',
    french: 'Combien ? (quantité)',
    phonetic: 'jǐ ge?',
    arabic: '几个？',
    tip: '« Ge » (个) est le classificateur passe-partout : dans le doute, mettez « ge » et ça passe.',
    difficulty: 2
  }
];
