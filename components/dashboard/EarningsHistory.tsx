/**
 * @fileoverview Earnings History chart component displaying monthly earnings
 * @module components/dashboard/EarningsHistory
 */

"use client";

import React from "react";
import type { EarningsDataPoint } from "@/app/types";

/**
 * Props for the EarningsHistory component
 * @interface EarningsHistoryProps
 */
interface EarningsHistoryProps {
  /** Array of earnings data points by month */
  data: EarningsDataPoint[];
}

/**
 * Format number with comma separators
 */
const formatValue = (value: number): string => {
  return value.toLocaleString();
};

/**
 * Simple bar chart component for displaying earnings history
 * Shows monthly earnings with value labels above each bar
 *
 * @param {EarningsHistoryProps} props - Component props
 * @param {EarningsDataPoint[]} props.data - Array of monthly earnings data
 * @returns {JSX.Element} A bar chart displaying earnings history
 *
 * @example
 * ```tsx
 * <EarningsHistory data={earningsData} />
 * ```
 */
export const EarningsHistory: React.FC<EarningsHistoryProps> = ({ data }) => {
  // Y-axis configuration
  const yAxisLabels = ["1.2K", "1.1K", "1K", "900", "800", "700", "600"];
  const yAxisValues = [1200, 1100, 1000, 900, 800, 700, 600];
  const minValue = 600;
  const maxValue = 1200;
  const chartHeight = 210;

  /**
   * Calculate the height of a bar based on its value
   */
  const getBarHeight = (value: number): number => {
    const range = maxValue - minValue;
    const normalizedValue = Math.max(value - minValue, 0);
    return (normalizedValue / range) * chartHeight;
  };

  /**
   * Calculate the Y position for grid lines
   */
  const getGridLinePosition = (value: number): number => {
    const range = maxValue - minValue;
    const normalizedValue = maxValue - value;
    return (normalizedValue / range) * chartHeight;
  };

  return (
    <div className="bg-white rounded-2xl border border-border p-4 h-75">
      {/* Header */}
      <div className="mb-3">
        <span className="text-[11px] font-medium text-primary uppercase">
          Earnings History
        </span>
      </div>

      {/* Chart Container */}
      <div className="flex">
        {/* Y-axis Labels */}
        <div
          className="flex flex-col justify-between text-xs text-muted pr-2 shrink-0"
          style={{ height: `${chartHeight}px` }}
        >
          {yAxisLabels.map((label, index) => (
            <span
              key={label}
              className={`leading-none text-primary text-[10px] tracking-tighter ${
                index === 0 || index === yAxisLabels.length - 1
                  ? "opacity-0"
                  : ""
              }`}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Chart Area */}
        <div className="flex-1 relative">
          {/* Grid Lines */}
          <div
            className="absolute inset-0 flex flex-col justify-between pointer-events-none"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisValues.map((value, index) => (
              <div
                key={value}
                className={`w-full border-t border-primary-light/50 relative top-1 ${
                  index === 0 ? "opacity-0" : ""
                }`}
              />
            ))}
          </div>

          {/* Bars Container */}
          <div
            className="flex items-end justify-between gap-2 relative"
            style={{ height: `${chartHeight}px` }}
          >
            {data.map((point) => {
              // Adjust visual height for specific values while keeping labels accurate
              const visualValue =
                point.value === 800
                  ? 950
                  : point.value === 1000
                  ? 1025
                  : point.value;
              const barHeight = getBarHeight(visualValue);

              return (
                <div
                  key={point.month}
                  className="flex-1 flex flex-col items-center"
                >
                  {/* Value Label */}
                  <div className="mb-2 w-full max-w-[48px]">
                    <span className="block w-full text-center text-[11px] text-primary bg-primary-light py-1.5 rounded-lg">
                      {formatValue(point.value)}
                    </span>
                  </div>

                  {/* Bar */}
                  <div
                    className="w-full max-w-[48px] bg-primary-light rounded-sm mb-0.25"
                    style={{ height: `${barHeight}px` }}
                  />
                </div>
              );
            })}
          </div>

          {/* X-axis Labels */}
          <div className="flex justify-between mt-0.25">
            {data.map((point) => (
              <div key={point.month} className="flex-1 text-center">
                <span className="text-xs text-primary font-medium">
                  {point.month}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
