import React from 'react';
import { Footer } from './Footer';

/**
 * Footer Component Examples
 * 
 * The Footer component displays company information, navigation links,
 * contact details, and social media links in a responsive layout.
 */

export default function FooterExamples() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Default Footer</h2>
        <p className="text-gray-600 mb-4">
          Standard footer with all sections: company info, quick links, services, and contact information.
        </p>
        <Footer />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Footer with Custom Class</h2>
        <p className="text-gray-600 mb-4">
          Footer with additional custom styling applied via className prop.
        </p>
        <Footer className="border-t-4 border-blue-500" />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Footer in Page Context</h2>
        <p className="text-gray-600 mb-4">
          Example showing how the footer appears at the bottom of a page layout.
        </p>
        <div className="min-h-screen flex flex-col">
          <div className="flex-1 bg-gray-50 p-8">
            <h1 className="text-3xl font-bold mb-4">Page Content</h1>
            <p className="text-gray-600">
              This is the main page content. The footer will appear below this content.
            </p>
          </div>
          <Footer />
        </div>
      </section>
    </div>
  );
}
