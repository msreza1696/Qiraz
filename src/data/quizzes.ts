import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // Foundations / Reading Questions
  {
    id: 'q-read-1',
    category: 'reading',
    type: 'multiple-choice',
    question: 'Choose the correct pronunciation for the letter: ا',
    options: ['Alif', 'Ba', 'Ta', 'Tha'],
    correctAnswer: 'Alif',
    verified: true
  },
  {
    id: 'q-read-2',
    category: 'reading',
    type: 'multiple-choice',
    question: 'Which letter represents the "b" sound?',
    options: ['ا', 'ب', 'ت', 'ث'],
    correctAnswer: 'ب',
    verified: true
  },
  {
    id: 'q-read-3',
    category: 'reading',
    type: 'multiple-choice',
    question: 'What is the initial connection shape of the letter Ta (ت)?',
    options: ['تـ', 'ـتـ', 'ـت', 'ت'],
    correctAnswer: 'تـ',
    verified: true
  },
  {
    id: 'q-read-4',
    category: 'reading',
    type: 'multiple-choice',
    question: 'Identify the medial (middle) connection shape of the letter Tha (ث):',
    options: ['ثـ', 'ـثـ', 'ـث', 'ث'],
    correctAnswer: 'ـثـ',
    verified: true
  },
  {
    id: 'q-read-5',
    category: 'reading',
    type: 'multiple-choice',
    question: 'Pronounce the letter with Fathah: بَ',
    options: ['ba', 'bi', 'bu'],
    correctAnswer: 'ba',
    verified: true
  },
  {
    id: 'q-read-6',
    category: 'reading',
    type: 'multiple-choice',
    question: 'Pronounce the letter with Dammah: بُ',
    options: ['ba', 'bi', 'bu'],
    correctAnswer: 'bu',
    verified: true
  },
  {
    id: 'q-read-7',
    category: 'reading',
    type: 'multiple-choice',
    question: 'What vowel state does Sukoon (ْ) indicate?',
    options: ['Vowel elongation', 'Absence of vowel (silent stop)', 'Doubling of sound', 'N sound ending'],
    correctAnswer: 'Absence of vowel (silent stop)',
    verified: true
  },
  {
    id: 'q-read-8',
    category: 'reading',
    type: 'multiple-choice',
    question: 'Select the correct pronunciation for: رَبَّ',
    options: ['rabba', 'raba', 'rabu'],
    correctAnswer: 'rabba',
    verified: true
  },
  {
    id: 'q-read-9',
    category: 'reading',
    type: 'multiple-choice',
    question: 'Which Tanween represents the "un" sound in بَابٌ?',
    options: ['Fathatayn (ً)', 'Kasratayn (ٍ)', 'Dammatayn (ٌ)'],
    correctAnswer: 'Dammatayn (ٌ)',
    verified: true
  },
  {
    id: 'q-read-10',
    category: 'reading',
    type: 'multiple-choice',
    question: 'Pronounce the letter with long vowel Ya: بِي',
    options: ['baa', 'bee', 'boo'],
    correctAnswer: 'bee',
    verified: true
  },
  {
    id: 'q-read-11',
    category: 'reading',
    type: 'multiple-choice',
    question: 'How is the word كَتَبَ spelled phonetically?',
    options: ['kataba', 'kitaba', 'kutuba'],
    correctAnswer: 'kataba',
    verified: true
  },
  {
    id: 'q-read-12',
    category: 'reading',
    type: 'translation-ar-en',
    question: 'What is the meaning of: كِتَابٌ',
    arabicText: 'كِتَابٌ',
    options: ['A pen', 'A house', 'A book', 'A door'],
    correctAnswer: 'A book',
    verified: true
  },
  {
    id: 'q-read-13',
    category: 'reading',
    type: 'translation-ar-en',
    question: 'Translate the phrase: هَذَا كِتَابٌ',
    arabicText: 'هَذَا كِتَابٌ',
    options: ['This is a house', 'This is a book', 'The house is beautiful'],
    correctAnswer: 'This is a book',
    verified: true
  },

  // Vocabulary Questions
  {
    id: 'q-vocab-1',
    category: 'vocabulary',
    type: 'translation-ar-en',
    question: 'Translate the word: اللَّه',
    arabicText: 'اللَّه',
    options: ['The One True God', 'The Lord', 'Mercy', 'Way of life'],
    correctAnswer: 'The One True God',
    verified: true
  },
  {
    id: 'q-vocab-2',
    category: 'vocabulary',
    type: 'translation-ar-en',
    question: 'Translate the word: رَبّ',
    arabicText: 'رَبّ',
    options: ['Prophet', 'Book', 'Lord / Sustainer', 'Day'],
    correctAnswer: 'Lord / Sustainer',
    verified: true
  },
  {
    id: 'q-vocab-3',
    category: 'vocabulary',
    type: 'translation-ar-en',
    question: 'Translate the word: رَحْمَة',
    arabicText: 'رَحْمَة',
    options: ['Mercy', 'Knowledge', 'Truth', 'Angel'],
    correctAnswer: 'Mercy',
    verified: true
  },
  {
    id: 'q-vocab-4',
    category: 'vocabulary',
    type: 'translation-ar-en',
    question: 'Translate the word: دِين',
    arabicText: 'دِين',
    options: ['Book', 'Religion / Way of life', 'Heart', 'Earth'],
    correctAnswer: 'Religion / Way of life',
    verified: true
  },
  {
    id: 'q-vocab-5',
    category: 'vocabulary',
    type: 'translation-ar-en',
    question: 'Translate the word: عِلْم',
    arabicText: 'عِلْم',
    options: ['Soul', 'Guidance', 'Knowledge', 'Light'],
    correctAnswer: 'Knowledge',
    verified: true
  },
  {
    id: 'q-vocab-6',
    category: 'vocabulary',
    type: 'translation-ar-en',
    question: 'Translate the word: قَلْب',
    arabicText: 'قَلْب',
    options: ['Heart', 'Self', 'Light', 'Path'],
    correctAnswer: 'Heart',
    verified: true
  },
  {
    id: 'q-vocab-7',
    category: 'vocabulary',
    type: 'translation-ar-en',
    question: 'Translate the word: نَفْس',
    arabicText: 'نَفْس',
    options: ['Earth', 'Soul / Self', 'Day', 'Messenger'],
    correctAnswer: 'Soul / Self',
    verified: true
  },
  {
    id: 'q-vocab-8',
    category: 'vocabulary',
    type: 'translation-ar-en',
    question: 'Translate the word: نُور',
    arabicText: 'نُور',
    options: ['Light', 'Guidance', 'Garden', 'Truth'],
    correctAnswer: 'Light',
    verified: true
  },
  {
    id: 'q-vocab-9',
    category: 'vocabulary',
    type: 'translation-ar-en',
    question: 'Translate the word: صِرَاط',
    arabicText: 'صِرَاط',
    options: ['Book', 'Way / Path', 'Lord', 'Mercy'],
    correctAnswer: 'Way / Path',
    verified: true
  },
  {
    id: 'q-vocab-10',
    category: 'vocabulary',
    type: 'translation-ar-en',
    question: 'Translate the word: كِتَاب',
    arabicText: 'كِتَاب',
    options: ['Pen', 'Book', 'House', 'People'],
    correctAnswer: 'Book',
    verified: true
  },

  // Grammar Questions
  {
    id: 'q-gram-1',
    category: 'grammar',
    type: 'grammar-id',
    question: 'What is the grammatical category of "كَتَبَ" (He wrote)?',
    arabicText: 'كَتَبَ',
    options: ['Ism (Noun)', 'Fi\'l (Verb)', 'Harf (Particle)'],
    correctAnswer: 'Fi\'l (Verb)',
    verified: true
  },
  {
    id: 'q-gram-2',
    category: 'grammar',
    type: 'grammar-id',
    question: 'What is the grammatical category of "كِتَابٌ" (A book)?',
    arabicText: 'كِتَابٌ',
    options: ['Ism (Noun)', 'Fi\'l (Verb)', 'Harf (Particle)'],
    correctAnswer: 'Ism (Noun)',
    verified: true
  },
  {
    id: 'q-gram-3',
    category: 'grammar',
    type: 'multiple-choice',
    question: 'Which detached pronoun represents "He"?',
    options: ['هُوَ', 'هِيَ', 'أَنَا', 'أَنْتَ'],
    correctAnswer: 'هُوَ',
    verified: true
  },
  {
    id: 'q-gram-4',
    category: 'grammar',
    type: 'multiple-choice',
    question: 'Which detached pronoun represents "I"?',
    options: ['أَنَا', 'أَنْتَ', 'هُوَ', 'هِيَ'],
    correctAnswer: 'أَنَا',
    verified: true
  },
  {
    id: 'q-gram-5',
    category: 'grammar',
    type: 'multiple-choice',
    question: 'Is the word "مُعَلِّمَةٌ" (Teacher) masculine or feminine?',
    options: ['Masculine', 'Feminine'],
    correctAnswer: 'Feminine',
    verified: true
  },
  {
    id: 'q-gram-6',
    category: 'grammar',
    type: 'multiple-choice',
    question: 'What is the plural form of the word "مُسْلِمٌ"?',
    options: ['مُسْلِمُونَ', 'مُسْلِمَات', 'مُسْلِمَيْنِ'],
    correctAnswer: 'مُسْلِمُونَ',
    verified: true
  },
  {
    id: 'q-gram-7',
    category: 'grammar',
    type: 'multiple-choice',
    question: 'Select the definite form of: بَيْتٌ',
    options: ['بَيْتُ', 'الْبَيْتُ', 'الْبَيْتٌ', 'بَيْتَانِ'],
    correctAnswer: 'الْبَيْتُ',
    verified: true
  },
  {
    id: 'q-gram-8',
    category: 'grammar',
    type: 'multiple-choice',
    question: 'Identify the Khabar (predicate) in: الْكِتَابُ جَدِيدٌ (The book is new)',
    options: ['الْكِتَابُ', 'جَدِيدٌ'],
    correctAnswer: 'جَدِيدٌ',
    verified: true
  },
  {
    id: 'q-gram-9',
    category: 'grammar',
    type: 'multiple-choice',
    question: 'What kind of sentence is "كَتَبَ الْوَلَدُ"?',
    options: ['Jumlah Ismiyyah (Nominal)', 'Jumlah Fi‘liyyah (Verbal)'],
    correctAnswer: 'Jumlah Fi‘liyyah (Verbal)',
    verified: true
  },
  {
    id: 'q-gram-10',
    category: 'grammar',
    type: 'multiple-choice',
    question: 'In the possessive construction "كِتَابُ اللَّهِ" (The Book of Allah), which word is the Mudāf?',
    options: ['كِتَابُ', 'اللَّهِ'],
    correctAnswer: 'كِتَابُ',
    verified: true
  },
  {
    id: 'q-gram-11',
    category: 'grammar',
    type: 'multiple-choice',
    question: 'Identify the Sifah (adjective) in: الْكِتَابُ الْكَبِيرُ (The big book)',
    options: ['الْكِتَابُ', 'الْكَبِيرُ'],
    correctAnswer: 'الْكَبِيرُ',
    verified: true
  },
  {
    id: 'q-gram-12',
    category: 'grammar',
    type: 'translation-ar-en',
    question: 'What is the meaning of the conjugated verb: كَتَبْتُ',
    arabicText: 'كَتَبْتُ',
    options: ['He wrote', 'She wrote', 'I wrote', 'They wrote'],
    correctAnswer: 'I wrote',
    verified: true
  },
  // Minhaj-ul-Arabia Integration Questions
  {
    id: 'q-minhaj-1-1',
    category: 'grammar',
    type: 'multiple-choice',
    question: 'Select the correct translation of: ذَلِكَ قَلَمٌ',
    options: ['This is a pen.', 'That is a pen.', 'That is a book.'],
    correctAnswer: 'That is a pen.',
    verified: true
  },
  {
    id: 'q-minhaj-1-2',
    category: 'grammar',
    type: 'multiple-choice',
    question: 'Which of the following means "This is a dog"?',
    options: ['هَذَا كَلْبٌ', 'ذَلِكَ كَلْبٌ', 'هَذَا قِطٌّ'],
    correctAnswer: 'هَذَا كَلْبٌ',
    verified: true
  },
  {
    id: 'q-minhaj-2-1',
    category: 'grammar',
    type: 'multiple-choice',
    question: 'Choose the correct translation of: مَا ذَلِكَ؟',
    options: ['Who is that?', 'What is that?', 'What is this?'],
    correctAnswer: 'What is that?',
    verified: true
  },
  {
    id: 'q-minhaj-3-1',
    category: 'grammar',
    type: 'multiple-choice',
    question: 'How do you say "Who is this?" in Arabic?',
    options: ['مَا هَذَا؟', 'مَنْ هَذَا؟', 'مَنْ ذَلِكَ؟'],
    correctAnswer: 'مَنْ هَذَا؟',
    verified: true
  },
  {
    id: 'q-minhaj-4-1',
    category: 'grammar',
    type: 'multiple-choice',
    question: 'Which of these is the definite form of جَمَلٌ?',
    options: ['الْجَمَلُ', 'الْجَمَلٌ', 'جَمَلُ'],
    correctAnswer: 'الْجَمَلُ',
    verified: true
  },
  {
    id: 'q-minhaj-5-1',
    category: 'grammar',
    type: 'multiple-choice',
    question: 'Translate: الْقَلَمُ مَكْسُورٌ',
    options: ['The book is new.', 'The pen is broken.', 'The pen is new.'],
    correctAnswer: 'The pen is broken.',
    verified: true
  },
  {
    id: 'q-minhaj-placeholder',
    category: 'grammar',
    type: 'multiple-choice',
    question: 'Minhaj-ul-Arabia placeholder review question. (Pending verification)',
    options: ['Continue', 'Skip'],
    correctAnswer: 'Continue',
    verified: false
  }
];
export function getQuizByCategory(category: string): QuizQuestion[] {
  return quizQuestions.filter(q => q.category === category);
}
export function getQuestionById(id: string): QuizQuestion | undefined {
  return quizQuestions.find(q => q.id === id);
}
