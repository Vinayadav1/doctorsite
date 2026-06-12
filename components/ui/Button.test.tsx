import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component', () => {
  it('renders with text', () => {
    render(<Button text="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renders primary variant by default', () => {
    render(<Button text="Primary" />);
    const button = screen.getByText('Primary').closest('button');
    expect(button).toHaveClass('bg-blue-600');
  });

  it('renders secondary variant', () => {
    render(<Button text="Secondary" variant="secondary" />);
    const button = screen.getByText('Secondary').closest('button');
    expect(button).toHaveClass('bg-teal-500');
  });

  it('renders outline variant', () => {
    render(<Button text="Outline" variant="outline" />);
    const button = screen.getByText('Outline').closest('button');
    expect(button).toHaveClass('border-2');
  });

  it('renders small size', () => {
    render(<Button text="Small" size="sm" />);
    const button = screen.getByText('Small').closest('button');
    expect(button).toHaveClass('px-4', 'py-2', 'text-sm');
  });

  it('renders medium size by default', () => {
    render(<Button text="Medium" />);
    const button = screen.getByText('Medium').closest('button');
    expect(button).toHaveClass('px-6', 'py-3', 'text-base');
  });

  it('renders large size', () => {
    render(<Button text="Large" size="lg" />);
    const button = screen.getByText('Large').closest('button');
    expect(button).toHaveClass('px-8', 'py-4', 'text-lg');
  });

  it('renders with icon on right by default', () => {
    const icon = <span data-testid="icon">→</span>;
    render(<Button text="With Icon" icon={icon} />);
    
    const button = screen.getByText('With Icon').closest('button');
    const iconElement = screen.getByTestId('icon');
    
    expect(button).toContainElement(iconElement);
    expect(iconElement.parentElement).toHaveClass('group-hover:translate-x-1');
  });

  it('renders with icon on left', () => {
    const icon = <span data-testid="icon">←</span>;
    render(<Button text="With Icon" icon={icon} iconPosition="left" />);
    
    const iconElement = screen.getByTestId('icon');
    expect(iconElement.parentElement).toHaveClass('group-hover:-translate-x-1');
  });

  it('renders as link when href is provided', () => {
    render(<Button text="Link Button" href="/contact" />);
    const link = screen.getByText('Link Button').closest('a');
    expect(link).toHaveAttribute('href', '/contact');
  });

  it('applies custom className', () => {
    render(<Button text="Custom" className="custom-class" />);
    const button = screen.getByText('Custom').closest('button');
    expect(button).toHaveClass('custom-class');
  });

  it('applies hover animation classes', () => {
    render(<Button text="Hover" variant="primary" />);
    const button = screen.getByText('Hover').closest('button');
    expect(button).toHaveClass('hover:scale-105');
  });
});
