/**
 * Badge component for displaying status indicators and labels
 */

import React from 'react';

/**
 * Badge component props
 */
interface BadgeProps {
  /** Content to display in the badge */
  children: React.ReactNode;
  /** Visual variant of the badge */
  variant?: 'default' | 'success' | 'warning' | 'info';
  /** Optional additional CSS classes */
  className?: string;
}

/**
 * Reusable Badge component for status indicators
 * 
 * @example
 * ```tsx
 * <Badge variant="success">Online</Badge>
 * <Badge variant="warning">Pending</Badge>
 * ```
 */
export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default',
  className = '' 
}) => {
  const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
  
  const variants = {
    default: 'bg-light-bg text-muted',
    success: 'bg-success-bg text-success-text',
    warning: 'bg-warning-bg-light text-warning-text',
    info: 'bg-info-bg text-info-text'
  };
  
  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
