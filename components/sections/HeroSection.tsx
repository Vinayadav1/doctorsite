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

  const statsCards = (
    <>
      <div className="flex items-center gap-3 sm:gap-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-5 shadow-md">
        <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#D1FAE5' }}>
          <svg className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#10B981' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <div>
          <div className="font-bold text-2xl sm:text-3xl" style={{ color: '#1F2937' }}>+150%</div>
          <div className="text-xs sm:text-sm" style={{ color: '#6B7280' }}>Increased Patient Inquiries</div>
        </div>
      </div>
      <div className="flex items-center gap-3 sm:gap-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-5 shadow-md">
        <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#DBEAFE' }}>
          <svg className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#5B8DEF' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <div className="text-xs sm:text-sm" style={{ color: '#6B7280' }}>Launch in</div>
          <div className="font-bold text-2xl sm:text-3xl" style={{ color: '#5B8DEF' }}>2-3 Weeks</div>
        </div>
      </div>
      <div className="flex items-center gap-3 sm:gap-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-5 shadow-md">
        <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#DBEAFE' }}>
          <svg className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#5B8DEF' }} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <div>
          <div className="font-bold text-base sm:text-lg" style={{ color: '#1F2937' }}>HIPAA-Compliant</div>
          <div className="text-xs sm:text-sm" style={{ color: '#6B7280' }}>& Secure</div>
        </div>
      </div>
    </>
  );

  return (
    <section 
      className="relative overflow-hidden"
      style={{ 
        backgroundImage: 'url(/images/hero-background.jpg.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundColor: '#E8F0F7',
        marginTop: '64px'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] gap-6 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 relative z-10 text-center lg:text-left"
            style={{ opacity: mounted ? undefined : 1 }}
          >
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl"
              style={{ color: '#1F2937', lineHeight: '1.1', opacity: mounted ? undefined : 1 }}
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
              className="leading-relaxed text-sm sm:text-base mx-auto lg:mx-0"
              style={{ color: '#4B5563', maxWidth: '85%', opacity: mounted ? undefined : 1 }}
            >
              Empower your practice with a custom website that attracts patients and builds trust online.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 justify-center lg:justify-start"
              style={{ opacity: mounted ? undefined : 1 }}
            >
              <button 
                onClick={onConsultationClick}
                className="text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-medium transition-all hover:shadow-lg hover:scale-105 text-sm sm:text-base"
                style={{ backgroundColor: '#5B8DEF' }}
              >
                Get a Free Consultation
              </button>
              <button 
                onClick={onPortfolioClick}
                className="bg-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-medium transition-all hover:shadow-lg hover:scale-105 text-sm sm:text-base"
                style={{ border: '2px solid #5B8DEF', color: '#5B8DEF' }}
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

        {/* Bottom Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-20 mt-6 lg:mt-0"
          style={{ marginTop: undefined }}
        >
          <div className="hidden lg:block" style={{ marginTop: '-65px' }}>
            <div className="grid grid-cols-3 gap-6">
              {statsCards}
            </div>
          </div>
          {/* Mobile stats - no overlap */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:hidden mt-4">
            {statsCards}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

HeroSection.displayName = 'HeroSection';

export default HeroSection;
