'use client';
import React from 'react';
import { motion } from 'framer-motion';
const ParticleBackground: React.FC = () => {
    const particles = Array.from({ length: 50 }, (_, i) => i);
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {particles.map((i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-electric-blue rounded-full"
                    style={{ left: Math.random() * 100 + '%', top: Math.random() * 100 + '%', }}
                    animate={{ y: [0, -100], opacity: [0, 1, 0], }}
                    transition={{ duration: Math.random() * 3 + 3, repeat: Infinity, delay: Math.random() * 2, }}
                />
            ))}
        </div>
    );
};
export default ParticleBackground;