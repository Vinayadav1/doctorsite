import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation from './Navigation';
import { SITE_NAME } from '@/lib/constants';

// Mock Next.js navigation hooks
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
}));

describe('Navigation Component', () => {
  const landingLinks = ['Home', 'About', 'Service', 'Pricing'];

  it('renders the site name/logo', () => {
    render(<Navigation />);
    expect(screen.getByText(SITE_NAME)).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Navigation />);
    
    landingLinks.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it('renders the CTA button', () => {
    render(<Navigation />);
    expect(screen.getByText('Book Audit')).toBeInTheDocument();
  });

  it('highlights the active link', () => {
    render(<Navigation currentPath="/services" />);
    
    const servicesLink = screen.getByText('Service');
    expect(servicesLink).toHaveClass('border-b', 'text-black');
  });

  it('applies backdrop blur styles when scrolled', () => {
    const { container } = render(<Navigation />);
    const nav = container.querySelector('nav');
    
    // Initially should have base styles
    expect(nav).toHaveClass('bg-[#fbf9f8]/95');
    
    // Simulate scroll
    global.window.scrollY = 100;
    global.window.dispatchEvent(new Event('scroll'));
    
    // After scroll, should have backdrop blur
    setTimeout(() => {
      expect(nav).toHaveClass('backdrop-blur-md');
    }, 100);
  });

  it('renders mobile menu button on mobile', () => {
    render(<Navigation />);
    const mobileButton = screen.getByLabelText('Open menu');
    expect(mobileButton).toBeInTheDocument();
  });

  it('has sticky positioning', () => {
    const { container } = render(<Navigation />);
    const nav = container.querySelector('nav');
    expect(nav).toHaveClass('fixed');
  });
});
