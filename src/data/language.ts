import { Lesson, VerifiedLanguageItem } from '../types';

export const alphabetList: VerifiedLanguageItem[] = [
  { id: 'let-1', arabic: 'ا', english: 'Alif', transliteration: 'Alif', explanation: 'A silent carrier or a long "a" sound depending on vowels.', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'let-2', arabic: 'ب', english: 'Ba', transliteration: 'Bā', explanation: 'Equivalent to the English letter B.', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'let-3', arabic: 'ت', english: 'Ta', transliteration: 'Tā', explanation: 'Equivalent to the English letter T.', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'let-4', arabic: 'ث', english: 'Tha', transliteration: 'Thā', explanation: 'Pronounced like the "th" in "think".', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'let-5', arabic: 'ج', english: 'Jeem', transliteration: 'Jīm', explanation: 'Equivalent to the English letter J.', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'let-6', arabic: 'ح', english: 'Ha', transliteration: 'Ḥā', explanation: 'A sharp, breathed "h" sound from the middle throat.', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'let-7', arabic: 'خ', english: 'Kha', transliteration: 'Khā', explanation: 'A raspy sound like the "ch" in Scottish "loch" or German "Bach".', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'let-8', arabic: 'د', english: 'Dal', transliteration: 'Dāl', explanation: 'Equivalent to the English letter D.', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'let-9', arabic: 'ذ', english: 'Thal', transliteration: 'Dhāl', explanation: 'Pronounced like the "th" in "this".', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'let-10', arabic: 'ر', english: 'Ra', transliteration: 'Rā', explanation: 'A rolled or tapped "r" sound.', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'let-11', arabic: 'ز', english: 'Zay', transliteration: 'Zāy', explanation: 'Equivalent to the English letter Z.', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'let-12', arabic: 'س', english: 'Seen', transliteration: 'Sīn', explanation: 'Equivalent to the English letter S.', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'let-13', arabic: 'ش', english: 'Sheen', transliteration: 'Shīn', explanation: 'Equivalent to the English "sh" in "shoe".', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'let-14', arabic: 'ص', english: 'Sad', transliteration: 'Ṣād', explanation: 'An emphatic, throaty "s" sound.', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'let-15', arabic: 'ض', english: 'Dad', transliteration: 'Ḍād', explanation: 'An emphatic, throaty "d" sound.', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'let-16', arabic: 'ط', english: 'Ta', transliteration: 'Ṭā', explanation: 'An emphatic, throaty "t" sound.', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'let-17', arabic: 'ظ', english: 'Za', transliteration: 'Ẓā', explanation: 'An emphatic, throaty voiced "th" sound.', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'let-18', arabic: 'ع', english: 'Ayn', transliteration: '‘Ayn', explanation: 'A deep throat sound produced by compressing the throat.', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'let-19', arabic: 'غ', english: 'Ghayn', transliteration: 'Ghayn', explanation: 'A gargling sound, similar to the French "r".', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'let-20', arabic: 'ف', english: 'Fa', transliteration: 'Fā', explanation: 'Equivalent to the English letter F.', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'let-21', arabic: 'ق', english: 'Qaf', transliteration: 'Qāf', explanation: 'A deep "k" sound produced from the back of the throat.', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'let-22', arabic: 'ك', english: 'Kaf', transliteration: 'Kāf', explanation: 'Equivalent to the English letter K.', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'let-23', arabic: 'ل', english: 'Lam', transliteration: 'Lām', explanation: 'Equivalent to the English letter L.', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'let-24', arabic: 'م', english: 'Meem', transliteration: 'Mīm', explanation: 'Equivalent to the English letter M.', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'let-25', arabic: 'ن', english: 'Noon', transliteration: 'Nūn', explanation: 'Equivalent to the English letter N.', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'let-26', arabic: 'ه', english: 'Ha', transliteration: 'Hā', explanation: 'Equivalent to the soft English letter H.', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'let-27', arabic: 'و', english: 'Waw', transliteration: 'Wāw', explanation: 'Equivalent to the English letter W, or long vowel "oo".', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'let-28', arabic: 'ي', english: 'Ya', transliteration: 'Yā', explanation: 'Equivalent to the English letter Y, or long vowel "ee".', verified: true, verifiedBy: 'QIRAZ Language Board' }
];

export const path1Lessons: Lesson[] = [
  {
    id: 'foundations-01',
    pathId: 'foundations',
    lessonNumber: 1,
    title: 'Arabic Letters',
    description: 'Learn the primary shapes and sounds of the Arabic alphabet.',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    explanation: 'The Arabic alphabet consists of 28 letters. It is written from right to left. Many letters share similar base shapes but are distinguished by dots placed above or below the letter.',
    examples: [
      { arabic: 'ا', transliteration: 'alif', english: 'Alif', explanation: 'First letter, carries vowels.', verified: true },
      { arabic: 'ب', transliteration: 'ba', english: 'Ba', explanation: 'Second letter, dot below.', verified: true },
      { arabic: 'ت', transliteration: 'ta', english: 'Ta', explanation: 'Third letter, two dots above.', verified: true },
      { arabic: 'ث', transliteration: 'tha', english: 'Tha', explanation: 'Fourth letter, three dots above.', verified: true }
    ],
    practiceExercises: [
      { id: 'f1-ex1', question: 'Which letter represents the "b" sound?', options: ['ا', 'ب', 'ت', 'ث'], correctAnswer: 'ب', type: 'multiple-choice' },
      { id: 'f1-ex2', question: 'Which letter has two dots on top?', options: ['ا', 'ب', 'ت', 'ث'], correctAnswer: 'ت', type: 'multiple-choice' }
    ],
    quizQuestions: ['q-read-1', 'q-read-2']
  },
  {
    id: 'foundations-02',
    pathId: 'foundations',
    lessonNumber: 2,
    title: 'Letter Connections',
    description: 'Understand how Arabic letters change shape in words.',
    estimatedTime: '15 mins',
    difficulty: 'Beginner',
    explanation: 'Arabic is written in a cursive script. Most letters connect to adjacent letters. Depending on their position (initial, medial, final, or isolated), their shape changes slightly.',
    examples: [
      { arabic: 'بـ', transliteration: 'ba (initial)', english: 'Ba (beginning of a word)', explanation: 'Loses the left side curve.', verified: true },
      { arabic: 'ـبـ', transliteration: 'ba (medial)', english: 'Ba (middle of a word)', explanation: 'Connects on both sides.', verified: true },
      { arabic: 'ـب', transliteration: 'ba (final)', english: 'Ba (end of a word)', explanation: 'Returns to full shape with connection line.', verified: true }
    ],
    practiceExercises: [
      { id: 'f2-ex1', question: 'Which form of Ba appears at the start of a word?', options: ['بـ', 'ـبـ', 'ـب', 'ب'], correctAnswer: 'بـ', type: 'multiple-choice' }
    ],
    quizQuestions: ['q-read-3', 'q-read-4']
  },
  {
    id: 'foundations-03',
    pathId: 'foundations',
    lessonNumber: 3,
    title: 'Harakat (Short Vowels)',
    description: 'Learn Fathah, Kasrah, and Dammah.',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    explanation: 'Arabic letters represent consonants. Vowels are written as small marks above or below the letters. Fathah (َ ) is an "a" sound, Kasrah (ِ ) is an "i" sound, and Dammah (ُ ) is an "u" sound.',
    examples: [
      { arabic: 'بَ', transliteration: 'ba', english: 'Ba with Fathah', explanation: 'Short "a" sound.', verified: true },
      { arabic: 'بِ', transliteration: 'bi', english: 'Ba with Kasrah', explanation: 'Short "i" (ee) sound.', verified: true },
      { arabic: 'بُ', transliteration: 'bu', english: 'Ba with Dammah', explanation: 'Short "u" (oo) sound.', verified: true }
    ],
    practiceExercises: [
      { id: 'f3-ex1', question: 'What is the correct sound for بِ?', options: ['ba', 'bi', 'bu'], correctAnswer: 'bi', type: 'multiple-choice' }
    ],
    quizQuestions: ['q-read-5', 'q-read-6']
  },
  {
    id: 'foundations-04',
    pathId: 'foundations',
    lessonNumber: 4,
    title: 'Sukoon',
    description: 'Learn the symbol of silence or vowel absence.',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    explanation: 'The Sukoon (ْ) is a small circle placed over a letter. It indicates that the letter has no vowel sound and is pronounced as a silent, stopped consonant.',
    examples: [
      { arabic: 'أَبْ', transliteration: 'ab', english: 'Ab', explanation: 'Ba is silent/stopped.', verified: true },
      { arabic: 'مِنْ', transliteration: 'min', english: 'Min', explanation: 'Noon is silent/stopped.', verified: true }
    ],
    practiceExercises: [
      { id: 'f4-ex1', question: 'Which word contains a Sukoon?', options: ['بَ', 'بِ', 'أَبْ', 'بُ'], correctAnswer: 'أَبْ', type: 'multiple-choice' }
    ],
    quizQuestions: ['q-read-7']
  },
  {
    id: 'foundations-05',
    pathId: 'foundations',
    lessonNumber: 5,
    title: 'Shaddah',
    description: 'Understand consonant doubling.',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    explanation: 'The Shaddah (ّ) is a W-shaped mark placed over a letter. It represents a doubled consonant, where the first is silent (Sukoon) and the second has a vowel.',
    examples: [
      { arabic: 'رَبَّ', transliteration: 'rabba', english: 'Rabba', explanation: 'Pronounced as rab-ba.', verified: true },
      { arabic: 'أُمِّ', transliteration: 'ummi', english: 'Ummi', explanation: 'Pronounced as um-mi.', verified: true }
    ],
    practiceExercises: [
      { id: 'f5-ex1', question: 'What does a Shaddah indicate?', options: ['Vowel elongation', 'Consonant doubling', 'Silent letter', 'Grammatical case'], correctAnswer: 'Consonant doubling', type: 'multiple-choice' }
    ],
    quizQuestions: ['q-read-8']
  },
  {
    id: 'foundations-06',
    pathId: 'foundations',
    lessonNumber: 6,
    title: 'Tanween',
    description: 'Learn the double vowels or "n" endings.',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    explanation: 'Tanween (ً  ٍ  ٌ) represents nunation, adding an "n" sound to the end of nouns. Fathatayn (ً) makes "an", Kasratayn (ٍ) makes "in", and Dammatayn (ٌ) makes "un".',
    examples: [
      { arabic: 'بَابٌ', transliteration: 'bābun', english: 'Babun', explanation: 'A door (nominative).', verified: true },
      { arabic: 'بَاباً', transliteration: 'bāban', english: 'Baban', explanation: 'A door (accusative).', verified: true },
      { arabic: 'بَابٍ', transliteration: 'bābin', english: 'Babin', explanation: 'A door (genitive).', verified: true }
    ],
    practiceExercises: [
      { id: 'f6-ex1', question: 'What ending sound does Tanween represent?', options: ['m', 'n', 't', 'w'], correctAnswer: 'n', type: 'multiple-choice' }
    ],
    quizQuestions: ['q-read-9']
  },
  {
    id: 'foundations-07',
    pathId: 'foundations',
    lessonNumber: 7,
    title: 'Long Vowels',
    description: 'Learn Alif, Waw, and Ya as lengtheners.',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    explanation: 'In Arabic, three letters double as long vowels. Alif stretches Fathah into "aa". Waw stretches Dammah into "oo". Ya stretches Kasrah into "ee".',
    examples: [
      { arabic: 'بَا', transliteration: 'bā', english: 'Baa', explanation: 'Long a sound.', verified: true },
      { arabic: 'بُو', transliteration: 'bū', english: 'Boo', explanation: 'Long u sound.', verified: true },
      { arabic: 'بِي', transliteration: 'bī', english: 'Bee', explanation: 'Long i sound.', verified: true }
    ],
    practiceExercises: [
      { id: 'f7-ex1', question: 'Which combination makes the "ee" sound?', options: ['بَا', 'بُو', 'بِي'], correctAnswer: 'بِي', type: 'multiple-choice' }
    ],
    quizQuestions: ['q-read-10']
  },
  {
    id: 'foundations-08',
    pathId: 'foundations',
    lessonNumber: 8,
    title: 'Reading Simple Words',
    description: 'Combine letters and short vowels to read.',
    estimatedTime: '15 mins',
    difficulty: 'Beginner',
    explanation: 'Now we will combine letters and short vowels together to spell out basic words. Read from right to left, syllable by syllable.',
    examples: [
      { arabic: 'كَتَبَ', transliteration: 'kataba', english: 'He wrote', explanation: 'ka-ta-ba combined.', verified: true },
      { arabic: 'بَيْتٌ', transliteration: 'baytun', english: 'A house', explanation: 'bay-tun combined.', verified: true }
    ],
    practiceExercises: [
      { id: 'f8-ex1', question: 'Spell كَتَبَ phonetically:', options: ['kataba', 'kitaba', 'kutuba'], correctAnswer: 'kataba', type: 'multiple-choice' }
    ],
    quizQuestions: ['q-read-11']
  },
  {
    id: 'foundations-09',
    pathId: 'foundations',
    lessonNumber: 9,
    title: 'Reading Without Transliteration',
    description: 'Practice reading directly from Arabic script.',
    estimatedTime: '15 mins',
    difficulty: 'Beginner',
    explanation: 'Reading without transliteration requires recognizing the shapes and vowels immediately. Depend entirely on the Arabic letters and Harakat.',
    examples: [
      { arabic: 'قَلَمٌ', transliteration: 'qalamun', english: 'A pen', explanation: 'qalamun.', verified: true },
      { arabic: 'كِتَابٌ', transliteration: 'kitābun', english: 'A book', explanation: 'kitaabun.', verified: true }
    ],
    practiceExercises: [
      { id: 'f9-ex1', question: 'What is the meaning of كِتَابٌ?', options: ['Pen', 'Book', 'House', 'Door'], correctAnswer: 'Book', type: 'multiple-choice' }
    ],
    quizQuestions: ['q-read-12']
  },
  {
    id: 'foundations-10',
    pathId: 'foundations',
    lessonNumber: 10,
    title: 'Reading Practice',
    description: 'Complete vocabulary reading exercises.',
    estimatedTime: '20 mins',
    difficulty: 'Beginner',
    explanation: 'This lesson consolidates letters, vowels, Sukoon, and connections. Read these full sentences with proper pronunciation.',
    examples: [
      { arabic: 'هَذَا كِتَابٌ', transliteration: 'hādhā kitābun', english: 'This is a book', explanation: 'Simple sentence.', verified: true },
      { arabic: 'الْبَيْتُ جَمِيلٌ', transliteration: 'al-baytu jamīlun', english: 'The house is beautiful', explanation: 'Nominal sentence.', verified: true }
    ],
    practiceExercises: [
      { id: 'f10-ex1', question: 'What does هَذَا كِتَابٌ mean?', options: ['This is a house', 'This is a book', 'The house is beautiful'], correctAnswer: 'This is a book', type: 'multiple-choice' }
    ],
    quizQuestions: ['q-read-13']
  }
];

export const path3Lessons: Lesson[] = [
  {
    id: 'grammar-01',
    pathId: 'grammar',
    lessonNumber: 1,
    title: 'Ism, Fi\'l and Harf',
    description: 'The three parts of speech in Arabic grammar.',
    estimatedTime: '15 mins',
    difficulty: 'Beginner',
    explanation: 'Every word in Arabic belongs to one of three categories: 1. Ism (Noun, Pronoun, Adjective, Adverb), 2. Fi\'l (Verb), and 3. Harf (Particle/Preposition). Recognizing these forms is the key to grammar.',
    examples: [
      { arabic: 'كِتَابٌ', transliteration: 'kitābun', english: 'A book (Noun / Ism)', explanation: 'An object name, accepts Tanween.', verified: true },
      { arabic: 'كَتَبَ', transliteration: 'kataba', english: 'He wrote (Verb / Fi\'l)', explanation: 'Indicates action in a time period.', verified: true },
      { arabic: 'فِي', transliteration: 'fī', english: 'In (Particle / Harf)', explanation: 'Connects words, does not carry meaning on its own.', verified: true }
    ],
    practiceExercises: [
      { id: 'g1-ex1', question: 'What category does فِي belong to?', options: ['Ism', 'Fi\'l', 'Harf'], correctAnswer: 'Harf', type: 'multiple-choice' },
      { id: 'g1-ex2', question: 'Is كِتَابٌ an Ism, Fi\'l, or Harf?', options: ['Ism', 'Fi\'l', 'Harf'], correctAnswer: 'Ism', type: 'multiple-choice' }
    ],
    quizQuestions: ['q-gram-1', 'q-gram-2']
  },
  {
    id: 'grammar-02',
    pathId: 'grammar',
    lessonNumber: 2,
    title: 'Pronouns',
    description: 'Learn subject pronouns in Arabic.',
    estimatedTime: '15 mins',
    difficulty: 'Beginner',
    explanation: 'Arabic pronouns (Damaa\'ir) are split into detached (separate) and attached. The basic detached singular pronouns are: Huwa (He), Hiya (She), Anta (You - masc), Anti (You - fem), and Ana (I).',
    examples: [
      { arabic: 'هُوَ', transliteration: 'huwa', english: 'He', explanation: 'Third person masculine singular.', verified: true },
      { arabic: 'هِيَ', transliteration: 'hiya', english: 'She', explanation: 'Third person feminine singular.', verified: true },
      { arabic: 'أَنَا', transliteration: 'anā', english: 'I', explanation: 'First person singular (masc & fem).', verified: true }
    ],
    practiceExercises: [
      { id: 'g2-ex1', question: 'What is the pronoun for "She"?', options: ['هُوَ', 'هِيَ', 'أَنْتَ', 'أَنَا'], correctAnswer: 'هِيَ', type: 'multiple-choice' }
    ],
    quizQuestions: ['q-gram-3', 'q-gram-4']
  },
  {
    id: 'grammar-03',
    pathId: 'grammar',
    lessonNumber: 3,
    title: 'Masculine and Feminine',
    description: 'Identify gender in Arabic nouns.',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    explanation: 'Arabic nouns are either masculine or feminine. Feminine nouns usually end with Ta Marbutah (ة), though some exceptions exist (like parts of the body that come in pairs, or specific words like Nafs).',
    examples: [
      { arabic: 'مُعَلِّمٌ', transliteration: 'mu‘allimun', english: 'Teacher (masculine)', explanation: 'No feminine marker.', verified: true },
      { arabic: 'مُعَلِّمَةٌ', transliteration: 'mu‘allimatun', english: 'Teacher (feminine)', explanation: 'Ends with Ta Marbutah (ة).', verified: true }
    ],
    practiceExercises: [
      { id: 'g3-ex1', question: 'Which letter usually indicates a feminine noun?', options: ['ا', 'ة', 'ي', 'ن'], correctAnswer: 'ة', type: 'multiple-choice' }
    ],
    quizQuestions: ['q-gram-5']
  },
  {
    id: 'grammar-04',
    pathId: 'grammar',
    lessonNumber: 4,
    title: 'Singular and Plural',
    description: 'Explore basic number forms.',
    estimatedTime: '15 mins',
    difficulty: 'Beginner',
    explanation: 'Arabic nouns have three numbers: Singular (Mufrad), Dual (Muthanna), and Plural (Jam‘). Plurals are divided into Sound Masculine Plural (ends in -oon/een), Sound Feminine Plural (ends in -aat), and Broken Plural (pattern change).',
    examples: [
      { arabic: 'مُسْلِمٌ', transliteration: 'muslimun', english: 'A Muslim (singular)', explanation: 'One person.', verified: true },
      { arabic: 'مُسْلِمُونَ', transliteration: 'muslimūna', english: 'Muslims (plural)', explanation: 'Sound masculine plural ending with -oona.', verified: true },
      { arabic: 'كُتُبٌ', transliteration: 'kutubun', english: 'Books (broken plural)', explanation: 'Plural of Kitab (كِتَابٌ).', verified: true }
    ],
    practiceExercises: [
      { id: 'g4-ex1', question: 'What is the plural of كِتَابٌ?', options: ['كِتَابُونَ', 'كُتُبٌ', 'كِتَابَات'], correctAnswer: 'كُتُبٌ', type: 'multiple-choice' }
    ],
    quizQuestions: ['q-gram-6']
  },
  {
    id: 'grammar-05',
    pathId: 'grammar',
    lessonNumber: 5,
    title: 'Definite and Indefinite',
    description: 'Learn the article "Al".',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    explanation: 'Indefinite nouns typically end with Tanween (e.g. kitābun - a book). A noun becomes definite by adding the prefix Al- (ال), which removes the Tanween (e.g. al-kitābu - the book).',
    examples: [
      { arabic: 'وَلَدٌ', transliteration: 'waladun', english: 'A boy', explanation: 'Indefinite, has Tanween.', verified: true },
      { arabic: 'الْوَلَدُ', transliteration: 'al-waladu', english: 'The boy', explanation: 'Definite, prefix Al-, no Tanween.', verified: true }
    ],
    practiceExercises: [
      { id: 'g5-ex1', question: 'Make بَيْتٌ definite:', options: ['بَيْتُ', 'الْبَيْتُ', 'الْبَيْتٌ'], correctAnswer: 'الْبَيْتُ', type: 'multiple-choice' }
    ],
    quizQuestions: ['q-gram-7']
  },
  {
    id: 'grammar-06',
    pathId: 'grammar',
    lessonNumber: 6,
    title: 'Nominal Sentences',
    description: 'Form sentences with Nouns.',
    estimatedTime: '15 mins',
    difficulty: 'Beginner',
    explanation: 'A Nominal Sentence (Jumlah Ismiyyah) starts with an Ism. It has two main parts: the Subject (Mubtada‘), which is definite, and the Predicate (Khabar), which is indefinite. Both are nominative (end in dammah).',
    examples: [
      { arabic: 'الْكِتَابُ جَدِيدٌ', transliteration: 'al-kitābu jadīdun', english: 'The book is new', explanation: 'Mubtada‘ = al-kitabu, Khabar = jadidun.', verified: true },
      { arabic: 'الْوَلَدُ صَالِحٌ', transliteration: 'al-waladu ṣāliḥun', english: 'The boy is righteous', explanation: 'Subject and predicate matching.', verified: true }
    ],
    practiceExercises: [
      { id: 'g6-ex1', question: 'Identify the Khabar (predicate) in "الْبَيْتُ كَبِيرٌ" (The house is big):', options: ['الْبَيْتُ', 'كَبِيرٌ'], correctAnswer: 'كَبِيرٌ', type: 'multiple-choice' }
    ],
    quizQuestions: ['q-gram-8']
  },
  {
    id: 'grammar-07',
    pathId: 'grammar',
    lessonNumber: 7,
    title: 'Verbal Sentences',
    description: 'Form sentences starting with Verbs.',
    estimatedTime: '15 mins',
    difficulty: 'Beginner',
    explanation: 'A Verbal Sentence (Jumlah Fi‘liyyah) starts with a Fi‘l. It consists of a Verb (Fi‘l) and a Subject (Fā‘il, the doer). The Fā‘il is always nominative (dammah).',
    examples: [
      { arabic: 'كَتَبَ الْوَلَدُ', transliteration: 'kataba al-waladu', english: 'The boy wrote', explanation: 'Verb (kataba) + Subject (al-waladu).', verified: true },
      { arabic: 'خَلَقَ اللَّهُ', transliteration: 'khalaqa Allāhu', english: 'Allah created', explanation: 'Verb (khalaqa) + Subject (Allahu).', verified: true }
    ],
    practiceExercises: [
      { id: 'g7-ex1', question: 'What does a Jumlah Fi‘liyyah start with?', options: ['Ism', 'Fi\'l', 'Harf'], correctAnswer: 'Fi\'l', type: 'multiple-choice' }
    ],
    quizQuestions: ['q-gram-9']
  },
  {
    id: 'grammar-08',
    pathId: 'grammar',
    lessonNumber: 8,
    title: 'Possessive Construction',
    description: 'Learn the Idafah construction.',
    estimatedTime: '15 mins',
    difficulty: 'Beginner',
    explanation: 'Idafah is the possession link ("noun of noun"). It has two parts: Mudāf (possessed) and Mudāf Ilayh (possessor). The Mudāf never has Al- or Tanween. The Mudāf Ilayh is always genitive (ends in kasrah).',
    examples: [
      { arabic: 'كِتَابُ اللَّهِ', transliteration: 'kitābu Allāhi', english: 'The Book of Allah', explanation: 'kitabu (Mudaf), Allahi (Mudaf Ilayh).', verified: true },
      { arabic: 'بَيْتُ الْمُعَلِّمِ', transliteration: 'baytu al-mu‘allimi', english: 'The house of the teacher', explanation: 'baytu (Mudaf), al-mu‘allimi (Mudaf Ilayh).', verified: true }
    ],
    practiceExercises: [
      { id: 'g8-ex1', question: 'In an Idafah, what case does the possessor (Mudāf Ilayh) take?', options: ['Nominative (Dammah)', 'Accusative (Fathah)', 'Genitive (Kasrah)'], correctAnswer: 'Genitive (Kasrah)', type: 'multiple-choice' }
    ],
    quizQuestions: ['q-gram-10']
  },
  {
    id: 'grammar-09',
    pathId: 'grammar',
    lessonNumber: 9,
    title: 'Adjectives',
    description: 'Describe nouns with matching adjectives.',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    explanation: 'An adjective (Sifah) in Arabic follows the noun it describes (Mawsūf). The Sifah must match the Mawsūf in four qualities: 1. Gender, 2. Number, 3. Definiteness, and 4. Grammatical Case.',
    examples: [
      { arabic: 'كِتَابٌ كَبِيرٌ', transliteration: 'kitābun kabīrun', english: 'A big book', explanation: 'Both masculine, singular, indefinite, nominative.', verified: true },
      { arabic: 'الْكِتَابُ الْكَبِيرُ', transliteration: 'al-kitābu al-kabīru', english: 'The big book', explanation: 'Both definite.', verified: true }
    ],
    practiceExercises: [
      { id: 'g9-ex1', question: 'Where is the adjective placed in relation to the noun?', options: ['Before the noun', 'After the noun'], correctAnswer: 'After the noun', type: 'multiple-choice' }
    ],
    quizQuestions: ['q-gram-11']
  },
  {
    id: 'grammar-10',
    pathId: 'grammar',
    lessonNumber: 10,
    title: 'Basic Verb Conjugation',
    description: 'Learn simple past tense forms.',
    estimatedTime: '18 mins',
    difficulty: 'Beginner',
    explanation: 'Verbs in Arabic conjugate based on gender, number, and person. The default root represents "He" in the past tense (e.g. kataba - he wrote). We add suffixes for other pronouns (e.g. katabtu - I wrote).',
    examples: [
      { arabic: 'كَتَبَ', transliteration: 'kataba', english: 'He wrote', explanation: 'Root past form.', verified: true },
      { arabic: 'كَتَبَتْ', transliteration: 'katabat', english: 'She wrote', explanation: 'Suffix -at indicates "she".', verified: true },
      { arabic: 'كَتَبْتُ', transliteration: 'katabtu', english: 'I wrote', explanation: 'Suffix -tu indicates "I".', verified: true }
    ],
    practiceExercises: [
      { id: 'g10-ex1', question: 'What does "كَتَبْتُ" mean?', options: ['He wrote', 'She wrote', 'I wrote'], correctAnswer: 'I wrote', type: 'multiple-choice' }
    ],
    quizQuestions: ['q-gram-12']
  }
];
