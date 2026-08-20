import { useState, useEffect } from 'react';
import { UserProgress } from '../types';

const LOCAL_STORAGE_KEY = 'qiraz_user_progress';

const DEFAULT_PROGRESS: UserProgress = {
  completedLessons: [],
  knownVocabulary: [],
  vocabularyBoxes: {},
  quizScores: {},
  currentStreak: 0,
  lastActiveDate: '',
  dailyGoalMinutes: 15,
  dailyStudyTimeSeconds: 0,
  lastStudyTimestamp: 0,
  arabicFontSize: 'xl',
  showTransliteration: true,
  darkMode: false,
  sourceApprovals: {},
  languageVerifications: {},
  email: ''
};

// Helper to get formatted date string (YYYY-MM-DD)
export function getTodayDateString(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Helper to get yesterday date string
export function getYesterdayDateString(): string {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const year = yesterday.getFullYear();
  const month = String(yesterday.getMonth() + 1).padStart(2, '0');
  const day = String(yesterday.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function useLocalStorage() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const item = window.localStorage.getItem(LOCAL_STORAGE_KEY);
      if (item) {
        const parsed = JSON.parse(item) as UserProgress;
        
        // Clean/validate fields to avoid crashes if schema changes
        return {
          ...DEFAULT_PROGRESS,
          ...parsed,
          vocabularyBoxes: parsed.vocabularyBoxes || {},
          quizScores: parsed.quizScores || {},
          sourceApprovals: parsed.sourceApprovals || {},
          languageVerifications: parsed.languageVerifications || {}
        };
      }
    } catch (error) {
      console.error('Error loading progress from LocalStorage:', error);
    }
    return DEFAULT_PROGRESS;
  });

  // Write changes to localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(progress));
      // Handle dark mode class
      if (progress.darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (error) {
      console.error('Error writing progress to LocalStorage:', error);
    }
  }, [progress]);

  // Streak check on load (reset if inactive for >1 day)
  useEffect(() => {
    const today = getTodayDateString();
    const yesterday = getYesterdayDateString();
    
    if (progress.lastActiveDate && progress.lastActiveDate !== today && progress.lastActiveDate !== yesterday) {
      // Idle for more than a day, reset streak
      setProgress(prev => ({
        ...prev,
        currentStreak: 0
      }));
    }
  }, []);

  const updateProgress = (updater: (prev: UserProgress) => UserProgress) => {
    setProgress(prev => updater(prev));
  };

  const resetAllProgress = () => {
    setProgress(DEFAULT_PROGRESS);
  };

  // Perform activity (increments study time and handles streak updates)
  const registerActivity = () => {
    const today = getTodayDateString();
    const yesterday = getYesterdayDateString();
    const lastActive = progress.lastActiveDate;

    setProgress(prev => {
      let nextStreak = prev.currentStreak;
      if (!lastActive) {
        nextStreak = 1;
      } else if (lastActive === yesterday) {
        nextStreak = prev.currentStreak + 1;
      } else if (lastActive !== today) {
        // More than a day gap
        nextStreak = 1;
      }
      // If lastActive === today, streak stays the same

      return {
        ...prev,
        lastActiveDate: today,
        currentStreak: nextStreak,
        lastStudyTimestamp: Date.now()
      };
    });
  };

  const completeLesson = (lessonId: string) => {
    registerActivity();
    setProgress(prev => {
      if (prev.completedLessons.includes(lessonId)) {
        return prev;
      }
      return {
        ...prev,
        completedLessons: [...prev.completedLessons, lessonId]
      };
    });
  };

  const recordQuizScore = (quizId: string, score: number, percentage: number) => {
    registerActivity();
    setProgress(prev => {
      const existing = prev.quizScores[quizId] || { score: 0, percentage: 0, attempts: 0 };
      return {
        ...prev,
        quizScores: {
          ...prev.quizScores,
          [quizId]: {
            score: Math.max(existing.score, score),
            percentage: Math.max(existing.percentage, percentage),
            attempts: existing.attempts + 1
          }
        }
      };
    });
  };

  const reviewVocabulary = (wordId: string, correct: boolean) => {
    registerActivity();
    setProgress(prev => {
      const currentBox = prev.vocabularyBoxes[wordId] || { box: 1, nextReview: '', failedCount: 0 };
      
      let nextBox = currentBox.box;
      let nextFailedCount = currentBox.failedCount;

      if (correct) {
        // Move up Leitner boxes (max 5)
        nextBox = Math.min(5, currentBox.box + 1);
      } else {
        // Reset to box 1 and increment failed count
        nextBox = 1;
        nextFailedCount = currentBox.failedCount + 1;
      }

      // Calculate next review interval based on box
      // Box 1: 1 day, Box 2: 2 days, Box 3: 4 days, Box 4: 7 days, Box 5: 14 days
      const daysToAdd = [1, 2, 4, 7, 14][nextBox - 1];
      const reviewDate = new Date();
      reviewDate.setDate(reviewDate.getDate() + daysToAdd);
      const nextReviewStr = reviewDate.toISOString().split('T')[0];

      // Add to known vocabulary if correct
      const knownVocab = prev.knownVocabulary.includes(wordId) 
        ? prev.knownVocabulary 
        : (correct ? [...prev.knownVocabulary, wordId] : prev.knownVocabulary);

      return {
        ...prev,
        knownVocabulary: knownVocab,
        vocabularyBoxes: {
          ...prev.vocabularyBoxes,
          [wordId]: {
            box: nextBox,
            nextReview: nextReviewStr,
            failedCount: nextFailedCount
          }
        }
      };
    });
  };

  // Toggle dynamic source approvals (for Project Owner review panel)
  const toggleSourceApproval = (sourceId: string, _approvedBy: string = 'Project Owner') => {
    setProgress(prev => {
      const current = prev.sourceApprovals[sourceId] || false;
      return {
        ...prev,
        sourceApprovals: {
          ...prev.sourceApprovals,
          [sourceId]: !current
        }
      };
    });
  };

  // Toggle dynamic language item verifications (for Project Owner review panel)
  const toggleLanguageVerification = (itemId: string, _verifiedBy: string = 'Project Owner') => {
    setProgress(prev => {
      const current = prev.languageVerifications[itemId] || false;
      return {
        ...prev,
        languageVerifications: {
          ...prev.languageVerifications,
          [itemId]: !current
        }
      };
    });
  };

  const saveEmailProfile = (email: string) => {
    setProgress(prev => ({
      ...prev,
      email
    }));
  };

  const importProgress = (imported: UserProgress) => {
    setProgress(imported);
  };

  return {
    progress,
    updateProgress,
    resetAllProgress,
    registerActivity,
    completeLesson,
    recordQuizScore,
    reviewVocabulary,
    toggleSourceApproval,
    toggleLanguageVerification,
    saveEmailProfile,
    importProgress
  };
}
