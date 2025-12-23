/**
 * @fileoverview Header component with user account menu and mobile hamburger
 * @module components/layout/Header
 */

"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { UserProfile } from "@/types";

/**
 * Props for the Header component
 * @interface HeaderProps
 */
interface HeaderProps {
  /** Current user profile data */
  user: UserProfile;
  /** Callback to open the mobile menu */
  onMenuOpen?: () => void;
}

/**
 * Header component with user account dropdown menu
 * Displays user avatar, username, and provides access to account settings
 * On mobile, shows a hamburger menu button
 *
 * @param {HeaderProps} props - Component props
 * @param {UserProfile} props.user - Current user profile data
 * @param {Function} [props.onMenuOpen] - Callback to open mobile menu
 * @returns {JSX.Element} A header with user account dropdown
 *
 * @example
 * ```tsx
 * <Header
 *   user={{ username: 'username123', avatar: '/images/avatar.png', id: '1' }}
 *   onMenuOpen={() => setMobileMenuOpen(true)}
 * />
 * ```
 */
export const Header: React.FC<HeaderProps> = ({ user, onMenuOpen }) => {
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
    <header className="h-2">
      {/* Fixed inner container that stays at top of viewport */}
      <div className="fixed top-2.5 h-16 px-4 lg:px-0 flex items-center justify-between lg:justify-end z-30 left-0 right-0 lg:left-auto lg:right-auto fixed-header-centered lg:pr-2.75">
        {/* Mobile: Logo and Hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          {/* Hamburger Button */}
          <button
            onClick={onMenuOpen}
            className="w-8 h-8 bg-white border border-border rounded-lg flex items-center justify-center shadow-[0_2px_8px_0_rgba(0,0,0,0.07)] hover:shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] transition-shadow duration-200 cursor-pointer"
            aria-label="Open menu"
          >
            <Icon name="menu" size={18} className="text-primary" />
          </button>

          {/* Logo (mobile only) */}
          <Link href="#" className="flex items-center gap-1">
            <div className="w-8 h-8 bg-white border border-border rounded-lg flex items-center justify-center shadow-[0_2px_8px_0_rgba(0,0,0,0.07)]">
              <Icon name="logo" size={18} />
            </div>
          </Link>
        </div>

        {/* User Menu (always visible) */}
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
            <span className="ml-2 text-xs text-gray-2 hidden sm:inline">
              {user.username}
            </span>
            <Icon
              name="chevron-down"
              size={12}
              className={`ml-2 sm:ml-3 text-primary transition-transform duration-200 ${
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
      </div>
    </header>
  );
};
