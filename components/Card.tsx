'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hoverEffect = true,
}) => {
  const baseStyles = 'rounded-2xl p-6 backdrop-blur-md bg-glass border border-glass-border transition-all duration-300';

  return (
    <motion.div
      className={`${baseStyles} ${className}`}
      onClick={onClick}
      whileHover={hoverEffect ? { y: -8, boxShadow: '0 20px 40px rgba(0, 212, 255, 0.2)' } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
