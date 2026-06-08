'use client';

import * as React from 'react';
import { motion, useInView } from 'framer-motion';

const ProblemSection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const searches = [
    'Best Dentist Near Me',
    'Gynecologist Near Me',
    'Plastic Surgeon Near Me',
    'Skin Specialist Near Me',
  ];

  const stats = [
    { value: '73%', label: 'of patients search online before booking' },
    { value: '88%', label: 'trust clinics with professional websites' },
    { value: '3x', label: 'more appointments from online presence' },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold mb-4">
              Patient search behavior has changed
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Is Your Clinic Losing Patients Online?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Every day potential patients search:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {searches.map((search) => (
                <div key={search} className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-semibold text-gray-800">
                  {search}
                </div>
              ))}
            </div>
            <p className="text-xl font-semibold text-gray-900">
              If they can't find your clinic online, they choose your competitors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 gap-5"
          >
            {stats.map((stat) => (
              <div key={stat.value} className="bg-blue-50 border border-blue-100 rounded-2xl p-6 shadow-sm">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

ProblemSection.displayName = 'ProblemSection';

export default ProblemSection;
