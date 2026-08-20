import React from 'react';
import { ArrowRight, BookOpen, Compass, Award } from 'lucide-react';

interface LandingProps {
  onStart: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-charcoal text-ivory flex flex-col justify-between font-sans">
      
      {/* Top Header */}
      <header className="p-6 max-w-7xl mx-auto w-full flex justify-between items-center border-b border-charcoal-lighter/10">
        <div className="flex items-center space-x-2 select-none">
          <span className="font-arabic text-3xl font-bold text-gold">قِيرَاز</span>
          <span className="text-xl tracking-widest font-semibold text-ivory">QIRAZ</span>
        </div>
        <span className="text-[10px] text-ivory/40 uppercase tracking-widest select-none">V1 PWA Release</span>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto py-12 md:py-24 space-y-8">
        
        {/* Arabic Brandmark Badge */}
        <div className="bg-charcoal-light border border-charcoal-lighter/20 px-6 py-4 rounded-2xl shadow-lg inline-block select-none animate-fade-in">
          <span className="font-arabic text-5xl md:text-6xl text-gold block leading-none">قِيرَاز</span>
          <span className="text-xs text-ivory/50 mt-1 block tracking-widest uppercase">QIRAZ</span>
        </div>

        {/* Headlines */}
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Your journey into Arabic <br />
            <span className="text-emerald-light">starts here.</span>
          </h1>
          <p className="text-base md:text-xl text-ivory-dark max-w-xl mx-auto leading-relaxed">
            Learn to read. Understand the Qur'an. Build real Arabic skills with a premium learning engine.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md pt-4">
          <button
            onClick={onStart}
            className="w-full sm:w-auto bg-emerald text-white hover:bg-emerald-light px-8 py-4 rounded-xl text-sm font-semibold transition-all flex items-center justify-center shadow-md hover:-translate-y-0.5"
          >
            <span>Start Learning</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
          
          <button
            onClick={onStart}
            className="w-full sm:w-auto border border-ivory/20 hover:border-ivory/40 hover:bg-charcoal-light px-8 py-4 rounded-xl text-sm font-semibold transition-all flex items-center justify-center"
          >
            Explore QIRAZ
          </button>
        </div>

        {/* Taxonomic pillars showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-12 md:pt-16 max-w-3xl text-left">
          <div className="bg-charcoal-light/50 border border-charcoal-lighter/10 p-5 rounded-xl space-y-2">
            <BookOpen className="w-5 h-5 text-gold" />
            <h3 className="text-sm font-bold text-white">1. Arabic Literacy</h3>
            <p className="text-xs text-ivory/60 leading-normal">
              Master the alphabet, letters connecting shapes, and phonetic pronunciation with the Reading Trainer.
            </p>
          </div>
          <div className="bg-charcoal-light/50 border border-charcoal-lighter/10 p-5 rounded-xl space-y-2">
            <Compass className="w-5 h-5 text-emerald-light" />
            <h3 className="text-sm font-bold text-white">2. Qur'anic Vocabulary</h3>
            <p className="text-xs text-ivory/60 leading-normal">
              Study segmentations, translations, and morphological roots for Surah Al-Fatihah, backed by owner approvals.
            </p>
          </div>
          <div className="bg-charcoal-light/50 border border-charcoal-lighter/10 p-5 rounded-xl space-y-2">
            <Award className="w-5 h-5 text-amber-500" />
            <h3 className="text-sm font-bold text-white">3. Practical Grammar</h3>
            <p className="text-xs text-ivory/60 leading-normal">
              Grasp nouns, verbs, particles, possessive constructions, and basic verb conjugations in easy-to-follow paths.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-xs text-ivory/40 border-t border-charcoal-lighter/10 select-none">
        <p>© 2026 QIRAZ. Read Arabic. Understand the Qur'an. Speak Arabic.</p>
        <p className="mt-1 text-[10px] text-ivory/30">
          Source locked content governance is enforced. No AI-generated theological text.
        </p>
      </footer>

    </div>
  );
};
export default Landing;
