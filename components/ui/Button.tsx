/**
 * Button component with multiple variants and sizes
 * Provides consistent styling across the application
 */

import React from 'react';

/**
 * Button component props
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant of the button */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /** Size of the button */
  size?: 'sm' | 'md' | 'lg';
  /** Optional icon to display before the text */
  icon?: React.ReactNode;
  /** Optional icon to display after the text */
  iconAfter?: React.ReactNode;
  /** Full width button */
  fullWidth?: boolean;
}

/**
 * Reusable Button component with multiple variants
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="md">Click me</Button>
 * <Button variant="outline" icon={<Icon />}>With Icon</Button>
 * ```
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconAfter,
  fullWidth = false,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-[#6366f1] text-white hover:bg-[#4f46e5] active:bg-[#4338ca]',
    secondary: 'bg-[#f5f3ff] text-[#6366f1] hover:bg-[#ede9fe] active:bg-[#ddd6fe]',
    outline: 'border border-[#6366f1] text-[#6366f1] hover:bg-[#f5f3ff] active:bg-[#ede9fe]',
    ghost: 'text-[#6b7280] hover:bg-[#f3f4f6] active:bg-[#e5e7eb]'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    md: 'px-4 py-2 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2'
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {iconAfter && <span className="flex-shrink-0">{iconAfter}</span>}
    </button>
  );
};

