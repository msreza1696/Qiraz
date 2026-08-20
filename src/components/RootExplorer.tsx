import React, { useState } from 'react';
import { Search, Compass, AlertCircle, CheckCircle, ShieldAlert } from 'lucide-react';
import { UserProgress } from '../types';

interface RootItem {
  id: string;
  letters: string; // e.g. "ك ت ب"
  transliteration: string; // e.g. "K-T-B"
  coreConcept: string; // e.g. "Writing / Recording"
  explanation: string;
  verified: boolean;
  verifiedBy: string;
  derivedWords: Array<{
    arabic: string;
    transliteration: string;
    meaning: string;
    morphologyPattern: string; // e.g. "Fi'l past tense", "Ism fa'il"
  }>;
}

const VERIFIED_ROOTS: RootItem[] = [
  {
    id: 'root-ktb',
    letters: 'ك ت ب',
    transliteration: 'K-T-B',
    coreConcept: 'Writing and documenting',
    explanation: 'A classic three-letter root. From this root, words relating to books, desks, writing, and letters are derived by fitting the letters into different vowel templates.',
    verified: true,
    verifiedBy: 'QIRAZ Language Board',
    derivedWords: [
      { arabic: 'كَتَبَ', transliteration: 'kataba', meaning: 'He wrote', morphologyPattern: 'Fi‘l (past tense third person singular)' },
      { arabic: 'كِتَابٌ', transliteration: 'kitābun', meaning: 'A book / scripture', morphologyPattern: 'Ism (noun of singular item)' },
      { arabic: 'كَاتِبٌ', transliteration: 'kātibun', meaning: 'A writer / scribe', morphologyPattern: 'Ism Fā‘il (active participle)' },
      { arabic: 'مَكْتَبٌ', transliteration: 'maktabun', meaning: 'An office / desk', morphologyPattern: 'Ism Makān (noun of place)' },
      { arabic: 'مَكْتُوبٌ', transliteration: 'maktūbun', meaning: 'Written / letter', morphologyPattern: 'Ism Maf‘ūl (passive participle)' }
    ]
  },
  {
    id: 'root-rhm',
    letters: 'ر ح م',
    transliteration: 'R-Ḥ-M',
    coreConcept: 'Mercy, compassion, and womb-like care',
    explanation: 'This root forms the basis of mercy, grace, and empathy. Linguistically, it is related to the word "Raḥim" (womb), symbolizing nurturing, safety, and all-encompassing protection.',
    verified: true,
    verifiedBy: 'QIRAZ Language Board',
    derivedWords: [
      { arabic: 'رَحِمَ', transliteration: 'raḥima', meaning: 'He showed mercy', morphologyPattern: 'Fi‘l (past tense third person singular)' },
      { arabic: 'رَحْمَةٌ', transliteration: 'raḥmatun', meaning: 'Mercy / Grace', morphologyPattern: 'Ism (noun of quality)' },
      { arabic: 'الرَّحْمَٰنُ', transliteration: 'ar-Raḥmānu', meaning: 'The Entirely Merciful', morphologyPattern: 'Adjective of extreme quality' },
      { arabic: 'الرَّحِيمُ', transliteration: 'ar-Raḥīmu', meaning: 'The Especially Merciful', morphologyPattern: 'Adjective of persistent quality' }
    ]
  },
  {
    id: 'root-clm',
    letters: 'ع ل م',
    transliteration: 'ʿ-L-M',
    coreConcept: 'Knowledge, knowing, and marking',
    explanation: 'From this root comes words of knowledge, learning, science, and universes (which are "signs" or "marks" indicating their Creator).',
    verified: true,
    verifiedBy: 'QIRAZ Language Board',
    derivedWords: [
      { arabic: 'عَلِمَ', transliteration: '‘alima', meaning: 'He knew', morphologyPattern: 'Fi‘l (past tense)' },
      { arabic: 'عِلْمٌ', transliteration: '‘ilmun', meaning: 'Knowledge / Science', morphologyPattern: 'Ism (singular noun)' },
      { arabic: 'عَالِمٌ', transliteration: '‘ālimun', meaning: 'One who knows / Scholar', morphologyPattern: 'Ism Fā‘il (active participle)' },
      { arabic: 'مَعْلُومٌ', transliteration: 'ma‘lūmun', meaning: 'Known fact', morphologyPattern: 'Ism Maf‘ūl (passive participle)' },
      { arabic: 'الْعَالَمِينَ', transliteration: 'al-ʿālamīna', meaning: 'The worlds / creation', morphologyPattern: 'Plural Noun' }
    ]
  },
  {
    id: 'root-rbb',
    letters: 'ر ب ب',
    transliteration: 'R-B-B',
    coreConcept: 'Lordship, nurturing, and mastership',
    explanation: 'This root represents gathering, raising, owning, and maintaining. It is the basis for the word Rabb, representing the one who nurtures creation.',
    verified: true,
    verifiedBy: 'QIRAZ Language Board',
    derivedWords: [
      { arabic: 'رَبٌّ', transliteration: 'rabbun', meaning: 'Lord / Sustainer', morphologyPattern: 'Noun of attribute' },
      { arabic: 'رَبَّى', transliteration: 'rabbā', meaning: 'He raised / nurtured', morphologyPattern: 'Fi‘l (past tense)' },
      { arabic: 'تَرْبِيَةٌ', transliteration: 'tarbiyatun', meaning: 'Education / Nurturing', morphologyPattern: 'Verbal Noun (Masdar)' }
    ]
  }
];

interface RootExplorerProps {
  progress: UserProgress;
}

export const RootExplorer: React.FC<RootExplorerProps> = ({ progress }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedRootId, setSelectedRootId] = useState<string | null>(null);

  // Filter based on search query
  const filteredRoots = VERIFIED_ROOTS.filter(item => 
    item.letters.replace(/\s+/g, '').includes(searchQuery.replace(/\s+/g, '')) ||
    item.transliteration.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.coreConcept.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Search and Title */}
      <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 dark:border-ivory/5 p-6 rounded-2xl shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-emerald">
          <Compass className="w-6 h-6" />
          <h2 className="text-xl font-bold tracking-tight text-charcoal dark:text-white">
            Root & Morphology Explorer
          </h2>
        </div>
        
        <p className="text-xs text-charcoal/60 dark:text-ivory/60 leading-relaxed max-w-2xl">
          Interactive Arabic root and morphology explorer using explicitly verified linguistic data. 
          <span className="font-semibold text-charcoal dark:text-white"> Note:</span> Avoid implying that every Arabic word can be mechanically understood solely from a three-letter root.
        </p>

        {/* Warning Alert about Root Oversimplification */}
        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200/40 dark:border-amber-900/20 p-3.5 rounded-xl flex items-start space-x-2.5">
          <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
          <div className="text-xs text-amber-800 dark:text-amber-300 leading-normal">
            <span className="font-bold">Linguistic Warning:</span> Arabic words are often built around three-letter roots, but grammatical templates, context, and idiomatic development play massive roles. Do not translate words mechanically by looking up root dictionaries alone.
          </div>
        </div>

        {/* Search input */}
        <div className="relative">
          <Search className="absolute left-3 top-3.5 w-4 h-4 text-charcoal/30 dark:text-ivory/30" />
          <input
            type="text"
            placeholder="Search by root letters (e.g. 'ك ت ب' or 'K-T-B')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-3 bg-ivory-darker dark:bg-charcoal border border-charcoal/10 dark:border-ivory/10 rounded-xl text-sm focus:outline-none focus:border-emerald"
          />
        </div>
      </div>

      {/* Grid List of Roots */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sidebar list */}
        <div className="md:col-span-1 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal/40 dark:text-ivory/40">
            Verified Arabic Roots ({filteredRoots.length})
          </h3>
          <div className="space-y-2">
            {filteredRoots.map((root) => {
              const isSelected = selectedRootId === root.id;
              const isVerified = root.verified || progress.languageVerifications[root.id] === true;
              
              return (
                <div
                  key={root.id}
                  onClick={() => setSelectedRootId(root.id)}
                  className={`p-4 rounded-xl border cursor-pointer text-left transition-all duration-150 ${
                    isSelected
                      ? 'bg-emerald text-white border-emerald shadow-sm'
                      : 'bg-white dark:bg-charcoal-light border-charcoal/5 dark:border-ivory/5 hover:border-emerald/30'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-arabic text-2xl font-bold">{root.letters}</span>
                    <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                      isSelected 
                        ? 'bg-white/20 text-white' 
                        : 'bg-emerald-bg dark:bg-emerald/10 text-emerald'
                    }`}>
                      {root.transliteration}
                    </span>
                  </div>
                  <h4 className={`text-xs mt-2 font-semibold ${isSelected ? 'text-white/80' : 'text-charcoal/80 dark:text-white/80'}`}>
                    Concept: {root.coreConcept}
                  </h4>
                  {!isVerified && (
                    <span className="text-[9px] mt-1 inline-block bg-red-500 text-white px-2 py-0.2 rounded font-semibold font-mono">
                      Needs Verification
                    </span>
                  )}
                </div>
              );
            })}
            
            {filteredRoots.length === 0 && (
              <div className="py-6 text-center text-xs text-charcoal/40 dark:text-ivory/40 bg-white dark:bg-charcoal-light rounded-xl border border-charcoal/5 dark:border-ivory/5">
                No verified roots match your query.
              </div>
            )}
          </div>
        </div>

        {/* Root details viewer */}
        <div className="md:col-span-2">
          {selectedRootId ? (
            (() => {
              const root = VERIFIED_ROOTS.find(r => r.id === selectedRootId)!;
              const isVerified = root.verified || progress.languageVerifications[root.id] === true;

              return (
                <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 dark:border-ivory/5 p-6 rounded-2xl space-y-6 shadow-sm">
                  {/* Title area */}
                  <div className="flex justify-between items-center border-b border-charcoal/5 dark:border-ivory/5 pb-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-arabic text-4xl font-bold text-emerald">{root.letters}</span>
                        <span className="text-sm text-charcoal/50 dark:text-ivory/50">({root.transliteration})</span>
                      </div>
                      <h3 className="text-base font-bold text-charcoal dark:text-white mt-1">
                        Core Idea: {root.coreConcept}
                      </h3>
                    </div>
                    <div className="text-right">
                      {isVerified ? (
                        <div className="flex items-center text-emerald space-x-1 text-xs font-semibold">
                          <CheckCircle className="w-4 h-4" />
                          <span>Verified Root</span>
                        </div>
                      ) : (
                        <div className="flex items-center text-amber-500 space-x-1 text-xs font-semibold">
                          <ShieldAlert className="w-4 h-4" />
                          <span>Needs Verification</span>
                        </div>
                      )}
                      <span className="text-[9px] text-charcoal/40 dark:text-ivory/40 font-mono">
                        Audited by: {root.verifiedBy}
                      </span>
                    </div>
                  </div>

                  {/* Paragraph Explanation */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal/40 dark:text-ivory/40">
                      Linguistic Context
                    </h4>
                    <p className="text-sm text-charcoal/70 dark:text-ivory/70 leading-relaxed">
                      {root.explanation}
                    </p>
                  </div>

                  {/* Derived Words Table */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal/40 dark:text-ivory/40">
                      Derived Word Examples
                    </h4>
                    <div className="border border-charcoal/5 dark:border-ivory/5 rounded-xl overflow-hidden bg-ivory/30 dark:bg-charcoal/20">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-charcoal/5 dark:bg-ivory/5 text-xs text-charcoal/60 dark:text-ivory/60 font-bold">
                          <tr>
                            <th className="p-3">Arabic</th>
                            <th className="p-3">Transliteration</th>
                            <th className="p-3">Morphology / Pattern</th>
                            <th className="p-3">Meaning</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-charcoal/5 dark:divide-ivory/5">
                          {root.derivedWords.map((word) => (
                            <tr key={word.arabic} className="hover:bg-charcoal/5 dark:hover:bg-ivory/5">
                              <td className="p-3 font-arabic text-xl font-bold text-emerald">{word.arabic}</td>
                              <td className="p-3 font-medium font-mono text-xs">{word.transliteration}</td>
                              <td className="p-3 text-xs text-charcoal/60 dark:text-ivory/60">{word.morphologyPattern}</td>
                              <td className="p-3 font-medium">{word.meaning}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              );
            })()
          ) : (
            <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 dark:border-ivory/5 p-12 rounded-2xl flex flex-col items-center justify-center text-center text-charcoal/40 dark:text-ivory/40 h-full shadow-sm">
              <Compass className="w-10 h-10 mb-3 text-charcoal/20" />
              <h3 className="text-lg font-bold">Select a Root Letter Group</h3>
              <p className="text-xs max-w-sm mt-1">
                Click one of the verified Arabic root folders on the left to explore its derivations, morphology patterns, and meanings.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default RootExplorer;
