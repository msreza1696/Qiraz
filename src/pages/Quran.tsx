import React from 'react';
import { fatihahVerses } from '../data/quran';
import QuranWordSelector from '../components/QuranWordSelector';
import { UserProgress } from '../types';
import { Bookmark, ShieldAlert, Sparkles, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface QuranProps {
  progress: UserProgress;
}

export const Quran: React.FC<QuranProps> = ({ progress }) => {
  const navigate = useNavigate();

  // Count approved sources in our loaded dataset
  const allSources = [
    ...fatihahVerses.map(v => v.arabic),
    ...fatihahVerses.map(v => v.translation),
    ...fatihahVerses.flatMap(v => v.words.map(w => w.translation)),
    ...fatihahVerses.flatMap(v => v.words.map(w => w.grammar))
  ];
  
  const approvedCount = allSources.filter(s => progress.sourceApprovals[s.id] === true || s.approved).length;
  const totalCount = allSources.length;
  const anyUnapproved = approvedCount < totalCount;

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-charcoal/10 dark:border-ivory/10 pb-4">
        <div>
          <div className="flex items-center space-x-2 text-emerald">
            <Bookmark className="w-6 h-6" />
            <h2 className="text-2xl font-bold tracking-tight text-charcoal dark:text-white">Qur'an Study Room</h2>
          </div>
          <p className="text-xs text-charcoal/60 dark:text-ivory/60 mt-0.5">
            Analyze exact scripture, word segmentations, and linguistic attributes.
          </p>
        </div>
      </div>

      {/* Strict Source Control Warning Card */}
      {anyUnapproved ? (
        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200/40 dark:border-amber-900/30 p-5 rounded-2xl space-y-3">
          <div className="flex items-start space-x-3">
            <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-amber-800 dark:text-amber-300">
                Source Approvals Pending ({approvedCount}/{totalCount} items verified)
              </h4>
              <p className="text-xs text-amber-800 dark:text-amber-300/80 leading-normal mt-0.5">
                In compliance with QIRAZ Source Approval Policies, Quranic translation, Arabic scripts, and grammatical categories are locked by default. Unapproved segments will render the required fallback warning.
              </p>
            </div>
          </div>
          <div className="pt-2 border-t border-amber-200/30 flex justify-between items-center text-xs">
            <span className="text-amber-800/60 dark:text-amber-300/60 italic font-mono">
              Role: Project Owner Review Required
            </span>
            <button
              onClick={() => navigate('/settings')}
              className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-1.5 rounded-lg font-semibold transition-colors"
            >
              Go to Source Manager
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-emerald-bg dark:bg-emerald/10 border border-emerald/20 p-4 rounded-xl flex items-center space-x-3 text-xs text-emerald-dark dark:text-emerald-light">
          <Sparkles className="w-5 h-5 text-emerald" />
          <span>
            <strong>Authoritative Registry Active:</strong> All 7 verses of Surah Al-Fatihah, translations, and morphological analyses have been audited and approved by the project owner.
          </span>
        </div>
      )}

      {/* Surah Introductory Panel */}
      <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 dark:border-ivory/5 p-6 rounded-2xl shadow-sm text-center space-y-2 select-none">
        <span className="font-arabic text-3xl text-emerald font-bold block">سُورَةُ الْفَاتِحَةِ</span>
        <h3 className="text-lg font-bold">Surah Al-Fatihah</h3>
        <p className="text-xs text-charcoal/50 dark:text-ivory/50">"The Opening" &bull; 7 Verses &bull; Revealed in Makkah</p>
      </div>

      {/* List of 7 Verses (Word Selector interface) */}
      <div className="space-y-6">
        {fatihahVerses.map((verse) => (
          <QuranWordSelector
            key={verse.id}
            verse={verse}
            progress={progress}
          />
        ))}
      </div>

      {/* Safe Theological Explanations Notice */}
      <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 p-5 rounded-xl flex items-start space-x-3 text-xs text-charcoal/60 dark:text-ivory/60 leading-relaxed select-none">
        <AlertCircle className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-charcoal dark:text-white">Note on Theological Commentary (Tafsir/Aqeedah):</span>
          <p className="mt-0.5">
            This study room highlights general morphology and grammatical connections (Nouns, Verbs, Particles, Roots) strictly for educational purposes. We do not provide sect-based theological interpretations or Tafsir unless a verified source document is explicitly linked and marked approved by the project owner.
          </p>
        </div>
      </div>

    </div>
  );
};
export default Quran;
