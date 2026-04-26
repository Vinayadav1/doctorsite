'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Image from 'next/image';

const TestimonialsVideo: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const videoTestimonials = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop',
      doctor: 'Dr. Rajesh Kumar',
      specialty: 'Orthopedic Surgeon',
      duration: '2:45',
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop',
      doctor: 'Dr. Priya Sharma',
      specialty: 'Dermatologist',
      duration: '3:12',
    },
    {
      id: 3,
      thumbnail: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=400&fit=crop',
      doctor: 'Dr. Amit Patel',
      specialty: 'Cardiologist',
      duration: '2:58',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Video Testimonials
          </h2>
          <p className="text-lg text-gray-600">
            Hear directly from doctors about their experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videoTestimonials.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                {/* Video Thumbnail */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.doctor}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <svg className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-1">
                    {video.doctor}
                  </h3>
                  <p className="text-blue-600 text-sm">
                    {video.specialty}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md">
            Get Your Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsVideo;
