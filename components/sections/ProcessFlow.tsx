'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Image from 'next/image';

const ProcessFlow: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      step: 1,
      title: 'Free Consultation',
      description: '30-minute call to understand your practice goals and requirements',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop',
      duration: 'Day 1',
    },
    {
      step: 2,
      title: 'Design & Content',
      description: 'We create your custom design and gather all necessary content',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
      duration: 'Week 1',
    },
    {
      step: 3,
      title: 'Development',
      description: 'Building your website with modern technology and best practices',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
      duration: 'Week 2',
    },
    {
      step: 4,
      title: 'Review & Launch',
      description: 'Final review, testing, and your website goes live',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop',
      duration: 'Week 3',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A simple, proven process to get your website live in just 2-3 weeks
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="mb-12 last:mb-0"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl group">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Duration badge */}
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                      {step.duration}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 relative">
                  {/* Step number */}
                  <div className="absolute -left-4 top-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  
                  <div className={`${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} pl-12`}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-lg">{step.description}</p>
                  </div>

                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute left-7 top-20 w-0.5 h-32 bg-blue-200" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 px-6 py-3 rounded-full">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-blue-600 font-semibold">Average launch time: 2-3 weeks</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

ProcessFlow.displayName = 'ProcessFlow';

export default ProcessFlow;

