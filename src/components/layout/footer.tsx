"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full border-t border-gray-200 py-16 mt-auto bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-50 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-indigo-300 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 md:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className="flex items-center"
            >
              <div className="text-lg font-medium tracking-tight text-gray-900 group-hover:text-gray-800 transition-colors duration-200">
                Typewriting<span className="text-[#2382fc] group-hover:text-blue-700 transition-colors duration-200">.ai</span>
              </div>
            </motion.div>
            <p className="text-sm text-gray-600 max-w-xs leading-relaxed">
              Your intelligent AI assistant for building powerful conversational agents. Create smart AI assistants that ask questions, gather information, and explain complex topics clearly.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                href="https://twitter.com/typewritingai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-500 hover:text-[#2382fc] transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                href="https://github.com/yourusername/typewriting.ai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-500 hover:text-[#2382fc] transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                href="https://discord.gg/typewriting"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="text-gray-500 hover:text-[#2382fc] transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M9 9v1.5a.5.5 0 0 0 .5.5H11a2 2 0 0 0 2-2v-.5a2 2 0 0 0-2-2h-.5a.5.5 0 0 1-.5-.5V4"></path>
                  <path d="M14 9v1.5a.5.5 0 0 0 .5.5H16a2 2 0 0 0 2-2v-.5a2 2 0 0 0-2-2h-.5a.5.5 0 0 1-.5-.5V4"></path>
                  <path d="M18 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12Z"></path>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:text-right"
          >
            <h3 className="text-base font-medium mb-4 md:font-semibold text-gray-900">Resources</h3>
            <ul className="space-y-3">
              {["Tutorial", "Documentation", "Demos"].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                  whileHover={{ x: -5 }}
                >
                  <a
                    href={
                      item === "Tutorial"
                        ? "https://typewriting.ai/docs/tutorial"
                        : item === "Documentation"
                          ? "https://typewriting.ai/docs"
                          : "https://www.youtube.com/c/TypewritingAI"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-[#2382fc] transition-colors duration-200"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:text-right"
          >
            <h3 className="text-base font-medium mb-4 md:font-semibold text-gray-900">Connect</h3>
            <ul className="space-y-3">
              {[
                { name: "Contact", href: "mailto:typewriting.ai@gmail.com" },
                { name: "Discord Community", href: "https://discord.gg/typewriting" },
                { name: "Twitter", href: "https://twitter.com/typewritingai" }
              ].map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                  whileHover={{ x: -5 }}
                >
                  <a
                    href={item.href}
                    target={item.name !== "Contact" ? "_blank" : undefined}
                    rel={item.name !== "Contact" ? "noopener noreferrer" : undefined}
                    className="text-sm text-gray-600 hover:text-[#2382fc] transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-gray-200 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Typewriting.ai. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service"].map((item, index) => (
              <motion.a
                key={item}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                href={item === "Privacy Policy" ? "https://typewriting.ai/privacy" : "https://typewriting.ai/terms"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-[#2382fc] transition-colors duration-200"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
