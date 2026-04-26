'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

const ContactHero: React.FC = () => {
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-semibold text-blue-600">Get in Touch</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Build Your Website
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600">
            Ready to take your practice online? Get in touch with us for a free consultation
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
