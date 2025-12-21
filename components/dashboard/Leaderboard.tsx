/**
 * @fileoverview Leaderboard component displaying top users in a table format
 * @module components/dashboard/Leaderboard
 */

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
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

  return (
    <tr
      className={`
        border-b border-border last:border-0 transition-colors duration-200
        ${isCurrentUser ? "bg-primary-light" : isHovered ? "bg-hover-bg" : ""}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Rank */}
      <td className="py-4 px-4 text-sm text-muted font-medium">{entry.rank}</td>

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
          <span className="text-sm text-foreground font-medium">
            {entry.userId}
          </span>
        </div>
      </td>

      {/* Lifetime Earning */}
      <td className="py-4 px-4 text-sm text-foreground font-medium text-right">
        {entry.lifetimeEarning.toLocaleString()}
      </td>

      {/* This Epoch */}
      <td className="py-4 px-4 text-sm text-foreground font-medium text-right">
        {entry.thisEpoch.toLocaleString()}
      </td>

      {/* Referrals */}
      <td className="py-4 px-4 text-sm text-foreground font-medium text-right">
        {entry.referrals}
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
      <div className="mb-4">
        <SectionHeader title="Leaderboard" />
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-hover-bg border-b border-border">
              <tr>
                <th className="py-3 px-4 text-left text-xs font-semibold text-muted uppercase tracking-wider">
                  Rank
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-muted uppercase tracking-wider">
                  User
                </th>
                <th className="py-3 px-4 text-right text-xs font-semibold text-muted uppercase tracking-wider">
                  Lifetime Earning
                </th>
                <th className="py-3 px-4 text-right text-xs font-semibold text-muted uppercase tracking-wider">
                  This Epoch
                </th>
                <th className="py-3 px-4 text-right text-xs font-semibold text-muted uppercase tracking-wider">
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
