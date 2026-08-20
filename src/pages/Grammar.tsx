import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, Clock, ChevronRight, CheckCircle } from 'lucide-react';
import { path3Lessons } from '../data/language';
import { UserProgress } from '../types';

interface GrammarProps {
  progress: UserProgress;
}

export const Grammar: React.FC<GrammarProps> = ({ progress }) => {
  const navigate = useNavigate();

  const handleLessonLaunch = (lessonId: string) => {
    // Navigate to learn page with tab pre-selected and trigger logic
    navigate(`/learn?path=grammar&start=${lessonId}`);
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-charcoal/10 dark:border-ivory/10 pb-4">
        <div>
          <div className="flex items-center space-x-2 text-emerald">
            <Award className="w-6 h-6" />
            <h2 className="text-2xl font-bold tracking-tight text-charcoal dark:text-white">Arabic Grammar Path</h2>
          </div>
          <p className="text-xs text-charcoal/60 dark:text-ivory/60 mt-0.5">
            Learn the structural foundations of Arabic sentences, declensions, and basic verb rules.
          </p>
        </div>
      </div>

      {/* Structured Path Roadmap */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal/40 dark:text-ivory/40">
          Course Syllabus (10 Lessons)
        </h3>

        <div className="grid gap-3">
          {path3Lessons.map((lesson) => {
            const isComplete = progress.completedLessons.includes(lesson.id);
            return (
              <div
                key={lesson.id}
                onClick={() => handleLessonLaunch(lesson.id)}
                className={`bg-white dark:bg-charcoal-light border p-4.5 rounded-xl cursor-pointer hover:border-emerald/40 hover:shadow-sm transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ${
                  isComplete 
                    ? 'border-emerald/20 bg-emerald-bg/5 dark:bg-emerald/5' 
                    : 'border-charcoal/5 dark:border-ivory/5'
                }`}
              >
                <div className="flex items-start space-x-4">
                  {/* Lesson Number Indicator */}
                  <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-charcoal/5 dark:bg-ivory/5 text-charcoal dark:text-ivory flex items-center justify-center font-mono text-xs font-bold">
                    {String(lesson.lessonNumber).padStart(2, '0')}
                  </span>

                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="text-sm font-bold text-charcoal dark:text-white">
                        {lesson.title}
                      </h4>
                      {isComplete && (
                        <span className="flex items-center text-[10px] text-emerald font-semibold">
                          <CheckCircle className="w-3.5 h-3.5 mr-1" />
                          Mastered
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-charcoal/60 dark:text-ivory/60 mt-0.5 leading-normal max-w-xl">
                      {lesson.description}
                    </p>
                  </div>
                </div>

                {/* Right controls */}
                <div className="flex items-center space-x-4 self-end md:self-auto text-xs text-charcoal/40 dark:text-ivory/40">
                  <span className="flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1" />
                    {lesson.estimatedTime}
                  </span>
                  <button
                    className="flex items-center text-xs font-bold text-emerald hover:text-emerald-dark"
                  >
                    <span>{isComplete ? 'Review' : 'Start'}</span>
                    <ChevronRight className="w-4 h-4 ml-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
export default Grammar;
