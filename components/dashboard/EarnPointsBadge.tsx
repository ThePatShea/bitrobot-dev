/**
 * @fileoverview Earn Points badge component for promotional badges
 * @module components/dashboard/EarnPointsBadge
 */

'use client';

import React from 'react';
import { Icon } from '@/components/ui/Icon';

/**
 * Props for the EarnPointsBadge component
 * @interface EarnPointsBadgeProps
 */
interface EarnPointsBadgeProps {
  /** Number of points available to earn */
  points: number;
  /** Optional click handler for the badge */
  onClick?: () => void;
}

/**
 * Floating badge component showing available points to earn
 * Displays a clickable pill with points icon and text
 *
 * @param {EarnPointsBadgeProps} props - Component props
 * @param {number} props.points - Number of points to display
 * @param {Function} [props.onClick] - Optional click handler
 * @returns {JSX.Element} A floating points badge button
 *
 * @example
 * ```tsx
 * <EarnPointsBadge points={20} onClick={() => console.log('Badge clicked')} />
 * ```
 */
export const EarnPointsBadge: React.FC<EarnPointsBadgeProps> = ({ 
  points,
  onClick 
}) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 px-3 py-2 bg-warning-bg text-warning-text rounded-full hover:bg-warning-bg-hover transition-colors duration-200 border border-warning-border"
    >
      <Icon name="points" size={16} />
      <span className="text-xs font-semibold uppercase">
        Earn {points} Pts
      </span>
    </button>
  );
};
