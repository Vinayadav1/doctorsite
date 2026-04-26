'use client';

import * as React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import TrustSection from '@/components/sections/TrustSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import ServicesPreview from '@/components/sections/ServicesPreview';
import WebsiteMockup from '@/components/sections/WebsiteMockup';
import ProcessFlow from '@/components/sections/ProcessFlow';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import ConsultationModal from '@/components/modals/ConsultationModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <main>
        <HeroSection onConsultationClick={openModal} />
        <TrustSection />
        <BenefitsSection />
        <ServicesPreview />
        <WebsiteMockup />
        <ProcessFlow />
        <TestimonialsSection />
        <CTASection onConsultationClick={openModal} />
      </main>
      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
