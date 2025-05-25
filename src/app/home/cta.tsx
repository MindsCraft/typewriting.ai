"use client";

import {motion} from "framer-motion";
import Link from "next/link";
import {FiArrowRight, FiCalendar} from "react-icons/fi";
import React from "react";

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#2382fc] text-white py-32 my-20" id="cta">
    {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl"></div>
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Transform Your Business
            <span className="block text-blue-100 mt-2">with AI-Powered Assistant?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join thousands of forward-thinking companies that are already enhancing their customer experience
            and boosting efficiency with our AI assistant platform.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Link
                href="https://ask.typewriting.ai/login"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 text-lg font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Free
                <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Link
                href="https://calendly.com/uddinmoin/typewriting"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/50 text-white text-lg font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                Schedule a Call
                <FiCalendar className="ml-2" />
              </Link>
            </motion.div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-blue-100">
            <div>
              <p>Trusted by many businesses worldwide</p>
              <div className="flex items-center justify-center mt-1">
                <span className="ml-2">15th on Product Hunt</span>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-blue-100 mr-2"
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
              <span className="text-white text-sm font-medium">No credit card required</span>
            </div>

            <div className="flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-blue-100 mr-2"
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
              <span className="text-white text-sm font-medium">Always Free for Limited Assistant</span>
            </div>

            <div className="flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-blue-100 mr-2"
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
              <span className="text-white text-sm font-medium">Cancel anytime</span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
