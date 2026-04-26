'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const WebsiteMockup: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See Your Website Come to Life
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional, modern websites designed specifically for doctors
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Laptop Mockup */}
          <div className="relative">
            {/* Laptop Frame */}
            <div className="bg-gray-800 rounded-t-2xl p-3 shadow-2xl">
              {/* Screen */}
              <div className="bg-white rounded-lg overflow-hidden shadow-inner">
                {/* Browser Bar */}
                <div className="bg-gray-100 px-4 py-2 flex items-center gap-2 border-b">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500">
                    www.dr-yourname.com
                  </div>
                </div>
                
                {/* Website Screenshot Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-teal-50 p-8">
                  <div className="h-full flex flex-col">
                    {/* Mock Navigation */}
                    <div className="flex justify-between items-center mb-8">
                      <div className="text-xl font-bold text-primary-main">Dr. Name</div>
                      <div className="flex gap-4 text-sm text-gray-600">
                        <div>Home</div>
                        <div>About</div>
                        <div>Services</div>
                        <div>Contact</div>
                      </div>
                    </div>
                    
                    {/* Mock Hero */}
                    <div className="flex-1 flex items-center">
                      <div className="w-1/2">
                        <div className="h-8 bg-gray-300 rounded mb-4 w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
                        <div className="h-4 bg-gray-200 rounded mb-6 w-5/6"></div>
                        <div className="h-10 bg-primary-main rounded w-40"></div>
                      </div>
                      <div className="w-1/2 flex justify-center">
                        <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center text-6xl">
                          👨‍⚕️
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Laptop Base */}
            <div className="bg-gray-700 h-4 rounded-b-2xl shadow-xl"></div>
            <div className="bg-gray-600 h-1 w-3/4 mx-auto rounded-b-lg"></div>
          </div>

          {/* Features Below Mockup */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-primary-main" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Mobile Responsive</h3>
              <p className="text-sm text-gray-600">Perfect on all devices</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-secondary-main" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Fast Loading</h3>
              <p className="text-sm text-gray-600">Optimized performance</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">SEO Optimized</h3>
              <p className="text-sm text-gray-600">Rank higher on Google</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

WebsiteMockup.displayName = 'WebsiteMockup';

export default WebsiteMockup;
