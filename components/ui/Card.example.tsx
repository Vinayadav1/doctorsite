import React from 'react';
import Card from './Card';

/**
 * Card Component Examples
 * 
 * Demonstrates the usage of the Card component with different variants
 * and configurations for the DoctorSite website.
 */

export default function CardExamples() {
  return (
    <div className="p-8 space-y-8 bg-gradient-to-br from-primary-light to-secondary-light min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-8">Card Component Examples</h1>

      {/* Default Card */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Default Card</h2>
        <Card className="p-6 max-w-md">
          <h3 className="text-lg font-semibold mb-2">Default Card</h3>
          <p className="text-gray-600">
            This is a default card with solid background, rounded corners, and soft shadows.
            Hover over it to see the elevation animation.
          </p>
        </Card>
      </section>

      {/* Glass Effect Card */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Glass Effect Card (Glassmorphism)</h2>
        <Card variant="glass" className="p-6 max-w-md">
          <h3 className="text-lg font-semibold mb-2 text-white">Glass Effect Card</h3>
          <p className="text-white/90">
            This card uses glassmorphism styling with transparency, backdrop blur, and subtle borders.
            Perfect for modern, premium designs.
          </p>
        </Card>
      </section>

      {/* Elevated Card */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Elevated Card</h2>
        <Card variant="elevated" className="p-6 max-w-md">
          <h3 className="text-lg font-semibold mb-2">Elevated Card</h3>
          <p className="text-gray-600">
            This card has a stronger shadow for more prominent elevation.
            Great for highlighting important content.
          </p>
        </Card>
      </section>

      {/* Non-hoverable Card */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Non-hoverable Card</h2>
        <Card hoverable={false} className="p-6 max-w-md">
          <h3 className="text-lg font-semibold mb-2">Static Card</h3>
          <p className="text-gray-600">
            This card does not have hover effects. Use this for non-interactive content.
          </p>
        </Card>
      </section>

      {/* Service Card Example */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Service Card Example</h2>
        <Card variant="glass" className="p-6 max-w-md">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-main to-secondary-main flex items-center justify-center text-white text-2xl">
              🏥
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Website Development</h3>
              <p className="text-white/90 mb-3">
                Custom-built, professional websites designed specifically for doctors and medical professionals.
              </p>
              <ul className="space-y-1 text-sm text-white/80">
                <li>✓ Responsive design</li>
                <li>✓ SEO optimized</li>
                <li>✓ Fast loading</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      {/* Clickable Card Example */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Clickable Card</h2>
        <Card 
          variant="elevated" 
          className="p-6 max-w-md"
          onClick={() => alert('Card clicked!')}
        >
          <h3 className="text-lg font-semibold mb-2">Interactive Card</h3>
          <p className="text-gray-600">
            Click this card to trigger an action. Perfect for navigation or selection interfaces.
          </p>
        </Card>
      </section>
    </div>
  );
}
