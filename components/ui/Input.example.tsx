import React from 'react';
import Input from './Input';

/**
 * Input Component Examples
 * 
 * Demonstrates various configurations of the Input component
 * for forms with validation states, focus and hover styles.
 */

export default function InputExamples() {
  return (
    <div className="p-8 space-y-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Input Component Examples</h1>

      {/* Basic Input */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Basic Input</h2>
        <Input placeholder="Enter text..." />
      </section>

      {/* With Label */}
      <section>
        <h2 className="text-xl font-semibold mb-4">With Label</h2>
        <Input label="Email Address" placeholder="you@example.com" type="email" />
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Sizes</h2>
        <div className="space-y-4">
          <Input label="Small" placeholder="Small input" inputSize="sm" />
          <Input label="Medium (Default)" placeholder="Medium input" inputSize="md" />
          <Input label="Large" placeholder="Large input" inputSize="lg" />
        </div>
      </section>

      {/* Variants */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Variants</h2>
        <div className="space-y-4">
          <Input label="Default Variant" placeholder="Default background" variant="default" />
          <Input label="Filled Variant" placeholder="Filled background" variant="filled" />
        </div>
      </section>

      {/* With Error */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Validation States</h2>
        <div className="space-y-4">
          <Input
            label="Email"
            placeholder="you@example.com"
            error="Email is required"
          />
          <Input
            label="Phone"
            placeholder="+1 (555) 000-0000"
            error="Please enter a valid phone number"
          />
        </div>
      </section>

      {/* With Helper Text */}
      <section>
        <h2 className="text-xl font-semibold mb-4">With Helper Text</h2>
        <Input
          label="Password"
          type="password"
          placeholder="Enter password"
          helperText="Must be at least 8 characters"
        />
      </section>

      {/* Full Width */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Full Width</h2>
        <Input
          label="Full Width Input"
          placeholder="This input spans the full width"
          fullWidth
        />
      </section>

      {/* Different Input Types */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Input Types</h2>
        <div className="space-y-4">
          <Input label="Text" type="text" placeholder="Text input" />
          <Input label="Email" type="email" placeholder="email@example.com" />
          <Input label="Password" type="password" placeholder="••••••••" />
          <Input label="Number" type="number" placeholder="123" />
          <Input label="Tel" type="tel" placeholder="+1 (555) 000-0000" />
          <Input label="URL" type="url" placeholder="https://example.com" />
        </div>
      </section>

      {/* Disabled State */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Disabled State</h2>
        <Input
          label="Disabled Input"
          placeholder="Cannot edit"
          disabled
        />
      </section>

      {/* Required Field */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Required Field</h2>
        <Input
          label="Required Field"
          placeholder="This field is required"
          required
          helperText="* This field is required"
        />
      </section>

      {/* Form Example */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Contact Form Example</h2>
        <form className="space-y-4">
          <Input
            label="Name"
            placeholder="Dr. John Smith"
            fullWidth
            required
          />
          <Input
            label="Email"
            type="email"
            placeholder="john.smith@example.com"
            fullWidth
            required
          />
          <Input
            label="Phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            fullWidth
            required
          />
        </form>
      </section>
    </div>
  );
}
