"use client";

import Link from 'next/link';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full border-t border-[rgb(var(--tpr-gray))] py-12 mt-auto bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-base font-medium">Typewriting.ai</h3>
            <p className="text-sm text-[rgb(var(--tpr-text-gray))] max-w-xs">
              Experience the future of writing with our intelligent assistant for polished, engaging content.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-[rgb(var(--tpr-text-gray))] hover:text-[rgb(var(--tpr-text-default))]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="https://github.com/yourusername/typewriting.ai" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[rgb(var(--tpr-text-gray))] hover:text-[rgb(var(--tpr-text-default))]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }} className="text-sm text-[rgb(var(--tpr-text-gray))] hover:text-[rgb(var(--tpr-text-default))]">Features</a></li>
              <li><a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }} className="text-sm text-[rgb(var(--tpr-text-gray))] hover:text-[rgb(var(--tpr-text-default))]">Pricing</a></li>
              <li><a href="#integrations" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }} className="text-sm text-[rgb(var(--tpr-text-gray))] hover:text-[rgb(var(--tpr-text-default))]">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-medium mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#blog" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }} className="text-sm text-[rgb(var(--tpr-text-gray))] hover:text-[rgb(var(--tpr-text-default))]">Blog</a></li>
              <li><a href="#docs" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }} className="text-sm text-[rgb(var(--tpr-text-gray))] hover:text-[rgb(var(--tpr-text-default))]">Documentation</a></li>
              <li><a href="#examples" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }} className="text-sm text-[rgb(var(--tpr-text-gray))] hover:text-[rgb(var(--tpr-text-default))]">Examples</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-sm text-[rgb(var(--tpr-text-gray))] hover:text-[rgb(var(--tpr-text-default))]">About</a></li>
              <li><a href="#careers" onClick={(e) => { e.preventDefault(); scrollToSection('cta'); }} className="text-sm text-[rgb(var(--tpr-text-gray))] hover:text-[rgb(var(--tpr-text-default))]">Careers</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('cta'); }} className="text-sm text-[rgb(var(--tpr-text-gray))] hover:text-[rgb(var(--tpr-text-default))]">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgb(var(--tpr-gray))] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[rgb(var(--tpr-text-gray))]">
            &copy; {new Date().getFullYear()} Typewriting.ai. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); scrollToSection('footer'); }} className="text-sm text-[rgb(var(--tpr-text-gray))] hover:text-[rgb(var(--tpr-text-default))]">
              Privacy Policy
            </a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); scrollToSection('footer'); }} className="text-sm text-[rgb(var(--tpr-text-gray))] hover:text-[rgb(var(--tpr-text-default))]">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
