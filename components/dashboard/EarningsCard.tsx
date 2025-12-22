/**
 * @fileoverview Earnings card component for displaying points and earnings data
 * @module components/dashboard/EarningsCard
 */

"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";

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
 *   onBreakdownClick={() => console.log('Breakdown clicked')}
 * />
 * ```
 */
export const EarningsCard: React.FC<EarningsCardProps> = ({
  title,
  points,
  formatPoints = false,
  onBreakdownClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const displayPoints = formatPoints ? formatNumber(points) : points;

  return (
    <Card
      className="p-4 flex flex-col justify-between h-48.5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header with Icon */}
      <div className="flex items-start justify-between">
        <span className="text-[10px] text-primary uppercase">{title}</span>
        <Icon name="points" size={24} className="text-warning" />
      </div>

      {/* Points Display and Breakdown */}
      <div>
        {/* Points Display */}
        <div className="mb-2">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-light text-primary">
              {displayPoints}
            </span>
            <span className="text-xl text-primary">points</span>
          </div>
        </div>

        {/* Breakdown Link with Hover Animation */}
        {onBreakdownClick && (
          <button
            onClick={onBreakdownClick}
            className="group flex items-center gap-1 text-base text-primary font-semibold hover:text-primary-hover transition-colors duration-200 cursor-pointer"
          >
            <span>Breakdown</span>
            <Icon
              name="chevron-right"
              size={16}
              className={`transition-transform duration-200 ${
                isHovered ? "translate-x-1" : ""
              }`}
            />
          </button>
        )}
      </div>
    </Card>
  );
};
