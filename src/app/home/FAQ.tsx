"use client";

import React, { useState } from 'react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);
  
  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };
  
  const faqItems = [
    {
      question: "How does Typewriting.ai work?",
      answer: "Typewriting.ai uses advanced artificial intelligence to help you create better content faster. Simply input a prompt or start writing, and our AI will suggest completions, improvements, and alternatives based on your context and goals."
    },
    {
      question: "Is my content secure and private?",
      answer: "Yes, your content is completely private and secure. We use enterprise-grade encryption and never store your content unless you explicitly save it. Our service is compliant with GDPR, CCPA, and other privacy regulations."
    },
    {
      question: "Can I use Typewriting.ai for different types of content?",
      answer: "Absolutely! Typewriting.ai can help you create various types of content including emails, blog posts, social media updates, marketing copy, academic papers, creative writing, and more. Our AI adapts to different writing styles and formats."
    },
    {
      question: "Do I need to be a professional writer to use this tool?",
      answer: "Not at all. Typewriting.ai is designed for writers of all skill levels. Whether you're a professional copywriter, a student, or a business owner who occasionally needs to create content, our tool will help you produce better writing with less effort."
    },
    {
      question: "Does Typewriting.ai support languages other than English?",
      answer: "Currently, Typewriting.ai works best with English, but we are actively developing support for other languages. Our roadmap includes Spanish, French, German, and several other major languages in the coming months."
    },
    {
      question: "What's the difference between free and paid plans?",
      answer: "The free plan gives you limited access to our basic features with a monthly word limit. Paid plans offer unlimited words, advanced features like style customization, priority support, and integration with other tools. Check our pricing page for detailed comparisons."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-[rgb(var(--tpr-text-gray))]">
            Find answers to common questions about Typewriting.ai
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`border ${openItem === index ? 'border-[rgb(var(--tpr-black))]' : 'border-[rgb(var(--tpr-gray))]'} rounded-lg overflow-hidden transition-colors duration-200`}
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex justify-between items-center w-full p-5 text-left font-medium focus:outline-none"
                aria-expanded={openItem === index}
              >
                <span>{item.question}</span>
                <svg 
                  className={`w-5 h-5 transition-transform duration-200 ${openItem === index ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-200 ${openItem === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="p-5 pt-0 text-[rgb(var(--tpr-text-gray))]">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6 text-[rgb(var(--tpr-text-gray))]">
            Still have questions? We're here to help!
          </p>
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); scrollToSection('cta'); }}
            className="tpr-btn tpr-btn-secondary"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
