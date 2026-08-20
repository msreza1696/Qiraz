import React, { useState } from 'react';
import { QuranVerse, QuranWord, UserProgress } from '../types';
import { Bookmark, ShieldAlert, Sparkles, BookOpen } from 'lucide-react';
import { vocabularyList } from '../data/vocabulary';

interface QuranWordSelectorProps {
  verse: QuranVerse;
  progress: UserProgress;
}

export const QuranWordSelector: React.FC<QuranWordSelectorProps> = ({ verse, progress }) => {
  const [selectedWord, setSelectedWord] = useState<QuranWord | null>(null);

  // Helper to check if a source item is approved (either originally or overridden by project owner in settings)
  const isApproved = (sourceItem: { id: string; approved: boolean }) => {
    if (progress.sourceApprovals[sourceItem.id] === true) return true;
    return sourceItem.approved;
  };

  // Look up related vocabulary card links
  const verseVocabulary = vocabularyList.filter(vocab => verse.vocabularyIds.includes(vocab.id));

  return (
    <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 dark:border-ivory/5 p-6 rounded-2xl space-y-6 shadow-sm">
      {/* Verse Number & Header */}
      <div className="flex justify-between items-center pb-3 border-b border-charcoal/5 dark:border-ivory/5">
        <div className="flex items-center space-x-2 text-emerald">
          <Bookmark className="w-5 h-5" />
          <span className="text-xs font-bold font-mono">VERSE 1:{verse.verseNumber}</span>
        </div>
        <span className="text-[10px] bg-charcoal/5 dark:bg-ivory/10 px-2 py-0.5 rounded font-mono text-charcoal/50 dark:text-ivory/50">
          Source: Surah Al-Fatihah
        </span>
      </div>

      {/* Beautiful Large Arabic Verse (Word clickable) */}
      <div className="py-6 text-center select-none">
        {/* Check if verse Arabic text itself is approved */}
        {isApproved(verse.arabic) ? (
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-3 dir-rtl px-4">
            {verse.words.map((word) => {
              const isSelected = selectedWord?.wordId === word.wordId;
              return (
                <button
                  key={word.wordId}
                  onClick={() => setSelectedWord(word)}
                  className={`font-arabic text-3xl md:text-4xl px-3 py-1.5 rounded-xl transition-all duration-150 ${
                    isSelected
                      ? 'bg-emerald text-white scale-105 shadow-sm'
                      : 'hover:bg-emerald-bg dark:hover:bg-emerald/10 text-charcoal-dark dark:text-white border border-transparent hover:border-emerald/10'
                  }`}
                  title="Click for word-by-word grammar breakdown"
                >
                  {word.arabic}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="py-4 px-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/30 rounded-xl text-center">
            <ShieldAlert className="w-5 h-5 text-amber-500 mx-auto mb-1.5 animate-pulse" />
            <p className="text-xs font-medium text-amber-800 dark:text-amber-300">
              Arabic Quran Text: QIRAZ does not currently have an approved source for this information.
            </p>
          </div>
        )}
      </div>

      {/* Whole Verse Translation */}
      <div className="bg-ivory-dark/30 dark:bg-charcoal/20 p-4 rounded-xl space-y-1">
        <h4 className="text-[10px] font-bold text-charcoal/40 dark:text-ivory/40 uppercase tracking-widest">
          Verse Translation
        </h4>
        {isApproved(verse.translation) ? (
          <p className="text-sm italic text-charcoal/80 dark:text-ivory/90 leading-relaxed">
            "{verse.translation.exactText}"
          </p>
        ) : (
          <p className="text-xs text-amber-600 dark:text-amber-400 font-mono italic">
            QIRAZ does not currently have an approved source for this information.
          </p>
        )}
      </div>

      {/* Word-by-word Details Drawer/Modal (if word selected) */}
      {selectedWord ? (
        <div className="border border-emerald/20 bg-emerald-bg/10 dark:bg-emerald/5 p-5 rounded-xl space-y-4 animate-slide-up">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[10px] font-bold text-emerald uppercase tracking-widest block">
                Selected Word Breakdown
              </span>
              <h3 className="font-arabic text-3xl text-emerald font-bold mt-1">
                {selectedWord.arabic}
              </h3>
              <p className="text-xs text-charcoal/50 dark:text-ivory/50 mt-0.5">
                Transliteration: <span className="font-medium text-charcoal dark:text-ivory">{selectedWord.transliteration}</span>
              </p>
            </div>
            <button
              onClick={() => setSelectedWord(null)}
              className="text-xs font-semibold text-charcoal/40 dark:text-ivory/40 hover:text-charcoal dark:hover:text-ivory bg-charcoal/5 dark:bg-ivory/5 px-2 py-1 rounded"
            >
              Clear
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-emerald/10">
            {/* Word Translation */}
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-charcoal/50 dark:text-ivory/50 block">
                Literal Word Meaning
              </span>
              {isApproved(selectedWord.translation) ? (
                <div className="bg-white dark:bg-charcoal/40 p-2.5 rounded-lg border border-charcoal/5 text-sm font-semibold">
                  {selectedWord.translation.exactText}
                </div>
              ) : (
                <div className="bg-amber-50 dark:bg-amber-950/10 p-2.5 rounded-lg border border-amber-100 text-xs text-amber-800 dark:text-amber-300 italic font-mono">
                  QIRAZ does not currently have an approved source for this information.
                </div>
              )}
            </div>

            {/* Word Grammar */}
            <div className="space-y-1">
              <div className="flex items-center space-x-1.5">
                <span className="text-[10px] font-bold text-charcoal/50 dark:text-ivory/50">
                  Linguistic Analysis
                </span>
                <span className="text-[9px] font-bold text-emerald bg-emerald-bg dark:bg-emerald/10 px-1.5 py-0.2 rounded select-none">
                  Beginner Explanation
                </span>
              </div>
              {isApproved(selectedWord.grammar) ? (
                <div className="bg-white dark:bg-charcoal/40 p-2.5 rounded-lg border border-charcoal/5 text-sm">
                  {selectedWord.grammar.exactText}
                </div>
              ) : (
                <div className="bg-amber-50 dark:bg-amber-950/10 p-2.5 rounded-lg border border-amber-100 text-xs text-amber-800 dark:text-amber-300 italic font-mono">
                  QIRAZ does not currently have an approved source for this information.
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="py-8 text-center text-xs text-charcoal/40 dark:text-ivory/40 border border-dashed border-charcoal/10 rounded-xl">
          <BookOpen className="w-5 h-5 mx-auto mb-2 text-charcoal/20" />
          Click individual words in the verse above to see their linguistic categories, meanings, and roots.
        </div>
      )}

      {/* Vocabulary Highlight in Verse */}
      {verseVocabulary.length > 0 && (
        <div className="space-y-2 pt-3 border-t border-charcoal/5 dark:border-ivory/5">
          <h4 className="text-[10px] font-bold text-charcoal/40 dark:text-ivory/40 uppercase tracking-widest flex items-center">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-gold" />
            Core Vocabulary Linked
          </h4>
          <div className="flex flex-wrap gap-2">
            {verseVocabulary.map((vocab) => (
              <div
                key={vocab.id}
                className="bg-gold/5 border border-gold/20 px-3 py-1.5 rounded-lg flex items-center space-x-2"
              >
                <span className="font-arabic font-bold text-lg text-gold-dark dark:text-gold-light">
                  {vocab.arabic}
                </span>
                <span className="text-xs text-charcoal/60 dark:text-ivory/60">
                  {vocab.transliteration} ({vocab.meaning})
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default QuranWordSelector;
