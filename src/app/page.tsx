import React from 'react';
import Hero from '@/app/home/Hero';
import Features from '@/app/home/Features';
import Testimonials from '@/app/home/Testimonials';
// import Pricing from '@/app/home/Pricing';
import FAQ from '@/app/home/FAQ';
import CTA from '@/app/home/CTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <Testimonials />
       {/*keeping this section hidden for now. will use this portion later. */}
       {/*<Pricing /> */}
      <FAQ />
      <CTA />
    </div>
  );
}
