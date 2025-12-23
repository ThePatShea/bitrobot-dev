/**
 * @fileoverview Earnings card component for displaying points and earnings data
 * @module components/dashboard/EarningsCard
 */

'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';

/**
 * Props for the EarningsCard component
 * @interface EarningsCardProps
 */
interface EarningsCardProps {
  /** Card title displayed at the top */
  title: string;
  /** Points value to display */
  points: number;
  /** Whether to format points with k/M suffix */
  formatPoints?: boolean;
  /** Click handler for the breakdown link */
  onBreakdownClick?: () => void;
}

/**
 * Format large numbers with k/M suffix for display
 *
 * @param {number} num - The number to format
 * @returns {string} Formatted string with suffix
 */
const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}k`;
  }
  return num.toString();
};

/**
 * Earnings card component with hover effects
 * Displays earnings data with an animated breakdown link
 *
 * @param {EarningsCardProps} props - Component props
 * @param {string} props.title - Card title
 * @param {number} props.points - Points value to display
 * @param {boolean} [props.formatPoints=false] - Whether to format with k/M suffix
 * @param {Function} [props.onBreakdownClick] - Breakdown link click handler
 * @returns {JSX.Element} An earnings card with points display
 *
 * @example
 * ```tsx
 * <EarningsCard
 *   title="Last Epoch"
 *   points={234}
 *   onBreakdownClick={() => {
 *     // Open earnings breakdown modal
 *   }}
 * />
 * ```
 */
export const EarningsCard: React.FC<EarningsCardProps> = ({
  title,
  points,
  formatPoints = false,
  onBreakdownClick,
}) => {
  const displayPoints = formatPoints ? formatNumber(points) : points;

  return (
    <Card
      className={`group flex h-40 flex-col justify-between border-0 p-3 shadow-[0_1px_8px_0_rgba(0,0,0,0.1)] sm:h-48.5 sm:p-4 ${
        onBreakdownClick ? 'cursor-pointer' : ''
      }`}
      onClick={onBreakdownClick}
    >
      {/* Header with Icon */}
      <div className="flex items-center justify-between">
        <span className="text-primary text-[10px] uppercase">{title}</span>
        <Icon name="points" size={24} className="text-warning" />
      </div>

      {/* Points Display and Breakdown */}
      <div className="mb-0.75">
        {/* Points Display */}
        <div className="mb-0.25">
          <div className="flex items-baseline gap-1.5">
            <span className="text-primary text-[24px] font-medium sm:text-[32px]">
              {displayPoints}
            </span>
            <span className="text-primary text-sm tracking-tight sm:text-base">points</span>
          </div>
        </div>

        {/* Breakdown Link with Hover Animation */}
        {onBreakdownClick && (
          <div className="text-primary flex items-center gap-1.5 text-sm font-medium tracking-tight">
            <span className="transition-opacity duration-200 group-hover:opacity-70 group-active:opacity-50">
              Breakdown
            </span>
            <Icon
              name="chevron-right"
              size={5}
              className="transition-transform duration-200 group-hover:translate-x-1.5 group-active:translate-x-2.5"
            />
          </div>
        )}
      </div>
    </Card>
  );
};
