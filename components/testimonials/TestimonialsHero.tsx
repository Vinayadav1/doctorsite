'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

const TestimonialsHero: React.FC = () => {
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
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold text-blue-600">Success Stories</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Doctors Say
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600">
            Real stories from doctors who transformed their practice with our websites
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Doctors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsHero;
