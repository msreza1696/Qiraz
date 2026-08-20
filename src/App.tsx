import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Learn from './pages/Learn';
import Quran from './pages/Quran';
import Vocabulary from './pages/Vocabulary';
import Grammar from './pages/Grammar';
import Reading from './pages/Reading';
import Progress from './pages/Progress';
import Settings from './pages/Settings';
import { useLocalStorage } from './hooks/useLocalStorage';

export const App: React.FC = () => {
  const {
    progress,
    updateProgress,
    resetAllProgress,
    completeLesson,
    recordQuizScore,
    reviewVocabulary,
    toggleSourceApproval,
    registerActivity,
    saveEmailProfile,
    importProgress,
    toggleQuranAudioApproval
  } = useLocalStorage();

  // Track if user has completed landing page welcome sequence
  const [hasStarted, setHasStarted] = useState<boolean>(() => {
    return window.localStorage.getItem('qiraz_has_started') === 'true';
  });

  const handleStart = () => {
    window.localStorage.setItem('qiraz_has_started', 'true');
    setHasStarted(true);
    registerActivity(); // initialize streak on start
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* If first time, show landing. Otherwise redirect to app layout */}
        <Route 
          path="/welcome" 
          element={
            hasStarted ? <Navigate to="/" replace /> : <Landing onStart={handleStart} />
          } 
        />
        
        {/* Main App Layout containing nested page routes */}
        <Route 
          path="/" 
          element={
            hasStarted ? <Layout progress={progress} /> : <Navigate to="/welcome" replace />
          }
        >
          <Route index element={<Dashboard progress={progress} />} />
          <Route 
            path="learn" 
            element={
              <Learn 
                progress={progress} 
                onCompleteLesson={completeLesson} 
                onRecordScore={recordQuizScore} 
              />
            } 
          />
          <Route path="quran" element={<Quran progress={progress} />} />
          <Route 
            path="vocabulary" 
            element={
              <Vocabulary 
                progress={progress} 
                onReviewVocabulary={reviewVocabulary} 
              />
            } 
          />
          <Route path="grammar" element={<Grammar progress={progress} />} />
          <Route path="reading" element={<Reading progress={progress} onRecordScore={recordQuizScore} />} />
          <Route path="progress" element={<Progress progress={progress} />} />
          <Route 
            path="settings" 
            element={
              <Settings 
                progress={progress}
                onUpdateProgress={updateProgress}
                onResetProgress={() => {
                  resetAllProgress();
                  window.localStorage.removeItem('qiraz_has_started');
                  setHasStarted(false);
                }}
                onToggleSourceApproval={toggleSourceApproval}
                onSaveEmailProfile={saveEmailProfile}
                onImportProgress={importProgress}
                onToggleQuranAudioApproval={toggleQuranAudioApproval}
              />
            } 
          />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
