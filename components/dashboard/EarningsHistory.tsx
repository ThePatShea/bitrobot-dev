/**
 * Earnings History chart component
 * Displays a bar chart of monthly earnings
 */

'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import type { EarningsDataPoint } from '@/app/types';

/**
 * EarningsHistory component props
 */
interface EarningsHistoryProps {
  /** Array of earnings data points by month */
  data: EarningsDataPoint[];
}

/**
 * Simple bar chart component for earnings history
 * 
 * @example
 * ```tsx
 * <EarningsHistory data={earningsData} />
 * ```
 */
export const EarningsHistory: React.FC<EarningsHistoryProps> = ({ data }) => {
  // Calculate the maximum value for scaling
  const maxValue = Math.max(...data.map(d => d.value));
  const chartHeight = 200; // pixels
  
  return (
    <Card className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-semibold text-[#6366f1] uppercase tracking-wider">
          Earnings History
        </span>
        <div className="w-10 h-10 rounded-full bg-[#fef3c7] flex items-center justify-center">
          <Icon name="points" size={20} />
        </div>
      </div>

      {/* Chart Container */}
      <div className="relative">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-[#6b7280] pr-2">
          <span>1.1K</span>
          <span>1K</span>
          <span>900</span>
          <span>800</span>
          <span>700</span>
        </div>

        {/* Chart area */}
        <div className="ml-10">
          <div className="flex items-end justify-between gap-2 h-[200px] pb-8">
            {data.map((point, index) => {
              // Calculate bar height as percentage of max value
              const heightPercentage = (point.value / maxValue) * 100;
              const barHeight = (chartHeight * heightPercentage) / 100;
              
              return (
                <div
                  key={point.month}
                  className="flex-1 flex flex-col items-center gap-2 group"
                >
                  {/* Bar */}
                  <div className="w-full flex items-end justify-center relative">
                    <div
                      className="w-full max-w-[40px] bg-[#e9d5ff] rounded-t-lg transition-all duration-300 hover:bg-[#c084fc] group-hover:shadow-lg relative"
                      style={{ height: `${barHeight}px` }}
                    >
                      {/* Tooltip on hover */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#171717] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        {point.value}
                      </div>
                    </div>
                  </div>
                  
                  {/* Month label */}
                  <span className="text-xs text-[#6366f1] font-medium">
                    {point.month}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
};

