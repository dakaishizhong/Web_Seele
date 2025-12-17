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

export const WALLPAPERS = [
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Mountain
    'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Dark Gradient
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Space
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Mountains
    'https://images.unsplash.com/photo-1534067783741-5127d28f8515?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Minimal
];
