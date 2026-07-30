import { VocabItem } from '../types';

/**
 * Portuguese vocabulary pack, same categories and philosophy as the Arabic
 * and Italian lists: the everyday spoken language, not the textbook one.
 * Base variant is European Portuguese from Lisbon (swallowed vowels, final
 * unstressed syllables barely spoken). The `arabic` field holds the written
 * Portuguese, `phonetic` a French-friendly reading with the stressed
 * syllable in uppercase and nasal vowels approximated the French way.
 * Variants carry the regional flavour (Rio/São Paulo, Luanda).
 */
export const VOCABULARY_LIST_PT: VocabItem[] = [

  /* ------------------------- Salutations ------------------------- */
  {
    id: 'pt-sal-1',
    category: 'salutations',
    french: 'Salut ! (bonjour et au revoir familier)',
    phonetic: 'o-LA',
    arabic: 'Olá!',
    dialects: {
      bresilien: { phonetic: 'oy!', arabic: 'Oi!', note: "Au Brésil, « Oi! » remplace largement « Olá », même au téléphone." }
    },
    tip: "Passe-partout pour arriver comme pour partir, en version un peu plus formelle que « oi ».",
    difficulty: 1
  },
  {
    id: 'pt-sal-2',
    category: 'salutations',
    french: 'Bonjour (le matin)',
    phonetic: 'bon DI-a',
    arabic: 'Bom dia',
    tip: "« Bom » est nasal : bouche presque fermée sur le « ou », pas un « bon » français franc.",
    difficulty: 1
  },
  {
    id: 'pt-sal-3',
    category: 'salutations',
    french: "Bonjour (l'après-midi) / bonsoir",
    phonetic: 'BO-a TARD',
    arabic: 'Boa tarde',
    tip: "À Lisbonne, le « e » final tombe presque toujours : TARD, jamais TAR-dé.",
    difficulty: 1
  },
  {
    id: 'pt-sal-4',
    category: 'salutations',
    french: 'Comment ça va ?',
    phonetic: 'KO-mou (i)sh-TA / TOU-dou BÉIN',
    arabic: 'Como está? / Tudo bem?',
    dialects: {
      angolais: { phonetic: 'BÉIN, BÉIN?', arabic: 'Bem, bem?', note: "À Luanda, « bem, bem? » redoublé est fréquent, un rythme plus martelé qu'au Portugal." }
    },
    tip: "« Tudo bem? » est la version courte et universelle, utilisable avec n'importe qui.",
    difficulty: 1
  },
  {
    id: 'pt-sal-5',
    category: 'salutations',
    french: 'Merci',
    phonetic: 'o-bri-GA-dou / o-bri-GA-da',
    arabic: 'Obrigado / Obrigada',
    dialects: {
      bresilien: { phonetic: 'va-LÉOU', arabic: 'Valeu', note: "Entre amis, « valeu » (litt. « ça a valu ») remplace obrigado : plus décontracté, très courant au Brésil." }
    },
    tip: "Règle non négociable : un homme dit obrigado, une femme dit obrigada, peu importe à qui il ou elle s'adresse.",
    difficulty: 1
  },
  {
    id: 'pt-sal-6',
    category: 'salutations',
    french: 'De rien',
    phonetic: 'd(e) NA-da',
    arabic: 'De nada',
    tip: "Au Portugal on entend tout autant « não tens de quê » (tu n'as pas de quoi).",
    difficulty: 1
  },
  {
    id: 'pt-sal-7',
    category: 'salutations',
    french: 'Excusez-moi / pardon',
    phonetic: 'desh-KOUL-p(e) / desh-KOUL-pa',
    arabic: 'Desculpe / Desculpa',
    tip: "« Desculpe » en vouvoiement (serveur, inconnu), « desculpa » entre amis, exactement comme scusi/scusa en italien.",
    difficulty: 1
  },
  {
    id: 'pt-sal-8',
    category: 'salutations',
    french: 'Enchanté !',
    phonetic: 'MOU-i-tou pra-ZÉR',
    arabic: 'Muito prazer!',
    difficulty: 2
  },

  /* ------------------------- Café & Resto ------------------------- */
  {
    id: 'pt-caf-1',
    category: 'cafe_resto',
    french: "Un café, s'il vous plaît",
    phonetic: 'OU-ma BI-ka, se fash fa-VOR',
    arabic: 'Uma bica, se faz favor',
    dialects: {
      bresilien: { phonetic: 'oun ka-fe-ZI-nyou, por fa-VOR', arabic: 'Um cafezinho, por favor', note: "« Bica » ne veut rien dire au Brésil : cafezinho partout, et « por favor » remplace « se faz favor »." },
      angolais: { phonetic: 'oun ka-fe-ZI-nyou', arabic: 'Um cafezinho', note: "« Bica » est un mot 100% lisboète ; à Luanda comme au Brésil, on dit cafezinho." }
    },
    tip: "Bica = petit café serré, LE mot de Lisbonne. Ailleurs au Portugal on entend parfois « cimbalino ».",
    difficulty: 1
  },
  {
    id: 'pt-caf-2',
    category: 'cafe_resto',
    french: "L'addition, s'il vous plaît",
    phonetic: 'a KON-ta, se fash fa-VOR',
    arabic: 'A conta, se faz favor',
    difficulty: 1
  },
  {
    id: 'pt-caf-3',
    category: 'cafe_resto',
    french: "C'est délicieux !",
    phonetic: '(i)sh-TA de-li-syO-zou',
    arabic: 'Está delicioso',
    tip: "Au superlatif : « está deliciosíssimo », ça fait toujours plaisir au cuisinier.",
    difficulty: 1
  },
  {
    id: 'pt-caf-4',
    category: 'cafe_resto',
    french: 'Je voudrais...',
    phonetic: 'ke-RI-a',
    arabic: 'Queria...',
    tip: "Le conditionnel de politesse : « Queria um café » passe partout, du bar au restaurant chic.",
    difficulty: 1
  },
  {
    id: 'pt-caf-5',
    category: 'cafe_resto',
    french: 'Une table pour deux',
    phonetic: 'OU-ma MÉ-za PA-ra DOICH',
    arabic: 'Uma mesa para dois',
    difficulty: 2
  },
  {
    id: 'pt-caf-6',
    category: 'cafe_resto',
    french: "Qu'est-ce que vous me conseillez ?",
    phonetic: 'ou ké mi a-kon-SÉ-lya?',
    arabic: 'O que me aconselha?',
    tip: "La question qui fait plaisir au serveur et débloque le plat du jour caché sur l'ardoise.",
    difficulty: 2
  },
  {
    id: 'pt-caf-7',
    category: 'cafe_resto',
    french: 'Un verre de vin rouge / blanc',
    phonetic: 'oun KO-pou de VI-nyou TIN-tou / BRAN-kou',
    arabic: 'Um copo de vinho tinto / branco',
    tip: "Au Portugal, le vin rouge se dit « tinto », jamais « vermelho ».",
    difficulty: 2
  },

  /* ------------------------- Taxi & Directions ------------------------- */
  {
    id: 'pt-tax-1',
    category: 'taxi_directions',
    french: 'Où est... ?',
    phonetic: 'ON-d(e) É...?',
    arabic: 'Onde é...?',
    tip: "« Onde é a estação? » (la gare), « Onde é a casa de banho? » (les toilettes : vital).",
    difficulty: 1
  },
  {
    id: 'pt-tax-2',
    category: 'taxi_directions',
    french: 'Tout droit',
    phonetic: 'SEIN-pr(e) an FREN-t(e)',
    arabic: 'Sempre em frente',
    difficulty: 1
  },
  {
    id: 'pt-tax-3',
    category: 'taxi_directions',
    french: 'À droite / à gauche',
    phonetic: 'a di-RÉI-ta / a esh-KÉR-da',
    arabic: 'À direita / à esquerda',
    difficulty: 1
  },
  {
    id: 'pt-tax-4',
    category: 'taxi_directions',
    french: "C'est loin / c'est près ?",
    phonetic: 'É LON-je / É PER-tou?',
    arabic: 'É longe / é perto?',
    difficulty: 2
  },
  {
    id: 'pt-tax-5',
    category: 'taxi_directions',
    french: 'Arrêtez-vous ici, merci',
    phonetic: 'PA-r(e) a-KI, o-bri-GA-dou',
    arabic: 'Pare aqui, obrigado',
    difficulty: 2
  },
  {
    id: 'pt-tax-6',
    category: 'taxi_directions',
    french: 'Le train / le bus / le métro',
    phonetic: 'ou kon-BOI-you / ou aou-tou-KA-rrou / ou MÉ-trou',
    arabic: 'O comboio / o autocarro / o metro',
    dialects: {
      bresilien: { phonetic: 'ou TRÉIN / ou ON-i-bous / ou mé-TRO', arabic: 'O trem / o ônibus / o metrô', note: "Vocabulaire totalement différent du Portugal : comboio devient trem, autocarro devient ônibus. À apprendre par cœur avant Rio." },
      angolais: { phonetic: 'ou aou-tou-KA-rrou / ou kan-don-GUÉ-rou', arabic: 'O autocarro / o candongueiro', note: "Le candongueiro, mini-van collectif omniprésent à Luanda, est un mode de transport à lui tout seul." }
    },
    difficulty: 1
  },

  /* ------------------------- Négociation & Achats ------------------------- */
  {
    id: 'pt-neg-1',
    category: 'negociation_souk',
    french: 'Combien ça coûte ?',
    phonetic: 'KOUAN-tou KOOSH-ta?',
    arabic: 'Quanto custa?',
    dialects: {
      bresilien: { phonetic: 'KOUAN-tou KOOSH-ta IS-sou?', arabic: 'Quanto custa isso?', note: "Rythme plus détendu et « isso » (ça) ajouté quasi systématiquement." }
    },
    tip: "LA phrase à dégainer partout : marché, boutique, taxi.",
    difficulty: 1
  },
  {
    id: 'pt-neg-2',
    category: 'negociation_souk',
    french: "C'est trop cher !",
    phonetic: '(i)sh-TA MOU-i-tou KA-rou!',
    arabic: 'Está muito caro!',
    dialects: {
      angolais: { phonetic: '(i)sh-TA MOU-i-tou KA-rou, KO-ta!', arabic: 'Está muito caro, kota!', note: "« Kota » (l'ancien, le patron, un respect affectueux) adoucit toute négociation à Luanda." }
    },
    tip: "Sur les marchés, on négocie avec le sourire ; dans les boutiques fixes, beaucoup moins.",
    difficulty: 1
  },
  {
    id: 'pt-neg-3',
    category: 'negociation_souk',
    french: 'Vous me faites un prix ?',
    phonetic: 'FAZ-mé oun PRÉ-sou?',
    arabic: 'Faz-me um preço?',
    tip: "« Faz-me um desconto? » (une remise) fonctionne tout autant.",
    difficulty: 2
  },
  {
    id: 'pt-neg-4',
    category: 'negociation_souk',
    french: 'Je regarde seulement, merci',
    phonetic: '(i)sh-TOU sO a VÉR, o-bri-GA-dou',
    arabic: 'Estou só a ver, obrigado',
    dialects: {
      bresilien: { phonetic: '(i)sh-TOU sO o-LYAN-dou, o-bri-GA-dou', arabic: 'Estou só olhando, obrigado', note: "Le Brésil aime le gérondif (« olhando ») là où le Portugal dit « a ver » : marqueur numéro un des deux portugais." }
    },
    difficulty: 2
  },
  {
    id: 'pt-neg-5',
    category: 'negociation_souk',
    french: "D'accord, je le prends !",
    phonetic: '(i)sh-TA BEIN, LÉ-vou!',
    arabic: 'Está bem, levo!',
    difficulty: 1
  },
  {
    id: 'pt-neg-6',
    category: 'negociation_souk',
    french: 'On peut payer par carte ?',
    phonetic: 'POD-se pa-GAR koun ou kar-TAWNG?',
    arabic: 'Pode-se pagar com o cartão?',
    tip: "Réponse fréquente sur les marchés : « só dinheiro » (espèces seulement).",
    difficulty: 2
  },

  /* ------------------------- Émotions & Argot ------------------------- */
  {
    id: 'pt-emo-1',
    category: 'emotions_argot',
    french: 'Trop bien / trop cool !',
    phonetic: 'FI-sh(e)!',
    arabic: 'Fixe!',
    dialects: {
      bresilien: { phonetic: 'lé-GAL! / ma-néi-ROU!', arabic: 'Legal! / Maneiro!', note: "« Fixe » ne se dit quasiment jamais au Brésil : legal ou maneiro en sont les vrais équivalents." },
      angolais: { phonetic: 'bou-É FI-sh(e)!', arabic: 'Bué fixe!', note: "« Bué » (intensificateur né en Angola, adopté à Lisbonne) démultiplie tout : bué fixe, bué caro, bué bom." }
    },
    tip: "LE mot signature du Portugal : fixe s'applique à tout, des gens aux idées en passant sur la météo.",
    difficulty: 1
  },
  {
    id: 'pt-emo-2',
    category: 'emotions_argot',
    french: 'Allez / vas-y / mec (interjection passe-partout)',
    phonetic: 'PA...',
    arabic: 'Pá...',
    dialects: {
      bresilien: { phonetic: 'KA-ra...', arabic: 'Cara...', note: "« Pá » n'existe pas au Brésil : « cara » (mec, mon gars) en est l'équivalent exact." }
    },
    tip: "« Pá » se glisse partout, souvent en fin de phrase, sans vraiment rien dire de précis : anda lá, pá !",
    difficulty: 2
  },
  {
    id: 'pt-emo-3',
    category: 'emotions_argot',
    french: 'Tout va bien / ça roule',
    phonetic: 'TOU-dou BÉIN / TOU-dou FI-sh(e)',
    arabic: 'Tudo bem / tudo fixe',
    dialects: {
      bresilien: { phonetic: 'bé-LÉ-za?', arabic: 'Beleza?', note: "« Beleza? » (littéralement « beauté ») est LE salut-question brésilien : ça fait bonjour et comment ça va en un mot." }
    },
    difficulty: 1
  },
  {
    id: 'pt-emo-4',
    category: 'emotions_argot',
    french: 'Quel dommage !',
    phonetic: 'ké PÉ-na!',
    arabic: 'Que pena!',
    difficulty: 1
  },
  {
    id: 'pt-emo-5',
    category: 'emotions_argot',
    french: "N'y pense même pas / laisse tomber",
    phonetic: 'néin PEN-shesh NI-sou',
    arabic: 'Nem penses nisso',
    difficulty: 2
  },
  {
    id: 'pt-emo-6',
    category: 'emotions_argot',
    french: "Se débrouiller avec les moyens du bord",
    phonetic: 'de-zen-rash-KAR-se',
    arabic: 'Desenrascar-se',
    tip: "LE mot le plus portugais qui soit : trouver une solution avec rien, au dernier moment, sans plan B. Intraduisible ailleurs.",
    difficulty: 3
  },
  {
    id: 'pt-emo-7',
    category: 'emotions_argot',
    french: 'Nostalgie profonde et douce (intraduisible)',
    phonetic: 'saou-DA-d(e)',
    arabic: 'Saudade',
    tip: "Saudade n'est ni tristesse ni nostalgie : c'est le manque doux-amer de quelqu'un ou de quelque chose. Le socle du fado.",
    difficulty: 3
  },
  {
    id: 'pt-emo-8',
    category: 'emotions_argot',
    french: "Ouais... / bon... (particule d'accord résigné)",
    phonetic: 'POICH',
    arabic: 'Pois',
    tip: "« Pois » tout seul peut vouloir dire oui, bon, forcément, c'est comme ça... selon le ton. Le mot le plus flou et le plus utile du portugais.",
    difficulty: 2
  },
  {
    id: 'pt-emo-9',
    category: 'emotions_argot',
    french: 'Quel bazar / quelle plaie !',
    phonetic: 'ké shA-ta!',
    arabic: 'Que chata!',
    dialects: {
      angolais: { phonetic: 'ké MAN-bou!', arabic: 'Que mambo!', note: "« Mambo » désigne à Luanda une embrouille, une histoire compliquée : « que mambo » veut dire quel bazar." }
    },
    tip: "« Chato/chata » = ce qui gonfle, embête ; « seca » marche aussi couramment au Portugal.",
    difficulty: 2
  },

  /* ------------------------- Verbes moteurs ------------------------- */
  {
    id: 'pt-ver-1',
    category: 'verbes_moteurs',
    french: 'Je veux / je voudrais',
    phonetic: 'KÉ-rou / ke-RI-a',
    arabic: 'Quero / queria',
    tip: "« Quero » est direct, « queria » est poli : au restaurant, toujours queria.",
    difficulty: 1
  },
  {
    id: 'pt-ver-2',
    category: 'verbes_moteurs',
    french: "J'ai / tu as",
    phonetic: 'TÉ-nyou / TÉNSH',
    arabic: 'Tenho / tens',
    tip: "« Tenho fome » (j'ai faim), « tenho sede » (soif), « tenho pressa » (je suis pressé).",
    difficulty: 1
  },
  {
    id: 'pt-ver-3',
    category: 'verbes_moteurs',
    french: 'Je vais / on y va',
    phonetic: 'VO / VA-mosh',
    arabic: 'Vou / vamos',
    dialects: {
      bresilien: { phonetic: 'BO-ra!', arabic: 'Vamos, bora!', note: "« Bora » (contraction de « embora ») est le cri de ralliement brésilien : plus court et plus fréquent que vamos seul." },
      angolais: { phonetic: 'VA-mosh, BO-ra!', arabic: 'Vamos, bora!', note: "« Bora » a traversé l'Atlantique jusqu'à Luanda, où il se mélange sans problème au portugais local." }
    },
    tip: "« Vamos! » à lui seul, c'est le cri de ralliement universel.",
    difficulty: 1
  },
  {
    id: 'pt-ver-4',
    category: 'verbes_moteurs',
    french: 'Je peux... ?',
    phonetic: 'PO-sou...?',
    arabic: 'Posso...?',
    tip: "« Posso? » tout seul en montrant une chaise du doigt : puis-je ? Très utile.",
    difficulty: 1
  },
  {
    id: 'pt-ver-5',
    category: 'verbes_moteurs',
    french: 'Je sais / je ne sais pas',
    phonetic: 'SÉI / naoun SÉI',
    arabic: 'Sei / não sei',
    difficulty: 1
  },
  {
    id: 'pt-ver-6',
    category: 'verbes_moteurs',
    french: 'Je comprends / je ne comprends pas',
    phonetic: 'pér-SÉ-bou / naoun pér-SÉ-bou',
    arabic: 'Percebo / não percebo',
    tip: "« Não percebo » plus un sourire, et le natif ralentit et reformule tout seul. Magique.",
    difficulty: 1
  },
  {
    id: 'pt-ver-7',
    category: 'verbes_moteurs',
    french: 'Il faut / il ne faut pas',
    phonetic: 'É pre-SI-sou / naoun É pre-SI-sou',
    arabic: 'É preciso / não é preciso',
    difficulty: 2
  },

  /* ------------------------- Urgences & Quotidien ------------------------- */
  {
    id: 'pt-urg-1',
    category: 'urgences_quotidien',
    french: 'Au secours !',
    phonetic: 'sou-KOR-rou!',
    arabic: 'Socorro!',
    difficulty: 1
  },
  {
    id: 'pt-urg-2',
    category: 'urgences_quotidien',
    french: "J'ai besoin d'un médecin",
    phonetic: 'pre-SI-sou de oun MÉ-di-kou',
    arabic: 'Preciso de um médico',
    difficulty: 2
  },
  {
    id: 'pt-urg-3',
    category: 'urgences_quotidien',
    french: 'Où est la pharmacie ?',
    phonetic: 'ON-d(e) É a far-MA-sya?',
    arabic: 'Onde é a farmácia?',
    tip: "La croix verte : allumée, c'est ouvert, comme partout ailleurs en Europe.",
    difficulty: 1
  },
  {
    id: 'pt-urg-4',
    category: 'urgences_quotidien',
    french: 'J\'ai perdu mon portefeuille',
    phonetic: 'PER-di a kar-TÉI-ra',
    arabic: 'Perdi a carteira',
    difficulty: 2
  },
  {
    id: 'pt-urg-5',
    category: 'urgences_quotidien',
    french: 'Vous parlez français / anglais ?',
    phonetic: 'FA-la fran-SÉZ / een-GLÉZ?',
    arabic: 'Fala francês / inglês?',
    difficulty: 1
  },

  /* ------------------------- Chiffres ------------------------- */
  {
    id: 'pt-chi-1',
    category: 'chiffres',
    french: 'Un, deux, trois, quatre, cinq',
    phonetic: 'OUN, DOISH, TRÉSH, KOUA-trou, SIN-kou',
    arabic: 'Um, dois, três, quatro, cinco',
    difficulty: 1
  },
  {
    id: 'pt-chi-2',
    category: 'chiffres',
    french: 'Six, sept, huit, neuf, dix',
    phonetic: 'SÉISH, SÉ-t(e), OI-tou, NO-v(e), DÉSH',
    arabic: 'Seis, sete, oito, nove, dez',
    difficulty: 1
  },
  {
    id: 'pt-chi-3',
    category: 'chiffres',
    french: 'Vingt, cinquante, cent',
    phonetic: 'VIN-t(e), sin-KOUEN-ta, SEIN',
    arabic: 'Vinte, cinquenta, cem',
    difficulty: 2
  },
  {
    id: 'pt-chi-4',
    category: 'chiffres',
    french: 'Ça fait dix euros / à quelle heure ?',
    phonetic: 'saoun DESH É-ou-rosh / a ké O-rash?',
    arabic: 'São dez euros / a que horas?',
    tip: "« Euro » reste identique au pluriel : dez euros, jamais un accord fantaisiste.",
    difficulty: 2
  }
];
