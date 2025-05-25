import React from 'react';
import Hero from '@/app/home/hero';
import Features from '@/app/home/features';
// import Testimonials from '@/app/demo/Testimonials';
// import Pricing from '@/app/demo/Pricing';
import CTA from '@/app/home/cta';
import FAQ from '@/app/home/faq';
// import HighlightFeature from "@/app/demo/HighlightFeature";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      {/*<HighlightFeature />*/}
      <Features />
      {/*<Testimonials />*/}
      {/*keeping this section hidden for now. will use this portion later. */}
      {/*<Pricing /> */}
      <CTA />
      <FAQ />
    </div>
  );
}
