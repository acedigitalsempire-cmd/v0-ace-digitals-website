'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CounterProps {
  target: number;
  label: string;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ target, label, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-electric-blue to-cyan bg-clip-text text-transparent">
        {count}{suffix}
      </div>
      <p className="text-gray-300 mt-2">{label}</p>
    </motion.div>
  );
};

export default Counter;