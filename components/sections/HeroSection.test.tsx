import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroSection from './HeroSection';

describe('HeroSection', () => {
  const defaultProps = {
    headline: 'Build Your Digital Presence as a Doctor',
    subheading: 'Attract more patients and build trust with a professional website',
    ctaText: 'Book Free Consultation',
    ctaLink: '/contact',
  };

  it('renders the headline correctly', () => {
    render(<HeroSection {...defaultProps} />);
    expect(screen.getByText(defaultProps.headline)).toBeInTheDocument();
  });

  it('renders the subheading correctly', () => {
    render(<HeroSection {...defaultProps} />);
    expect(screen.getByText(defaultProps.subheading)).toBeInTheDocument();
  });

  it('renders the CTA button with correct text', () => {
    render(<HeroSection {...defaultProps} />);
    expect(screen.getByText(defaultProps.ctaText)).toBeInTheDocument();
  });

  it('CTA button has correct href attribute', () => {
    render(<HeroSection {...defaultProps} />);
    const ctaButton = screen.getByText(defaultProps.ctaText).closest('a');
    expect(ctaButton).toHaveAttribute('href', defaultProps.ctaLink);
  });

  it('applies gradient background styling', () => {
    const { container } = render(<HeroSection {...defaultProps} />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('bg-gradient-to-br');
  });

  it('renders with medical theme colors', () => {
    const { container } = render(<HeroSection {...defaultProps} />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('from-primary-light', 'to-secondary-light');
  });
});
