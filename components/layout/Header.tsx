/**
 * @fileoverview Header component with user account menu
 * @module components/layout/Header
 */

"use client";

import React, { useState, useRef, useEffect } from "react";
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
  const menuRef = useRef<HTMLDivElement>(null);

  /**
   * Close menu when clicking outside
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="h-16 pr-2.75 flex items-center justify-end sticky top-0 z-50">
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center px-3 py-[7px] bg-white border border-border rounded-lg shadow-[0_2px_8px_0_rgba(0,0,0,0.07)] hover:shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] transition-shadow duration-200 cursor-pointer"
        >
          <Image
            src={user.avatar}
            alt={user.username}
            width={20}
            height={20}
            className="rounded-full"
          />
          <span className="ml-2 text-xs text-gray-2">{user.username}</span>
          <Icon
            name="chevron-down"
            size={12}
            className={`ml-3 text-primary transition-transform duration-200 ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-border">
            <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 hover:cursor-pointer transition-colors duration-200">
              Sign out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
