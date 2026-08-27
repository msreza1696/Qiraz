export interface SourceLockedContent {
  id: string;
  sourceName: string;
  sourceType: 'QuranText' | 'Translation' | 'Tafsir' | 'Hadith' | 'Aqeedah' | 'Fiqh' | 'Linguistic' | 'Other';
  reference: string;
  exactText: string;
  language: string;
  approved: boolean;
  approvedBy?: string;
  notes?: string;
}

export interface VerifiedLanguageItem {
  id: string;
  arabic: string;
  english: string;
  transliteration?: string;
  explanation?: string;
  verified: boolean;
  verifiedBy?: string;
}

export interface LessonExample {
  arabic: string;
  transliteration?: string;
  english: string;
  explanation?: string;
  verified: boolean;
  sourceBook?: string;
  sourcePart?: string;
  sourceLesson?: number;
  sourcePage?: number;
  approved?: boolean;
}

export interface PracticeExercise {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  arabicText?: string;
  type: 'multiple-choice' | 'spelling';
  sourceBook?: string;
  sourcePart?: string;
  sourceLesson?: number;
  sourcePage?: number;
  verified?: boolean;
  approved?: boolean;
}

export interface Lesson {
  id: string;
  pathId: 'foundations' | 'vocabulary' | 'grammar' | 'minhaj';
  lessonNumber: number;
  title: string;
  description: string;
  estimatedTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  explanation: string;
  examples: LessonExample[];
  practiceExercises: PracticeExercise[];
  quizQuestions: string[]; // References to QuizQuestion IDs
  sourceBook?: string;
  sourcePart?: string;
  sourceLesson?: number;
  sourcePage?: number;
  verified?: boolean;
  approved?: boolean;
}

export interface VocabularyWord {
  id: string;
  arabic: string;
  transliteration: string;
  meaning: string;
  root?: string;
  partOfSpeech: string;
  exampleSentence?: string;
  quranicOccurrence?: string;
  verified: boolean;
  verifiedBy?: string;
  sourceBook?: string;
  sourcePart?: string;
  sourceLesson?: number;
  sourcePage?: number;
  approved?: boolean;
}

export interface QuranWord {
  wordId: string; // e.g. "1-1-1"
  arabic: string;
  transliteration: string;
  translation: SourceLockedContent;
  grammar: SourceLockedContent;
}

export interface QuranVerse {
  id: string; // e.g. "1:1"
  verseNumber: number;
  arabic: SourceLockedContent;
  translation: SourceLockedContent;
  words: QuranWord[];
  vocabularyIds: string[];
  grammarNotes: SourceLockedContent[];
}

/**
 * QURAN AUDIO — Source-controlled recitation audio.
 * Only entries with approved=true may be played as authoritative Quranic recitation.
 * Never use AI voice generation for Quran recitation.
 * audioUrl must point to a human reciter explicitly approved by the project owner.
 */
export interface QuranAudio {
  id: string;
  surahNumber: number;
  ayahNumber: number;
  reciterName: string;
  audioUrl: string;
  sourceName: string;
  sourceUrl?: string;
  approved: boolean;
  notes?: string;
}

export interface MatchingPair {
  left: string;
  right: string;
}

export interface QuizQuestion {
  id: string;
  category: 'foundations' | 'vocabulary' | 'grammar' | 'reading';
  type: 'multiple-choice' | 'translation-ar-en' | 'translation-en-ar' | 'fill-in-blank' | 'matching' | 'grammar-id';
  question: string;
  arabicText?: string;
  options?: string[];
  correctAnswer: string;
  matchingPairs?: MatchingPair[];
  verified: boolean;
}

export interface UserProgress {
  completedLessons: string[];
  knownVocabulary: string[];
  vocabularyBoxes: Record<string, { box: number; nextReview: string; failedCount: number }>;
  quizScores: Record<string, { score: number; percentage: number; attempts: number }>;
  currentStreak: number;
  lastActiveDate: string;
  dailyGoalMinutes: number;
  dailyStudyTimeSeconds: number;
  lastStudyTimestamp: number;
  arabicFontSize: 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';
  showTransliteration: boolean;
  darkMode: boolean;
  sourceApprovals: Record<string, boolean>; // Dynamically maps sourceId -> approved override by project owner
  languageVerifications: Record<string, boolean>; // Dynamically maps languageItemId -> verified override
  quranAudioApprovals: Record<string, boolean>; // Maps QuranAudio.id -> approved by project owner
  email?: string;
}
