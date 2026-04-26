import * as React from 'react';
import PricingHero from '@/components/pricing/PricingHero';
import PricingCards from '@/components/pricing/PricingCards';
import PricingFAQ from '@/components/pricing/PricingFAQ';

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <PricingHero />
      <PricingCards />
      <PricingFAQ />
    </main>
  );
}
