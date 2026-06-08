import type { NavLink, Service, PricingPlan, ProcessStep, Testimonial, DesignTokens } from './types';

// Site-wide constants and data
export const SITE_NAME = "DoctorSite";
export const SITE_URL = "https://doctorsite.com";

// Navigation links
export const navigationLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'How We Work', href: '/how-we-work' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' }
];

// Services data
export const services: Service[] = [
  {
    id: 'more-patients-package',
    title: 'More Patients Package',
    description: 'A professional medical website designed to build trust and turn visitors into patient inquiries.',
    icon: 'globe',
    features: ['Professional website', 'Mobile optimized', 'Trust-building design'],
    category: 'core',
    price: '2,999',
    priceNote: 'starting price',
    priceSubtext: 'Includes WhatsApp booking and contact form basics'
  },
  {
    id: 'google-visibility-package',
    title: 'Google Visibility Package',
    description: 'Improve how your clinic appears when local patients search for your specialty nearby.',
    icon: 'search',
    features: ['Google Business setup', 'Local SEO', 'Location ranking'],
    category: 'marketing',
    price: '7,999',
    priceNote: 'starting price'
  },
  {
    id: 'appointment-automation',
    title: 'Appointment Automation',
    description: 'Make it easy for patients to contact, book, and get tracked from the moment they land on your site.',
    icon: 'calendar',
    features: ['WhatsApp booking', 'Contact forms', 'Lead tracking'],
    category: 'core',
    price: '14,999',
    priceNote: 'starting price'
  },
  {
    id: 'video-editing',
    title: 'Video Editing (for reels, YouTube)',
    description: 'Professional video editing services to create engaging content for social media and YouTube.',
    icon: 'video',
    features: ['Reels editing', 'YouTube videos', 'Educational content', 'Patient testimonials'],
    category: 'content',
    price: '40 – 150',
    priceNote: 'per batch'
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    description: 'Grow your online presence with strategic social media management across all platforms.',
    icon: 'share',
    features: ['Content planning', 'Post scheduling', 'Engagement management', 'Analytics tracking'],
    category: 'marketing',
    price: '80 – 250',
    priceNote: 'per month'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing campaigns to reach more patients and grow your practice.',
    icon: 'megaphone',
    features: ['Google Ads', 'Facebook Ads', 'Campaign management', 'ROI tracking'],
    category: 'marketing',
    price: '150 – 400',
    priceNote: 'per month'
  },
  {
    id: 'content-writing',
    title: 'Content Writing (medical blogs)',
    description: 'Expert medical content writing to educate patients and improve your search engine rankings.',
    icon: 'pen',
    features: ['Medical blogs', 'Patient education', 'SEO content', 'Health articles'],
    category: 'content',
    price: '40 – 120',
    priceNote: '5 articles'
  }
];

// Pricing plans
export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 2999,
    period: 'one-time',
    description: 'Perfect for clinics that need a fast professional online presence.',
    features: [
      '1 Page Website',
      'WhatsApp Button',
      'Mobile Responsive',
      'Contact Form'
    ],
    isPopular: false,
    targetAudience: 'Doctors starting online'
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 7999,
    period: 'one-time',
    description: 'Best for practices that want stronger trust and booking flow.',
    features: [
      '5 Pages',
      'SEO Setup',
      'Appointment Booking',
      'Google Maps'
    ],
    isPopular: true,
    targetAudience: 'Growing clinics'
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 14999,
    period: 'one-time',
    description: 'For clinics ready to compete harder on Google and speed.',
    features: [
      'Everything Above',
      'Local SEO',
      'Blog Setup',
      'Speed Optimization',
      'Priority support'
    ],
    isPopular: false,
    targetAudience: 'Competitive practices'
  }
];

// Process steps
export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Consultation Call',
    description: 'We discuss your goals, target patients, and requirements in a free 30-minute consultation call.',
    icon: 'phone',
    duration: '30 minutes'
  },
  {
    step: 2,
    title: 'Requirement Understanding',
    description: 'We analyze your specialty, competition, and create a detailed plan for your digital presence.',
    icon: 'clipboard',
    duration: '2-3 days'
  },
  {
    step: 3,
    title: 'Design & Development',
    description: 'Our team creates a custom design and develops your website with modern technologies.',
    icon: 'code',
    duration: '2-3 weeks'
  },
  {
    step: 4,
    title: 'Revisions',
    description: 'We incorporate your feedback and make necessary revisions until you are completely satisfied.',
    icon: 'refresh',
    duration: '1 week'
  },
  {
    step: 5,
    title: 'Launch',
    description: 'We launch your website, set up analytics, and ensure everything is working perfectly.',
    icon: 'rocket',
    duration: '1-2 days'
  },
  {
    step: 6,
    title: 'Ongoing Support',
    description: 'We provide continued support, updates, and maintenance to keep your website running smoothly.',
    icon: 'support',
    duration: 'Ongoing'
  }
];

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: 'DoctorSite transformed my online presence. I now get 5-10 patient inquiries every week through my website. The investment paid for itself in the first month!',
    author: 'Dr. Rajesh Kumar',
    specialty: 'Orthopedic Surgeon',
    location: 'Mumbai',
    rating: 5,
    metrics: ['2.8x increase in appointment requests', 'Ranked on Google for local searches']
  },
  {
    id: 'testimonial-2',
    quote: 'The team understood exactly what I needed. My website looks professional and my patients love the online booking feature. Highly recommended!',
    author: 'Dr. Priya Sharma',
    specialty: 'Dermatologist',
    location: 'Delhi',
    rating: 5,
    metrics: ['3x more WhatsApp inquiries', 'More trust from first-time patients']
  },
  {
    id: 'testimonial-3',
    quote: 'As a new practitioner, I needed to establish credibility quickly. DoctorSite helped me build a strong online presence that attracts patients.',
    author: 'Dr. Amit Patel',
    specialty: 'General Physician',
    location: 'Bangalore',
    rating: 5,
    metrics: ['Homepage delivered in 3 days', 'Consistent contact form leads']
  },
  {
    id: 'testimonial-4',
    quote: 'The SEO optimization really works! I now rank on the first page of Google for my specialty in my city. Patient footfall has increased significantly.',
    author: 'Dr. Sneha Reddy',
    specialty: 'Gynecologist',
    location: 'Hyderabad',
    rating: 5,
    metrics: ['Ranked for specialty + city keywords', 'Higher patient footfall from Google']
  }
];

// Design tokens
export const designTokens: DesignTokens = {
  colors: {
    primary: {
      light: '#60A5FA',
      main: '#3B82F6',
      dark: '#2563EB'
    },
    secondary: {
      light: '#5EEAD4',
      main: '#14B8A6',
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
