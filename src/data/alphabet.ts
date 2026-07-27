import { ArabicLetter } from '../types';

/**
 * The 28 letters, in alphabetical order.
 *
 * `penPath` is the centreline the pen follows to write the isolated form,
 * authored right-to-left in the same 100x100 viewBox the glyph is rendered in
 * (baseline y=68, font-size 66, Amiri). It drives a mask, not the ink: the
 * glyph itself always comes from the font, so an imperfect path only changes
 * *when* a part of the letter appears, never *how* it looks.
 */
export const ARABIC_ALPHABET: ArabicLetter[] = [
  {
    id: 'alif',
    char: 'ا',
    name: 'ألف',
    translit: 'alif',
    sound: 'A long, comme le "â" de "pâte"',
    hack: 'Un simple bâton. C\'est le "a" et le support des autres voyelles.',
    example: { ar: 'أنا', translit: 'ana', fr: 'moi' },
    penPath: 'M50,28 L50,68'
  },
  {
    id: 'ba',
    char: 'ب',
    name: 'باء',
    translit: 'bâ',
    sound: 'B, exactement comme en français',
    hack: 'Une barque avec un point dessous. Barque = Bâ.',
    example: { ar: 'باب', translit: 'bâb', fr: 'porte' },
    penPath: 'M68,52 C68,64 62,70 50,70 C38,70 32,64 32,52'
  },
  {
    id: 'ta',
    char: 'ت',
    name: 'تاء',
    translit: 'tâ',
    sound: 'T, comme "table"',
    hack: 'Même barque que le B, mais deux points au-dessus.',
    example: { ar: 'تمام', translit: 'tamâm', fr: 'parfait' },
    penPath: 'M68,52 C68,64 62,70 50,70 C38,70 32,64 32,52'
  },
  {
    id: 'tha',
    char: 'ث',
    name: 'ثاء',
    translit: 'thâ',
    sound: 'TH anglais de "think", langue entre les dents',
    hack: 'La barque à trois points. En dialecte, souvent prononcé T ou S.',
    example: { ar: 'ثلاثة', translit: 'thalâtha', fr: 'trois' },
    penPath: 'M68,52 C68,64 62,70 50,70 C38,70 32,64 32,52'
  },
  {
    id: 'jim',
    char: 'ج',
    name: 'جيم',
    translit: 'jîm',
    sound: 'J de "journal" (G dur "gâteau" en égyptien)',
    hack: 'Un ventre avec un point dedans. Le Caire dit "guîm".',
    example: { ar: 'جميل', translit: 'jamîl', fr: 'beau' },
    penPath: 'M64,44 C56,44 48,46 42,52 C34,60 34,76 44,84 C54,92 68,88 72,78'
  },
  {
    id: 'ha',
    char: 'ح',
    name: 'حاء',
    translit: 'hâ',
    sound: 'H très soufflé, gorge serrée, comme si tu embuais une vitre',
    hack: 'Le même ventre, sans point. Souffle chaud, pas de voix.',
    example: { ar: 'حبيبي', translit: 'habîbî', fr: 'mon chéri' },
    penPath: 'M64,44 C56,44 48,46 42,52 C34,60 34,76 44,84 C54,92 68,88 72,78'
  },
  {
    id: 'kha',
    char: 'خ',
    name: 'خاء',
    translit: 'khâ',
    sound: 'La jota espagnole, le "ch" allemand de "Bach"',
    hack: 'Le ventre avec un point au-dessus. Raclement de gorge.',
    example: { ar: 'خبز', translit: 'khubz', fr: 'pain' },
    penPath: 'M64,44 C56,44 48,46 42,52 C34,60 34,76 44,84 C54,92 68,88 72,78'
  },
  {
    id: 'dal',
    char: 'د',
    name: 'دال',
    translit: 'dâl',
    sound: 'D, comme "domino"',
    hack: 'Un petit crochet. Il ne s\'attache jamais à sa gauche.',
    example: { ar: 'دار', translit: 'dâr', fr: 'maison' },
    penPath: 'M62,40 C50,42 44,50 44,58 C44,65 50,68 62,68'
  },
  {
    id: 'dhal',
    char: 'ذ',
    name: 'ذال',
    translit: 'dhâl',
    sound: 'TH sonore de "this"',
    hack: 'Le crochet avec un point. En dialecte, ça glisse souvent vers D ou Z.',
    example: { ar: 'هذا', translit: 'hâdha', fr: 'ceci' },
    penPath: 'M62,40 C50,42 44,50 44,58 C44,65 50,68 62,68'
  },
  {
    id: 'ra',
    char: 'ر',
    name: 'راء',
    translit: 'râ',
    sound: 'R roulé, comme en espagnol ou en italien',
    hack: 'Une virgule qui plonge sous la ligne. Jamais le R français.',
    example: { ar: 'رجل', translit: 'râjul', fr: 'homme' },
    penPath: 'M64,44 C62,56 56,70 42,82'
  },
  {
    id: 'zay',
    char: 'ز',
    name: 'زاي',
    translit: 'zây',
    sound: 'Z, comme "zéro"',
    hack: 'La virgule du R, avec un point au-dessus.',
    example: { ar: 'زين', translit: 'zên', fr: 'bien / beau' },
    penPath: 'M64,44 C62,56 56,70 42,82'
  },
  {
    id: 'sin',
    char: 'س',
    name: 'سين',
    translit: 'sîn',
    sound: 'S sourd, comme "sac"',
    hack: 'Trois dents puis une cuvette. Compte les dents : 3 = sîn.',
    example: { ar: 'سلام', translit: 'salâm', fr: 'paix' },
    penPath:
      'M74,50 C74,63 71,68 68,68 C65,68 63,62 63,52 C63,63 60,68 57,68 C54,68 52,62 52,52 C52,63 49,68 46,68 C38,70 28,72 26,58'
  },
  {
    id: 'shin',
    char: 'ش',
    name: 'شين',
    translit: 'shîn',
    sound: 'CH de "chat"',
    hack: 'Les trois dents, plus trois points au-dessus.',
    example: { ar: 'شكرا', translit: 'shukran', fr: 'merci' },
    penPath:
      'M74,50 C74,63 71,68 68,68 C65,68 63,62 63,52 C63,63 60,68 57,68 C54,68 52,62 52,52 C52,63 49,68 46,68 C38,70 28,72 26,58'
  },
  {
    id: 'sad',
    char: 'ص',
    name: 'صاد',
    translit: 'sâd',
    sound: 'S emphatique, bouche pleine, son sombre',
    hack: 'Une boucle puis une cuvette. Dis "S" avec la bouche d\'un "O".',
    example: { ar: 'صباح', translit: 'sabâh', fr: 'matin' },
    penPath: 'M72,50 C64,46 54,48 52,56 C50,63 58,67 66,65 C74,63 76,70 66,73 C50,76 32,72 28,58'
  },
  {
    id: 'dad',
    char: 'ض',
    name: 'ضاد',
    translit: 'dâd',
    sound: 'D emphatique, lourd, son sombre',
    hack: 'La boucle du sâd avec un point. L\'arabe s\'appelle "la langue du dâd".',
    example: { ar: 'ضروري', translit: 'darûrî', fr: 'nécessaire' },
    penPath: 'M72,50 C64,46 54,48 52,56 C50,63 58,67 66,65 C74,63 76,70 66,73 C50,76 32,72 28,58'
  },
  {
    id: 'ta-emph',
    char: 'ط',
    name: 'طاء',
    translit: 'tâ',
    sound: 'T emphatique, sec et sombre',
    hack: 'Une boucle et un mât. Le T claque, la bouche reste ronde.',
    example: { ar: 'طيب', translit: 'tayyib', fr: 'ok / bon' },
    penPath: 'M60,66 C50,69 40,68 34,63 C29,58 34,52 45,53 C55,54 60,58 60,66 M60,66 L60,30'
  },
  {
    id: 'za-emph',
    char: 'ظ',
    name: 'ظاء',
    translit: 'zâ',
    sound: 'Z emphatique, sombre',
    hack: 'La boucle et le mât, plus un point. La lettre la plus rare.',
    example: { ar: 'ظهر', translit: 'duhr', fr: 'midi' },
    penPath: 'M60,66 C50,69 40,68 34,63 C29,58 34,52 45,53 C55,54 60,58 60,66 M60,66 L60,30'
  },
  {
    id: 'ayn',
    char: 'ع',
    name: 'عين',
    translit: 'ʿayn',
    sound: 'Le son de gorge serrée, comme un "a" étranglé',
    hack: 'La lettre signature de l\'arabe. Serre la gorge comme avant de tousser.',
    example: { ar: 'عربي', translit: 'ʿarabî', fr: 'arabe' },
    penPath: 'M64,44 C56,38 46,40 44,48 C42,56 52,60 62,58 C42,60 32,68 34,78 C36,88 58,90 68,78'
  },
  {
    id: 'ghayn',
    char: 'غ',
    name: 'غين',
    translit: 'ghayn',
    sound: 'Le R grasseyé parisien, exactement le R français',
    hack: 'Bonne nouvelle : ton R de "Paris", c\'est ce son-là.',
    example: { ar: 'غالي', translit: 'ghâlî', fr: 'cher' },
    penPath: 'M64,44 C56,38 46,40 44,48 C42,56 52,60 62,58 C42,60 32,68 34,78 C36,88 58,90 68,78'
  },
  {
    id: 'fa',
    char: 'ف',
    name: 'فاء',
    translit: 'fâ',
    sound: 'F, comme "facile"',
    hack: 'Une petite tête ronde avec un point, puis une queue.',
    example: { ar: 'فلوس', translit: 'flûs', fr: 'argent' },
    penPath: 'M60,46 C52,42 44,46 46,53 C48,59 58,59 60,53 C60,64 52,68 42,67 C34,66 30,62 30,56'
  },
  {
    id: 'qaf',
    char: 'ق',
    name: 'قاف',
    translit: 'qâf',
    sound: 'K profond, tout au fond de la gorge',
    hack: 'Deux points sur la tête. Au Caire et à Beyrouth, souvent muet : "\'ahwa".',
    example: { ar: 'قهوة', translit: 'qahwa', fr: 'café' },
    penPath: 'M60,46 C52,42 44,46 46,53 C48,59 58,59 60,53 C60,68 52,80 42,80 C32,80 26,72 28,62'
  },
  {
    id: 'kaf',
    char: 'ك',
    name: 'كاف',
    translit: 'kâf',
    sound: 'K normal, comme "kilo"',
    hack: 'Le K de tous les jours, à ne pas confondre avec le qâf de gorge.',
    example: { ar: 'كبير', translit: 'kbîr', fr: 'grand' },
    penPath: 'M62,28 C58,42 50,56 40,64 C48,68 60,70 70,66'
  },
  {
    id: 'lam',
    char: 'ل',
    name: 'لام',
    translit: 'lâm',
    sound: 'L, comme "lune"',
    hack: 'Un grand crochet. Avec l\'alif, il forme "al-", l\'article.',
    example: { ar: 'لازم', translit: 'lâzim', fr: 'il faut' },
    penPath: 'M62,30 C62,48 62,60 58,66 C52,74 38,74 32,62'
  },
  {
    id: 'mim',
    char: 'م',
    name: 'ميم',
    translit: 'mîm',
    sound: 'M, comme "maison"',
    hack: 'Une petite boule avec une queue qui descend.',
    example: { ar: 'مية', translit: 'mayya', fr: 'eau' },
    penPath: 'M56,50 C46,48 42,56 48,62 C54,67 62,62 60,56 C59,52 58,50 56,50 M58,62 L54,84'
  },
  {
    id: 'nun',
    char: 'ن',
    name: 'نون',
    translit: 'nûn',
    sound: 'N, comme "nuit"',
    hack: 'Un bol profond avec un point dedans. Plus creux que le bâ.',
    example: { ar: 'نعم', translit: 'naʿam', fr: 'oui' },
    penPath: 'M68,46 C68,60 60,71 50,71 C40,71 32,60 32,48'
  },
  {
    id: 'ha-soft',
    char: 'ه',
    name: 'هاء',
    translit: 'hâ',
    sound: 'H léger, expiré, comme le "h" anglais de "hello"',
    hack: 'Un petit nœud. Beaucoup plus doux que le ح de gorge.',
    example: { ar: 'هون', translit: 'hôn', fr: 'ici' },
    penPath: 'M50,46 C40,46 36,54 40,62 C45,69 60,69 64,60 C68,51 60,46 50,46'
  },
  {
    id: 'waw',
    char: 'و',
    name: 'واو',
    translit: 'wâw',
    sound: 'OU, comme "oui", ou le "û" long',
    hack: 'Une boucle avec une queue. C\'est aussi le mot "et" : wa.',
    example: { ar: 'وين', translit: 'wên', fr: 'où' },
    penPath: 'M62,46 C52,43 45,51 49,58 C53,64 62,61 63,53 M63,53 C63,66 57,78 45,86'
  },
  {
    id: 'ya',
    char: 'ي',
    name: 'ياء',
    translit: 'yâ',
    sound: 'Y de "yaourt", ou le "î" long',
    hack: 'Un bol avec deux points dessous. Yalla commence par elle.',
    example: { ar: 'يلا', translit: 'yalla', fr: 'allez !' },
    penPath: 'M68,46 C68,58 60,68 48,68 C36,68 30,76 40,84 C50,91 64,88 70,80'
  }
];
