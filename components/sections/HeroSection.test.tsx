import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroSection from './HeroSection';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('HeroSection', () => {
  const defaultProps = {
    onConsultationClick: jest.fn(),
  };

  it('renders the headline correctly', () => {
    render(<HeroSection {...defaultProps} />);
    expect(screen.getByText(/Get More Patients/i)).toBeInTheDocument();
    expect(screen.getByText('Online')).toBeInTheDocument();
    expect(screen.getByText(/Starting at Just ₹2,999/i)).toBeInTheDocument();
  });

  it('renders the subheading correctly', () => {
    render(<HeroSection {...defaultProps} />);
    expect(screen.getByText(/We help doctors, dentists, surgeons, and clinics attract more patients/i)).toBeInTheDocument();
  });

  it('renders the CTA button with correct text', () => {
    render(<HeroSection {...defaultProps} />);
    expect(screen.getByText('Get Free Website Audit')).toBeInTheDocument();
    expect(screen.getByText('See Live Demo')).toBeInTheDocument();
  });

  it('renders the trust strip', () => {
    render(<HeroSection {...defaultProps} />);
    expect(screen.getAllByText('Starting ₹2,999').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Delivered in 3 Days').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Free Homepage Mockup').length).toBeGreaterThan(0);
    expect(screen.getAllByText('WhatsApp Booking Included').length).toBeGreaterThan(0);
  });

  it('renders hero background styling', () => {
    const { container } = render(<HeroSection {...defaultProps} />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('bg-[#F3F8FF]');
  });
});
