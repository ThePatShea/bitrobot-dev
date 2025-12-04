/**
 * Earnings card component for displaying points and earnings data
 */

'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';

/**
 * EarningsCard component props
 */
interface EarningsCardProps {
  /** Card title */
  title: string;
  /** Points value to display */
  points: number;
  /** Whether to show points suffix (k, M, etc.) */
  formatPoints?: boolean;
  /** Click handler for breakdown link */
  onBreakdownClick?: () => void;
}

/**
 * Format large numbers with k/M suffix
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
 * Shows earnings data with animated hover state
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
  onBreakdownClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const displayPoints = formatPoints ? formatNumber(points) : points;

  return (
    <Card 
      className="p-6 hover:shadow-lg transition-all duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header with Icon */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
          {title}
        </span>
        <div className="w-10 h-10 rounded-full bg-warning-bg flex items-center justify-center">
          <Icon name="points" size={20} />
        </div>
      </div>

      {/* Points Display */}
      <div className="mb-4">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-primary">
            {displayPoints}
          </span>
          <span className="text-sm text-muted">points</span>
        </div>
      </div>

      {/* Breakdown Link with Hover Animation */}
      {onBreakdownClick && (
        <button
          onClick={onBreakdownClick}
          className="group flex items-center gap-2 text-sm text-primary hover:text-primary-hover transition-colors duration-200"
        >
          <span className="font-medium">Breakdown</span>
          <Icon 
            name="chevron-right" 
            size={16} 
            className={`transition-transform duration-200 ${isHovered ? 'translate-x-1' : ''}`}
          />
        </button>
      )}
    </Card>
  );
};
