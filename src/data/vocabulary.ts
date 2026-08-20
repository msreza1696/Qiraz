import { VocabularyWord, Lesson } from '../types';

export const vocabularyList: VocabularyWord[] = [
  { id: 'vocab-allah', arabic: 'اللَّه', transliteration: 'Allāh', meaning: 'The One True God', root: 'أ ل ه', partOfSpeech: 'Proper Noun', exampleSentence: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ', quranicOccurrence: 'Surah Al-Baqarah 2:255', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'vocab-rabb', arabic: 'رَبّ', transliteration: 'Rabb', meaning: 'Lord, Sustainer, Master', root: 'ر ب ب', partOfSpeech: 'Noun', exampleSentence: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', quranicOccurrence: 'Surah Al-Fatihah 1:2', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'vocab-rahmah', arabic: 'رَحْمَة', transliteration: 'Raḥmah', meaning: 'Mercy, Compassion', root: 'ر ح م', partOfSpeech: 'Noun', exampleSentence: 'وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ', quranicOccurrence: 'Surah Al-A\'raf 7:156', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'vocab-deen', arabic: 'دِين', transliteration: 'Dīn', meaning: 'Way of Life, Judgement, Religion', root: 'د ي ن', partOfSpeech: 'Noun', exampleSentence: 'مَالِكِ يَوْمِ الدِّينِ', quranicOccurrence: 'Surah Al-Fatihah 1:4', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'vocab-ilm', arabic: 'عِلْم', transliteration: '‘Ilm', meaning: 'Knowledge', root: 'ع ل م', partOfSpeech: 'Noun', exampleSentence: 'وَقُلْ رَبِّ زِدْنِي عِلْمًا', quranicOccurrence: 'Surah Taha 20:114', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'vocab-qalb', arabic: 'قَلْب', transliteration: 'Qalb', meaning: 'Heart', root: 'ق ل ب', partOfSpeech: 'Noun', exampleSentence: 'فِي قُلُوبِهِمْ مَرَضٌ', quranicOccurrence: 'Surah Al-Baqarah 2:10', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'vocab-nafs', arabic: 'نَفْس', transliteration: 'Nafs', meaning: 'Self, Soul', root: 'ن ف س', partOfSpeech: 'Noun (Feminine)', exampleSentence: 'كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ', quranicOccurrence: 'Surah Ali \'Imran 3:185', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'vocab-noor', arabic: 'نُور', transliteration: 'Nūr', meaning: 'Light', root: 'ن و ر', partOfSpeech: 'Noun', exampleSentence: 'اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ', quranicOccurrence: 'Surah An-Nur 24:35', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'vocab-sirat', arabic: 'صِرَاط', transliteration: 'Ṣirāṭ', meaning: 'Path, Way', root: 'ص ر ط', partOfSpeech: 'Noun', exampleSentence: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', quranicOccurrence: 'Surah Al-Fatihah 1:6', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'vocab-kitab', arabic: 'كِتَاب', transliteration: 'Kitāb', meaning: 'Book, Scripture', root: 'ك ت ب', partOfSpeech: 'Noun', exampleSentence: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ', quranicOccurrence: 'Surah Al-Baqarah 2:2', verified: true, verifiedBy: 'QIRAZ Language Board' },
  
  // General/Quranic Vocabulary words to reach 30+:
  { id: 'vocab-bait', arabic: 'بَيْت', transliteration: 'Bayt', meaning: 'House', root: 'ب ي ت', partOfSpeech: 'Noun', exampleSentence: 'فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ', quranicOccurrence: 'Surah Quraysh 106:3', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'vocab-yawm', arabic: 'يَوْم', transliteration: 'Yawm', meaning: 'Day', root: 'ي و م', partOfSpeech: 'Noun', exampleSentence: 'الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ', quranicOccurrence: 'Surah Al-Ma\'idah 5:3', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'vocab-jannah', arabic: 'جَنَّة', transliteration: 'Jannah', meaning: 'Garden, Paradise', root: 'ج ن ن', partOfSpeech: 'Noun (Feminine)', exampleSentence: 'تَجْرِي مِنْ تَحْتِهَا الْأَنْهَارُ', quranicOccurrence: 'Surah Al-Baqarah 2:25', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'vocab-ardh', arabic: 'أَرْض', transliteration: 'Arḍ', meaning: 'Earth, Land', root: 'أ ر ض', partOfSpeech: 'Noun (Feminine)', exampleSentence: 'رَبِّ السَّمَاوَاتِ وَالْأَرْضِ', quranicOccurrence: 'Surah Maryam 19:65', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'vocab-samaa', arabic: 'سَمَاء', transliteration: 'Samā\'', meaning: 'Sky, Heaven', root: 'س م و', partOfSpeech: 'Noun (Feminine)', exampleSentence: 'ثُمَّ اسْتَوَىٰ إِلَى السَّمَاءِ', quranicOccurrence: 'Surah Al-Baqarah 2:29', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'vocab-rasool', arabic: 'رَسُول', transliteration: 'Rasūl', meaning: 'Messenger', root: 'ر س ل', partOfSpeech: 'Noun', exampleSentence: 'مُحَمَّدٌ رَسُولُ اللَّهِ', quranicOccurrence: 'Surah Al-Fath 48:29', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'vocab-nabi', arabic: 'نَبِيّ', transliteration: 'Nabī', meaning: 'Prophet', root: 'ن ب أ', partOfSpeech: 'Noun', exampleSentence: 'مَا كَانَ مُحَمَّدٌ أَبَا أَحَدٍ مِنْ رِجَالِكُمْ وَلَٰكِنْ رَسُولَ اللَّهِ وَخَاتَمَ النَّبِيِّينَ', quranicOccurrence: 'Surah Al-Ahzab 33:40', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'vocab-malak', arabic: 'مَلَك', transliteration: 'Malak', meaning: 'Angel', root: 'أ ل ك', partOfSpeech: 'Noun', exampleSentence: 'وَلَوْ جَعَلْنَاهُ مَلَكًا لَجَعَلْنَاهُ رَجُلًا', quranicOccurrence: 'Surah Al-An\'am 6:9', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'vocab-qalam', arabic: 'قَلَم', transliteration: 'Qalam', meaning: 'Pen', root: 'ق ل م', partOfSpeech: 'Noun', exampleSentence: 'نْ ۚ وَالْقَلَمِ وَمَا يَسْطُرُونَ', quranicOccurrence: 'Surah Al-Qalam 68:1', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'vocab-haqq', arabic: 'حَقّ', transliteration: 'Ḥaqq', meaning: 'Truth, Reality', root: 'ح ق ق', partOfSpeech: 'Noun / Adjective', exampleSentence: 'وَقُلْ جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ', quranicOccurrence: 'Surah Al-Isra 17:81', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'vocab-baatil', arabic: 'بَاطِل', transliteration: 'Bāṭil', meaning: 'Falsehood, Void', root: 'ب ط ل', partOfSpeech: 'Noun / Adjective', exampleSentence: 'لَا تَأْكُلُوا أَمْوَالَكُمْ بَيْنَكُمْ بِالْبَاطِلِ', quranicOccurrence: 'Surah Al-Baqarah 2:188', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'vocab-insan', arabic: 'إِنْسَان', transliteration: 'Insān', meaning: 'Human being, Mankind', root: 'أ ن س', partOfSpeech: 'Noun', exampleSentence: 'خَلَقَ الْإِنْسَانَ مِنْ عَلَقٍ', quranicOccurrence: 'Surah Al-\'Alaq 96:2', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'vocab-nas', arabic: 'نَاس', transliteration: 'Nās', meaning: 'People, Mankind', root: 'ن و س', partOfSpeech: 'Noun (Plural)', exampleSentence: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ', quranicOccurrence: 'Surah An-Nas 114:1', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'vocab-huda', arabic: 'هُدَى', transliteration: 'Huda', meaning: 'Guidance', root: 'ه د ي', partOfSpeech: 'Noun', exampleSentence: 'هُدًى لِلْمُتَّقِينَ', quranicOccurrence: 'Surah Al-Baqarah 2:2', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'vocab-dalal', arabic: 'ضَلَال', transliteration: 'Ḍalāl', meaning: 'Error, Straying', root: 'ض ل ل', partOfSpeech: 'Noun', exampleSentence: 'أُولَٰئِكَ الَّذِينَ اشْتَرَوُا الضَّلَالَةَ بِالْهُدَىٰ', quranicOccurrence: 'Surah Al-Baqarah 2:16', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'vocab-khayr', arabic: 'خَيْر', transliteration: 'Khayr', meaning: 'Good, Better', root: 'خ ي ر', partOfSpeech: 'Noun / Adjective', exampleSentence: 'فَمَنْ يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ', quranicOccurrence: 'Surah Az-Zalzalah 99:7', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'vocab-sharr', arabic: 'شَرّ', transliteration: 'Sharr', meaning: 'Evil, Worse', root: 'ش ر ر', partOfSpeech: 'Noun / Adjective', exampleSentence: 'وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ', quranicOccurrence: 'Surah Al-Falaq 113:5', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'vocab-dunya', arabic: 'دُنْيَا', transliteration: 'Dunyā', meaning: 'This World, Nearest', root: 'د ن و', partOfSpeech: 'Noun (Feminine)', exampleSentence: 'فِي الدُّنْيَا وَالْآخِرَةِ', quranicOccurrence: 'Surah Al-Baqarah 2:220', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'vocab-akhira', arabic: 'آخِرَة', transliteration: 'Ākhirah', meaning: 'The Hereafter, End', root: 'أ خ ر', partOfSpeech: 'Noun (Feminine)', exampleSentence: 'وَبِالْآخِرَةِ هُمْ يُوقِنُونَ', quranicOccurrence: 'Surah Al-Baqarah 2:4', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'vocab-mowt', arabic: 'مَوْت', transliteration: 'Mawt', meaning: 'Death', root: 'م و ت', partOfSpeech: 'Noun', exampleSentence: 'الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ', quranicOccurrence: 'Surah Al-Mulk 67:2', verified: true, verifiedBy: 'QIRAZ Language Board' },
  { id: 'vocab-hayat', arabic: 'حَيَاة', transliteration: 'Ḥayāt', meaning: 'Life', root: 'ح ي ي', partOfSpeech: 'Noun (Feminine)', exampleSentence: 'وَمَا الْحَيَاةُ الدُّنْيَا إِلَّا لَعِبٌ وَلَهْوٌ', quranicOccurrence: 'Surah Al-An\'am 6:32', verified: true, verifiedBy: 'QIRAZ Language Board' }
];

export const path2Lessons: Lesson[] = [
  {
    id: 'vocabulary-01',
    pathId: 'vocabulary',
    lessonNumber: 1,
    title: 'Allah (اللَّه)',
    description: 'Learn the proper name of the Creator.',
    estimatedTime: '8 mins',
    difficulty: 'Beginner',
    explanation: 'The word "Allāh" is the proper name of God in Arabic. Morphologically, it is composed of the definite article "Al" (The) and "Ilāh" (deity), combined to mean "The One True Deity". It is the most frequent word in the Quran.',
    examples: [
      { arabic: 'اللَّهُ أَحَدٌ', transliteration: 'Allāhu Aḥad', english: 'Allah is One', explanation: 'From Surah Al-Ikhlas.', verified: true }
    ],
    practiceExercises: [
      { id: 'v1-ex1', question: 'What is the root of the word Allāh?', options: ['ر ب ب', 'أ ل ه', 'ر ح م'], correctAnswer: 'أ ل ه', type: 'multiple-choice' }
    ],
    quizQuestions: ['q-vocab-1']
  },
  {
    id: 'vocabulary-02',
    pathId: 'vocabulary',
    lessonNumber: 2,
    title: 'Rabb (رَبّ)',
    description: 'Understand the concept of Lordship and Sustainer.',
    estimatedTime: '8 mins',
    difficulty: 'Beginner',
    explanation: 'The word "Rabb" is often translated as "Lord". However, linguistically it denotes the Creator, Owner, Sustainer, Master, and Caretaker who nurtures creation step-by-step.',
    examples: [
      { arabic: 'رَبِّ الْعَالَمِينَ', transliteration: 'Rabbi al-ʿālamīn', english: 'Lord of the Worlds', explanation: 'From Surah Al-Fatihah.', verified: true }
    ],
    practiceExercises: [
      { id: 'v2-ex1', question: 'What does the word "Rabb" mean?', options: ['Lord/Sustainer', 'Mercy', 'Way/Path'], correctAnswer: 'Lord/Sustainer', type: 'multiple-choice' }
    ],
    quizQuestions: ['q-vocab-2']
  },
  {
    id: 'vocabulary-03',
    pathId: 'vocabulary',
    lessonNumber: 3,
    title: 'Rahmah (رَحْمَة)',
    description: 'Explore the concept of divine Mercy.',
    estimatedTime: '8 mins',
    difficulty: 'Beginner',
    explanation: 'The word "Raḥmah" comes from the root R-Ḥ-M, which refers to the womb, indicating protective, enveloping kindness. It means mercy, compassion, and grace.',
    examples: [
      { arabic: 'رَحْمَةُ اللَّهِ', transliteration: 'Raḥmatu Allāh', english: 'The Mercy of Allah', explanation: 'A possessive idafah construction.', verified: true }
    ],
    practiceExercises: [
      { id: 'v3-ex1', question: 'Which root is "Raḥmah" derived from?', options: ['ر ب ب', 'ر ح م', 'ع ل م'], correctAnswer: 'ر ح م', type: 'multiple-choice' }
    ],
    quizQuestions: ['q-vocab-3']
  },
  {
    id: 'vocabulary-04',
    pathId: 'vocabulary',
    lessonNumber: 4,
    title: 'Deen (دِين)',
    description: 'Learn about religion, way of life, and judgement.',
    estimatedTime: '8 mins',
    difficulty: 'Beginner',
    explanation: 'The word "Dīn" is a rich term in Quranic Arabic. It can mean religion, debt, obedience, way of life, or recompense/judgement (as in Yawm ad-Deen - Day of Judgement).',
    examples: [
      { arabic: 'يَوْمِ الدِّينِ', transliteration: 'Yawmi ad-Dīn', english: 'Day of Judgement', explanation: 'From Surah Al-Fatihah.', verified: true }
    ],
    practiceExercises: [
      { id: 'v4-ex1', question: 'What is a meaning of the word "Dīn"?', options: ['Book', 'Way of life / Judgement', 'Light'], correctAnswer: 'Way of life / Judgement', type: 'multiple-choice' }
    ],
    quizQuestions: ['q-vocab-4']
  },
  {
    id: 'vocabulary-05',
    pathId: 'vocabulary',
    lessonNumber: 5,
    title: 'Ilm (عِلْم)',
    description: 'The concept of Knowledge in the Quran.',
    estimatedTime: '8 mins',
    difficulty: 'Beginner',
    explanation: 'The word "‘Ilm" means knowledge. The Quran heavily emphasizes seeking knowledge and reflecting on signs.',
    examples: [
      { arabic: 'عِلْمٌ نَافِعٌ', transliteration: '‘Ilmun nāfi‘un', english: 'Beneficial knowledge', explanation: 'Adjective description matching.', verified: true }
    ],
    practiceExercises: [
      { id: 'v5-ex1', question: 'Translate "‘Ilm":', options: ['Heart', 'Knowledge', 'Book'], correctAnswer: 'Knowledge', type: 'multiple-choice' }
    ],
    quizQuestions: ['q-vocab-5']
  },
  {
    id: 'vocabulary-06',
    pathId: 'vocabulary',
    lessonNumber: 6,
    title: 'Qalb (قَلْب)',
    description: 'The spiritual heart and center of reflection.',
    estimatedTime: '8 mins',
    difficulty: 'Beginner',
    explanation: 'The word "Qalb" refers to the heart. In Quranic psychology, the heart is not just an organ of emotion but the center of reason, belief, and spiritual alignment.',
    examples: [
      { arabic: 'قَلْبٌ سَلِيمٌ', transliteration: 'qalbun salīmun', english: 'A sound heart', explanation: 'Desired spiritual state.', verified: true }
    ],
    practiceExercises: [
      { id: 'v6-ex1', question: 'What does "Qalb" refer to?', options: ['Soul', 'Heart', 'Mind'], correctAnswer: 'Heart', type: 'multiple-choice' }
    ],
    quizQuestions: ['q-vocab-6']
  },
  {
    id: 'vocabulary-07',
    pathId: 'vocabulary',
    lessonNumber: 7,
    title: 'Nafs (نَفْس)',
    description: 'Learn about the soul or self.',
    estimatedTime: '8 mins',
    difficulty: 'Beginner',
    explanation: 'The word "Nafs" refers to the inner self, soul, or psyche. In Arabic grammar, it is feminine and can describe various levels of spiritual development (e.g. self-accusing soul).',
    examples: [
      { arabic: 'يَا أَيَّتُهَا النَّفْسُ', transliteration: 'yā ayyatuhā an-nafs', english: 'O peaceful soul', explanation: 'From Surah Al-Fajr.', verified: true }
    ],
    practiceExercises: [
      { id: 'v7-ex1', question: 'Is the word "Nafs" grammatically masculine or feminine?', options: ['Masculine', 'Feminine'], correctAnswer: 'Feminine', type: 'multiple-choice' }
    ],
    quizQuestions: ['q-vocab-7']
  },
  {
    id: 'vocabulary-08',
    pathId: 'vocabulary',
    lessonNumber: 8,
    title: 'Noor (نُور)',
    description: 'The metaphor of Light.',
    estimatedTime: '8 mins',
    difficulty: 'Beginner',
    explanation: 'The word "Nūr" refers to light. It is used in the Quran to describe divine guidance, scriptures, and the state of believers on the Day of Judgement.',
    examples: [
      { arabic: 'نُورٌ عَلَىٰ نُورٍ', transliteration: 'nūrun ‘alā nūrin', english: 'Light upon light', explanation: 'From Surah An-Nur.', verified: true }
    ],
    practiceExercises: [
      { id: 'v8-ex1', question: 'What is the meaning of "Nūr"?', options: ['Light', 'Darkness', 'Path'], correctAnswer: 'Light', type: 'multiple-choice' }
    ],
    quizQuestions: ['q-vocab-8']
  },
  {
    id: 'vocabulary-09',
    pathId: 'vocabulary',
    lessonNumber: 9,
    title: 'Sirat (صِرَاط)',
    description: 'Learn about the path or way.',
    estimatedTime: '8 mins',
    difficulty: 'Beginner',
    explanation: 'The word "Ṣirāṭ" refers to a path or way. It is famously referenced in Al-Fatihah, requesting guidance along the Straight Path.',
    examples: [
      { arabic: 'الصِّرَاطَ الْمُسْتَقِيمَ', transliteration: 'aṣ-ṣirāṭa al-mustaqīm', english: 'The Straight Path', explanation: 'From Surah Al-Fatihah.', verified: true }
    ],
    practiceExercises: [
      { id: 'v9-ex1', question: 'Translate "Ṣirāṭ":', options: ['Book', 'Heart', 'Path/Way'], correctAnswer: 'Path/Way', type: 'multiple-choice' }
    ],
    quizQuestions: ['q-vocab-9']
  },
  {
    id: 'vocabulary-10',
    pathId: 'vocabulary',
    lessonNumber: 10,
    title: 'Kitab (كِتَاب)',
    description: 'Learn about scripture and books.',
    estimatedTime: '8 mins',
    difficulty: 'Beginner',
    explanation: 'The word "Kitāb" literally means a book or record. It comes from the root K-T-B (to write) and refers to the Quran and previous revelations.',
    examples: [
      { arabic: 'الْكِتَابُ', transliteration: 'al-kitāb', english: 'The Book', explanation: 'Definite form.', verified: true }
    ],
    practiceExercises: [
      { id: 'v10-ex1', question: 'Which root does "Kitāb" come from?', options: ['ك ت ب', 'ع ل م', 'ق ل م'], correctAnswer: 'ك ت ب', type: 'multiple-choice' }
    ],
    quizQuestions: ['q-vocab-10']
  }
];
