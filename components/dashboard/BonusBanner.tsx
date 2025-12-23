/**
 * @fileoverview Bonus banner component for promotional messages
 * @module components/dashboard/BonusBanner
 */

"use client";

import React from "react";
import { Button } from "@/components/ui/Button";

/**
 * Props for the BonusBanner component
 * @interface BonusBannerProps
 */
interface BonusBannerProps {
  /** Banner title text */
  title: string;
  /** Banner description text */
  description: string;
  /** Call-to-action button text */
  ctaText: string;
  /** Callback function when CTA button is clicked */
  onCtaClick: () => void;
}

/**
 * Promotional banner component for displaying bonus opportunities
 * Features a title, description, and call-to-action button
 *
 * @param {BonusBannerProps} props - Component props
 * @param {string} props.title - Banner title
 * @param {string} props.description - Banner description
 * @param {string} props.ctaText - CTA button text
 * @param {Function} props.onCtaClick - CTA click handler
 * @returns {JSX.Element} A promotional banner with CTA
 *
 * @example
 * ```tsx
 * <BonusBanner
 *   title="Bonuses available!"
 *   description="The more you participate, the more you earn."
 *   ctaText="SEE OPPORTUNITIES"
 *   onCtaClick={() => {
 *     // Navigate to bonus opportunities
 *   }}
 * />
 * ```
 */
export const BonusBanner: React.FC<BonusBannerProps> = ({
  title,
  description,
  ctaText,
  onCtaClick,
}) => {
  return (
    <div className="bg-primary-light min-h-[90px] lg:h-22.5 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-2">
      <div className="flex flex-col">
        <h3 className="font-medium text-primary">{title}</h3>
        <p className="text-sm text-primary">{description}</p>
      </div>
      <Button
        variant="primary"
        onClick={onCtaClick}
        className="flex-shrink-0 w-full sm:w-auto"
      >
        {ctaText}
      </Button>
    </div>
  );
};
