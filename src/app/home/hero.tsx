"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import React from "react";
import { motion } from 'framer-motion';
import ProductHuntBadge from '@/components/marketing/ProductHuntBadge';
import BlobBackground from '@/components/ui/BlobBackground';

// Hero Section
const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24" id="hero">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 z-0" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-slate-100 z-0" />
      
      {/* Blob background */}
      <div className="fixed inset-0 z-0">
        <BlobBackground 
          blobCount={6}
          blobSize={400}
          colors={['#93c5fd', '#a5b4fc', '#c7d2fe', '#ddd6fe', '#f0abfc']}
          opacity={0.2}
          duration={25}
          blur={100}
        />
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 md:pb-32 z-20">
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
            Not another chatbot agent.
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Replace boring forms with
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Conversational AI Agent
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          A complete platform to make AI agents who act like your secretary. Ask follow up questions, Taking automated notes, Getting you prepared.
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
              <span className="relative">Request a Demo</span>
              <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 md:mt-28 relative"
        >
          <div className="relative">
            {/* Glass effect container */}
            <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl shadow-blue-500/10 group/video">
              {/* Animated gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/30 via-indigo-400/30 to-purple-400/30 rounded-2xl opacity-0 group-hover/video:opacity-100 blur-md transition-all duration-700 -z-10"></div>
              {/* Video container */}
              <div className="relative aspect-video overflow-hidden rounded-xl m-0.5">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 z-10 pointer-events-none"></div>
                {/* Video element */}
                <video
                  className="w-full h-full object-cover transition-all duration-700 group-hover/video:scale-105 bg-gradient-to-br from-blue-50 to-indigo-50"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  controlsList="nodownload"
                  onMouseEnter={(e) => {
                    e.currentTarget.controls = true;
                    e.currentTarget.play();
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.controls = false;
                  }}
                >
                  <source src="/demo-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Subtle reflection effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-indigo-400/10 rounded-full blur-2xl -z-10"></div>
            </div>
            
            {/* ProductHunt Badge with increased spacing */}
            <div className="mt-10 md:mt-12 flex justify-center transform transition-transform duration-500 hover:scale-105">
              <ProductHuntBadge />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
