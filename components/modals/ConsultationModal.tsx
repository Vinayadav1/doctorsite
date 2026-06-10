'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Log to Google Sheets
    try {
      await fetch('https://script.google.com/macros/s/AKfycbwJ-GIUCcn2wXBQ8KJKaIhUgbSdf0zqWqPyO_eY0u4iskfBAZD0uezqHSGl1YRfxc8_HA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({ type: 'consultation', ...formData }),
      });
    } catch (err) {
      console.error('Sheets log error:', err);
    }

    console.log('Consultation form submitted:', formData);
    
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
      onClose();
    }, 3000);
  };

  const handleClose = React.useCallback(() => {
    if (!isSubmitting) {
      setIsSuccess(false);
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
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 sm:items-center sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 34 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 24 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[calc(100vh-32px)] w-full max-w-2xl overflow-y-auto border border-black bg-[#fbf9f8] shadow-[12px_12px_0_rgba(0,0,0,0.35)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              aria-hidden="true"
              initial={{ scaleX: 0, scaleY: 0 }}
              animate={{ scaleX: 1, scaleY: 1 }}
              transition={{ delay: 0.12, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 hidden h-24 w-24 origin-top-right border-b border-l border-black/20 bg-[#e9c176] sm:block"
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
                  Our team will contact you shortly to schedule your free consultation.
                </p>
              </div>
            ) : (
              <>
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="relative border-b border-black p-5 sm:p-6"
                >
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Website Audit</p>
                  <h2 className="max-w-md font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] text-black sm:text-[46px]">
                    Free Consultation
                  </h2>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-[#444748]">
                    Share your practice details and we&apos;ll suggest the clearest next step for your website, visibility, and booking flow.
                  </p>
                  <button
                    type="button"
                    onClick={handleClose}
                    disabled={isSubmitting}
                    className="absolute right-5 top-5 border border-black/15 bg-[#fbf9f8] p-2 text-black transition-colors hover:border-black hover:bg-black hover:text-white disabled:opacity-50"
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
                  className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6"
                >
                  {/* Name */}
                  <motion.div variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}>
                    <label htmlFor="modal-name" className="mb-2 block text-[11px] font-bold uppercase tracking-[0.14em] text-[#444748]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="modal-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="h-14 w-full border border-black/20 bg-white px-4 text-sm text-black outline-none transition-colors placeholder:text-[#8a8b90] focus:border-[#775a19] disabled:opacity-60"
                      placeholder="Dr. John Doe"
                      disabled={isSubmitting}
                    />
                  </motion.div>

                  {/* Phone */}
                  <motion.div variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}>
                    <label htmlFor="modal-phone" className="mb-2 block text-[11px] font-bold uppercase tracking-[0.14em] text-[#444748]">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="modal-phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-14 w-full border border-black/20 bg-white px-4 text-sm text-black outline-none transition-colors placeholder:text-[#8a8b90] focus:border-[#775a19] disabled:opacity-60"
                      placeholder="+91 98765 43210"
                      disabled={isSubmitting}
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}>
                    <label htmlFor="modal-email" className="mb-2 block text-[11px] font-bold uppercase tracking-[0.14em] text-[#444748]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="modal-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="h-14 w-full border border-black/20 bg-white px-4 text-sm text-black outline-none transition-colors placeholder:text-[#8a8b90] focus:border-[#775a19] disabled:opacity-60"
                      placeholder="doctor@example.com"
                      disabled={isSubmitting}
                    />
                  </motion.div>

                  {/* Clinic Name */}
                  <motion.div variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}>
                    <label htmlFor="modal-clinic" className="mb-2 block text-[11px] font-bold uppercase tracking-[0.14em] text-[#444748]">
                      Clinic/Practice Name *
                    </label>
                    <input
                      type="text"
                      id="modal-clinic"
                      name="clinicName"
                      required
                      value={formData.clinicName}
                      onChange={handleChange}
                      className="h-14 w-full border border-black/20 bg-white px-4 text-sm text-black outline-none transition-colors placeholder:text-[#8a8b90] focus:border-[#775a19] disabled:opacity-60"
                      placeholder="ABC Medical Center"
                      disabled={isSubmitting}
                    />
                  </motion.div>

                  {/* Message */}
                  <motion.div className="sm:col-span-2" variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}>
                    <label htmlFor="modal-message" className="mb-2 block text-[11px] font-bold uppercase tracking-[0.14em] text-[#444748]">
                      Message (Optional)
                    </label>
                    <textarea
                      id="modal-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="min-h-[120px] w-full resize-none border border-black/20 bg-white p-4 text-sm text-black outline-none transition-colors placeholder:text-[#8a8b90] focus:border-[#775a19] disabled:opacity-60"
                      placeholder="Tell us about your requirements..."
                      disabled={isSubmitting}
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 border border-black bg-black px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#775a19] hover:bg-[#775a19] disabled:cursor-not-allowed disabled:opacity-50 sm:col-span-2"
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
                      'Submit Request'
                    )}
                  </motion.button>
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
