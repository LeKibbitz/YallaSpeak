import { VocabItem } from '../types';

/**
 * Spanish vocabulary pack, same categories and philosophy as the Arabic
 * and Italian lists: everyday spoken language, not the textbook one. The
 * `arabic` field holds the written Spanish (with ¡! and ¿?), `phonetic` a
 * French-friendly reading. Base accent is castellano (Madrid). Variants
 * carry the regional flavour: andalou (south), mexicain (CDMX), argentin
 * (Buenos Aires, voseo).
 */
export const VOCABULARY_LIST_ES: VocabItem[] = [

  /* ------------------------- Salutations ------------------------- */
  {
    id: 'es-sal-1',
    category: 'salutations',
    french: 'Salut ! (bonjour informel)',
    phonetic: 'O-la!',
    arabic: '¡Hola!',
    tip: 'Le mot passe-partout : formel, informel, jour, soir, tout marche avec hola.',
    difficulty: 1
  },
  {
    id: 'es-sal-2',
    category: 'salutations',
    french: 'Bonjour (le matin)',
    phonetic: 'BOUÉ-noss DI-ass',
    arabic: 'Buenos días',
    dialects: {
      andalou: { phonetic: 'BUÉ-no DI-a', arabic: 'Buenoh día', note: "En Andalousie, les s finaux s'avalent ou deviennent un souffle : buenoh días." }
    },
    tip: "Se dit jusqu'à l'heure du déjeuner, plus tard que chez nous.",
    difficulty: 1
  },
  {
    id: 'es-sal-3',
    category: 'salutations',
    french: 'Bonsoir / bonne nuit',
    phonetic: 'BOUÉ-nass TAR-dess / BOUÉ-nass NO-tchess',
    arabic: 'Buenas tardes / buenas noches',
    difficulty: 1
  },
  {
    id: 'es-sal-4',
    category: 'salutations',
    french: 'Comment ça va ?',
    phonetic: 'ké TAL?',
    arabic: '¿Qué tal?',
    dialects: {
      mexicain: { phonetic: 'ké ON-da?', arabic: '¿Qué onda?', note: "Le classique mexicain, littéralement « quelle onde ? »." },
      argentin: { phonetic: 'KO-mo an-DASS?', arabic: '¿Cómo andás?', note: "Voseo oblige : pas « cómo estás » mais « cómo andás »." }
    },
    tip: "Réponse standard : « bien, ¿y tú? » (ou « ¿y vos? » en Argentine).",
    difficulty: 1
  },
  {
    id: 'es-sal-5',
    category: 'salutations',
    french: 'Merci (mille fois merci)',
    phonetic: 'GRA-thiass (mil GRA-thiass)',
    arabic: 'Gracias (mil gracias)',
    dialects: {
      andalou: { phonetic: 'GRA-siah', arabic: 'Grasiah', note: "Séville et Cadix ne font pas la distinction : le c/z se prononce comme un s, jamais comme le th madrilène." }
    },
    tip: "À Madrid, le c devant e/i et le z se prononcent comme le th anglais de think : gracias sonne GRA-thias. Partout ailleurs en Amérique latine et en Andalousie, c'est un simple s.",
    difficulty: 1
  },
  {
    id: 'es-sal-6',
    category: 'salutations',
    french: 'De rien',
    phonetic: 'dé NA-da',
    arabic: 'De nada',
    difficulty: 1
  },
  {
    id: 'es-sal-7',
    category: 'salutations',
    french: 'Excusez-moi / pardon',
    phonetic: 'pér-DON / diss-KOUL-pa',
    arabic: 'Perdón / disculpa',
    dialects: {
      mexicain: { phonetic: 'MAN-dé?', arabic: '¿Mande?', note: "Au Mexique, quand on vous appelle ou qu'on n'a pas entendu, on répond « ¿mande?, » pas « ¿qué? » : bien plus poli." }
    },
    difficulty: 1
  },
  {
    id: 'es-sal-8',
    category: 'salutations',
    french: 'Enchanté(e) !',
    phonetic: 'en-kan-TA-do',
    arabic: 'Encantado / encantada',
    difficulty: 2
  },

  /* ------------------------- Café & Resto ------------------------- */
  {
    id: 'es-caf-1',
    category: 'cafe_resto',
    french: 'Un café, s\'il vous plaît',
    phonetic: 'oun ka-FÉ, por fa-VOR',
    arabic: 'Un café, por favor',
    tip: '« Café solo » = un express serré ; précisez « con leche » pour le lait, sinon il arrive noir.',
    difficulty: 1
  },
  {
    id: 'es-caf-2',
    category: 'cafe_resto',
    french: "L'addition, s'il vous plaît",
    phonetic: 'la KOUÉN-ta, por fa-VOR',
    arabic: 'La cuenta, por favor',
    tip: "En Espagne, on ne laisse pas de pourboire obligatoire : la propina reste facultative, quelques pièces suffisent.",
    difficulty: 1
  },
  {
    id: 'es-caf-3',
    category: 'cafe_resto',
    french: "C'est délicieux !",
    phonetic: 'ess-TA boué-NI-si-mo!',
    arabic: '¡Está buenísimo!',
    dialects: {
      mexicain: { phonetic: 'ess-TA pa-DRI-si-mo!', arabic: '¡Está padrísimo!', note: "« Padrísimo » : le superlatif mexicain de padre (cool, génial)." },
      argentin: { phonetic: 'ess-TA ré BOUÉ-no!', arabic: '¡Está re bueno!', note: 'Le « re » argentin s\'accroche devant n\'importe quel adjectif pour l\'intensifier : re bueno, re lindo, re loco.' }
    },
    difficulty: 1
  },
  {
    id: 'es-caf-4',
    category: 'cafe_resto',
    french: 'Je voudrais...',
    phonetic: 'ki-SIÉ-ra...',
    arabic: 'Quisiera...',
    tip: '« Quisiera una paella, por favor. » Le conditionnel poli, passe-partout au restaurant.',
    difficulty: 1
  },
  {
    id: 'es-caf-5',
    category: 'cafe_resto',
    french: 'Une table pour deux',
    phonetic: 'OU-na MÉ-sa PA-ra doss',
    arabic: 'Una mesa para dos',
    difficulty: 2
  },
  {
    id: 'es-caf-6',
    category: 'cafe_resto',
    french: "Qu'est-ce que vous me conseillez ?",
    phonetic: 'ké mé ré-ko-MIÉN-da?',
    arabic: '¿Qué me recomienda?',
    difficulty: 2
  },
  {
    id: 'es-caf-7',
    category: 'cafe_resto',
    french: 'On va manger des tapas ?',
    phonetic: 'BA-moss dé TA-pass?',
    arabic: '¿Vamos de tapas?',
    tip: 'Les tapas : petites portions à partager, souvent offertes avec la boisson en Andalousie. Ne jamais dire « una tapa » pour commander un repas entier.',
    difficulty: 2
  },

  /* ------------------------- Taxi & Directions ------------------------- */
  {
    id: 'es-tax-1',
    category: 'taxi_directions',
    french: 'Où est... ?',
    phonetic: 'DON-dé ess-TA...?',
    arabic: '¿Dónde está...?',
    tip: '« ¿Dónde está el baño? » (les toilettes) : la question vitale numéro un.',
    difficulty: 1
  },
  {
    id: 'es-tax-2',
    category: 'taxi_directions',
    french: 'Tout droit',
    phonetic: 'TO-do RÉK-to',
    arabic: 'Todo recto',
    dialects: {
      andalou: { phonetic: "TO-o RÉ-to", arabic: "To' reto", note: "Les d et s intervocaliques ont tendance à disparaître : todo devient to'." }
    },
    difficulty: 1
  },
  {
    id: 'es-tax-3',
    category: 'taxi_directions',
    french: 'À droite / à gauche',
    phonetic: 'a la dé-RÉ-tcha / a la iss-KIÉR-da',
    arabic: 'A la derecha / a la izquierda',
    difficulty: 1
  },
  {
    id: 'es-tax-4',
    category: 'taxi_directions',
    french: "C'est loin / c'est près ?",
    phonetic: 'ess-TA LÉ-ross / SÉR-ka?',
    arabic: '¿Está lejos / cerca?',
    dialects: {
      andalou: { phonetic: 'ess-TA LÉ-ro / SÉH-ka?', arabic: '¿Ehtá lejo / cerca?', note: 'Le s final devient une simple aspiration (comme un h), très typique du parler du sud.' }
    },
    tip: 'Le « j » espagnol (jota) se prononce comme un r français bien appuyé, raclé au fond de la gorge : rien à voir avec le j français ni le r espagnol roulé. On le retrouve dans lejos, tarjeta, trabajo...',
    difficulty: 2
  },
  {
    id: 'es-tax-5',
    category: 'taxi_directions',
    french: 'Arrêtez-vous ici, merci',
    phonetic: 'PA-ré a-KI, GRA-thiass',
    arabic: 'Pare aquí, gracias',
    dialects: {
      andalou: { phonetic: 'PA-ré a-KI, GRA-siah', arabic: 'Pare aquí, grasiah', note: 'Combo typique du sud : seseo (s au lieu de th) et s finale aspirée.' }
    },
    difficulty: 2
  },
  {
    id: 'es-tax-6',
    category: 'taxi_directions',
    french: 'Le train / le bus / le métro',
    phonetic: 'el TREN / el aou-to-BOUSS / el MÉ-tro',
    arabic: 'El tren / el autobús / el metro',
    difficulty: 1
  },

  /* ------------------------- Négociation & Achats ------------------------- */
  {
    id: 'es-neg-1',
    category: 'negociation_souk',
    french: 'Combien ça coûte ?',
    phonetic: 'KOUAN-to KOUÉSS-ta?',
    arabic: '¿Cuánto cuesta?',
    dialects: {
      argentin: { phonetic: 'KOUAN-to SA-lé?', arabic: '¿Cuánto sale?', note: 'En Argentine, on demande plus souvent « cuánto sale » que « cuánto cuesta ».' }
    },
    tip: 'LA phrase à dégainer partout : marché, boutique, taxi.',
    difficulty: 1
  },
  {
    id: 'es-neg-2',
    category: 'negociation_souk',
    french: "C'est trop cher !",
    phonetic: 'ess MOUI KA-ro!',
    arabic: '¡Es muy caro!',
    difficulty: 1
  },
  {
    id: 'es-neg-3',
    category: 'negociation_souk',
    french: 'Vous me faites un prix ?',
    phonetic: 'mé A-thé oun PRÉ-thio?',
    arabic: '¿Me hace un precio?',
    tip: '« ¿Me hace un descuento? » (une remise) marche aussi, toujours avec le sourire.',
    difficulty: 2
  },
  {
    id: 'es-neg-4',
    category: 'negociation_souk',
    french: 'Je regarde seulement, merci',
    phonetic: 'SO-lo ess-TOÏ mi-RAN-do, GRA-thiass',
    arabic: 'Solo estoy mirando, gracias',
    difficulty: 2
  },
  {
    id: 'es-neg-5',
    category: 'negociation_souk',
    french: "D'accord, je le prends !",
    phonetic: 'BA-lé, mé lo YÉ-bo!',
    arabic: '¡Vale, me lo llevo!',
    dialects: {
      argentin: { phonetic: 'BA-lé, mé lo TCHÉ-bo!', arabic: '¡Vale, me lo llevo!', note: 'En Argentine, le ll et le y se prononcent « ch » (ou « j » de jazz) : llevo sonne tchévo, no llores devient no tchorés.' }
    },
    difficulty: 1
  },
  {
    id: 'es-neg-6',
    category: 'negociation_souk',
    french: 'On peut payer par carte ?',
    phonetic: 'sé POUÉ-dé pa-GAR kon tar-RÉ-ta?',
    arabic: '¿Se puede pagar con tarjeta?',
    tip: 'Réponse fréquente sur les petits marchés : « Solo efectivo » (espèces seulement).',
    difficulty: 2
  },

  /* ------------------------- Émotions & Argot ------------------------- */
  {
    id: 'es-emo-1',
    category: 'emotions_argot',
    french: 'Allez ! / Vas-y !',
    phonetic: 'BEN-ga!',
    arabic: '¡Venga!',
    tip: "Le mot signature du castillan : ça ponctue une phrase espagnole sur deux, de « allez, on y va » à « bon, d'accord ».",
    difficulty: 1
  },
  {
    id: 'es-emo-2',
    category: 'emotions_argot',
    french: "D'accord / OK",
    phonetic: 'BA-lé',
    arabic: 'Vale',
    dialects: {
      mexicain: { phonetic: 'O-ra-lé', arabic: 'Órale', note: '« Vale » se comprend au Mexique mais on dit surtout órale : ça sert aussi pour l\'étonnement ou l\'encouragement.' },
      argentin: { phonetic: 'DA-lé', arabic: 'Dale', note: '« Vale » ne se dit presque jamais en Argentine : c\'est dale, partout, pour tout.' }
    },
    difficulty: 1
  },
  {
    id: 'es-emo-3',
    category: 'emotions_argot',
    french: 'Trop bien / trop cool !',
    phonetic: 'ké GOUAÏ!',
    arabic: '¡Qué guay!',
    dialects: {
      mexicain: { phonetic: 'ké TCHI-do!', arabic: '¡Qué chido!', note: '« Chido » est LE mot cool mexicain, avec padre en second.' },
      argentin: { phonetic: 'ké ko-PA-do!', arabic: '¡Qué copado!', note: '« Copado » : l\'équivalent argentin de cool, cohabite avec « re bueno ».' }
    },
    tip: '« Guay » est LE mot fourre-tout de l\'Espagne, utilisable pour absolument tout ce qui plaît.',
    difficulty: 1
  },
  {
    id: 'es-emo-4',
    category: 'emotions_argot',
    french: 'Mec / meuf (pour interpeller un pote)',
    phonetic: 'TI-o / TI-a',
    arabic: 'Tío / tía',
    dialects: {
      andalou: { phonetic: 'KI-yo, mi AR-ma', arabic: 'Quillo, mi arma', note: '« Quillo » (contraction de chiquillo) et « mi arma » (littéralement mon âme, terme d\'affection) : purs Cadix et Séville.' },
      mexicain: { phonetic: 'GUÉ-yé', arabic: 'Güey', note: '« Güey » entre potes au Mexique : à ne surtout pas utiliser avec un inconnu ou un supérieur.' },
      argentin: { phonetic: 'tché, bo-LOU-do', arabic: 'Che, boludo', note: '« Che » interpelle, « boludo » désigne le pote (ou l\'insulte, selon le ton) : les deux mots les plus argentins qui soient.' }
    },
    tip: '« Tío/tía » n\'a rien à voir avec l\'oncle ou la tante ici : c\'est juste « mec/meuf » entre amis en Espagne.',
    difficulty: 3
  },
  {
    id: 'es-emo-5',
    category: 'emotions_argot',
    french: 'Quel dommage !',
    phonetic: 'ké PÉ-na!',
    arabic: '¡Qué pena!',
    difficulty: 1
  },
  {
    id: 'es-emo-6',
    category: 'emotions_argot',
    french: "Pas de souci / t'inquiète",
    phonetic: 'no PA-sa NA-da',
    arabic: 'No pasa nada',
    dialects: {
      andalou: { phonetic: 'no PA-sa NA-a', arabic: 'No pasa ná', note: 'Le d final de nada tombe presque toujours à l\'oral dans le sud.' },
      mexicain: { phonetic: 'no aï BRON-ka', arabic: 'No hay bronca', note: 'Variante mexicaine très courante entre jeunes.' }
    },
    tip: 'Réponse à toute excuse, avec un geste apaisant de la main.',
    difficulty: 1
  },
  {
    id: 'es-emo-7',
    category: 'emotions_argot',
    french: 'Madre mía ! (surprise, exaspération)',
    phonetic: 'MA-dré MI-a!',
    arabic: '¡Madre mía!',
    tip: "L'équivalent espagnol du italien mamma mia : ça sort pour tout, du plat délicieux à l'addition salée.",
    difficulty: 1
  },
  {
    id: 'es-emo-8',
    category: 'emotions_argot',
    french: 'Sérieux ?! / Sans blague ?',
    phonetic: 'en SÉ-rio?! / AN-da ya!',
    arabic: '¿En serio?! / ¡Anda ya!',
    dialects: {
      mexicain: { phonetic: 'NÉ-ta?!', arabic: '¿Neta?!', note: '« ¿Neta?! » : l\'incrédulité mexicaine en un mot.' },
      argentin: { phonetic: 'POSS-ta?!', arabic: '¿Posta?!', note: '« Posta » veut dire « pour de vrai » en lunfardo (l\'argot de Buenos Aires) : « ¿posta?! » = sérieux ?!' }
    },
    difficulty: 1
  },
  {
    id: 'es-emo-9',
    category: 'emotions_argot',
    french: 'Quel bordel !',
    phonetic: 'ké LI-o!',
    arabic: '¡Qué lío!',
    dialects: {
      mexicain: { phonetic: 'ké dess-MA-dré!', arabic: '¡Qué desmadre!', note: '« Desmadre » (littéralement « sans mère ») : le bordel façon mexicaine, très familier.' },
      argentin: { phonetic: 'ké ki-LOM-bo!', arabic: '¡Qué quilombo!', note: '« Quilombo » : LE mot lunfardo par excellence pour un bazar total, utilisé à toutes les sauces à Buenos Aires.' }
    },
    difficulty: 3
  },

  /* ------------------------- Verbes moteurs ------------------------- */
  {
    id: 'es-ver-1',
    category: 'verbes_moteurs',
    french: 'Je veux / je voudrais',
    phonetic: 'KIÉ-ro / ké-RRI-a',
    arabic: 'Quiero / querría',
    tip: '« Quiero » est direct, « querría » est poli. Au restaurant, mieux vaut querría (ou quisiera).',
    difficulty: 1
  },
  {
    id: 'es-ver-2',
    category: 'verbes_moteurs',
    french: "J'ai / tu as",
    phonetic: 'TEN-go / TIÉ-ness',
    arabic: 'Tengo / tienes',
    dialects: {
      argentin: { phonetic: 'TÉ-ness', arabic: 'Tenés', note: 'Voseo : le tú disparaît, remplacé par vos. Tienes devient tenés, comes devient comés, hablas devient hablás.' }
    },
    tip: '« Tengo hambre » (j\'ai faim), « tengo sed » (soif), « tengo calor » (chaud).',
    difficulty: 2
  },
  {
    id: 'es-ver-3',
    category: 'verbes_moteurs',
    french: 'Je vais / on va',
    phonetic: 'boï / BA-moss',
    arabic: 'Voy / vamos',
    tip: '« ¡Vamos! » = on y va ! Le cri de ralliement universel, dans toute l\'Hispanophonie.',
    difficulty: 1
  },
  {
    id: 'es-ver-4',
    category: 'verbes_moteurs',
    french: 'Je peux... ?',
    phonetic: 'POUÉ-do...?',
    arabic: '¿Puedo...?',
    tip: '« ¿Puedo? » tout seul en désignant une chaise libre : puis-je ? Très utile et très compris.',
    difficulty: 1
  },
  {
    id: 'es-ver-5',
    category: 'verbes_moteurs',
    french: 'Je sais / je ne sais pas',
    phonetic: 'lo SÉ / no lo SÉ',
    arabic: 'Lo sé / no lo sé',
    difficulty: 1
  },
  {
    id: 'es-ver-6',
    category: 'verbes_moteurs',
    french: 'Je comprends / je ne comprends pas',
    phonetic: 'en-TIÉN-do / no en-TIÉN-do',
    arabic: 'Entiendo / no entiendo',
    tip: '« No entiendo » plus un sourire : le natif ralentit et reformule. Magique.',
    difficulty: 1
  },
  {
    id: 'es-ver-7',
    category: 'verbes_moteurs',
    french: "J'arrive / tout de suite",
    phonetic: 'ya BOÏ / a-o-RI-ta',
    arabic: 'Ya voy / ahorita',
    dialects: {
      mexicain: { phonetic: 'a-o-RI-ta', arabic: 'Ahorita', note: 'Piège classique : « ahorita » peut vouloir dire maintenant, dans cinq minutes ou jamais, selon le ton et l\'humeur.' }
    },
    difficulty: 2
  },

  /* ------------------------- Urgences & Quotidien ------------------------- */
  {
    id: 'es-urg-1',
    category: 'urgences_quotidien',
    french: "Au secours ! / À l'aide !",
    phonetic: 'so-KO-rro! / a-YOU-da!',
    arabic: '¡Socorro! / ¡Ayuda!',
    difficulty: 1
  },
  {
    id: 'es-urg-2',
    category: 'urgences_quotidien',
    french: "J'ai besoin d'un médecin",
    phonetic: 'né-thé-SI-to oun MÉ-di-ko',
    arabic: 'Necesito un médico',
    difficulty: 2
  },
  {
    id: 'es-urg-3',
    category: 'urgences_quotidien',
    french: 'Où est la pharmacie ?',
    phonetic: 'DON-dé ess-TA la far-MA-thia?',
    arabic: '¿Dónde está la farmacia?',
    tip: 'La croix verte allumée = ouverte, un vrai repère dans toutes les villes espagnoles.',
    difficulty: 1
  },
  {
    id: 'es-urg-4',
    category: 'urgences_quotidien',
    french: "J'ai perdu mon portefeuille",
    phonetic: 'é pér-DI-do mi kar-TÉ-ra',
    arabic: 'He perdido mi cartera',
    difficulty: 2
  },
  {
    id: 'es-urg-5',
    category: 'urgences_quotidien',
    french: 'Vous parlez français / anglais ?',
    phonetic: 'A-bla fran-THÉSS / in-GLESS?',
    arabic: '¿Habla francés / inglés?',
    difficulty: 1
  },

  /* ------------------------- Chiffres ------------------------- */
  {
    id: 'es-chi-1',
    category: 'chiffres',
    french: 'Un, deux, trois, quatre',
    phonetic: 'OU-no, doss, tress, KOUA-tro',
    arabic: 'Uno, dos, tres, cuatro',
    difficulty: 1
  },
  {
    id: 'es-chi-2',
    category: 'chiffres',
    french: 'Cinq, six, sept, huit, neuf, dix',
    phonetic: 'SIN-ko, seïss, SIÉ-té, O-tcho, NOUÉ-bé, diess',
    arabic: 'Cinco, seis, siete, ocho, nueve, diez',
    difficulty: 1
  },
  {
    id: 'es-chi-3',
    category: 'chiffres',
    french: 'Vingt, cinquante, cent',
    phonetic: 'BÉÏN-té, thin-KOUEN-ta, thièn',
    arabic: 'Veinte, cincuenta, cien',
    tip: '« Cien » perd son -to devant un nom : cien euros, pas ciento euros (mais ciento diez euros, avec un nombre après).',
    difficulty: 2
  },
  {
    id: 'es-chi-4',
    category: 'chiffres',
    french: 'Ça fait dix euros',
    phonetic: 'son diess É-ou-ross',
    arabic: 'Son diez euros',
    tip: 'Utile pour comprendre un prix annoncé vite au marché ou en taxi : Son diez euros = ça fait 10 euros.',
    difficulty: 2
  }
];
