import { UserProgress } from '../types';
import { path1Lessons, path3Lessons } from '../data/language';
import { path2Lessons, vocabularyList } from '../data/vocabulary';

export interface StudyRecommendation {
  type: 'lesson' | 'quiz-practice' | 'vocab-review';
  id: string;
  title: string;
  description: string;
  pathId?: 'foundations' | 'vocabulary' | 'grammar';
  lessonNumber?: number;
}

export function getStudyRecommendation(progress: UserProgress): StudyRecommendation | null {
  // 1. Vocabulary Review recommendation (highest priority if they failed words repeatedly)
  const failedVocabIds = Object.entries(progress.vocabularyBoxes)
    .filter(([_, data]) => data.failedCount >= 2 || (data.box === 1 && new Date(data.nextReview) <= new Date()))
    .map(([id]) => id);

  if (failedVocabIds.length > 0) {
    const vocabWord = vocabularyList.find(v => v.id === failedVocabIds[0]);
    if (vocabWord) {
      return {
        type: 'vocab-review',
        id: vocabWord.id,
        title: `Review: ${vocabWord.arabic}`,
        description: `You had difficulty with "${vocabWord.transliteration}" (${vocabWord.meaning}). Let's practice it again!`,
      };
    }
  }

  // 2. Quiz Practice recommendation (if quiz score percentage is low, e.g. < 70%)
  const lowScores = Object.entries(progress.quizScores)
    .filter(([_, data]) => data.percentage < 70 && data.attempts > 0)
    .sort((a, b) => a[1].percentage - b[1].percentage); // lowest score first

  if (lowScores.length > 0) {
    const quizId = lowScores[0][0];
    const scoreInfo = lowScores[0][1];
    
    // Find matching lesson
    const allLessons = [...path1Lessons, ...path2Lessons, ...path3Lessons];
    const matchingLesson = allLessons.find(l => l.quizQuestions.includes(quizId) || l.id === quizId);
    
    if (matchingLesson) {
      return {
        type: 'quiz-practice',
        id: matchingLesson.id,
        title: `Practice: ${matchingLesson.title}`,
        description: `Your quiz score is ${scoreInfo.percentage.toFixed(0)}%. Re-take the quiz to improve your accuracy!`,
        pathId: matchingLesson.pathId,
        lessonNumber: matchingLesson.lessonNumber
      };
    }
  }

  // 3. Continue Learning: Next incomplete lesson in path order
  // Order: Foundations -> Quranic Vocabulary -> Arabic Grammar
  
  // Try Foundations
  const nextFoundations = path1Lessons.find(l => !progress.completedLessons.includes(l.id));
  if (nextFoundations) {
    return {
      type: 'lesson',
      id: nextFoundations.id,
      title: `Lesson ${nextFoundations.lessonNumber}: ${nextFoundations.title}`,
      description: nextFoundations.description,
      pathId: 'foundations',
      lessonNumber: nextFoundations.lessonNumber
    };
  }

  // Try Quranic Vocabulary
  const nextVocabulary = path2Lessons.find(l => !progress.completedLessons.includes(l.id));
  if (nextVocabulary) {
    return {
      type: 'lesson',
      id: nextVocabulary.id,
      title: `Lesson ${nextVocabulary.lessonNumber}: ${nextVocabulary.title}`,
      description: nextVocabulary.description,
      pathId: 'vocabulary',
      lessonNumber: nextVocabulary.lessonNumber
    };
  }

  // Try Grammar
  const nextGrammar = path3Lessons.find(l => !progress.completedLessons.includes(l.id));
  if (nextGrammar) {
    return {
      type: 'lesson',
      id: nextGrammar.id,
      title: `Lesson ${nextGrammar.lessonNumber}: ${nextGrammar.title}`,
      description: nextGrammar.description,
      pathId: 'grammar',
      lessonNumber: nextGrammar.lessonNumber
    };
  }

  // 4. Default: No recommendation (all complete!)
  return null;
}
export function getOverallProgressPercent(progress: UserProgress): {
  reading: number;
  vocabulary: number;
  grammar: number;
  total: number;
} {
  const readComp = path1Lessons.filter(l => progress.completedLessons.includes(l.id)).length;
  const vocabComp = path2Lessons.filter(l => progress.completedLessons.includes(l.id)).length;
  const gramComp = path3Lessons.filter(l => progress.completedLessons.includes(l.id)).length;

  const reading = Math.round((readComp / path1Lessons.length) * 100);
  const vocabulary = Math.round((vocabComp / path2Lessons.length) * 100);
  const grammar = Math.round((gramComp / path3Lessons.length) * 100);
  const total = Math.round(((readComp + vocabComp + gramComp) / (path1Lessons.length + path2Lessons.length + path3Lessons.length)) * 100);

  return { reading, vocabulary, grammar, total };
}
