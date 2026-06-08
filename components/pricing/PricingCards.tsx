'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { pricingPlans } from '@/lib/constants';
import { useRouter } from 'next/navigation';

const PricingCards: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const router = useRouter();

  const handleGetStarted = (planId: string) => {
    router.push(`/checkout?plan=${planId}`);
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className={`relative ${plan.isPopular ? 'md:-mt-4' : ''}`}
            >
              <div className={`bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all h-full flex flex-col ${
                plan.isPopular ? 'border-2 border-blue-600' : 'border border-gray-200'
              }`}>
                {/* Popular badge */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gray-900">
                      ₹{plan.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-gray-600">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => handleGetStarted(plan.id)}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors mb-8 ${
                    plan.isPopular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </button>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    Includes mobile responsive design, medical trust sections, and clear patient contact paths.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 max-w-2xl mx-auto">
            <p className="text-gray-800 font-medium">
              Note: Any paid tools or third-party subscriptions will be charged separately.
            </p>
          </div>
          <p className="text-gray-600 mb-4">
            All plans include a free homepage mockup and WhatsApp booking guidance
          </p>
          <p className="text-sm text-gray-500">
            Need a custom solution? <a href="/contact" className="text-blue-600 font-semibold hover:underline">Contact us</a> for a personalized quote
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingCards;

