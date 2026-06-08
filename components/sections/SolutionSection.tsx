'use client';

import * as React from 'react';
import { motion, useInView } from 'framer-motion';

const SolutionSection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const outcomes = [
    'Rank better on Google',
    'Build trust instantly',
    'Get WhatsApp inquiries',
    'Accept online appointments',
    'Showcase before-after results',
    'Collect patient reviews',
  ];

  return (
    <section ref={ref} className="py-20 bg-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            We Turn Online Searches Into Patient Appointments
          </h2>
          <p className="text-lg text-white/90">
            Instead of just building websites, we help doctors create a complete digital path from Google search to booked appointment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              className="bg-white rounded-2xl p-5 shadow-lg flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-semibold text-gray-900">{outcome}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

SolutionSection.displayName = 'SolutionSection';

export default SolutionSection;
