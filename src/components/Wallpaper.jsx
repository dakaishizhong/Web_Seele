import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Wallpaper({ image }) {
    // Parallax logic
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 20; // Move range -10px to 10px
            const y = (e.clientY / innerHeight - 0.5) * 20;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-black">
            <AnimatePresence mode="popLayout">
                <motion.img
                    key={image}
                    src={image}
                    alt="Wallpaper"
                    initial={{ opacity: 0, scale: 1.15 }} // Start slightly zoomed for parallax room
                    animate={{
                        opacity: 1,
                        scale: 1.05,
                        x: mousePosition.x * -1, // Invert for depth feel
                        y: mousePosition.y * -1
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                        opacity: { duration: 1.5 },
                        scale: { duration: 1.5 },
                        x: { type: "tween", ease: "linear", duration: 0.2 }, // Instant response
                        y: { type: "tween", ease: "linear", duration: 0.2 }
                    }}
                    className="absolute inset-0 w-full h-full object-cover will-change-transform"
                />
            </AnimatePresence>

            {/* Glassmorphism Background Elements - Subtle Atmosphere */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[120px] mix-blend-overlay animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[120px] mix-blend-overlay animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Smart Gradient Overlays - Only dim where necessary */}
            {/* Top Gradient for Clock Visibility */}
            <div className="absolute top-0 inset-x-0 h-1/3 bg-gradient-to-b from-black/30 via-black/10 to-transparent pointer-events-none" />

            {/* Bottom Gradient for Dock/Widget Visibility */}
            <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none" />

            {/* Global Glare Reduction Overlay - consistently dim bright spots slightly without losing detail */}
            <div className="absolute inset-0 bg-black/15 pointer-events-none" />
        </div>
    );
}
