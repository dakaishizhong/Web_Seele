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
                    className="group relative flex flex-col items-center justify-center p-5 bg-white/5 dark:bg-black/40 backdrop-blur-3xl border border-white/20 dark:border-white/10 rounded-[1.5rem] shadow-xl transition-all hover:bg-white/15 dark:hover:bg-black/60 hover:shadow-2xl hover:border-white/30 dark:hover:border-white/20 overflow-hidden"
                    variants={{
                        hidden: { y: 20, opacity: 0 },
                        show: { y: 0, opacity: 1 }
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    {/* Glossy Reflection */}
                    <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className={`relative z-10 p-3 rounded-2xl bg-white/10 shadow-inner mb-2 ${app.color} group-hover:scale-110 transition-transform duration-300`}>
                        <app.icon size={28} />
                    </div>
                    <span className="relative z-10 text-white font-medium tracking-wide text-xs md:text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                        {app.name}
                    </span>
                </motion.a>
            ))}
        </motion.div>
    );
}
