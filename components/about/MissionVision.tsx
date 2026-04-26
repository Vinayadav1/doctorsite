'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const MissionVision: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const cards = [
    {
      title: 'Our Mission',
      description: 'To empower every doctor with a professional online presence that attracts patients, builds trust, and grows their practice.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'blue',
    },
    {
      title: 'Our Vision',
      description: 'To become the most trusted partner for doctors seeking to establish and enhance their digital presence in the healthcare industry.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      color: 'teal',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mission & Vision
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Driven by purpose, guided by values
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 ${card.color === 'blue' ? 'bg-blue-100' : 'bg-teal-100'} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={card.color === 'blue' ? 'text-blue-600' : 'text-teal-600'}>
                    {card.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
