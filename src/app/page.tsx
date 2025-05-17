import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="block">Elevate Your Writing with</span>
                <span className="text-blue-600 relative inline-flex h-20">
                  <span className="animate-type overflow-hidden whitespace-nowrap pr-1">
                    Typewriting.ai
                  </span>
                  <span className="animate-cursor border-r-4 border-blue-600">
                    &nbsp;
                  </span>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
                Our AI-powered assistant helps you create polished, engaging content
                for any purpose in seconds. Perfect for bloggers, professionals, and content creators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/signup"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  Get Started Free
                </Link>
                <Link
                  href="/demo"
                  className="border border-gray-300 hover:bg-gray-100 font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  See Demo
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <div className="bg-gray-100 w-full h-[350px] flex items-center justify-center">
                  <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-md mx-auto">
                    <h3 className="text-lg font-semibold mb-4">Try it now:</h3>
                    <div className="mb-4 p-3 bg-gray-50 rounded border border-gray-200 text-gray-600">
                      Write a professional email to schedule a meeting with a client...
                    </div>
                    <div className="p-3 bg-blue-50 rounded border border-blue-200 text-gray-800">
                      <p className="mb-2"><span className="font-medium">Subject:</span> Meeting Request - Project Discussion</p>
                      <p className="mb-2">Dear [Client Name],</p>
                      <p className="mb-2">I hope this email finds you well. I'm reaching out to schedule a meeting to discuss our upcoming project...</p>
                      <p className="text-blue-600 text-sm">Continue generating →</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI writing assistant comes with everything you need to create better content faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">
                Generate high-quality content in seconds, not hours. Save time and boost your productivity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Multiple Formats</h3>
              <p className="text-gray-600">
                Create content for emails, blogs, social media, and more with format-specific optimization.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Suggestions</h3>
              <p className="text-gray-600">
                Get intelligent recommendations to enhance your content with just one click.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Users Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-medium">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Content Marketing Manager</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Typewriting.ai has transformed our content creation process. We've increased our output by 3x while maintaining high quality."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-medium">Michael Torres</h4>
                  <p className="text-sm text-gray-600">Freelance Writer</p>
                </div>
              </div>
              <p className="text-gray-600">
                "As a freelancer, time is money. This tool helps me draft articles in minutes instead of hours, allowing me to take on more clients."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-medium">Lisa Wang</h4>
                  <p className="text-sm text-gray-600">Small Business Owner</p>
                </div>
              </div>
              <p className="text-gray-600">
                "I was skeptical about AI writing, but Typewriting.ai changed my mind. It's intuitive and produces content that sounds like me."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Writing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of content creators who save time and improve their writing every day.
          </p>
          <Link
            href="/signup"
            className="bg-white text-blue-600 hover:bg-gray-100 font-medium px-8 py-3 rounded-lg transition-colors inline-block"
          >
            Get Started Free
          </Link>
          <p className="mt-4 text-blue-200">No credit card required. 14-day free trial.</p>
        </div>
      </section>
    </>
  );
}
