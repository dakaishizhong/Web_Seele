import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Disc, Maximize2, Minimize2 } from 'lucide-react';

export default function MusicWidget() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            {/* Backdrop for clicking outside */}
            {isExpanded && (
                <div
                    className="fixed inset-0 z-40 bg-transparent"
                    onClick={() => setIsExpanded(false)}
                />
            )}

            <motion.div
                layout
                className={`fixed bottom-6 left-6 z-50 bg-white/5 dark:bg-black/60 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl overflow-hidden transition-colors ring-1 ring-white/5 ${isExpanded ? 'rounded-xl' : 'rounded-full cursor-pointer hover:bg-white/10 dark:hover:bg-black/80'}`}
                initial={{ x: -20, opacity: 0 }}
                animate={{
                    x: 0,
                    opacity: 1,
                    width: isExpanded ? 280 : (isHovered ? 'auto' : 56), // 56px is roughly w-14
                    height: isExpanded ? 152 : 56
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => {
                    e.stopPropagation(); // Prevent backdrop click if clicking widget itself
                    !isExpanded && setIsExpanded(true);
                }}
                onMouseEnter={() => !isExpanded && setIsHovered(true)}
                onMouseLeave={() => !isExpanded && setIsHovered(false)}
            >
                <div className="relative w-full h-full">
                    {/* Minimized View Elements */}
                    <motion.div
                        className="flex items-center gap-3 p-1.5 absolute inset-0 z-20"
                        animate={{
                            opacity: isExpanded ? 0 : 1,
                            pointerEvents: isExpanded ? 'none' : 'auto'
                        }}
                    >
                        {/* Vinyl/Cover Animation (Visual) */}
                        <motion.div
                            className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/10 shadow-lg bg-black flex items-center justify-center shrink-0"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                            <Disc className="text-emerald-500" size={24} />
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                        </motion.div>

                        {/* Text Info - Only visible on hover */}
                        <AnimatePresence>
                            {isHovered && (
                                <motion.div
                                    initial={{ opacity: 0, width: 0 }}
                                    animate={{ opacity: 1, width: 'auto' }}
                                    exit={{ opacity: 0, width: 0 }}
                                    className="flex flex-col whitespace-nowrap overflow-hidden"
                                >
                                    <span className="text-white text-sm font-semibold pr-4">Spotify Playlist</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Expanded View Elements (Iframe) */}
                    <motion.div
                        className="relative z-10 w-full h-full"
                        animate={{
                            opacity: isExpanded ? 1 : 0,
                            pointerEvents: isExpanded ? 'auto' : 'none',
                        }}
                    >
                        <iframe
                            style={{ borderRadius: '12px' }}
                            src="https://open.spotify.com/embed/playlist/37i9dQZEVXbNG2KDcFcKOF?utm_source=generator&theme=0"
                            width="280"
                            height="152"
                            frameBorder="0"
                            allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            className="block"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
}
