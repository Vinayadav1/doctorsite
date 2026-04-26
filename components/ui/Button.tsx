'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps {
  text: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  asLink?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  href,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  asLink = false,
  className,
  onClick,
  type = 'button',
  disabled = false,
}) => {
    // Base styles
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

    // Variant styles
    const variantStyles = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 focus:ring-blue-600 shadow-md hover:shadow-lg',
      secondary: 'bg-teal-500 text-white hover:bg-teal-600 hover:scale-105 focus:ring-teal-500 shadow-md hover:shadow-lg',
      outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:scale-105 focus:ring-blue-600',
    };

    // Size styles
    const sizeStyles = {
      sm: 'px-4 py-2 text-sm gap-1.5',
      md: 'px-6 py-3 text-base gap-2',
      lg: 'px-8 py-4 text-lg gap-2.5',
    };

    // Icon animation styles
    const iconAnimationStyles = iconPosition === 'right' 
      ? 'group-hover:translate-x-1' 
      : 'group-hover:-translate-x-1';

    const buttonClasses = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      'group',
      className
    );

    const iconElement = icon && (
      <span className={cn('transition-transform duration-200', iconAnimationStyles)}>
        {icon}
      </span>
    );

    const content = (
      <>
        {icon && iconPosition === 'left' && iconElement}
        <span>{text}</span>
        {icon && iconPosition === 'right' && iconElement}
      </>
    );

  // Render as link if href is provided
  if (href || asLink) {
    return (
      <a
        href={href}
        className={buttonClasses}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  // Render as button
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

Button.displayName = 'Button';

export default Button;
