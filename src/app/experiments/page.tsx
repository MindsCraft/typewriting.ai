"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiZap, FiCode, FiGlobe, FiMessageSquare, FiCalendar } from 'react-icons/fi';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ExperimentsPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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
      icon: <FiMessageSquare className="w-6 h-6" />,
      title: 'Natural Conversations',
      description: 'Engage users with human-like conversations powered by advanced NLP.'
    },
    {
      icon: <FiZap className="w-6 h-6" />,
      title: 'Smart Automations',
      description: 'Automate repetitive tasks and workflows with intelligent triggers.'
    },
    {
      icon: <FiCode className="w-6 h-6" />,
      title: 'No-Code Builder',
      description: 'Create custom AI assistants without writing a single line of code.'
    },
    {
      icon: <FiGlobe className="w-6 h-6" />,
      title: 'Multi-Platform',
      description: 'Deploy your AI on websites, apps, and messaging platforms.'
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
            <div className="mt-12 flex items-center justify-center gap-4 transform hover:scale-105 transition-transform duration-300">
              <a
                href="https://www.producthunt.com/posts/typewriting-helpdesk-agent?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-typewriting&#0045;helpdesk&#0045;agent"
                target="_blank"
                rel="noopener noreferrer"
                className="shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-20 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-1 bg-gradient-to-r from-blue-500 to-indigo-600" />
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                See Our Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">in Action</span>
              </h3>
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
              Your AI will ask questions, gather information, and explain complex topics clearly—no human needed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
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
                className="group"
              >
                <div className="h-full bg-white p-6 rounded-xl border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  <div className="mt-4 flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                    <span>Learn more</span>
                    <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to get started?</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses that trust our platform to power their AI assistants.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/signup"
                  className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="#demo"
                  className="px-8 py-3.5 bg-white text-gray-700 font-medium rounded-lg border-2 border-gray-200 hover:bg-gray-50 transition-all duration-300"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
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
              <span className="block text-blue-100 mt-2">with AI-Powered Conversations?</span>
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
                  href="/signup"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 text-lg font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Start Your Free Trial
                  <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/50 text-white text-lg font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  Schedule a Demo
                  <FiCalendar className="ml-2" />
                </Link>
              </motion.div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-blue-100">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-blue-600 bg-white/20 backdrop-blur-sm" />
                ))}
              </div>
              <div>
                <p>Trusted by 10,000+ businesses worldwide</p>
                <div className="flex items-center justify-center mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2">4.9/5 from 500+ reviews</span>
                </div>
              </div>
            </div>
          </motion.div>
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

          {/* Two Feature Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Real-time Collaboration",
                description: "Work together with your team in real-time. See changes instantly and collaborate without any friction.",
                icon: (
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              {
                title: "Advanced Analytics",
                description: "Gain valuable insights with our comprehensive analytics dashboard. Track performance and optimize your workflows.",
                icon: (
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Powerful features for your business
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to build, launch, and grow your AI assistant
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Integration</h3>
              <p className="text-gray-600 mb-6">Seamlessly connect with your favorite tools and services in just a few clicks.</p>
              <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 group">
                Learn more
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-gray-600 mb-6">Experience blazing fast performance with our optimized AI infrastructure.</p>
              <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 group">
                Learn more
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Security</h3>
              <p className="text-gray-600 mb-6">Your data is protected with bank-level encryption and security protocols.</p>
              <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 group">
                Learn more
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperimentsPage;
