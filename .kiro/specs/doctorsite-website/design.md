# Design Document: DoctorSite Website

## Overview

DoctorSite is a conversion-focused marketing website designed to attract doctors and surgeons who need professional websites and digital presence services. The platform serves as both an informational resource and a lead generation tool, showcasing services, pricing, portfolio work, and providing multiple conversion paths.

The website follows a modern, premium aesthetic with medical-themed design elements (light blue, teal, clean gradients) to build trust with medical professionals. The architecture prioritizes performance, SEO, and mobile-first responsive design to maximize reach and conversion rates.

### Key Design Goals

- **Conversion-focused**: Multiple CTAs, clear value propositions, and friction-free contact methods
- **Trust-building**: Testimonials, portfolio, credentials, and professional design
- **Performance**: Fast load times (<3s), optimized assets, lazy loading
- **SEO-optimized**: Semantic HTML, proper meta tags, content structure
- **Mobile-first**: Responsive design adapting to all screen sizes
- **Premium feel**: Smooth animations, glassmorphism effects, modern typography

## Architecture

### Technology Stack

**Frontend Framework**: React 18+ with Next.js 14
- Server-side rendering (SSR) for SEO and performance
- Static site generation (SSG) for content pages
- App Router for modern routing patterns
- Built-in image optimization

**Styling**: Tailwind CSS 3+
- Utility-first approach for rapid development
- Custom design system configuration
- Responsive breakpoints
- Animation utilities

**Animation**: Framer Motion
- Scroll-triggered animations
- Page transitions
- Hover effects and micro-interactions

**Form Handling**: React Hook Form + Zod
- Client-side validation
- Type-safe form schemas
- Error handling

**Deployment**: Vercel
- Edge network for global performance
- Automatic HTTPS
- Preview deployments

### Architecture Pattern

The website follows a **Static Site with Dynamic Islands** pattern:

1. **Static Pages**: Most content (About, Services, How We Work, Pricing, Portfolio, Blog) is pre-rendered at build time for optimal performance and SEO
2. **Dynamic Components**: Contact forms, navigation state, and interactive elements use client-side React
3. **Incremental Static Regeneration (ISR)**: Blog posts and portfolio items can be updated without full rebuilds

### Project Structure

```
doctorsite-website/
├── app/
│   ├── layout.tsx              # Root layout with navigation
│   ├── page.tsx                # Homepage
│   ├── about/page.tsx          # About Us page
│   ├── services/page.tsx       # Services page
│   ├── how-we-work/page.tsx    # Process page
│   ├── pricing/page.tsx        # Pricing page
│   ├── portfolio/page.tsx      # Portfolio page
│   ├── contact/page.tsx        # Contact page
│   └── blog/
│       ├── page.tsx            # Blog listing
│       └── [slug]/page.tsx     # Individual blog post
├── components/
│   ├── ui/                     # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── ...
│   ├── layout/
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── TrustSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── CTASection.tsx
│   └── forms/
│       └── ContactForm.tsx
├── lib/
│   ├── constants.ts            # Site-wide constants
│   ├── types.ts                # TypeScript types
│   └── utils.ts                # Utility functions
├── public/
│   ├── images/
│   └── icons/
└── styles/
    └── globals.css             # Global styles and Tailwind config
```

## Components and Interfaces

### Core Components

#### 1. Navigation Component

**Purpose**: Sticky header navigation with responsive behavior

**Props Interface**:
```typescript
interface NavigationProps {
  currentPath: string;
}
```

**Behavior**:
- Sticky positioning with backdrop blur on scroll
- Desktop: Horizontal menu with CTA button
- Mobile: Hamburger menu with slide-in drawer
- Active link highlighting
- Smooth scroll to sections

#### 2. Hero Section Component

**Purpose**: Above-the-fold conversion section

**Props Interface**:
```typescript
interface HeroSectionProps {
  headline: string;
  subheading: string;
  ctaText: string;
  ctaLink: string;
}
```

**Features**:
- Gradient background with medical theme
- Animated text entrance
- Primary CTA button
- Optional background image/illustration

#### 3. Service Card Component

**Purpose**: Display individual service offerings

**Props Interface**:
```typescript
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features?: string[];
}
```

**Styling**:
- Glass effect with backdrop blur
- Hover elevation animation
- Icon with gradient accent
- Rounded corners with soft shadows

#### 4. Pricing Plan Component

**Purpose**: Display pricing tiers with features

**Props Interface**:
```typescript
interface PricingPlanProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
}
```

**Features**:
- Conditional "Most Popular" badge
- Feature list with checkmarks
- Highlighted styling for recommended plan
- CTA button

#### 5. Portfolio Item Component

**Purpose**: Showcase previous work

**Props Interface**:
```typescript
interface PortfolioItemProps {
  title: string;
  description: string;
  imageUrl: string;
  specialty?: string;
  results?: {
    metric: string;
    value: string;
  }[];
  link?: string;
}
```

**Features**:
- Image with overlay on hover
- Results metrics display
- Optional case study link

#### 6. Contact Form Component

**Purpose**: Lead capture and inquiry submission

**Props Interface**:
```typescript
interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
```

**Validation Rules**:
- Name: Required, min 2 characters
- Email: Required, valid email format
- Phone: Required, valid phone format
- Message: Required, min 10 characters

**Behavior**:
- Client-side validation with real-time feedback
- Loading state during submission
- Success/error message display
- Form reset on successful submission

#### 7. Testimonial Component

**Purpose**: Display client feedback

**Props Interface**:
```typescript
interface TestimonialProps {
  quote: string;
  author: string;
  specialty: string;
  avatar?: string;
}
```

**Features**:
- Quote styling with quotation marks
- Author info with specialty
- Optional avatar image
- Card-based layout

#### 8. CTA Button Component

**Purpose**: Reusable call-to-action button

**Props Interface**:
```typescript
interface CTAButtonProps {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  onClick?: () => void;
}
```

**Variants**:
- Primary: Gradient background, white text
- Secondary: Solid color, white text
- Outline: Border only, colored text

### Layout Components

#### Root Layout

**Purpose**: Shared layout wrapper for all pages

**Features**:
- Navigation component
- Footer component
- Global styles
- Font loading
- Meta tags

#### Mobile Menu

**Purpose**: Responsive navigation drawer

**Features**:
- Slide-in animation from right
- Overlay backdrop
- Close on link click
- Close on outside click

### Animation Patterns

**Scroll Animations**:
- Fade in from bottom (sections)
- Fade in from left/right (alternating content)
- Scale up (cards, images)
- Stagger children (lists, grids)

**Hover Animations**:
- Lift effect (cards)
- Scale (buttons)
- Color transition (links)
- Icon movement (CTA buttons)

**Page Transitions**:
- Fade between routes
- Smooth scroll to top

## Data Models

### Site Content Structure

#### Navigation Links

```typescript
interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

const navigationLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'How We Work', href: '/how-we-work' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' }
];
```

#### Service Offerings

```typescript
interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  category: 'core' | 'marketing' | 'content';
}

const services: Service[] = [
  {
    id: 'website-development',
    title: 'Website Development for Doctors',
    description: 'Custom-built, professional websites...',
    icon: 'globe',
    features: ['Responsive design', 'SEO optimized', 'Fast loading'],
    category: 'core'
  },
  // ... other services
];
```

#### Pricing Plans

```typescript
interface PricingPlan {
  id: string;
  name: 'Basic' | 'Professional' | 'Premium';
  price: number;
  period: 'month' | 'one-time';
  description: string;
  features: string[];
  isPopular: boolean;
  targetAudience: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 15000,
    period: 'one-time',
    description: 'Perfect for doctors starting their online presence',
    features: [
      '5-page website',
      'Mobile responsive',
      'Basic SEO',
      'Contact form',
      '1 month support'
    ],
    isPopular: false,
    targetAudience: 'Starter doctors'
  },
  // ... other plans
];
```

#### Process Steps

```typescript
interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
  duration?: string;
}

const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Consultation Call',
    description: 'We discuss your goals and requirements',
    icon: 'phone',
    duration: '30 minutes'
  },
  // ... other steps
];
```

#### Portfolio Items

```typescript
interface PortfolioItem {
  id: string;
  title: string;
  doctorName: string;
  specialty: string;
  description: string;
  imageUrl: string;
  websiteUrl?: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  tags: string[];
}
```

#### Testimonials

```typescript
interface Testimonial {
  id: string;
  quote: string;
  author: string;
  specialty: string;
  location?: string;
  avatar?: string;
  rating?: number;
}
```

#### Blog Posts

```typescript
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  coverImage: string;
  tags: string[];
  readTime: number;
}
```

#### Contact Form Submission

```typescript
interface ContactFormSubmission {
  name: string;
  email: string;
  phone: string;
  message: string;
  source: string; // Which page/CTA triggered the form
  timestamp: string;
}
```

### Design System Tokens

```typescript
const designTokens = {
  colors: {
    primary: {
      light: '#60A5FA', // Light blue
      main: '#3B82F6',  // Blue
      dark: '#2563EB'
    },
    secondary: {
      light: '#5EEAD4', // Light teal
      main: '#14B8A6',  // Teal
      dark: '#0D9488'
    },
    neutral: {
      white: '#FFFFFF',
      gray50: '#F9FAFB',
      gray100: '#F3F4F6',
      gray900: '#111827'
    }
  },
  typography: {
    fontFamily: {
      primary: 'Inter, sans-serif',
      secondary: 'Poppins, sans-serif'
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem'
    }
  },
  spacing: {
    section: '5rem',
    container: '1.5rem'
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem'
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    glass: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
  }
};
```

### Responsive Breakpoints

```typescript
const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px'
};
```


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Pricing Plan Completeness

*For any* pricing plan component, it must display both a features list and pricing information (amount and period).

**Validates: Requirements 6.6, 6.7**

### Property 2: Form Validation Rejects Invalid Input

*For any* contact form submission with one or more missing required fields (name, email, phone, message), the validation must fail and prevent submission.

**Validates: Requirements 8.5**

### Property 3: Form Submission Accepts Valid Input

*For any* contact form submission where all required fields are present and valid, the form must successfully submit the inquiry data.

**Validates: Requirements 8.6**

### Property 4: Navigation Presence Across Pages

*For any* page in the DoctorSite platform, the navigation bar must be present and accessible.

**Validates: Requirements 9.3**

### Property 5: Testimonial Component Completeness

*For any* testimonial component, it must display the author's name and specialty when that data is available.

**Validates: Requirements 11.4**

### Property 6: Responsive Layout Adaptation

*For any* page in the DoctorSite platform and any viewport size (mobile: 320-768px, tablet: 768-1024px, desktop: 1024px+), the layout must adapt responsively to that screen size.

**Validates: Requirements 13.1, 13.2, 13.3, 13.4**

### Property 7: UI Component Rounded Corners

*For any* UI component (buttons, cards, inputs, containers), it must have border-radius styling applied for rounded corners.

**Validates: Requirements 14.3**

### Property 8: Elevated Element Shadows

*For any* elevated UI element (cards, modals, dropdowns), it must have box-shadow styling applied.

**Validates: Requirements 14.4**

### Property 9: Interactive Element Hover Effects

*For any* interactive element (buttons, links, cards), hovering over it must trigger a visual hover effect (color change, scale, elevation, etc.).

**Validates: Requirements 15.3**

### Property 10: CTA Button Presence on Pages

*For any* page in the DoctorSite platform, it must include at least one CTA button.

**Validates: Requirements 16.1**

### Property 11: Semantic HTML Structure

*For any* page in the DoctorSite platform, it must use semantic HTML5 tags (header, nav, main, section, article, footer, etc.) for proper document structure.

**Validates: Requirements 17.2**

### Property 12: Meta Tags Presence

*For any* page in the DoctorSite platform, it must include required meta tags (title, description, viewport, og:tags).

**Validates: Requirements 17.3**

### Property 13: Image Optimization

*For any* image used in the DoctorSite platform, it must be optimized for web delivery (appropriate format, compressed, responsive sizing).

**Validates: Requirements 17.4**

## Error Handling

### Form Validation Errors

**Scenario**: User submits contact form with invalid or missing data

**Handling**:
- Display inline error messages below each invalid field
- Error messages use clear, actionable language (e.g., "Please enter a valid email address")
- Prevent form submission until all errors are resolved
- Maintain user input (don't clear valid fields)
- Focus on first error field

**Error States**:
- Empty required field: "This field is required"
- Invalid email format: "Please enter a valid email address"
- Invalid phone format: "Please enter a valid phone number"
- Message too short: "Please provide at least 10 characters"

### Form Submission Errors

**Scenario**: Form submission fails due to network or server error

**Handling**:
- Display error notification: "Something went wrong. Please try again."
- Maintain form data (don't clear fields)
- Provide retry option
- Log error details for debugging
- Offer alternative contact methods (WhatsApp, phone)

### Navigation Errors

**Scenario**: User attempts to navigate to non-existent page

**Handling**:
- Display custom 404 page with branding
- Provide navigation back to homepage
- Show popular pages/sections
- Maintain header and footer for consistency

### Image Loading Errors

**Scenario**: Image fails to load

**Handling**:
- Display placeholder with appropriate background color
- Use alt text for accessibility
- Implement retry logic for transient failures
- Gracefully degrade (show content without image)

### Performance Degradation

**Scenario**: Slow network or device performance

**Handling**:
- Implement loading states for async content
- Show skeleton screens during data fetching
- Disable animations on low-performance devices (prefers-reduced-motion)
- Lazy load below-the-fold content
- Optimize critical rendering path

### Browser Compatibility

**Scenario**: User accesses site on unsupported browser

**Handling**:
- Graceful degradation for older browsers
- Polyfills for missing features
- Display notice for severely outdated browsers
- Ensure core functionality works without JavaScript

## Testing Strategy

### Dual Testing Approach

The DoctorSite website will employ both unit testing and property-based testing to ensure comprehensive coverage:

- **Unit tests**: Verify specific examples, edge cases, error conditions, and integration points
- **Property tests**: Verify universal properties across all inputs through randomized testing

Both approaches are complementary and necessary. Unit tests catch concrete bugs and verify specific scenarios, while property tests verify general correctness across a wide range of inputs.

### Unit Testing

**Framework**: Jest + React Testing Library

**Focus Areas**:
- Component rendering with specific props
- User interaction flows (clicks, form submissions)
- Navigation behavior
- Error states and validation messages
- Edge cases (empty states, long text, special characters)
- Integration between components

**Example Unit Tests**:
- Hero section renders with correct headline text
- Contact form displays validation errors for empty fields
- Navigation links navigate to correct pages
- Mobile menu opens and closes correctly
- Pricing plans display correct features for each tier
- Portfolio items render with all required fields

**Coverage Target**: 80% code coverage for components and utilities

### Property-Based Testing

**Framework**: fast-check (JavaScript property-based testing library)

**Configuration**:
- Minimum 100 iterations per property test (due to randomization)
- Each test tagged with comment referencing design property
- Tag format: `// Feature: doctorsite-website, Property {number}: {property_text}`

**Property Test Implementation**:

Each correctness property from the design document must be implemented as a single property-based test:

1. **Property 1: Pricing Plan Completeness**
   - Generate random pricing plan data
   - Verify features list and pricing info are both present

2. **Property 2: Form Validation Rejects Invalid Input**
   - Generate random form data with missing/invalid fields
   - Verify validation fails

3. **Property 3: Form Submission Accepts Valid Input**
   - Generate random valid form data
   - Verify submission succeeds

4. **Property 4: Navigation Presence Across Pages**
   - Generate random page routes
   - Verify navigation component is rendered

5. **Property 5: Testimonial Component Completeness**
   - Generate random testimonial data
   - Verify name and specialty are displayed

6. **Property 6: Responsive Layout Adaptation**
   - Generate random viewport sizes across breakpoints
   - Verify layout adapts appropriately

7. **Property 7: UI Component Rounded Corners**
   - Generate random UI components
   - Verify border-radius is applied

8. **Property 8: Elevated Element Shadows**
   - Generate random elevated elements
   - Verify box-shadow is applied

9. **Property 9: Interactive Element Hover Effects**
   - Generate random interactive elements
   - Verify hover styles are defined

10. **Property 10: CTA Button Presence on Pages**
    - Generate random page routes
    - Verify at least one CTA button exists

11. **Property 11: Semantic HTML Structure**
    - Generate random pages
    - Verify semantic HTML5 tags are used

12. **Property 12: Meta Tags Presence**
    - Generate random pages
    - Verify required meta tags exist

13. **Property 13: Image Optimization**
    - Generate random image components
    - Verify optimization attributes (format, loading, sizes)

### Visual Regression Testing

**Tool**: Percy or Chromatic

**Purpose**: Catch unintended visual changes

**Coverage**:
- All pages at mobile, tablet, and desktop breakpoints
- Component states (hover, focus, error)
- Dark mode variations (if implemented)

### Performance Testing

**Tools**: Lighthouse CI, WebPageTest

**Metrics**:
- First Contentful Paint (FCP) < 1.5s
- Largest Contentful Paint (LCP) < 2.5s
- Time to Interactive (TTI) < 3.0s
- Cumulative Layout Shift (CLS) < 0.1
- Total page load < 3.0s

**Testing Frequency**:
- Run on every production deployment
- Monitor in CI/CD pipeline
- Alert on regression

### Accessibility Testing

**Tools**: axe-core, WAVE, manual testing

**Coverage**:
- Keyboard navigation
- Screen reader compatibility
- Color contrast ratios (WCAG AA)
- Focus indicators
- ARIA labels and roles
- Form labels and error associations

### Cross-Browser Testing

**Browsers**:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

**Testing Approach**:
- Automated tests via Playwright
- Manual testing for critical flows
- BrowserStack for device testing

### End-to-End Testing

**Framework**: Playwright

**Critical User Flows**:
1. Homepage → Services → Contact form submission
2. Homepage → Pricing → Book consultation
3. Homepage → Portfolio → View case study
4. Blog listing → Individual post → Contact
5. Mobile navigation → All pages

### Continuous Integration

**CI/CD Pipeline**:
1. Run unit tests on every commit
2. Run property tests on every PR
3. Run E2E tests on staging deployment
4. Run performance tests on production deployment
5. Visual regression tests on every PR

**Quality Gates**:
- All tests must pass
- Code coverage > 80%
- No accessibility violations
- Performance budget met
- No TypeScript errors

