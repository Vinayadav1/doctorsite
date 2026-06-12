'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WebsitePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectName: string;
  previewUrl: string;
  websiteUrl?: string;
}

const WebsitePreviewModal: React.FC<WebsitePreviewModalProps> = ({
  isOpen,
  onClose,
  projectName,
  previewUrl,
  websiteUrl = 'example.com',
}) => {
  const handleClose = React.useCallback(() => {
    onClose();
  }, [onClose]);

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
          className="fixed inset-0 z-[9999] bg-[#050505]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.985, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.985, y: 12 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-screen w-screen flex-col bg-[#fbf9f8]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-b border-[#e9c176]/30 bg-[#111312] text-white shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
              <div className="flex min-h-[68px] items-center gap-4 px-4 sm:px-6">
                <div className="hidden items-center gap-2 sm:flex">
                  <span className="h-3 w-3 rounded-full bg-[#775a19]" />
                  <span className="h-3 w-3 rounded-full bg-[#e9c176]" />
                  <span className="h-3 w-3 rounded-full bg-white/45" />
                </div>

                <div className="flex min-w-0 flex-1 items-center gap-3 border border-white/15 bg-white/5 px-4 py-3">
                  <svg className="h-4 w-4 flex-shrink-0 text-[#e9c176]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-bold uppercase tracking-[0.14em] text-[#e9c176]">{projectName}</p>
                    <p className="truncate text-xs text-white/65 sm:text-sm">{websiteUrl}</p>
                  </div>
                </div>

                <a
                  href={previewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden border border-[#e9c176]/50 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#e9c176] transition-colors hover:bg-[#e9c176] hover:text-black sm:inline-flex"
                >
                  Open Full Page
                </a>

                <button
                  type="button"
                  onClick={handleClose}
                  className="border border-white/20 p-3 text-white transition-colors hover:border-[#e9c176] hover:bg-[#e9c176] hover:text-black"
                  aria-label="Close preview"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="relative flex-1 bg-white">
              <iframe
                src={previewUrl}
                className="h-full w-full border-0"
                title={`Preview of ${projectName}`}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WebsitePreviewModal;
