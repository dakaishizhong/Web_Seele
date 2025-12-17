import { motion, AnimatePresence } from 'framer-motion';

export default function Wallpaper({ image }) {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden">
            <AnimatePresence mode="popLayout">
                <motion.img
                    key={image}
                    src={image}
                    alt="Wallpaper"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* Glassmorphism Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/30 rounded-full blur-[120px] mix-blend-overlay animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/30 rounded-full blur-[120px] mix-blend-overlay animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Overlay to dim background slightly for readability */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] transition-colors pointer-events-none" />
        </div>
    );
}
