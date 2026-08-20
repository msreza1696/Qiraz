import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Flame, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Send, 
  MessageSquare,
  ShieldAlert
} from 'lucide-react';
import { UserProgress } from '../types';
import { getStudyRecommendation, getOverallProgressPercent } from '../utils/recommendations';

interface DashboardProps {
  progress: UserProgress;
}

export const Dashboard: React.FC<DashboardProps> = ({ progress }) => {
  const navigate = useNavigate();
  const recommendation = getStudyRecommendation(progress);
  const overall = getOverallProgressPercent(progress);

  // Future AI Tutor Placeholder States
  const [tutorQuery, setTutorQuery] = useState<string>('');
  const [tutorChat, setTutorChat] = useState<Array<{ sender: 'user' | 'tutor'; text: string; isSafetyFallback?: boolean }>>([
    { sender: 'tutor', text: 'Assalamu Alaikum! I am your AI Arabic language tutor. Ask me about Arabic reading, words, or conjugation. (Please note: I cannot answer theological or religious questions without an approved project source).' }
  ]);

  // AI Tutor Safety Boundary Check
  const handleSendMessage = () => {
    if (!tutorQuery.trim()) return;

    const userMessage = tutorQuery.trim();
    const newChat: Array<{ sender: 'user' | 'tutor'; text: string; isSafetyFallback?: boolean }> = [
      ...tutorChat, 
      { sender: 'user', text: userMessage }
    ];
    setTutorChat(newChat);
    setTutorQuery('');

    // Safety checks for theological keywords
    const theologicalKeywords = [
      'tafsir', 'hadith', 'aqeedah', 'fiqh', 'theology', 'sectarian', 
      'shafaat', 'intercession', 'prophet', 'ruling', 'halal', 'haram',
      'shia', 'sunni', 'creed', 'jannah', 'jahannam', 'paradise', 'hell',
      'تفسير', 'حديث', 'عقيدة', 'فقه'
    ];

    const containsTheology = theologicalKeywords.some(keyword => 
      userMessage.toLowerCase().includes(keyword)
    );

    setTimeout(() => {
      if (containsTheology) {
        setTutorChat(prev => [...prev, { 
          sender: 'tutor', 
          text: 'QIRAZ does not currently have an approved source for this question.',
          isSafetyFallback: true
        }]);
      } else if (userMessage.toLowerCase().includes('سلام') || userMessage.toLowerCase().includes('salam') || userMessage.toLowerCase().includes('al परिस्थिति')) {
        setTutorChat(prev => [...prev, { 
          sender: 'tutor', 
          text: 'وعليكم السلام ورحمة الله وبركاته! How can I assist you with your Arabic learning today?' 
        }]);
      } else if (userMessage.toLowerCase().includes('market') || userMessage.toLowerCase().includes('went') || userMessage.toLowerCase().includes('ذهب')) {
        setTutorChat(prev => [...prev, { 
          sender: 'tutor', 
          text: 'To say "I went to the market yesterday" in correct Arabic: ذَهَبْتُ إِلَى السُّوقِ أَمْسِ. Notice we use the preposition إِلَى (to) before the destination.' 
        }]);
      } else {
        setTutorChat(prev => [...prev, { 
          sender: 'tutor', 
          text: `I can help you practice that! For the V1 release, please study our curated paths. Try asking about verb conjugations or basic sentence builders.` 
        }]);
      }
    }, 800);
  };

  // Check off daily tasks based on completions
  const dailyTasks = [
    { name: 'Arabic Reading (Path 1)', done: progress.completedLessons.some(id => id.startsWith('foundations-')), path: '/reading' },
    { name: 'Vocabulary (Path 2)', done: progress.completedLessons.some(id => id.startsWith('vocabulary-')), path: '/vocabulary' },
    { name: 'Grammar (Path 3)', done: progress.completedLessons.some(id => id.startsWith('grammar-')), path: '/grammar' },
    { name: 'Qur\'anic Arabic Study', done: progress.completedLessons.length > 0, path: '/quran' }
  ];

  const completedTasksCount = dailyTasks.filter(t => t.done).length;
  const goalProgressPercent = Math.round((completedTasksCount / dailyTasks.length) * 100);

  const handleContinueStudy = () => {
    if (recommendation?.pathId) {
      navigate(`/learn?path=${recommendation.pathId}`);
    } else {
      navigate('/learn');
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Greetings Hero Banner */}
      <div className="bg-gradient-to-br from-charcoal-light to-charcoal text-ivory p-6 md:p-8 rounded-2xl border border-charcoal-lighter/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm">
        <div>
          <span className="font-arabic text-3xl md:text-4xl text-gold font-semibold select-none">السلام عليكم</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-1">Assalamu Alaikum 👋</h2>
          <p className="text-sm text-ivory-dark mt-1">
            Let's continue your Arabic journey today.
            {progress.email && (
              <span className="text-xs text-gold ml-2 font-mono block sm:inline">
                &bull; Save Profile: {progress.email}
              </span>
            )}
          </p>
        </div>
        
        {/* Streak Counter Badge */}
        <div className="flex items-center space-x-3 bg-charcoal-lighter/30 border border-charcoal-lighter/40 px-5 py-3 rounded-xl">
          <Flame className="w-8 h-8 text-amber-500 fill-amber-500 animate-pulse" />
          <div>
            <span className="text-xs text-ivory/50 block font-semibold uppercase tracking-wider">CURRENT STREAK</span>
            <span className="text-xl font-bold text-white">{progress.currentStreak} {progress.currentStreak === 1 ? 'Day' : 'Days'}</span>
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Columns */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Daily Goal & Checklist */}
          <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 dark:border-ivory/5 p-6 rounded-2xl shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-emerald" />
                <h3 className="text-lg font-bold">Daily Goal Progress</h3>
              </div>
              <span className="text-xs font-semibold text-emerald bg-emerald-bg dark:bg-emerald/10 px-2 py-0.5 rounded">
                15 Minutes Target
              </span>
            </div>

            {/* Gauge */}
            <div className="flex items-center justify-between text-sm py-2">
              <span className="text-charcoal/60 dark:text-ivory/60">Completion Status</span>
              <span className="font-bold text-emerald">{goalProgressPercent}% ({completedTasksCount}/4 tasks)</span>
            </div>
            
            <div className="w-full bg-charcoal/5 dark:bg-ivory/5 h-2.5 rounded-full overflow-hidden">
              <div 
                className="bg-emerald h-full rounded-full transition-all duration-300"
                style={{ width: `${goalProgressPercent}%` }}
              />
            </div>

            {/* Checklist items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3">
              {dailyTasks.map((task) => (
                <div 
                  key={task.name}
                  onClick={() => navigate(task.path)}
                  className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    task.done
                      ? 'bg-emerald-bg/10 border-emerald/20 text-emerald-dark dark:text-emerald-light'
                      : 'bg-ivory/20 dark:bg-charcoal/10 border-charcoal/5 dark:border-ivory/5 hover:border-charcoal/10'
                  }`}
                >
                  <span className="text-xs font-medium">{task.name}</span>
                  {task.done ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald flex-shrink-0" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-charcoal/20 dark:border-ivory/20 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Continue Learning card */}
          <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 dark:border-ivory/5 p-6 rounded-2xl shadow-sm space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal/40 dark:text-ivory/40">
              Continue Learning
            </h3>

            {recommendation ? (
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-emerald-bg/10 dark:bg-emerald/5 border border-emerald/10 p-5 rounded-xl">
                <div>
                  <span className="text-[10px] font-bold text-emerald uppercase tracking-wider">
                    {recommendation.type === 'vocab-review' ? 'Vocabulary Review' : recommendation.pathId === 'foundations' ? 'Foundations Path' : recommendation.pathId === 'grammar' ? 'Grammar Path' : 'Curated Quiz'}
                  </span>
                  <h4 className="text-lg font-bold text-charcoal dark:text-white mt-1">
                    {recommendation.title}
                  </h4>
                  <p className="text-xs text-charcoal/60 dark:text-ivory/60 mt-1">
                    {recommendation.description}
                  </p>
                </div>
                <button
                  onClick={handleContinueStudy}
                  className="bg-emerald text-white hover:bg-emerald-dark px-5 py-2.5 rounded-lg text-xs font-bold transition-colors flex items-center justify-center flex-shrink-0 w-full md:w-auto"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </button>
              </div>
            ) : (
              <div className="text-center p-6 border border-dashed border-charcoal/10 rounded-xl">
                <CheckCircle2 className="w-8 h-8 text-emerald mx-auto mb-2" />
                <p className="text-sm font-semibold">Masha Allah! All current lessons completed.</p>
                <p className="text-xs text-charcoal/50 dark:text-ivory/50 mt-0.5">Explore the Quran or Vocabulary paths for practice.</p>
              </div>
            )}
          </div>

        </div>

        {/* Right 1 Column */}
        <div className="space-y-8">
          
          {/* Overall Progress Gauge Card */}
          <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 dark:border-ivory/5 p-6 rounded-2xl shadow-sm space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal/40 dark:text-ivory/40">
              Overall Progress
            </h3>

            <div className="space-y-3.5">
              <div>
                <div className="flex justify-between text-xs text-charcoal/60 dark:text-ivory/60 mb-1">
                  <span>Arabic Reading</span>
                  <span>{overall.reading}%</span>
                </div>
                <div className="w-full bg-charcoal/5 dark:bg-ivory/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald h-full rounded-full" style={{ width: `${overall.reading}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-charcoal/60 dark:text-ivory/60 mb-1">
                  <span>Qur\'anic Vocabulary</span>
                  <span>{overall.vocabulary}%</span>
                </div>
                <div className="w-full bg-charcoal/5 dark:bg-ivory/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald h-full rounded-full" style={{ width: `${overall.vocabulary}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-charcoal/60 dark:text-ivory/60 mb-1">
                  <span>Arabic Grammar</span>
                  <span>{overall.grammar}%</span>
                </div>
                <div className="w-full bg-charcoal/5 dark:bg-ivory/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald h-full rounded-full" style={{ width: `${overall.grammar}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-charcoal/60 dark:text-ivory/60 mb-1">
                  <span>Speaking (Future V2)</span>
                  <span>0%</span>
                </div>
                <div className="w-full bg-charcoal/5 dark:bg-ivory/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-charcoal/10 h-full rounded-full" style={{ width: '0%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* AI TUTOR INTEGRATION PLACEHOLDER */}
          <div className="bg-white dark:bg-charcoal-light border border-charcoal/5 dark:border-ivory/5 p-6 rounded-2xl shadow-sm space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-charcoal/5 dark:border-ivory/5">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-emerald" />
                <h3 className="text-sm font-bold">AI Arabic Tutor</h3>
              </div>
              <span className="text-[9px] font-bold text-amber-600 bg-amber-50 dark:bg-amber-950/20 px-2 py-0.5 rounded border border-amber-200/50">
                Safe Boundary Enabled
              </span>
            </div>

            {/* Chatbox area */}
            <div className="h-48 overflow-y-auto space-y-3 p-3 bg-ivory/30 dark:bg-charcoal/20 border border-charcoal/5 rounded-xl text-xs flex flex-col justify-end">
              <div className="space-y-2">
                {tutorChat.map((msg, idx) => (
                  <div 
                    key={idx} 
                    className={`p-2.5 rounded-lg max-w-[85%] ${
                      msg.sender === 'user'
                        ? 'bg-emerald text-white ml-auto'
                        : msg.isSafetyFallback
                        ? 'bg-amber-50 dark:bg-amber-950/30 border border-amber-200/50 text-amber-800 dark:text-amber-300 mr-auto'
                        : 'bg-white dark:bg-charcoal-light border border-charcoal/5 text-charcoal dark:text-ivory mr-auto'
                    }`}
                  >
                    {msg.isSafetyFallback && <ShieldAlert className="w-3.5 h-3.5 mr-1 inline-block text-amber-500" />}
                    <span className="leading-relaxed">{msg.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Safe boundaries notice */}
            <p className="text-[10px] text-charcoal/40 dark:text-ivory/40 leading-normal flex items-start space-x-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
              <span>
                To comply with content governance, the tutor only responds to standard language queries. Theological questions (e.g. Fiqh, Tafsir, Aqeedah) are strictly blocked.
              </span>
            </p>

            {/* Chat Input */}
            <div className="flex space-x-2">
              <input
                type="text"
                value={tutorQuery}
                onChange={(e) => setTutorQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about Arabic (e.g. 'السلام عليكم' or 'Aqeedah rules')"
                className="flex-1 px-3 py-2 border border-charcoal/10 dark:border-ivory/10 rounded-lg text-xs bg-white dark:bg-charcoal focus:outline-none focus:border-emerald"
              />
              <button 
                onClick={handleSendMessage}
                className="p-2 bg-emerald text-white rounded-lg hover:bg-emerald-dark transition-colors"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
export default Dashboard;
