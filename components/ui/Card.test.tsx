import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

describe('Card Component', () => {
  it('renders children content', () => {
    render(<Card>Test Content</Card>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders default variant by default', () => {
    render(<Card>Default Card</Card>);
    const card = screen.getByText('Default Card').closest('div');
    expect(card).toHaveClass('bg-white', 'shadow-md');
  });

  it('renders glass variant with glassmorphism styling', () => {
    render(<Card variant="glass">Glass Card</Card>);
    const card = screen.getByText('Glass Card').closest('div');
    expect(card).toHaveClass('bg-white', 'shadow-md', 'border', 'border-gray-100');
  });

  it('renders elevated variant', () => {
    render(<Card variant="elevated">Elevated Card</Card>);
    const card = screen.getByText('Elevated Card').closest('div');
    expect(card).toHaveClass('bg-white', 'shadow-lg');
  });

  it('applies rounded corners (Requirement 14.3)', () => {
    render(<Card>Rounded Card</Card>);
    const card = screen.getByText('Rounded Card').closest('div');
    expect(card).toHaveClass('rounded-lg');
  });

  it('applies soft shadows (Requirement 14.4)', () => {
    render(<Card>Shadow Card</Card>);
    const card = screen.getByText('Shadow Card').closest('div');
    expect(card).toHaveClass('shadow-md');
  });

  it('applies hover elevation animation by default (Requirement 15.3)', () => {
    render(<Card>Hoverable Card</Card>);
    const card = screen.getByText('Hoverable Card').closest('div');
    expect(card).toHaveClass('hover:shadow-xl', 'hover:-translate-y-1');
  });

  it('does not apply hover styles when hoverable is false', () => {
    render(<Card hoverable={false}>Non-hoverable Card</Card>);
    const card = screen.getByText('Non-hoverable Card').closest('div');
    expect(card).not.toHaveClass('hover:shadow-xl');
    expect(card).not.toHaveClass('cursor-pointer');
  });

  it('applies custom className', () => {
    render(<Card className="custom-class">Custom Card</Card>);
    const card = screen.getByText('Custom Card').closest('div');
    expect(card).toHaveClass('custom-class');
  });

  it('applies transition animation classes', () => {
    render(<Card>Animated Card</Card>);
    const card = screen.getByText('Animated Card').closest('div');
    expect(card).toHaveClass('transition-all', 'duration-300');
  });

  it('renders with onClick handler', () => {
    const handleClick = jest.fn();
    render(<Card onClick={handleClick}>Clickable Card</Card>);
    const card = screen.getByText('Clickable Card').closest('div');
    
    card?.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
