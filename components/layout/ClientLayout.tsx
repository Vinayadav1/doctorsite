'use client';

import * as React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ConsultationModal from '../modals/ConsultationModal';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
