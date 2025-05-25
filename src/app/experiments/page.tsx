"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowRight,FiCalendar, FiX } from 'react-icons/fi';


const ExperimentsPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);

    // Auto-rotate features
    const featureInterval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 4000);

    // Auto-rotate testimonials
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(featureInterval);
      clearInterval(testimonialInterval);
    };
  }, []);

  const features = [
    {
      title: "Questionnaire",
      description: "Create customized questionnaires to gather structured information from your users and clients.",
      image: "/images/features/Questionnaire.jpg",
      color: "from-orange-600 to-amber-500"
    },
    {
      title: "Customisation",
      description: "Tailor the AI experience to match your brand voice, style, and specific industry requirements.",
      image: "/images/features/customisation.jpg",
      color: "from-purple-600 to-indigo-500"
    },
    {
      title: "Agent Settings",
      description: "Configure your AI agents with different personalities, expertise levels, and response styles.",
      image: "/images/features/agent-settings.jpg",
      color: "from-teal-600 to-emerald-500"
    },
    {
      title: "Summary",
      description: "Generate concise summaries of lengthy content, meetings, or documents with key points highlighted.",
      image: "/images/features/summary.jpg",
      color: "from-blue-600 to-cyan-500"
    },
    {
      title: "Direct Messaging",
      description: "Communicate directly with your AI assistant through a chat interface with real-time responses.",
      image: "/images/features/direct-messaging.jpg",
      color: "from-rose-600 to-pink-500"
    }
  ];

  const testimonials = [
    {
      quote: "This AI assistant transformed how we handle customer support. Response times are down 70%.",
      author: "Sarah Chen",
      role: "Customer Success Manager, TechCorp"
    },
    {
      quote: "Incredibly easy to set up and customize. Our team was up and running in under an hour.",
      author: "Michael Rodriguez",
      role: "Founder, StartUpX"
    },
    {
      quote: "The analytics dashboard gives us valuable insights into customer interactions.",
      author: "Emily Park",
      role: "Product Lead, InnovateLabs"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
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
              NoT another AI-Powered Chatbots Agent!!!
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Build Your AI Assistants
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Without Writing Code
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              A complete platform to make AI agents who acts like your secretary.<br/>
              Asking related questions, Taking automated notes, Getting you prepared.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="https://ask.typewriting.ai/login"
                className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="relative">Start Building Free</span>
                <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="https://calendly.com/uddinmoin/typewriting"
                className="group inline-flex items-center justify-center px-8 py-4 font-medium text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:shadow-lg"
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
            <div className="p-1 bg-gradient-to-r from-blue-500 to-indigo-600" />
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 md:mb-0 text-left">
                  See us in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Action</span>
                </h3>
                <a
                  href="https://www.producthunt.com/posts/typewriting-helpdesk-agent?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-typewriting&#0045;helpdesk&#0045;agent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-105 transition-transform duration-300 rounded-lg"
                >
                  <img
                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=949292&theme=dark&t=1747735554674"
                    alt="Typewriting&#0032;Helpdesk&#0032;Agent - Avoid&#0032;delays&#0032;or&#0032;ghosting—let&#0032;AI&#0032;respond&#0032;your&#0032;client | Product Hunt"
                    style={{width: "250px", height: "54px"}}
                    width="250"
                    height="54"
                    className="rounded-lg"
                  />
                </a>
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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Everything You Need to Build
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {' '}Powerful AI Assistants
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Build smart AI assistants with our easy-to-use platform.
              Your AI will ask questions, gather information, and explain complex topics clearly. No need human assistance.
            </p>
          </motion.div>

          {/* Feature Card Modal/Lightbox */}
          {selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80" onClick={() => setSelectedImage(null)}>
              <div className="relative max-w-5xl w-full">
                <button
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                >
                  <FiX className="w-6 h-6 text-gray-800" />
                </button>
                <div className="relative w-full rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src={selectedImage}
                    alt="Feature image"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Feature Cards Layout */}
          <div className="space-y-10">
            {/* Row 1: Two cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.slice(0, 2).map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 300,
                    damping: 20
                  }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(feature.image)}
                >
                  <div className="bg-[rgb(34,37,42)] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                    <div className="relative w-full aspect-square mb-5">
                      <div className="relative h-full w-full overflow-hidden rounded-lg">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          style={{ objectFit: 'cover', objectPosition: 'top left' }}
                          className="transition-all duration-300"
                        />
                      </div>
                    </div>
                    <div className="text-white">
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-white/90 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 2: One card */}
            <div className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: 0.2,
                  type: 'spring',
                  stiffness: 300,
                  damping: 20
                }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(features[2].image)}
              >
                <div className="bg-[rgb(34,37,42)] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/2">
                      <div className="relative aspect-square w-full">
                        <div className="relative h-full w-full overflow-hidden rounded-lg">
                          <Image
                            src={features[2].image}
                            alt={features[2].title}
                            fill
                            style={{ objectFit: 'cover', objectPosition: 'top left' }}
                            className="transition-all duration-300"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-center text-white">
                      <h3 className="text-xl font-semibold mb-3">{features[2].title}</h3>
                      <p className="text-white/90 leading-relaxed">{features[2].description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Row 3: Two cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.slice(3, 5).map((feature, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 300,
                    damping: 20
                  }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(feature.image)}
                >
                  <div className="bg-[rgb(34,37,42)] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                    <div className="relative w-full aspect-square mb-5">
                      <div className="relative h-full w-full overflow-hidden rounded-lg">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          style={{ objectFit: 'cover', objectPosition: 'top left' }}
                          className="transition-all duration-300"
                        />
                      </div>
                    </div>
                    <div className="text-white">
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-white/90 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-24">
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


      {/* Demo Section */}
      <section id="demo" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              See the Future of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {' '}Conversational AI
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Experience how our AI assistant can transform your business with natural, human-like conversations
              and powerful automation capabilities.
            </p>
          </motion.div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-start">
            <motion.div
              className="mb-12 lg:mb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-6">
                {[
                  {
                    title: '24/7 Customer Support',
                    description: 'Provide instant responses to customer inquiries anytime, anywhere.',
                    icon: '💬'
                  },
                  {
                    title: 'Seamless Integrations',
                    description: 'Connect with your favorite tools like Slack, Zendesk, and more.',
                    icon: '🔌'
                  },
                  {
                    title: 'Smart Automations',
                    description: 'Automate repetitive tasks and focus on what matters most.',
                    icon: '⚡'
                  },
                  {
                    title: 'Data-Driven Insights',
                    description: 'Gain valuable insights from customer interactions and improve over time.',
                    icon: '📊'
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-2xl mr-4 mt-1">{item.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 mt-1">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Ready to see it in action?</h3>
                <p className="text-gray-600 mb-4">Schedule a personalized demo with our team to see how our AI can transform your business.</p>
                <Link
                  href="/demo"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Book a Demo
                  <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 left-20 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-blue-600 to-indigo-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-white/80"></div>
                    <div className="w-3 h-3 rounded-full bg-white/60"></div>
                    <div className="w-3 h-3 rounded-full bg-white/40"></div>
                    <div className="flex-1 text-center text-white font-medium text-sm">AI Assistant</div>
                  </div>
                </div>
                <div className="p-4 h-96 overflow-y-auto space-y-4">
                  <div className="flex">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">AI</div>
                    <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-3 max-w-xs">
                      <p className="text-gray-800">Hello! I'm your AI assistant. How can I help you today?</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-xs">
                      <p>What can you do?</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">AI</div>
                    <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-3 max-w-xs">
                      <p className="text-gray-800">I can help with customer support, answer questions, schedule appointments, and more! What do you need help with?</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-xs">
                      <p>How do I reset my password?</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">AI</div>
                    <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-3 max-w-xs">
                      <p className="text-gray-800">To reset your password, follow these steps:</p>
                      <ol className="mt-2 space-y-1 list-decimal list-inside">
                        <li>Go to the login page</li>
                        <li>Click on "Forgot Password"</li>
                        <li>Enter your email address</li>
                        <li>Check your email for a reset link</li>
                      </ol>
                      <p className="mt-2">Need more help?</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t border-gray-100 bg-gray-50">
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      disabled
                    />
                    <button className="ml-2 p-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - New Design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Powerful features for your business
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to build, launch, and grow your AI assistant
            </p>
          </div>

          {/* Main Feature Card */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                  New Feature
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Smart Document Processing
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Automatically extract, analyze, and process information from any document with our advanced AI engine.
                </p>
                <div className="space-y-4 mb-8">
                  {['Automated data extraction', 'Multi-format support', 'Smart categorization', 'Real-time processing'].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ExperimentsPage;
