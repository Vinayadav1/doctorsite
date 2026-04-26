import * as React from 'react';
import TestimonialsHero from '@/components/testimonials/TestimonialsHero';
import TestimonialsGrid from '@/components/testimonials/TestimonialsGrid';
import TestimonialsVideo from '@/components/testimonials/TestimonialsVideo';

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <TestimonialsHero />
      <TestimonialsGrid />
      <TestimonialsVideo />
    </main>
  );
}
