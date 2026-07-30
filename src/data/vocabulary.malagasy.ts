import { VocabItem } from '../types';

/**
 * Malagasy vocabulary pack. Same philosophy as the other packs: street
 * language, not textbook grammar. The `arabic` field holds the standard
 * written Malagasy (already Latin script, no separate script module needed).
 * `phonetic` gives a French-reading pronunciation guide, stressed syllable
 * in capitals: Malagasy stresses the second-to-last syllable and swallows
 * the final one almost to a whisper, and the letter "o" is always read "ou".
 * Base dialect is Merina (Antananarivo / Hautes Terres, the official
 * standard). `cotier` overrides cover Sakalava, Betsimisaraka and Vezo
 * speech from the coasts, only where the word genuinely differs.
 */
export const VOCABULARY_LIST_MG: VocabItem[] = [

  /* ------------------------- Salutations ------------------------- */
  {
    id: 'mg-sal-1',
    category: 'salutations',
    french: 'Bonjour (formule standard)',
    phonetic: 'ma-nao a-HO-na',
    arabic: 'Manao ahoana',
    tip: 'Marche partout, tout le temps. Le "o" se dit toujours "ou" : c\'est la clé de tout le malgache.',
    difficulty: 1
  },
  {
    id: 'mg-sal-2',
    category: 'salutations',
    french: 'Salut (rapide, décontracté)',
    phonetic: 'ma-na-HO-na e!',
    arabic: 'Manahoana e!',
    dialects: {
      cotier: { phonetic: 'sa-LA-ma!', arabic: 'Salama!', note: 'Le bonjour solaire des côtes, hérité du swahili : direct, sans détour, adopté aussi par les jeunes de Tana.' }
    },
    tip: 'Le "e" final est juste une respiration, presque un soupir. Ne cherchez pas à le prononcer fort.',
    difficulty: 1
  },
  {
    id: 'mg-sal-3',
    category: 'salutations',
    french: 'Comment ça va ?',
    phonetic: 'ma-nao a-HO-na ia-NAO?',
    arabic: 'Manao ahoana ianao?',
    dialects: {
      cotier: { phonetic: 'a-KO-ry a-BY i-ZAO?', arabic: 'Akory aby izao?', note: 'Le "comment ça va" sakalava et vezo, plus court, plus rythmé que la version des Hautes Terres.' }
    },
    difficulty: 1
  },
  {
    id: 'mg-sal-4',
    category: 'salutations',
    french: 'Merci',
    phonetic: 'mi-SAO-tra',
    arabic: 'Misaotra',
    tip: 'Le "tra" final s\'avale presque entièrement, un petit souffle en "ts". C\'est la signature du malgache parlé.',
    difficulty: 1
  },
  {
    id: 'mg-sal-5',
    category: 'salutations',
    french: 'De rien',
    phonetic: 'tsi MI-si',
    arabic: 'Tsy misy',
    tip: 'Littéralement "il n\'y a rien". Réponse minimaliste et parfaite à un "misaotra".',
    difficulty: 1
  },
  {
    id: 'mg-sal-6',
    category: 'salutations',
    french: 'Pardon / excuse-moi / s\'il te plaît',
    phonetic: 'a-za-FA-di',
    arabic: 'Azafady',
    tip: 'Le mot le plus utile du malgache : il sert à la fois pour "pardon", "excuse-moi" et "s\'il te plaît". Un seul mot, trois usages, zéro excuse pour l\'oublier.',
    difficulty: 1
  },
  {
    id: 'mg-sal-7',
    category: 'salutations',
    french: 'Bienvenue',
    phonetic: 'TOUN-ga SOU-a',
    arabic: 'Tonga soa',
    tip: 'Littéralement "arrivée bonne". Vous l\'entendrez à chaque porte, chaque village, chaque taxi-brousse qui vous dépose.',
    difficulty: 1
  },
  {
    id: 'mg-sal-8',
    category: 'salutations',
    french: 'Au revoir',
    phonetic: 've-LOU-ma',
    arabic: 'Veloma',
    tip: 'Vient de "velona", être vivant : un "au revoir" malgache souhaite littéralement de rester en vie jusqu\'à la prochaine fois.',
    difficulty: 1
  },

  /* ------------------------- Café & Resto ------------------------- */
  {
    id: 'mg-caf-1',
    category: 'cafe_resto',
    french: 'Un café, s\'il te plaît',
    phonetic: 'KA-fe I-ray a-za-FA-di',
    arabic: 'Kafe iray azafady',
    tip: '"Iray" (un) se colle après le nom, jamais avant, comme en français.',
    difficulty: 1
  },
  {
    id: 'mg-caf-2',
    category: 'cafe_resto',
    french: 'De l\'eau',
    phonetic: 'RA-nou',
    arabic: 'Rano',
    tip: 'Demandez toujours de l\'eau en bouteille ("rano an-tavoahangy") en dehors des grandes villes.',
    difficulty: 1
  },
  {
    id: 'mg-caf-3',
    category: 'cafe_resto',
    french: 'J\'ai faim',
    phonetic: 'nou-A-na a-HOU',
    arabic: 'Noana aho',
    difficulty: 1
  },
  {
    id: 'mg-caf-4',
    category: 'cafe_resto',
    french: 'C\'est délicieux !',
    phonetic: 'ma-TSI-rou!',
    arabic: 'Matsiro!',
    dialects: {
      cotier: { phonetic: 'ma-SOU-a!', arabic: 'Masoa!', note: 'Sur les côtes, "soa" (bon) remplace souvent le "tsara/matsiro" des Hautes Terres.' }
    },
    difficulty: 1
  },
  {
    id: 'mg-caf-5',
    category: 'cafe_resto',
    french: 'L\'addition, s\'il te plaît',
    phonetic: 'la-di-si-ON a-za-FA-di',
    arabic: 'L\'addition azafady',
    tip: 'Madagascar est bilingue de fait : au resto, "l\'addition" se dit... en français, collé à l\'azafady malgache. Assumez le mélange, tout le monde le fait.',
    difficulty: 2
  },
  {
    id: 'mg-caf-6',
    category: 'cafe_resto',
    french: 'Pas épicé, s\'il te plaît',
    phonetic: 'tsi MI-si sa-KAY',
    arabic: 'Tsy misy sakay',
    tip: 'Le "sakay" est le piment malgache, servi à part en petit pot : vous dosez vous-même, ce qui est plus sage au début.',
    difficulty: 1
  },
  {
    id: 'mg-caf-7',
    category: 'cafe_resto',
    french: 'Je suis calé / j\'ai bien mangé',
    phonetic: 'VOU-ki a-HOU',
    arabic: 'Voky aho',
    tip: 'La formule qui arrête un hôte qui ressert sans fin : "je suis rassasié", point final.',
    difficulty: 2
  },

  /* ------------------------- Taxi & Directions ------------------------- */
  {
    id: 'mg-tax-1',
    category: 'taxi_directions',
    french: 'Le taxi-brousse',
    phonetic: 'tak-si-BROUSS',
    arabic: 'Taxi-brousse',
    tip: 'Le transport emblématique de Madagascar : un minibus qui ne part que plein, jamais à l\'heure, toujours avec une poule ou deux à bord. Une aventure en soi, pas juste un trajet.',
    difficulty: 1
  },
  {
    id: 'mg-tax-2',
    category: 'taxi_directions',
    french: 'Où est... ?',
    phonetic: 'AY-za ny...?',
    arabic: 'Aiza ny...?',
    difficulty: 1
  },
  {
    id: 'mg-tax-3',
    category: 'taxi_directions',
    french: 'Arrête-toi ici',
    phonetic: 'mi-dza-NOU-na E-tou',
    arabic: 'Mijanona eto',
    difficulty: 1
  },
  {
    id: 'mg-tax-4',
    category: 'taxi_directions',
    french: 'Tout droit / à gauche / à droite',
    phonetic: 'mi-ZOU-tra ma-HI-tsi / mi-an-ka-VI-a / mi-an-ka-va-NA-na',
    arabic: 'Mizotra mahitsy / miankavia / miankavanana',
    difficulty: 2
  },
  {
    id: 'mg-tax-5',
    category: 'taxi_directions',
    french: 'C\'est loin ?',
    phonetic: 'la-VI-tra ve?',
    arabic: 'Lavitra ve?',
    tip: 'Ajoutez "ve" à la fin de n\'importe quelle phrase pour en faire une question. Zéro grammaire, ça marche.',
    difficulty: 1
  },
  {
    id: 'mg-tax-6',
    category: 'taxi_directions',
    french: 'Plus vite !',
    phonetic: 'HAIN-ga-na ke-LY!',
    arabic: 'Haingana kely!',
    dialects: {
      cotier: { phonetic: 'FAIN-ga-na ke-LY!', arabic: 'Faingana kely!', note: 'Sur les côtes, le "h" merina glisse souvent vers un "f" : haingana devient faingana.' }
    },
    difficulty: 1
  },

  /* ------------------------- Négociation ------------------------- */
  {
    id: 'mg-neg-1',
    category: 'negociation_souk',
    french: 'Combien ça coûte ?',
    phonetic: 'VOU-la FI-ry i-TY?',
    arabic: 'Vola firy ity?',
    tip: 'LA phrase la plus rentable du séjour. "Vola" = argent, "firy" = combien.',
    difficulty: 1
  },
  {
    id: 'mg-neg-2',
    category: 'negociation_souk',
    french: 'Trop cher !',
    phonetic: 'LA-fou be!',
    arabic: 'Lafo be!',
    difficulty: 1
  },
  {
    id: 'mg-neg-3',
    category: 'negociation_souk',
    french: 'Fais un prix, allez',
    phonetic: 'ba a-TAO-vy MOU-ra ke-LY a-za-FA-di',
    arabic: 'Mba ataovy mora kely azafady',
    tip: 'Le marchandage au tsena (marché) est un jeu social, pas un affrontement : sourire obligatoire, patience aussi.',
    difficulty: 2
  },
  {
    id: 'mg-neg-4',
    category: 'negociation_souk',
    french: 'Non merci / je ne veux pas',
    phonetic: 'tsi MI-la a-HOU',
    arabic: 'Tsy mila aho',
    dialects: {
      cotier: { phonetic: 'TSI-a, tsi MI-la', arabic: 'Tsia, tsy mila', note: 'La négation "tsia" claque plus court sur les côtes que le "tsy" des Hautes Terres.' }
    },
    difficulty: 1
  },
  {
    id: 'mg-neg-5',
    category: 'negociation_souk',
    french: 'C\'est bon marché !',
    phonetic: 'MOU-ra be!',
    arabic: 'Mora be!',
    tip: '"Mora" (léger, doux, pas cher) revient partout : c\'est aussi la racine de "mora mora".',
    difficulty: 1
  },
  {
    id: 'mg-neg-6',
    category: 'negociation_souk',
    french: 'Je prends celui-là',
    phonetic: 'a-LAY-kou i-TY',
    arabic: 'Alaiko ity',
    difficulty: 1
  },

  /* ------------------------- Émotions & Argot ------------------------- */
  {
    id: 'mg-emo-1',
    category: 'emotions_argot',
    french: 'Mora mora (tranquille, sans se presser)',
    phonetic: 'MOU-ra MOU-ra',
    arabic: 'Mora mora',
    tip: 'Plus qu\'une expression : une philosophie du temps. Le train peut avoir six heures de retard, la réponse reste "mora mora". Adoptez-la ou souffrez.',
    difficulty: 2
  },
  {
    id: 'mg-emo-2',
    category: 'emotions_argot',
    french: 'Trop bien / génial !',
    phonetic: 'TSA-ra be!',
    arabic: 'Tsara be!',
    dialects: {
      cotier: { phonetic: 'SOU-a be!', arabic: 'Soa be!', note: 'Même distinction que pour "délicieux" : "soa" prend souvent la place de "tsara" sur le littoral.' }
    },
    difficulty: 1
  },
  {
    id: 'mg-emo-3',
    category: 'emotions_argot',
    french: 'Incroyable ! / ça alors !',
    phonetic: 'ma-a-va-RI-a-na!',
    arabic: 'Mahavariana!',
    difficulty: 2
  },
  {
    id: 'mg-emo-4',
    category: 'emotions_argot',
    french: 'Un vazaha (un étranger, un blanc)',
    phonetic: 'va-ZA-ha',
    arabic: 'Vazaha',
    tip: 'Vous serez "le vazaha" du village avant même d\'avoir dit un mot. Ce n\'est pas une insulte, juste un fait : assumez et souriez.',
    difficulty: 2
  },
  {
    id: 'mg-emo-5',
    category: 'emotions_argot',
    french: 'La fihavanana (le lien social sacré)',
    phonetic: 'fi-ha-va-NA-na',
    arabic: 'Fihavanana',
    tip: 'La valeur cardinale malgache : solidarité, entraide, parenté élargie à tout le village. Comprendre ce mot, c\'est comprendre pourquoi personne n\'est jamais vraiment seul ici.',
    difficulty: 3
  },
  {
    id: 'mg-emo-6',
    category: 'emotions_argot',
    french: 'J\'en ai marre / je craque',
    phonetic: 'KI-vy a-HOU',
    arabic: 'Kivy aho',
    dialects: {
      cotier: { phonetic: 'RE-ra-ka a-HOU', arabic: 'Reraka aho', note: '"Reraka" (épuisé) remplace souvent "kivy" sur les côtes pour dire qu\'on n\'en peut plus.' }
    },
    difficulty: 2
  },
  {
    id: 'mg-emo-7',
    category: 'emotions_argot',
    french: 'C\'est réglé / pas de souci',
    phonetic: 'VI-ta iou!',
    arabic: 'Vita io!',
    tip: 'Littéralement "c\'est fait". Le "no stress" malgache en deux syllabes.',
    difficulty: 2
  },
  {
    id: 'mg-emo-8',
    category: 'emotions_argot',
    french: 'Trop fort / grave stylé',
    phonetic: 'ma-HE-ry VAI-ka!',
    arabic: 'Mahery vaika!',
    difficulty: 3
  },
  {
    id: 'mg-emo-9',
    category: 'emotions_argot',
    french: 'Sérieux ?! / c\'est vrai ça ?',
    phonetic: 'ma-RI-na tou-KOU-a ve?',
    arabic: 'Marina tokoa ve?',
    difficulty: 2
  },

  /* ------------------------- Verbes Moteurs ------------------------- */
  {
    id: 'mg-ver-1',
    category: 'verbes_moteurs',
    french: 'Vouloir / avoir besoin de',
    phonetic: 'MI-la',
    arabic: 'Mila',
    tip: '"Mila vola" = avoir besoin d\'argent, "mila fanampiana" = avoir besoin d\'aide. Un seul verbe, plein d\'usages.',
    difficulty: 1
  },
  {
    id: 'mg-ver-2',
    category: 'verbes_moteurs',
    french: 'Avoir / il y a',
    phonetic: 'ma-NA-na',
    arabic: 'Manana',
    difficulty: 1
  },
  {
    id: 'mg-ver-3',
    category: 'verbes_moteurs',
    french: 'Aller',
    phonetic: 'man-DE-ha',
    arabic: 'Mandeha',
    difficulty: 1
  },
  {
    id: 'mg-ver-4',
    category: 'verbes_moteurs',
    french: 'Manger',
    phonetic: 'mi-hi-NA-na',
    arabic: 'Mihinana',
    difficulty: 1
  },
  {
    id: 'mg-ver-5',
    category: 'verbes_moteurs',
    french: 'Acheter',
    phonetic: 'mi-VI-di',
    arabic: 'Mividy',
    difficulty: 1
  },
  {
    id: 'mg-ver-6',
    category: 'verbes_moteurs',
    french: 'Pouvoir / c\'est possible',
    phonetic: 'A-zou a-TAO',
    arabic: 'Azo atao',
    tip: 'Littéralement "peut être fait". "Azo atao ve?" = c\'est possible ? Le feu vert malgache.',
    difficulty: 2
  },
  {
    id: 'mg-ver-7',
    category: 'verbes_moteurs',
    french: 'Aimer / kiffer',
    phonetic: 'TI-a',
    arabic: 'Tia',
    difficulty: 1
  },

  /* ------------------------- Urgences & Quotidien ------------------------- */
  {
    id: 'mg-urg-1',
    category: 'urgences_quotidien',
    french: 'Au secours !',
    phonetic: 'voun-DZEO a-HOU!',
    arabic: 'Vonjeo aho!',
    tip: 'Le "j" malgache se prononce "dz", un peu comme dans "adze".',
    difficulty: 1
  },
  {
    id: 'mg-urg-2',
    category: 'urgences_quotidien',
    french: 'Où sont les toilettes ?',
    phonetic: 'AY-za ny ve-se?',
    arabic: 'Aiza ny WC?',
    tip: 'Personne ne dit "toilettes" en malgache courant : tout le monde utilise "WC", prononcé à la française "vé-sé".',
    difficulty: 1
  },
  {
    id: 'mg-urg-3',
    category: 'urgences_quotidien',
    french: 'Je ne comprends pas',
    phonetic: 'tsi A-zou-kou',
    arabic: 'Tsy azoko',
    dialects: {
      cotier: { phonetic: 'tsi HAI-kou', arabic: 'Tsy haiko', note: 'Sur les côtes, "tsy haiko" (je ne sais pas) sert aussi à dire qu\'on ne suit pas la conversation.' }
    },
    difficulty: 1
  },
  {
    id: 'mg-urg-4',
    category: 'urgences_quotidien',
    french: 'Tu parles français ?',
    phonetic: 'mi-TE-ny fran-TSAY ve ia-NAO?',
    arabic: 'Miteny frantsay ve ianao?',
    tip: 'Contrairement à d\'autres destinations, le français est co-langue officielle : c\'est souvent une vraie porte de sortie, pas juste un espoir.',
    difficulty: 2
  },
  {
    id: 'mg-urg-5',
    category: 'urgences_quotidien',
    french: 'C\'est quoi le mot de passe wifi ?',
    phonetic: 'i-NOU-na ny mot de pass wifi?',
    arabic: 'Inona ny mot de passe wifi?',
    tip: 'Même logique que pour "l\'addition" : les mots techniques restent en français ou en anglais, sans traduction malgache.',
    difficulty: 2
  },

  /* ------------------------- Chiffres ------------------------- */
  {
    id: 'mg-chi-1',
    category: 'chiffres',
    french: 'Un, deux, trois',
    phonetic: 'i-RAY, ROU-a, TE-lou',
    arabic: 'Iray, roa, telo',
    difficulty: 1
  },
  {
    id: 'mg-chi-2',
    category: 'chiffres',
    french: 'Quatre, cinq, six... jusqu\'à dix',
    phonetic: 'e-FA-tra, DI-mi, e-NI-na, FI-tou, VA-lou, SI-vi, FOU-lou',
    arabic: 'Efatra, dimy, enina, fito, valo, sivy, folo',
    difficulty: 1
  },
  {
    id: 'mg-chi-3',
    category: 'chiffres',
    french: 'Cent / mille',
    phonetic: 'ZA-tou / a-RI-vou',
    arabic: 'Zato / arivo',
    tip: 'Utile vite : les prix en ariary comptent souvent en milliers.',
    difficulty: 2
  },
  {
    id: 'mg-chi-4',
    category: 'chiffres',
    french: 'Combien ? (quantité)',
    phonetic: 'FI-ry?',
    arabic: 'Firy?',
    difficulty: 1
  }
];
