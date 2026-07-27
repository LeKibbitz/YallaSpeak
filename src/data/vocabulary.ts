import { VocabItem, ScenarioDialogue } from '../types';

export const VOCABULARY_LIST: VocabItem[] = [
  // --- SALUTATIONS & HOSPITALITÉ ---
  {
    id: 'sal-1',
    category: 'salutations',
    french: "Bonjour / que la paix soit sur vous",
    literalTranslation: "La paix soit sur vous",
    phonetic: "Salam aleykoum",
    arabic: "السلام عليكم",
    difficulty: 1,
    tip: "Réponse universelle : 'Wa aleykoum salam' (Et sur vous la paix). Fonctionne dans les 22 pays arabes !",
    dialects: {
      levantin: { phonetic: "Marhaba / Salam", arabic: "مرحبا / سلام", note: "Très courant au Liban et en Syrie" },
      egyptien: { phonetic: "Salam aleykoum / Ahlan", arabic: "سلام عليكم / أهلاً", note: "Ahlan wa sahlan est très chaleureux" },
      darija: { phonetic: "Salam / Labas", arabic: "سلام / لاباس", note: "On dit souvent juste 'Salam, labas ?'" },
      golfe: { phonetic: "Hala wallah / Salam", arabic: "هلا والله / سلام", note: "'Hala wallah' = Bienvenue par Dieu" }
    }
  },
  {
    id: 'sal-2',
    category: 'salutations',
    french: "Comment ça va ?",
    phonetic: "Kifak ? (m) / Kifek ? (f)",
    arabic: "كيفك؟",
    difficulty: 1,
    tip: "C'est la phrase que vous direz 20 fois par jour ! Change beaucoup selon le pays.",
    dialects: {
      levantin: { phonetic: "Kifak / Shno akhbarak ?", arabic: "كيفك / شو أخبارك؟" },
      egyptien: { phonetic: "Izayyak ? (m) / Izayyik ? (f)", arabic: "إزيك؟" },
      darija: { phonetic: "Labas ? / Kidayr ? (m)", arabic: "لاباس؟ / كي داير؟" },
      golfe: { phonetic: "Shlonak ? / Shu akhbarak ?", arabic: "شلونك؟ / شو أخبارك؟" }
    }
  },
  {
    id: 'sal-3',
    category: 'salutations',
    french: "Ça va bien, Dieu merci",
    literalTranslation: "Bien, louange à Dieu",
    phonetic: "Tamam, Al-hamdoulillah",
    arabic: "تمام، الحمد لله",
    difficulty: 1,
    tip: "'Al-hamdoulillah' est prononcé des dizaines de fois par jour par tout le monde, quelle que soit la religion, pour dire que tout va bien.",
    dialects: {
      levantin: { phonetic: "Tamam / Mnih, Al-hamdoulillah", arabic: "تمام / منيح الحمد لله" },
      egyptien: { phonetic: "Kwayyes (m) / Kwayyesa (f), Al-hamdoulillah", arabic: "كويس الحمد لله" },
      darija: { phonetic: "Labas, Al-hamdoulillah / Mziyan", arabic: "لاباس الحمد لله / مزيان" },
      golfe: { phonetic: "Bkhair, Al-hamdoulillah", arabic: "بخیر الحمد لله" }
    }
  },
  {
    id: 'sal-4',
    category: 'salutations',
    french: "S'il te plaît",
    phonetic: "Min fadlak (m) / Min fadlik (f)",
    arabic: "من فضلك",
    difficulty: 1,
    tip: "En arabe parlé, il existe plusieurs formules adorables pour dire s'il te plaît.",
    dialects: {
      levantin: { phonetic: "Iza betrid / Law samacht", arabic: "إذا بتريد / لو سمحت" },
      egyptien: { phonetic: "Law samacht / Min fadlak", arabic: "لو سمحت / من فضلك" },
      darija: { phonetic: "Afak / Aafak", arabic: "عافاك" },
      golfe: { phonetic: "Law samacht / Min fadlak", arabic: "لو سمحت / من فضلك" }
    }
  },
  {
    id: 'sal-5',
    category: 'salutations',
    french: "Merci beaucoup",
    phonetic: "Shukran bzaf / Shukran ketir",
    arabic: "شكراً",
    difficulty: 1,
    tip: "Pour répondre à Merci, dites 'Afwan' (de rien) ou 'Tikram / Ala rasi' (sur ma tête).",
    dialects: {
      levantin: { phonetic: "Shukran ktir / Yislamou", arabic: "شكرا كتير / يسلمو", note: "Yislamou = Que tes mains soient bénies" },
      egyptien: { phonetic: "Shukran giddan / Alf shukr", arabic: "شكرا جدا / ألف شكر", note: "Alf shukr = mille mercis" },
      darija: { phonetic: "Shukran bzaf / Lah yham walidin", arabic: "شكرا بزاف", note: "Bzaf = beaucoup" },
      golfe: { phonetic: "Shukran jazilan / Mashkoor", arabic: "شكرا جزيلا / مشكور" }
    }
  },
  {
    id: 'sal-6',
    category: 'salutations',
    french: "Que Dieu te donne la force / le courage (Formule d'or)",
    literalTranslation: "Que Dieu te donne la santé / l'énergie",
    phonetic: "Yatik el aafiye",
    arabic: "يعطيك العافية",
    difficulty: 2,
    tip: "C'est LA formule magique au Levant et dans le Golfe ! Dites cela à un chauffeur de taxi, un serveur ou un commerçant et vous obtiendrez un grand sourire.",
    dialects: {
      levantin: { phonetic: "Yatik el aafiye", arabic: "يعطيك العافية" },
      egyptien: { phonetic: "Rabina ykhalik", arabic: "ربنا يخليك", note: "Que Dieu te préserve" },
      darija: { phonetic: "Lah yatik saha", arabic: "الله يعطيك الصحة", note: "Que Dieu te donne la santé" },
      golfe: { phonetic: "Yatik el aafiye / Kawaak Allah", arabic: "يعطيك العافية / قواك الله" }
    }
  },
  {
    id: 'sal-7',
    category: 'salutations',
    french: "Bienvenue / Fais comme chez toi",
    phonetic: "Ahlan wa sahlan",
    arabic: "أهلاً وسهلاً",
    difficulty: 1,
    tip: "L'hospitalité arabe est légendaire. Quand quelqu'un vous dit 'Ahlan wa sahlan', répondez 'Ahlan bik' (Bienvenue à toi aussi)."
  },

  // --- CAFÉ & RESTAURANT ---
  {
    id: 'caf-1',
    category: 'cafe_resto',
    french: "Je veux / J'aimerais...",
    phonetic: "Baddi / Ayez / Bgheeth",
    arabic: "بدي / عايز / بغيت",
    difficulty: 1,
    tip: "Le mot LE PLUS IMPORTANT pour commander ou exprimer un désir !",
    dialects: {
      levantin: { phonetic: "Baddi", arabic: "بدي", note: "Baddi kahwa = je veux un café" },
      egyptien: { phonetic: "Ayez (m) / Ayza (f)", arabic: "عايز / عايزة" },
      darija: { phonetic: "Bgheeth / Bghit", arabic: "بغيت" },
      golfe: { phonetic: "Abgha / Baddi", arabic: "أبغى / بدي" }
    }
  },
  {
    id: 'caf-2',
    category: 'cafe_resto',
    french: "Un café s'il te plaît",
    phonetic: "Kahwa, law samacht",
    arabic: "قهوة لو سمحت",
    difficulty: 1,
    tip: "Au Moyen-Orient, précisez le sucre : 'Sadah' (sans sucre), 'Mazbout' (moyen), ou 'Ziyada' (très sucré).",
    dialects: {
      levantin: { phonetic: "Ahwe mazbouta, law samacht", arabic: "قهوة مزبوطة لو سمحت" },
      egyptien: { phonetic: "Ahwa mazboot, min fadlak", arabic: "قهوة مظبوط من فضلك" },
      darija: { phonetic: "Kahwa kachla / Kahwa hlib, afak", arabic: "قهوة كحلة / قهوة حليب عافاك" },
      golfe: { phonetic: "Gahwa arabiyya, law samacht", arabic: "قهوة عربية لو سمحت" }
    }
  },
  {
    id: 'caf-3',
    category: 'cafe_resto',
    french: "Un thé à la menthe",
    phonetic: "Shai bi na'na'",
    arabic: "شاي بنعناع",
    difficulty: 1,
    tip: "Le thé (Shai / Atay au Maroc) est le carburant social du monde arabe.",
    dialects: {
      levantin: { phonetic: "Shai ma' na'na'", arabic: "شاي مع نعناع" },
      egyptien: { phonetic: "Shay bi na'na'", arabic: "شاي بنعناع" },
      darija: { phonetic: "Atay bi na'na' / Atay b chiba", arabic: "أتاي بالنعناع" },
      golfe: { phonetic: "Shai karak / Shai na'na'", arabic: "شاي كرك / شاي نعناع" }
    }
  },
  {
    id: 'caf-4',
    category: 'cafe_resto',
    french: "Sans sucre",
    phonetic: "Bidun sukkar / Bala sukkar",
    arabic: "بدون سكر / بلا سكر",
    difficulty: 1,
    tip: "Indispensable si vous n'avez pas l'habitude des boissons très sucrées !",
    dialects: {
      levantin: { phonetic: "Bala sukkar / Sadah", arabic: "بلا سكر / سادة" },
      egyptien: { phonetic: "Min gher sukkar / Sada", arabic: "من غير سكر / سادة" },
      darija: { phonetic: "BLa sukkar / Messous", arabic: "بلا سكر / مسوس" },
      golfe: { phonetic: "Bidun sukkar / Sadah", arabic: "بدون سكر / سادة" }
    }
  },
  {
    id: 'caf-5',
    category: 'cafe_resto',
    french: "L'addition s'il vous plaît",
    phonetic: "El hsab, law samacht",
    arabic: "الحساب لو سمحت",
    difficulty: 1,
    tip: "Faites le signe d'écrire sur votre main en disant 'El hsab', le serveur comprendra tout de suite !",
    dialects: {
      levantin: { phonetic: "El hsab / El fatoura, law samacht", arabic: "الحساب / الفاتورة لو سمحت" },
      egyptien: { phonetic: "El hesab, ya bacha", arabic: "الحساب يا باشا" },
      darija: { phonetic: "L-hsab, afak", arabic: "الحساب عافاك" },
      golfe: { phonetic: "El hsab, law samacht", arabic: "الحساب لو سمحت" }
    }
  },

  // --- TAXIS, UBER & DIRECTIONS ---
  {
    id: 'tax-1',
    category: 'taxi_directions',
    french: "Tout droit",
    phonetic: "Doughri / Alatoo / Nishan",
    arabic: "دغري / على طول / نيشان",
    difficulty: 1,
    tip: "Trois mots géniaux selon votre région. Au Levant, dites 'Doughri'. En Égypte 'Alatoo'. Au Maroc 'Nishan'.",
    dialects: {
      levantin: { phonetic: "Doughri", arabic: "دغري" },
      egyptien: { phonetic: "Ala tool", arabic: "على طول" },
      darija: { phonetic: "Nishan", arabic: "نيشان" },
      golfe: { phonetic: "Sida / Ala tool", arabic: "سيدة / على طول" }
    }
  },
  {
    id: 'tax-2',
    category: 'taxi_directions',
    french: "À droite / À gauche",
    phonetic: "Yameen / Chamal (ou Yasar)",
    arabic: "يمين / شمال (يسار)",
    difficulty: 1,
    tip: "Accompagnez toujours du geste de la main pour guider le chauffeur."
  },
  {
    id: 'tax-3',
    category: 'taxi_directions',
    french: "Arrête-toi ici s'il te plaît",
    phonetic: "Wakkaf hon, law samacht",
    arabic: "وقف هون لو سمحت",
    difficulty: 1,
    tip: "Pour descendre du taxi exactement devant votre porte.",
    dialects: {
      levantin: { phonetic: "Wakkaf hon, law samacht", arabic: "وقف هون لو سمحت" },
      egyptien: { phonetic: "Hena kwayyes, ya osta / Ala gemb", arabic: "هنا كويس يا أسطى / على جنب" },
      darija: { phonetic: "Wkaf hna, afak", arabic: "وقف هنا عافاك" },
      golfe: { phonetic: "Wakkaf hini, law samacht", arabic: "وقف هني لو سمحت" }
    }
  },
  {
    id: 'tax-4',
    category: 'taxi_directions',
    french: "Combien ça coûte ? / Combien ?",
    phonetic: "Addesh ? / Bekam ? / Bchhal ?",
    arabic: "قديش؟ / بكام؟ / بشحال؟",
    difficulty: 1,
    tip: "À poser AVANT de monter dans un taxi sans compteur ou pour demander un prix au souk.",
    dialects: {
      levantin: { phonetic: "Addesh ? / Kam ?", arabic: "قديش؟ / كم؟" },
      egyptien: { phonetic: "Bekam da ?", arabic: "بكام ده؟" },
      darija: { phonetic: "Bchhal hada ?", arabic: "بشحال هذا؟" },
      golfe: { phonetic: "Kam hadha ? / Bekam ?", arabic: "كم هذا؟ / بكام؟" }
    }
  },

  // --- NÉGOCIATION & SOUK ---
  {
    id: 'neg-1',
    category: 'negociation_souk',
    french: "C'est trop cher !",
    phonetic: "Ghali bzaf ! / Ghali ktir !",
    arabic: "غالي كتير! / غالي بزاف!",
    difficulty: 1,
    tip: "Dites-le avec le sourire en secouant gentiment la tête pour engager la négociation !",
    dialects: {
      levantin: { phonetic: "Ghali ktir !", arabic: "غالي كتير!" },
      egyptien: { phonetic: "Ghali awi !", arabic: "غالي قوي!" },
      darija: { phonetic: "Ghali bzaf ! / Zidti fih", arabic: "غالي بزاف! / زدتي فيه" },
      golfe: { phonetic: "Ghali jiddan / Wajed ghali", arabic: "واجد غالي" }
    }
  },
  {
    id: 'neg-2',
    category: 'negociation_souk',
    french: "Fais-moi un bon prix / Baisse un peu",
    phonetic: "Ra'ini shway / Nakkis shway",
    arabic: "راعيني شوي / نقص شوي",
    difficulty: 2,
    tip: "La négociation est un jeu social convivial dans le monde arabe, jamais une dispute.",
    dialects: {
      levantin: { phonetic: "Ra'ini bi se'er / Nakkis shway", arabic: "راعيني بالسعر / نقص شوي" },
      egyptien: { phonetic: "Zabbatni fel se'er / Nakkas shwaya", arabic: "ظبطني في السعر" },
      darija: { phonetic: "Nkos shwiya afak / Dir m3aya taman", arabic: "نقص شوية عافاك / دير معايا ثمن" },
      golfe: { phonetic: "Nakkis shway / Akhir kalam kam ?", arabic: "نقص شوي / آخر كلام كم؟" }
    }
  },
  {
    id: 'neg-3',
    category: 'negociation_souk',
    french: "D'accord / Ça marche / C'est fini",
    phonetic: "Khallas / Mashi / Wakha",
    arabic: "خلاص / ماشي / واخا",
    difficulty: 1,
    tip: "'Khallas' est probablement le mot le plus utile de la langue arabe. Il veut dire : suffit, fini, d'accord, c'est bon.",
    dialects: {
      levantin: { phonetic: "Khallas / Mashi / Tamam", arabic: "خلاص / ماشي" },
      egyptien: { phonetic: "Khallas / Mashi / Gesta", arabic: "خلاص / ماشي / قشطة" },
      darija: { phonetic: "Wakha / Safi / Khallas", arabic: "واخا / صافي" },
      golfe: { phonetic: "Khallas / Tamam / Zain", arabic: "خلاص / تمام / زين" }
    }
  },

  // --- ÉMOTIONS, RIRE & ARGOT URBAIN ---
  {
    id: 'emo-1',
    category: 'emotions_argot',
    french: "Allons-y / On y va / Vite !",
    phonetic: "Yalla !",
    arabic: "يلا!",
    difficulty: 1,
    tip: "Le mot arabe le plus célèbre dans le monde entier ! Utilisé pour tout : motiver, partir, accélérer."
  },
  {
    id: 'emo-2',
    category: 'emotions_argot',
    french: "Mon chéri / Mon ami / Mon frère (terme d'affection)",
    phonetic: "Habibi (m) / Habibti (f)",
    arabic: "حبيبي / حبيبتي",
    difficulty: 1,
    tip: "Dans la rue arabe, 'Habibi' s'utilise tout le temps entre amis, avec le chauffeur de taxi ou le commerçant, sans aucune ambiguïté romantique !"
  },
  {
    id: 'emo-3',
    category: 'emotions_argot',
    french: "Je te jure / Vraiment ! (Par Dieu)",
    phonetic: "Wallah !",
    arabic: "والله!",
    difficulty: 1,
    tip: "Ponctue 50% des phrases de la conversation quotidienne pour donner de l'authenticité ou confirmer un fait."
  },
  {
    id: 'emo-4',
    category: 'emotions_argot',
    french: "Incroyable / Magnifique (admiration)",
    phonetic: "Masha'Allah !",
    arabic: "ما شاء الله",
    difficulty: 1,
    tip: "Se dit chaque fois que vous voyez quelque chose de beau (un enfant, une maison, un bon plat) pour féliciter sans porter le mauvais œil."
  },
  {
    id: 'emo-5',
    category: 'emotions_argot',
    french: "Pas possible ! / Tu rigoles ?",
    phonetic: "Mish ma'ool ! / Mesh momken !",
    arabic: "مش معقول! / مش ممكن!",
    difficulty: 2,
    tip: "Parfait pour exprimer votre étonnement dans une discussion entre amis."
  },
  {
    id: 'emo-6',
    category: 'emotions_argot',
    french: "Pas de problème / Il n'y a pas de mal",
    phonetic: "Ma fi moshkila / Mish moshkila / Haniya",
    arabic: "ما في مشكلة / مش مشكلة",
    difficulty: 1,
    tip: "La zen-attitude arabe du quotidien.",
    dialects: {
      levantin: { phonetic: "Ma fi moshkila / Basita", arabic: "ما في مشكلة / بسيطة" },
      egyptien: { phonetic: "Mish moshkila / Wala yhemak", arabic: "مش مشكلة / ولا يهمك" },
      darija: { phonetic: "Machakil / Haniya / Ma kayn bas", arabic: "هانية / ما كاين باس" },
      golfe: { phonetic: "Ma fi moshkila / Aadi", arabic: "ما في مشكلة / عادي" }
    }
  },

  // --- LES 20 VERBES MOTEURS ---
  {
    id: 'vrb-1',
    category: 'verbes_moteurs',
    french: "Je vais / Je pars",
    phonetic: "Rayeh (m) / Rayha (f) / Ghadi",
    arabic: "رايح / رايحة / غادي",
    difficulty: 2,
    tip: "Associez-le à un lieu : 'Rayeh al-souk' (Je vais au marché).",
    dialects: {
      levantin: { phonetic: "Rayeh / Rah rouh", arabic: "رايح / رح روح" },
      egyptien: { phonetic: "Rayeh / Harouh", arabic: "رايح / هروح" },
      darija: { phonetic: "Ghadi / Mchit", arabic: "غادي / مشيت" },
      golfe: { phonetic: "Rayeh / Barouh", arabic: "رايح / بروح" }
    }
  },
  {
    id: 'vrb-2',
    category: 'verbes_moteurs',
    french: "Je mange",
    phonetic: "Am bakol / Bakol / Kanakol",
    arabic: "عم باكل / باكل / كناكل",
    difficulty: 2,
    tip: "Le verbe manger est essentiel !"
  },
  {
    id: 'vrb-3',
    category: 'verbes_moteurs',
    french: "Je bois",
    phonetic: "Am bachrab / Bachrab / Kanchrob",
    arabic: "عم بشرب / بشرب / كنشرب",
    difficulty: 2,
    tip: "'Bachrab kahwa' = je bois du café."
  },
  {
    id: 'vrb-4',
    category: 'verbes_moteurs',
    french: "Je comprends",
    phonetic: "Fahim (m) / Fahma (f) / Fahem",
    arabic: "فاهِم / فاهمة",
    difficulty: 1,
    tip: "Pour dire 'Je ne comprends pas' dites : 'Mish fahem' ou 'Ma fhimet' !"
  },
  {
    id: 'vrb-5',
    category: 'verbes_moteurs',
    french: "Je parle / Je sais parler",
    phonetic: "Bahki / Batkallam / Kandwi",
    arabic: "بحكي / بتكلم / كندوي",
    difficulty: 2,
    tip: "'Bahki arabi shway shway' = Je parle arabe petit à petit / un petit peu !",
    dialects: {
      levantin: { phonetic: "Bahki arabi shway", arabic: "بحكي عربي شوي" },
      egyptien: { phonetic: "Batkallam arabi shwaya", arabic: "بتكلم عربي شوية" },
      darija: { phonetic: "Kandwi b darija shwiya", arabic: "كندوي بالدارجة شوية" },
      golfe: { phonetic: "Atkallam arabi shway", arabic: "أتكلم عربي شوي" }
    }
  },

  // --- URGENCES & QUOTIDIEN ---
  {
    id: 'urg-1',
    category: 'urgences_quotidien',
    french: "Aidez-moi s'il vous plaît",
    phonetic: "Sa'douni, law samacht / Aweni",
    arabic: "ساعدوني لو سمحت",
    difficulty: 2,
    tip: "Phrase vitale en cas de pépin ou pour demander votre chemin."
  },
  {
    id: 'urg-2',
    category: 'urgences_quotidien',
    french: "Où sont les toilettes ?",
    phonetic: "Wen el-hammam ? / Fin l-hammam ?",
    arabic: "وين الحمام؟ / فين الحمام؟",
    difficulty: 1,
    tip: "Une des premières phrases à apprendre dans n'importe quelle langue !",
    dialects: {
      levantin: { phonetic: "Wen el-hammam ?", arabic: "وين الحمام؟" },
      egyptien: { phonetic: "Fen el-hammam ?", arabic: "فين الحمام؟" },
      darija: { phonetic: "Fin l-hammam / toilet ?", arabic: "فين الحمام؟" },
      golfe: { phonetic: "Wen el-hammam ?", arabic: "وين الحمام؟" }
    }
  },
  {
    id: 'urg-3',
    category: 'urgences_quotidien',
    french: "Je suis fatigué(e) / malade",
    phonetic: "Ta'ban (m) / Ta'bana (f) / Ayan",
    arabic: "تعبان / تعبانة / عيان",
    difficulty: 2,
    tip: "Quand vous dites 'Ta'ban', vos amis arabes s'empresseront de vous préparer un thé chaud et de vous chouchouter !"
  },

  // --- CHIFFRES & NOMBRES ---
  // Sans les chiffres, impossible de payer, de négocier ou de donner une heure :
  // c'est le seul bloc qu'on récite, donc le premier à travailler à la voix.
  {
    id: 'num-0',
    category: 'chiffres',
    french: "Zéro",
    phonetic: "Sifr",
    arabic: "صفر",
    difficulty: 1,
    tip: "C'est le mot arabe qui a donné 'chiffre' en français, et 'zero' en anglais.",
    dialects: {
      levantin: { phonetic: "Sifr", arabic: "صفر" },
      egyptien: { phonetic: "Sifr", arabic: "صفر" },
      darija: { phonetic: "Sifr", arabic: "صفر" },
      golfe: { phonetic: "Sifr", arabic: "صفر" }
    }
  },
  {
    id: 'num-1',
    category: 'chiffres',
    french: "Un",
    phonetic: "Wahed",
    arabic: "واحد",
    difficulty: 1,
    tip: "'Wahed' sert aussi à dire 'quelqu'un' : 'fi wahed' = il y a quelqu'un.",
    dialects: {
      levantin: { phonetic: "Wahed", arabic: "واحد" },
      egyptien: { phonetic: "Wahed", arabic: "واحد" },
      darija: { phonetic: "Wahed", arabic: "واحد" },
      golfe: { phonetic: "Wahed", arabic: "واحد" }
    }
  },
  {
    id: 'num-2',
    category: 'chiffres',
    french: "Deux",
    phonetic: "Tnein",
    arabic: "اثنين",
    difficulty: 1,
    tip: "Au Maroc c'est le mot le plus dépaysant de la série : 'jouj', qui ne ressemble à rien d'autre.",
    dialects: {
      levantin: { phonetic: "Tnein", arabic: "تنين" },
      egyptien: { phonetic: "Itnein", arabic: "اتنين" },
      darija: { phonetic: "Jouj", arabic: "جوج", note: "'Tnin' existe mais on dit 'jouj' pour compter des choses" },
      golfe: { phonetic: "Ithnein", arabic: "اثنين" }
    }
  },
  {
    id: 'num-3',
    category: 'chiffres',
    french: "Trois",
    phonetic: "Tlate",
    arabic: "ثلاثة",
    difficulty: 1,
    dialects: {
      levantin: { phonetic: "Tlate", arabic: "تلاتة" },
      egyptien: { phonetic: "Talata", arabic: "تلاتة" },
      darija: { phonetic: "Tlata", arabic: "تلاتة" },
      golfe: { phonetic: "Thalatha", arabic: "ثلاثة", note: "Le Golfe garde le 'th' anglais de 'think'" }
    }
  },
  {
    id: 'num-4',
    category: 'chiffres',
    french: "Quatre",
    phonetic: "Arbaa",
    arabic: "أربعة",
    difficulty: 1,
    tip: "Le 'a' du milieu est un 3ain : la gorge se serre, comme chez le médecin.",
    dialects: {
      levantin: { phonetic: "Arbaa", arabic: "أربعة" },
      egyptien: { phonetic: "Arbaa", arabic: "أربعة" },
      darija: { phonetic: "Rebaa", arabic: "ربعة" },
      golfe: { phonetic: "Arbaa", arabic: "أربعة" }
    }
  },
  {
    id: 'num-5',
    category: 'chiffres',
    french: "Cinq",
    phonetic: "Khamse",
    arabic: "خمسة",
    difficulty: 1,
    tip: "Le 'kh' racle la gorge comme la 'jota' espagnole. C'est aussi la main de Fatma, la khamsa.",
    dialects: {
      levantin: { phonetic: "Khamse", arabic: "خمسة" },
      egyptien: { phonetic: "Khamsa", arabic: "خمسة" },
      darija: { phonetic: "Khamsa", arabic: "خمسة" },
      golfe: { phonetic: "Khamsa", arabic: "خمسة" }
    }
  },
  {
    id: 'num-6',
    category: 'chiffres',
    french: "Six",
    phonetic: "Sitte",
    arabic: "ستة",
    difficulty: 1,
    dialects: {
      levantin: { phonetic: "Sitte", arabic: "ستة" },
      egyptien: { phonetic: "Sitta", arabic: "ستة" },
      darija: { phonetic: "Setta", arabic: "ستة" },
      golfe: { phonetic: "Sitta", arabic: "ستة" }
    }
  },
  {
    id: 'num-7',
    category: 'chiffres',
    french: "Sept",
    phonetic: "Sabaa",
    arabic: "سبعة",
    difficulty: 1,
    dialects: {
      levantin: { phonetic: "Sabaa", arabic: "سبعة" },
      egyptien: { phonetic: "Sabaa", arabic: "سبعة" },
      darija: { phonetic: "Sebaa", arabic: "سبعة" },
      golfe: { phonetic: "Sabaa", arabic: "سبعة" }
    }
  },
  {
    id: 'num-8',
    category: 'chiffres',
    french: "Huit",
    phonetic: "Tmane",
    arabic: "ثمانية",
    difficulty: 1,
    dialects: {
      levantin: { phonetic: "Tmane", arabic: "تمانية" },
      egyptien: { phonetic: "Tamanya", arabic: "تمانية" },
      darija: { phonetic: "Tmenya", arabic: "تمنية" },
      golfe: { phonetic: "Thamanya", arabic: "ثمانية" }
    }
  },
  {
    id: 'num-9',
    category: 'chiffres',
    french: "Neuf",
    phonetic: "Tessa",
    arabic: "تسعة",
    difficulty: 1,
    dialects: {
      levantin: { phonetic: "Tessa", arabic: "تسعة" },
      egyptien: { phonetic: "Tessa", arabic: "تسعة" },
      darija: { phonetic: "Tsoud", arabic: "تسعود" },
      golfe: { phonetic: "Tissa", arabic: "تسعة" }
    }
  },
  {
    id: 'num-10',
    category: 'chiffres',
    french: "Dix",
    phonetic: "Ashra",
    arabic: "عشرة",
    difficulty: 1,
    tip: "Ça commence par un 3ain : 'Aashra', la gorge serrée, pas un 'a' français.",
    dialects: {
      levantin: { phonetic: "Ashra", arabic: "عشرة" },
      egyptien: { phonetic: "Ashara", arabic: "عشرة" },
      darija: { phonetic: "Achra", arabic: "عشرة" },
      golfe: { phonetic: "Ashra", arabic: "عشرة" }
    }
  },
  {
    id: 'num-20',
    category: 'chiffres',
    french: "Vingt",
    phonetic: "Ashrin",
    arabic: "عشرين",
    difficulty: 2,
    tip: "Les dizaines se finissent toutes en '-in' : ashrin, tlatin, arbain, khamsin. Une seule terminaison à retenir.",
    dialects: {
      levantin: { phonetic: "Ashrin", arabic: "عشرين" },
      egyptien: { phonetic: "Eshrin", arabic: "عشرين" },
      darija: { phonetic: "Achrin", arabic: "عشرين" },
      golfe: { phonetic: "Ishrin", arabic: "عشرين" }
    }
  },
  {
    id: 'num-50',
    category: 'chiffres',
    french: "Cinquante",
    phonetic: "Khamsin",
    arabic: "خمسين",
    difficulty: 2,
    dialects: {
      levantin: { phonetic: "Khamsin", arabic: "خمسين" },
      egyptien: { phonetic: "Khamsin", arabic: "خمسين" },
      darija: { phonetic: "Khamsin", arabic: "خمسين" },
      golfe: { phonetic: "Khamsin", arabic: "خمسين" }
    }
  },
  {
    id: 'num-100',
    category: 'chiffres',
    french: "Cent",
    phonetic: "Miyye",
    arabic: "مية",
    difficulty: 2,
    tip: "Deux cents se dit 'miten' : un duel, pas 'deux cents'.",
    dialects: {
      levantin: { phonetic: "Miyye", arabic: "مية" },
      egyptien: { phonetic: "Miyya", arabic: "مية" },
      darija: { phonetic: "Mya", arabic: "مية" },
      golfe: { phonetic: "Miyya", arabic: "مية" }
    }
  },
  {
    id: 'num-1000',
    category: 'chiffres',
    french: "Mille",
    phonetic: "Alf",
    arabic: "ألف",
    difficulty: 2,
    tip: "'Alf shukr' = mille mercis. 'Alf mabrouk' = mille félicitations. Le mot sert autant à remercier qu'à compter.",
    dialects: {
      levantin: { phonetic: "Alf", arabic: "ألف" },
      egyptien: { phonetic: "Alf", arabic: "ألف" },
      darija: { phonetic: "Alf", arabic: "ألف" },
      golfe: { phonetic: "Alf", arabic: "ألف" }
    }
  },
  {
    id: 'num-combien',
    category: 'chiffres',
    french: "Combien ? / Ça coûte combien ?",
    literalTranslation: "Avec combien ?",
    phonetic: "Kam ? / Bikam ?",
    arabic: "كم؟ / بكم؟",
    difficulty: 1,
    tip: "'Kam' compte une quantité, 'bikam' demande un prix. Confondre les deux se remarque tout de suite.",
    dialects: {
      levantin: { phonetic: "Addesh ?", arabic: "أديش؟", note: "Au Levant on dit 'addesh' bien plus souvent que 'kam'" },
      egyptien: { phonetic: "Bikam ?", arabic: "بكام؟" },
      darija: { phonetic: "Bchhal ?", arabic: "بشحال؟" },
      golfe: { phonetic: "Kam ? / Bikam ?", arabic: "كم؟ / بكم؟" }
    }
  },
  {
    id: 'num-heure',
    category: 'chiffres',
    french: "Il est quelle heure ?",
    literalTranslation: "L'heure combien ?",
    phonetic: "Addesh es-saa ?",
    arabic: "أديش الساعة؟",
    difficulty: 2,
    tip: "Pour répondre, on colle juste le chiffre : 'es-saa tlate' = il est trois heures.",
    dialects: {
      levantin: { phonetic: "Addesh es-saa ?", arabic: "أديش الساعة؟" },
      egyptien: { phonetic: "Es-saa kam ?", arabic: "الساعة كام؟" },
      darija: { phonetic: "Chhal f-saa ?", arabic: "شحال فالساعة؟" },
      golfe: { phonetic: "Kam es-saa ?", arabic: "كم الساعة؟" }
    }
  }
];

export const SAMPLE_SCENARIOS: ScenarioDialogue[] = [
  {
    id: 'souk-marrakech',
    title: "🛍️ Négocier une lampe au Souk",
    dialect: 'darija',
    category: 'negociation_souk',
    description: "Apprenez le rituel convivial du marchandage sans vous faire avoir et en gardant le sourire !",
    survivalHack: "Ne proposez jamais un prix si vous n'avez pas l'intention d'acheter. Si le marchand vous offre le thé à la menthe, c'est signe de respect, cela n'oblige pas à acheter !",
    lines: [
      { speaker: 'Moi', arabic: "سلام لاباس؟ بشحال هاد الضو عافاك؟", phonetic: "Salam labas ? Bchhal had daw afak ?", french: "Bonjour ça va ? Combien coûte cette lampe s'il te plaît ?", tip: "Bchhal = combien" },
      { speaker: 'Natif', arabic: "وعليكم السلام، هادي ب 400 درهم أ سيدي", phonetic: "Wa aleykoum salam, hadi b 400 dirham a sidi.", french: "Bonjour, celle-ci est à 400 dirhams monsieur." },
      { speaker: 'Moi', arabic: "أويلي! غالي بزاف! نقص شوية عافاك", phonetic: "Awili ! Ghali bzaf ! Nkos shwiya afak.", french: "Oulala ! C'est très cher ! Baisse un peu s'il te plaît.", tip: "Ghali bzaf = très cher" },
      { speaker: 'Natif', arabic: "شحال بغيتي تعطي فيها؟ دير معايا ثمن زوين", phonetic: "Chhal bghiti taati fiha ? Dir m3aya taman zwin.", french: "Combien veux-tu donner ? Fais un bon prix avec moi." },
      { speaker: 'Moi', arabic: "نعطيك 200 درهم، آخر كلام! صافي؟", phonetic: "Naatik 200 dirham, akhir kalam ! Safi ?", french: "Je te donne 200 dirhams, dernier mot ! C'est bon ?", tip: "Safi = c'est bon / d'accord" },
      { speaker: 'Natif', arabic: "واخا سيدي، بصحتك! مرحبا بك في المغرب", phonetic: "Wakha sidi, bsehtak ! Marhaba bik f l-maghrib.", french: "D'accord monsieur, à ta santé ! Bienvenue au Maroc.", tip: "Bsehtak = à ta santé / félicitations pour l'achat" }
    ]
  },
  {
    id: 'cafe-beyrouth',
    title: "☕ Commander sur la corniche à Beyrouth",
    dialect: 'levantin',
    category: 'cafe_resto',
    description: "Comment s'adresser au serveur avec élégance libanaise et commander le vrai café arabe.",
    survivalHack: "Au Levant, la politesse s'exprime par des souhaits de bénédiction. Dire 'Yislamou edeyk' (que tes mains soient bénies) quand le serveur pose le café fera briller ses yeux !",
    lines: [
      { speaker: 'Natif', arabic: "أهلاً وسهلاً يا هلا، شو بتحبوا تشربوا؟", phonetic: "Ahlan wa sahlan ya hala, shu btehbou techrabou ?", french: "Bienvenue à vous, qu'aimeriez-vous boire ?" },
      { speaker: 'Moi', arabic: "مرحبا! بدي قهوة مزبوطة لو سمحت", phonetic: "Marhaba ! Baddi ahwe mazbouta, law samacht.", french: "Bonjour ! Je veux un café moyennement sucré s'il te plaît.", tip: "Baddi = je veux" },
      { speaker: 'Natif', arabic: "تكرم عينك! بدك معها مي باردة؟", phonetic: "Tikram aynak ! Baddak ma'ha may barde ?", french: "Sur mes yeux (avec grand plaisir) ! Tu veux de l'eau froide avec ?", tip: "Tikram aynak = expression ultime d'hospitalité libanaise" },
      { speaker: 'Moi', arabic: "إي والله، يسلمو إيديك يا أخي", phonetic: "Ey wallah, yislamou edeyk ya akhi.", french: "Oui par Dieu, que tes mains soient bénies mon frère.", tip: "Yislamou edeyk = que tes mains soient bénies (merci suprême)" },
      { speaker: 'Natif', arabic: "تكرم، دقيقتين وبتكون عندك. يعطيك العافية!", phonetic: "Tikram, dakiktin w betkoun andak. Yatik el aafiye !", french: "Avec plaisir, deux minutes et c'est chez toi. Que Dieu te donne la force !" }
    ]
  },
  {
    id: 'taxi-caire',
    title: "🚕 Prendre un taxi dans le trafic du Caire",
    dialect: 'egyptien',
    category: 'taxi_directions',
    description: "L'art de guider un chauffeur égyptien ('Osta') avec convivialité et précision.",
    survivalHack: "En Égypte, on appelle le chauffeur 'Ya Osta' (maître artisan) ou 'Ya Bacha' (chef). Ça crée un respect immédiat et garantit un trajet agréable !",
    lines: [
      { speaker: 'Moi', arabic: "سلام عليكم يا أسطى، فاضي لخان الخليلي؟", phonetic: "Salam aleykoum ya osta, fadi le Khan el-Khalili ?", french: "Bonjour maître, es-tu libre pour aller à Khan el-Khalili ?", tip: "Ya osta = appellation respectueuse pour un chauffeur" },
      { speaker: 'Natif', arabic: "عليكم السلام يا باشا، اركب! تنورنا والله", phonetic: "Aleykoum salam ya bacha, erkab ! Tanawarna wallah.", french: "Bonjour mon chef, monte ! Tu nous illumines par Dieu." },
      { speaker: 'Moi', arabic: "بكام التوصيلة دي من فضلك؟", phonetic: "Bekam el tawseela di min fadlak ?", french: "Combien coûte ce trajet s'il te plaît ?", tip: "Bekam = combien" },
      { speaker: 'Natif', arabic: "اللي تدفعه يا باشا، احنا اخوات!", phonetic: "El li tedgef'ou ya bacha, ehna akhwat !", french: "Ce que tu payes mon chef, nous sommes frères ! (Formule de politesse classique)", tip: "Attention: Fixez quand même un chiffre après cette phrase de politesse !" },
      { speaker: 'Moi', arabic: "ربنا يخليك، قوللي السعر عشان نبقى حبايب! 80 جنيه كويس؟", phonetic: "Rabina ykhalik, oulli el se'er ashan neb'a habayeb ! 80 gineh kwayyes ?", french: "Que Dieu te préserve, dis-moi le prix pour qu'on reste bons amis ! 80 livres c'est bien ?" },
      { speaker: 'Natif', arabic: "زي الفل يا باشا، على طول ولا من الكوبري؟", phonetic: "Zay el foll ya bacha, ala tool wala min el kobri ?", french: "Parfait comme le jasmin mon chef, tout droit ou par le pont ?", tip: "Zay el foll = parfait / super" }
    ]
  },
  {
    id: 'majlis-dubai',
    title: "🇦🇪 Accueil au Majlis & Business à Dubaï",
    dialect: 'golfe',
    category: 'salutations',
    description: "L'art de l'hospitalité émiratie traditionnelle (Gahwa, dattes) et les formules de courtoisie Khaleeji à Dubaï et Abu Dhabi.",
    survivalHack: "Aux Émirats, lorsqu'on vous offre le café bédouin (Gahwa), tenez la tasse de la main droite. Pour en redemander, tendez simplement la tasse. Pour dire que vous avez fini, secouez légèrement la tasse de droite à gauche !",
    lines: [
      { speaker: 'Natif', arabic: "يا مرحبا الساع! حياكم الله في داركم، تقهوى يا الغالي!", phonetic: "Yaa Marhaba el sa'a ! Hayyakom Allah fi darkom, tagahwa ya el ghali !", french: "Bienvenue à cette heure ! Que Dieu vous donne vie dans votre maison, prends le café le précieux !", tip: "Ya Marhaba el sa'a = salutation royale 100% émiratie" },
      { speaker: 'Moi', arabic: "الله يحييك ويبقيك، ما شاء الله كشخة الدار!", phonetic: "Allah yhayyeek wa yebqeek, macha-Allah kashkha el dar !", french: "Que Dieu te donne vie et te préserve, macha-Allah quel endroit élégant et somptueux !", tip: "Kashkha = élégant, stylé, prestigieux aux Émirats" },
      { speaker: 'Natif', arabic: "تسلم يا طويل العمر، شو أخبارك وشلون الأهل؟", phonetic: "Tislam ya taweel el omr, shu akhbarak wa shlon el ahal ?", french: "Que tu sois sain et sauf, ô toi qui a longue vie, quelles sont tes nouvelles et comment va la famille ?", tip: "Ya taweel el omr = ô toi qui a longue vie (formule de grand respect)" },
      { speaker: 'Moi', arabic: "بخير ونعمة الحمد لله، بغيت أستشيرك في موضوع عمل لو سمحت", phonetic: "Bkhair wa ne'ma Al-hamdoulillah, bghit astashirak fi mawdoo' amal law samacht", french: "En bien et en grâce Dieu merci, je voulais te consulter sur un sujet de business s'il te plaît." },
      { speaker: 'Natif', arabic: "أبشر! تم طال عمرك، اللي تباه حاضرين!", phonetic: "Abshir ! Tamm tal omrak, el li tabah hadreen !", french: "Considère que c'est fait avec honneur ! C'est acté longue vie à toi, ce que tu veux nous sommes à disposition !", tip: "Abshir = formule suprême pour dire oui avec joie / honneur aux Émirats" }
    ]
  }
];

export const PRONUNCIATION_HACKS = [
  {
    letter: "Kh (خ - Kha)",
    sound: "Le 'R' rugueux du français (comme dans 'J'arrive' prononcé par un parisien) mais un peu plus gratté au fond de la gorge.",
    hack: "Faites le bruit de racler doucement votre gorge avant de prononcer un 'R'. Pensez au mot espagnol 'Jota' ou au compositeur 'Bach'.",
    example: "Khallas (خلاص = Fini/D'accord)",
    audioWord: "Khallas",
    badge: undefined
  },
  {
    letter: "Gh (غ - Ghayn)",
    sound: "Le son 'R' gras et doux du français (comme dans 'Paris' ou 'Rose').",
    hack: "C'est EXACTEMENT le 'R' standard français ! En phonétique anglaise ils écrivent 'Gh', mais pour un francophone c'est tout simplement notre R naturel !",
    example: "Ghali (غالي = Cher)",
    audioWord: "Ghali",
    badge: undefined
  },
  {
    letter: "Ain (ع - 'Ayn)",
    sound: "Le son le plus célèbre de l'arabe ! Une contraction profonde au fond de la gorge.",
    hack: "Imaginez que vous êtes chez le médecin qui vous demande d'ouvrir grand la bouche en disant 'Aaaaah', ou comme si vous avaliez une gorgée d'eau tout en parlant. Commencez par un 'A' profond et serrez la gorge.",
    example: "Habibi / Afwan / Yatik el aafiye",
    audioWord: "Afwan",
    badge: undefined
  },
  {
    letter: "H emphatic (ح - Ha)",
    sound: "Un 'H' très expiré, chaud et net, comme de la buée sur un miroir.",
    hack: "Faites comme si vous souffliez de l'air chaud pour nettoyer vos lunettes : 'Hhhh'. C'est le son du H dans 'Habibi' (Mon chéri) ou 'Hummus' !",
    example: "Habibi (حبيبي = Mon chéri / Mon ami)",
    audioWord: "Habibi",
    badge: undefined
  },
  {
    letter: "Qaf / Glottal stop (ق / ')",
    sound: "Dans le Levant et en Égypte, le 'Q' (Qaf) disparaît souvent dans la rue pour devenir un petit coup de glotte (un arrêt sec de la voix).",
    hack: "Au lieu de dire 'Qahwa' pour café, les Libanais et Égyptiens disent 'Ahwe' (avec une petite coupure avant le A). C'est ultra moderne et facile à prononcer !",
    example: "Ahwe (قهوة = Café au Levant/Égypte)",
    audioWord: "Ahwe",
    badge: undefined
  },
  {
    letter: "G de Garage au lieu du Qaf (🇦🇪 Spécificité Émirats)",
    sound: "En Émirati (Dubaï, Abu Dhabi) et dans le Golfe, le 'Qaf' littéraire (ق) se transforme en 'G' dur comme dans 'Garage' ou 'Gare' !",
    hack: "C'est la règle d'or pour parler comme un natif des Émirats ! Au lieu de dire 'Qahwa' (café), vous dites 'Gahwa' (قهوة). La route (Tarig) se dit 'Tarig', et mon cœur (Qalbi) se dit 'Galbi' !",
    example: "Gahwa (قهوة = Café bédouin à la cardamome)",
    audioWord: "Gahwa",
    badge: "🇦🇪 Spécificité Émirats & Golfe"
  },
  {
    letter: "Formules d'Honneur : Abshir & Marhaba (🇦🇪 Spécificité Émirats)",
    sound: "Aux Émirats Arabes Unis, l'hospitalité bédouine exige des mots d'une noblesse absolue pour dire oui ou pour accueillir.",
    hack: "Quand quelqu'un vous demande un service ou vous invite, ne dites pas juste 'oui', répondez 'Abshir !' (أبشر = Considère que c'est fait avec honneur et joie !) ou 'Tamm' (تم = Acté/Validé). Et pour accueillir, utilisez la salutation émiratie reine : 'Ya Marhaba el sa'a' (يا مرحبا الساع = Bienvenue à cette heure) !",
    example: "Abshir ! Tamm ! (أبشر ! تم ! = Considère que c'est fait avec honneur !)",
    audioWord: "Abshir",
    badge: "🇦🇪 Spécificité Émirats & Golfe"
  }
];
