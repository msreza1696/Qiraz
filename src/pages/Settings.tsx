import React, { useState } from 'react';
import { UserProgress } from '../types';
import { fatihahVerses } from '../data/quran';
import { theologicalContents } from '../data/islamicContent';
import { quranAudioRegistry } from '../data/quranAudio';
import { 
  Settings as SettingsIcon, 
  User, 
  Trash2, 
  ShieldAlert, 
  CheckCircle,
  Moon,
  Sun,
  Download,
  Upload,
  KeyRound,
  Headphones
} from 'lucide-react';

interface SettingsProps {
  progress: UserProgress;
  onUpdateProgress: (updater: (prev: UserProgress) => UserProgress) => void;
  onResetProgress: () => void;
  onToggleSourceApproval: (sourceId: string) => void;
  onSaveEmailProfile: (email: string) => void;
  onImportProgress: (imported: UserProgress) => void;
  onToggleQuranAudioApproval: (audioId: string) => void;
}

export const Settings: React.FC<SettingsProps> = ({ 
  progress, 
  onUpdateProgress, 
  onResetProgress,
  onToggleSourceApproval,
  onSaveEmailProfile,
  onImportProgress,
  onToggleQuranAudioApproval
}) => {
  const [emailInput, setEmailInput] = useState<string>(progress.email || '');
  const [emailStatus, setEmailStatus] = useState<string>('');

  const handleSaveEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    onSaveEmailProfile(emailInput.trim());
    setEmailStatus('Save profile created! Your progress is locked to this email.');
    setTimeout(() => setEmailStatus(''), 4000);
  };

  const handleExportProgress = () => {
    try {
      const dataStr = JSON.stringify(progress, null, 2);
      const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
      const exportFileDefaultName = `qiraz_progress_${progress.email || 'backup'}.json`;
      
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
    } catch (e) {
      console.error("Failed to export progress data:", e);
    }
  };

  const handleImportProgress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          if (parsed && parsed.completedLessons && parsed.quizScores) {
            onImportProgress(parsed);
            alert("Progress backup imported successfully! Page will update.");
          } else {
            alert("Invalid save file structure. Could not import progress.");
          }
        } catch (error) {
          alert("Failed to parse progress file. Make sure it is a valid QIRAZ backup JSON file.");
        }
      };
    }
  };

  const handleGoalChange = (minutes: number) => {
    onUpdateProgress(prev => ({
      ...prev,
      dailyGoalMinutes: minutes
    }));
  };

  const handleFontSizeChange = (size: 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl') => {
    onUpdateProgress(prev => ({
      ...prev,
      arabicFontSize: size
    }));
  };

  const handleTransliterationToggle = () => {
    onUpdateProgress(prev => ({
      ...prev,
      showTransliteration: !prev.showTransliteration
    }));
  };

  const handleDarkModeToggle = () => {
    onUpdateProgress(prev => ({
      ...prev,
      darkMode: !prev.darkMode
    }));
  };

  // Compile all source-locked items from our dataset to display in the approval manager
  const allSourceLockedItems = [
    ...fatihahVerses.map(v => v.arabic),
    ...fatihahVerses.map(v => v.translation),
    ...fatihahVerses.flatMap(v => v.words.map(w => w.translation)),
    ...fatihahVerses.flatMap(v => v.words.map(w => w.grammar)),
    ...theologicalContents.flatMap(t => t.sourceLockedMetadata ? [t.sourceLockedMetadata] : [])
  ];

  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-charcoal/10 dark:border-ivory/10 pb-4">
        <div>
          <div className="flex items-center space-x-2 text-emerald">
            <SettingsIcon className="w-6 h-6" />
            <h2 className="text-2xl font-bold tracking-tight text-charcoal dark:text-white">Settings & Auditing</h2>
          </div>
          <p className="text-xs text-charcoal/60 dark:text-ivory/60 mt-0.5">
            Configure learning goals, preferences, and manage authoritative content source approvals.
          </p>
        </div>
      </div>

      {/* Grid: Preferences left, Source manager right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left column: Preferences */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Profile & Save Profile Card */}
          <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 p-6 rounded-2xl shadow-sm space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal/40 dark:text-ivory/40">
              Profile & Save Profile
            </h3>
            <div className="flex items-center space-x-3 pb-2 border-b border-charcoal/5 dark:border-ivory/5">
              <div className="bg-emerald-bg dark:bg-emerald/10 p-3 rounded-full text-emerald">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold">{progress.email ? 'Local Save Profile' : 'Guest Account'}</h4>
                <p className="text-[10px] text-charcoal/50 dark:text-ivory/50">
                  {progress.email ? progress.email : 'No email save point locked'}
                </p>
              </div>
            </div>

            <form onSubmit={handleSaveEmail} className="space-y-2">
              <label className="text-[10px] text-charcoal/40 dark:text-ivory/40 block font-bold">
                Email Address Save Point
              </label>
              <div className="flex space-x-2">
                <input
                  type="email"
                  required
                  placeholder="enter your email..."
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="flex-1 px-3 py-2 border border-charcoal/10 dark:border-ivory/10 rounded-lg text-xs bg-white dark:bg-charcoal focus:outline-none focus:border-emerald"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-emerald text-white rounded-lg text-xs font-bold hover:bg-emerald-dark transition-colors flex items-center space-x-1"
                >
                  <KeyRound className="w-3.5 h-3.5" />
                  <span>Lock</span>
                </button>
              </div>
              {emailStatus && (
                <p className="text-[10px] text-emerald-dark dark:text-emerald-light animate-pulse">
                  {emailStatus}
                </p>
              )}
            </form>
          </div>

          {/* Backup & Recovery Card */}
          <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 p-6 rounded-2xl shadow-sm space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal/40 dark:text-ivory/40">
              Backup & Recovery
            </h3>
            
            <p className="text-[10px] text-charcoal/50 dark:text-ivory/50 leading-relaxed">
              Export your study history as a local backup file to prevent data loss when clearing browser cache, or to import it on other devices.
            </p>

            <div className="flex flex-col space-y-2 pt-1">
              {/* Export */}
              <button
                onClick={handleExportProgress}
                className="w-full border border-charcoal/10 dark:border-ivory/10 hover:border-emerald bg-white dark:bg-charcoal text-charcoal dark:text-ivory py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-1.5"
              >
                <Download className="w-4 h-4 text-emerald" />
                <span>Export Save File</span>
              </button>

              {/* Import */}
              <label className="w-full border border-charcoal/10 dark:border-ivory/10 hover:border-emerald bg-white dark:bg-charcoal text-charcoal dark:text-ivory py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-1.5 cursor-pointer text-center">
                <Upload className="w-4 h-4 text-gold" />
                <span>Import Save File</span>
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImportProgress}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Daily Goal select */}
          <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 p-6 rounded-2xl shadow-sm space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal/40 dark:text-ivory/40">
              Daily Goal
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {[10, 15, 30].map((mins) => (
                <button
                  key={mins}
                  onClick={() => handleGoalChange(mins)}
                  className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                    progress.dailyGoalMinutes === mins
                      ? 'bg-emerald text-white border-emerald'
                      : 'border-charcoal/10 hover:border-emerald bg-white dark:bg-charcoal'
                  }`}
                >
                  {mins} min
                </button>
              ))}
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 p-6 rounded-2xl shadow-sm space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal/40 dark:text-ivory/40">
              App Preferences
            </h3>

            <div className="space-y-4 text-xs font-medium">
              
              {/* Transliteration */}
              <div className="flex justify-between items-center">
                <span>Show Transliteration</span>
                <button
                  onClick={handleTransliterationToggle}
                  className={`px-3 py-1.5 rounded-lg border font-bold ${
                    progress.showTransliteration
                      ? 'bg-emerald text-white border-emerald'
                      : 'border-charcoal/10 dark:border-ivory/10'
                  }`}
                >
                  {progress.showTransliteration ? 'Enabled' : 'Disabled'}
                </button>
              </div>

              {/* Dark Mode */}
              <div className="flex justify-between items-center">
                <span>Theme Mode</span>
                <button
                  onClick={handleDarkModeToggle}
                  className="p-2 border border-charcoal/10 dark:border-ivory/10 rounded-lg hover:bg-charcoal/5 dark:hover:bg-ivory/5 transition-colors text-charcoal dark:text-ivory flex items-center space-x-1.5 font-bold"
                >
                  {progress.darkMode ? (
                    <>
                      <Sun className="w-4 h-4 text-amber-500" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4 text-charcoal" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
              </div>

              {/* Arabic Font size */}
              <div className="space-y-1.5 border-t border-charcoal/5 pt-3">
                <div className="flex justify-between">
                  <span>Arabic Typography Size</span>
                  <span className="font-bold text-emerald uppercase font-mono">{progress.arabicFontSize}</span>
                </div>
                <div className="grid grid-cols-6 gap-1">
                  {(['sm', 'base', 'lg', 'xl', '2xl', '3xl'] as const).map((sz) => (
                    <button
                      key={sz}
                      onClick={() => handleFontSizeChange(sz)}
                      className={`py-1 text-[10px] border rounded font-mono font-bold uppercase ${
                        progress.arabicFontSize === sz
                          ? 'bg-emerald text-white border-emerald'
                          : 'border-charcoal/10 dark:border-ivory/10 hover:border-emerald'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Danger zone / resets */}
          <div className="bg-white dark:bg-charcoal-light border border-red-500/10 p-6 rounded-2xl shadow-sm space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-red-500">
              Reset Options
            </h3>
            <button
              onClick={() => {
                if (window.confirm("Are you absolutely sure you want to reset all QIRAZ progress, streak counts, and settings? This cannot be undone.")) {
                  onResetProgress();
                }
              }}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 shadow-sm"
            >
              <Trash2 className="w-4 h-4" />
              <span>Reset All Progress</span>
            </button>
          </div>

        </div>

        {/* Right column: Source Approval Manager (Registry) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 p-6 rounded-2xl shadow-sm space-y-6">
            
            {/* Header info */}
            <div className="border-b border-charcoal/5 dark:border-ivory/5 pb-4">
              <div className="flex items-center space-x-2 text-emerald">
                <ShieldAlert className="w-5 h-5 text-emerald" />
                <h3 className="text-lg font-bold">Source Approval Registry</h3>
              </div>
              <p className="text-xs text-charcoal/60 dark:text-ivory/60 mt-1 leading-normal">
                Review all source-locked items in the app. Toggling approval to <span className="font-semibold text-emerald">"Approved"</span> overrides the unverified safety block in LocalStorage and displays the literal content immediately in the Qur'an study rooms.
              </p>
            </div>

            {/* List of items */}
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1">
              {allSourceLockedItems.map((item) => {
                // Determine if approved currently
                const isApproved = progress.sourceApprovals[item.id] === true || item.approved;
                
                return (
                  <div 
                    key={item.id}
                    className={`p-4 rounded-xl border flex flex-col md:flex-row justify-between items-start md:items-center gap-3 transition-colors ${
                      isApproved 
                        ? 'border-emerald-light bg-emerald-bg/10 dark:bg-emerald/5' 
                        : 'border-charcoal/10 dark:border-ivory/10 bg-ivory/20 dark:bg-charcoal/10'
                    }`}
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[9px] font-bold uppercase tracking-wide bg-charcoal/5 dark:bg-ivory/10 px-2 py-0.5 rounded text-charcoal/60">
                          {item.sourceType}
                        </span>
                        <span className="text-[9px] font-bold font-mono text-emerald bg-emerald-bg dark:bg-emerald/10 px-2 py-0.5 rounded">
                          {item.reference}
                        </span>
                      </div>
                      
                      {item.exactText ? (
                        <p className={`text-xs ${item.language === 'ar' ? 'font-arabic text-lg leading-normal' : 'font-medium text-charcoal dark:text-white'}`}>
                          {item.exactText}
                        </p>
                      ) : (
                        <p className="text-[10px] text-charcoal/40 dark:text-ivory/40 italic">
                          (No content loaded yet - waiting for project owner upload)
                        </p>
                      )}
                      
                      <p className="text-[9px] text-charcoal/40 dark:text-ivory/40 font-mono">
                        Source Name: {item.sourceName} &bull; ID: {item.id}
                      </p>
                    </div>

                    {/* Toggle Button */}
                    <button
                      onClick={() => onToggleSourceApproval(item.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all self-end md:self-auto flex items-center space-x-1.5 ${
                        isApproved
                          ? 'bg-emerald text-white border-emerald hover:bg-emerald-dark'
                          : 'border-charcoal/10 dark:border-ivory/10 bg-white hover:border-emerald text-charcoal'
                      }`}
                    >
                      {isApproved ? (
                        <>
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>Approved</span>
                        </>
                      ) : (
                        <>
                          <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
                          <span>Unverified</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>

      {/* ─── QURAN RECITATION AUDIO REGISTRY ─────────────────────────────── */}
      <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 p-6 rounded-2xl shadow-sm space-y-5">
        <div className="flex items-center space-x-2">
          <Headphones className="w-5 h-5 text-emerald" />
          <h3 className="text-sm font-bold">Quran Recitation Audio Registry</h3>
        </div>
        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200/30 p-3 rounded-lg text-[10px] text-amber-800 dark:text-amber-300 leading-relaxed">
          <strong>Governance Notice:</strong> No Quran recitation audio is approved by default. 
          The project owner must supply the reciter name and a direct audio URL before toggling any entry to Approved. 
          AI voice generation is strictly prohibited for Quran recitation. 
          Each entry below is pending project owner review.
        </div>
        <div className="space-y-3">
          {quranAudioRegistry.map((audio) => {
            const isApproved = progress.quranAudioApprovals[audio.id] === true || audio.approved;
            return (
              <div key={audio.id} className="flex flex-col md:flex-row justify-between md:items-center gap-3 p-3 border border-charcoal/5 dark:border-ivory/5 rounded-xl">
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-charcoal dark:text-white">
                    Surah {audio.surahNumber} — Ayah {audio.ayahNumber}
                  </p>
                  <p className="text-[10px] text-charcoal/50 dark:text-ivory/50 mt-0.5">
                    Reciter: <span className={isApproved ? 'text-emerald font-semibold' : 'italic'}>{audio.reciterName}</span>
                  </p>
                  <p className="text-[10px] text-charcoal/40 dark:text-ivory/30 truncate">
                    URL: {audio.audioUrl || 'Not yet supplied'}
                  </p>
                </div>
                <button
                  onClick={() => onToggleQuranAudioApproval(audio.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all flex items-center space-x-1.5 flex-shrink-0 ${
                    isApproved
                      ? 'bg-emerald text-white border-emerald hover:bg-emerald-dark'
                      : 'border-amber-400/40 bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-400 hover:border-amber-500'
                  }`}
                >
                  {isApproved ? (
                    <><CheckCircle className="w-3.5 h-3.5" /><span>Approved</span></>
                  ) : (
                    <><ShieldAlert className="w-3.5 h-3.5" /><span>Pending</span></>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
export default Settings;
