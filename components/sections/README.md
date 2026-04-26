# Section Components

Homepage and page sections (HeroSection, TrustSection, etc.)

## HeroSection

The HeroSection component creates an engaging above-the-fold section with a headline, subheading, and call-to-action button. It features a gradient background with medical theme colors and scroll-triggered fade-in animations.

### Props

- `headline` (string): Main headline text
- `subheading` (string): Supporting subheading text
- `ctaText` (string): Call-to-action button text
- `ctaLink` (string): URL for the CTA button

### Features

- Gradient background with medical theme (light blue to teal)
- Animated text entrance with Framer Motion
- Responsive typography (scales from mobile to desktop)
- Decorative background elements with blur effects
- Primary CTA button with hover animations

### Usage

```tsx
import HeroSection from '@/components/sections/HeroSection';

<HeroSection
  headline="Build Your Digital Presence as a Doctor"
  subheading="Attract more patients and build trust with a professional website"
  ctaText="Book Free Consultation"
  ctaLink="/contact"
/>
```

### Requirements Validated

- 1.1: Display headline "Build Your Digital Presence as a Doctor"
- 1.2: Display subheading explaining patient growth and trust benefits
- 1.3: Include CTA button labeled "Book Free Consultation"
- 1.4: Navigate to contact form when CTA is clicked
- 1.5: Use premium visual styling with soft gradients and medical aesthetics
- 15.2: Implement scroll-triggered fade-in animation
