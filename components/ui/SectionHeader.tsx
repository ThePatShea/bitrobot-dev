/**
 * @fileoverview Reusable section header component for consistent section titling
 * @module components/ui/SectionHeader
 */

import React from "react";

/**
 * Props for the SectionHeader component
 * @interface SectionHeaderProps
 */
interface SectionHeaderProps {
  /** The title text to display in the header */
  title: string;
  /** Optional additional CSS classes */
  className?: string;
}

/**
 * Section header component for consistent section labeling across the app
 * Displays a styled pill/badge with the section title
 *
 * @param {SectionHeaderProps} props - Component props
 * @param {string} props.title - The title text to display
 * @param {string} [props.className] - Optional additional CSS classes
 * @returns {JSX.Element} A styled section header badge
 *
 * @example
 * ```tsx
 * <SectionHeader title="Resources" />
 * <SectionHeader title="Discover" />
 * ```
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  className = "",
}) => {
  return (
    <span
      className={`inline-block px-3 py-1.5 text-[11px] text-primary uppercase tracking-wider bg-primary-light rounded-lg shadow-[0_1px_8px_0_rgba(0,0,0,0.1)] ${className}`}
    >
      {title}
    </span>
  );
};
