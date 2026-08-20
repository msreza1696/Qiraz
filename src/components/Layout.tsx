import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  BookOpen, 
  Home, 
  Settings, 
  Flame, 
  Award, 
  Bookmark, 
  Compass, 
  Volume2, 
  ChevronRight 
} from 'lucide-react';
import { getOverallProgressPercent } from '../utils/recommendations';

interface LayoutProps {
  progress: any;
}

export const Layout: React.FC<LayoutProps> = ({ progress }) => {
  const location = useLocation();
  const activePath = location.pathname;

  const navItems = [
    { name: 'Dashboard', path: '/', icon: Home },
    { name: 'Learn', path: '/learn', icon: BookOpen },
    { name: 'Qur\'an', path: '/quran', icon: Bookmark },
    { name: 'Vocabulary', path: '/vocabulary', icon: Compass },
    { name: 'Grammar', path: '/grammar', icon: Award },
    { name: 'Reading', path: '/reading', icon: Volume2 },
    { name: 'Progress', path: '/progress', icon: Flame },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  const overallProgress = getOverallProgressPercent(progress);

  return (
    <div className={`min-h-screen flex flex-col md:flex-row bg-ivory text-charcoal transition-colors duration-200 dark:bg-charcoal dark:text-ivory`}>
      
      {/* LEFT SIDEBAR - Desktop (>= 768px) */}
      <aside className="hidden md:flex flex-col w-64 bg-charcoal-light text-ivory-dark border-r border-charcoal-lighter/10 dark:border-ivory-darker/10 dark:bg-charcoal-dark min-h-screen flex-shrink-0 z-20">
        {/* Brand Header */}
        <div className="p-6 border-b border-charcoal-lighter/20 flex flex-col items-center">
          <span className="font-arabic text-3xl font-bold text-gold tracking-wide select-none">قِيرَاز</span>
          <span className="text-xl tracking-widest font-semibold mt-1 text-ivory">QIRAZ</span>
          <span className="text-xs text-ivory/50 mt-1 italic text-center select-none">Read. Understand. Speak.</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePath === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-150 ${
                  isActive 
                    ? 'bg-emerald text-white shadow-md' 
                    : 'text-ivory/70 hover:bg-charcoal-lighter hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>{item.name}</span>
                {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Sidebar Bottom Stats */}
        <div className="p-4 m-4 bg-charcoal-lighter/30 rounded-xl border border-charcoal-lighter/20">
          <div className="flex justify-between items-center text-xs text-ivory/60 mb-2">
            <span>Overall Progress</span>
            <span>{overallProgress.total}%</span>
          </div>
          <div className="w-full bg-charcoal-lighter h-2 rounded-full overflow-hidden">
            <div 
              className="bg-gold h-full rounded-full transition-all duration-300"
              style={{ width: `${overallProgress.total}%` }}
            />
          </div>
          <div className="flex items-center justify-center mt-3 text-xs text-gold">
            <Flame className="w-4 h-4 mr-1 text-gold fill-gold animate-pulse" />
            <span>Streak: {progress.currentStreak} {progress.currentStreak === 1 ? 'day' : 'days'}</span>
          </div>
        </div>
      </aside>

      {/* TOP HEADER - Mobile & Tablet (< 768px) and Desktop Page Header */}
      <div className="flex-1 flex flex-col min-h-screen">
        
        {/* Universal Top Header */}
        <header className="sticky top-0 bg-white/95 backdrop-blur border-b border-charcoal/5 dark:bg-charcoal-light/95 dark:border-ivory/5 h-16 px-4 md:px-8 flex items-center justify-between z-10 transition-colors duration-200">
          {/* Mobile Brand Name */}
          <div className="flex items-center md:hidden">
            <Link to="/" className="flex flex-col items-start select-none">
              <span className="font-arabic text-xl font-bold text-emerald leading-tight">قِيرَاز</span>
              <span className="text-xs font-semibold text-charcoal/40 dark:text-ivory/40 tracking-wider">QIRAZ</span>
            </Link>
          </div>
          
          {/* Desktop placeholder page title */}
          <div className="hidden md:block">
            <h1 className="text-lg font-semibold tracking-wide text-charcoal/80 dark:text-ivory/95">
              {navItems.find(n => n.path === activePath)?.name || 'QIRAZ'}
            </h1>
          </div>

          {/* Right Header Controls (Streak + Settings icon) */}
          <div className="flex items-center space-x-4">
            {/* Streak Counter */}
            <div 
              className="flex items-center px-3 py-1 bg-amber-50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/30 rounded-full cursor-pointer hover:scale-105 transition-transform"
              title="Current learning streak"
            >
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500 mr-1.5" />
              <span className="text-xs font-semibold text-amber-800 dark:text-amber-300">
                {progress.currentStreak} {progress.currentStreak === 1 ? 'day' : 'days'}
              </span>
            </div>

            {/* Quick Settings Icon */}
            <Link 
              to="/settings" 
              className="p-2 rounded-full hover:bg-charcoal/5 dark:hover:bg-ivory/5 text-charcoal/70 dark:text-ivory/70 transition-colors"
              aria-label="Settings"
            >
              <Settings className="w-5 h-5" />
            </Link>
          </div>
        </header>

        {/* MAIN BODY AREA */}
        <main className="flex-1 p-4 md:p-8 max-w-7xl w-full mx-auto pb-24 md:pb-8">
          <Outlet />
        </main>
      </div>

      {/* MOBILE BOTTOM NAVIGATION - Visible only on mobile (< 768px) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-charcoal-light border-t border-charcoal/5 dark:border-ivory/5 px-2 py-2 flex justify-around items-center z-30 shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePath === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-lg transition-colors ${
                isActive 
                  ? 'text-emerald font-semibold' 
                  : 'text-charcoal/50 dark:text-ivory/50 hover:text-charcoal dark:hover:text-ivory'
              }`}
            >
              <Icon className="w-5 h-5 mb-0.5" />
              <span className="text-[10px] tracking-tight">{item.name}</span>
            </Link>
          );
        })}
      </nav>

    </div>
  );
};
export default Layout;
