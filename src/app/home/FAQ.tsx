"use client";

import React, { useState } from 'react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqItems = [
    {
      question: "What can I do with Typewriting AI?",
      answer: "You can create unlimited chatbots, organized by different project names. Manage separate knowledge bases and questionnaires tailored for each project easily."
    },
    {
      question: "How safe are my files and customer responses with Typewriting AI?",
      answer: "Your data is secure. We never use your files or responses for language model training. Everything is stored safely and separately. When you delete a file from your project, it's completely removed from our system."
    },
    {
      question: "How fast and reliable are Typewriting AI's responses?",
      answer: "We use trusted open-source models combined with a Retrieval-Augmented Generation (RAG) layer to provide precise, accurate answers and avoid hallucinations or incorrect info—keeping your customers well-informed."
    },
    {
      question: "Does Typewriting AI support other languages?",
      answer: "Yes! Typewriting AI supports multiple languages and always tries to respond in the same language as your customer."
    },
    {
      question: "What is the difference between free and paid plans?",
      answer: "The free plan includes all features but limits the number of contacts your bots can respond to—up to 30 contacts. Paid plans remove this limit for unlimited contacts."
    },
    {
      question: "What is your Enterprise Plan?",
      answer: "We know enterprises have unique needs that go beyond standard packages. Our team works closely with you to tailor solutions—whether within existing features or with custom additions—to fit your business perfectly."
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
            href="https://calendly.com/uddinmoin/typewriting"
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
