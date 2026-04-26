'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import { testimonials } from '@/lib/constants';

const TestimonialsGrid: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const extendedTestimonials = [
    ...testimonials,
    {
      id: 'testimonial-5',
      quote: 'The online appointment system has been a game-changer. My patients love the convenience and I save hours on phone calls.',
      author: 'Dr. Vikram Singh',
      specialty: 'Neurosurgeon',
      location: 'Chennai',
      rating: 5,
    },
    {
      id: 'testimonial-6',
      quote: 'Professional, responsive, and delivered exactly what they promised. My website has helped me attract patients from across the city.',
      author: 'Dr. Meera Kapoor',
      specialty: 'Pediatrician',
      location: 'Pune',
      rating: 5,
    },
    {
      id: 'testimonial-7',
      quote: 'I was hesitant about investing in a website, but it paid for itself within weeks. The ROI has been incredible.',
      author: 'Dr. Arjun Mehta',
      specialty: 'Dentist',
      location: 'Ahmedabad',
      rating: 5,
    },
    {
      id: 'testimonial-8',
      quote: 'The team understood my vision perfectly. They created a website that truly represents my practice and values.',
      author: 'Dr. Kavita Desai',
      specialty: 'Cardiologist',
      location: 'Kolkata',
      rating: 5,
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {extendedTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all h-full">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-blue-100">
                    <Image
                      src={`https://i.pravatar.cc/150?img=${index + 1}`}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-blue-600 text-sm">
                      {testimonial.specialty}
                    </div>
                    <div className="text-gray-600 text-sm flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {testimonial.location}
                    </div>
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

export default TestimonialsGrid;
