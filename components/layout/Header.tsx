/**
 * @fileoverview Header component with user account menu
 * @module components/layout/Header
 */

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import type { UserProfile } from "@/app/types";

/**
 * Props for the Header component
 * @interface HeaderProps
 */
interface HeaderProps {
  /** Current user profile data */
  user: UserProfile;
}

/**
 * Header component with user account dropdown menu
 * Displays user avatar, username, and provides access to account settings
 *
 * @param {HeaderProps} props - Component props
 * @param {UserProfile} props.user - Current user profile data
 * @returns {JSX.Element} A header with user account dropdown
 *
 * @example
 * ```tsx
 * <Header user={{ username: 'username123', avatar: '/images/avatar.png', id: '1' }} />
 * ```
 */
export const Header: React.FC<HeaderProps> = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="h-16 flex items-center justify-end px-8 fixed top-0 right-0 left-66 z-10">
      <div className="relative">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center gap-3 px-3 py-[7px] bg-white border border-border rounded-lg shadow-[0_2px_8px_0_rgba(0,0,0,0.07)] hover:shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] transition-shadow duration-200 cursor-pointer"
        >
          <Image
            src={user.avatar}
            alt={user.username}
            width={20}
            height={20}
            className="rounded-full"
          />
          <span className="text-xs text-muted">{user.username}</span>
          <Icon
            name="chevron-down"
            size={10}
            className={`text-primary transition-transform duration-200 ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-border py-2">
            <button className="w-full px-4 py-2 text-left text-sm text-muted hover:bg-hover-bg transition-colors duration-200">
              Profile Settings
            </button>
            <button className="w-full px-4 py-2 text-left text-sm text-muted hover:bg-hover-bg transition-colors duration-200">
              Preferences
            </button>
            <div className="border-t border-border my-2" />
            <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 transition-colors duration-200">
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
