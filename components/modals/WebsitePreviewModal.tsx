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
  const handleClose = () => {
    onClose();
  };

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
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleOverlayClick}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 md:p-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Mobile: simple modal, Desktop: laptop frame */}
            <div className="block sm:hidden bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-gray-900 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs text-gray-300 truncate mx-2">{websiteUrl}</span>
              </div>
              <div style={{ height: '75vh' }}>
                <iframe src={previewUrl} className="w-full h-full border-0" title={`Preview of ${projectName}`} sandbox="allow-same-origin allow-scripts allow-popups allow-forms" loading="lazy" />
              </div>
            </div>

            {/* Desktop: Laptop Frame */}
            <div className="hidden sm:block">
              <div className="bg-gray-800 rounded-t-2xl shadow-2xl">
                <div className="bg-gray-900 rounded-t-2xl px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 mx-4 bg-gray-800 rounded-lg px-4 py-1.5 flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="text-sm text-gray-300 truncate">{websiteUrl}</span>
                  </div>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                </div>
                <div className="bg-white relative" style={{ height: '70vh' }}>
                  <iframe src={previewUrl} className="w-full h-full border-0" title={`Preview of ${projectName}`} sandbox="allow-same-origin allow-scripts allow-popups allow-forms" loading="lazy" />
                </div>
              </div>
              <div className="bg-gray-800 h-4 rounded-b-2xl shadow-2xl relative">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-black/30 blur-xl rounded-full"></div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WebsitePreviewModal;
