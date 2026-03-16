'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'AI Automation', href: '/services/ai-automation' },
      { label: 'Digital Marketing', href: '/services/digital-marketing' },
      { label: 'Social Media Growth', href: '/services/social-media' },
    ],
    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
    Products: [
      { label: 'Digital Products', href: '/products' },
      { label: 'Resources', href: '/resources' },
      { label: 'Documentation', href: '/docs' },
    ],
  };

  const socialLinks = [
    { icon: FaFacebook, href: 'https://facebook.com' },
    { icon: FaTwitter, href: 'https://twitter.com' },
    { icon: FaLinkedin, href: 'https://linkedin.com' },
    { icon: FaInstagram, href: 'https://instagram.com' },
  ];

  return (
    <footer className="bg-dark-navy border-t border-glass-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-electric-blue to-cyan bg-clip-text text-transparent mb-4">
              Ace Digitals
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              We run the digital streets. Helping startups, brands, and creators dominate online through websites, AI automation, and high-growth marketing strategies.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a key={index} href={social.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} className="text-electric-blue hover:text-cyan transition-colors">
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <h3 className="text-white font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 hover:text-electric-blue transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="border-t border-glass-border my-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Ace Digitals Global. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-electric-blue text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-electric-blue text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;