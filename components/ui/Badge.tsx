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
    default: 'bg-[#f3f4f6] text-[#6b7280]',
    success: 'bg-[#dcfce7] text-[#16a34a]',
    warning: 'bg-[#fef9c3] text-[#ca8a04]',
    info: 'bg-[#dbeafe] text-[#2563eb]'
  };
  
  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

