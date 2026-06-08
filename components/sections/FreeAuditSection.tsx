'use client';

import * as React from 'react';
import { motion, useInView } from 'framer-motion';

interface FreeAuditSectionProps {
  onConsultationClick: () => void;
}

const FreeAuditSection: React.FC<FreeAuditSectionProps> = ({ onConsultationClick }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const auditItems = [
    "Why patients aren't finding you",
    'Website issues hurting conversions',
    'Opportunities to rank higher on Google',
    'Action plan to get more appointments',
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <span className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
                Free Website Audit
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Find Out Why More Patients Are Not Booking Online
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We'll review your current online presence and show:
              </p>
              <ul className="space-y-4 mb-8">
                {auditItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <svg className="w-6 h-6 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={onConsultationClick}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-xl hover:scale-105"
              >
                Get My Free Audit
              </button>
            </div>

            <div className="bg-blue-600 p-8 md:p-12 flex items-center">
              <div className="bg-white/10 border border-white/20 rounded-2xl p-6 w-full text-white">
                <div className="text-sm uppercase tracking-wide text-white/70 mb-3">Audit Snapshot</div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Google visibility</span>
                      <span>Needs work</span>
                    </div>
                    <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-2/5 bg-yellow-300 rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Website conversions</span>
                      <span>Low</span>
                    </div>
                    <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-1/3 bg-red-300 rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Booking readiness</span>
                      <span>High opportunity</span>
                    </div>
                    <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-teal-300 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

FreeAuditSection.displayName = 'FreeAuditSection';

export default FreeAuditSection;
