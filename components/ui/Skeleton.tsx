/**
 * @fileoverview Skeleton loading components for displaying placeholder content
 * @module components/ui/Skeleton
 */

import React from 'react';

/**
 * Props for the base Skeleton component
 */
interface SkeletonProps {
  /** Additional CSS classes */
  className?: string;
  /** Width of the skeleton (CSS value) */
  width?: string;
  /** Height of the skeleton (CSS value) */
  height?: string;
  /** Optional inline styles */
  style?: React.CSSProperties;
}

/**
 * Base skeleton component with shimmer animation
 * Used as a placeholder while content is loading
 */
export const Skeleton: React.FC<SkeletonProps> = ({ className = '', width, height, style }) => {
  return (
    <div
      className={`from-primary-light via-primary-light/50 to-primary-light animate-pulse rounded bg-gradient-to-r bg-[length:200%_100%] ${className}`}
      style={{ width, height, ...style }}
    />
  );
};

/**
 * Skeleton for the SectionHeader badge component
 */
export const SectionHeaderSkeleton: React.FC<{ width?: string }> = ({ width = '80px' }) => {
  return <Skeleton className="h-7 rounded-lg" width={width} />;
};

/**
 * Skeleton for the EarningsCard component
 */
export const EarningsCardSkeleton: React.FC = () => {
  return (
    <div className="bg-light-bg flex h-40 flex-col justify-between rounded-2xl p-3 shadow-[0_1px_8px_0_rgba(0,0,0,0.1)] sm:h-48.5 sm:p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-6 w-6 rounded-full" />
      </div>

      {/* Content */}
      <div className="mb-0.75">
        <div className="mb-2 flex items-baseline gap-1.5">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-4 w-12" />
        </div>
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
  );
};

/**
 * Skeleton for the BonusBanner component
 */
export const BonusBannerSkeleton: React.FC = () => {
  return (
    <div className="bg-primary-light/50 flex min-h-[90px] flex-col items-start justify-between gap-3 rounded-2xl p-4 sm:flex-row sm:items-center sm:gap-2 lg:h-22.5">
      <div className="flex flex-col gap-2">
        <Skeleton className="bg-primary-light h-5 w-36" />
        <Skeleton className="bg-primary-light h-4 w-56" />
      </div>
      <Skeleton className="bg-primary-light h-8 w-32 rounded-lg" />
    </div>
  );
};

/**
 * Skeleton for the EarningsHistory chart
 */
export const EarningsHistorySkeleton: React.FC = () => {
  return (
    <div className="border-border h-75 overflow-hidden rounded-2xl border bg-white p-3 sm:p-4">
      {/* Header */}
      <div className="mb-3">
        <Skeleton className="h-4 w-28" />
      </div>

      {/* Chart area */}
      <div className="flex gap-2">
        {/* Y-axis */}
        <div className="flex h-[210px] flex-col justify-between pr-2">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-3 w-8" />
          ))}
        </div>

        {/* Bars - using static heights to avoid hydration mismatch */}
        <div className="flex h-[210px] flex-1 items-end justify-between gap-2">
          {[120, 100, 140, 110, 130, 95, 125].map((height, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-2">
              <Skeleton className="h-6 w-full max-w-[48px] rounded-lg" />
              <Skeleton className="w-full max-w-[48px] rounded-t-sm" height={`${height}px`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * Skeleton for the Leaderboard table
 */
export const LeaderboardSkeleton: React.FC = () => {
  return (
    <section className="mt-8">
      {/* Header */}
      <div className="mb-1.25">
        <Skeleton className="h-4 w-24" />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="w-16 px-2 py-2.25 text-left sm:w-34 sm:px-4">
                <Skeleton className="h-4 w-10" />
              </th>
              <th className="min-w-[140px] px-2 py-2.25 text-left sm:w-56 sm:px-4">
                <Skeleton className="h-4 w-12" />
              </th>
              <th className="min-w-[100px] px-2 py-2.25 text-left sm:w-56 sm:px-4">
                <Skeleton className="h-4 w-16" />
              </th>
              <th className="min-w-[80px] px-2 py-2.25 text-left sm:w-56 sm:px-4">
                <Skeleton className="h-4 w-14" />
              </th>
              <th className="min-w-[70px] px-2 py-2.25 text-left sm:px-4">
                <Skeleton className="h-4 w-10" />
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(11)].map((_, i) => (
              <tr key={i} className="border-border border-b">
                <td className="px-2 py-2.5 sm:px-4">
                  <Skeleton className="h-4 w-6" />
                </td>
                <td className="px-2 py-2.5 sm:px-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Skeleton className="h-5 w-5 rounded-full" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </td>
                <td className="px-2 py-2.5 sm:px-4">
                  <Skeleton className="h-4 w-16" />
                </td>
                <td className="px-2 py-2.5 sm:px-4">
                  <Skeleton className="h-4 w-12" />
                </td>
                <td className="px-2 py-2.5 sm:px-4">
                  <Skeleton className="h-4 w-8" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

/**
 * Skeleton for the DiscoverCarousel
 */
export const CarouselSkeleton: React.FC = () => {
  return (
    <section className="mb-8">
      {/* Header */}
      <div className="mb-4">
        <Skeleton className="mb-3 h-4 w-20" />
        <Skeleton className="h-7 w-64" />
      </div>

      {/* Carousel */}
      <div className="flex items-center gap-2 sm:gap-[25px]">
        <Skeleton className="h-4 w-2 flex-shrink-0" />
        <div className="border-border h-[220px] flex-1 overflow-hidden rounded-2xl border sm:h-[246px]">
          <div className="flex h-full flex-col justify-end p-4">
            <Skeleton className="mb-4 h-8 w-8 rounded" />
            <Skeleton className="mb-2 h-5 w-24" />
            <Skeleton className="mb-4 h-4 w-64" />
            <div className="flex gap-2">
              <Skeleton className="h-8 w-28 rounded-lg" />
              <Skeleton className="h-8 w-24 rounded-lg" />
            </div>
          </div>
        </div>
        <Skeleton className="h-4 w-2 flex-shrink-0" />
      </div>

      {/* Indicators */}
      <div className="mt-4 flex justify-center gap-1">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-1 w-3 rounded-full" />
        ))}
      </div>
    </section>
  );
};
