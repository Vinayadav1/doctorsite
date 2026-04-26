import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from './Input';

describe('Input Component', () => {
  it('renders with basic props', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Input label="Email" placeholder="Enter email" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('renders default variant by default', () => {
    render(<Input placeholder="Default" />);
    const input = screen.getByPlaceholderText('Default');
    expect(input).toHaveClass('bg-white', 'border-neutral-gray100');
  });

  it('renders filled variant', () => {
    render(<Input placeholder="Filled" variant="filled" />);
    const input = screen.getByPlaceholderText('Filled');
    expect(input).toHaveClass('bg-neutral-gray50', 'border-transparent');
  });

  it('renders small size', () => {
    render(<Input placeholder="Small" inputSize="sm" />);
    const input = screen.getByPlaceholderText('Small');
    expect(input).toHaveClass('px-3', 'py-2', 'text-sm');
  });

  it('renders medium size by default', () => {
    render(<Input placeholder="Medium" />);
    const input = screen.getByPlaceholderText('Medium');
    expect(input).toHaveClass('px-4', 'py-3', 'text-base');
  });

  it('renders large size', () => {
    render(<Input placeholder="Large" inputSize="lg" />);
    const input = screen.getByPlaceholderText('Large');
    expect(input).toHaveClass('px-5', 'py-4', 'text-lg');
  });

  it('displays error message when error prop is provided', () => {
    render(<Input label="Email" error="Email is required" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Email is required');
  });

  it('applies error styles when error is present', () => {
    render(<Input placeholder="Error input" error="Invalid input" />);
    const input = screen.getByPlaceholderText('Error input');
    expect(input).toHaveClass('border-red-500', 'focus:ring-red-500');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('displays helper text when provided', () => {
    render(<Input label="Password" helperText="Must be at least 8 characters" />);
    expect(screen.getByText('Must be at least 8 characters')).toBeInTheDocument();
  });

  it('does not display helper text when error is present', () => {
    render(
      <Input
        label="Email"
        helperText="Enter your email"
        error="Email is required"
      />
    );
    expect(screen.queryByText('Enter your email')).not.toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
  });

  it('applies fullWidth class when fullWidth is true', () => {
    render(<Input placeholder="Full width" fullWidth />);
    const input = screen.getByPlaceholderText('Full width');
    expect(input).toHaveClass('w-full');
  });

  it('applies custom className', () => {
    render(<Input placeholder="Custom" className="custom-class" />);
    const input = screen.getByPlaceholderText('Custom');
    expect(input).toHaveClass('custom-class');
  });

  it('applies focus styles', () => {
    render(<Input placeholder="Focus test" />);
    const input = screen.getByPlaceholderText('Focus test');
    expect(input).toHaveClass('focus:ring-primary-main', 'focus:border-primary-main');
  });

  it('applies hover styles', () => {
    render(<Input placeholder="Hover test" />);
    const input = screen.getByPlaceholderText('Hover test');
    expect(input).toHaveClass('hover:border-primary-light');
  });

  it('applies rounded corners', () => {
    render(<Input placeholder="Rounded" />);
    const input = screen.getByPlaceholderText('Rounded');
    expect(input).toHaveClass('rounded-lg');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} placeholder="Ref test" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('accepts standard input attributes', () => {
    render(
      <Input
        placeholder="Standard attrs"
        type="email"
        name="email"
        required
        disabled
      />
    );
    const input = screen.getByPlaceholderText('Standard attrs');
    expect(input).toHaveAttribute('type', 'email');
    expect(input).toHaveAttribute('name', 'email');
    expect(input).toBeRequired();
    expect(input).toBeDisabled();
  });

  it('associates label with input using htmlFor', () => {
    render(<Input id="test-input" label="Test Label" />);
    const label = screen.getByText('Test Label');
    const input = screen.getByLabelText('Test Label');
    expect(label).toHaveAttribute('for', 'test-input');
    expect(input).toHaveAttribute('id', 'test-input');
  });

  it('generates unique ID when not provided', () => {
    const { container } = render(<Input label="Auto ID" />);
    const input = container.querySelector('input');
    expect(input).toHaveAttribute('id');
    expect(input?.id).toBeTruthy();
  });

  it('links error message with aria-describedby', () => {
    render(<Input id="error-input" error="Error message" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-describedby', 'error-input-error');
  });

  it('links helper text with aria-describedby', () => {
    render(<Input id="helper-input" helperText="Helper text" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-describedby', 'helper-input-helper');
  });

  it('handles user input correctly', () => {
    render(<Input placeholder="Type here" />);
    const input = screen.getByPlaceholderText('Type here') as HTMLInputElement;
    
    fireEvent.change(input, { target: { value: 'Hello World' } });
    expect(input.value).toBe('Hello World');
  });
});
