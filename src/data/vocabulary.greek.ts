import { VocabItem } from '../types';

/**
 * Greek vocabulary pack. Same philosophy as the other packs: street language,
 * not the textbook one. The `arabic` field holds the Greek script, `phonetic`
 * a French-reading transliteration with the stressed syllable in CAPS: for a
 * non-latin script the phonetic field IS the course, the alphabet being a
 * separate module. Cretan overrides use the island's "inta" (for "ti") and
 * final "nde" particle; Cypriot overrides use its "en" negation/copula and
 * palatalized consonants.
 */
export const VOCABULARY_LIST_EL: VocabItem[] = [

  /* ------------------------- Salutations ------------------------- */
  {
    id: 'el-sal-1',
    category: 'salutations',
    french: 'Salut / bonjour (familier)',
    phonetic: 'YA-sou',
    arabic: 'Γεια σου',
    tip: '« Yia » vient de « santé » : ce mot sert aussi bien pour dire bonjour que pour dire au revoir.',
    difficulty: 1
  },
  {
    id: 'el-sal-2',
    category: 'salutations',
    french: 'Bonjour (poli, vouvoiement)',
    phonetic: 'YA-sas',
    arabic: 'Γεια σας',
    tip: 'Le pluriel de politesse : à un groupe, un aîné, ou un inconnu qu\'on vouvoie.',
    difficulty: 1
  },
  {
    id: 'el-sal-3',
    category: 'salutations',
    french: 'Bonjour (le matin)',
    phonetic: 'ka-li-ME-ra',
    arabic: 'Καλημέρα',
    tip: 'Se dit jusqu\'à midi passé. Après, on bascule sur « kalispera ».',
    difficulty: 1
  },
  {
    id: 'el-sal-4',
    category: 'salutations',
    french: 'Bonsoir',
    phonetic: 'ka-lis-PE-ra',
    arabic: 'Καλησπέρα',
    difficulty: 1
  },
  {
    id: 'el-sal-5',
    category: 'salutations',
    french: 'Merci',
    phonetic: 'ef-kha-ri-STO',
    arabic: 'Ευχαριστώ',
    tip: 'Le mot le plus long du pack mais aussi le plus utile. Dites-le, même mal, on vous le pardonnera.',
    difficulty: 1
  },
  {
    id: 'el-sal-6',
    category: 'salutations',
    french: 'De rien / je vous en prie',
    phonetic: 'pa-ra-ka-LO',
    arabic: 'Παρακαλώ',
    tip: '« Parakalo » sert aussi de « s\'il vous plaît » et pour répondre au téléphone. Trois usages, un seul mot.',
    difficulty: 1
  },
  {
    id: 'el-sal-7',
    category: 'salutations',
    french: 'Comment ça va ?',
    phonetic: 'ti KA-nis',
    arabic: 'Τι κάνεις;',
    dialects: {
      cretois: { phonetic: 'IN-ta KA-nis', arabic: 'Ίντα κάνεις;', note: 'La signature crétoise absolue : le « ti » (quoi) standard devient « inta » partout dans l\'île.' },
      chypriote: { phonetic: 'ti KAM-nis', arabic: 'Τι κάμνεις;', note: 'À Chypre, « kanis » (faire) redevient « kamnis », la forme ancienne du verbe, conservée nulle part ailleurs.' }
    },
    tip: 'Réponse standard : « kala » (bien) ou « etsi ki etsi » (comme ci comme ça).',
    difficulty: 1
  },
  {
    id: 'el-sal-8',
    category: 'salutations',
    french: 'Au revoir / à plus',
    phonetic: 'ta LE-me',
    arabic: 'Τα λέμε',
    tip: 'Littéralement « on se le dit » : le au revoir décontracté entre amis. Le formel reste « adio ».',
    difficulty: 1
  },

  /* ------------------------- Café & Resto ------------------------- */
  {
    id: 'el-caf-1',
    category: 'cafe_resto',
    french: 'Un café frappé, s\'il vous plaît',
    phonetic: 'E-nan fra-PE pa-ra-ka-LO',
    arabic: 'Έναν φραπέ, παρακαλώ',
    tip: 'Le frappé est une institution nationale, inventé par accident à Thessalonique en 1957. Précisez « metrio » (mi-sucré) ou « sketo » (sans sucre).',
    difficulty: 1
  },
  {
    id: 'el-caf-2',
    category: 'cafe_resto',
    french: 'L\'addition, s\'il vous plaît',
    phonetic: 'ton lo-gar-yaz-MO pa-ra-ka-LO',
    arabic: 'Τον λογαριασμό, παρακαλώ',
    difficulty: 1
  },
  {
    id: 'el-caf-3',
    category: 'cafe_resto',
    french: 'C\'est délicieux',
    phonetic: 'I-ne NOS-ti-mo',
    arabic: 'Είναι νόστιμο',
    dialects: {
      chypriote: { phonetic: 'en NOS-ti-mon', arabic: 'Εν νόστιμον', note: 'Chypre garde le « n » final de l\'ancien grec et utilise « en » à la place de « ine » (c\'est) : deux archaïsmes dans un seul mot.' }
    },
    difficulty: 1
  },
  {
    id: 'el-caf-4',
    category: 'cafe_resto',
    french: 'Un verre d\'eau',
    phonetic: 'E-na po-TI-ri ne-RO',
    arabic: 'Ένα ποτήρι νερό',
    tip: 'Un verre d\'eau glacée arrive toujours gratuitement avec le café, même sans le demander.',
    difficulty: 1
  },
  {
    id: 'el-caf-5',
    category: 'cafe_resto',
    french: 'Santé ! (trinquer)',
    phonetic: 'ya-MAS',
    arabic: 'Γειά μας',
    tip: 'Littéralement « à notre santé ». Le ouzo se boit lentement, à petites gorgées, jamais cul sec.',
    difficulty: 1
  },
  {
    id: 'el-caf-6',
    category: 'cafe_resto',
    french: 'Je suis calé / j\'ai bien mangé',
    phonetic: 'KHOR-ta-sa',
    arabic: 'Χόρτασα',
    dialects: {
      cretois: { phonetic: 'ki E-na ra-KI ya to sto-MA-hi', arabic: 'Κι ένα ρακί για το στομάχι', note: 'En Crète, le repas se ferme systématiquement par un verre de raki (tsikoudia), offert par la maison pour « aider l\'estomac ». Refuser est presque impoli.' }
    },
    difficulty: 2
  },
  {
    id: 'el-caf-7',
    category: 'cafe_resto',
    french: 'C\'est offert par la maison ?',
    phonetic: 'I-ne ke-raz-ME-no',
    arabic: 'Είναι κερασμένο;',
    tip: 'Un dessert ou un digestif « kerasmeno » qui arrive sans être commandé : la générosité grecque en action.',
    difficulty: 2
  },

  /* ------------------------- Taxi & Directions ------------------------- */
  {
    id: 'el-tax-1',
    category: 'taxi_directions',
    french: 'Où est... ?',
    phonetic: 'pou I-ne',
    arabic: 'Πού είναι...;',
    difficulty: 1
  },
  {
    id: 'el-tax-2',
    category: 'taxi_directions',
    french: 'Arrêtez-vous ici',
    phonetic: 'sta-MA-ta e-DO',
    arabic: 'Σταμάτα εδώ',
    difficulty: 1
  },
  {
    id: 'el-tax-3',
    category: 'taxi_directions',
    french: 'Tout droit',
    phonetic: 'ef-THI-a',
    arabic: 'Ευθεία',
    difficulty: 1
  },
  {
    id: 'el-tax-4',
    category: 'taxi_directions',
    french: 'À gauche / à droite',
    phonetic: 'a-ris-te-RA / the-ksi-A',
    arabic: 'Αριστερά / Δεξιά',
    difficulty: 2
  },
  {
    id: 'el-tax-5',
    category: 'taxi_directions',
    french: 'C\'est loin ?',
    phonetic: 'I-ne ma-kri-A',
    arabic: 'Είναι μακριά;',
    difficulty: 1
  },
  {
    id: 'el-tax-6',
    category: 'taxi_directions',
    french: 'Plus vite ! / dépêche',
    phonetic: 'pio GHRI-gho-ra',
    arabic: 'Πιο γρήγορα',
    difficulty: 1
  },

  /* ------------------------- Négociation ------------------------- */
  {
    id: 'el-neg-1',
    category: 'negociation_souk',
    french: 'Combien ça coûte ?',
    phonetic: 'PO-so KA-ni',
    arabic: 'Πόσο κάνει;',
    dialects: {
      cretois: { phonetic: 'PO-so KA-ni nde', arabic: 'Πόσο κάνει ντε;', note: 'Le crétois adore ponctuer ses phrases du petit « nde », une particule d\'insistance qui n\'existe quasiment nulle part ailleurs en Grèce.' }
    },
    tip: 'LA phrase la plus rentable du grec. Fonctionne au marché comme au taxi.',
    difficulty: 1
  },
  {
    id: 'el-neg-2',
    category: 'negociation_souk',
    french: 'Trop cher !',
    phonetic: 'po-LI a-kri-VO',
    arabic: 'Πολύ ακριβό!',
    difficulty: 1
  },
  {
    id: 'el-neg-3',
    category: 'negociation_souk',
    french: 'Fais-moi un meilleur prix',
    phonetic: 'KA-ne mou ka-LI-te-ri ti-MI',
    arabic: 'Κάνε μου καλύτερη τιμή',
    dialects: {
      cretois: { phonetic: 'KA-ne mou ka-LI-te-ri ti-MI nde', arabic: 'Κάνε μου καλύτερη τιμή ντε', note: 'Même « nde » final : en Crète, il adoucit une demande et la rend presque affectueuse plutôt qu\'insistante.' }
    },
    difficulty: 2
  },
  {
    id: 'el-neg-4',
    category: 'negociation_souk',
    french: 'Non merci',
    phonetic: 'O-hi ef-kha-ri-STO',
    arabic: 'Όχι, ευχαριστώ',
    difficulty: 1
  },
  {
    id: 'el-neg-5',
    category: 'negociation_souk',
    french: 'Je prends celui-ci',
    phonetic: 'tha PA-ro af-TO',
    arabic: 'Θα πάρω αυτό',
    difficulty: 1
  },
  {
    id: 'el-neg-6',
    category: 'negociation_souk',
    french: 'Vous acceptez la carte ?',
    phonetic: 'DE-hes-te KAR-ta',
    arabic: 'Δέχεστε κάρτα;',
    tip: 'Dans les petites échoppes et les îles, le cash reste roi : gardez toujours des espèces sur vous.',
    difficulty: 2
  },

  /* ------------------------- Émotions & Argot ------------------------- */
  {
    id: 'el-emo-1',
    category: 'emotions_argot',
    french: 'Allez / viens / sérieux ?',
    phonetic: 'E-la',
    arabic: 'Έλα!',
    dialects: {
      cretois: { phonetic: 'AIN-de', arabic: 'Άιντε!', note: 'En Crète, « ela » s\'entend aussi sous la forme rurale « ainde », l\'équivalent de « allez, on y va ».' }
    },
    tip: 'Le mot grec à tout faire : « viens », « allez », « quoi ?! », « pas possible », selon le ton. À dégainer partout.',
    difficulty: 2
  },
  {
    id: 'el-emo-2',
    category: 'emotions_argot',
    french: 'Youpi ! / vas-y ! (exclamation de joie)',
    phonetic: 'O-pa',
    arabic: 'Ώπα!',
    dialects: {
      chypriote: { phonetic: 'THKYE mou', arabic: 'Θκιέ μου!', note: 'Juron affectueux chypriote culte : littéralement « mon oncle », déformé par le fameux groupe de consonnes « thk » propre à l\'île.' }
    },
    tip: 'S\'écrie en dansant, en cassant une assiette de bonne humeur, ou juste en trébuchant sans gravité.',
    difficulty: 1
  },
  {
    id: 'el-emo-3',
    category: 'emotions_argot',
    french: 'Doucement, tranquille',
    phonetic: 'si-GHA si-GHA',
    arabic: 'Σιγά σιγά',
    tip: 'La philosophie grecque en deux mots répétés : rien ne sert de courir, le bus/le café/la vie arrivera à l\'heure grecque.',
    difficulty: 1
  },
  {
    id: 'el-emo-4',
    category: 'emotions_argot',
    french: 'Mon pote / mec (argot fort, entre potes uniquement)',
    phonetic: 'ma-LA-ka',
    arabic: 'Μαλάκα',
    dialects: {
      chypriote: { phonetic: 're koum-BA-re', arabic: 'Ρε κουμπάρε!', note: 'Chypre préfère cette interpellation, littéralement « compère » : moins cru, tout aussi affectueux entre amis.' }
    },
    tip: 'Attention : c\'est une insulte crue (littéralement) devenue interjection amicale entre proches. Ne le sortez qu\'avec des gens qui vous connaissent, jamais avec un inconnu ou un aîné.',
    difficulty: 3
  },
  {
    id: 'el-emo-5',
    category: 'emotions_argot',
    french: 'L\'entrain, la bonne ambiance',
    phonetic: 'KE-fi',
    arabic: 'Κέφι',
    tip: 'Intraduisible : l\'envie de danser, de chanter, de vivre à fond, là, maintenant. Se dit « avoir du kefi » ce soir.',
    difficulty: 2
  },
  {
    id: 'el-emo-6',
    category: 'emotions_argot',
    french: 'L\'honneur, la dignité personnelle',
    phonetic: 'fi-LO-ti-mo',
    arabic: 'Φιλότιμο',
    tip: 'Valeur cardinale grecque : faire les choses bien par respect de soi, même quand personne ne regarde.',
    difficulty: 3
  },
  {
    id: 'el-emo-7',
    category: 'emotions_argot',
    french: 'Trop bien / génial',
    phonetic: 'TE-lia',
    arabic: 'Τέλεια!',
    difficulty: 1
  },
  {
    id: 'el-emo-8',
    category: 'emotions_argot',
    french: 'Ma copine / ma meuf (familier)',
    phonetic: 'ko-PE-la',
    arabic: 'Κοπέλα',
    dialects: {
      cretois: { phonetic: 'ko-pe-LIA', arabic: 'Κοπελιά', note: 'Forme crétoise du mot, entendue dans les tavernes de village et les mantinades, ces chansons rimées improvisées à la volée.' }
    },
    difficulty: 2
  },
  {
    id: 'el-emo-9',
    category: 'emotions_argot',
    french: 'Pas de souci / t\'inquiète',
    phonetic: 'den pi-RA-zi',
    arabic: 'Δεν πειράζει',
    dialects: {
      chypriote: { phonetic: 'en da-LO', arabic: 'Εν νταλό', note: 'Expression chypriote figée pour « ce n\'est rien » : le « en » local remplace le « den » standard de la négation.' }
    },
    difficulty: 1
  },

  /* ------------------------- Verbes Moteurs ------------------------- */
  {
    id: 'el-ver-1',
    category: 'verbes_moteurs',
    french: 'Vouloir / je veux',
    phonetic: 'THE-lo',
    arabic: 'Θέλω',
    tip: '« Thelo » + n\'importe quel nom au bon cas suffit. Zéro subjonctif, zéro complication.',
    difficulty: 1
  },
  {
    id: 'el-ver-2',
    category: 'verbes_moteurs',
    french: 'Avoir / il y a',
    phonetic: 'E-kho / i-PAR-hi',
    arabic: 'Έχω / Υπάρχει',
    tip: '« Eho » (j\'ai) et « iparhi » (il y a) : les deux mots qui décrivent tout ce qui existe ou manque.',
    difficulty: 1
  },
  {
    id: 'el-ver-3',
    category: 'verbes_moteurs',
    french: 'Aller',
    phonetic: 'PA-o',
    arabic: 'Πάω',
    tip: '« Pao Athina » : je vais à Athènes. Sujet sous-entendu, verbe, destination : l\'ordre le plus simple qui soit.',
    difficulty: 1
  },
  {
    id: 'el-ver-4',
    category: 'verbes_moteurs',
    french: 'Manger',
    phonetic: 'TRO-o',
    arabic: 'Τρώω',
    difficulty: 1
  },
  {
    id: 'el-ver-5',
    category: 'verbes_moteurs',
    french: 'Acheter',
    phonetic: 'a-gho-RA-zo',
    arabic: 'Αγοράζω',
    difficulty: 2
  },
  {
    id: 'el-ver-6',
    category: 'verbes_moteurs',
    french: 'Pouvoir / c\'est possible',
    phonetic: 'bo-RO',
    arabic: 'Μπορώ',
    tip: '« Boro? » : je peux ? Réponse « boris » (tu peux) ou carrément « ela » si c\'est oui.',
    difficulty: 1
  },
  {
    id: 'el-ver-7',
    category: 'verbes_moteurs',
    french: 'Aimer / kiffer',
    phonetic: 'mou a-RE-si',
    arabic: 'Μου αρέσει',
    tip: 'Littéralement « ça me plaît », pas « j\'aime » : le sujet grammatical, c\'est la chose aimée, pas vous.',
    difficulty: 2
  },

  /* ------------------------- Urgences & Quotidien ------------------------- */
  {
    id: 'el-urg-1',
    category: 'urgences_quotidien',
    french: 'Au secours !',
    phonetic: 'vo-I-thia',
    arabic: 'Βοήθεια!',
    difficulty: 1
  },
  {
    id: 'el-urg-2',
    category: 'urgences_quotidien',
    french: 'Où sont les toilettes ?',
    phonetic: 'pou I-ne i toua-LE-ta',
    arabic: 'Πού είναι η τουαλέτα;',
    difficulty: 1
  },
  {
    id: 'el-urg-3',
    category: 'urgences_quotidien',
    french: 'Je ne comprends pas',
    phonetic: 'den ka-ta-la-VE-no',
    arabic: 'Δεν καταλαβαίνω',
    dialects: {
      chypriote: { phonetic: 'en ka-ta-la-VE-no', arabic: 'Εν καταλαβαίνω', note: 'La négation chypriote perd son « d » : « den » devient « en ». Attention, ce même « en » sert aussi de verbe être selon le contexte.' }
    },
    tip: 'LA phrase de survie numéro un, à accompagner d\'un sourire désolé.',
    difficulty: 1
  },
  {
    id: 'el-urg-4',
    category: 'urgences_quotidien',
    french: 'Tu parles anglais ?',
    phonetic: 'mi-LAS an-gli-KA',
    arabic: 'Μιλάς αγγλικά;',
    difficulty: 1
  },
  {
    id: 'el-urg-5',
    category: 'urgences_quotidien',
    french: 'C\'est quoi le mot de passe wifi ?',
    phonetic: 'pios I-ne o ko-di-KOS wi-fi',
    arabic: 'Ποιος είναι ο κωδικός wifi;',
    tip: 'L\'urgence moderne acceptée partout, du café de plage à la taverne de montagne.',
    difficulty: 2
  },

  /* ------------------------- Chiffres ------------------------- */
  {
    id: 'el-chi-1',
    category: 'chiffres',
    french: 'Un, deux, trois',
    phonetic: 'E-na DI-o TRI-a',
    arabic: 'Ένα, δύο, τρία',
    difficulty: 1
  },
  {
    id: 'el-chi-2',
    category: 'chiffres',
    french: 'Quatre, cinq, six... jusqu\'à dix',
    phonetic: 'TE-se-ra PEN-de EK-si ef-TA okh-TO e-NIA DE-ka',
    arabic: 'Τέσσερα, πέντε, έξι, εφτά, οχτώ, εννιά, δέκα',
    tip: 'Avec 1 à 10 vous comptez tout : 11 = dix-un (endeka), 20 = eikosi, les prix des tavernes ne vous échapperont plus.',
    difficulty: 1
  },
  {
    id: 'el-chi-3',
    category: 'chiffres',
    french: 'Cent / mille',
    phonetic: 'e-ka-TO / KHI-lia',
    arabic: 'Εκατό / Χίλια',
    difficulty: 2
  },
  {
    id: 'el-chi-4',
    category: 'chiffres',
    french: 'Combien ? (quantité)',
    phonetic: 'PO-sa',
    arabic: 'Πόσα;',
    tip: '« Posa » pour compter des objets, « poso » (déjà vu) pour un prix. Une lettre change tout.',
    difficulty: 2
  }
];
