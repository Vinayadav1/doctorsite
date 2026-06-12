'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_5wkd6mg';
const EMAILJS_TEMPLATE_ID = 'template_p02q1hg';
const EMAILJS_PUBLIC_KEY = 'ja_G9Ipwlp27pvPxE';
const OWNER_EMAIL = 'vinaysalempur45@gmail.com';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    clinicName: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [submitError, setSubmitError] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const submittedAt = new Date().toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
    const auditDetails = [
      'WEBSITE AUDIT FORM DATA',
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Clinic/Practice: ${formData.clinicName}`,
      `Message: ${formData.message || 'N/A'}`,
      `Submitted At: ${submittedAt}`,
    ].join('\n');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_name: 'DoctorSite',
          to_email: OWNER_EMAIL,
          owner_email: OWNER_EMAIL,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          clinic_name: formData.clinicName,
          clinicName: formData.clinicName,
          practice_name: formData.clinicName,
          reply_to: formData.email,
          subject: `New Website Audit Request - ${formData.clinicName}`,
          form_type: 'Free Website Audit',
          plan: `Free Website Audit\nName: ${formData.name}\nPhone: ${formData.phone}`,
          plan_name: `Free Website Audit\nName: ${formData.name}\nPhone: ${formData.phone}`,
          amount: `Email: ${formData.email}\nClinic: ${formData.clinicName}`,
          transaction_id: `Message: ${formData.message || 'N/A'}\nSubmitted: ${submittedAt}`,
          transactionId: `Message: ${formData.message || 'N/A'}\nSubmitted: ${submittedAt}`,
          message: auditDetails,
        },
        EMAILJS_PUBLIC_KEY
      );
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unable to send email right now.';
      console.error('EmailJS consultation error:', err);
      setSubmitError(message);
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        clinicName: '',
        message: '',
      });
      setSubmitError('');
      onClose();
    }, 3000);
  };

  const handleClose = React.useCallback(() => {
    if (!isSubmitting) {
      setIsSuccess(false);
      setSubmitError('');
      onClose();
    }
  }, [isSubmitting, onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [handleClose, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleOverlayClick}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-3 sm:p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 34 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 24 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[calc(100dvh-24px)] w-full max-w-4xl overflow-hidden border border-black bg-[#fbf9f8] shadow-[12px_12px_0_rgba(0,0,0,0.35)]"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              aria-hidden="true"
              initial={{ scaleX: 0, scaleY: 0 }}
              animate={{ scaleX: 1, scaleY: 1 }}
              transition={{ delay: 0.12, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 hidden h-20 w-20 origin-top-right border-b border-l border-black/20 bg-[#e9c176] sm:block"
            />
            {isSuccess ? (
              <div className="p-8 text-center sm:p-10">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-[#775a19] bg-[#e9c176] text-black">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-secondary text-4xl font-bold tracking-[-0.03em] text-black">Thank You.</h3>
                <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-[#444748]">
                  Our team will contact you shortly to schedule your free website audit.
                </p>
              </div>
            ) : (
              <>
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="relative border-b border-black p-4 sm:p-5"
                >
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Free Website Audit</p>
                  <h2 className="max-w-3xl font-secondary text-[34px] font-bold leading-[1.08] tracking-[-0.03em] text-black sm:text-[44px]">
                    Find The Gaps Costing You Patient Inquiries
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-[#444748]">
                    Share your practice details and we&apos;ll review your website, trust signals, Google visibility, WhatsApp path, and appointment conversion opportunities.
                  </p>
                  <button
                    type="button"
                    onClick={handleClose}
                    disabled={isSubmitting}
                    className="absolute right-4 top-4 border border-black/15 bg-[#fbf9f8] p-2 text-black transition-colors hover:border-black hover:bg-black hover:text-white disabled:opacity-50"
                    aria-label="Close consultation modal"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </motion.div>

                {/* Form */}
                <motion.form
                  onSubmit={handleSubmit}
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        delayChildren: 0.2,
                        staggerChildren: 0.055,
                      },
                    },
                  }}
                  className="grid gap-3 p-4 sm:grid-cols-2 sm:p-5"
                >
                  {/* Name */}
                  <motion.div variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}>
                    <label htmlFor="modal-name" className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.14em] text-[#444748]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="modal-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="h-12 w-full border border-black/20 bg-white px-4 text-sm text-black outline-none transition-colors placeholder:text-[#8a8b90] focus:border-[#775a19] disabled:opacity-60"
                      placeholder="Dr. John Doe"
                      disabled={isSubmitting}
                    />
                  </motion.div>

                  {/* Phone */}
                  <motion.div variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}>
                    <label htmlFor="modal-phone" className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.14em] text-[#444748]">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="modal-phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-12 w-full border border-black/20 bg-white px-4 text-sm text-black outline-none transition-colors placeholder:text-[#8a8b90] focus:border-[#775a19] disabled:opacity-60"
                      placeholder="+91 98765 43210"
                      disabled={isSubmitting}
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}>
                    <label htmlFor="modal-email" className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.14em] text-[#444748]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="modal-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="h-12 w-full border border-black/20 bg-white px-4 text-sm text-black outline-none transition-colors placeholder:text-[#8a8b90] focus:border-[#775a19] disabled:opacity-60"
                      placeholder="doctor@example.com"
                      disabled={isSubmitting}
                    />
                  </motion.div>

                  {/* Clinic Name */}
                  <motion.div variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}>
                    <label htmlFor="modal-clinic" className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.14em] text-[#444748]">
                      Clinic/Practice Name *
                    </label>
                    <input
                      type="text"
                      id="modal-clinic"
                      name="clinicName"
                      required
                      value={formData.clinicName}
                      onChange={handleChange}
                      className="h-12 w-full border border-black/20 bg-white px-4 text-sm text-black outline-none transition-colors placeholder:text-[#8a8b90] focus:border-[#775a19] disabled:opacity-60"
                      placeholder="ABC Medical Center"
                      disabled={isSubmitting}
                    />
                  </motion.div>

                  {/* Message */}
                  <motion.div className="sm:col-span-2" variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}>
                    <label htmlFor="modal-message" className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.14em] text-[#444748]">
                      Message (Optional)
                    </label>
                    <textarea
                      id="modal-message"
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleChange}
                      className="min-h-[86px] w-full resize-none border border-black/20 bg-white p-4 text-sm text-black outline-none transition-colors placeholder:text-[#8a8b90] focus:border-[#775a19] disabled:opacity-60"
                      placeholder="Share your website URL, specialty, city, and main growth goal."
                      disabled={isSubmitting}
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 border border-black bg-black px-7 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#775a19] hover:bg-[#775a19] disabled:cursor-not-allowed disabled:opacity-50 sm:col-span-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      'Book Free Website Audit'
                    )}
                  </motion.button>
                  {submitError && (
                    <motion.p
                      variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
                      className="border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700 sm:col-span-2"
                    >
                      Email send nahi ho paya. Please details check karke dobara try karein.
                    </motion.p>
                  )}
                </motion.form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConsultationModal;
