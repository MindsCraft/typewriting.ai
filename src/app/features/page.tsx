"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Feature card component
function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className={`bg-neutral-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group`}>
      <div className="flex flex-col gap-5 md:gap-6 p-7 xl:p-9 rounded-2xl border-0.75 border-brand-borders bg-brand-white dark:bg-brand-medium-black">
        <div className="relative mx-auto w-full h-90">
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
            loading="lazy"
            onError={(e) => {
              // Fallback to a placeholder if image fails to load
              const target = e.target as HTMLImageElement;
              target.src = "https://via.placeholder.com/400x400?text=Image+Not+Found";
              target.onerror = null; // Prevent infinite error loop
            }}
          />
        </div>
        <div className="relative flex flex-col h-full text-neutral-900">
          <h3 className="text-2xl font-bold mb-2 drop-shadow-md">{feature.title}</h3>
          <p className="text-neutral-900/80 drop-shadow-md mb-4 max-w-md">{feature.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Write Better Content,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              Faster
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 mb-10">
            Typewriting.ai combines advanced AI with intuitive design to help you create
            exceptional content in a fraction of the time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:opacity-90 transition-all"
            >
              Start Writing for Free
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-3 rounded-lg border border-gray-300 font-medium hover:border-gray-400 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="w-full bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features for Every Writer
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you're a professional copywriter, marketer, or business owner,
              Typewriting.ai has the tools you need to excel.
            </p>
          </div>

          {/* Feature cards grid with specific layout */}
          <div className="space-y-10">
            {/* Row 1: Single card spanning full width */}
            <div className="w-full">
              <FeatureCard feature={features[0]} />
            </div>

            {/* Row 2: Two cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard feature={features[1]} />
              <FeatureCard feature={features[2]} />
            </div>

            {/* Row 3: Two cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard feature={features[3]} />
              <FeatureCard feature={features[4]} />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Spotlight */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">
                AI Writing Assistant That Understands Your Voice
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Unlike other AI tools, Typewriting.ai learns your unique writing style and brand voice.
                Our adaptive AI ensures content that truly sounds like you wrote it.
              </p>
              <ul className="space-y-4">
                {[
                  "Style adaptation based on your existing content",
                  "Tone controls from formal to conversational",
                  "Brand voice preservation across all content types",
                  "Context-aware suggestions that match your industry"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-indigo-600">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-90 rounded-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="bg-white rounded-lg shadow-lg w-full h-full p-4">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="ml-2 text-sm text-gray-500">Typewriting.ai Editor</div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-6 bg-gray-100 rounded w-3/4"></div>
                      <div className="h-6 bg-gray-100 rounded w-full"></div>
                      <div className="h-6 bg-gray-100 rounded w-5/6"></div>
                      <div className="h-6 bg-gray-100 rounded w-4/5"></div>
                      <div className="mt-4 p-3 bg-indigo-50 border border-indigo-100 rounded-lg">
                        <div className="flex items-start">
                          <span className="text-indigo-600 mr-2">✨</span>
                          <div>
                            <div className="h-4 bg-indigo-200 rounded w-full mb-2"></div>
                            <div className="h-4 bg-indigo-200 rounded w-5/6"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="w-full bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Streamlined Content Creation Workflow
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From ideation to publishing, Typewriting.ai simplifies every step of the content creation process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workflows.map((workflow, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mb-4">
                  <span className="font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{workflow.title}</h3>
                <p className="text-gray-600">{workflow.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center text-white">
              <svg className="w-12 h-12 mx-auto mb-6 opacity-75" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-xl md:text-2xl font-medium mb-6">
                "Typewriting.ai has transformed our content marketing. We create twice the content in half the time, and our engagement metrics have improved by 47% since we started using it."
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-white">JS</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold">Jessica Smith</p>
                  <p className="opacity-75 text-sm">Marketing Director, TechVenture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Content Creation?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of writers, marketers, and businesses who are creating better content faster with Typewriting.ai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:opacity-90 transition-all"
            >
              Start Your Free Trial
            </Link>
            <Link
              href="/demo"
              className="px-8 py-3 rounded-lg border border-gray-300 font-medium hover:border-gray-400 transition-all"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

interface Feature {
  title: string;
  description: string;
  slug: string;
  image: string;
  color: string;
}

const features: Feature[] = [
  // Row 1 (1 card)
  {
    title: "Questionnaire",
    description: "Create customized questionnaires to gather structured information from your users and clients.",
    slug: "questionnaire",
    image: "/images/features/Questionnaire.jpg",
    color: "orange-50"
  },
  // Row 2 (2 cards)
  {
    title: "Customisation",
    description: "Tailor the AI experience to match your brand voice, style, and specific industry requirements.",
    slug: "customisation",
    image: "/images/features/customisation.jpg",
    color: "purple-50"
  },
  // Row 2 (2 cards)
  {
    title: "Agent Settings",
    description: "Configure your AI agents with different personalities, expertise levels, and response styles.",
    slug: "agent-settings",
    image: "/images/features/agent-settings.jpg",
    color: "teal-50"
  },
  // Row 3 (2 cards)
  {
    title: "Summary",
    description: "Generate concise summaries of lengthy content, meetings, or documents with key points highlighted.",
    slug: "summary",
    image: "/images/features/summary.jpg",
    color: "blue-50"
  },
  // Row 3 (2 cards)
  {
    title: "Direct Messaging",
    description: "Communicate directly with your AI assistant through a chat interface with real-time responses.",
    slug: "direct-messaging",
    image: "/images/features/direct-messaging.jpg",
    color: "rose-50"
  }
];

const workflows = [
  {
    title: "Define Your Content",
    description: "Choose what you want to create and describe your topic or paste an existing draft to enhance."
  },
  // Row 2 (2 cards)
  {
    title: "Generate & Edit",
    description: "Use AI to generate complete drafts or enhance specific sections, then edit with smart suggestions."
  },
  // Row 2 (2 cards)
  {
    title: "Export & Publish",
    description: "Export in your preferred format or publish directly to WordPress, Medium, and other platforms."
  }
];
