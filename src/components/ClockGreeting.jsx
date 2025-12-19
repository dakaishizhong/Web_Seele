import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ClockGreeting() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const getGreeting = () => {
        const hour = time.getHours();
        if (hour < 5) return "Deep night, rest well";
        if (hour < 12) return "Good morning";
        if (hour < 18) return "Good afternoon";
        if (hour < 22) return "Good evening";
        return "Late night, take care";
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="flex flex-col items-center justify-center text-center text-white select-none">
            {/* Date - Crystal Header Style (Translucent) */}
            <motion.div
                className="text-sm md:text-base font-bold tracking-[0.2em] uppercase text-white/90 mb-4 drop-shadow-md border px-5 py-1.5 rounded-full border-white/20 bg-white/5 backdrop-blur-md shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {formatDate(time)}
            </motion.div>

            {/* Time - Translucent Crystal Text */}
            <div className="relative">
                {/* Main Layer - Glassy Gradient (White to Transparent) */}
                <motion.h1
                    className="relative z-10 text-[6rem] md:text-[11rem] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20 drop-shadow-[0_4px_16px_rgba(255,255,255,0.15)]"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                >
                    {formatTime(time)}
                </motion.h1>

                {/* Top Shine - Subtle Surface Glint */}
                <h1 className="absolute inset-0 z-20 text-[6rem] md:text-[11rem] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/60 to-transparent mix-blend-overlay pointer-events-none" aria-hidden="true">
                    {formatTime(time)}
                </h1>
            </div>

            {/* Greeting */}
            <motion.div
                className="mt-6 px-6 py-2 rounded-full overflow-hidden transition-all duration-300"
                style={{
                    background: 'rgba(255, 255, 255, 0.01)',
                    boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.2), 0 5px 15px rgba(0, 0, 0, 0.2)',
                    backdropFilter: 'blur(6px) saturate(180%) contrast(110%)',
                    WebkitBackdropFilter: 'blur(6px) saturate(180%) contrast(110%)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                {/* Specular Glint */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-gradient-to-b from-white/40 to-transparent rounded-b-lg opacity-60 pointer-events-none filter blur-[1px]" />

                <p className="relative z-10 text-sm md:text-base font-medium text-white/90 tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    {getGreeting()}
                </p>
            </motion.div>
        </div>
    );
}
