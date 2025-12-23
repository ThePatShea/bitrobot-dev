/**
 * @fileoverview Badge component for displaying status indicators and labels
 * @module components/ui/Badge
 */

import React from 'react';

/**
 * Props for the Badge component
 * @interface BadgeProps
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
 * Reusable Badge component for status indicators and labels
 * Provides colored pill-style badges for various states
 *
 * @param {BadgeProps} props - Component props
 * @param {React.ReactNode} props.children - Content to display in the badge
 * @param {string} [props.variant='default'] - Visual variant of the badge
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element} A styled badge element
 *
 * @example
 * ```tsx
 * <Badge variant="success">Online</Badge>
 * <Badge variant="warning">Pending</Badge>
 * ```
 */
export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className = '' }) => {
  const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';

  const variants = {
    default: 'bg-light-bg text-muted',
    success: 'bg-success-bg text-success-text',
    warning: 'bg-warning-bg-light text-warning-text',
    info: 'bg-info-bg text-info-text',
  };

  return <span className={`${baseStyles} ${variants[variant]} ${className}`}>{children}</span>;
};
