'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'elevated';
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className,
  onClick,
  hoverable = true,
}) => {
  // Base styles with rounded corners and soft shadows (Requirements 14.3, 14.4)
  const baseStyles = 'rounded-lg transition-all duration-300';

  // Variant styles
  const variantStyles = {
    // Default card with solid background
    default: 'bg-white shadow-md',
    
    // Glass effect with subtle transparency (Requirement 14.5)
    glass: 'bg-white shadow-md border border-gray-100',
    
    // Elevated card with stronger shadow
    elevated: 'bg-white shadow-lg',
  };

  // Hover styles - elevation animation (Requirements 14.4, 15.3)
  const hoverStyles = hoverable
    ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer'
    : '';

  const cardClasses = cn(
    baseStyles,
    variantStyles[variant],
    hoverStyles,
    className
  );

  return (
    <div className={cardClasses} onClick={onClick}>
      {children}
    </div>
  );
};

Card.displayName = 'Card';

export default Card;
