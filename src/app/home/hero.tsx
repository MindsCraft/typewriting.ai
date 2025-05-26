"use client";

import Link from "next/link";
import {FiArrowRight} from "react-icons/fi";
import React from "react";
import { motion } from 'framer-motion';
import ProductHuntBadge from '@/components/marketing/ProductHuntBadge';

// Hero Section
const Hero = () => {
  return (
    <section className="relative overflow-hidden" id="hero">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Not another AI-Powered Chatbots Agent
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Replace boring forms with
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Conversational Agent
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            A complete platform to make AI agents who acts like your secretary.<br/>
            Asking related questions, Taking automated notes, Getting you prepared.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="https://ask.typewriting.ai/login"
              className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white bg-[#2382fc] rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="relative">Start Free</span>
              <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="https://calendly.com/uddinmoin/typewriting"
              className="group inline-flex items-center justify-center px-8 py-4 font-medium text-[#2382fc] bg-white border-2 border-[#2382fc] rounded-xl hover:bg-blue-50 transition-all duration-300 hover:shadow-lg"
            >
              <span className="relative">Book A Call</span>
              <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-20 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
        >
          <div className="p-1 bg-[#2382fc]" />
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 md:mb-0 text-left">
                See us in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Action</span>
              </h3>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <ProductHuntBadge />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-gray-200 group">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-10 rounded-xl"></div>

              <div className="aspect-video relative z-10 transform group-hover:scale-[1.01] transition-transform duration-500">
                <video
                  className="w-full h-full object-cover rounded-lg shadow-md"
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
              </div>
            </div>
            <p className="text-gray-600 text-center mt-4">
              Watch how our AI assistant platform can transform your business workflow
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
