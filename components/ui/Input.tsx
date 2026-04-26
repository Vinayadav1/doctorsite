'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: 'default' | 'filled';
  inputSize?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      variant = 'default',
      inputSize = 'md',
      fullWidth = false,
      className,
      id,
      ...props
    },
    ref
  ) => {
    // Generate unique ID - must be called unconditionally
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const hasError = !!error;

    // Base styles with rounded corners (Requirement 14.3)
    const baseStyles = 'rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1';

    // Variant styles
    const variantStyles = {
      default: 'bg-white border-neutral-gray100',
      filled: 'bg-neutral-gray50 border-transparent',
    };

    // Size styles
    const sizeStyles = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3 text-base',
      lg: 'px-5 py-4 text-lg',
    };

    // State styles - focus and hover (Requirement 8.2)
    const stateStyles = hasError
      ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
      : 'hover:border-primary-light focus:ring-primary-main focus:border-primary-main';

    // Width styles
    const widthStyles = fullWidth ? 'w-full' : '';

    const inputClasses = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[inputSize],
      stateStyles,
      widthStyles,
      className
    );

    return (
      <div className={cn('flex flex-col gap-1.5', fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-neutral-gray900"
          >
            {label}
          </label>
        )}
        
        <input
          ref={ref}
          id={inputId}
          className={inputClasses}
          aria-invalid={hasError}
          aria-describedby={
            error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
          }
          {...props}
        />

        {/* Error message display (Requirement 8.2) */}
        {error && (
          <p
            id={`${inputId}-error`}
            className="text-sm text-red-500"
            role="alert"
          >
            {error}
          </p>
        )}

        {/* Helper text (only shown when no error) */}
        {!error && helperText && (
          <p
            id={`${inputId}-helper`}
            className="text-sm text-neutral-gray900/60"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
