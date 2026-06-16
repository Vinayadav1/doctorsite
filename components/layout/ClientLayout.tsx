'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import emailjs from '@emailjs/browser';
import Navigation from './Navigation';
import Footer from './Footer';
import ConsultationModal from '../modals/ConsultationModal';

const EMAILJS_SERVICE_ID = 'service_5wkd6mg';
const EMAILJS_TEMPLATE_ID = 'template_p02q1hg';
const EMAILJS_PUBLIC_KEY = 'ja_G9Ipwlp27pvPxE';
const OWNER_EMAIL = 'vinaysalempur45@gmail.com';
const AUTO_MODAL_SESSION_KEY = 'doctorsite-audit-modal-shown';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const isPreviewRoute = pathname.startsWith('/previews/');
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const markAutoModalSeen = React.useCallback(() => {
    try {
      window.sessionStorage.setItem(AUTO_MODAL_SESSION_KEY, 'true');
    } catch {
      // Ignore storage issues; the modal should still work.
    }
  }, []);

  const hasSeenAutoModal = React.useCallback(() => {
    try {
      return window.sessionStorage.getItem(AUTO_MODAL_SESSION_KEY) === 'true';
    } catch {
      return false;
    }
  }, []);

  const openModal = React.useCallback(() => {
    markAutoModalSeen();
    setIsModalOpen(true);
  }, [markAutoModalSeen]);
  const closeModal = React.useCallback(() => setIsModalOpen(false), []);

  React.useEffect(() => {
    if (isPreviewRoute || hasSeenAutoModal()) {
      return;
    }

    const timer = window.setTimeout(() => {
      if (hasSeenAutoModal()) {
        return;
      }

      markAutoModalSeen();
      setIsModalOpen(true);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [hasSeenAutoModal, isPreviewRoute, markAutoModalSeen]);

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
      const submittedAt = new Date().toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short',
      });
      const formType = form.dataset.formType || 'lead';
      const payloadText = Object.entries(payload)
        .map(([key, value]) => `${key}: ${String(value || 'N/A')}`)
        .join('\n');
      const name = String(payload.name || 'Website Visitor');
      const email = String(payload.email || OWNER_EMAIL);
      const phone = String(payload.phone || 'N/A');
      const clinicName = String(payload.clinicName || payload.practiceType || 'N/A');

      void emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_name: 'DoctorSite',
          to_email: OWNER_EMAIL,
          owner_email: OWNER_EMAIL,
          from_name: name,
          name,
          email,
          phone,
          clinic_name: clinicName,
          clinicName,
          practice_name: clinicName,
          reply_to: email,
          subject: `New ${formType} form submission`,
          form_type: formType,
          plan: `${formType.toUpperCase()} FORM DATA\nName: ${name}\nPhone: ${phone}`,
          plan_name: `${formType.toUpperCase()} FORM DATA\nName: ${name}\nPhone: ${phone}`,
          amount: `Email: ${email}\nClinic/Practice: ${clinicName}`,
          transaction_id: `Submitted: ${submittedAt}\nDetails:\n${payloadText}`,
          transactionId: `Submitted: ${submittedAt}\nDetails:\n${payloadText}`,
          message: `New ${formType} form submission:\n${payloadText}\nSubmitted At: ${submittedAt}`,
        },
        EMAILJS_PUBLIC_KEY
      )
        .then(() => {
          form.reset();
          window.alert('Thank you. Your details have been sent successfully.');
        })
        .catch(() => {
          window.alert('Email send nahi ho paya. Please call or WhatsApp us directly.');
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
    if (isPreviewRoute) {
      return;
    }

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
  }, [isPreviewRoute, pathname]);

  if (isPreviewRoute) {
    return <>{children}</>;
  }

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
