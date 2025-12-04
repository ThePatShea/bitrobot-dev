/**
 * Leaderboard component displaying top users
 */

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import type { LeaderboardEntry } from '@/app/types';

/**
 * Leaderboard component props
 */
interface LeaderboardProps {
  /** Array of leaderboard entries */
  entries: LeaderboardEntry[];
  /** Current user's ID to highlight their row */
  currentUserId?: string;
}

/**
 * Leaderboard table row component with hover effects
 */
const LeaderboardRow: React.FC<{ 
  entry: LeaderboardEntry; 
  isCurrentUser: boolean;
}> = ({ entry, isCurrentUser }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <tr
      className={`
        border-b border-[#e5e7eb] last:border-0 transition-colors duration-200
        ${isCurrentUser ? 'bg-[#f5f3ff]' : isHovered ? 'bg-[#f9fafb]' : ''}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Rank */}
      <td className="py-4 px-4 text-sm text-[#6b7280] font-medium">
        {entry.rank}
      </td>
      
      {/* User */}
      <td className="py-4 px-4">
        <div className="flex items-center gap-3">
          <Image
            src={entry.avatar}
            alt={entry.userId}
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-sm text-[#171717] font-medium">
            {entry.userId}
          </span>
        </div>
      </td>
      
      {/* Lifetime Earning */}
      <td className="py-4 px-4 text-sm text-[#171717] font-medium text-right">
        {entry.lifetimeEarning.toLocaleString()}
      </td>
      
      {/* This Epoch */}
      <td className="py-4 px-4 text-sm text-[#171717] font-medium text-right">
        {entry.thisEpoch.toLocaleString()}
      </td>
      
      {/* Referrals */}
      <td className="py-4 px-4 text-sm text-[#171717] font-medium text-right">
        {entry.referrals}
      </td>
    </tr>
  );
};

/**
 * Leaderboard component with sortable columns
 * Displays top users and highlights the current user
 * 
 * @example
 * ```tsx
 * <Leaderboard 
 *   entries={leaderboardData} 
 *   currentUserId="username123"
 * />
 * ```
 */
export const Leaderboard: React.FC<LeaderboardProps> = ({ 
  entries,
  currentUserId
}) => {
  return (
    <section className="mt-8">
      {/* Section Header */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-[#6366f1] uppercase tracking-wider bg-[#f5f3ff] rounded-full">
          Leaderboard
        </span>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#f9fafb] border-b border-[#e5e7eb]">
              <tr>
                <th className="py-3 px-4 text-left text-xs font-semibold text-[#6b7280] uppercase tracking-wider">
                  Rank
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-[#6b7280] uppercase tracking-wider">
                  User
                </th>
                <th className="py-3 px-4 text-right text-xs font-semibold text-[#6b7280] uppercase tracking-wider">
                  Lifetime Earning
                </th>
                <th className="py-3 px-4 text-right text-xs font-semibold text-[#6b7280] uppercase tracking-wider">
                  This Epoch
                </th>
                <th className="py-3 px-4 text-right text-xs font-semibold text-[#6b7280] uppercase tracking-wider">
                  Referrals
                </th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <LeaderboardRow
                  key={entry.userId}
                  entry={entry}
                  isCurrentUser={entry.userId === currentUserId}
                />
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </section>
  );
};

