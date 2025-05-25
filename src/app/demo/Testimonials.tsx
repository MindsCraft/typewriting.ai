import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Typewriting.ai has completely transformed how I write. I'm producing better content in half the time!",
      author: "Sarah Johnson",
      role: "Content Marketing Manager",
      company: "Creative Solutions",
      avatar: "/avatars/sarah.jpg"
    },
    {
      id: 2,
      quote: "The AI suggestions are incredibly accurate and have helped me overcome writer's block countless times.",
      author: "Michael Chen",
      role: "Technical Writer",
      company: "TechGlobe Inc.",
      avatar: "/avatars/michael.jpg"
    },
    {
      id: 3,
      quote: "I was skeptical about AI writing tools, but Typewriting.ai feels like having a professional editor by my side 24/7.",
      author: "Jessica Williams",
      role: "Freelance Copywriter",
      company: "Self-employed",
      avatar: "/avatars/jessica.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-[rgb(var(--tpr-text-gray))] max-w-2xl mx-auto">
            Join thousands of satisfied writers who have transformed their writing process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 hidden">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-sm border border-[rgb(var(--tpr-gray))] flex flex-col"
            >
              <div className="mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400 inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="flex-grow">
                <p className="text-[rgb(var(--tpr-text-default))]">"{testimonial.quote}"</p>
              </blockquote>

              <div className="mt-6 flex items-center">
                <div className="h-10 w-10 rounded-full bg-[rgb(var(--tpr-gray))] flex items-center justify-center">
                  <span className="text-sm font-medium">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">{testimonial.author}</p>
                  <p className="text-xs text-[rgb(var(--tpr-text-gray))]">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[rgb(var(--tpr-gray-light))] p-8 md:p-12 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="h-12 w-12 mx-auto mb-6 text-[rgb(var(--tpr-text-blue))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <h3 className="text-2xl font-bold mb-4">Join our growing community</h3>
            <p className="text-lg text-[rgb(var(--tpr-text-gray))] mb-8">
              More than 10,000 writers trust Typewriting.ai for their daily writing needs.
              Experience the difference firsthand with our free trial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#signup" className="tpr-btn tpr-btn-primary">
                Start Free Trial
              </a>
              <a href="#testimonials" className="tpr-btn tpr-btn-secondary">
                Read More Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
