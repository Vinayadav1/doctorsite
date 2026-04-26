import * as React from 'react';
import HowItWorksHero from '@/components/how-it-works/HowItWorksHero';
import DetailedProcess from '@/components/how-it-works/DetailedProcess';
import ProcessTimeline from '@/components/how-it-works/ProcessTimeline';

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      <HowItWorksHero />
      <DetailedProcess />
      <ProcessTimeline />
    </main>
  );
}
