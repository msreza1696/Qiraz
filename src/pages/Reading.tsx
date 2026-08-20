import React from 'react';
import ArabicReadingTrainer from '../components/ArabicReadingTrainer';
import { UserProgress } from '../types';
import { Volume2 } from 'lucide-react';

interface ReadingProps {
  progress: UserProgress;
  onRecordScore: (quizId: string, score: number, percentage: number) => void;
}

export const Reading: React.FC<ReadingProps> = ({ progress, onRecordScore }) => {
  return (
    <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-charcoal/10 dark:border-ivory/10 pb-4">
        <div>
          <div className="flex items-center space-x-2 text-emerald">
            <Volume2 className="w-6 h-6" />
            <h2 className="text-2xl font-bold tracking-tight text-charcoal dark:text-white">Arabic Reading Trainer</h2>
          </div>
          <p className="text-xs text-charcoal/60 dark:text-ivory/60 mt-0.5">
            Perfect your phonetics by listening and choosing the correct sound patterns.
          </p>
        </div>
      </div>

      {/* Mounting Trainer */}
      <ArabicReadingTrainer 
        progress={progress}
        onRecordScore={onRecordScore}
      />

    </div>
  );
};
export default Reading;
