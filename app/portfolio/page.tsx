import * as React from 'react';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <PortfolioHero />
      <PortfolioGrid />
    </main>
  );
}
