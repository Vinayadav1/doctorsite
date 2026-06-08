'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export interface NavigationProps {
  currentPath?: string;
  onGetStartedClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPath, onGetStartedClick }) => {
  const pathname = usePathname();
  const activePath = currentPath || pathname;
  const [menuOpen, setMenuOpen] = React.useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Service', href: '/services' },
    { label: 'Pricing', href: '/pricing' },
  ];

  // Close menu on route change
  React.useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-black/10 bg-[#fbf9f8]/95 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-16">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-shrink-0 items-center gap-2">
            <svg className="h-7 w-7 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.86-.96-7-5.54-7-10V8.3l7-3.11 7 3.11V10c0 4.46-3.14 9.04-7 10z"/>
              <path d="M10.5 13.5l-2-2-1.41 1.41L10.5 16.5l6-6-1.41-1.41z"/>
            </svg>
            <span className="font-secondary text-xl font-bold tracking-[-0.02em] text-black">DoctorSite</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'whitespace-nowrap px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors hover:text-[#775a19]',
                  activePath === link.href ? 'border-b border-black text-black' : 'text-[#444748]'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            {onGetStartedClick ? (
              <button
                onClick={onGetStartedClick}
                className="whitespace-nowrap border border-black bg-black px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#775a19] hover:border-[#775a19]"
              >
                Book Audit
              </button>
            ) : (
              <Link href="/#contact" className="inline-flex whitespace-nowrap border border-black bg-black px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-[#775a19] hover:bg-[#775a19]">
                Book Audit
              </Link>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-black transition-colors hover:text-[#775a19] lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="border-t border-black/10 bg-[#fbf9f8] lg:hidden">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  'block border-b border-black/10 px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] transition-colors',
                  activePath === link.href
                    ? 'text-black'
                    : 'text-[#444748] hover:text-[#775a19]'
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              {onGetStartedClick ? (
                <button
                  onClick={() => { setMenuOpen(false); onGetStartedClick(); }}
                  className="w-full border border-black bg-black py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#775a19]"
                >
                  Book Audit
                </button>
              ) : (
                <Link
                  href="/#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full border border-black bg-black py-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#775a19]"
                >
                  Book Audit
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

Navigation.displayName = 'Navigation';
export default Navigation;
