/**
 * @fileoverview Leaderboard component displaying top users in a table format
 * @module components/dashboard/Leaderboard
 */

'use client';

import React from 'react';
import Image from 'next/image';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { LeaderboardEmptyState } from '@/components/ui/EmptyState';
import { formatAddress } from '@/lib/format';
import type { LeaderboardEntry } from '@/types';

/**
 * Props for the Leaderboard component
 * @interface LeaderboardProps
 */
interface LeaderboardProps {
  /** Array of leaderboard entries to display */
  entries: LeaderboardEntry[];
  /** Current user's ID to highlight their row */
  currentUserId?: string;
}

/**
 * Props for the LeaderboardRow component
 * @interface LeaderboardRowProps
 */
interface LeaderboardRowProps {
  /** The leaderboard entry data */
  entry: LeaderboardEntry;
  /** Whether this row belongs to the current user */
  isCurrentUser: boolean;
}

/**
 * Leaderboard table row component with hover effects
 * Displays a single user's rank, avatar, earnings, and referrals
 *
 * @param {LeaderboardRowProps} props - Component props
 * @param {LeaderboardEntry} props.entry - The leaderboard entry data
 * @param {boolean} props.isCurrentUser - Whether this row belongs to the current user
 * @returns {JSX.Element} A table row with user data
 */
const LeaderboardRow: React.FC<LeaderboardRowProps> = ({ entry, isCurrentUser }) => {
  const textColor = isCurrentUser ? 'text-primary' : 'text-muted';
  const cellBg = isCurrentUser ? 'bg-primary-light' : '';
  const hoverBg = !isCurrentUser ? 'group-hover:bg-primary-light/40' : '';

  return (
    <tr className="border-border group border-b transition-colors duration-200">
      {/* Rank */}
      <td className={`px-2 py-2.5 sm:px-4 ${cellBg} ${hoverBg}`}>
        <span className={`text-xs font-medium tracking-tighter sm:text-sm ${textColor}`}>
          {entry.rank}
        </span>
      </td>

      {/* User */}
      <td className={`px-2 py-2.5 sm:px-4 ${cellBg} ${hoverBg}`}>
        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            src={entry.avatar}
            alt={entry.userId}
            width={20}
            height={20}
            className="flex-shrink-0 rounded-full"
          />
          <span className={`text-xs font-medium tracking-tighter sm:text-sm ${textColor}`}>
            {formatAddress(entry.userId, 5, 4)}
          </span>
        </div>
      </td>

      {/* Lifetime Earning */}
      <td className={`px-2 py-2.5 sm:px-4 ${cellBg} ${hoverBg}`}>
        <span className={`text-xs font-medium tracking-tighter sm:text-sm ${textColor}`}>
          {entry.lifetimeEarning.toLocaleString()}
        </span>
      </td>

      {/* This Epoch */}
      <td className={`px-2 py-2.5 sm:px-4 ${cellBg} ${hoverBg}`}>
        <span className={`text-xs font-medium tracking-tighter sm:text-sm ${textColor}`}>
          {entry.lastEpoch.toLocaleString()}
        </span>
      </td>

      {/* Referrals */}
      <td className={`px-2 py-2.5 sm:px-4 ${cellBg} ${hoverBg}`}>
        <span className={`text-xs font-medium tracking-tighter sm:text-sm ${textColor}`}>
          {entry.referrals}
        </span>
      </td>
    </tr>
  );
};

/**
 * Leaderboard component displaying top users in a table
 * Shows rankings with user avatars, earnings, and referral counts
 * Highlights the current user's row
 *
 * @param {LeaderboardProps} props - Component props
 * @param {LeaderboardEntry[]} props.entries - Array of leaderboard entries
 * @param {string} [props.currentUserId] - Current user's ID for highlighting
 * @returns {JSX.Element} A leaderboard table section
 *
 * @example
 * ```tsx
 * <Leaderboard
 *   entries={leaderboardData}
 *   currentUserId="username123"
 * />
 * ```
 */
export const Leaderboard: React.FC<LeaderboardProps> = ({ entries, currentUserId }) => {
  const isEmpty = entries.length === 0;

  return (
    <section className="mt-8">
      {/* Section Header */}
      <div className="mb-1.25">
        <SectionHeader title="Leaderboard" />
      </div>

      {isEmpty ? (
        <LeaderboardEmptyState />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-gray-light w-16 px-2 py-2.25 text-left text-xs font-normal tracking-tighter sm:w-34 sm:px-4 sm:text-sm">
                  Rank
                </th>
                <th className="text-gray-light min-w-[140px] px-2 py-2.25 text-left text-xs font-normal tracking-tighter sm:w-56 sm:px-4 sm:text-sm">
                  User
                </th>
                <th className="text-gray-light min-w-[100px] px-2 py-2.25 text-left text-xs font-normal tracking-tighter sm:w-56 sm:px-4 sm:text-sm">
                  Lifetime
                </th>
                <th className="text-gray-light min-w-[80px] px-2 py-2.25 text-left text-xs font-normal tracking-tighter sm:w-56 sm:px-4 sm:text-sm">
                  Epoch
                </th>
                <th className="text-gray-light min-w-[70px] px-2 py-2.25 text-left text-xs font-normal tracking-tighter sm:px-4 sm:text-sm">
                  Refs
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
      )}
    </section>
  );
};
