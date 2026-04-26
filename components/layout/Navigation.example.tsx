import React from 'react';
import Navigation from './Navigation';

/**
 * Navigation Component Examples
 * 
 * The Navigation component provides a sticky header with:
 * - Backdrop blur effect on scroll
 * - Desktop horizontal menu with all navigation links
 * - Active link highlighting
 * - Prominent CTA button
 * - Mobile menu button (placeholder for MobileMenu component)
 */

export default function NavigationExamples() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Default Navigation</h2>
        <p className="text-gray-600 mb-4">
          Navigation with automatic active link detection using Next.js usePathname hook
        </p>
        <div className="relative h-96 border border-gray-200 rounded-lg overflow-hidden">
          <Navigation />
          <div className="pt-24 px-8">
            <h1 className="text-3xl font-bold mb-4">Page Content</h1>
            <p className="text-gray-600">
              Scroll down to see the backdrop blur effect on the navigation bar.
            </p>
            <div className="h-[800px] bg-gradient-to-b from-blue-50 to-teal-50 mt-8 rounded-lg p-8">
              <p className="text-gray-600">Scroll content...</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Navigation with Custom Active Path</h2>
        <p className="text-gray-600 mb-4">
          Navigation with manually specified active path (useful for testing or SSR)
        </p>
        <div className="relative h-96 border border-gray-200 rounded-lg overflow-hidden">
          <Navigation currentPath="/services" />
          <div className="pt-24 px-8">
            <h1 className="text-3xl font-bold mb-4">Services Page</h1>
            <p className="text-gray-600">
              The &quot;Services&quot; link is highlighted as active.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Sticky Positioning:</strong> Navigation stays at the top while scrolling
          </li>
          <li>
            <strong>Backdrop Blur:</strong> Applies blur effect when scrolled down for better readability
          </li>
          <li>
            <strong>Active Link Highlighting:</strong> Current page link is highlighted with primary color
          </li>
          <li>
            <strong>Responsive Design:</strong> Desktop horizontal menu, mobile hamburger button
          </li>
          <li>
            <strong>CTA Button:</strong> Prominent &quot;Book Free Consultation&quot; button for conversions
          </li>
          <li>
            <strong>Smooth Transitions:</strong> All hover and scroll effects use smooth animations
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Usage</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`import Navigation from '@/components/layout/Navigation';

// In your layout or page
export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20">
        {children}
      </main>
    </>
  );
}

// With custom active path
<Navigation currentPath="/about" />`}</code>
        </pre>
      </div>
    </div>
  );
}
