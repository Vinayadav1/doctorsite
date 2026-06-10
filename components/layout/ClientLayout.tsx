'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import Navigation from './Navigation';
import Footer from './Footer';
import ConsultationModal from '../modals/ConsultationModal';

const sheetsEndpoint = 'https://script.google.com/macros/s/AKfycbwJ-GIUCcn2wXBQ8KJKaIhUgbSdf0zqWqPyO_eY0u4iskfBAZD0uezqHSGl1YRfxc8_HA/exec';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = React.useCallback(() => setIsModalOpen(true), []);
  const closeModal = React.useCallback(() => setIsModalOpen(false), []);

  React.useEffect(() => {
    const handleModalClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const trigger = target?.closest<HTMLElement>('[data-consultation-modal]');

      if (!trigger) {
        return;
      }

      event.preventDefault();
      openModal();
    };

    document.addEventListener('click', handleModalClick);

    return () => {
      document.removeEventListener('click', handleModalClick);
    };
  }, [openModal]);

  React.useEffect(() => {
    const handleLeadSubmit = (event: Event) => {
      const form = event.target instanceof HTMLFormElement ? event.target : null;

      if (!form?.matches('[data-lead-form]')) {
        return;
      }

      event.preventDefault();

      const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
      const originalLabel = submitButton?.textContent || '';

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
      }

      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());

      void fetch(sheetsEndpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({
          type: form.dataset.formType || 'lead',
          ...payload,
        }),
      })
        .then(() => {
          form.reset();
          window.alert('Thank you. We will get back to you shortly.');
        })
        .catch(() => {
          window.alert('Something went wrong. Please call or email us directly.');
        })
        .finally(() => {
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = originalLabel;
          }
        });
    };

    document.addEventListener('submit', handleLeadSubmit);

    return () => {
      document.removeEventListener('submit', handleLeadSubmit);
    };
  }, []);

  React.useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('main > div > section:not(:first-child), main > section:not(:first-child)')
    );

    if (!sections.length) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealStyles = ['rise', 'soft-rise', 'scale-up', 'fade-up'];
    const revealTargets = sections.flatMap((section) => {
      const directContent = Array.from(
        section.querySelectorAll<HTMLElement>(':scope > div, :scope > article > div')
      );

      return directContent.length ? directContent : [];
    });
    const animationFrames = new Set<number>();
    const transitionCleanups = new Map<HTMLElement, () => void>();

    revealTargets.forEach((target, index) => {
      target.dataset.scrollReveal = 'true';
      target.dataset.scrollRevealStyle = revealStyles[index % revealStyles.length];
      target.style.setProperty('--scroll-reveal-delay', `${Math.min(index % 4, 3) * 80}ms`);

      if (prefersReducedMotion) {
        target.dataset.scrollRevealVisible = 'true';
        target.dataset.scrollRevealSettled = 'true';
        return;
      }

      const handleTransitionEnd = (event: TransitionEvent) => {
        if (
          event.target !== target ||
          event.propertyName !== 'transform' ||
          target.dataset.scrollRevealVisible !== 'true'
        ) {
          return;
        }

        target.dataset.scrollRevealSettled = 'true';
        target.removeEventListener('transitionend', handleTransitionEnd);
        transitionCleanups.delete(target);
      };

      target.addEventListener('transitionend', handleTransitionEnd);
      transitionCleanups.set(target, () => {
        target.removeEventListener('transitionend', handleTransitionEnd);
      });
    });

    if (prefersReducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleTargets = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target as HTMLElement);

        if (!visibleTargets.length) {
          return;
        }

        const frame = window.requestAnimationFrame(() => {
          visibleTargets.forEach((target) => {
            delete target.dataset.scrollRevealSettled;
            target.dataset.scrollRevealVisible = 'true';
            observer.unobserve(target);
          });
          animationFrames.delete(frame);
        });
        animationFrames.add(frame);
      },
      {
        rootMargin: '0px 0px 18% 0px',
        threshold: 0.08,
      }
    );

    revealTargets.forEach((target) => observer.observe(target));

    return () => {
      animationFrames.forEach((frame) => window.cancelAnimationFrame(frame));
      transitionCleanups.forEach((cleanup) => cleanup());
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
