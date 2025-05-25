"use client";

import React, { useState } from 'react';

type PlanFeature = {
  name: string;
  free: boolean;
  pro: boolean;
  enterprise: boolean;
};

const PricingPlan: React.FC<{
  name: string;
  description: string;
  price: { monthly: number; annual: number };
  features: string[];
  popular?: boolean;
  enterprise?: boolean;
  buttonText: string;
  buttonClass: string;
  onButtonClick: (e: React.MouseEvent) => void;
}> = ({
  name,
  description,
  price,
  features,
  popular = false,
  enterprise = false,
  buttonText,
  buttonClass,
  onButtonClick
}) => {
  const isYearly = false; // This will be controlled by parent component

  return (
    <div className={`bg-white rounded-2xl shadow-lg flex flex-col h-full transition-all duration-300 ${popular ? 'scale-105 border-2 border-[rgb(var(--tpr-black))] z-10' : enterprise ? 'border border-[rgb(var(--tpr-gray-dark))]' : 'border border-[rgb(var(--tpr-gray))]'}`}>
      {popular && (
        <div className="bg-[rgb(var(--tpr-black))] text-white py-2 px-4 rounded-t-xl text-center font-medium">
          Most Popular
        </div>
      )}
      <div className={`p-8 flex flex-col h-full ${popular ? '' : enterprise ? 'rounded-t-xl' : 'rounded-t-xl'}`}>
        <div className="mb-6">
          <h3 className={`text-2xl font-bold mb-2 ${enterprise ? 'text-[rgb(var(--tpr-text-purple))]' : popular ? 'text-[rgb(var(--tpr-text-green))]' : ''}`}>{name}</h3>
          <p className="text-[rgb(var(--tpr-text-gray))] mb-5">{description}</p>
          <div className="flex items-baseline mb-4">
            {price.monthly === 0 ? (
              <>
                <span className="text-5xl font-extrabold">Free</span>
              </>
            ) : (
              <>
                <span className="text-sm mr-1">$</span>
                <span className="text-5xl font-extrabold">{isYearly ? price.annual : price.monthly}</span>
                <span className="text-lg text-[rgb(var(--tpr-text-gray))] ml-2">/mo</span>
              </>
            )}
          </div>
          {enterprise && (
            <p className="text-sm text-[rgb(var(--tpr-text-gray))] italic mt-2">Custom pricing for teams</p>
          )}
        </div>

        <ul className="space-y-4 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-[rgb(var(--tpr-text-green))] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href="#signup"
          onClick={onButtonClick}
          className={`${buttonClass} py-3 rounded-xl text-center font-medium transition-all duration-200 hover:shadow-md`}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

const ComparisonTable: React.FC<{
  features: PlanFeature[];
}> = ({ features }) => {
  return (
    <div className="mt-20 overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b-2 border-[rgb(var(--tpr-gray))]">
            <th className="py-4 px-6 text-left">Feature</th>
            <th className="py-4 px-6 text-center">Free</th>
            <th className="py-4 px-6 text-center">Pro</th>
            <th className="py-4 px-6 text-center">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index} className="border-b border-[rgb(var(--tpr-gray-light))]">
              <td className="py-4 px-6 font-medium">{feature.name}</td>
              <td className="py-4 px-6 text-center">
                {feature.free ? (
                  <svg className="h-5 w-5 text-[rgb(var(--tpr-text-green))] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5 text-[rgb(var(--tpr-gray-dark))] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </td>
              <td className="py-4 px-6 text-center">
                {feature.pro ? (
                  <svg className="h-5 w-5 text-[rgb(var(--tpr-text-green))] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5 text-[rgb(var(--tpr-gray-dark))] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </td>
              <td className="py-4 px-6 text-center">
                {feature.enterprise ? (
                  <svg className="h-5 w-5 text-[rgb(var(--tpr-text-green))] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5 text-[rgb(var(--tpr-gray-dark))] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const comparisonFeatures: PlanFeature[] = [
    { name: 'Word limit', free: true, pro: true, enterprise: true },
    { name: 'Basic writing tools', free: true, pro: true, enterprise: true },
    { name: 'Standard templates', free: true, pro: true, enterprise: true },
    { name: 'Advanced AI assistance', free: false, pro: true, enterprise: true },
    { name: 'Premium templates', free: false, pro: true, enterprise: true },
    { name: 'Priority support', free: false, pro: true, enterprise: true },
    { name: 'API access', free: false, pro: false, enterprise: true },
    { name: 'Custom integrations', free: false, pro: false, enterprise: true },
    { name: 'Dedicated account manager', free: false, pro: false, enterprise: true },
    { name: 'SSO & advanced security', free: false, pro: false, enterprise: true },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-[rgb(var(--tpr-gray-light))] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 bg-[rgba(var(--tpr-text-green),0.15)] text-[rgb(var(--tpr-text-green))] rounded-full text-sm font-medium inline-block mb-4">
            Pricing Plans
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[rgb(var(--tpr-black))] to-[rgb(var(--tpr-text-purple))] bg-clip-text text-transparent">
            Find the Perfect Plan for Your Writing Needs
          </h2>
          <p className="text-xl text-[rgb(var(--tpr-text-gray))] max-w-3xl mx-auto mb-10">
            Choose a plan that works for you. Upgrade, downgrade, or cancel anytime.
          </p>

          <div className="flex items-center justify-center mb-12">
            <span className={`mr-3 font-medium ${!isYearly ? 'text-[rgb(var(--tpr-black))]' : 'text-[rgb(var(--tpr-text-gray))]'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 ease-in-out ${isYearly ? 'bg-[rgb(var(--tpr-text-green))]' : 'bg-[rgb(var(--tpr-gray-dark))]'}`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${isYearly ? 'translate-x-9' : 'translate-x-1'}`}
              />
            </button>
            <span className={`ml-3 font-medium flex items-center ${isYearly ? 'text-[rgb(var(--tpr-black))]' : 'text-[rgb(var(--tpr-text-gray))]'}`}>
              Yearly
              <span className="ml-2 bg-[rgba(var(--tpr-text-green),0.15)] text-[rgb(var(--tpr-text-green))] text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          <PricingPlan
            name="Free"
            description="Perfect for occasional writing needs"
            price={{ monthly: 0, annual: 0 }}
            features={[
              "Up to 5,000 words per month",
              "Basic writing assistance",
              "Standard templates",
              "Community support"
            ]}
            buttonText="Get Started"
            buttonClass="tpr-btn tpr-btn-secondary"
            onButtonClick={(e) => { e.preventDefault(); scrollToSection('cta'); }}
          />

          <PricingPlan
            name="Pro"
            description="For professional writers and content creators"
            price={{ monthly: 19, annual: 15 }}
            popular={true}
            features={[
              "Unlimited words",
              "Advanced AI assistance",
              "Premium templates",
              "Priority email support",
              "All basic integrations",
              "Analytics dashboard"
            ]}
            buttonText="Get Pro"
            buttonClass="tpr-btn tpr-btn-primary"
            onButtonClick={(e) => { e.preventDefault(); scrollToSection('cta'); }}
          />

          <PricingPlan
            name="Enterprise"
            description="For teams and organizations"
            price={{ monthly: 49, annual: 39 }}
            enterprise={true}
            features={[
              "Everything in Pro",
              "Unlimited team members",
              "API access",
              "Custom integrations",
              "Dedicated account manager",
              "SSO & advanced security"
            ]}
            buttonText="Contact Sales"
            buttonClass="border-2 border-[rgb(var(--tpr-text-purple))] text-[rgb(var(--tpr-text-purple))] hover:bg-[rgba(var(--tpr-text-purple),0.1)]"
            onButtonClick={(e) => { e.preventDefault(); scrollToSection('cta'); }}
          />
        </div>

        <ComparisonTable features={comparisonFeatures} />

        <div className="mt-20 text-center bg-[rgb(var(--tpr-gray-light))] p-10 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Need a custom solution?</h3>
          <p className="text-lg text-[rgb(var(--tpr-text-gray))] mb-6 max-w-2xl mx-auto">
            We offer tailored plans for larger organizations with specific requirements.
            Our team will work with you to create a custom solution.
          </p>
          <a
            href="#signup"
            onClick={(e) => { e.preventDefault(); scrollToSection('cta'); }}
            className="tpr-btn tpr-btn-primary inline-block"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
