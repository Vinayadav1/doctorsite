// TypeScript type definitions

export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  category: 'core' | 'marketing' | 'content';
  price?: string;
  priceNote?: string;
  priceSubtext?: string;
}

export interface PricingPlan {
  id: string;
  name: 'Basic' | 'Professional' | 'Premium';
  price: number;
  period: 'month' | 'one-time';
  description: string;
  features: string[];
  isPopular: boolean;
  targetAudience: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
  duration?: string;
}

export interface PortfolioItem {
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

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  specialty: string;
  location?: string;
  avatar?: string;
  rating?: number;
}

export interface BlogPost {
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

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactFormSubmission extends ContactFormData {
  source: string; // Which page/CTA triggered the form
  timestamp: string;
}

// Component Props Interfaces

export interface NavigationProps {
  currentPath: string;
}

export interface HeroSectionProps {
  headline: string;
  subheading: string;
  ctaText: string;
  ctaLink: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features?: string[];
}

export interface PricingPlanProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
}

export interface PortfolioItemProps {
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

export interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  specialty: string;
  avatar?: string;
}

export interface CTAButtonProps {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  onClick?: () => void;
}

export interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon: string;
  duration?: string;
}

// Design System Types

export interface DesignTokens {
  colors: {
    primary: {
      light: string;
      main: string;
      dark: string;
    };
    secondary: {
      light: string;
      main: string;
      dark: string;
    };
    neutral: {
      white: string;
      gray50: string;
      gray100: string;
      gray900: string;
    };
  };
  typography: {
    fontFamily: {
      primary: string;
      secondary: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
    };
  };
  spacing: {
    section: string;
    container: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    glass: string;
  };
}

export interface Breakpoints {
  mobile: string;
  tablet: string;
  desktop: string;
  wide: string;
}
