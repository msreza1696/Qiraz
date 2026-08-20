import { QuranVerse } from '../types';

export const fatihahVerses: QuranVerse[] = [
  {
    id: '1:1',
    verseNumber: 1,
    arabic: {
      id: 'quran-1-1-ar',
      sourceName: 'Project Owner Registry',
      sourceType: 'QuranText',
      reference: 'Surah Al-Fatihah 1:1',
      exactText: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
      language: 'ar',
      approved: false,
      notes: 'Awaiting project owner import/verification.'
    },
    translation: {
      id: 'quran-1-1-tr',
      sourceName: 'Project Owner Registry',
      sourceType: 'Translation',
      reference: 'Surah Al-Fatihah 1:1',
      exactText: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.',
      language: 'en',
      approved: false,
      notes: 'Awaiting project owner import/verification.'
    },
    words: [
      {
        wordId: '1-1-1',
        arabic: 'بِسْمِ',
        transliteration: 'Bismi',
        translation: { id: 'qw-1-1-1-tr', sourceName: 'Linguistic Registry', sourceType: 'Translation', reference: '1:1:1', exactText: 'In the name of', language: 'en', approved: false },
        grammar: { id: 'qw-1-1-1-gr', sourceName: 'Linguistic Registry', sourceType: 'Linguistic', reference: '1:1:1', exactText: 'Preposition + Noun', language: 'en', approved: false }
      },
      {
        wordId: '1-1-2',
        arabic: 'اللَّهِ',
        transliteration: 'Allāhi',
        translation: { id: 'qw-1-1-2-tr', sourceName: 'Linguistic Registry', sourceType: 'Translation', reference: '1:1:2', exactText: 'Allah', language: 'en', approved: false },
        grammar: { id: 'qw-1-1-2-gr', sourceName: 'Linguistic Registry', sourceType: 'Linguistic', reference: '1:1:2', exactText: 'Proper Noun', language: 'en', approved: false }
      },
      {
        wordId: '1-1-3',
        arabic: 'الرَّحْمَٰنِ',
        transliteration: 'ar-Raḥmāni',
        translation: { id: 'qw-1-1-3-tr', sourceName: 'Linguistic Registry', sourceType: 'Translation', reference: '1:1:3', exactText: 'the Entirely Merciful', language: 'en', approved: false },
        grammar: { id: 'qw-1-1-3-gr', sourceName: 'Linguistic Registry', sourceType: 'Linguistic', reference: '1:1:3', exactText: 'Adjective (derived from root r-h-m)', language: 'en', approved: false }
      },
      {
        wordId: '1-1-4',
        arabic: 'الرَّحِيمِ',
        transliteration: 'ar-Raḥīmi',
        translation: { id: 'qw-1-1-4-tr', sourceName: 'Linguistic Registry', sourceType: 'Translation', reference: '1:1:4', exactText: 'the Especially Merciful', language: 'en', approved: false },
        grammar: { id: 'qw-1-1-4-gr', sourceName: 'Linguistic Registry', sourceType: 'Linguistic', reference: '1:1:4', exactText: 'Adjective (derived from root r-h-m)', language: 'en', approved: false }
      }
    ],
    vocabularyIds: ['vocab-allah', 'vocab-rahmah'],
    grammarNotes: []
  },
  {
    id: '1:2',
    verseNumber: 2,
    arabic: {
      id: 'quran-1-2-ar',
      sourceName: 'Project Owner Registry',
      sourceType: 'QuranText',
      reference: 'Surah Al-Fatihah 1:2',
      exactText: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
      language: 'ar',
      approved: false,
      notes: 'Awaiting project owner import/verification.'
    },
    translation: {
      id: 'quran-1-2-tr',
      sourceName: 'Project Owner Registry',
      sourceType: 'Translation',
      reference: 'Surah Al-Fatihah 1:2',
      exactText: '[All] praise is [due] to Allah, Lord of the worlds.',
      language: 'en',
      approved: false,
      notes: 'Awaiting project owner import/verification.'
    },
    words: [
      {
        wordId: '1-2-1',
        arabic: 'الْحَمْدُ',
        transliteration: 'al-Ḥamdu',
        translation: { id: 'qw-1-2-1-tr', sourceName: 'Linguistic Registry', sourceType: 'Translation', reference: '1:2:1', exactText: 'All praise', language: 'en', approved: false },
        grammar: { id: 'qw-1-2-1-gr', sourceName: 'Linguistic Registry', sourceType: 'Linguistic', reference: '1:2:1', exactText: 'Definite Noun (Ism) - Root h-m-d', language: 'en', approved: false }
      },
      {
        wordId: '1-2-2',
        arabic: 'لِلَّهِ',
        transliteration: 'lillāhi',
        translation: { id: 'qw-1-2-2-tr', sourceName: 'Linguistic Registry', sourceType: 'Translation', reference: '1:2:2', exactText: 'to Allah', language: 'en', approved: false },
        grammar: { id: 'qw-1-2-2-gr', sourceName: 'Linguistic Registry', sourceType: 'Linguistic', reference: '1:2:2', exactText: 'Preposition + Noun', language: 'en', approved: false }
      },
      {
        wordId: '1-2-3',
        arabic: 'رَبِّ',
        transliteration: 'Rabbi',
        translation: { id: 'qw-1-2-3-tr', sourceName: 'Linguistic Registry', sourceType: 'Translation', reference: '1:2:3', exactText: 'Lord / Sustainer', language: 'en', approved: false },
        grammar: { id: 'qw-1-2-3-gr', sourceName: 'Linguistic Registry', sourceType: 'Linguistic', reference: '1:2:3', exactText: 'Noun - Root r-b-b. Mudaf (possessed)', language: 'en', approved: false }
      },
      {
        wordId: '1-2-4',
        arabic: 'الْعَالَمِينَ',
        transliteration: 'al-ʿālamīna',
        translation: { id: 'qw-1-2-4-tr', sourceName: 'Linguistic Registry', sourceType: 'Translation', reference: '1:2:4', exactText: 'of the worlds', language: 'en', approved: false },
        grammar: { id: 'qw-1-2-4-gr', sourceName: 'Linguistic Registry', sourceType: 'Linguistic', reference: '1:2:4', exactText: 'Noun (plural) - Mudaf Ilayh (possessor). Root ‘-l-m', language: 'en', approved: false }
      }
    ],
    vocabularyIds: ['vocab-allah', 'vocab-rabb'],
    grammarNotes: []
  },
  {
    id: '1:3',
    verseNumber: 3,
    arabic: {
      id: 'quran-1-3-ar',
      sourceName: 'Project Owner Registry',
      sourceType: 'QuranText',
      reference: 'Surah Al-Fatihah 1:3',
      exactText: 'الرَّحْمَٰنِ الرَّحِيمِ',
      language: 'ar',
      approved: false,
      notes: 'Awaiting project owner import/verification.'
    },
    translation: {
      id: 'quran-1-3-tr',
      sourceName: 'Project Owner Registry',
      sourceType: 'Translation',
      reference: 'Surah Al-Fatihah 1:3',
      exactText: 'The Entirely Merciful, the Especially Merciful.',
      language: 'en',
      approved: false,
      notes: 'Awaiting project owner import/verification.'
    },
    words: [
      {
        wordId: '1-3-1',
        arabic: 'الرَّحْمَٰنِ',
        transliteration: 'ar-Raḥmāni',
        translation: { id: 'qw-1-3-1-tr', sourceName: 'Linguistic Registry', sourceType: 'Translation', reference: '1:3:1', exactText: 'the Entirely Merciful', language: 'en', approved: false },
        grammar: { id: 'qw-1-3-1-gr', sourceName: 'Linguistic Registry', sourceType: 'Linguistic', reference: '1:3:1', exactText: 'Adjective - Root r-h-m', language: 'en', approved: false }
      },
      {
        wordId: '1-3-2',
        arabic: 'الرَّحِيمِ',
        transliteration: 'ar-Raḥīmi',
        translation: { id: 'qw-1-3-2-tr', sourceName: 'Linguistic Registry', sourceType: 'Translation', reference: '1:3:2', exactText: 'the Especially Merciful', language: 'en', approved: false },
        grammar: { id: 'qw-1-3-2-gr', sourceName: 'Linguistic Registry', sourceType: 'Linguistic', reference: '1:3:2', exactText: 'Adjective - Root r-h-m', language: 'en', approved: false }
      }
    ],
    vocabularyIds: ['vocab-rahmah'],
    grammarNotes: []
  },
  {
    id: '1:4',
    verseNumber: 4,
    arabic: {
      id: 'quran-1-4-ar',
      sourceName: 'Project Owner Registry',
      sourceType: 'QuranText',
      reference: 'Surah Al-Fatihah 1:4',
      exactText: 'مَالِكِ يَوْمِ الدِّينِ',
      language: 'ar',
      approved: false,
      notes: 'Awaiting project owner import/verification.'
    },
    translation: {
      id: 'quran-1-4-tr',
      sourceName: 'Project Owner Registry',
      sourceType: 'Translation',
      reference: 'Surah Al-Fatihah 1:4',
      exactText: 'Sovereign of the Day of Recompense.',
      language: 'en',
      approved: false,
      notes: 'Awaiting project owner import/verification.'
    },
    words: [
      {
        wordId: '1-4-1',
        arabic: 'مَالِكِ',
        transliteration: 'Māliki',
        translation: { id: 'qw-1-4-1-tr', sourceName: 'Linguistic Registry', sourceType: 'Translation', reference: '1:4:1', exactText: 'Master / Owner', language: 'en', approved: false },
        grammar: { id: 'qw-1-4-1-gr', sourceName: 'Linguistic Registry', sourceType: 'Linguistic', reference: '1:4:1', exactText: 'Noun - Mudaf. Root m-l-k', language: 'en', approved: false }
      },
      {
        wordId: '1-4-2',
        arabic: 'يَوْمِ',
        transliteration: 'Yawmi',
        translation: { id: 'qw-1-4-2-tr', sourceName: 'Linguistic Registry', sourceType: 'Translation', reference: '1:4:2', exactText: 'Day of', language: 'en', approved: false },
        grammar: { id: 'qw-1-4-2-gr', sourceName: 'Linguistic Registry', sourceType: 'Linguistic', reference: '1:4:2', exactText: 'Noun - Mudaf Ilayh and Mudaf. Root y-w-m', language: 'en', approved: false }
      },
      {
        wordId: '1-4-3',
        arabic: 'الدِّينِ',
        transliteration: 'ad-Dīni',
        translation: { id: 'qw-1-4-3-tr', sourceName: 'Linguistic Registry', sourceType: 'Translation', reference: '1:4:3', exactText: 'the Judgement / Religion', language: 'en', approved: false },
        grammar: { id: 'qw-1-4-3-gr', sourceName: 'Linguistic Registry', sourceType: 'Linguistic', reference: '1:4:3', exactText: 'Definite Noun - Mudaf Ilayh. Root d-y-n', language: 'en', approved: false }
      }
    ],
    vocabularyIds: ['vocab-deen', 'vocab-yawm'],
    grammarNotes: []
  },
  {
    id: '1:5',
    verseNumber: 5,
    arabic: {
      id: 'quran-1-5-ar',
      sourceName: 'Project Owner Registry',
      sourceType: 'QuranText',
      reference: 'Surah Al-Fatihah 1:5',
      exactText: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
      language: 'ar',
      approved: false,
      notes: 'Awaiting project owner import/verification.'
    },
    translation: {
      id: 'quran-1-5-tr',
      sourceName: 'Project Owner Registry',
      sourceType: 'Translation',
      reference: 'Surah Al-Fatihah 1:5',
      exactText: 'It is You we worship and You we ask for help.',
      language: 'en',
      approved: false,
      notes: 'Awaiting project owner import/verification.'
    },
    words: [
      {
        wordId: '1-5-1',
        arabic: 'إِيَّاكَ',
        transliteration: 'Iyyāka',
        translation: { id: 'qw-1-5-1-tr', sourceName: 'Linguistic Registry', sourceType: 'Translation', reference: '1:5:1', exactText: 'You alone', language: 'en', approved: false },
        grammar: { id: 'qw-1-5-1-gr', sourceName: 'Linguistic Registry', sourceType: 'Linguistic', reference: '1:5:1', exactText: 'Detached Accusative Pronoun', language: 'en', approved: false }
      },
      {
        wordId: '1-5-2',
        arabic: 'نَعْبُدُ',
        transliteration: 'naʿbudu',
        translation: { id: 'qw-1-5-2-tr', sourceName: 'Linguistic Registry', sourceType: 'Translation', reference: '1:5:2', exactText: 'we worship', language: 'en', approved: false },
        grammar: { id: 'qw-1-5-2-gr', sourceName: 'Linguistic Registry', sourceType: 'Linguistic', reference: '1:5:2', exactText: 'Verb (first person plural present). Root ‘-b-d', language: 'en', approved: false }
      },
      {
        wordId: '1-5-3',
        arabic: 'وَإِيَّاكَ',
        transliteration: 'wa-iyyāka',
        translation: { id: 'qw-1-5-3-tr', sourceName: 'Linguistic Registry', sourceType: 'Translation', reference: '1:5:3', exactText: 'and You alone', language: 'en', approved: false },
        grammar: { id: 'qw-1-5-3-gr', sourceName: 'Linguistic Registry', sourceType: 'Linguistic', reference: '1:5:3', exactText: 'Conjunction + Detached Accusative Pronoun', language: 'en', approved: false }
      },
      {
        wordId: '1-5-4',
        arabic: 'نَسْتَعِينُ',
        transliteration: 'nastaʿīnu',
        translation: { id: 'qw-1-5-4-tr', sourceName: 'Linguistic Registry', sourceType: 'Translation', reference: '1:5:4', exactText: 'we seek help', language: 'en', approved: false },
        grammar: { id: 'qw-1-5-4-gr', sourceName: 'Linguistic Registry', sourceType: 'Linguistic', reference: '1:5:4', exactText: 'Verb (first person plural present). Root ‘-w-n', language: 'en', approved: false }
      }
    ],
    vocabularyIds: [],
    grammarNotes: []
  },
  {
    id: '1:6',
    verseNumber: 6,
    arabic: {
      id: 'quran-1-6-ar',
      sourceName: 'Project Owner Registry',
      sourceType: 'QuranText',
      reference: 'Surah Al-Fatihah 1:6',
      exactText: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
      language: 'ar',
      approved: false,
      notes: 'Awaiting project owner import/verification.'
    },
    translation: {
      id: 'quran-1-6-tr',
      sourceName: 'Project Owner Registry',
      sourceType: 'Translation',
      reference: 'Surah Al-Fatihah 1:6',
      exactText: 'Guide us to the straight path -',
      language: 'en',
      approved: false,
      notes: 'Awaiting project owner import/verification.'
    },
    words: [
      {
        wordId: '1-6-1',
        arabic: 'اهْدِنَا',
        transliteration: 'Ihdinā',
        translation: { id: 'qw-1-6-1-tr', sourceName: 'Linguistic Registry', sourceType: 'Translation', reference: '1:6:1', exactText: 'Guide us', language: 'en', approved: false },
        grammar: { id: 'qw-1-6-1-gr', sourceName: 'Linguistic Registry', sourceType: 'Linguistic', reference: '1:6:1', exactText: 'Imperative Verb + Attached Object Pronoun. Root h-d-y', language: 'en', approved: false }
      },
      {
        wordId: '1-6-2',
        arabic: 'الصِّرَاطَ',
        transliteration: 'aṣ-Ṣirāṭa',
        translation: { id: 'qw-1-6-2-tr', sourceName: 'Linguistic Registry', sourceType: 'Translation', reference: '1:6:2', exactText: 'the path', language: 'en', approved: false },
        grammar: { id: 'qw-1-6-2-gr', sourceName: 'Linguistic Registry', sourceType: 'Linguistic', reference: '1:6:2', exactText: 'Definite Noun. Root ṣ-r-ṭ', language: 'en', approved: false }
      },
      {
        wordId: '1-6-3',
        arabic: 'الْمُسْتَقِيمَ',
        transliteration: 'al-Mustaqīma',
        translation: { id: 'qw-1-6-3-tr', sourceName: 'Linguistic Registry', sourceType: 'Translation', reference: '1:6:3', exactText: 'the straight', language: 'en', approved: false },
        grammar: { id: 'qw-1-6-3-gr', sourceName: 'Linguistic Registry', sourceType: 'Linguistic', reference: '1:6:3', exactText: 'Definite Adjective matching "al-Sirata". Root q-w-m', language: 'en', approved: false }
      }
    ],
    vocabularyIds: ['vocab-sirat'],
    grammarNotes: []
  },
  {
    id: '1:7',
    verseNumber: 7,
    arabic: {
      id: 'quran-1-7-ar',
      sourceName: 'Project Owner Registry',
      sourceType: 'QuranText',
      reference: 'Surah Al-Fatihah 1:7',
      exactText: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
      language: 'ar',
      approved: false,
      notes: 'Awaiting project owner import/verification.'
    },
    translation: {
      id: 'quran-1-7-tr',
      sourceName: 'Project Owner Registry',
      sourceType: 'Translation',
      reference: 'Surah Al-Fatihah 1:7',
      exactText: 'The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.',
      language: 'en',
      approved: false,
      notes: 'Awaiting project owner import/verification.'
    },
    words: [
      {
        wordId: '1-7-1',
        arabic: 'صِرَاطَ',
        transliteration: 'Ṣirāṭa',
        translation: { id: 'qw-1-7-1-tr', sourceName: 'Linguistic Registry', sourceType: 'Translation', reference: '1:7:1', exactText: 'Path of', language: 'en', approved: false },
        grammar: { id: 'qw-1-7-1-gr', sourceName: 'Linguistic Registry', sourceType: 'Linguistic', reference: '1:7:1', exactText: 'Noun. Mudaf. Root ṣ-r-ṭ', language: 'en', approved: false }
      },
      {
        wordId: '1-7-2',
        arabic: 'الَّذِينَ',
        transliteration: 'alladhīna',
        translation: { id: 'qw-1-7-2-tr', sourceName: 'Linguistic Registry', sourceType: 'Translation', reference: '1:7:2', exactText: 'those who', language: 'en', approved: false },
        grammar: { id: 'qw-1-7-2-gr', sourceName: 'Linguistic Registry', sourceType: 'Linguistic', reference: '1:7:2', exactText: 'Relative Pronoun (plural)', language: 'en', approved: false }
      },
      {
        wordId: '1-7-3',
        arabic: 'أَنْعَمْتَ',
        transliteration: 'anʿamta',
        translation: { id: 'qw-1-7-3-tr', sourceName: 'Linguistic Registry', sourceType: 'Translation', reference: '1:7:3', exactText: 'You favored', language: 'en', approved: false },
        grammar: { id: 'qw-1-7-3-gr', sourceName: 'Linguistic Registry', sourceType: 'Linguistic', reference: '1:7:3', exactText: 'Verb (past second person singular). Root n-ʿ-m', language: 'en', approved: false }
      },
      {
        wordId: '1-7-4',
        arabic: 'عَلَيْهِمْ',
        transliteration: 'ʿalayhim',
        translation: { id: 'qw-1-7-4-tr', sourceName: 'Linguistic Registry', sourceType: 'Translation', reference: '1:7:4', exactText: 'upon them', language: 'en', approved: false },
        grammar: { id: 'qw-1-7-4-gr', sourceName: 'Linguistic Registry', sourceType: 'Linguistic', reference: '1:7:4', exactText: 'Preposition + attached pronoun', language: 'en', approved: false }
      },
      {
        wordId: '1-7-5',
        arabic: 'غَيْرِ',
        transliteration: 'ghayri',
        translation: { id: 'qw-1-7-5-tr', sourceName: 'Linguistic Registry', sourceType: 'Translation', reference: '1:7:5', exactText: 'not of', language: 'en', approved: false },
        grammar: { id: 'qw-1-7-5-gr', sourceName: 'Linguistic Registry', sourceType: 'Linguistic', reference: '1:7:5', exactText: 'Noun / Particle. Root gh-y-r', language: 'en', approved: false }
      },
      {
        wordId: '1-7-6',
        arabic: 'الْمَغْضُوبِ',
        transliteration: 'al-maghḍūbi',
        translation: { id: 'qw-1-7-6-tr', sourceName: 'Linguistic Registry', sourceType: 'Translation', reference: '1:7:6', exactText: 'those who evoked anger', language: 'en', approved: false },
        grammar: { id: 'qw-1-7-6-gr', sourceName: 'Linguistic Registry', sourceType: 'Linguistic', reference: '1:7:6', exactText: 'Passive Noun (ism maf‘ul). Root gh-d-b', language: 'en', approved: false }
      },
      {
        wordId: '1-7-7',
        arabic: 'عَلَيْهِمْ',
        transliteration: 'ʿalayhim',
        translation: { id: 'qw-1-7-7-tr', sourceName: 'Linguistic Registry', sourceType: 'Translation', reference: '1:7:7', exactText: 'upon them', language: 'en', approved: false },
        grammar: { id: 'qw-1-7-7-gr', sourceName: 'Linguistic Registry', sourceType: 'Linguistic', reference: '1:7:7', exactText: 'Preposition + attached pronoun', language: 'en', approved: false }
      },
      {
        wordId: '1-7-8',
        arabic: 'وَلَا',
        transliteration: 'wa-lā',
        translation: { id: 'qw-1-7-8-tr', sourceName: 'Linguistic Registry', sourceType: 'Translation', reference: '1:7:8', exactText: 'and not', language: 'en', approved: false },
        grammar: { id: 'qw-1-7-8-gr', sourceName: 'Linguistic Registry', sourceType: 'Linguistic', reference: '1:7:8', exactText: 'Conjunction + negative particle', language: 'en', approved: false }
      },
      {
        wordId: '1-7-9',
        arabic: 'الضَّالِّينَ',
        transliteration: 'aḍ-ḍāllīna',
        translation: { id: 'qw-1-7-9-tr', sourceName: 'Linguistic Registry', sourceType: 'Translation', reference: '1:7:9', exactText: 'those who go astray', language: 'en', approved: false },
        grammar: { id: 'qw-1-7-9-gr', sourceName: 'Linguistic Registry', sourceType: 'Linguistic', reference: '1:7:9', exactText: 'Noun (plural active participle). Root d-l-l', language: 'en', approved: false }
      }
    ],
    vocabularyIds: ['vocab-sirat', 'vocab-dalal'],
    grammarNotes: []
  }
];
