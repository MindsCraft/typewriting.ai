"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

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
      const sections = ['hero', 'features', 'testimonials', 'pricing', 'faq'];
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
    { id: 'features', label: 'Features' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'faq', label: 'FAQ' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      {/* Chromatic blur with frosted glass effect */}
      <div
        className={`absolute inset-0 transition-all duration-500 ease-in-out backdrop-filter backdrop-blur-lg bg-gradient-to-r from-white/60 via-white/70 to-white/60 ${
          scrolled 
            ? 'border-b border-gray-200/30 bg-opacity-80' 
            : 'bg-opacity-70'
        }`}
        style={{
          backdropFilter: 'blur(10px) saturate(180%)',
          WebkitBackdropFilter: 'blur(10px) saturate(180%)'
        }}
      >
        {/* Chromatic light effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/10 via-blue-100/5 to-teal-100/10 opacity-30 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 z-10">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center cursor-pointer"
            >
              <span className="text-lg font-medium tracking-tight text-gray-900">
                Typewriting<span className="text-[#2382fc]">.ai</span>
              </span>
            </button>
          </div>

          {/* Navigation - Center */}
          <div className="hidden md:flex items-center justify-center z-10 flex-1">
            <nav className="flex space-x-1">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm rounded-md transition-all duration-200 cursor-pointer ${
                    activeItem === item.id 
                      ? 'text-gray-900 bg-gray-100/70 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* CTA - Right - Notion-style */}
          <div className="flex items-center justify-end flex-shrink-0 z-10">
            {/* Try free button - Notion style */}
            <Button
              variant="secondary"
              size="sm"
              onClick={() => scrollToSection('features')}
              className="hidden md:inline-flex mr-2"
            >
              Try free
            </Button>

            {/* Book a call button - Notion style */}
            <Button
              variant="primary"
              size="sm"
              onClick={() => scrollToSection('features')}
              className="hidden md:inline-flex"
            >
              Book a Call
            </Button>

            {/* Mobile menu button */}
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 transition-colors"
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
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Notion-inspired dropdown design with frosted glass effect */}
      {mobileMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 z-40 border-b border-gray-200/30 shadow-sm"
          style={{
            backdropFilter: 'blur(10px) saturate(180%)',
            WebkitBackdropFilter: 'blur(10px) saturate(180%)',
            background: 'linear-gradient(to right, rgba(255,255,255,0.8), rgba(255,255,255,0.9), rgba(255,255,255,0.8))'
          }}
        >
          {/* Subtle chromatic light effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/5 via-purple-100/5 to-teal-100/5 opacity-20 mix-blend-overlay"></div>

          <div className="px-4 pt-3 pb-6 relative">
            <nav className="grid gap-y-4">
              {navItems.map(item => (
                <button
                  key={item.id}
                  className={`px-3 py-2 text-base font-medium rounded-md transition-all cursor-pointer ${
                    activeItem === item.id
                      ? 'text-gray-900 bg-gray-100/70 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
                  }`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 mt-2 space-y-3 border-t border-gray-200/50">
                <Button
                  variant="secondary"
                  size="md"
                  fullWidth={true}
                  onClick={() => { scrollToSection('features'); setMobileMenuOpen(false); }}
                >
                  Try free
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  fullWidth={true}
                  onClick={() => { scrollToSection('features'); setMobileMenuOpen(false); }}
                >
                  Book a Call
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
