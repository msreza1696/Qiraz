import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  BookOpen, 
  Compass, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  Check, 
  Clock, 
  ArrowLeft, 
  X,
  Library,
  ShieldAlert
} from 'lucide-react';
import { UserProgress, Lesson } from '../types';
import { path1Lessons, path3Lessons } from '../data/language';
import { path2Lessons } from '../data/vocabulary';
import { minhajLessons } from '../data/minhaj';
import { quizQuestions } from '../data/quizzes';
import QuizEngine from '../components/QuizEngine';

interface LearnProps {
  progress: UserProgress;
  onCompleteLesson: (lessonId: string) => void;
  onRecordScore: (quizId: string, score: number, percentage: number) => void;
}

export const Learn: React.FC<LearnProps> = ({ progress, onCompleteLesson, onRecordScore }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activePathTab = searchParams.get('path') || 'foundations';
  const startLessonId = searchParams.get('start');
  
  // Lesson player states
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [lessonStep, setLessonStep] = useState<'explanation' | 'examples' | 'practice' | 'quiz' | 'completed'>('explanation');

  // Automatically start lesson from start URL param (e.g. from Dashboard or Grammar indexes)
  useEffect(() => {
    if (startLessonId) {
      const allLessons = [...path1Lessons, ...path2Lessons, ...path3Lessons, ...minhajLessons];
      const lessonToStart = allLessons.find(l => l.id === startLessonId);
      if (lessonToStart) {
        setActiveLesson(lessonToStart);
        setLessonStep('explanation');
        // Clear start param from URL
        const newParams = new URLSearchParams(searchParams);
        newParams.delete('start');
        setSearchParams(newParams, { replace: true });
      }
    }
  }, [startLessonId, searchParams, setSearchParams]);
  
  // Practice states
  const [currentPracticeIdx, setCurrentPracticeIdx] = useState<number>(0);
  const [selectedPracticeOpt, setSelectedPracticeOpt] = useState<string | null>(null);
  const [practiceAnswered, setPracticeAnswered] = useState<boolean>(false);

  // Set URL parameter helper
  const setPathTab = (tab: 'foundations' | 'vocabulary' | 'grammar' | 'minhaj') => {
    setSearchParams({ path: tab });
    setActiveLesson(null);
  };

  const getLessonsForPath = () => {
    switch (activePathTab) {
      case 'foundations': return path1Lessons;
      case 'vocabulary': return path2Lessons;
      case 'grammar': return path3Lessons;
      case 'minhaj': return minhajLessons;
      default: return path1Lessons;
    }
  };

  const activeLessons = getLessonsForPath();

  const handleStartLesson = (lesson: Lesson) => {
    setActiveLesson(lesson);
    setLessonStep('explanation');
    setCurrentPracticeIdx(0);
    setSelectedPracticeOpt(null);
    setPracticeAnswered(false);
  };

  // Practice flow handlers
  const handlePracticeAnswer = (option: string) => {
    if (practiceAnswered || !activeLesson) return;
    setSelectedPracticeOpt(option);
    setPracticeAnswered(true);
  };

  const handleNextPractice = () => {
    if (!activeLesson) return;
    
    setSelectedPracticeOpt(null);
    setPracticeAnswered(false);

    if (currentPracticeIdx + 1 < activeLesson.practiceExercises.length) {
      setCurrentPracticeIdx(prev => prev + 1);
    } else {
      // Completed practice, proceed to quiz
      setLessonStep('quiz');
    }
  };

  const handleQuizComplete = (score: number, percentage: number) => {
    if (!activeLesson) return;
    // Record quiz score
    onRecordScore(`lesson-${activeLesson.id}-quiz`, score, percentage);
    
    // Automatically complete lesson if verified, otherwise skip completing it (achievement)
    const isLessonVerified = activeLesson.verified !== false && activeLesson.approved !== false;
    if (isLessonVerified) {
      onCompleteLesson(activeLesson.id);
    }
    setLessonStep('completed');
  };

  const handleBackToLessons = () => {
    setActiveLesson(null);
  };

  // 1. LESSON STUDY PLAYER RENDER
  if (activeLesson) {
    const isVerified = activeLesson.examples.every(e => e.verified === true);
    
    return (
      <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
        
        {/* Navigation header */}
        <div className="flex justify-between items-center">
          <button 
            onClick={handleBackToLessons}
            className="flex items-center text-xs font-semibold text-charcoal/50 dark:text-ivory/50 hover:text-emerald"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Lessons
          </button>
          
          <span className="text-xs font-semibold text-charcoal/60 dark:text-ivory/60 bg-white dark:bg-charcoal-light px-2.5 py-1 rounded border border-charcoal/5">
            Lesson {activeLesson.lessonNumber} &bull; {activeLesson.difficulty}
          </span>
        </div>

        {/* Progress steps index */}
        <div className="grid grid-cols-5 gap-2">
          {['explanation', 'examples', 'practice', 'quiz', 'completed'].map((step, idx) => {
            const stepLabels = ['Overview', 'Examples', 'Practice', 'Quiz', 'Finish'];
            const activeSteps = ['explanation', 'examples', 'practice', 'quiz', 'completed'];
            const activeIdx = activeSteps.indexOf(lessonStep);
            
            let barColor = 'bg-charcoal/10 dark:bg-ivory/10 text-charcoal/40 dark:text-ivory/40';
            if (activeIdx > idx) barColor = 'bg-emerald text-white'; // past
            else if (activeIdx === idx) barColor = 'bg-emerald text-white border-2 border-emerald-light shadow-sm font-bold'; // current

            return (
              <div 
                key={step} 
                className={`py-2 rounded-lg text-center text-[10px] uppercase font-mono ${barColor}`}
              >
                <span className="hidden sm:inline">{stepLabels[idx]}</span>
                <span className="sm:hidden">{idx + 1}</span>
              </div>
            );
          })}
        </div>

        {/* Governance warning for unverified/unapproved content */}
        {(activeLesson.verified === false || activeLesson.approved === false) && (
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200/40 dark:border-amber-900/30 p-4 rounded-xl flex items-start space-x-3 text-xs text-amber-800 dark:text-amber-300">
            <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-bold">Content Audit Pending — Review Required</h4>
              <p className="mt-0.5 leading-relaxed text-[11px]">
                This lesson ({activeLesson.sourceBook || 'General Curriculum'} Lesson {activeLesson.sourceLesson || activeLesson.lessonNumber}) has not yet been audited and verified by the project owner. Exercises and translation keys are in draft state.
              </p>
            </div>
          </div>
        )}

        {/* STEP 1: EXPLANATION */}
        {lessonStep === 'explanation' && (
          <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 dark:border-ivory/5 p-6 md:p-8 rounded-2xl space-y-6 shadow-sm">
            <div>
              <span className="text-[10px] font-bold text-emerald uppercase tracking-wider">Lesson Introduction</span>
              <h2 className="text-2xl font-bold tracking-tight text-charcoal dark:text-white mt-1">
                {activeLesson.title}
              </h2>
            </div>
            
            <p className="text-sm leading-relaxed text-charcoal/70 dark:text-ivory/70 whitespace-pre-line">
              {activeLesson.explanation}
            </p>

            <button 
              onClick={() => setLessonStep('examples')}
              className="w-full bg-emerald text-white hover:bg-emerald-dark py-3 rounded-xl text-sm font-semibold flex items-center justify-center transition-colors"
            >
              <span>View Examples</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        )}

        {/* STEP 2: EXAMPLES */}
        {lessonStep === 'examples' && (
          <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 dark:border-ivory/5 p-6 md:p-8 rounded-2xl space-y-6 shadow-sm">
            <div className="flex justify-between items-center pb-2 border-b border-charcoal/5">
              <div>
                <span className="text-[10px] font-bold text-emerald uppercase tracking-wider">Language Examples</span>
                <h2 className="text-xl font-bold text-charcoal dark:text-white">Pronunciation & Meaning</h2>
              </div>
              {isVerified ? (
                <span className="text-[9px] bg-emerald-bg dark:bg-emerald/10 text-emerald border border-emerald/10 px-2 py-0.5 rounded font-bold font-mono">
                  ✓ Verified Educational Content
                </span>
              ) : (
                <span className="text-[9px] bg-red-500 text-white px-2 py-0.5 rounded font-bold font-mono">
                  Needs verification
                </span>
              )}
            </div>

            <div className="space-y-4">
              {activeLesson.examples.map((ex, i) => (
                <div 
                  key={i}
                  className="bg-ivory/40 dark:bg-charcoal/30 border border-charcoal/5 dark:border-ivory/5 p-4 rounded-xl flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <span className="text-sm font-semibold text-charcoal dark:text-white">{ex.english}</span>
                    {progress.showTransliteration && ex.transliteration && (
                      <p className="text-xs text-charcoal/50 dark:text-ivory/50 font-mono">
                        [{ex.transliteration}]
                      </p>
                    )}
                    {ex.explanation && (
                      <p className="text-xs text-charcoal/40 dark:text-ivory/40">
                        {ex.explanation}
                      </p>
                    )}
                  </div>
                  <span className="font-arabic text-3xl text-emerald font-bold select-none leading-normal">
                    {ex.arabic}
                  </span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setLessonStep('practice')}
              className="w-full bg-emerald text-white hover:bg-emerald-dark py-3 rounded-xl text-sm font-semibold flex items-center justify-center transition-colors"
            >
              <span>Practice Exercises</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        )}

        {/* STEP 3: PRACTICE */}
        {lessonStep === 'practice' && (
          (() => {
            const exercise = activeLesson.practiceExercises[currentPracticeIdx];
            return (
              <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 dark:border-ivory/5 p-6 md:p-8 rounded-2xl space-y-6 shadow-sm animate-fade-in">
                <div>
                  <span className="text-[10px] font-bold text-emerald uppercase tracking-wider">
                    Interactive Practice ({currentPracticeIdx + 1} of {activeLesson.practiceExercises.length})
                  </span>
                  <h3 className="text-lg font-bold text-charcoal dark:text-white mt-1">
                    {exercise.question}
                  </h3>
                </div>

                {exercise.arabicText && (
                  <div className="py-4 text-center">
                    <span className="font-arabic text-5xl text-charcoal-dark dark:text-white leading-normal select-none">
                      {exercise.arabicText}
                    </span>
                  </div>
                )}

                <div className="grid gap-3 pt-2">
                  {exercise.options.map((opt) => {
                    const isSelected = selectedPracticeOpt === opt;
                    const isCorrect = opt === exercise.correctAnswer;
                    
                    let btnClass = 'border-charcoal/10 dark:border-ivory/10 hover:border-emerald bg-white dark:bg-charcoal text-charcoal dark:text-ivory';
                    if (practiceAnswered) {
                      if (isCorrect) {
                        btnClass = 'bg-emerald text-white border-emerald';
                      } else if (isSelected) {
                        btnClass = 'bg-red-500 text-white border-red-500';
                      } else {
                        btnClass = 'opacity-40 border-charcoal/5 dark:border-ivory/5 cursor-not-allowed';
                      }
                    } else if (isSelected) {
                      btnClass = 'border-emerald bg-emerald-bg/10 text-emerald-dark dark:bg-emerald/10 dark:text-emerald-light';
                    }

                    return (
                      <button
                        key={opt}
                        disabled={practiceAnswered}
                        onClick={() => handlePracticeAnswer(opt)}
                        className={`w-full p-4 border rounded-xl text-left text-sm font-medium transition-all flex items-center justify-between ${btnClass}`}
                      >
                        <span>{opt}</span>
                        {practiceAnswered && isCorrect && <Check className="w-4 h-4 text-white" />}
                        {practiceAnswered && isSelected && !isCorrect && <X className="w-4 h-4 text-white" />}
                      </button>
                    );
                  })}
                </div>

                {practiceAnswered && (
                  <div className="bg-emerald-bg/10 dark:bg-emerald/5 p-4 rounded-xl space-y-3">
                    <div className="text-xs font-semibold text-emerald-dark dark:text-emerald-light flex items-center">
                      {selectedPracticeOpt === exercise.correctAnswer ? (
                        <>
                          <Check className="w-4 h-4 mr-1.5" />
                          Excellent! That is correct.
                        </>
                      ) : (
                        <>
                          <X className="w-4 h-4 mr-1.5 text-red-500" />
                          Incorrect. The correct answer was "{exercise.correctAnswer}".
                        </>
                      )}
                    </div>
                    <button 
                      onClick={handleNextPractice}
                      className="w-full bg-charcoal text-white dark:bg-ivory dark:text-charcoal hover:bg-charcoal-light py-2 rounded-lg text-xs font-semibold flex items-center justify-center"
                    >
                      <span>Next Exercise</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </button>
                  </div>
                )}
              </div>
            );
          })()
        )}

        {/* STEP 4: LESSON MINI QUIZ */}
        {lessonStep === 'quiz' && (
          (() => {
            // Find questions in database matching the lesson's question references
            const lessonQuizQuestions = quizQuestions.filter(q => activeLesson.quizQuestions.includes(q.id));
            return (
              <div className="space-y-4">
                <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 p-4 rounded-xl flex items-center justify-between text-xs text-charcoal/60 dark:text-ivory/60">
                  <span>Mini Quiz Verification</span>
                  <span className="font-semibold text-emerald">Consolidation Phase</span>
                </div>
                <QuizEngine 
                  questions={lessonQuizQuestions}
                  onQuizComplete={handleQuizComplete}
                  onClose={handleBackToLessons}
                />
              </div>
            );
          })()
        )}

        {/* STEP 5: COMPLETED */}
        {lessonStep === 'completed' && (
          <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 dark:border-ivory/5 p-8 rounded-2xl text-center space-y-6 shadow-sm animate-fade-in">
            <span className="text-6xl block select-none mb-2">🎓</span>
            <h2 className="text-2xl font-bold tracking-tight text-charcoal dark:text-white">
              {activeLesson.verified !== false && activeLesson.approved !== false ? 'Lesson Complete!' : 'Preview Session Complete'}
            </h2>
            <p className="text-xs text-charcoal/60 dark:text-ivory/60 max-w-sm mx-auto leading-normal">
              {activeLesson.verified !== false && activeLesson.approved !== false
                ? `Congratulations! You have completed Lesson ${activeLesson.lessonNumber}: "${activeLesson.title}". Your progress has been updated and saved in LocalStorage.`
                : `You have finished the preview for Lesson ${activeLesson.lessonNumber}: "${activeLesson.title}". As this lesson is a draft pending source review, it has not been recorded as a completed curriculum achievement.`}
            </p>

            {activeLesson.verified !== false && activeLesson.approved !== false ? (
              <div className="bg-emerald-bg dark:bg-emerald/10 p-3 rounded-lg flex items-center justify-center space-x-2 text-emerald">
                <CheckCircle className="w-5 h-5" />
                <span className="text-xs font-bold font-mono">100% Path Completion Incremented</span>
              </div>
            ) : (
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200/40 p-3 rounded-lg flex items-center justify-center space-x-2 text-amber-600 dark:text-amber-400">
                <ShieldAlert className="w-5 h-5 flex-shrink-0" />
                <span className="text-xs font-bold font-mono uppercase">Draft Preview Mode — Progress Excluded</span>
              </div>
            )}

            <button 
              onClick={handleBackToLessons}
              className="w-full bg-emerald text-white hover:bg-emerald-dark py-3 rounded-xl text-sm font-semibold transition-colors"
            >
              Finish & Return to Path
            </button>
          </div>
        )}

      </div>
    );
  }

  // 2. PATHS & LESSONS DIRECTORY LISTING RENDER
  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Upper Path Select Tab Headers */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-charcoal/10 dark:border-ivory/10 pb-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-charcoal dark:text-white">Learning Paths</h2>
          <p className="text-xs text-charcoal/60 dark:text-ivory/60 mt-0.5">Select a structured track to study.</p>
        </div>
        
        {/* Responsive Tab row */}
        <div className="bg-charcoal/5 dark:bg-ivory/10 p-1.5 rounded-xl flex flex-wrap gap-1.5 self-start">
          {[
            { id: 'foundations', label: '1. Foundations', icon: BookOpen },
            { id: 'vocabulary', label: '2. Vocabulary', icon: Compass },
            { id: 'grammar', label: '3. Grammar', icon: Award },
            { id: 'minhaj', label: '4. Minhaj Track', icon: Library }
          ].map((tab) => {
            const Icon = tab.icon;
            const isTabActive = activePathTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setPathTab(tab.id as any)}
                className={`flex items-center px-4 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                  isTabActive
                    ? 'bg-emerald text-white shadow-sm'
                    : 'text-charcoal/60 dark:text-ivory/60 hover:text-charcoal hover:bg-charcoal/5 dark:hover:text-white dark:hover:bg-ivory/5'
                }`}
              >
                <Icon className="w-4 h-4 mr-1.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* active path metadata banner */}
      <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 dark:border-ivory/5 p-5 rounded-2xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-lg font-bold text-charcoal dark:text-white">
            {activePathTab === 'foundations' 
              ? 'Path 01 — Arabic Foundations' 
              : activePathTab === 'vocabulary' 
              ? 'Path 02 — Qur\'anic Vocabulary' 
              : activePathTab === 'grammar' 
              ? 'Path 03 — Arabic Grammar' 
              : 'Path 04 — Minhaj-ul-Arabia'}
          </h3>
          <p className="text-xs text-charcoal/60 dark:text-ivory/60 mt-0.5 max-w-xl leading-normal">
            {activePathTab === 'foundations' 
              ? 'Learn basic Arabic letters, how shapes connect in cursive scripting, sukoon, shaddah rules, and short/long vowel markers.' 
              : activePathTab === 'vocabulary'
              ? 'Explore high-frequency Quranic terms, three-letter roots, and detailed meaning breakdowns under strict governance.'
              : activePathTab === 'grammar'
              ? 'Grasp the building blocks of sentence forms (nouns, verbs, particles), possessives, matching adjectives, and verbs conjugation.'
              : 'Study the classical Minhaj-ul-Arabia curriculum transformed into an interactive, step-by-step vocabulary and grammar track.'}
          </p>
        </div>
        
        {/* Metric gauge */}
        <div className="flex-shrink-0 bg-emerald-bg/10 dark:bg-emerald/10 border border-emerald/10 px-4 py-2.5 rounded-xl text-center">
          <span className="text-[10px] font-bold text-emerald uppercase block">Completed</span>
          <span className="text-lg font-extrabold text-emerald">
            {activeLessons.filter(l => progress.completedLessons.includes(l.id) && l.verified !== false && l.approved !== false).length} / {activeLessons.filter(l => l.verified !== false && l.approved !== false).length}
          </span>
        </div>
      </div>

      {/* Grid of 10 Lessons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {activeLessons.map((lesson) => {
          const isComplete = progress.completedLessons.includes(lesson.id) && lesson.verified !== false && lesson.approved !== false;
          return (
            <div 
              key={lesson.id}
              onClick={() => handleStartLesson(lesson) /* alias to start lesson */}
              className={`bg-white dark:bg-charcoal-light border p-5 rounded-xl cursor-pointer hover:border-emerald/40 hover:shadow-md transition-all flex flex-col justify-between space-y-4 ${
                isComplete 
                  ? 'border-emerald/30 bg-gradient-to-br from-white to-emerald-bg/5 dark:from-charcoal-light dark:to-emerald/5' 
                  : 'border-charcoal/5 dark:border-ivory/5'
              }`}
            >
              <div>
                <div className="flex justify-between items-start">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1.5">
                    <span className="text-[10px] font-bold text-emerald-dark bg-emerald-bg dark:bg-emerald/10 px-2 py-0.5 rounded font-mono">
                      LESSON {String(lesson.lessonNumber).padStart(2, '0')}
                    </span>
                    {(lesson.verified === false || lesson.approved === false) && (
                      <span className="text-[8px] font-bold text-amber-600 bg-amber-50 dark:bg-amber-950/20 px-1.5 py-0.5 rounded border border-amber-200/30 font-mono uppercase tracking-wider">
                        DRAFT — SOURCE REVIEW PENDING
                      </span>
                    )}
                  </div>
                  
                  {isComplete ? (
                    <div className="flex items-center text-xs text-emerald font-semibold">
                      <CheckCircle className="w-4 h-4 mr-1.5" />
                      Complete
                    </div>
                  ) : (
                    <div className="flex items-center text-[10px] text-charcoal/40 dark:text-ivory/40 font-semibold space-x-2">
                      <span className="flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1" />
                        {lesson.estimatedTime}
                      </span>
                    </div>
                  )}
                </div>

                <h4 className="text-lg font-bold text-charcoal dark:text-white mt-3">
                  {lesson.title}
                </h4>
                
                <p className="text-xs text-charcoal/60 dark:text-ivory/60 mt-1 line-clamp-2">
                  {lesson.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-charcoal/5 dark:border-ivory/5">
                <span className="text-[10px] font-semibold text-charcoal/50 dark:text-ivory/50">
                  Difficulty: {lesson.difficulty}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStartLesson(lesson);
                  }}
                  className="flex items-center text-xs font-semibold text-emerald hover:text-emerald-dark"
                >
                  <span>{isComplete ? 'Review Lesson' : 'Start Lesson'}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
export default Learn;
