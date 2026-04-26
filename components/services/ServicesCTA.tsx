'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const ServicesCTA: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="bg-blue-600 rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Book a free consultation and we'll help you choose the perfect solution for your practice
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-xl">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Pricing
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCTA;
