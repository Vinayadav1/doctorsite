import * as React from 'react';
import ServicesHero from '@/components/services/ServicesHero';
import AllServices from '@/components/services/AllServices';
import ServicesCTA from '@/components/services/ServicesCTA';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServicesHero />
      <AllServices />
      <ServicesCTA />
    </main>
  );
}
