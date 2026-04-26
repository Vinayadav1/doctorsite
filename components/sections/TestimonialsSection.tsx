'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import { testimonials } from '@/lib/constants';

const TestimonialsSection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const doctorImages = [
    'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop',
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
            What Doctors Say About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from medical professionals who transformed their practice with DoctorSite
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 h-full hover:shadow-xl transition-shadow duration-300">
                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Author info with image */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-blue-100">
                    <Image
                      src={doctorImages[index % doctorImages.length]}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.specialty}</div>
                    {testimonial.location && (
                      <div className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {testimonial.location}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

TestimonialsSection.displayName = 'TestimonialsSection';

export default TestimonialsSection;
