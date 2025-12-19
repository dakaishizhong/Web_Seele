import { motion } from 'framer-motion';
import { APPS } from '../consts';

export default function AppDock() {
    return (
        <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl px-4"
            initial="hidden"
            animate="show"
            variants={{
                hidden: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: 0.6 }
                }
            }}
        >
            {APPS.map((app) => (
                <motion.a
                    key={app.id}
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col items-center justify-center p-5 rounded-[2rem] overflow-hidden transition-all duration-300"
                    style={{
                        // Standard Liquid Glass Style for ALL icons
                        background: 'rgba(255, 255, 255, 0.01)',
                        boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.2), 0 10px 30px rgba(0, 0, 0, 0.25)',
                        backdropFilter: 'blur(6px) saturate(180%) contrast(110%)',
                        WebkitBackdropFilter: 'blur(6px) saturate(180%) contrast(110%)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                    variants={{
                        hidden: { y: 20, opacity: 0 },
                        show: { y: 0, opacity: 1 }
                    }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    {/* No Top Specular Glint (Removed as requested) */}

                    {/* Icon with strong shadow for white backgrounds */}
                    <app.icon size={44} className={`relative z-10 mb-3 ${app.color} drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300`} />

                    {/* Label with heavy text shadow */}
                    <span className="relative z-10 text-white font-medium tracking-wide text-xs md:text-sm drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] opacity-90 group-hover:opacity-100 transition-opacity">
                        {app.name}
                    </span>
                </motion.a>
            ))}
        </motion.div >
    );
}
