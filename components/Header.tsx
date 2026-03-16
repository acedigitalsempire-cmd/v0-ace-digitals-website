'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-dark-navy/80 backdrop-blur-md border-b border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-electric-blue to-cyan bg-clip-text text-transparent">
              Ace Digitals
            </Link>
          </motion.div>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div key={item.href} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Link href={item.href} className="text-white hover:text-electric-blue transition-colors duration-300">
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>
          <motion.button className="md:hidden text-electric-blue" onClick={() => setIsOpen(!isOpen)} whileTap={{ scale: 0.95 }}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="block text-white hover:text-electric-blue transition-colors duration-300 py-2" onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;