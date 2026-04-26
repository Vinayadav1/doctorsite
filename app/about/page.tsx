import * as React from 'react';
import AboutHero from '@/components/about/AboutHero';
import MissionVision from '@/components/about/MissionVision';
import OurJourney from '@/components/about/OurJourney';
import TeamSection from '@/components/about/TeamSection';
import WhyChooseUs from '@/components/about/WhyChooseUs';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <MissionVision />
      <OurJourney />
      <TeamSection />
      <WhyChooseUs />
    </main>
  );
}
