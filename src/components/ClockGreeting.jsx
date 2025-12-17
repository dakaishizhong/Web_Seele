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
        if (hour < 5) return "Deep night, rest well.";
        if (hour < 12) return "Good morning.";
        if (hour < 18) return "Good afternoon.";
        if (hour < 22) return "Good evening.";
        return "Late night, take care.";
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <div className="text-center text-white drop-shadow-md select-none">
            <motion.h1
                className="text-8xl md:text-9xl font-thin tracking-tight"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {formatTime(time)}
            </motion.h1>
            <motion.p
                className="text-xl md:text-2xl mt-4 font-light opacity-90"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                {getGreeting()}
            </motion.p>
        </div>
    );
}
