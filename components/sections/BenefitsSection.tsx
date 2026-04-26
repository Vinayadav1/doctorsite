'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Image from 'next/image';

const BenefitsSection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const benefits = [
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      title: 'Get More Patients from Google',
      description: 'Rank higher in local search results and attract patients actively looking for medical services in your area.',
      stats: '+150% Patient Inquiries',
    },
    {
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop',
      title: 'Build Trust with Professional Presence',
      description: 'Establish credibility with a modern, professional website that showcases your expertise and patient testimonials.',
      stats: '95% Trust Rate',
    },
    {
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop',
      title: 'Online Appointment Booking',
      description: 'Let patients book appointments 24/7 with an integrated booking system that syncs with your calendar.',
      stats: '24/7 Availability',
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
            Why Doctors Choose DoctorSite
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to grow your practice and attract more patients online
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Stats badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
                    <div className="text-sm font-bold text-blue-600">{benefit.stats}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

BenefitsSection.displayName = 'BenefitsSection';

export default BenefitsSection;
