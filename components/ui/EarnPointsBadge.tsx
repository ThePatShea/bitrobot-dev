/**
 * @fileoverview Earn Points badge component for promotional badges
 * @module components/ui/EarnPointsBadge
 */

import React from "react";
import { Icon } from "@/components/ui/Icon";

/**
 * Props for the EarnPointsBadge component
 * @interface EarnPointsBadgeProps
 */
interface EarnPointsBadgeProps {
  /** Optional number of points to display (e.g., "Earn 20 Pts" vs "Earn Pts") */
  points?: number;
  /** Optional additional CSS classes */
  className?: string;
}

/**
 * Static badge component showing earn points information
 * Displays a styled pill with points icon and text
 *
 * @param {EarnPointsBadgeProps} props - Component props
 * @param {number} [props.points] - Optional number of points to display
 * @param {string} [props.className] - Optional additional CSS classes
 * @returns {JSX.Element} A styled points badge
 *
 * @example
 * ```tsx
 * // Without points number
 * <EarnPointsBadge />
 *
 * // With points number
 * <EarnPointsBadge points={20} />
 * ```
 */
export const EarnPointsBadge: React.FC<EarnPointsBadgeProps> = ({
  points,
  className = "",
}) => {
  const label = points !== undefined ? `Earn ${points} Pts` : "Earn Pts";

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2.5 bg-warning-bg-soft text-warning-text-bright rounded-lg text-[10px] uppercase shadow-[0_1px_8px_0_rgba(0,0,0,0.08)] ${className}`}
    >
      <Icon name="points" size={16} />
      <span>{label}</span>
    </div>
  );
};
