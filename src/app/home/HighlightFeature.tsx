"use client";

import React from 'react';
import Image from 'next/image';

const HighlightFeature = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section - Inspired by Tally.so */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
            Create AI agents that work for you
          </h2>
          <p className="text-lg md:text-xl text-[rgb(var(--tpr-text-gray))] max-w-2xl mx-auto mb-8">
            Build powerful AI assistants without coding. Train them on your data and let them handle customer inquiries, take notes, and prepare information.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              href="https://ask.typewriting.ai/login"
              className="tpr-btn tpr-btn-primary"
            >
              Start Building Now
            </a>
            <a
              href="#features"
              className="tpr-btn tpr-btn-secondary"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Feature Highlights - Inspired by Tally.so body section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
            <div className="bg-[rgb(var(--tpr-blue))] bg-opacity-10 inline-flex rounded-full px-4 py-1 text-sm font-medium text-[rgb(var(--tpr-text-blue))] mb-4">
              Intelligent Conversations
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Natural conversations that feel human
            </h3>
            <p className="text-lg text-[rgb(var(--tpr-text-gray))] mb-6">
              Our AI agents engage in natural, context-aware conversations that make users feel like they're talking to a real person.
            </p>
            <ul className="space-y-3">
              {[
                'Understands complex questions and requests',
                'Maintains context throughout the conversation',
                'Adapts tone and style to match your brand voice',
                'Handles multiple topics in a single conversation'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[rgb(var(--tpr-text-green))] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2 bg-[rgb(var(--tpr-gray-light))] rounded-lg p-4 shadow-sm">
            <div className="bg-white rounded-lg shadow-sm border border-[rgb(var(--tpr-gray))] overflow-hidden">
              <div className="h-8 bg-[rgb(var(--tpr-gray-light))] border-b border-[rgb(var(--tpr-gray))] flex items-center px-4">
                <div className="w-3 h-3 rounded-full bg-[rgb(var(--tpr-red))] mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[rgb(var(--tpr-yellow))] mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[rgb(var(--tpr-green))]"></div>
              </div>
              <div className="p-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[rgb(var(--tpr-blue))] flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">
                      AI
                    </div>
                    <div className="bg-[rgb(var(--tpr-gray-light))] rounded-lg p-3 max-w-md">
                      <p>Hello! I'm your AI assistant. How can I help you today?</p>
                    </div>
                  </div>
                  <div className="flex items-start justify-end">
                    <div className="bg-[rgb(var(--tpr-blue))] bg-opacity-10 rounded-lg p-3 max-w-md text-[rgb(var(--tpr-text-blue))]">
                      <p>I need information about your premium plan features.</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[rgb(var(--tpr-gray-light))] flex items-center justify-center ml-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[rgb(var(--tpr-text-gray))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[rgb(var(--tpr-blue))] flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">
                      AI
                    </div>
                    <div className="bg-[rgb(var(--tpr-gray-light))] rounded-lg p-3 max-w-md">
                      <p>Our premium plan includes unlimited AI agents, priority support, custom branding, and advanced analytics. Would you like me to explain any specific feature in more detail?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-1">
            <div className="bg-[rgb(var(--tpr-purple))] bg-opacity-10 inline-flex rounded-full px-4 py-1 text-sm font-medium text-[rgb(var(--tpr-text-purple))] mb-4">
              Knowledge Integration
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Train your AI with your own data
            </h3>
            <p className="text-lg text-[rgb(var(--tpr-text-gray))] mb-6">
              Upload documents, connect to your knowledge base, or point to your website. Your AI agent will learn and provide accurate information.
            </p>
            <ul className="space-y-3">
              {[
                'Upload PDFs, DOCs, and other document formats',
                'Connect to Notion, Google Drive, or Confluence',
                'Crawl your website to extract information',
                'Automatically updates when your source data changes'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[rgb(var(--tpr-text-green))] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-2 bg-[rgb(var(--tpr-gray-light))] rounded-lg p-4 shadow-sm">
            <div className="bg-white rounded-lg shadow-sm border border-[rgb(var(--tpr-gray))] overflow-hidden">
              <div className="h-8 bg-[rgb(var(--tpr-gray-light))] border-b border-[rgb(var(--tpr-gray))] flex items-center px-4">
                <div className="w-3 h-3 rounded-full bg-[rgb(var(--tpr-red))] mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[rgb(var(--tpr-yellow))] mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[rgb(var(--tpr-green))]"></div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Knowledge Sources</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="border border-[rgb(var(--tpr-gray))] rounded p-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[rgb(var(--tpr-text-blue))] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-sm">Documents</span>
                    </div>
                    <div className="border border-[rgb(var(--tpr-gray))] rounded p-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[rgb(var(--tpr-text-purple))] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      <span className="text-sm">Website</span>
                    </div>
                    <div className="border border-[rgb(var(--tpr-gray))] rounded p-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[rgb(var(--tpr-text-green))] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span className="text-sm">Analytics</span>
                    </div>
                    <div className="border border-[rgb(var(--tpr-gray))] rounded p-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[rgb(var(--tpr-text-orange))] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">Calendar</span>
                    </div>
                  </div>
                </div>
                <div className="relative pt-4">
                  <div className="h-2 bg-[rgb(var(--tpr-gray-light))] rounded-full mb-1">
                    <div className="h-2 bg-[rgb(var(--tpr-green))] rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-[rgb(var(--tpr-text-gray))]">
                    <span>Processing knowledge base...</span>
                    <span>75%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center p-1 bg-[rgb(var(--tpr-gray-light))] rounded-full mb-8">
            <span className="bg-[rgb(var(--tpr-blue))] text-white px-4 py-1 rounded-full text-sm font-medium">New</span>
            <span className="px-4 text-sm">Advanced analytics now available!</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your customer experience?</h2>
          <p className="text-lg text-[rgb(var(--tpr-text-gray))] max-w-2xl mx-auto mb-8">
            Join thousands of businesses using AI agents to improve efficiency and customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://ask.typewriting.ai/login"
              className="tpr-btn tpr-btn-primary"
            >
              Get Started Free
            </a>
            <a
              href="https://calendly.com/uddinmoin/typewriting"
              target="_blank"
              rel="noopener noreferrer"
              className="tpr-btn tpr-btn-secondary"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightFeature;
