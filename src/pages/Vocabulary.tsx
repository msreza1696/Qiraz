import React, { useState } from 'react';
import { vocabularyList } from '../data/vocabulary';
import { VocabularyWord, UserProgress } from '../types';
import RootExplorer from '../components/RootExplorer';
import ListenButton from '../components/ListenButton';
import { 
  Compass, 
  RotateCcw, 
  Check, 
  X, 
  BookOpen, 
  Info
} from 'lucide-react';

interface VocabularyProps {
  progress: UserProgress;
  onReviewVocabulary: (wordId: string, correct: boolean) => void;
}

export const Vocabulary: React.FC<VocabularyProps> = ({ progress, onReviewVocabulary }) => {
  const [activeTab, setActiveTab] = useState<'spaced-rep' | 'roots' | 'dictionary'>('spaced-rep');
  
  // Flashcard states
  const [currentCardIdx, setCurrentCardIdx] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [sessionCompleted, setSessionCompleted] = useState<boolean>(false);

  // Spaced repetition scheduler filter:
  // Show words that have box data due, or let them review everything.
  // For V1 demo ease, we fetch all 30+ words but prioritize those in box 1 or overdue.
  
  const getDueWords = (): VocabularyWord[] => {
    return vocabularyList.filter(word => {
      const boxData = progress.vocabularyBoxes[word.id];
      if (!boxData) return true; // not reviewed yet
      return new Date(boxData.nextReview) <= new Date() || boxData.box === 1;
    });
  };

  const dueWords = getDueWords();
  // Fall back to all words if no due words are left in this session
  const activeSessionWords = dueWords.length > 0 ? dueWords : vocabularyList;

  const handleReview = (wordId: string, correct: boolean) => {
    onReviewVocabulary(wordId, correct);
    setIsFlipped(false);
    
    if (currentCardIdx + 1 < activeSessionWords.length) {
      setCurrentCardIdx(prev => prev + 1);
    } else {
      setSessionCompleted(true);
    }
  };

  const handleRestartSession = () => {
    setCurrentCardIdx(0);
    setIsFlipped(false);
    setSessionCompleted(false);
  };

  const currentWord = activeSessionWords[currentCardIdx];

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-charcoal/10 dark:border-ivory/10 pb-4">
        <div>
          <div className="flex items-center space-x-2 text-emerald">
            <Compass className="w-6 h-6" />
            <h2 className="text-2xl font-bold tracking-tight text-charcoal dark:text-white">Vocabulary Workspace</h2>
          </div>
          <p className="text-xs text-charcoal/60 dark:text-ivory/60 mt-0.5">
            Train your Quranic vocabulary using spaced repetition cards and morphology explorers.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="bg-charcoal/5 dark:bg-ivory/10 p-1 rounded-xl flex space-x-1 self-start">
          {[
            { id: 'spaced-rep', label: 'Flashcards', icon: RotateCcw },
            { id: 'roots', label: 'Roots Explorer', icon: Compass },
            { id: 'dictionary', label: 'Dictionary', icon: BookOpen }
          ].map((tab) => {
            const Icon = tab.icon;
            const isTabActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                  isTabActive
                    ? 'bg-emerald text-white shadow-sm'
                    : 'text-charcoal/60 dark:text-ivory/60 hover:text-charcoal dark:hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5 mr-1" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 1. TAB: SPACED REPETITION FLASHCARDS */}
      {activeTab === 'spaced-rep' && (
        <div className="space-y-6">
          
          {sessionCompleted ? (
            <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 p-8 rounded-2xl max-w-md mx-auto text-center space-y-6 shadow-sm">
              <span className="text-6xl block select-none mb-2">🌸</span>
              <h3 className="text-xl font-bold">Session Completed!</h3>
              <p className="text-xs text-charcoal/60 dark:text-ivory/60 leading-normal max-w-xs mx-auto">
                Masha Allah, you have reviewed all due vocabulary items for this session. Spaced repetition dates have been stored in LocalStorage.
              </p>
              
              <div className="bg-emerald-bg dark:bg-emerald/10 border border-emerald/10 p-3.5 rounded-xl text-xs text-emerald-dark dark:text-emerald-light">
                Vocabulary knowledge helps you recognize recurring root concepts in Salat.
              </div>

              <button
                onClick={handleRestartSession}
                className="w-full bg-emerald text-white hover:bg-emerald-dark py-2.5 rounded-lg text-xs font-bold transition-colors"
              >
                Practice All Vocabulary Cards Again
              </button>
            </div>
          ) : (
            currentWord && (
              <div className="max-w-md mx-auto space-y-6">
                
                {/* Session Card Info */}
                <div className="flex justify-between items-center text-xs text-charcoal/50 dark:text-ivory/50">
                  <span>Due Cards: {activeSessionWords.length - currentCardIdx} remaining</span>
                  <span>Box level: {progress.vocabularyBoxes[currentWord.id]?.box || 1} / 5</span>
                </div>

                {/* Interactive Flippable Card */}
                <div 
                  className={`bg-white dark:bg-charcoal-light border border-charcoal/5 p-8 rounded-2xl min-h-[320px] flex flex-col justify-between items-center text-center shadow-sm transition-all duration-300 relative ${
                    isFlipped ? 'border-emerald-light shadow-md' : 'hover:border-charcoal/10'
                  }`}
                >
                  {/* Verified tag */}
                  <span className="text-[9px] uppercase font-bold text-emerald bg-emerald-bg dark:bg-emerald/10 px-2.5 py-0.5 rounded font-mono select-none">
                    ✓ Verified Word Card
                  </span>

                  {/* Front Side: Large Arabic Script */}
                  <div className="py-6 w-full flex flex-col items-center">
                    <span 
                      className="font-arabic text-6xl md:text-7xl text-charcoal-dark dark:text-white leading-normal select-none"
                      style={{ fontSize: progress.arabicFontSize === 'xl' ? '4.5rem' : '5rem' }}
                    >
                      {currentWord.arabic}
                    </span>

                    {/* Arabic Pronunciation — TTS only, NOT Quran recitation */}
                    <div className="mt-3">
                      <ListenButton arabicText={currentWord.arabic} label="🔊 Arabic Pronunciation" size="sm" />
                    </div>

                    {!isFlipped && (
                      <button
                        onClick={() => setIsFlipped(true)}
                        className="mt-6 px-4 py-2 border border-charcoal/10 dark:border-ivory/10 hover:border-emerald/40 hover:bg-emerald-bg/10 rounded-lg text-xs font-semibold transition-colors"
                      >
                        Reveal Details
                      </button>
                    )}
                  </div>

                  {/* Back Side: Transliteration, Meaning, Grammar */}
                  {isFlipped && (
                    <div className="w-full pt-4 border-t border-charcoal/5 space-y-3 text-left animate-fade-in">
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-[10px] text-charcoal/40 dark:text-ivory/40 block">MEANING</span>
                          <span className="font-bold text-sm text-charcoal dark:text-white">{currentWord.meaning}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-charcoal/40 dark:text-ivory/40 block">TRANSLITERATION</span>
                          <span className="font-mono font-medium text-sm">[{currentWord.transliteration}]</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs border-t border-charcoal/5 pt-2">
                        <div>
                          <span className="text-[10px] text-charcoal/40 dark:text-ivory/40 block">THREE-LETTER ROOT</span>
                          <span className="font-arabic text-sm font-bold text-emerald">{currentWord.root || 'N/A'}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-charcoal/40 dark:text-ivory/40 block">PART OF SPEECH</span>
                          <span className="text-xs font-medium">{currentWord.partOfSpeech}</span>
                        </div>
                      </div>

                      {currentWord.exampleSentence && (
                        <div className="border-t border-charcoal/5 pt-2 text-xs">
                          <span className="text-[10px] text-charcoal/40 dark:text-ivory/40 block">QUR'ANIC CONTEXT</span>
                          <span className="font-arabic text-base text-charcoal dark:text-white leading-normal text-right block dir-rtl">
                            {currentWord.exampleSentence}
                          </span>
                          <span className="text-[10px] text-emerald-dark/60 dark:text-emerald-light/60 mt-0.5 block italic text-right font-mono">
                            Ref: {currentWord.quranicOccurrence}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Controls below card */}
                  {isFlipped ? (
                    <div className="flex space-x-3 w-full pt-4 mt-4 border-t border-charcoal/5">
                      <button
                        onClick={() => handleReview(currentWord.id, false)}
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-1"
                      >
                        <X className="w-4 h-4" />
                        <span>Practice Again</span>
                      </button>
                      <button
                        onClick={() => handleReview(currentWord.id, true)}
                        className="flex-1 bg-emerald hover:bg-emerald-dark text-white py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-1"
                      >
                        <Check className="w-4 h-4" />
                        <span>I Know This</span>
                      </button>
                    </div>
                  ) : (
                    <div className="w-full text-center text-[10px] text-charcoal/40 dark:text-ivory/40 py-2 border-t border-charcoal/5">
                      Tap reveal details to review spelling, grammar, and translation.
                    </div>
                  )}
                </div>

                {/* Study Tip Box */}
                <div className="bg-emerald-bg/10 dark:bg-emerald/5 border border-emerald/10 p-4 rounded-xl flex items-start space-x-2 text-xs">
                  <Info className="w-4.5 h-4.5 text-emerald mt-0.5 flex-shrink-0" />
                  <p className="text-charcoal/70 dark:text-ivory/70 leading-relaxed">
                    Spaced repetition helps move words from short-term to long-term memory. Over time, "I Know This" words appear less frequently, saving study time.
                  </p>
                </div>

              </div>
            )
          )}
        </div>
      )}

      {/* 2. TAB: ROOTS EXPLORER */}
      {activeTab === 'roots' && (
        <RootExplorer progress={progress} />
      )}

      {/* 3. TAB: WORD DICTIONARY LIST */}
      {activeTab === 'dictionary' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal/40 dark:text-ivory/40">
              Verified Word Database ({vocabularyList.length} items)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {vocabularyList.map((word) => {
              const isVerified = word.verified || progress.languageVerifications[word.id] === true;
              return (
                <div 
                  key={word.id}
                  className="bg-white dark:bg-charcoal-light border border-charcoal/5 dark:border-ivory/5 p-4 rounded-xl flex justify-between items-start"
                >
                  <div className="space-y-2.5">
                    <div>
                      <h4 className="text-sm font-bold text-charcoal dark:text-white">
                        {word.meaning}
                      </h4>
                      <p className="text-xs text-charcoal/50 dark:text-ivory/50 font-mono">
                        [{word.transliteration}] &bull; {word.partOfSpeech}
                      </p>
                    </div>

                    <div className="flex space-x-4 text-[10px]">
                      <div>
                        <span className="text-charcoal/40 dark:text-ivory/40 block">ROOT</span>
                        <span className="font-arabic font-bold text-emerald">{word.root || 'N/A'}</span>
                      </div>
                      <div>
                        <span className="text-charcoal/40 dark:text-ivory/40 block">QURAN REF</span>
                        <span className="font-mono font-medium">{word.quranicOccurrence?.split(' ')[1] || 'N/A'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right space-y-2">
                    <span className="font-arabic text-3xl text-charcoal-dark dark:text-white font-bold select-none leading-none block">
                      {word.arabic}
                    </span>
                    <div className="flex justify-end">
                      <ListenButton arabicText={word.arabic} compact size="sm" />
                    </div>
                    {isVerified ? (
                      <span className="text-[8px] bg-emerald-bg dark:bg-emerald/10 text-emerald px-1.5 py-0.2 rounded font-bold inline-block">
                        Verified
                      </span>
                    ) : (
                      <span className="text-[8px] bg-amber-50 text-amber-600 px-1.5 py-0.2 rounded font-bold inline-block border border-amber-200">
                        Pending
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
};
export default Vocabulary;
