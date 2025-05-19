"use client";

import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-28 pb-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl mb-6 max-w-4xl mx-auto">
            Bringing AI into<br />
            Everyday Writing
          </h1>
          <p className="text-lg md:text-xl text-[rgb(var(--tpr-text-gray))] max-w-2xl mx-auto mb-8">
            Typewriting.ai is the connected workspace where better, faster writing happens.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="#signup" onClick={(e) => { e.preventDefault(); scrollToSection('cta'); }} className="tpr-btn tpr-btn-primary">
              Start Free
            </a>
            <a href="#demo" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }} className="tpr-btn tpr-btn-secondary">
              Book a Call
            </a>
          </div>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="bg-[rgb(var(--tpr-gray-light))] rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-video relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-4 bg-white border border-[rgb(var(--tpr-gray))] rounded-lg shadow-sm">
                  <div className="h-6 flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-[rgb(var(--tpr-red))] mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-[rgb(var(--tpr-yellow))] mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-[rgb(var(--tpr-green))]"></div>
                  </div>
                  <div className="font-mono text-sm">
                    <div className="flex">
                      <span className="text-[rgb(var(--tpr-text-gray))]">$</span>
                      <span className="ml-2 animate-type overflow-hidden whitespace-nowrap">
                        AI writing assistant...
                      </span>
                      <span className="animate-cursor text-[rgb(var(--tpr-text-gray))]">|</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-24 text-center">
            <p className="text-[rgb(var(--tpr-text-gray))] mb-8">Trusted by thousands of writers and content creators</p>
            <div className="flex flex-wrap justify-center gap-8 items-center max-w-4xl mx-auto">
              {["The New Yorker", "Medium", "Forbes", "TechCrunch", "FastCompany", "Wired"].map((brand) => (
                <div key={brand} className="h-6 text-[rgb(var(--tpr-text-gray))] font-semibold">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
