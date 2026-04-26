'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const PricingFAQ: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = [
    {
      question: 'What is included in the one-time payment?',
      answer: 'The one-time payment includes complete website design and development, content integration, SEO setup, domain registration for 1 year, SSL certificate, and the specified support period for your chosen plan.',
    },
    {
      question: 'Do I need to pay for hosting separately?',
      answer: 'Yes, hosting is separate and typically costs ₹3,000-5,000 per year depending on your requirements. We can help you choose the best hosting provider for your needs.',
    },
    {
      question: 'Can I upgrade my plan later?',
      answer: 'Absolutely! You can upgrade to a higher plan at any time. We\'ll credit the amount you\'ve already paid and you only pay the difference.',
    },
    {
      question: 'What happens after the support period ends?',
      answer: 'After your included support period ends, you can choose to continue with our maintenance plan starting at ₹2,000/month, or manage the website yourself. We provide full training and documentation.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 100% money-back guarantee if we haven\'t started the development work. Once development begins, we work with you until you\'re completely satisfied with the result.',
    },
    {
      question: 'How long does it take to build the website?',
      answer: 'Most websites are completed within 2-3 weeks from the date of consultation. Complex projects may take longer, and we\'ll provide you with a detailed timeline during consultation.',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our pricing
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingFAQ;
