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

  const onDemoClick = () => {
    router.push('/previews/dr-rajesh');
  };

  const trustItems = [
    { label: 'Starting ₹4,999', color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Audit-led Strategy', color: 'text-teal-600', bg: 'bg-teal-50' },
    { label: 'Google Ready', color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'WhatsApp Integrated', color: 'text-green-600', bg: 'bg-green-50' },
  ];

  const stats = [
    { value: 'Trust', label: 'Patient-first proof', bg: 'bg-blue-50', color: 'text-blue-600' },
    { value: 'Search', label: 'Google-ready pages', bg: 'bg-green-50', color: 'text-green-600' },
    { value: 'Mobile', label: 'Booking-first UX', bg: 'bg-purple-50', color: 'text-purple-600' },
    { value: 'WhatsApp', label: 'Inquiry flow', bg: 'bg-orange-50', color: 'text-orange-500' },
    { value: 'Audit', label: 'Strategy before build', bg: 'bg-pink-50', color: 'text-pink-500' },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F3F8FF] pt-24 pb-8 lg:pt-[96px] lg:pb-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-cyan-100/70 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex w-full flex-col gap-6 px-4 sm:px-6 lg:max-w-[850px] lg:px-0 xl:max-w-7xl xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[52%_48%] gap-6 lg:gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-3.5 text-center lg:text-left"
            style={{ opacity: mounted ? undefined : 1 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 shadow-md ring-1 ring-blue-100">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m0-4a4 4 0 118 0 4 4 0 01-8 0z" />
                </svg>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-gray-800">Trusted by 500+ Doctors & Clinics</span>
              <span className="text-xs sm:text-sm font-bold text-yellow-400">★★★★★</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-[36px] xl:text-[48px] font-extrabold tracking-tight leading-[1.08] text-gray-950"
              style={{ opacity: mounted ? undefined : 1 }}
            >
              <span className="block">Get More Patients</span>
              <span className="block">Online</span>
              <span className="block text-blue-600 lg:whitespace-nowrap">Built For Patient Appointments</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-[600px] mx-auto lg:mx-0 text-[13px] xl:text-sm leading-5 text-gray-600"
              style={{ opacity: mounted ? undefined : 1 }}
            >
              We help doctors, dentists, surgeons, and clinics attract more patients through high-converting websites, Google visibility, and online appointment systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2"
              style={{ opacity: mounted ? undefined : 1 }}
            >
              <button 
                onClick={onConsultationClick}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-2xl"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Get Free Website Audit
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button 
                onClick={onDemoClick}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-blue-600 shadow-lg ring-1 ring-blue-100 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                See Live Demo
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </motion.div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex justify-end overflow-visible"
            style={{ opacity: mounted ? undefined : 1 }}
          >
            <div className="relative h-[300px] w-full max-w-[430px] overflow-hidden rounded-[1.5rem] bg-blue-50 shadow-2xl ring-1 ring-blue-100 xl:h-[360px] xl:max-w-[560px]">
              <Image
                src="/images/doctors-team.jpg.png"
                alt="Professional medical team of doctors"
                width={760}
                height={540}
                className="absolute inset-0 h-full w-full object-contain object-bottom"
                priority
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-30 mt-3 flex flex-wrap justify-center gap-3 lg:mt-0 lg:flex-nowrap lg:justify-between"
          style={{ opacity: mounted ? undefined : 1 }}
        >
          {trustItems.map((item) => (
            <div key={item.label} className="flex min-w-max items-center gap-2.5 rounded-xl bg-white px-4 py-2.5 text-left shadow-md ring-1 ring-gray-100">
              <span className={`inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-lg ${item.bg} ${item.color}`}>
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="whitespace-nowrap text-xs font-semibold leading-tight text-gray-700">{item.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-3 lg:mt-0"
          style={{ opacity: mounted ? undefined : 1 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 rounded-2xl bg-white shadow-xl ring-1 ring-gray-100">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`flex min-h-[68px] items-center gap-3 px-5 py-2.5 ${index < stats.length - 1 ? 'lg:border-r lg:border-gray-100' : ''}`}>
                <div className={`inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl ${stat.bg} ${stat.color}`}>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <div className="whitespace-nowrap text-lg font-extrabold leading-tight text-gray-950 xl:text-xl">{stat.value}</div>
                  <div className="text-xs leading-[1.45] text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

HeroSection.displayName = 'HeroSection';

export default HeroSection;
