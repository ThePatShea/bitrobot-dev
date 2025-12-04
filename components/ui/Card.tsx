/**
 * @fileoverview Card component for containing content with consistent styling
 * @module components/ui/Card
 */

import React from 'react';

/**
 * Props for the Card component
 * @interface CardProps
 */
interface CardProps {
  /** Content to be rendered inside the card */
  children: React.ReactNode;
  /** Optional additional CSS classes */
  className?: string;
  /** Whether to show hover effects */
  hoverable?: boolean;
  /** Optional click handler */
  onClick?: () => void;
}

/**
 * Reusable Card component with optional hover effects
 * Provides a consistent container style for content blocks
 *
 * @param {CardProps} props - Component props
 * @param {React.ReactNode} props.children - Content to render inside the card
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {boolean} [props.hoverable=false] - Whether to show hover effects
 * @param {Function} [props.onClick] - Click handler callback
 * @returns {JSX.Element} A styled card container
 *
 * @example
 * ```tsx
 * <Card hoverable onClick={handleClick}>
 *   <h3>Card Title</h3>
 *   <p>Card content</p>
 * </Card>
 * ```
 */
export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverable = false,
  onClick 
}) => {
  const baseStyles = 'bg-white rounded-xl border border-border transition-all duration-200';
  const hoverStyles = hoverable ? 'hover:shadow-lg hover:border-primary/20 cursor-pointer' : '';
  
  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
