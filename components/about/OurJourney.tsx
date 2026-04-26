'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const OurJourney: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const milestones = [
    {
      year: '2019',
      title: 'Founded',
      description: 'Started with a vision to help doctors establish online presence',
    },
    {
      year: '2020',
      title: '100+ Doctors',
      description: 'Reached our first major milestone of serving 100 medical professionals',
    },
    {
      year: '2021',
      title: 'Platform Expansion',
      description: 'Launched advanced features including appointment booking and SEO optimization',
    },
    {
      year: '2022',
      title: '500+ Success Stories',
      description: 'Helped over 500 doctors grow their practice with digital presence',
    },
    {
      year: '2023',
      title: 'Industry Leader',
      description: 'Recognized as the leading website solution provider for medical professionals',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From a small startup to a trusted partner for hundreds of doctors
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 -translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-blue-600 font-bold text-xl mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full ring-4 ring-blue-100" />
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
