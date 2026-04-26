'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface HeroSectionProps {
  onConsultationClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onConsultationClick }) => {
  const [mounted, setMounted] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const onPortfolioClick = () => {
    router.push('/portfolio');
  };

  return (
    <section 
      className="relative overflow-hidden"
      style={{ 
        backgroundImage: 'url(/images/hero-background.jpg.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundColor: '#E8F0F7',
        marginTop: '80px'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6 relative z-10"
            style={{ opacity: mounted ? undefined : 1 }}
          >
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-bold leading-tight"
              style={{ color: '#1F2937', fontSize: '3.75rem', lineHeight: '1.1', opacity: mounted ? undefined : 1 }}
            >
              Professional<br />
              <span style={{ color: '#5B8DEF' }}>Websites</span> for<br />
              <span style={{ color: '#5B8DEF' }}>Doctors</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="leading-relaxed"
              style={{ color: '#4B5563', fontSize: '1.05rem', maxWidth: '85%', opacity: mounted ? undefined : 1 }}
            >
              Empower your practice with a custom website that attracts patients and builds trust online.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-3"
              style={{ opacity: mounted ? undefined : 1 }}
            >
              <button 
                onClick={onConsultationClick}
                className="text-white px-8 py-3.5 rounded-lg font-medium transition-all hover:shadow-lg hover:scale-105"
                style={{ backgroundColor: '#5B8DEF', fontSize: '1rem' }}
              >
                Get a Free Consultation
              </button>
              <button 
                onClick={onPortfolioClick}
                className="bg-white px-8 py-3.5 rounded-lg font-medium transition-all hover:shadow-lg hover:scale-105"
                style={{ border: '2px solid #5B8DEF', color: '#5B8DEF', fontSize: '1rem' }}
              >
                View Portfolio
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image - Doctors */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex justify-start items-center z-10"
            style={{ marginTop: '-10px', marginLeft: '-15px', opacity: mounted ? undefined : 1 }}
          >
            <Image
              src="/images/doctors-team.jpg.png"
              alt="Professional medical team of three doctors"
              width={750}
              height={525}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>

        {/* Bottom Stats Section - Overlapping Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-20"
          style={{ marginTop: '-65px', opacity: mounted ? undefined : 1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stat 1 */}
          <div className="flex items-center gap-4 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-md">
            <div className="flex-shrink-0">
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center" 
                style={{ backgroundColor: '#D1FAE5' }}
              >
                <svg className="w-7 h-7" style={{ color: '#10B981' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <div>
              <div className="font-bold" style={{ color: '#1F2937', fontSize: '1.75rem' }}>+150%</div>
              <div style={{ color: '#6B7280', fontSize: '0.875rem' }}>Increased Patient Inquiries</div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-4 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-md">
            <div className="flex-shrink-0">
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center" 
                style={{ backgroundColor: '#DBEAFE' }}
              >
                <svg className="w-7 h-7" style={{ color: '#5B8DEF' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div>
              <div style={{ color: '#6B7280', fontSize: '0.8rem' }}>Launch in</div>
              <div className="font-bold" style={{ color: '#5B8DEF', fontSize: '1.75rem' }}>2-3 Weeks</div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-4 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-md">
            <div className="flex-shrink-0">
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center" 
                style={{ backgroundColor: '#DBEAFE' }}
              >
                <svg className="w-7 h-7" style={{ color: '#5B8DEF' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div>
              <div className="font-bold" style={{ color: '#1F2937', fontSize: '1.1rem' }}>HIPAA-Compliant</div>
              <div style={{ color: '#6B7280', fontSize: '0.875rem' }}>& Secure</div>
            </div>
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

HeroSection.displayName = 'HeroSection';

export default HeroSection;
