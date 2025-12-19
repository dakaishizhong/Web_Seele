import { Search, Bot, Youtube, Server, Router, Activity, BookOpen } from 'lucide-react';

export const APPS = [
    { id: 1, name: 'Google', url: 'https://google.com', icon: Search, color: 'text-blue-400' },
    { id: 2, name: 'ChatGPT', url: 'https://chat.openai.com', icon: Bot, color: 'text-emerald-400' },
    { id: 3, name: 'YouTube', url: 'https://youtube.com', icon: Youtube, color: 'text-red-500' },
    { id: 4, name: 'My NAS', url: '#', icon: Server, color: 'text-amber-400' },
    { id: 5, name: 'Komari', url: '#', icon: Router, color: 'text-cyan-400' },
    { id: 6, name: 'API', url: 'https://api.rosu.app/console', icon: Activity, color: 'text-purple-400' },
    { id: 7, name: 'AI', url: 'https://ai.rosu.app/', icon: BookOpen, color: 'text-pink-400' },
];

// Auto-load all images from src/assets/wallpapers
const wallpaperModules = import.meta.glob('./assets/wallpapers/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' });

// Convert the object values to an array of URLs
export const WALLPAPERS = Object.values(wallpaperModules).length > 0
    ? Object.values(wallpaperModules)
    : ['https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80']; // Fallback if folder empty
