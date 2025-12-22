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
  const yAxisLabels = ["1.1K", "1K", "900", "800", "700"];
  const yAxisValues = [1100, 1000, 900, 800, 700];
  const minValue = 700;
  const maxValue = 1100;
  const chartHeight = 240;

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
    <div className="bg-white rounded-2xl border border-border p-6 h-full">
      {/* Header */}
      <div className="mb-6">
        <span className="text-[10px] font-medium text-primary uppercase tracking-wide">
          Earnings History
        </span>
      </div>

      {/* Chart Container */}
      <div className="flex">
        {/* Y-axis Labels */}
        <div
          className="flex flex-col justify-between text-xs text-muted pr-3 shrink-0"
          style={{ height: `${chartHeight}px` }}
        >
          {yAxisLabels.map((label) => (
            <span key={label} className="leading-none">
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
            {yAxisValues.map((value) => (
              <div
                key={value}
                className="w-full border-t border-border"
                style={{ top: `${getGridLinePosition(value)}px` }}
              />
            ))}
          </div>

          {/* Bars Container */}
          <div
            className="flex items-end justify-between gap-2 relative"
            style={{ height: `${chartHeight}px` }}
          >
            {data.map((point) => {
              const barHeight = getBarHeight(point.value);

              return (
                <div
                  key={point.month}
                  className="flex-1 flex flex-col items-center"
                >
                  {/* Value Label */}
                  <div className="mb-1">
                    <span className="text-xs text-primary bg-primary-light px-2 py-0.5 rounded-md">
                      {formatValue(point.value)}
                    </span>
                  </div>

                  {/* Bar */}
                  <div
                    className="w-full max-w-[48px] bg-primary-light rounded-lg"
                    style={{ height: `${barHeight}px` }}
                  />
                </div>
              );
            })}
          </div>

          {/* X-axis Labels */}
          <div className="flex justify-between mt-3">
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
