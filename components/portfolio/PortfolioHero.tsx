'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

const PortfolioHero: React.FC = () => {
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-semibold text-blue-600">Our Work</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Websites We've Built for Doctors
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600">
            Explore our portfolio of professional medical websites that help doctors grow their practice
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioHero;
