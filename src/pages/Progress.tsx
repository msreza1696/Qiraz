import React from 'react';
import { UserProgress } from '../types';
import { getOverallProgressPercent } from '../utils/recommendations';
import { path1Lessons, path3Lessons } from '../data/language';
import { path2Lessons, vocabularyList } from '../data/vocabulary';
import { Flame, Award, Clock, CheckCircle2, Star, BookOpen } from 'lucide-react';

interface ProgressProps {
  progress: UserProgress;
}

export const Progress: React.FC<ProgressProps> = ({ progress }) => {
  const overall = getOverallProgressPercent(progress);

  // Total lessons count
  const totalLessons = path1Lessons.length + path2Lessons.length + path3Lessons.length;
  const completedLessonsCount = progress.completedLessons.length;

  // Spaced repetition vocabulary count
  const totalVocab = vocabularyList.length;
  const learnedVocabCount = progress.knownVocabulary.length;

  // Average quiz score
  const quizScoresArray = Object.values(progress.quizScores);
  const avgQuizAccuracy = quizScoresArray.length > 0
    ? Math.round(quizScoresArray.reduce((acc, q) => acc + q.percentage, 0) / quizScoresArray.length)
    : 0;

  // Estimate total learning time
  const totalMinutes = Math.round(progress.dailyStudyTimeSeconds / 60) || 5; // default fallback if fresh

  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-charcoal/10 dark:border-ivory/10 pb-4">
        <div>
          <div className="flex items-center space-x-2 text-emerald">
            <Award className="w-6 h-6" />
            <h2 className="text-2xl font-bold tracking-tight text-charcoal dark:text-white">Your Progress Hub</h2>
          </div>
          <p className="text-xs text-charcoal/60 dark:text-ivory/60 mt-0.5">
            Visualize your streaks, quiz accuracy, and completed study targets.
          </p>
        </div>
      </div>

      {/* Grid of Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {/* Metric 1: Streak */}
        <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 p-5 rounded-2xl flex items-center space-x-3 shadow-sm">
          <div className="bg-amber-50 dark:bg-amber-950/20 p-3 rounded-full text-amber-500">
            <Flame className="w-6 h-6 fill-amber-500 animate-pulse" />
          </div>
          <div>
            <span className="text-[10px] text-charcoal/40 dark:text-ivory/40 block font-bold">STREAK</span>
            <span className="text-lg font-extrabold">{progress.currentStreak} {progress.currentStreak === 1 ? 'Day' : 'Days'}</span>
          </div>
        </div>

        {/* Metric 2: Lessons Completed */}
        <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 p-5 rounded-2xl flex items-center space-x-3 shadow-sm">
          <div className="bg-emerald-bg dark:bg-emerald/10 p-3 rounded-full text-emerald">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] text-charcoal/40 dark:text-ivory/40 block font-bold">LESSONS</span>
            <span className="text-lg font-extrabold">{completedLessonsCount} / {totalLessons}</span>
          </div>
        </div>

        {/* Metric 3: Study Time */}
        <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 p-5 rounded-2xl flex items-center space-x-3 shadow-sm">
          <div className="bg-green-50 dark:bg-emerald/10 p-3 rounded-full text-emerald">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] text-charcoal/40 dark:text-ivory/40 block font-bold">STUDY TIME</span>
            <span className="text-lg font-extrabold">{totalMinutes} Mins</span>
          </div>
        </div>

        {/* Metric 4: Vocabulary Learned */}
        <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 p-5 rounded-2xl flex items-center space-x-3 shadow-sm">
          <div className="bg-gold/10 p-3 rounded-full text-gold">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] text-charcoal/40 dark:text-ivory/40 block font-bold">WORDS</span>
            <span className="text-lg font-extrabold">{learnedVocabCount} / {totalVocab}</span>
          </div>
        </div>

        {/* Metric 5: Quiz Accuracy */}
        <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 p-5 rounded-2xl flex items-center space-x-3 shadow-sm">
          <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-full text-blue-500">
            <Star className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] text-charcoal/40 dark:text-ivory/40 block font-bold">QUIZ AVG</span>
            <span className="text-lg font-extrabold">{avgQuizAccuracy}%</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Circle indicator on left, breakdown on right */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left Circle indicator */}
        <div className="md:col-span-1 bg-white dark:bg-charcoal-light border border-charcoal/5 p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm">
          <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal/40 dark:text-ivory/40 mb-6">
            Overall Completion
          </h3>
          
          {/* Circular Indicator */}
          <div className="relative w-40 h-40 flex items-center justify-center">
            {/* SVG Circle */}
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="80"
                cy="80"
                r="64"
                stroke="currentColor"
                strokeWidth="10"
                className="text-charcoal/5 dark:text-ivory/5"
                fill="transparent"
              />
              <circle
                cx="80"
                cy="80"
                r="64"
                stroke="currentColor"
                strokeWidth="10"
                className="text-emerald"
                fill="transparent"
                strokeDasharray={402}
                strokeDashoffset={402 - (402 * overall.total) / 100}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute text-center">
              <span className="text-3xl font-extrabold text-charcoal dark:text-white leading-none">
                {overall.total}%
              </span>
              <span className="text-[10px] text-charcoal/40 dark:text-ivory/40 block mt-1">
                Completed
              </span>
            </div>
          </div>

          <p className="text-[10px] text-charcoal/40 dark:text-ivory/40 mt-6 leading-relaxed">
            Overall completion represents your progress across all Arabic reading, vocabulary, and grammar lessons.
          </p>
        </div>

        {/* Right breakdown bars */}
        <div className="md:col-span-2 bg-white dark:bg-charcoal-light border border-charcoal/5 p-6 rounded-2xl space-y-6 shadow-sm">
          <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal/40 dark:text-ivory/40">
            Progress Breakdown
          </h3>

          <div className="space-y-4">
            {/* Reading */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold">Path 01 — Arabic Reading Foundations</span>
                <span className="text-charcoal/50 dark:text-ivory/50">
                  {path1Lessons.filter(l => progress.completedLessons.includes(l.id)).length} / {path1Lessons.length} lessons
                </span>
              </div>
              <div className="w-full bg-charcoal/5 dark:bg-ivory/5 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-emerald h-full rounded-full transition-all duration-300"
                  style={{ width: `${overall.reading}%` }}
                />
              </div>
            </div>

            {/* Qur'anic Vocabulary */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold">Path 02 — Qur'anic Vocabulary</span>
                <span className="text-charcoal/50 dark:text-ivory/50">
                  {path2Lessons.filter(l => progress.completedLessons.includes(l.id)).length} / {path2Lessons.length} lessons
                </span>
              </div>
              <div className="w-full bg-charcoal/5 dark:bg-ivory/5 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-emerald h-full rounded-full transition-all duration-300"
                  style={{ width: `${overall.vocabulary}%` }}
                />
              </div>
            </div>

            {/* Grammar */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold">Path 03 — Arabic Grammar</span>
                <span className="text-charcoal/50 dark:text-ivory/50">
                  {path3Lessons.filter(l => progress.completedLessons.includes(l.id)).length} / {path3Lessons.length} lessons
                </span>
              </div>
              <div className="w-full bg-charcoal/5 dark:bg-ivory/5 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-emerald h-full rounded-full transition-all duration-300"
                  style={{ width: `${overall.grammar}%` }}
                />
              </div>
            </div>

            {/* Spaced repetition memory status */}
            <div className="bg-ivory/40 dark:bg-charcoal/20 border border-charcoal/5 rounded-xl p-4 flex items-center justify-between text-xs mt-2">
              <div>
                <span className="font-semibold text-charcoal dark:text-white">Spaced Repetition status</span>
                <p className="text-[10px] text-charcoal/50 dark:text-ivory/50 mt-0.5">
                  Review box slots: {Object.keys(progress.vocabularyBoxes).length} active words saved.
                </p>
              </div>
              <span className="font-mono text-emerald bg-emerald-bg dark:bg-emerald/10 border border-emerald/10 px-2 py-0.5 rounded font-bold">
                Leitner Box persists
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quiz History Table */}
      <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 p-6 rounded-2xl shadow-sm space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal/40 dark:text-ivory/40">
          Quiz Attempt Records ({Object.keys(progress.quizScores).length})
        </h3>
        
        {Object.keys(progress.quizScores).length > 0 ? (
          <div className="border border-charcoal/5 rounded-xl overflow-hidden bg-ivory/10">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-charcoal/5 dark:bg-ivory/5 text-[10px] uppercase font-bold text-charcoal/50">
                <tr>
                  <th className="p-3">Quiz Name / Topic</th>
                  <th className="p-3">Attempts</th>
                  <th className="p-3 text-right">Top Accuracy Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal/5 dark:divide-ivory/5">
                {Object.entries(progress.quizScores).map(([quizId, scoreData]) => (
                  <tr key={quizId} className="hover:bg-charcoal/5 dark:hover:bg-ivory/5">
                    <td className="p-3 font-semibold text-charcoal dark:text-white">
                      {quizId.replace('lesson-', '').replace('-quiz', '').replace('reading-trainer-l', 'Reading Level ')}
                    </td>
                    <td className="p-3 text-charcoal/60 dark:text-ivory/60">{scoreData.attempts}</td>
                    <td className="p-3 text-right font-bold text-emerald">{scoreData.percentage.toFixed(0)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="py-6 text-center text-xs text-charcoal/40 dark:text-ivory/40 border border-dashed border-charcoal/10 rounded-xl">
            No quiz records logged yet. Complete lesson mini-quizzes to view metrics here.
          </div>
        )}
      </div>

    </div>
  );
};
export default Progress;
