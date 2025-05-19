"use client";

import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-16 bg-[rgb(var(--tpr-gray-light))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-[rgb(var(--tpr-text-gray))] max-w-2xl mx-auto">
            Our AI writing assistant comes with everything you need to create better content faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-[rgb(var(--tpr-gray))]">
            <div className="w-12 h-12 bg-[rgb(var(--tpr-blue))] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[rgb(var(--tpr-text-blue))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-[rgb(var(--tpr-text-gray))]">
              Generate high-quality content in seconds, not hours. Save time and boost your productivity.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-[rgb(var(--tpr-gray))]">
            <div className="w-12 h-12 bg-[rgb(var(--tpr-green))] bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[rgb(var(--tpr-text-green))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Multiple Formats</h3>
            <p className="text-[rgb(var(--tpr-text-gray))]">
              Create content for emails, blogs, social media, and more with format-specific optimization.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-[rgb(var(--tpr-gray))]">
            <div className="w-12 h-12 bg-[rgb(var(--tpr-purple))] bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[rgb(var(--tpr-text-purple))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Templates</h3>
            <p className="text-[rgb(var(--tpr-text-gray))]">
              Access a library of ready-to-use templates for various writing needs and customize them instantly.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-[rgb(var(--tpr-gray))]">
            <div className="w-12 h-12 bg-[rgb(var(--tpr-orange))] bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[rgb(var(--tpr-text-orange))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Advanced Security</h3>
            <p className="text-[rgb(var(--tpr-text-gray))]">
              Your content remains private and secure with our enterprise-grade encryption and privacy controls.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[rgb(var(--tpr-text-green))] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">End-to-end encryption</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[rgb(var(--tpr-text-green))] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">GDPR & CCPA compliant</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[rgb(var(--tpr-text-green))] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">No data retention</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-[rgb(var(--tpr-gray))]">
            <div className="w-12 h-12 bg-[rgb(var(--tpr-pink))] bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[rgb(var(--tpr-text-pink))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
            <p className="text-[rgb(var(--tpr-text-gray))]">
              Connect with your favorite tools and platforms for a smooth workflow.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {['Google Docs', 'Notion', 'Microsoft Word', 'Slack', 'Gmail', 'WordPress'].map((tool) => (
                <div key={tool} className="text-xs font-medium py-2 px-3 bg-[rgb(var(--tpr-gray-light))] rounded text-center">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <a href="#pricing" className="tpr-btn tpr-btn-primary mx-auto inline-flex">
            View All Features
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
