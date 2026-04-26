# UI Components

Reusable UI components for the DoctorSite website.

## Button Component

A versatile CTA button component with multiple variants, sizes, and animation support.

### Features

- **3 Variants**: Primary (gradient), Secondary (solid), Outline
- **3 Sizes**: Small, Medium, Large
- **Icon Support**: Icons can be positioned left or right with hover animations
- **Hover Animations**: Scale effect and icon movement on hover
- **Flexible Rendering**: Can render as button or link (anchor tag)
- **Accessibility**: Focus states and keyboard navigation support

### Usage

```tsx
import { Button } from '@/components/ui';

// Basic usage
<Button text="Click me" />

// With variant and size
<Button text="Book Consultation" variant="primary" size="lg" />

// With icon
<Button 
  text="Get Started" 
  icon={<span>→</span>}
  iconPosition="right"
/>

// As a link
<Button text="Contact Us" href="/contact" variant="secondary" />
```

### Props

- `text` (string, required): Button text content
- `variant` ('primary' | 'secondary' | 'outline', default: 'primary'): Visual style
- `size` ('sm' | 'md' | 'lg', default: 'md'): Button size
- `icon` (ReactNode, optional): Icon element to display
- `iconPosition` ('left' | 'right', default: 'right'): Icon placement
- `href` (string, optional): If provided, renders as anchor tag
- `className` (string, optional): Additional CSS classes
- `onClick` (function, optional): Click handler
- `type` ('button' | 'submit' | 'reset', default: 'button'): Button type
- `disabled` (boolean, default: false): Disabled state

---

## Card Component

A reusable card component with glassmorphism styling, hover animations, rounded corners, and soft shadows.

### Features

- **3 Variants**: Default (solid), Glass (glassmorphism), Elevated (strong shadow)
- **Glassmorphism Effect**: Transparency with backdrop blur for modern premium design
- **Hover Animations**: Elevation effect with smooth transitions
- **Rounded Corners**: Consistent border-radius styling (Requirement 14.3)
- **Soft Shadows**: Professional shadow effects (Requirement 14.4)
- **Flexible Content**: Accepts any React children
- **Interactive**: Optional hover effects and click handlers

### Usage

```tsx
import { Card } from '@/components/ui';

// Basic usage
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>

// Glass effect variant
<Card variant="glass">
  <h3>Premium Glass Card</h3>
  <p>Perfect for modern, premium designs</p>
</Card>

// Elevated variant
<Card variant="elevated">
  <h3>Highlighted Content</h3>
  <p>Stands out with stronger shadows</p>
</Card>

// Non-hoverable card
<Card hoverable={false}>
  <p>Static content without hover effects</p>
</Card>

// Clickable card
<Card onClick={() => console.log('Clicked!')}>
  <p>Click me!</p>
</Card>

// Service card example
<Card variant="glass" className="p-6">
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-main to-secondary-main">
      🏥
    </div>
    <div>
      <h3 className="text-lg font-semibold">Website Development</h3>
      <p>Custom-built websites for doctors</p>
    </div>
  </div>
</Card>
```

### Props

- `children` (ReactNode, required): Card content
- `variant` ('default' | 'glass' | 'elevated', default: 'default'): Visual style
- `className` (string, optional): Additional CSS classes
- `onClick` (function, optional): Click handler
- `hoverable` (boolean, default: true): Enable/disable hover effects

### Design Requirements

This component satisfies the following requirements:
- **14.3**: Rounded corners applied to UI components
- **14.4**: Soft shadows applied to elevated elements
- **14.5**: Glass effect styling where appropriate
- **15.3**: Hover effects on interactive elements
