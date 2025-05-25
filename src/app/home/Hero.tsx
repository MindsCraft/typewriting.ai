"use client";

import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    const videoElement = document.querySelector('video');
    const fallbackElement = document.getElementById('video-fallback');

    if (videoElement && fallbackElement) {
      // Show fallback initially
      fallbackElement.classList.remove('opacity-0');
      fallbackElement.classList.add('opacity-100');

      // Initially hide controls until hover
      videoElement.controls = false;

      // Hide fallback when video can play
      videoElement.addEventListener('canplay', () => {
        fallbackElement.classList.remove('opacity-100');
        fallbackElement.classList.add('opacity-0');
      });

      // Show fallback if video fails to load
      videoElement.addEventListener('error', () => {
        fallbackElement.classList.remove('opacity-0');
        fallbackElement.classList.add('opacity-100');
      });
    }
  }, []);

  return (
    <section id="hero" className="pt-28 pb-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl mb-6 max-w-4xl mx-auto">
            Not another AI chatbot Agent
          </h1>
          <p className="text-lg md:text-xl text-[rgb(var(--tpr-text-gray))] max-w-2xl mx-auto mb-8">
            A complete platform to make AI agents who acts like your secretary - asking questions, taking notes, getting you ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="https://ask.typewriting.ai/login"
              className="tpr-btn tpr-btn-primary"
            >
              Start Free
            </a>
            <a
              href="https://calendly.com/uddinmoin/typewriting"
              target="_blank"
              rel="noopener noreferrer"
              className="tpr-btn tpr-btn-secondary"
            >
              Book a Call
            </a>
          </div>
          <div className="mt-12">
            <a href="https://www.producthunt.com/posts/typewriting-helpdesk-agent?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-typewriting&#0045;helpdesk&#0045;agent" target="_blank" rel="noopener noreferrer">
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=949292&theme=light&t=1747735554674"
                alt="Typewriting&#0032;Helpdesk&#0032;Agent - Avoid&#0032;delays&#0032;or&#0032;ghosting—let&#0032;AI&#0032;respond&#0032;your&#0032;client | Product Hunt"
                style={{ width: "250px", height: "54px" }}
                width="250"
                height="54"
              />
            </a>
          </div>
        </div>
        <div className="relative mx-auto max-w-5xl">
          <div className="bg-[rgb(var(--tpr-gray-light))] rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-video relative group">
              <video
                className="w-full h-full object-contain"
                controls
                autoPlay
                muted
                loop
                playsInline
                controlsList="nodownload"
                style={{ opacity: 1 }}
                onMouseEnter={(e) => e.currentTarget.controls = true}
                onMouseLeave={(e) => e.currentTarget.controls = false}
              >
                <source src="/demo-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Fallback for when video is loading or unavailable */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-[rgb(var(--tpr-gray-light))] pointer-events-none" id="video-fallback">
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
                        Creating AI agent...
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
