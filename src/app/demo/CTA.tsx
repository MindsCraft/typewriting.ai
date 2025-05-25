"use client";

import React from 'react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cta" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Notion-style CTA container */}
        <div className="flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Ready to transform your content workflow?
          </h2>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl">
            Join thousands of creators and businesses using Typewriting.ai to automate their content creation and focus on what matters most.
          </p>

          {/* CTA buttons - Notion style */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary button - solid */}
            <Button
              variant="primary"
              size="xl"
              onClick={() => scrollToSection('features')}
            >
              Get started for free
            </Button>

            {/* Secondary button - outline */}
            <Button
              variant="secondary"
              size="xl"
              onClick={() => scrollToSection('pricing')}
            >
              View pricing plans
            </Button>
          </div>

          {/* Trust indicators - Notion style with simpler SVG */}
          <div className="mt-12 text-sm text-gray-500 flex flex-wrap items-center justify-center gap-2">
            <div className="flex items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-400 mr-1.5"
              >
                <path
                  d="M10 18.333a8.333 8.333 0 100-16.666 8.333 8.333 0 000 16.666z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 10l1.667 1.667L13.333 8.333"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>No credit card required</span>
            </div>
            <span className="mx-2 text-gray-300">•</span>
            <div className="flex items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-400 mr-1.5"
              >
                <path
                  d="M10 18.333a8.333 8.333 0 100-16.666 8.333 8.333 0 000 16.666z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 10l1.667 1.667L13.333 8.333"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>30-day free trial</span>
            </div>
            <span className="mx-2 text-gray-300">•</span>
            <div className="flex items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-400 mr-1.5"
              >
                <path
                  d="M10 18.333a8.333 8.333 0 100-16.666 8.333 8.333 0 000 16.666z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 10l1.667 1.667L13.333 8.333"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* Additional trust elements - Notion style */}
          <div className="mt-20 border-t border-gray-100 pt-10 w-full max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-base font-medium text-gray-900 mb-2">Easy Setup</h3>
                <p className="text-sm text-gray-500">
                  Get started in minutes with our intuitive interface
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 2.5V5.833M10 14.167V17.5M5 10H2.5M17.5 10H15M15.303 4.697L12.929 7.071M7.071 12.929L4.697 15.303M4.697 4.697L7.071 7.071M12.929 12.929L15.303 15.303" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-base font-medium text-gray-900 mb-2">Flexible Usage</h3>
                <p className="text-sm text-gray-500">
                  Use our platform however works best for your needs
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.167 4.167H5.833C4.91 4.167 4.167 4.91 4.167 5.833V14.167C4.167 15.09 4.91 15.833 5.833 15.833H14.167C15.09 15.833 15.833 15.09 15.833 14.167V10.833" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.167 10.833L15.833 4.167" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.667 4.167H15.833V8.333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-base font-medium text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-500">
                  Our team is always available to help with any questions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
