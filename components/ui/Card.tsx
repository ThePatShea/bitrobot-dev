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
  /** Optional mouse enter handler */
  onMouseEnter?: () => void;
  /** Optional mouse leave handler */
  onMouseLeave?: () => void;
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
  onClick,
  onMouseEnter,
  onMouseLeave
}) => {
  const baseStyles = 'bg-light-bg rounded-2xl border border-border transition-all duration-200';
  const hoverStyles = hoverable ? 'hover:shadow-lg hover:border-primary/20 active:shadow-md active:border-primary/30 cursor-pointer' : '';
  const focusStyles = hoverable ? 'outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2' : '';
  
  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${focusStyles} ${className}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      tabIndex={hoverable ? 0 : undefined}
      role={hoverable ? "button" : undefined}
      onKeyDown={hoverable && onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      {children}
    </div>
  );
};
