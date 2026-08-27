import { Lesson } from '../types';

export const minhajLessons: Lesson[] = [
  {
    id: 'minhaj-01',
    pathId: 'minhaj',
    lessonNumber: 1,
    title: 'Demonstrative Pronouns',
    description: 'Learn near and far singular masculine demonstrative pronouns.',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    explanation: 'Minhaj-ul-Arabia Lesson 1 introduces near and far singular masculine demonstrative pronouns: "هَذَا" (Hadha) meaning "This" and "ذَلِكَ" (Dhalika) meaning "That". These are used to form basic identification sentences.',
    examples: [
      { arabic: 'هَذَا كِتَابٌ', transliteration: 'hadha kitabun', english: 'This is a book.', explanation: 'هَذَا (this) + كِتَابٌ (book).', verified: true, approved: true, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 1, sourcePage: 5 },
      { arabic: 'ذَلِكَ قَلَمٌ', transliteration: 'dhalika qalamun', english: 'That is a pen.', explanation: 'ذَلِكَ (that) + قَلَمٌ (pen).', verified: true, approved: true, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 1, sourcePage: 5 },
      { arabic: 'هَذَا جَمَلٌ', transliteration: 'hadha jamalun', english: 'This is a camel.', explanation: 'هَذَا (this) + جَمَلٌ (camel).', verified: true, approved: true, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 1, sourcePage: 6 },
      { arabic: 'ذَلِكَ فَرَسٌ', transliteration: 'dhalika farasun', english: 'That is a horse.', explanation: 'ذَلِكَ (that) + فَرَسٌ (horse).', verified: true, approved: true, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 1, sourcePage: 6 },
      { arabic: 'هَذَا كَلْبٌ', transliteration: 'hadha kalbun', english: 'This is a dog.', explanation: 'هَذَا (this) + كَلْبٌ (dog).', verified: true, approved: true, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 1, sourcePage: 6 },
      { arabic: 'ذَلِكَ قِطٌّ', transliteration: 'dhalika qittun', english: 'That is a cat.', explanation: 'ذَلِكَ (that) + قِطٌّ (cat).', verified: true, approved: true, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 1, sourcePage: 6 }
    ],
    practiceExercises: [
      { id: 'm1-ex1', question: 'Translate to Arabic: "This is a book."', options: ['هَذَا كِتَابٌ', 'ذَلِكَ كِتَابٌ', 'هَذَا قَلَمٌ'], correctAnswer: 'هَذَا كِتَابٌ', type: 'multiple-choice', verified: true, approved: true, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 1, sourcePage: 6 },
      { id: 'm1-ex2', question: 'Translate to English: "ذَلِكَ فَرَسٌ"', options: ['This is a horse.', 'That is a horse.', 'That is a camel.'], correctAnswer: 'That is a horse.', type: 'multiple-choice', verified: true, approved: true, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 1, sourcePage: 6 }
    ],
    quizQuestions: ['q-minhaj-1-1', 'q-minhaj-1-2'],
    sourceBook: 'Minhaj-ul-Arabia',
    sourcePart: 'Part 1',
    sourceLesson: 1,
    sourcePage: 5,
    verified: true,
    approved: true
  },
  {
    id: 'minhaj-02',
    pathId: 'minhaj',
    lessonNumber: 2,
    title: 'Interrogatives for Objects',
    description: 'Ask questions about inanimate objects and animals using "ما".',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    explanation: 'Lesson 2 introduces the interrogative particle "مَا" (Ma) meaning "What". It is used to ask questions about non-rational entities like animals and objects.',
    examples: [
      { arabic: 'مَا هَذَا؟', transliteration: 'ma hadha?', english: 'What is this?', explanation: 'مَا (what) + هَذَا (this).', verified: true, approved: true, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 2, sourcePage: 7 },
      { arabic: 'هَذَا غَزَالٌ', transliteration: 'hadha ghazalun', english: 'This is a deer.', explanation: 'هَذَا (this) + غَزَالٌ (deer).', verified: true, approved: true, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 2, sourcePage: 7 },
      { arabic: 'مَا ذَلِكَ؟', transliteration: 'ma dhalika?', english: 'What is that?', explanation: 'مَا (what) + ذَلِكَ (that).', verified: true, approved: true, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 2, sourcePage: 7 },
      { arabic: 'ذَلِكَ قِرْدٌ', transliteration: 'dhalika qirdun', english: 'That is a monkey.', explanation: 'ذَلِكَ (that) + قِرْدٌ (monkey).', verified: true, approved: true, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 2, sourcePage: 7 }
    ],
    practiceExercises: [
      { id: 'm2-ex1', question: 'How do you ask "What is this?" in Arabic?', options: ['مَنْ هَذَا؟', 'مَا هَذَا؟', 'مَا ذَلِكَ؟'], correctAnswer: 'مَا هَذَا؟', type: 'multiple-choice', verified: true, approved: true, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 2, sourcePage: 7 }
    ],
    quizQuestions: ['q-minhaj-2-1'],
    sourceBook: 'Minhaj-ul-Arabia',
    sourcePart: 'Part 1',
    sourceLesson: 2,
    sourcePage: 7,
    verified: true,
    approved: true
  },
  {
    id: 'minhaj-03',
    pathId: 'minhaj',
    lessonNumber: 3,
    title: 'Interrogatives for Persons',
    description: 'Ask questions about people and professions using "من".',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    explanation: 'Lesson 3 introduces the interrogative particle "مَنْ" (Man) meaning "Who". It is used specifically for rational beings (human beings).',
    examples: [
      { arabic: 'مَنْ هَذَا؟', transliteration: 'man hadha?', english: 'Who is this?', explanation: 'مَنْ (who) + هَذَا (this).', verified: true, approved: true, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 3, sourcePage: 8 },
      { arabic: 'هَذَا رَسُولٌ', transliteration: 'hadha rasulun', english: 'This is a messenger.', explanation: 'هَذَا (this) + رَسُولٌ (messenger).', verified: true, approved: true, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 3, sourcePage: 8 },
      { arabic: 'مَنْ ذَلِكَ؟', transliteration: 'man dhalika?', english: 'Who is that?', explanation: 'مَنْ (who) + ذَلِكَ (that).', verified: true, approved: true, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 3, sourcePage: 8 },
      { arabic: 'ذَلِكَ وَلَدٌ', transliteration: 'dhalika waladun', english: 'That is a boy.', explanation: 'ذَلِكَ (that) + وَلَدٌ (boy).', verified: true, approved: true, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 3, sourcePage: 8 }
    ],
    practiceExercises: [
      { id: 'm3-ex1', question: 'Which question particle is used for people?', options: ['مَا', 'مَنْ', 'أَ'], correctAnswer: 'مَنْ', type: 'multiple-choice', verified: true, approved: true, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 3, sourcePage: 8 }
    ],
    quizQuestions: ['q-minhaj-3-1'],
    sourceBook: 'Minhaj-ul-Arabia',
    sourcePart: 'Part 1',
    sourceLesson: 3,
    sourcePage: 8,
    verified: true,
    approved: true
  },
  {
    id: 'minhaj-04',
    pathId: 'minhaj',
    lessonNumber: 4,
    title: 'The Definite Article',
    description: 'Learn the prefix "ال" and its phonetic rules.',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    explanation: 'Lesson 4 teaches how to make indefinite nouns definite using the prefix "الـ" (Al-). Note that attaching "الـ" removes the Tanween from the end of the noun.',
    examples: [
      { arabic: 'كِتَابٌ', transliteration: 'kitabun', english: 'A book', explanation: 'Indefinite, ends with Tanween.', verified: true, approved: true, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 4, sourcePage: 9 },
      { arabic: 'الْكِتَابُ', transliteration: 'al-kitabu', english: 'The book', explanation: 'Definite, Tanween is replaced with a single vowel.', verified: true, approved: true, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 4, sourcePage: 9 }
    ],
    practiceExercises: [
      { id: 'm4-ex1', question: 'What happens to كِتَابٌ when you add الـ?', options: ['الْكِتَابٌ', 'الْكِتَابُ', 'كِتَابُ'], correctAnswer: 'الْكِتَابُ', type: 'multiple-choice', verified: true, approved: true, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 4, sourcePage: 9 }
    ],
    quizQuestions: ['q-minhaj-4-1'],
    sourceBook: 'Minhaj-ul-Arabia',
    sourcePart: 'Part 1',
    sourceLesson: 4,
    sourcePage: 9,
    verified: true,
    approved: true
  },
  {
    id: 'minhaj-05',
    pathId: 'minhaj',
    lessonNumber: 5,
    title: 'Nominal Sentence & Adjectives',
    description: 'Learn Subject & Predicate sentence structures.',
    estimatedTime: '15 mins',
    difficulty: 'Beginner',
    explanation: 'Lesson 5 introduces basic nominal sentences (المبتدأ والخبر). A simple sentence is formed by a definite subject (Mubtada) followed by an indefinite adjective or noun (Khabar).',
    examples: [
      { arabic: 'الْكِتَابُ جَدِيدٌ', transliteration: 'al-kitabu jadidun', english: 'The book is new.', explanation: 'الْكِتَابُ (definite subject) + جَدِيدٌ (indefinite predicate).', verified: true, approved: true, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 5, sourcePage: 11 },
      { arabic: 'الْقَلَمُ مَكْسُورٌ', transliteration: 'al-qalamu maksurun', english: 'The pen is broken.', explanation: 'الْقَلَمُ (definite subject) + مَكْسُورٌ (indefinite predicate).', verified: true, approved: true, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 5, sourcePage: 11 },
      { arabic: 'الْمَاءُ بَارِدٌ', transliteration: 'al-ma\'u baridun', english: 'The water is cold.', explanation: 'الْمَاءُ + بَارِدٌ.', verified: true, approved: true, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 5, sourcePage: 12 }
    ],
    practiceExercises: [
      { id: 'm5-ex1', question: 'Translate to Arabic: "The book is new."', options: ['الْكِتَابُ جَدِيدٌ', 'كِتَابٌ جَدِيدٌ', 'الْكِتَابُ الْجَدِيدُ'], correctAnswer: 'الْكِتَابُ جَدِيدٌ', type: 'multiple-choice', verified: true, approved: true, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 5, sourcePage: 11 }
    ],
    quizQuestions: ['q-minhaj-5-1'],
    sourceBook: 'Minhaj-ul-Arabia',
    sourcePart: 'Part 1',
    sourceLesson: 5,
    sourcePage: 11,
    verified: true,
    approved: true
  },
  {
    id: 'minhaj-06',
    pathId: 'minhaj',
    lessonNumber: 6,
    title: 'Prepositions: فِي and عَلَى',
    description: 'Learn simple locative prepositions in Arabic.',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    explanation: 'Lesson 6 introduces prepositions of place: "فِي" (in) and "عَلَى" (on). In Arabic, nouns following prepositions enter the genitive case (Majrur), meaning they end with Kasrah.',
    examples: [
      { arabic: 'فِي الْمَاءِ', transliteration: 'fil-ma\'i', english: 'In the water.', explanation: 'فِي + الْمَاءِ (ends with Kasrah).', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 6, sourcePage: 13 },
      { arabic: 'عَلَى الْأَرْضِ', transliteration: 'alal-ardi', english: 'On the ground.', explanation: 'عَلَى + الْأَرْضِ.', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 6, sourcePage: 13 }
    ],
    practiceExercises: [
      { id: 'm6-ex1', question: 'Which case does a preposition cause?', options: ['Nominative (Marfu)', 'Accusative (Mansub)', 'Genitive (Majrur)'], correctAnswer: 'Genitive (Majrur)', type: 'multiple-choice', verified: false, approved: false }
    ],
    quizQuestions: ['q-minhaj-placeholder'],
    sourceBook: 'Minhaj-ul-Arabia',
    sourcePart: 'Part 1',
    sourceLesson: 6,
    sourcePage: 13,
    verified: false,
    approved: false
  },
  {
    id: 'minhaj-07',
    pathId: 'minhaj',
    lessonNumber: 7,
    title: 'Prepositions: مِنْ and إِلَى',
    description: 'Learn prepositions of direction and distance.',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    explanation: 'Lesson 7 covers "مِنْ" (from) and "إِلَى" (to), which also place the following noun in the genitive case (Majrur).',
    examples: [
      { arabic: 'مِنَ الْبَيْتِ', transliteration: 'minal-bayti', english: 'From the house.', explanation: 'Note that min becomes mina before Al- prefix.', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 7, sourcePage: 15 },
      { arabic: 'إِلَى الْمَسْجِدِ', transliteration: 'ilal-masjidi', english: 'To the mosque.', explanation: 'إِلَى + الْمَسْجِدِ.', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 7, sourcePage: 15 }
    ],
    practiceExercises: [
      { id: 'm7-ex1', question: 'What does "مِنَ الْمَدْرَسَةِ" mean?', options: ['To the school', 'From the school', 'In the school'], correctAnswer: 'From the school', type: 'multiple-choice', verified: false, approved: false }
    ],
    quizQuestions: ['q-minhaj-placeholder'],
    sourceBook: 'Minhaj-ul-Arabia',
    sourcePart: 'Part 1',
    sourceLesson: 7,
    sourcePage: 15,
    verified: false,
    approved: false
  },
  {
    id: 'minhaj-08',
    pathId: 'minhaj',
    lessonNumber: 8,
    title: 'The Possessive Construct',
    description: 'Understand the Idafah construction (Mudhaf & Mudhaf Ilayh).',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    explanation: 'Lesson 8 introduces possessive pairs (الإضافة). The first noun is the possessed item (Mudhaf) and has no الـ or Tanween. The second noun is the possessor (Mudhaf Ilayh) and is always in the genitive case (Majrur).',
    examples: [
      { arabic: 'كِتَابُ اللَّهِ', transliteration: 'kitabu-llahi', english: 'The Book of Allah.', explanation: 'كِتَابُ (Mudhaf) + اللَّهِ (Mudhaf Ilayh).', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 8, sourcePage: 17 }
    ],
    practiceExercises: [
      { id: 'm8-ex1', question: 'Which noun is in the genitive case in an Idafah structure?', options: ['First noun (Mudhaf)', 'Second noun (Mudhaf Ilayh)', 'Both nouns'], correctAnswer: 'Second noun (Mudhaf Ilayh)', type: 'multiple-choice', verified: false, approved: false }
    ],
    quizQuestions: ['q-minhaj-placeholder'],
    sourceBook: 'Minhaj-ul-Arabia',
    sourcePart: 'Part 1',
    sourceLesson: 8,
    sourcePage: 17,
    verified: false,
    approved: false
  },
  {
    id: 'minhaj-09',
    pathId: 'minhaj',
    lessonNumber: 9,
    title: 'Attached Pronouns',
    description: 'Learn singular attached possessive pronouns.',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    explanation: 'Lesson 9 teaches attached pronouns for singular ownership: "ـِي" (my), "ـكَ" (your - masculine), and "ـهُ" (his). These attach to the end of a noun.',
    examples: [
      { arabic: 'كِتَابِي', transliteration: 'kitabi', english: 'My book', explanation: 'كِتَاب + ـِي.', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 9, sourcePage: 19 },
      { arabic: 'كِتَابُكَ', transliteration: 'kitabuka', english: 'Your book', explanation: 'كِتَاب + ـكَ.', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 9, sourcePage: 19 },
      { arabic: 'كِتَابُهُ', transliteration: 'kitabuhu', english: 'His book', explanation: 'كِتَاب + ـهُ.', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 9, sourcePage: 19 }
    ],
    practiceExercises: [
      { id: 'm9-ex1', question: 'How do you say "my pen" in Arabic?', options: ['قَلَمُكَ', 'قَلَمِي', 'قَلَمُهُ'], correctAnswer: 'قَلَمِي', type: 'multiple-choice', verified: false, approved: false }
    ],
    quizQuestions: ['q-minhaj-placeholder'],
    sourceBook: 'Minhaj-ul-Arabia',
    sourcePart: 'Part 1',
    sourceLesson: 9,
    sourcePage: 19,
    verified: false,
    approved: false
  },
  {
    id: 'minhaj-10',
    pathId: 'minhaj',
    lessonNumber: 10,
    title: 'Adjective-Noun Agreement',
    description: 'Learn attribute and adjective pairs.',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    explanation: 'Lesson 10 introduces the qualified noun (Mawsuf) and its adjective (Sifah). In Arabic, the adjective follows the noun and matches it in case, definiteness, gender, and number.',
    examples: [
      { arabic: 'الْوَلَدُ الصَّالِحُ', transliteration: 'al-waladu-s-salihu', english: 'The righteous boy', explanation: 'Both are definite, masculine, singular, and nominative.', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 10, sourcePage: 21 }
    ],
    practiceExercises: [
      { id: 'm10-ex1', question: 'Where does the adjective sit in relation to the noun it describes?', options: ['Before the noun', 'After the noun', 'Inside the noun'], correctAnswer: 'After the noun', type: 'multiple-choice', verified: false, approved: false }
    ],
    quizQuestions: ['q-minhaj-placeholder'],
    sourceBook: 'Minhaj-ul-Arabia',
    sourcePart: 'Part 1',
    sourceLesson: 10,
    sourcePage: 21,
    verified: false,
    approved: false
  },
  {
    id: 'minhaj-11',
    pathId: 'minhaj',
    lessonNumber: 11,
    title: 'Simple Present Tense Verbs',
    description: 'Learn singular masculine present tense verbs.',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    explanation: 'Lesson 11 introduces simple present tense verbs (المضارع) for singular 3rd-person masculine actions.',
    examples: [
      { arabic: 'يَذْهَبُ', transliteration: 'yadhhabu', english: 'He goes / He is going', explanation: 'Present tense verb root.', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 11, sourcePage: 23 },
      { arabic: 'يَقْرَأُ', transliteration: 'yaqra\'u', english: 'He reads / He is reading', explanation: 'Present tense verb root.', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 11, sourcePage: 23 }
    ],
    practiceExercises: [
      { id: 'm11-ex1', question: 'What is the meaning of "يَشْرَبُ"?', options: ['He plays', 'He drinks', 'He writes'], correctAnswer: 'He drinks', type: 'multiple-choice', verified: false, approved: false }
    ],
    quizQuestions: ['q-minhaj-placeholder'],
    sourceBook: 'Minhaj-ul-Arabia',
    sourcePart: 'Part 1',
    sourceLesson: 11,
    sourcePage: 23,
    verified: false,
    approved: false
  },
  {
    id: 'minhaj-12',
    pathId: 'minhaj',
    lessonNumber: 12,
    title: 'Conjugating Singular Verbs',
    description: 'Conjugate verbs for I, You (m), and He.',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    explanation: 'Lesson 12 details conjugation for the singular pronouns: "أَنَا" (I), "أَنْتَ" (You - masculine), and "هُوَ" (He).',
    examples: [
      { arabic: 'أَنَا أَذْهَبُ', transliteration: 'ana adhabu', english: 'I go.', explanation: 'أَنَا + أَذْهَبُ (prefix a-).', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 12, sourcePage: 25 },
      { arabic: 'أَنْتَ تَذْهَبُ', transliteration: 'anta tadhabu', english: 'You go.', explanation: 'أَنْتَ + تَذْهَبُ (prefix ta-).', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 12, sourcePage: 25 }
    ],
    practiceExercises: [
      { id: 'm12-ex1', question: 'Which prefix is used for "I" (first person singular)?', options: ['أـ', 'تـ', 'يـ'], correctAnswer: 'أـ', type: 'multiple-choice', verified: false, approved: false }
    ],
    quizQuestions: ['q-minhaj-placeholder'],
    sourceBook: 'Minhaj-ul-Arabia',
    sourcePart: 'Part 1',
    sourceLesson: 12,
    sourcePage: 25,
    verified: false,
    approved: false
  },
  {
    id: 'minhaj-13',
    pathId: 'minhaj',
    lessonNumber: 13,
    title: 'Yes/No Questions',
    description: 'Learn interrogative particles for binary questions.',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    explanation: 'Lesson 13 covers the interrogative prefixes and particles: "أَ" (a-) and "هَلْ" (hal). Both mean "Is...?" or "Does...?" and require a binary Yes/No response.',
    examples: [
      { arabic: 'هَلْ أَنْتَ مُسْلِمٌ؟', transliteration: 'hal anta muslimun?', english: 'Are you a Muslim?', explanation: 'هَلْ (interrogative) + pronoun + noun.', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 13, sourcePage: 27 },
      { arabic: 'نَعَمْ، أَنَا مُسْلِمٌ', transliteration: 'na\'am, ana muslimun', english: 'Yes, I am a Muslim.', explanation: 'نَعَمْ (yes) + statement.', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 13, sourcePage: 27 }
    ],
    practiceExercises: [
      { id: 'm13-ex1', question: 'What does "لَا" mean in responses?', options: ['Yes', 'No', 'Rather'], correctAnswer: 'No', type: 'multiple-choice', verified: false, approved: false }
    ],
    quizQuestions: ['q-minhaj-placeholder'],
    sourceBook: 'Minhaj-ul-Arabia',
    sourcePart: 'Part 1',
    sourceLesson: 13,
    sourcePage: 27,
    verified: false,
    approved: false
  },
  {
    id: 'minhaj-14',
    pathId: 'minhaj',
    lessonNumber: 14,
    title: 'Feminine Gender Rules',
    description: 'Learn feminine nouns, adjectives, and pronouns.',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    explanation: 'Lesson 14 introduces the feminine singular gender (المؤنث), which typically ends with a Ta Marbutah (ة), and its matching demonstratives: "هَذِهِ" (this) and "تِلْكَ" (that).',
    examples: [
      { arabic: 'هَذِهِ بِنْتٌ', transliteration: 'hadhihi bintun', english: 'This is a girl.', explanation: 'هَذِهِ (feminine near demonstrative) + بِنْتٌ (feminine noun).', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 14, sourcePage: 29 },
      { arabic: 'تِلْكَ طَبِيبَةٌ', transliteration: 'tilka tabibatun', english: 'That is a female doctor.', explanation: 'تِلْكَ (feminine far demonstrative) + طَبِيبَةٌ (Ta Marbutah ending).', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 14, sourcePage: 29 }
    ],
    practiceExercises: [
      { id: 'm14-ex1', question: 'Which demonstrative is the feminine equivalent of "هَذَا"?', options: ['ذَلِكَ', 'تِلْكَ', 'هَذِهِ'], correctAnswer: 'هَذِهِ', type: 'multiple-choice', verified: false, approved: false }
    ],
    quizQuestions: ['q-minhaj-placeholder'],
    sourceBook: 'Minhaj-ul-Arabia',
    sourcePart: 'Part 1',
    sourceLesson: 14,
    sourcePage: 29,
    verified: false,
    approved: false
  },
  {
    id: 'minhaj-15',
    pathId: 'minhaj',
    lessonNumber: 15,
    title: 'Dual Nouns',
    description: 'Learn how to form dual count nouns.',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    explanation: 'Lesson 15 teaches the dual form (المثنى) in the nominative case. It is formed by adding the suffix "ـَانِ" (ani) to singular masculine and feminine nouns.',
    examples: [
      { arabic: 'كِتَابَانِ', transliteration: 'kitabani', english: 'Two books', explanation: 'كِتَابٌ (singular) + ـَانِ (dual suffix).', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 15, sourcePage: 31 },
      { arabic: 'وَلَدَانِ', transliteration: 'waladani', english: 'Two boys', explanation: 'وَلَدٌ + ـَانِ.', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 15, sourcePage: 31 }
    ],
    practiceExercises: [
      { id: 'm15-ex1', question: 'What suffix is added to a singular noun to make it dual?', options: ['ـوُنَ', 'ـَانِ', 'ـَاتٌ'], correctAnswer: 'ـَانِ', type: 'multiple-choice', verified: false, approved: false }
    ],
    quizQuestions: ['q-minhaj-placeholder'],
    sourceBook: 'Minhaj-ul-Arabia',
    sourcePart: 'Part 1',
    sourceLesson: 15,
    sourcePage: 31,
    verified: false,
    approved: false
  },
  {
    id: 'minhaj-16',
    pathId: 'minhaj',
    lessonNumber: 16,
    title: 'Sound Masculine Plural',
    description: 'Learn regular masculine plurals in the nominative case.',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    explanation: 'Lesson 16 introduces the Sound Masculine Plural (جمع المذكر السالم) using the suffix "ـوُنَ" (una) and the plural demonstrative "هَؤُلَاءِ" (these).',
    examples: [
      { arabic: 'مُسْلِمُونَ', transliteration: 'muslimuna', english: 'Muslims', explanation: 'مُسْلِمٌ + ـوُنَ.', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 16, sourcePage: 33 }
    ],
    practiceExercises: [
      { id: 'm16-ex1', question: 'What plural demonstrative pronoun is used for "these"?', options: ['هَذِهِ', 'هَؤُلَاءِ', 'تِلْكَ'], correctAnswer: 'هَؤُلَاءِ', type: 'multiple-choice', verified: false, approved: false }
    ],
    quizQuestions: ['q-minhaj-placeholder'],
    sourceBook: 'Minhaj-ul-Arabia',
    sourcePart: 'Part 1',
    sourceLesson: 16,
    sourcePage: 33,
    verified: false,
    approved: false
  },
  {
    id: 'minhaj-17',
    pathId: 'minhaj',
    lessonNumber: 17,
    title: 'Broken Plurals',
    description: 'Learn broken plural patterns for inanimate objects.',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    explanation: 'Lesson 17 covers Broken Plurals (جمع التكسير) for non-rational/inanimate nouns. In Arabic grammar, non-rational plurals are treated as singular feminine.',
    examples: [
      { arabic: 'كُتُبٌ', transliteration: 'kutubun', english: 'Books', explanation: 'Broken plural of كِتَابٌ.', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 17, sourcePage: 35 },
      { arabic: 'أَقْلَامٌ', transliteration: 'aqlamun', english: 'Pens', explanation: 'Broken plural of قَلَمٌ.', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 17, sourcePage: 35 }
    ],
    practiceExercises: [
      { id: 'm17-ex1', question: 'How are plural non-rational objects treated grammatically?', options: ['Masculine Plural', 'Feminine Singular', 'Dual Masculine'], correctAnswer: 'Feminine Singular', type: 'multiple-choice', verified: false, approved: false }
    ],
    quizQuestions: ['q-minhaj-placeholder'],
    sourceBook: 'Minhaj-ul-Arabia',
    sourcePart: 'Part 1',
    sourceLesson: 17,
    sourcePage: 35,
    verified: false,
    approved: false
  },
  {
    id: 'minhaj-18',
    pathId: 'minhaj',
    lessonNumber: 18,
    title: 'Possessives with Attached Pronouns',
    description: 'Combine Idafah structures with attached pronouns.',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    explanation: 'Lesson 18 reinforces the Idafah possessive structure combined with attached pronouns (e.g. "my mother", "his book").',
    examples: [
      { arabic: 'أُمِّي', transliteration: 'ummi', english: 'My mother', explanation: 'أُمّ + ـِي.', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 18, sourcePage: 37 },
      { arabic: 'أَبُوكَ', transliteration: 'abuka', english: 'Your father', explanation: 'أَب + ـكَ (with extra connecting Waw).', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 18, sourcePage: 37 }
    ],
    practiceExercises: [
      { id: 'm18-ex1', question: 'What does "أَبُوكَ" mean?', options: ['My father', 'Your father', 'His father'], correctAnswer: 'Your father', type: 'multiple-choice', verified: false, approved: false }
    ],
    quizQuestions: ['q-minhaj-placeholder'],
    sourceBook: 'Minhaj-ul-Arabia',
    sourcePart: 'Part 1',
    sourceLesson: 18,
    sourcePage: 37,
    verified: false,
    approved: false
  },
  {
    id: 'minhaj-19',
    pathId: 'minhaj',
    lessonNumber: 19,
    title: 'Expressing Ownership',
    description: 'Use prepositions to express "to have".',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    explanation: 'Lesson 19 teaches how to express ownership in Arabic using the preposition "لِـ" (to/for) and "عِنْدَ" (with) combined with attached pronouns.',
    examples: [
      { arabic: 'لِي', transliteration: 'li', english: 'I have / To me belongs', explanation: 'لِـ + ـِي.', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 19, sourcePage: 39 },
      { arabic: 'عِنْدِي', transliteration: '‘indi', english: 'I have / With me is', explanation: 'عِنْدَ + ـِي.', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 19, sourcePage: 39 }
    ],
    practiceExercises: [
      { id: 'm19-ex1', question: 'How do you say "He has" in Arabic?', options: ['لِي', 'لَكَ', 'لَهُ'], correctAnswer: 'لَهُ', type: 'multiple-choice', verified: false, approved: false }
    ],
    quizQuestions: ['q-minhaj-placeholder'],
    sourceBook: 'Minhaj-ul-Arabia',
    sourcePart: 'Part 1',
    sourceLesson: 19,
    sourcePage: 39,
    verified: false,
    approved: false
  },
  {
    id: 'minhaj-20',
    pathId: 'minhaj',
    lessonNumber: 20,
    title: 'Imperative Verbs (Commands)',
    description: 'Learn how to form simple direct positive commands.',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    explanation: 'Lesson 20 introduces the imperative verb (فعل الأمر) used to give commands to a 2nd person singular masculine listener.',
    examples: [
      { arabic: 'اِقْرَأْ', transliteration: 'iqra\'', english: 'Read!', explanation: 'Command form of reading.', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 20, sourcePage: 41 },
      { arabic: 'اُكْتُبْ', transliteration: 'uktub', english: 'Write!', explanation: 'Command form of writing.', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 20, sourcePage: 41 }
    ],
    practiceExercises: [
      { id: 'm20-ex1', question: 'What is the command to "Go!" in Arabic?', options: ['اِذْهَبْ', 'اِقْرَأْ', 'اُكْتُبْ'], correctAnswer: 'اِذْهَبْ', type: 'multiple-choice', verified: false, approved: false }
    ],
    quizQuestions: ['q-minhaj-placeholder'],
    sourceBook: 'Minhaj-ul-Arabia',
    sourcePart: 'Part 1',
    sourceLesson: 20,
    sourcePage: 41,
    verified: false,
    approved: false
  },
  {
    id: 'minhaj-21',
    pathId: 'minhaj',
    lessonNumber: 21,
    title: 'Prohibitive Verbs (Negative Commands)',
    description: 'Learn how to tell someone not to do an action.',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    explanation: 'Lesson 21 teaches the prohibitive verb (النهي) using the particle "لَا" followed by the jussive present tense verb.',
    examples: [
      { arabic: 'لَا تَذْهَبْ', transliteration: 'la tadhab', english: 'Do not go!', explanation: 'لَا + present tense jussive.', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 21, sourcePage: 43 },
      { arabic: 'لَا تَكْتُبْ', transliteration: 'la taktub', english: 'Do not write!', explanation: 'لَا + present tense jussive.', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 21, sourcePage: 43 }
    ],
    practiceExercises: [
      { id: 'm21-ex1', question: 'How do you say "Don\'t laugh!" in Arabic?', options: ['لَا تَضْحَكْ', 'اِضْحَكْ', 'لَا تَذْهَبْ'], correctAnswer: 'لَا تَضْحَكْ', type: 'multiple-choice', verified: false, approved: false }
    ],
    quizQuestions: ['q-minhaj-placeholder'],
    sourceBook: 'Minhaj-ul-Arabia',
    sourcePart: 'Part 1',
    sourceLesson: 21,
    sourcePage: 43,
    verified: false,
    approved: false
  },
  {
    id: 'minhaj-22',
    pathId: 'minhaj',
    lessonNumber: 22,
    title: 'Simple Past Tense Verbs',
    description: 'Learn basic third-person singular past actions.',
    estimatedTime: '10 mins',
    difficulty: 'Beginner',
    explanation: 'Lesson 22 introduces simple past tense verbs (الفعل الماضي) for singular third-person masculine actions.',
    examples: [
      { arabic: 'ذَهَبَ', transliteration: 'dhahaba', english: 'He went', explanation: 'Past tense singular masculine root.', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 22, sourcePage: 45 },
      { arabic: 'كَتَبَ', transliteration: 'kataba', english: 'He wrote', explanation: 'Past tense singular masculine root.', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 22, sourcePage: 45 }
    ],
    practiceExercises: [
      { id: 'm22-ex1', question: 'What is the meaning of "قَرَأَ"?', options: ['He wrote', 'He read', 'He went'], correctAnswer: 'He read', type: 'multiple-choice', verified: false, approved: false }
    ],
    quizQuestions: ['q-minhaj-placeholder'],
    sourceBook: 'Minhaj-ul-Arabia',
    sourcePart: 'Part 1',
    sourceLesson: 22,
    sourcePage: 45,
    verified: false,
    approved: false
  },
  {
    id: 'minhaj-23',
    pathId: 'minhaj',
    lessonNumber: 23,
    title: 'Conjugating Past Tense',
    description: 'Conjugate past verbs for self, you, and he.',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    explanation: 'Lesson 23 outlines past tense conjugation suffixes for singular pronouns: "ذَهَبْتُ" (I went), "ذَهَبْتَ" (You went), and "ذَهَبَ" (He went).',
    examples: [
      { arabic: 'ذَهَبْتُ', transliteration: 'dhahabtu', english: 'I went', explanation: 'Suffix -tu for first person.', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 23, sourcePage: 47 },
      { arabic: 'ذَهَبْتَ', transliteration: 'dhahabta', english: 'You went', explanation: 'Suffix -ta for second person masculine.', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 23, sourcePage: 47 }
    ],
    practiceExercises: [
      { id: 'm23-ex1', question: 'What suffix is added to a past tense verb for "I"?', options: ['ـتَ', 'ـتُ', 'ـتِ'], correctAnswer: 'ـتُ', type: 'multiple-choice', verified: false, approved: false }
    ],
    quizQuestions: ['q-minhaj-placeholder'],
    sourceBook: 'Minhaj-ul-Arabia',
    sourcePart: 'Part 1',
    sourceLesson: 23,
    sourcePage: 47,
    verified: false,
    approved: false
  },
  {
    id: 'minhaj-24',
    pathId: 'minhaj',
    lessonNumber: 24,
    title: 'Expressing Past States: كَانَ',
    description: 'Learn auxiliary expression "was" in sentences.',
    estimatedTime: '12 mins',
    difficulty: 'Beginner',
    explanation: 'Lesson 24 teaches the auxiliary/copula expression "كَانَ" (was). Note that كَانَ places the predicate (Khabar) into the accusative case (Mansub - ending with Fathatayn).',
    examples: [
      { arabic: 'كَانَ الْوَلَدُ صَالِحًا', transliteration: 'kana-l-waladu salihan', english: 'The boy was righteous.', explanation: 'كَانَ + subject + predicate in accusative (صَالِحًا).', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 24, sourcePage: 49 }
    ],
    practiceExercises: [
      { id: 'm24-ex1', question: 'Which case does the predicate of كَانَ take?', options: ['Nominative (Marfu)', 'Accusative (Mansub)', 'Genitive (Majrur)'], correctAnswer: 'Accusative (Mansub)', type: 'multiple-choice', verified: false, approved: false }
    ],
    quizQuestions: ['q-minhaj-placeholder'],
    sourceBook: 'Minhaj-ul-Arabia',
    sourcePart: 'Part 1',
    sourceLesson: 24,
    sourcePage: 49,
    verified: false,
    approved: false
  },
  {
    id: 'minhaj-25',
    pathId: 'minhaj',
    lessonNumber: 25,
    title: 'Comprehensive Consolidation',
    description: 'Consolidate and review all Part 1 concepts.',
    estimatedTime: '15 mins',
    difficulty: 'Beginner',
    explanation: 'Lesson 25 provides a comprehensive review of all grammatical rules, nouns, pronouns, prepositions, and verbs covered in Minhaj-ul-Arabia Part 1.',
    examples: [
      { arabic: 'الْإِسْلَامُ دِينٌ سَهْلٌ', transliteration: 'al-islamu dinun sahlun', english: 'Islam is an easy religion.', explanation: 'Nominal sentence with adjective agreement.', verified: false, approved: false, sourceBook: 'Minhaj-ul-Arabia', sourcePart: 'Part 1', sourceLesson: 25, sourcePage: 51 }
    ],
    practiceExercises: [
      { id: 'm25-ex1', question: 'Translate to Arabic: "The book is easy."', options: ['الْكِتَابُ سَهْلٌ', 'كِتَابٌ سَهْلٌ', 'الْكِتَابُ جَدِيدٌ'], correctAnswer: 'الْكِتَابُ سَهْلٌ', type: 'multiple-choice', verified: false, approved: false }
    ],
    quizQuestions: ['q-minhaj-placeholder'],
    sourceBook: 'Minhaj-ul-Arabia',
    sourcePart: 'Part 1',
    sourceLesson: 25,
    sourcePage: 51,
    verified: false,
    approved: false
  }
];
