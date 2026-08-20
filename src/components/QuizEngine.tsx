import React, { useState, useEffect } from 'react';
import { QuizQuestion } from '../types';
import { Check, X, ArrowRight, Award, AlertCircle, RefreshCw } from 'lucide-react';

interface QuizEngineProps {
  questions: QuizQuestion[];
  onQuizComplete: (score: number, percentage: number) => void;
  onClose: () => void;
}

export const QuizEngine: React.FC<QuizEngineProps> = ({ questions, onQuizComplete, onClose }) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  
  // Scoring
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [incorrectCount, setIncorrectCount] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  // Matching Question States
  const [leftSelected, setLeftSelected] = useState<string | null>(null);
  const [rightSelected, setRightSelected] = useState<string | null>(null);
  const [completedMatches, setCompletedMatches] = useState<string[]>([]); // holds matched left items
  const [shuffledLeft, setShuffledLeft] = useState<string[]>([]);
  const [shuffledRight, setShuffledRight] = useState<string[]>([]);

  const currentQuestion = questions[currentIdx];

  // Helper to shuffle arrays
  const shuffleArray = (arr: string[]) => {
    return [...arr].sort(() => Math.random() - 0.5);
  };

  // Set up matching question when it loads
  useEffect(() => {
    if (currentQuestion && currentQuestion.type === 'matching' && currentQuestion.matchingPairs) {
      const lefts = currentQuestion.matchingPairs.map(p => p.left);
      const rights = currentQuestion.matchingPairs.map(p => p.right);
      setShuffledLeft(shuffleArray(lefts));
      setShuffledRight(shuffleArray(rights));
      setCompletedMatches([]);
      setLeftSelected(null);
      setRightSelected(null);
    }
    setSelectedOpt(null);
    setIsSubmitted(false);
  }, [currentIdx, currentQuestion]);

  const handleOptionSelect = (option: string) => {
    if (isSubmitted) return;
    setSelectedOpt(option);
  };

  const handleMatchSelect = (item: string, side: 'left' | 'right') => {
    if (isSubmitted) return;

    if (side === 'left') {
      setLeftSelected(item);
      // Check if right is already selected and try to match
      if (rightSelected) {
        checkMatch(item, rightSelected);
      }
    } else {
      setRightSelected(item);
      // Check if left is already selected and try to match
      if (leftSelected) {
        checkMatch(leftSelected, item);
      }
    }
  };

  const checkMatch = (left: string, right: string) => {
    const pair = currentQuestion.matchingPairs?.find(p => p.left === left && p.right === right);
    if (pair) {
      // Correct Match!
      setCompletedMatches(prev => [...prev, left]);
      setLeftSelected(null);
      setRightSelected(null);

      // Check if all matched
      if (currentQuestion.matchingPairs && completedMatches.length + 1 === currentQuestion.matchingPairs.length) {
        // Complete correct
        setIsSubmitted(true);
        setSelectedOpt('correct'); // dummy
        setCorrectCount(prev => prev + 1);
      }
    } else {
      // Wrong Match
      setLeftSelected(null);
      setRightSelected(null);
      // Brief feedback can be done by vibrating or visual red glow
      const element = document.getElementById('matching-container');
      if (element) {
        element.classList.add('animate-shake');
        setTimeout(() => element.classList.remove('animate-shake'), 400);
      }
    }
  };

  const handleSubmitAnswer = () => {
    if (isSubmitted || !selectedOpt) return;

    setIsSubmitted(true);
    const correct = selectedOpt === currentQuestion.correctAnswer;
    if (correct) {
      setCorrectCount(prev => prev + 1);
    } else {
      setIncorrectCount(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setQuizFinished(true);
      const percentage = (correctCount / questions.length) * 100;
      onQuizComplete(correctCount, percentage);
    }
  };

  if (questions.length === 0) {
    return (
      <div className="text-center p-8 bg-white dark:bg-charcoal-light border border-charcoal/5 rounded-2xl">
        <AlertCircle className="w-8 h-8 text-amber-500 mx-auto mb-2" />
        <p className="text-sm font-semibold">No questions found in this category.</p>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-emerald text-white rounded-lg text-xs font-semibold">
          Go Back
        </button>
      </div>
    );
  }

  // Quiz End Summary rendering
  if (quizFinished) {
    const percentage = Math.round((correctCount / questions.length) * 100);
    const passed = percentage >= 70;
    
    return (
      <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 dark:border-ivory/5 p-8 rounded-2xl max-w-md mx-auto text-center space-y-6 shadow-sm">
        <div className="flex flex-col items-center">
          <div className="bg-emerald-bg dark:bg-emerald/10 p-4 rounded-full mb-3 text-emerald select-none">
            <Award className="w-12 h-12" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">Quiz Completed!</h2>
          <p className="text-xs text-charcoal/50 dark:text-ivory/50 mt-1">
            Category: {currentQuestion.category.toUpperCase()}
          </p>
        </div>

        <div className="bg-ivory/40 dark:bg-charcoal/20 rounded-xl p-4 border border-charcoal/5 dark:border-ivory/5">
          <div className="grid grid-cols-3 gap-2 divide-x divide-charcoal/10 dark:divide-ivory/10">
            <div>
              <span className="text-[10px] font-bold text-charcoal/40 dark:text-ivory/40 block">CORRECT</span>
              <span className="text-lg font-bold text-emerald">{correctCount}</span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-charcoal/40 dark:text-ivory/40 block">INCORRECT</span>
              <span className="text-lg font-bold text-red-500">{incorrectCount}</span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-charcoal/40 dark:text-ivory/40 block">ACCURACY</span>
              <span className={`text-lg font-bold ${passed ? 'text-emerald' : 'text-amber-500'}`}>
                {percentage}%
              </span>
            </div>
          </div>
        </div>

        {passed ? (
          <div className="bg-emerald-bg dark:bg-emerald/10 p-3 rounded-lg text-xs text-emerald-dark dark:text-emerald-light text-left border border-emerald/10">
            🎉 Great job! You passed the quiz with flying colors. Keep studying!
          </div>
        ) : (
          <div className="bg-amber-50 dark:bg-amber-950/20 p-3 rounded-lg text-xs text-amber-800 dark:text-amber-300 text-left border border-amber-200/50">
            💡 Practice makes perfect! Try reviewing the lesson material and take this quiz again.
          </div>
        )}

        <div className="flex space-x-3 pt-2">
          <button
            onClick={onClose}
            className="flex-1 border border-charcoal/10 dark:border-ivory/10 hover:bg-charcoal/5 dark:hover:bg-ivory/5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
          >
            Close Quiz
          </button>
          <button
            onClick={() => {
              setCurrentIdx(0);
              setCorrectCount(0);
              setIncorrectCount(0);
              setQuizFinished(false);
            }}
            className="flex-1 bg-emerald text-white hover:bg-emerald-dark py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  const progressPercent = (currentIdx / questions.length) * 100;

  return (
    <div className="max-w-xl mx-auto space-y-6">
      {/* Top Navigation */}
      <div className="flex items-center justify-between">
        <button onClick={onClose} className="text-xs font-semibold text-charcoal/40 dark:text-ivory/40 hover:text-emerald">
          ← Quit Quiz
        </button>
        <span className="text-xs font-semibold text-charcoal/60 dark:text-ivory/60">
          Question {currentIdx + 1} of {questions.length}
        </span>
      </div>

      {/* Progress Line */}
      <div className="w-full bg-charcoal/5 dark:bg-ivory/5 h-1.5 rounded-full overflow-hidden">
        <div 
          className="bg-emerald h-full rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 dark:border-ivory/5 p-6 md:p-8 rounded-2xl space-y-6 shadow-sm">
        
        {/* Verification Checkmark */}
        <span className="text-[9px] uppercase font-bold text-emerald bg-emerald-bg dark:bg-emerald/10 px-2 py-0.5 rounded font-mono select-none">
          ✓ Curated Quiz Question
        </span>

        {/* Question Text */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-charcoal dark:text-white leading-normal">
            {currentQuestion.question}
          </h3>
          
          {/* Big Arabic Text (if present) */}
          {currentQuestion.arabicText && (
            <div className="py-4 text-center">
              <span className="font-arabic text-5xl md:text-6xl text-charcoal-dark dark:text-white leading-normal select-none">
                {currentQuestion.arabicText}
              </span>
            </div>
          )}
        </div>

        {/* INTERACTIVE MATCHING QUESTION TYPE */}
        {currentQuestion.type === 'matching' ? (
          <div id="matching-container" className="space-y-4 pt-2">
            <p className="text-xs text-charcoal/40 dark:text-ivory/40 mb-2">
              Connect the Arabic words on the left with their correct meaning on the right:
            </p>
            <div className="grid grid-cols-2 gap-4">
              {/* Left Column (Arabic) */}
              <div className="space-y-2.5">
                {shuffledLeft.map((leftItem) => {
                  const isMatched = completedMatches.includes(leftItem);
                  const isSelected = leftSelected === leftItem;
                  
                  let btnClass = 'border-charcoal/10 hover:border-emerald bg-white text-charcoal';
                  if (isMatched) btnClass = 'bg-emerald/10 border-emerald/20 text-emerald/60 opacity-60';
                  else if (isSelected) btnClass = 'border-emerald bg-emerald-bg/10 text-emerald-dark font-bold shadow-sm';

                  return (
                    <button
                      key={leftItem}
                      disabled={isMatched || isSubmitted}
                      onClick={() => handleMatchSelect(leftItem, 'left')}
                      className={`w-full p-3 border rounded-xl text-center font-arabic text-lg transition-all ${btnClass}`}
                    >
                      {leftItem}
                    </button>
                  );
                })}
              </div>

              {/* Right Column (English) */}
              <div className="space-y-2.5">
                {shuffledRight.map((rightItem) => {
                  // Find corresponding left item
                  const matchingLeft = currentQuestion.matchingPairs?.find(p => p.right === rightItem)?.left || '';
                  const isMatched = completedMatches.includes(matchingLeft);
                  const isSelected = rightSelected === rightItem;

                  let btnClass = 'border-charcoal/10 hover:border-emerald bg-white text-charcoal';
                  if (isMatched) btnClass = 'bg-emerald/10 border-emerald/20 text-emerald/60 opacity-60';
                  else if (isSelected) btnClass = 'border-emerald bg-emerald-bg/10 text-emerald-dark font-bold shadow-sm';

                  return (
                    <button
                      key={rightItem}
                      disabled={isMatched || isSubmitted}
                      onClick={() => handleMatchSelect(rightItem, 'right')}
                      className={`w-full p-3 border rounded-xl text-center text-xs font-semibold transition-all ${btnClass}`}
                    >
                      {rightItem}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          /* STANDARD MULTIPLE CHOICE / TRANSLATION / GRAMMAR-ID OPTIONS */
          <div className="grid gap-3 pt-2">
            {currentQuestion.options?.map((opt) => {
              const isSelected = selectedOpt === opt;
              const isCorrect = opt === currentQuestion.correctAnswer;
              
              let btnClass = 'border-charcoal/10 dark:border-ivory/10 hover:border-emerald bg-white dark:bg-charcoal text-charcoal dark:text-ivory';
              if (isSubmitted) {
                if (isCorrect) {
                  btnClass = 'bg-emerald text-white border-emerald';
                } else if (isSelected) {
                  btnClass = 'bg-red-500 text-white border-red-500';
                } else {
                  btnClass = 'opacity-40 border-charcoal/5 dark:border-ivory/5 cursor-not-allowed';
                }
              } else if (isSelected) {
                btnClass = 'border-emerald bg-emerald-bg/10 text-emerald-dark font-semibold dark:bg-emerald/10 dark:text-emerald-light';
              }

              return (
                <button
                  key={opt}
                  disabled={isSubmitted}
                  onClick={() => handleOptionSelect(opt)}
                  className={`w-full p-4 border rounded-xl text-left text-sm font-medium transition-all duration-150 flex items-center justify-between ${btnClass}`}
                >
                  <span>{opt}</span>
                  {isSubmitted && isCorrect && <Check className="w-4 h-4 text-white" />}
                  {isSubmitted && isSelected && !isCorrect && <X className="w-4 h-4 text-white" />}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Submission Panel */}
      {currentQuestion.type !== 'matching' && !isSubmitted && (
        <button
          disabled={!selectedOpt}
          onClick={handleSubmitAnswer}
          className={`w-full py-3.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center ${
            selectedOpt 
              ? 'bg-charcoal text-white dark:bg-ivory dark:text-charcoal hover:bg-charcoal-light dark:hover:bg-ivory-dark cursor-pointer' 
              : 'bg-charcoal/10 text-charcoal/30 dark:bg-ivory/10 dark:text-ivory/30 cursor-not-allowed'
          }`}
        >
          Check Answer
        </button>
      )}

      {/* feedback message & next button */}
      {isSubmitted && (
        <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 dark:border-ivory/5 p-5 rounded-xl space-y-4 shadow-sm animate-fade-in">
          <div className="flex items-center space-x-2">
            {selectedOpt === 'correct' || selectedOpt === currentQuestion.correctAnswer ? (
              <span className="flex items-center text-emerald text-sm font-bold">
                <Check className="w-5 h-5 mr-1.5" />
                Correct Answer!
              </span>
            ) : (
              <span className="flex items-center text-red-500 text-sm font-bold">
                <X className="w-5 h-5 mr-1.5" />
                Incorrect
              </span>
            )}
          </div>

          {currentQuestion.type !== 'matching' && selectedOpt !== currentQuestion.correctAnswer && (
            <p className="text-xs text-charcoal/50 dark:text-ivory/50">
              The correct answer was: <span className="font-semibold text-charcoal dark:text-white">"{currentQuestion.correctAnswer}"</span>
            </p>
          )}

          <button 
            onClick={handleNextQuestion}
            className="w-full bg-emerald text-white hover:bg-emerald-dark py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center transition-colors"
          >
            <span>{currentIdx + 1 === questions.length ? 'Finish Quiz' : 'Next Question'}</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      )}

    </div>
  );
};
export default QuizEngine;
