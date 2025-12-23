/**
 * @fileoverview Leaderboard component displaying top users in a table format
 * @module components/dashboard/Leaderboard
 */

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { formatAddress } from "@/helpers/format";
import type { LeaderboardEntry } from "@/app/types";

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
const LeaderboardRow: React.FC<LeaderboardRowProps> = ({
  entry,
  isCurrentUser,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const textColor = isCurrentUser ? "text-primary" : "text-muted";
  const cellBg = isCurrentUser ? "bg-primary-light" : "";
  const hoverBg = isHovered && !isCurrentUser ? "bg-primary-light/40" : "";

  return (
    <tr
      className="transition-colors duration-200 border-b border-border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Rank */}
      <td className={`py-2.5 px-4 ${cellBg} ${hoverBg}`}>
        <span className={`text-sm font-medium tracking-tighter ${textColor}`}>
          {entry.rank}
        </span>
      </td>

      {/* User */}
      <td className={`py-2.5 px-4 ${cellBg} ${hoverBg}`}>
        <div className="flex items-center gap-3">
          <Image
            src={entry.avatar}
            alt={entry.userId}
            width={20}
            height={20}
            className="rounded-full"
          />
          <span className={`text-sm font-medium tracking-tighter ${textColor}`}>
            {formatAddress(entry.userId, 7, 5)}
          </span>
        </div>
      </td>

      {/* Lifetime Earning */}
      <td className={`py-2.5 px-4 ${cellBg} ${hoverBg}`}>
        <span className={`text-sm font-medium tracking-tighter ${textColor}`}>
          {entry.lifetimeEarning.toLocaleString()}
        </span>
      </td>

      {/* This Epoch */}
      <td className={`py-2.5 px-4 ${cellBg} ${hoverBg}`}>
        <span className={`text-sm font-medium tracking-tighter ${textColor}`}>
          {entry.thisEpoch.toLocaleString()}
        </span>
      </td>

      {/* Referrals */}
      <td className={`py-2.5 px-4 ${cellBg} ${hoverBg}`}>
        <span className={`text-sm font-medium tracking-tighter ${textColor}`}>
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
export const Leaderboard: React.FC<LeaderboardProps> = ({
  entries,
  currentUserId,
}) => {
  return (
    <section className="mt-8">
      {/* Section Header */}
      <div className="mb-1.25">
        <SectionHeader title="Leaderboard" />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-2.25 px-4 text-left text-sm font-normal text-gray-light tracking-tighter w-34">
                Rank
              </th>
              <th className="py-2.25 px-4 text-left text-sm font-normal text-gray-light tracking-tighter w-56">
                User
              </th>
              <th className="py-2.25 px-4 text-left text-sm font-normal text-gray-light tracking-tighter w-56">
                Lifetime Earning
              </th>
              <th className="py-2.25 px-4 text-left text-sm font-normal text-gray-light tracking-tighter w-56">
                This Epoch
              </th>
              <th className="py-2.25 px-4 text-left text-sm font-normal text-gray-light tracking-tighter">
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
    </section>
  );
};
