import { VocabItem } from '../types';

/**
 * Thai vocabulary pack. Same street-language philosophy as the other packs:
 * daily speech, not textbook grammar. The `arabic` field holds the Thai
 * script, `phonetic` a French-style reading (syllables hyphenated, the
 * long/stressed syllable in caps): for a non-latin script the phonetic
 * field IS the course, Thai script being a separate optional module.
 * Base dialect is Central Thai (Bangkok). Isan overrides reflect the strong
 * Lao influence of the Northeast (bo instead of mai, sèp instead of aroi...);
 * Thai Nord overrides reflect Kham Mueang, the Chiang Mai dialect, notably
 * its soft, chanting "jâo" politeness particle.
 */
export const VOCABULARY_LIST_TH: VocabItem[] = [

  /* ------------------------- Salutations ------------------------- */
  {
    id: 'th-sal-1',
    category: 'salutations',
    french: 'Bonjour / salut (un homme parle)',
    phonetic: 'sa-wat-dii KHRAP',
    arabic: 'สวัสดีครับ',
    dialects: {
      isan: { phonetic: 'sa-baai-DII bo', arabic: 'สบายดีบ่', note: "Dans l'Isan, très marqué par le lao, on salue en demandant direct « ça va ? » plutôt qu'en disant bonjour." },
      thai_nord: { phonetic: 'sa-wat-dii JÂO', arabic: 'สวัสดีเจ้า', note: 'Le Nord remplace le khrap/kha final par la particule chantante « jâo », signature du kham mueang.' }
    },
    tip: "Le khrap final est la marque de politesse des hommes, sur quasi toute phrase. Les femmes disent kha (entrée suivante). Zéro conjugaison : juste ce suffixe à coller partout.",
    difficulty: 1
  },
  {
    id: 'th-sal-2',
    category: 'salutations',
    french: 'Bonjour / salut (une femme parle)',
    phonetic: 'sa-wat-dii KHÂ',
    arabic: 'สวัสดีค่ะ',
    tip: "Khâ (ton descendant) est le pendant féminin de khrap. Un homme qui dit khâ se ferait charrier, une femme qui dit khrap aussi.",
    difficulty: 1
  },
  {
    id: 'th-sal-3',
    category: 'salutations',
    french: 'Merci',
    phonetic: 'khop-KHUN khrap',
    arabic: 'ขอบคุณครับ',
    dialects: {
      thai_nord: { phonetic: 'khop-JAI jâo', arabic: 'ขอบใจเจ้า', note: "Le Nord préfère khop jai (litt. « je remercie ton cœur ») à khop khun, jugé plus formel côté Bangkok." }
    },
    tip: "Ajoutez khrap/kha après n'importe quel mot et ça devient poli : tout le secret grammatical du thaï tient là.",
    difficulty: 1
  },
  {
    id: 'th-sal-4',
    category: 'salutations',
    french: 'Pas de souci / de rien',
    phonetic: 'mai-pen-RAI',
    arabic: 'ไม่เป็นไร',
    tip: "La philosophie nationale en trois syllabes. Un voisin renverse votre bière ? Mai pen rai. Le train a deux heures de retard ? Mai pen rai. Adoptez-la, elle rend le pays vivable.",
    difficulty: 1
  },
  {
    id: 'th-sal-5',
    category: 'salutations',
    french: 'Comment ça va ?',
    phonetic: 'sa-baai-dii-MAI',
    arabic: 'สบายดีไหม',
    dialects: {
      thai_nord: { phonetic: 'sa-baai-dii-JÂO', arabic: 'สบายดีเจ้า', note: 'La particule jâo remplace le mai final des questions dans le Nord, ton plus doux et chantant.' }
    },
    tip: "Sabaai dii veut dire « confortable, tranquille » : le mot clé de toute la philosophie thaïe du bien-être.",
    difficulty: 1
  },
  {
    id: 'th-sal-6',
    category: 'salutations',
    french: 'Je vais bien, tranquille',
    phonetic: 'sa-BAAI dii',
    arabic: 'สบายดี',
    tip: "Réponse automatique à la question précédente, même un mauvais jour. Creuser plus loin n'est pas dans les mœurs.",
    difficulty: 1
  },
  {
    id: 'th-sal-7',
    category: 'salutations',
    french: 'Au revoir',
    phonetic: 'laa-GON',
    arabic: 'ลาก่อน',
    dialects: {
      isan: { phonetic: 'bo-hen-gan-LÉO', arabic: 'บ่เห็นกันแล้ว', note: "Version isan familière, plus proche du lao : littéralement « on ne se voit plus, pour l'instant »." }
    },
    tip: "Entre amis, on entend surtout bpai la (j'y vais) ou carrément bye bye à l'anglaise. Laa gon reste un peu formel.",
    difficulty: 2
  },
  {
    id: 'th-sal-8',
    category: 'salutations',
    french: 'Pardon / excusez-moi',
    phonetic: 'khor-THOT',
    arabic: 'ขอโทษ',
    tip: "Sert aussi bien pour « pardon, je vous bouscule » que pour de vraies excuses. Accompagnez-le d'un wai (mains jointes, tête légèrement inclinée) pour une excuse en bonne et due forme.",
    difficulty: 1
  },

  /* ------------------------- Café & Resto ------------------------- */
  {
    id: 'th-caf-1',
    category: 'cafe_resto',
    french: "L'addition, s'il vous plaît",
    phonetic: 'chek-BIN',
    arabic: 'เช็คบิล',
    tip: "Emprunté à l'anglais check bill, comme presque partout en Asie du Sud-Est. Universellement compris.",
    difficulty: 1
  },
  {
    id: 'th-caf-2',
    category: 'cafe_resto',
    french: "C'est délicieux !",
    phonetic: 'a-ROI',
    arabic: 'อร่อย',
    dialects: {
      isan: { phonetic: 'sèp-LAI', arabic: 'แซบหลาย', note: "Sèp est LE mot isan pour délicieux, plus intense qu'aroi. Lai remplace mak comme intensificateur, calque du lao." },
      thai_nord: { phonetic: 'LAM', arabic: 'ลำ', note: "Dans le Nord, un plat délicieux est lam, pas aroi. Vous entendrez « aahaan lam » dans toute cantine de Chiang Mai." }
    },
    tip: 'Le compliment numéro un à distribuer sans retenue. Doublez-le, aroi aroi, pour insister.',
    difficulty: 1
  },
  {
    id: 'th-caf-3',
    category: 'cafe_resto',
    french: "Pas épicé, s'il vous plaît",
    phonetic: 'mai-PHET',
    arabic: 'ไม่เผ็ด',
    tip: "À sortir avant que le cuisinier ne juge lui-même votre tolérance au piment. Spoiler : il la surestimera quand même.",
    difficulty: 1
  },
  {
    id: 'th-caf-4',
    category: 'cafe_resto',
    french: 'Un peu épicé (pas trop)',
    phonetic: 'phet-nit-NOI',
    arabic: 'เผ็ดนิดหน่อย',
    tip: '"Nit noi" (un petit peu) est votre meilleur ami pour négocier le piment à la baisse, version réaliste de la précédente.',
    difficulty: 2
  },
  {
    id: 'th-caf-5',
    category: 'cafe_resto',
    french: "De l'eau plate, s'il vous plaît",
    phonetic: 'naam-PLAO',
    arabic: 'น้ำเปล่า',
    tip: 'Naam = eau, plao = nature. Sans glaçons, précisez : mai sai naeng.',
    difficulty: 1
  },
  {
    id: 'th-caf-6',
    category: 'cafe_resto',
    french: 'Je suis végétarien',
    phonetic: 'gin-JEH',
    arabic: 'กินเจ',
    tip: '« Je » désigne un végétarisme bouddhiste strict (sans ail ni oignon), reconnu partout, bien au-delà du simple végétarisme.',
    difficulty: 2
  },
  {
    id: 'th-caf-7',
    category: 'cafe_resto',
    french: 'Serveur / serveuse ! (pour appeler)',
    phonetic: 'NONG',
    arabic: 'น้อง',
    tip: "Littéralement « petit frère / petite sœur » : on interpelle le personnel plus jeune par ce terme, jamais par un cri générique. Ça passe très bien.",
    difficulty: 2
  },

  /* ------------------------- Taxi & Directions ------------------------- */
  {
    id: 'th-tax-1',
    category: 'taxi_directions',
    french: 'Où est... ?',
    phonetic: '... yuu-thii-NAI',
    arabic: '... อยู่ที่ไหน',
    tip: "Collez n'importe quel mot devant : rot fai yuu thii nai (où est le train). Structure universelle.",
    difficulty: 1
  },
  {
    id: 'th-tax-2',
    category: 'taxi_directions',
    french: 'Tout droit',
    phonetic: 'trong-PAI',
    arabic: 'ตรงไป',
    difficulty: 1
  },
  {
    id: 'th-tax-3',
    category: 'taxi_directions',
    french: 'À gauche / à droite',
    phonetic: 'SAAI / khwaa',
    arabic: 'ซ้าย / ขวา',
    tip: 'Liiw saai (tournez à gauche), liiw khwaa (à droite) : ajoutez liiw (tourner) devant pour la phrase complète.',
    difficulty: 1
  },
  {
    id: 'th-tax-4',
    category: 'taxi_directions',
    french: 'Arrêtez-vous ici',
    phonetic: 'jort-thii-NII',
    arabic: 'จอดที่นี่',
    dialects: {
      isan: { phonetic: 'jort-yuu-nii-DEH', arabic: 'จอดอยู่นี้เด้อ', note: "« Deh » est la particule isan qui adoucit un ordre, l'équivalent lao du « hein » insistant." }
    },
    difficulty: 1
  },
  {
    id: 'th-tax-5',
    category: 'taxi_directions',
    french: "C'est loin ?",
    phonetic: 'klai-MAI',
    arabic: 'ไกลไหม',
    tip: 'Toujours ce mai final qui transforme une affirmation en question. Zéro inversion sujet-verbe à apprendre.',
    difficulty: 1
  },
  {
    id: 'th-tax-6',
    category: 'taxi_directions',
    french: 'Mettez le compteur, s\'il vous plaît',
    phonetic: 'bpèrt-mi-TOE',
    arabic: 'เปิดมิเตอร์',
    tip: "À dire dès que vous montez, avant même de donner l'adresse : sans ça, le prix se négocie à l'arrache, jamais en votre faveur.",
    difficulty: 2
  },

  /* ------------------------- Négociation / Souk ------------------------- */
  {
    id: 'th-neg-1',
    category: 'negociation_souk',
    french: 'Combien ça coûte ?',
    phonetic: 'thao-RAI',
    arabic: 'เท่าไหร่',
    tip: "LA phrase la plus rentable du voyage. Collez-la après n'importe quoi : nii thao rai (combien celui-ci).",
    difficulty: 1
  },
  {
    id: 'th-neg-2',
    category: 'negociation_souk',
    french: 'Trop cher !',
    phonetic: 'phaeng-PAI',
    arabic: 'แพงไป',
    dialects: {
      isan: { phonetic: 'phaeng-LAI', arabic: 'แพงหลาย', note: '« Lai » remplace « pai » comme intensificateur en isan, calque direct du lao.' }
    },
    tip: 'Dites-le avec un sourire désolé, jamais agressif : la négociation thaïe se joue à l\'amiable, pas au clash.',
    difficulty: 1
  },
  {
    id: 'th-neg-3',
    category: 'negociation_souk',
    french: 'Vous pouvez baisser le prix ?',
    phonetic: 'lot-dai-MAI',
    arabic: 'ลดได้ไหม',
    tip: 'Lot = réduire. Direct, poli, efficace : la formule de base de tout marchandage au marché.',
    difficulty: 1
  },
  {
    id: 'th-neg-4',
    category: 'negociation_souk',
    french: 'Le prix thaï, pas le prix touriste',
    phonetic: 'raa-khaa khon-THAI dai-mai',
    arabic: 'ราคาคนไทยได้ไหม',
    tip: 'Phrase culte : demander « le prix des Thaïs » assume à voix haute qu\'il existe un tarif à deux vitesses. Dit avec le sourire, ça marche souvent.',
    difficulty: 3
  },
  {
    id: 'th-neg-5',
    category: 'negociation_souk',
    french: 'Je prends celui-ci',
    phonetic: 'ao-an-NII',
    arabic: 'เอาอันนี้',
    difficulty: 1
  },
  {
    id: 'th-neg-6',
    category: 'negociation_souk',
    french: 'Non merci / je ne veux pas',
    phonetic: 'mai-AO khop-khun',
    arabic: 'ไม่เอา ขอบคุณ',
    dialects: {
      isan: { phonetic: 'bo-AO', arabic: 'บ่เอา', note: "Bo remplace mai pour la négation dans tout l'Isan, l'influence lao la plus reconnaissable à l'oreille." }
    },
    tip: "Court et poli, l'anti-vendeur universel à répéter en marchant, sans ralentir.",
    difficulty: 1
  },

  /* ------------------------- Émotions & Argot ------------------------- */
  {
    id: 'th-emo-1',
    category: 'emotions_argot',
    french: "C'est fun / marrant",
    phonetic: 'sa-NUK',
    arabic: 'สนุก',
    tip: "Le mot le plus utilisé du pays : si ce n'est pas sanuk, ça ne vaut pas la peine d'être fait, dit la philosophie locale.",
    difficulty: 1
  },
  {
    id: 'th-emo-2',
    category: 'emotions_argot',
    french: 'Peinard, relax',
    phonetic: 'sa-baai sa-BAAI',
    arabic: 'สบายๆ',
    dialects: {
      thai_nord: { phonetic: 'sa-baai JÂO', arabic: 'สบายเจ้า', note: 'La particule jâo remplace la répétition centrale : même relâchement, ton plus doux.' }
    },
    tip: 'Doublé, sabaai devient un état d\'esprit complet : ni pressé, ni stressé. Le rêve de toute plage thaïe.',
    difficulty: 1
  },
  {
    id: 'th-emo-3',
    category: 'emotions_argot',
    french: 'Calme-toi (litt. cœur froid)',
    phonetic: 'jai-yen-YEN',
    arabic: 'ใจเย็นๆ',
    tip: 'Un cœur « froid » = zen. À sortir face à quelqu\'un qui s\'énerve, jamais agressif, juste apaisant.',
    difficulty: 2
  },
  {
    id: 'th-emo-4',
    category: 'emotions_argot',
    french: 'Il/elle est soupe au lait (litt. cœur chaud)',
    phonetic: 'jai-RON',
    arabic: 'ใจร้อน',
    tip: "L'opposé exact de jai yen : un cœur chaud s'emporte vite. Perdre son calme en public est très mal vu ici, alors ce mot sert souvent à décrire... les farangs.",
    difficulty: 2
  },
  {
    id: 'th-emo-5',
    category: 'emotions_argot',
    french: 'Étranger occidental',
    phonetic: 'fa-RANG',
    arabic: 'ฝรั่ง',
    tip: 'Vous l\'entendrez cent fois par jour, sans agressivité : c\'est juste vous. Vient à l\'origine du mot « français », étendu à tous les Occidentaux.',
    difficulty: 1
  },
  {
    id: 'th-emo-6',
    category: 'emotions_argot',
    french: 'Ne pas déranger / gêne polie',
    phonetic: 'kreng-JAI',
    arabic: 'เกรงใจ',
    tip: "Concept central et intraduisible : la retenue par respect, qui pousse à ne jamais imposer. Comprendre ce mot, c'est comprendre la moitié de la culture thaïe.",
    difficulty: 3
  },
  {
    id: 'th-emo-7',
    category: 'emotions_argot',
    french: 'Trop peinard, au top',
    phonetic: 'sa-baai maak-MAAK',
    arabic: 'สบายมากๆ',
    difficulty: 2
  },
  {
    id: 'th-emo-8',
    category: 'emotions_argot',
    french: "J'en peux plus / je craque",
    phonetic: 'mai-WAI',
    arabic: 'ไม่ไหว',
    dialects: {
      isan: { phonetic: 'bo-WAI', arabic: 'บ่ไหว', note: 'Encore le bo isan à la place du mai standard : même sens, couleur locale.' }
    },
    tip: "Se dit d'un plat trop épicé comme d'une journée trop longue. Très versatile, à utiliser sans modération.",
    difficulty: 2
  },
  {
    id: 'th-emo-9',
    category: 'emotions_argot',
    french: "On s'éclate trop !",
    phonetic: 'sa-nuk-MAAK',
    arabic: 'สนุกมาก',
    tip: "Sanuk au superlatif. Dites-le en sortant d'une full moon party ou d'un dîner de famille, ça marche pour les deux.",
    difficulty: 1
  },

  /* ------------------------- Verbes Moteurs ------------------------- */
  {
    id: 'th-ver-1',
    category: 'verbes_moteurs',
    french: 'Vouloir',
    phonetic: 'YAAK',
    arabic: 'อยาก',
    tip: 'Yaak + verbe = envie de faire quelque chose (yaak gin : envie de manger). Pour vouloir un objet, utilisez ao (voir négociation).',
    difficulty: 1
  },
  {
    id: 'th-ver-2',
    category: 'verbes_moteurs',
    french: 'Avoir / il y a',
    phonetic: 'MII',
    arabic: 'มี',
    tip: "Mii couvre avoir ET il y a, comme le yǒu mandarin. Mai mii = y'en a pas, la réponse la plus fréquente au marché de nuit.",
    difficulty: 1
  },
  {
    id: 'th-ver-3',
    category: 'verbes_moteurs',
    french: 'Aller',
    phonetic: 'BPAI',
    arabic: 'ไป',
    tip: 'Bpai Bangkok : je vais à Bangkok, zéro préposition à apprendre. Le squelette de toute phrase de déplacement.',
    difficulty: 1
  },
  {
    id: 'th-ver-4',
    category: 'verbes_moteurs',
    french: 'Manger',
    phonetic: 'GIN',
    arabic: 'กิน',
    dialects: {
      isan: { phonetic: 'KIN khao', arabic: 'กินข้าว', note: "Prononciation isan plus proche du lao : gin devient kin, un peu plus dur." }
    },
    tip: 'Gin khao (manger le riz) veut dire manger tout court : le riz EST le repas, comme en Chine.',
    difficulty: 1
  },
  {
    id: 'th-ver-5',
    category: 'verbes_moteurs',
    french: 'Acheter',
    phonetic: 'SÉUH',
    arabic: 'ซื้อ',
    tip: 'Séuh khong (acheter des trucs) : le verbe numéro un du shopping au marché de nuit.',
    difficulty: 1
  },
  {
    id: 'th-ver-6',
    category: 'verbes_moteurs',
    french: "Pouvoir / c'est bon",
    phonetic: 'DAI',
    arabic: 'ได้',
    tip: 'Dai mai ? = c\'est possible ? Dai ! = ça marche ! Le feu vert universel, aussi utile que le kěyǐ mandarin.',
    difficulty: 1
  },
  {
    id: 'th-ver-7',
    category: 'verbes_moteurs',
    french: 'Aimer / kiffer',
    phonetic: 'CHÔP',
    arabic: 'ชอบ',
    dialects: {
      isan: { phonetic: 'MAK', arabic: 'มัก', note: 'En isan/lao, mak remplace chop pour « aimer » : chop reste compris mais sonne plus « central ».' }
    },
    tip: 'Phom chop (j\'aime, un homme parle) : la base de tout compliment ou déclaration de goût.',
    difficulty: 1
  },

  /* ------------------------- Urgences & Quotidien ------------------------- */
  {
    id: 'th-urg-1',
    category: 'urgences_quotidien',
    french: 'Au secours !',
    phonetic: 'CHUAI duai',
    arabic: 'ช่วยด้วย',
    tip: 'Le cri d\'urgence numéro un, à connaître par cœur avant même sawatdee.',
    difficulty: 1
  },
  {
    id: 'th-urg-2',
    category: 'urgences_quotidien',
    french: 'Où sont les toilettes ?',
    phonetic: 'hong-naam yuu-thii-NAI',
    arabic: 'ห้องน้ำอยู่ที่ไหน',
    dialects: {
      thai_nord: { phonetic: 'hong-naam yuu-thii-nai JÂO', arabic: 'ห้องน้ำอยู่ที่ไหนเจ้า', note: 'Encore la particule jâo qui adoucit la question, signature du Nord.' }
    },
    difficulty: 1
  },
  {
    id: 'th-urg-3',
    category: 'urgences_quotidien',
    french: 'Je ne comprends pas',
    phonetic: 'mai-khao-JAI',
    arabic: 'ไม่เข้าใจ',
    tip: 'Littéralement « je n\'entre pas dans le cœur (de la chose) ». LA phrase de survie numéro un, à combiner avec un sourire désolé.',
    difficulty: 1
  },
  {
    id: 'th-urg-4',
    category: 'urgences_quotidien',
    french: 'Vous parlez anglais ?',
    phonetic: 'phuut phaa-saa ang-krit dai-MAI',
    arabic: 'พูดภาษาอังกฤษได้ไหม',
    difficulty: 2
  },
  {
    id: 'th-urg-5',
    category: 'urgences_quotidien',
    french: "C'est quoi le mot de passe wifi ?",
    phonetic: 'wai-fai ra-hat a-RAI',
    arabic: 'ไวไฟรหัสอะไร',
    tip: 'L\'urgence moderne par excellence, comprise et acceptée du café le plus reculé au 7-Eleven du coin.',
    difficulty: 2
  },

  /* ------------------------- Chiffres ------------------------- */
  {
    id: 'th-chi-1',
    category: 'chiffres',
    french: 'Un, deux, trois',
    phonetic: 'NUENG, song, saam',
    arabic: 'หนึ่ง สอง สาม',
    tip: 'Les trois premiers chiffres, la base de toute négociation et de tout numéro de bus.',
    difficulty: 1
  },
  {
    id: 'th-chi-2',
    category: 'chiffres',
    french: "Quatre, cinq, six... jusqu'à dix",
    phonetic: 'sii, haa, hok, jet, paet, kao, SIP',
    arabic: 'สี่ ห้า หก เจ็ด แปด เก้า สิบ',
    tip: 'Avec 1 à 10 vous comptez tout : 11 = dix-un (sip et), 20 = deux-dix (yii sip), 99 = neuf-dix-neuf.',
    difficulty: 1
  },
  {
    id: 'th-chi-3',
    category: 'chiffres',
    french: 'Cent / mille',
    phonetic: 'ROI / phan',
    arabic: 'ร้อย / พัน',
    tip: 'Roi baht, phan baht : les deux mots qui reviennent sans cesse dès que les prix montent un peu.',
    difficulty: 2
  },
  {
    id: 'th-chi-4',
    category: 'chiffres',
    french: 'Combien ? (quantité)',
    phonetic: 'GII an',
    arabic: 'กี่อัน',
    tip: 'Gii + classificateur = combien de choses. An passe partout comme classificateur générique : dans le doute, mettez-le.',
    difficulty: 2
  }
];
