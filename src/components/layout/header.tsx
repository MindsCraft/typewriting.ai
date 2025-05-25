"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('features');

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Update active section based on scroll position
      const sections = ['hero', 'features', 'cta', 'faq'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveItem(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveItem(sectionId);
  };

  // Navigation items to keep DRY
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'cta', label: 'Book A Call' },
    { id: 'faq', label: 'FAQ' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      {/* Enhanced chromatic blur with frosted glass effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`border-b border-gray-200/30 absolute inset-0 transition-all duration-500 ease-in-out backdrop-filter backdrop-blur-lg bg-gradient-to-r from-white/70 via-white/80 to-white/70 ${
          scrolled 
            ? 'bg-opacity-80' 
            : 'bg-opacity-70' 
        }`}
        style={{
          backdropFilter: 'blur(12px) saturate(180%)',
          WebkitBackdropFilter: 'blur(12px) saturate(180%)'
        }}
      >
        {/* Enhanced chromatic light effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/15 via-indigo-100/10 to-purple-100/15 opacity-40 mix-blend-overlay"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16 md:h-18">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 z-10"
          >
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center cursor-pointer group"
            >
              <span className="text-lg font-medium tracking-tight text-gray-900 group-hover:text-gray-800 transition-colors duration-200">
                Typewriting<span className="text-[#2382fc] group-hover:text-blue-700 transition-colors duration-200">.ai</span>
              </span>
            </button>
          </motion.div>

          {/* Navigation - Center - Enhanced */}
          <div className="hidden md:flex items-center justify-center z-10 flex-1">
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex space-x-2"
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  whileHover={{ y: -2 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-base transition-all duration-200 cursor-pointer ${
                    activeItem === item.id 
                      ? 'text-gray-800 font-bold' 
                      : 'text-gray-600 font-normal hover:text-gray-700'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.nav>
          </div>

          {/* CTA - Right - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-end flex-shrink-0 z-10"
          >
            {/* Book a call button - Enhanced */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className="hidden md:block"
            >
              <button
                onClick={() => scrollToSection('cta')}
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#2382fc] text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Book a Call
                <FiCalendar className="ml-2" />
              </button>
            </motion.div>

            {/* Mobile menu button - Enhanced */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100/70 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Mobile menu with animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 z-40 border-b border-gray-200/30 shadow-md"
            style={{
              backdropFilter: 'blur(12px) saturate(180%)',
              WebkitBackdropFilter: 'blur(12px) saturate(180%)',
              background: 'linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0.95), rgba(255,255,255,0.9))'
            }}
          >
            {/* Enhanced chromatic light effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/10 via-indigo-100/5 to-purple-100/10 opacity-30 mix-blend-overlay"></div>

            <div className="px-5 pt-4 pb-8 relative">
              <nav className="grid gap-y-3">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    className={`px-4 py-3 text-base transition-all cursor-pointer ${
                      activeItem === item.id
                        ? 'text-gray-800 font-bold'
                        : 'text-gray-600 font-normal hover:text-gray-700'
                    }`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                  className="pt-5 mt-3 space-y-4 border-t border-gray-200/50"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <button
                      onClick={() => { scrollToSection('cta'); setMobileMenuOpen(false); }}
                      className="w-full inline-flex items-center justify-center px-5 py-3 bg-[#2382fc] text-white text-base font-medium rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Book a Call
                      <FiCalendar className="ml-2" />
                    </button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <a
                      href="https://ask.typewriting.ai/login"
                      className="w-full inline-flex items-center justify-center px-5 py-3 bg-white border border-[#2382fc] text-[#2382fc] text-base font-medium rounded-lg hover:bg-blue-50 hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      Start Building Free
                      <FiArrowRight className="ml-2" />
                    </a>
                  </motion.div>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
