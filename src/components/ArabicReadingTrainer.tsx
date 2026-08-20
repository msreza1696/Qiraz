import React, { useState } from 'react';
import { Check, X, ArrowRight, Play, RotateCcw, AlertTriangle } from 'lucide-react';
import { UserProgress } from '../types';

interface TrainerItem {
  id: string;
  arabic: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  level: number;
}

const TRAINER_LEVELS = [
  { level: 1, name: 'Consonant Alphabet', desc: 'Identify basic letter sounds (ا ب ت ث ج ح خ)' },
  { level: 2, name: 'Short Vowels (Harakat)', desc: 'Pronounce letters with Fathah, Kasrah, and Dammah (بَ بِ بُ)' },
  { level: 3, name: 'Long Vowels', desc: 'Read stretched sounds (بَا بِي بُو)' },
  { level: 4, name: 'Simple Words', desc: 'Read connected words (كَتَبَ بَيْتٌ كِتَابٌ)' }
];

const TRAINER_ITEMS: TrainerItem[] = [
  // Level 1: Letters
  { id: 't-l1-1', arabic: 'ا', options: ['alif', 'ba', 'ta', 'tha'], correctAnswer: 'alif', explanation: 'Alif is the first letter, acts as a vowel carrier.', level: 1 },
  { id: 't-l1-2', arabic: 'ب', options: ['alif', 'ba', 'ta', 'tha'], correctAnswer: 'ba', explanation: 'Ba is the second letter, represented by one dot below.', level: 1 },
  { id: 't-l1-3', arabic: 'ت', options: ['alif', 'ba', 'ta', 'tha'], correctAnswer: 'ta', explanation: 'Ta has two dots on top.', level: 1 },
  { id: 't-l1-4', arabic: 'ث', options: ['ba', 'ta', 'tha', 'jeem'], correctAnswer: 'tha', explanation: 'Tha is pronounced like the "th" in "think". It has three dots on top.', level: 1 },
  { id: 't-l1-5', arabic: 'ج', options: ['tha', 'jeem', 'ha', 'kha'], correctAnswer: 'jeem', explanation: 'Jeem sounds like the English "j" and has a dot in the middle.', level: 1 },
  { id: 't-l1-6', arabic: 'ح', options: ['jeem', 'ha', 'kha', 'dal'], correctAnswer: 'ha', explanation: 'Ha is a sharp, breathed "h" sound from the middle of the throat.', level: 1 },
  { id: 't-l1-7', arabic: 'خ', options: ['jeem', 'ha', 'kha', 'dal'], correctAnswer: 'kha', explanation: 'Kha is a raspy throat sound, similar to "ch" in German "Bach".', level: 1 },

  // Level 2: Short Vowels
  { id: 't-l2-1', arabic: 'بَ', options: ['ba', 'bi', 'bu'], correctAnswer: 'ba', explanation: 'Fathah (َ) creates the short "a" sound.', level: 2 },
  { id: 't-l2-2', arabic: 'بِ', options: ['ba', 'bi', 'bu'], correctAnswer: 'bi', explanation: 'Kasrah (ِ) creates the short "i" (ee) sound.', level: 2 },
  { id: 't-l2-3', arabic: 'بُ', options: ['ba', 'bi', 'bu'], correctAnswer: 'bu', explanation: 'Dammah (ُ) creates the short "u" (oo) sound.', level: 2 },
  { id: 't-l2-4', arabic: 'تَ', options: ['ta', 'ti', 'tu'], correctAnswer: 'ta', explanation: 'Ta with Fathah makes the short "ta" sound.', level: 2 },
  { id: 't-l2-5', arabic: 'تِ', options: ['ta', 'ti', 'tu'], correctAnswer: 'ti', explanation: 'Ta with Kasrah makes the short "ti" sound.', level: 2 },
  { id: 't-l2-6', arabic: 'تُ', options: ['ta', 'ti', 'tu'], correctAnswer: 'tu', explanation: 'Ta with Dammah makes the short "tu" sound.', level: 2 },

  // Level 3: Long Vowels
  { id: 't-l3-1', arabic: 'بَا', options: ['ba', 'baa', 'bi', 'bee'], correctAnswer: 'baa', explanation: 'Alif elongates the Fathah vowel sound.', level: 3 },
  { id: 't-l3-2', arabic: 'بِي', options: ['bi', 'bee', 'bu', 'boo'], correctAnswer: 'bee', explanation: 'Ya elongates the Kasrah vowel sound.', level: 3 },
  { id: 't-l3-3', arabic: 'بُو', options: ['ba', 'baa', 'bu', 'boo'], correctAnswer: 'boo', explanation: 'Waw elongates the Dammah vowel sound.', level: 3 },
  { id: 't-l3-4', arabic: 'تَا', options: ['ta', 'taa', 'ti', 'tee'], correctAnswer: 'taa', explanation: 'Elongated "taa" sound.', level: 3 },
  { id: 't-l3-5', arabic: 'تِي', options: ['ti', 'tee', 'tu', 'too'], correctAnswer: 'tee', explanation: 'Elongated "tee" sound.', level: 3 },

  // Level 4: Simple Words
  { id: 't-l4-1', arabic: 'كَتَبَ', options: ['kataba', 'kitaba', 'kutuba'], correctAnswer: 'kataba', explanation: 'Three letters ka-ta-ba with short Fathah vowels.', level: 4 },
  { id: 't-l4-2', arabic: 'بَيْتٌ', options: ['baytun', 'biyatun', 'buyutun'], correctAnswer: 'baytun', explanation: 'Contains a silent Ya (Sukoon) and a double dammah Tanween ending: bay-tun.', level: 4 },
  { id: 't-l4-3', arabic: 'قَلَمٌ', options: ['qalamun', 'qilamun', 'qulumun'], correctAnswer: 'qalamun', explanation: 'Spells qalamun, which means "a pen" in Arabic.', level: 4 },
  { id: 't-l4-4', arabic: 'كِتَابٌ', options: ['katabun', 'kitabun', 'kutubun'], correctAnswer: 'kitabun', explanation: 'Contains a long Alif vowel and Tanween ending: ki-taa-bun.', level: 4 }
];

interface ArabicReadingTrainerProps {
  progress: UserProgress;
  onRecordScore: (quizId: string, score: number, percentage: number) => void;
}

export const ArabicReadingTrainer: React.FC<ArabicReadingTrainerProps> = ({ progress, onRecordScore }) => {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [showSummary, setShowSummary] = useState<boolean>(false);

  // Filter items based on selected level
  const activeItems = TRAINER_ITEMS.filter(item => item.level === selectedLevel);

  const handleStartLevel = (level: number) => {
    setSelectedLevel(level);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setShowSummary(false);
  };

  const handleAnswerSubmit = (option: string) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);
    
    if (option === activeItems[currentIndex].correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setIsAnswered(false);

    if (currentIndex + 1 < activeItems.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Completed level
      const finalPercentage = (score / activeItems.length) * 100;
      onRecordScore(`reading-trainer-l${selectedLevel}`, score, finalPercentage);
      setShowSummary(true);
    }
  };

  const handleReset = () => {
    setSelectedLevel(null);
    setShowSummary(false);
  };

  // Rendering level selection
  if (selectedLevel === null) {
    return (
      <div className="space-y-6 max-w-2xl mx-auto">
        <div className="text-center py-6">
          <span className="font-arabic text-5xl text-emerald font-bold mb-2 block select-none">الْمُدَرِّبُ</span>
          <h2 className="text-2xl font-bold tracking-tight">Arabic Reading Trainer</h2>
          <p className="text-charcoal/60 dark:text-ivory/60 mt-2">
            Build muscle memory for sounds, vowels, and simple Arabic words.
          </p>
        </div>

        <div className="grid gap-4">
          {TRAINER_LEVELS.map((lvl) => {
            const levelScores = progress.quizScores[`reading-trainer-l${lvl.level}`];
            const isCompleted = levelScores && levelScores.percentage >= 80;
            return (
              <div 
                key={lvl.level}
                onClick={() => handleStartLevel(lvl.level)}
                className="bg-white dark:bg-charcoal-light border border-charcoal/5 dark:border-ivory/5 p-5 rounded-xl cursor-pointer hover:border-emerald/40 hover:shadow-md transition-all flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-semibold text-emerald bg-emerald-bg dark:bg-emerald/10 px-2 py-0.5 rounded">
                      Level {lvl.level}
                    </span>
                    {isCompleted && (
                      <span className="text-[10px] font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        Passed ({levelScores.percentage.toFixed(0)}%)
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold mt-1.5">{lvl.name}</h3>
                  <p className="text-xs text-charcoal/60 dark:text-ivory/60 mt-0.5">{lvl.desc}</p>
                </div>
                <button className="flex items-center text-xs font-semibold text-emerald bg-emerald-bg dark:bg-emerald/10 hover:bg-emerald hover:text-white px-4 py-2 rounded-lg transition-colors">
                  <Play className="w-4 h-4 mr-1.5 fill-current" />
                  Start
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Rendering level summary/results
  if (showSummary) {
    const passed = (score / activeItems.length) * 100 >= 80;
    return (
      <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 dark:border-ivory/5 p-8 rounded-xl max-w-md mx-auto text-center space-y-6 shadow-sm">
        <div>
          <span className="text-6xl block select-none mb-4">{passed ? '🎉' : '💪'}</span>
          <h2 className="text-2xl font-bold">Level {selectedLevel} Complete!</h2>
          <p className="text-charcoal/60 dark:text-ivory/60 mt-1">
            You completed the level: {TRAINER_LEVELS.find(l => l.level === selectedLevel)?.name}
          </p>
        </div>

        <div className="py-4 border-y border-charcoal/5 dark:border-ivory/5">
          <div className="flex justify-between items-center px-4 mb-2">
            <span className="text-sm text-charcoal/60 dark:text-ivory/60">Score</span>
            <span className="text-lg font-bold">{score} / {activeItems.length}</span>
          </div>
          <div className="flex justify-between items-center px-4">
            <span className="text-sm text-charcoal/60 dark:text-ivory/60">Accuracy</span>
            <span className={`text-lg font-bold ${passed ? 'text-emerald' : 'text-amber-600'}`}>
              {((score / activeItems.length) * 100).toFixed(0)}%
            </span>
          </div>
        </div>

        {passed ? (
          <div className="bg-emerald-bg dark:bg-emerald/10 p-3 rounded-lg flex items-center space-x-2 text-left">
            <Check className="w-5 h-5 text-emerald flex-shrink-0" />
            <p className="text-xs text-emerald-dark dark:text-emerald-light">
              Excellent! You have mastered these letters and vowels. You can move to the next level.
            </p>
          </div>
        ) : (
          <div className="bg-amber-50 dark:bg-amber-950/20 p-3 rounded-lg flex items-center space-x-2 text-left">
            <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0" />
            <p className="text-xs text-amber-800 dark:text-amber-300">
              We recommend scoring at least 80% to pass. Try practicing this level again.
            </p>
          </div>
        )}

        <div className="flex space-x-3">
          <button 
            onClick={handleReset}
            className="flex-1 border border-charcoal/10 dark:border-ivory/10 hover:bg-charcoal/5 dark:hover:bg-ivory/5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
          >
            All Levels
          </button>
          <button 
            onClick={() => handleStartLevel(selectedLevel)}
            className="flex-1 bg-emerald text-white hover:bg-emerald-dark py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Retry Level
          </button>
        </div>
      </div>
    );
  }

  // Active question render
  const currentItem = activeItems[currentIndex];
  const progressPercent = (currentIndex / activeItems.length) * 100;

  return (
    <div className="max-w-xl mx-auto space-y-6">
      {/* Header / Info bar */}
      <div className="flex items-center justify-between">
        <button 
          onClick={handleReset}
          className="text-xs font-semibold text-charcoal/50 dark:text-ivory/50 hover:text-emerald transition-colors"
        >
          ← Quit Level
        </button>
        <span className="text-xs font-semibold text-charcoal/60 dark:text-ivory/60">
          Letter {currentIndex + 1} of {activeItems.length}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-charcoal/5 dark:bg-ivory/5 h-1.5 rounded-full overflow-hidden">
        <div 
          className="bg-emerald h-full rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 dark:border-ivory/5 p-8 rounded-2xl flex flex-col items-center justify-center space-y-6 shadow-sm">
        {/* Verification Tag */}
        <span className="text-[10px] text-emerald bg-emerald-bg dark:bg-emerald/10 px-2 py-0.5 rounded font-mono select-none">
          ✓ Verified Sound
        </span>

        {/* Large Arabic Typography */}
        <div className="py-8 w-full flex items-center justify-center">
          <span 
            className="font-arabic text-8xl md:text-9xl text-charcoal-dark dark:text-white leading-normal select-none"
            style={{ fontSize: progress.arabicFontSize === 'xl' ? '6rem' : '7.5rem' }}
          >
            {currentItem.arabic}
          </span>
        </div>

        <p className="text-sm font-medium text-charcoal/50 dark:text-ivory/50">
          Choose the correct pronunciation or spelling:
        </p>

        {/* Option Selectors */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full">
          {currentItem.options.map((opt) => {
            const isSelected = selectedAnswer === opt;
            const isCorrect = opt === currentItem.correctAnswer;
            
            let btnClass = 'border border-charcoal/10 dark:border-ivory/10 hover:border-emerald/40 hover:bg-emerald-bg/10';
            if (isAnswered) {
              if (isCorrect) {
                btnClass = 'bg-emerald text-white border-emerald';
              } else if (isSelected) {
                btnClass = 'bg-red-500 text-white border-red-500';
              } else {
                btnClass = 'opacity-40 border-charcoal/5 dark:border-ivory/5 cursor-not-allowed';
              }
            }

            return (
              <button
                key={opt}
                disabled={isAnswered}
                onClick={() => handleAnswerSubmit(opt)}
                className={`py-3.5 rounded-xl text-lg font-bold transition-all flex items-center justify-center space-x-1.5 ${btnClass}`}
              >
                <span>{opt}</span>
                {isAnswered && isCorrect && <Check className="w-4 h-4" />}
                {isAnswered && isSelected && !isCorrect && <X className="w-4 h-4" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Answer feedback and details */}
      {isAnswered && (
        <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 dark:border-ivory/5 p-5 rounded-xl space-y-3 animate-fade-in shadow-sm">
          <div className="flex items-center space-x-2">
            {selectedAnswer === currentItem.correctAnswer ? (
              <div className="flex items-center text-emerald text-sm font-bold">
                <Check className="w-5 h-5 mr-1.5" />
                Correct Sound!
              </div>
            ) : (
              <div className="flex items-center text-red-500 text-sm font-bold">
                <X className="w-5 h-5 mr-1.5" />
                Incorrect. Correct is "{currentItem.correctAnswer}"
              </div>
            )}
          </div>
          
          <p className="text-xs text-charcoal/60 dark:text-ivory/60">
            {currentItem.explanation}
          </p>

          <button 
            onClick={handleNext}
            className="w-full bg-charcoal text-white dark:bg-ivory dark:text-charcoal hover:bg-charcoal-light dark:hover:bg-ivory-dark py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center"
          >
            <span>Next Question</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      )}
    </div>
  );
};
export default ArabicReadingTrainer;
