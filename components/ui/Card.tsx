/**
 * Card component for containing content with consistent styling
 */

import React from 'react';

/**
 * Card component props
 */
interface CardProps {
  /** Content to be rendered inside the card */
  children: React.ReactNode;
  /** Optional additional CSS classes */
  className?: string;
  /** Optional hover effect */
  hoverable?: boolean;
  /** Optional click handler */
  onClick?: () => void;
}

/**
 * Reusable Card component with optional hover effects
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
