'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

const HowItWorksHero: React.FC = () => {
  return (
    <section 
      className="relative overflow-hidden bg-gray-50"
      style={{ marginTop: '80px' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-50 rounded-full">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            <span className="text-sm font-semibold text-blue-600">Our Process</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Process
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            From consultation to launch, we guide you through every step of creating your professional website
          </p>

          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Launch in 2-3 Weeks</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksHero;
