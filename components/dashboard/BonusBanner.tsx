/**
 * Bonus banner component for promotional messages
 */

'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';

/**
 * BonusBanner component props
 */
interface BonusBannerProps {
  /** Banner title */
  title: string;
  /** Banner description */
  description: string;
  /** Call-to-action button text */
  ctaText: string;
  /** CTA click handler */
  onCtaClick: () => void;
}

/**
 * Promotional banner component for bonuses and opportunities
 * 
 * @example
 * ```tsx
 * <BonusBanner
 *   title="Bonuses available!"
 *   description="The more you participate, the more you earn."
 *   ctaText="SEE OPPORTUNITIES"
 *   onCtaClick={() => console.log('CTA clicked')}
 * />
 * ```
 */
export const BonusBanner: React.FC<BonusBannerProps> = ({
  title,
  description,
  ctaText,
  onCtaClick
}) => {
  return (
    <div className="bg-primary-light-hover rounded-xl p-6 flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold text-primary mb-1">
          {title}
        </h3>
        <p className="text-sm text-primary/80">
          {description}
        </p>
      </div>
      <Button
        variant="primary"
        onClick={onCtaClick}
      >
        {ctaText}
      </Button>
    </div>
  );
};
