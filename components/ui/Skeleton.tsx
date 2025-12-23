/**
 * @fileoverview Skeleton loading components for displaying placeholder content
 * @module components/ui/Skeleton
 */

import React from "react";

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
export const Skeleton: React.FC<SkeletonProps> = ({
  className = "",
  width,
  height,
  style,
}) => {
  return (
    <div
      className={`animate-pulse bg-gradient-to-r from-primary-light via-primary-light/50 to-primary-light bg-[length:200%_100%] rounded ${className}`}
      style={{ width, height, ...style }}
    />
  );
};

/**
 * Skeleton for the SectionHeader badge component
 */
export const SectionHeaderSkeleton: React.FC<{ width?: string }> = ({
  width = "80px",
}) => {
  return <Skeleton className="h-7 rounded-lg" width={width} />;
};

/**
 * Skeleton for the EarningsCard component
 */
export const EarningsCardSkeleton: React.FC = () => {
  return (
    <div className="bg-light-bg rounded-2xl p-3 sm:p-4 h-40 sm:h-48.5 shadow-[0_1px_8px_0_rgba(0,0,0,0.1)] flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-6 w-6 rounded-full" />
      </div>

      {/* Content */}
      <div className="mb-0.75">
        <div className="flex items-baseline gap-1.5 mb-2">
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
    <div className="bg-primary-light/50 min-h-[90px] lg:h-22.5 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-2">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-5 w-36 bg-primary-light" />
        <Skeleton className="h-4 w-56 bg-primary-light" />
      </div>
      <Skeleton className="h-8 w-32 bg-primary-light rounded-lg" />
    </div>
  );
};

/**
 * Skeleton for the EarningsHistory chart
 */
export const EarningsHistorySkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-border p-3 sm:p-4 h-75 overflow-hidden">
      {/* Header */}
      <div className="mb-3">
        <Skeleton className="h-4 w-28" />
      </div>

      {/* Chart area */}
      <div className="flex gap-2">
        {/* Y-axis */}
        <div className="flex flex-col justify-between h-[210px] pr-2">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-3 w-8" />
          ))}
        </div>

        {/* Bars - using static heights to avoid hydration mismatch */}
        <div className="flex-1 flex items-end justify-between gap-2 h-[210px]">
          {[120, 100, 140, 110, 130, 95, 125].map((height, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <Skeleton className="h-6 w-full max-w-[48px] rounded-lg" />
              <Skeleton
                className="w-full max-w-[48px] rounded-t-sm"
                height={`${height}px`}
              />
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
              <th className="py-2.25 px-2 sm:px-4 text-left w-16 sm:w-34">
                <Skeleton className="h-4 w-10" />
              </th>
              <th className="py-2.25 px-2 sm:px-4 text-left min-w-[140px] sm:w-56">
                <Skeleton className="h-4 w-12" />
              </th>
              <th className="py-2.25 px-2 sm:px-4 text-left min-w-[100px] sm:w-56">
                <Skeleton className="h-4 w-16" />
              </th>
              <th className="py-2.25 px-2 sm:px-4 text-left min-w-[80px] sm:w-56">
                <Skeleton className="h-4 w-14" />
              </th>
              <th className="py-2.25 px-2 sm:px-4 text-left min-w-[70px]">
                <Skeleton className="h-4 w-10" />
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(11)].map((_, i) => (
              <tr key={i} className="border-b border-border">
                <td className="py-2.5 px-2 sm:px-4">
                  <Skeleton className="h-4 w-6" />
                </td>
                <td className="py-2.5 px-2 sm:px-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Skeleton className="h-5 w-5 rounded-full" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </td>
                <td className="py-2.5 px-2 sm:px-4">
                  <Skeleton className="h-4 w-16" />
                </td>
                <td className="py-2.5 px-2 sm:px-4">
                  <Skeleton className="h-4 w-12" />
                </td>
                <td className="py-2.5 px-2 sm:px-4">
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
        <Skeleton className="h-4 w-20 mb-3" />
        <Skeleton className="h-7 w-64" />
      </div>

      {/* Carousel */}
      <div className="flex items-center gap-2 sm:gap-[25px]">
        <Skeleton className="h-4 w-2 flex-shrink-0" />
        <div className="flex-1 h-[220px] sm:h-[246px] rounded-2xl border border-border overflow-hidden">
          <div className="p-4 h-full flex flex-col justify-end">
            <Skeleton className="h-8 w-8 rounded mb-4" />
            <Skeleton className="h-5 w-24 mb-2" />
            <Skeleton className="h-4 w-64 mb-4" />
            <div className="flex gap-2">
              <Skeleton className="h-8 w-28 rounded-lg" />
              <Skeleton className="h-8 w-24 rounded-lg" />
            </div>
          </div>
        </div>
        <Skeleton className="h-4 w-2 flex-shrink-0" />
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-1 mt-4">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="w-3 h-1 rounded-full" />
        ))}
      </div>
    </section>
  );
};
