'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Image from 'next/image';

const DetailedProcess: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      step: 1,
      title: 'Free Consultation Call',
      description: 'We start with a 30-minute consultation to understand your practice, goals, and specific requirements. This helps us create a tailored solution for you.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop',
      duration: 'Day 1',
      details: [
        'Discuss your practice and specialization',
        'Understand your target patients',
        'Define website goals and features',
        'Answer all your questions',
      ],
    },
    {
      step: 2,
      title: 'Design & Content Gathering',
      description: 'Our design team creates mockups based on your preferences. We also help you gather all necessary content including photos, credentials, and service descriptions.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      duration: 'Week 1',
      details: [
        'Custom design mockups',
        'Content collection and writing',
        'Professional photography guidance',
        'Brand identity development',
      ],
    },
    {
      step: 3,
      title: 'Development & Integration',
      description: 'We build your website using modern technology, integrate appointment booking, and ensure everything works perfectly across all devices.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      duration: 'Week 2',
      details: [
        'Responsive website development',
        'Appointment system integration',
        'SEO optimization',
        'Performance optimization',
      ],
    },
    {
      step: 4,
      title: 'Review, Testing & Launch',
      description: 'You review the website, we make any necessary adjustments, conduct thorough testing, and launch your site to the world.',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop',
      duration: 'Week 3',
      details: [
        'Client review and feedback',
        'Final adjustments',
        'Quality assurance testing',
        'Website launch and training',
      ],
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl group">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Duration badge */}
                    <div className="absolute top-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                      {step.duration}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                      {step.step}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6">{step.description}</p>

                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedProcess;
