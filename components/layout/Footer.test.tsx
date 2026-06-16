import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer } from './Footer';
import { SITE_NAME, navigationLinks } from '@/lib/constants';

describe('Footer Component', () => {
  it('renders the footer with company name', () => {
    render(<Footer />);
    expect(screen.getByText(SITE_NAME)).toBeInTheDocument();
  });

  it('displays company description', () => {
    render(<Footer />);
    expect(screen.getByText(/Healthcare growth partner for doctors/i)).toBeInTheDocument();
    expect(screen.getByText('Book Free Website Audit')).toBeInTheDocument();
  });

  it('renders Quick Links section with navigation links', () => {
    render(<Footer />);
    expect(screen.getByText('Quick Links')).toBeInTheDocument();
    
    // Check first 4 navigation links
    navigationLinks.slice(0, 4).forEach((link) => {
      const linkElements = screen.getAllByText(link.label);
      expect(linkElements.length).toBeGreaterThan(0);
    });
  });

  it('renders Services section with navigation links', () => {
    render(<Footer />);
    const servicesHeadings = screen.getAllByText('Services');
    expect(servicesHeadings.length).toBeGreaterThan(0);
    
    // Check remaining navigation links
    navigationLinks.slice(4).forEach((link) => {
      const linkElements = screen.getAllByText(link.label);
      expect(linkElements.length).toBeGreaterThan(0);
    });
  });

  it('displays contact information section', () => {
    render(<Footer />);
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByText('Email:')).toBeInTheDocument();
    expect(screen.getByText('Phone:')).toBeInTheDocument();
    expect(screen.getByText('WhatsApp:')).toBeInTheDocument();
  });

  it('renders email link with correct href', () => {
    render(<Footer />);
    const emailLink = screen.getByText('vinaysalempur45@gmail.com');
    expect(emailLink).toHaveAttribute('href', 'mailto:vinaysalempur45@gmail.com');
  });

  it('renders phone link with correct href', () => {
    render(<Footer />);
    const phoneLinks = screen.getAllByText('+91 72919 78840');
    expect(phoneLinks[0]).toHaveAttribute('href', 'tel:+917291978840');
  });

  it('renders WhatsApp link with correct href and target', () => {
    render(<Footer />);
    const whatsappLinks = screen.getAllByText('+91 72919 78840');
    const whatsappLink = whatsappLinks[1];
    expect(whatsappLink).toHaveAttribute('href', 'https://wa.me/917291978840');
    expect(whatsappLink).toHaveAttribute('target', '_blank');
    expect(whatsappLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('displays social media links section', () => {
    render(<Footer />);
    expect(screen.getByText('Follow Us')).toBeInTheDocument();
  });

  it('renders social media links with correct attributes', () => {
    render(<Footer />);
    
    const facebookLink = screen.getByLabelText('Facebook');
    expect(facebookLink).toHaveAttribute('href', 'https://facebook.com');
    expect(facebookLink).toHaveAttribute('target', '_blank');
    expect(facebookLink).toHaveAttribute('rel', 'noopener noreferrer');

    const twitterLink = screen.getByLabelText('Twitter');
    expect(twitterLink).toHaveAttribute('href', 'https://twitter.com');

    const linkedinLink = screen.getByLabelText('LinkedIn');
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com');

    const instagramLink = screen.getByLabelText('Instagram');
    expect(instagramLink).toHaveAttribute('href', 'https://instagram.com');
  });

  it('displays copyright notice with current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear} ${SITE_NAME}`))).toBeInTheDocument();
  });

  it('renders Privacy Policy and Terms of Service links', () => {
    render(<Footer />);
    
    const privacyLink = screen.getByText('Privacy Policy');
    expect(privacyLink).toHaveAttribute('href', '/privacy');

    const termsLink = screen.getByText('Terms of Service');
    expect(termsLink).toHaveAttribute('href', '/terms');
  });

  it('applies responsive grid layout classes', () => {
    const { container } = render(<Footer />);
    const gridContainer = container.querySelector('.grid');
    expect(gridContainer).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-4');
  });

  it('applies custom className when provided', () => {
    const { container } = render(<Footer className="custom-class" />);
    const footer = container.querySelector('footer');
    expect(footer).toHaveClass('custom-class');
  });

  it('has proper hover transition classes on links', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    
    // Check that links have transition classes
    links.forEach((link) => {
      if (link.textContent && link.textContent.trim()) {
        expect(link).toHaveClass('transition-colors');
      }
    });
  });

  it('renders with dark background styling', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');
    expect(footer).toHaveClass('bg-gray-900', 'text-gray-100');
  });
});
