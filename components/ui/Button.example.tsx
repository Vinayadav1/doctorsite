/**
 * Button Component Usage Examples
 * 
 * This file demonstrates how to use the Button component with different variants,
 * sizes, and configurations.
 */

import Button from './Button';

export function ButtonExamples() {
  return (
    <div className="space-y-8 p-8">
      {/* Variants */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Variants</h2>
        <div className="flex gap-4">
          <Button text="Primary Button" variant="primary" />
          <Button text="Secondary Button" variant="secondary" />
          <Button text="Outline Button" variant="outline" />
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Sizes</h2>
        <div className="flex gap-4 items-center">
          <Button text="Small" size="sm" />
          <Button text="Medium" size="md" />
          <Button text="Large" size="lg" />
        </div>
      </section>

      {/* With Icons */}
      <section>
        <h2 className="text-2xl font-bold mb-4">With Icons</h2>
        <div className="flex gap-4">
          <Button 
            text="Book Consultation" 
            variant="primary"
            icon={<span>→</span>}
          />
          <Button 
            text="Go Back" 
            variant="outline"
            icon={<span>←</span>}
            iconPosition="left"
          />
        </div>
      </section>

      {/* As Links */}
      <section>
        <h2 className="text-2xl font-bold mb-4">As Links</h2>
        <div className="flex gap-4">
          <Button 
            text="Contact Us" 
            href="/contact"
            variant="primary"
          />
          <Button 
            text="Learn More" 
            href="/services"
            variant="secondary"
          />
        </div>
      </section>

      {/* CTA Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-4">CTA Examples</h2>
        <div className="flex gap-4">
          <Button 
            text="Book Free Consultation" 
            variant="primary"
            size="lg"
            icon={<span>📞</span>}
          />
          <Button 
            text="Get Started Today" 
            variant="secondary"
            size="lg"
            icon={<span>✓</span>}
          />
        </div>
      </section>
    </div>
  );
}
