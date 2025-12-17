import { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

import Wallpaper from './components/Wallpaper';
import ClockGreeting from './components/ClockGreeting';
import AppDock from './components/AppDock';
import MusicWidget from './components/MusicWidget';
import { WALLPAPERS } from './consts';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [currentWall, setCurrentWall] = useState(WALLPAPERS[0]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const nextWallpaper = () => {
    let nextWall;
    do {
      nextWall = WALLPAPERS[Math.floor(Math.random() * WALLPAPERS.length)];
    } while (nextWall === currentWall && WALLPAPERS.length > 1);
    setCurrentWall(nextWall);
  };

  return (
    // Changed min-h-screen to min-h-[105vh] to force scrolling capability even if content fits
    <div className="relative min-h-[105vh] w-full font-sans text-white overflow-y-auto selection:bg-pink-500/30 transition-colors duration-500 pb-20">
      <Wallpaper image={currentWall} />

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 dark:bg-black/40 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 dark:hover:bg-black/60 transition-all shadow-lg active:scale-95"
        title={isDark ? "Switch into Light Mode" : "Switch into Dark Mode"}
      >
        {isDark ? "☀️" : "🌙"}
      </button>

      {/* Wallpaper Switch Button - Lifted to App level for correct Z-Index */}
      <button
        onClick={nextWallpaper}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white/10 dark:bg-black/40 backdrop-blur-xl border border-white/20 text-white/80 hover:text-white hover:bg-white/20 dark:hover:bg-black/60 transition-all active:scale-95 shadow-lg group"
        title="Switch Wallpaper"
      >
        <RefreshCw size={20} className="group-hover:rotate-180 transition-transform duration-500" />
      </button>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] gap-12 p-8 lg:p-12">
        <ClockGreeting />
        <AppDock />
      </main>

      <MusicWidget />

      {/* Footer / Copyright if needed, simplified for now */}
      <footer className="fixed bottom-4 left-0 right-0 z-0 text-center text-white/20 text-xs pointer-events-none">
        Personal Dashboard © {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
