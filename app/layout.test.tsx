import { render, screen } from '@testing-library/react';
import RootLayout from './layout';

// Mock Next.js navigation hooks
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

// Mock the font imports
jest.mock('next/font/google', () => ({
  Hanken_Grotesk: () => ({
    variable: '--font-hanken',
  }),
  Playfair_Display: () => ({
    variable: '--font-playfair',
  }),
}));

describe('RootLayout', () => {
  it('renders Navigation component', () => {
    render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    );

    // Check for navigation elements - use getAllByText since DoctorSite appears in both nav and footer
    const doctorSiteElements = screen.getAllByText('DoctorSite');
    expect(doctorSiteElements.length).toBeGreaterThan(0);
    expect(screen.getAllByText('Book Free Website Audit').length).toBeGreaterThan(0);
  });

  it('renders Footer component', () => {
    render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    );

    // Check for footer elements
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
    expect(screen.getByText('Quick Links')).toBeInTheDocument();
  });

  it('renders children content within main element', () => {
    render(
      <RootLayout>
        <div data-testid="child-content">Test Content</div>
      </RootLayout>
    );

    const childContent = screen.getByTestId('child-content');
    expect(childContent).toBeInTheDocument();
    
    // Verify it's wrapped in a main element
    const mainElement = childContent.closest('main');
    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toHaveClass('min-h-screen');
  });

  it('applies correct font classes to body', () => {
    const { container } = render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    );

    const body = container.querySelector('body');
    expect(body).toHaveClass('font-primary', 'antialiased');
  });

  it('sets correct language attribute on html element', () => {
    const { container } = render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    );

    const html = container.querySelector('html');
    expect(html).toHaveAttribute('lang', 'en');
  });
});
