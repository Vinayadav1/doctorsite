'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import Navigation from './Navigation';
import Footer from './Footer';
import ConsultationModal from '../modals/ConsultationModal';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  React.useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('main > div > section:not(:first-child), main > section:not(:first-child)')
    );

    if (!sections.length) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealStyles = ['rise', 'slide-left', 'slide-right', 'scale-up'];

    sections.forEach((section, index) => {
      section.dataset.scrollReveal = 'true';
      section.dataset.scrollRevealStyle = revealStyles[index % revealStyles.length];
      section.style.setProperty('--scroll-reveal-delay', `${Math.min(index % 4, 3) * 80}ms`);

      if (prefersReducedMotion) {
        section.dataset.scrollRevealVisible = 'true';
      }
    });

    if (prefersReducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const section = entry.target as HTMLElement;
          section.dataset.scrollRevealVisible = 'true';
          observer.unobserve(section);
        });
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.14,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <>
      <Navigation onGetStartedClick={openModal} />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default ClientLayout;
