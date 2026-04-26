'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

export interface NavigationProps {
  currentPath?: string;
  onGetStartedClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPath, onGetStartedClick }) => {
  const pathname = usePathname();
  const activePath = currentPath || pathname;

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'How We Work', href: '/how-we-work' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.86-.96-7-5.54-7-10V8.3l7-3.11 7 3.11V10c0 4.46-3.14 9.04-7 10z"/>
              <path d="M10.5 13.5l-2-2-1.41 1.41L10.5 16.5l6-6-1.41-1.41z"/>
            </svg>
            <span className="text-2xl font-bold text-blue-600">DoctorSite</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activePath === link.href;
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-3 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            {onGetStartedClick ? (
              <button
                onClick={onGetStartedClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all hover:shadow-lg hover:scale-105"
              >
                Get Started
              </button>
            ) : (
              <Button
                text="Get Started"
                href="/pricing"
                variant="primary"
                size="md"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-lg"
              />
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-blue-600"
            aria-label="Open menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

Navigation.displayName = 'Navigation';

export default Navigation;
