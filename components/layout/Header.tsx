/**
 * @fileoverview Header component with user account menu and mobile hamburger
 * @module components/layout/Header
 */

'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import type { UserProfile } from '@/types';

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
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="h-2">
      {/* Fixed inner container that stays at top of viewport */}
      <div className="fixed-header-centered fixed top-2.5 right-0 left-0 z-30 flex h-16 items-center justify-between px-4 lg:right-auto lg:left-auto lg:justify-end lg:px-0 lg:pr-2.75">
        {/* Mobile: Logo and Hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          {/* Hamburger Button */}
          <button
            onClick={onMenuOpen}
            className="border-border focus-visible:ring-primary flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border bg-white shadow-[0_2px_8px_0_rgba(0,0,0,0.07)] transition-shadow duration-200 outline-none hover:shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] focus-visible:ring-2 focus-visible:ring-offset-2 active:shadow-[0_1px_4px_0_rgba(0,0,0,0.1)]"
            aria-label="Open menu"
          >
            <Icon name="menu" size={18} className="text-primary" />
          </button>

          {/* Logo (mobile only) */}
          <Link
            href="#"
            className="focus-visible:ring-primary flex items-center gap-1 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          >
            <div className="border-border flex h-8 w-8 items-center justify-center rounded-lg border bg-white shadow-[0_2px_8px_0_rgba(0,0,0,0.07)]">
              <Icon name="logo" size={18} />
            </div>
          </Link>
        </div>

        {/* User Menu (always visible) */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="border-border focus-visible:ring-primary flex cursor-pointer items-center rounded-lg border bg-white px-3 py-[7px] shadow-[0_2px_8px_0_rgba(0,0,0,0.07)] transition-shadow duration-200 outline-none hover:shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] focus-visible:ring-2 focus-visible:ring-offset-2 active:shadow-[0_1px_4px_0_rgba(0,0,0,0.1)]"
          >
            <Image
              src={user.avatar}
              alt={user.username}
              width={20}
              height={20}
              className="rounded-full"
            />
            <span className="text-gray-2 ml-2 hidden text-xs sm:inline">{user.username}</span>
            <Icon
              name="chevron-down"
              size={12}
              className={`text-primary ml-2 transition-transform duration-200 sm:ml-3 ${
                isMenuOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="border-border absolute top-full right-0 mt-2 w-48 rounded-lg border bg-white shadow-lg">
              <button className="w-full rounded-lg px-4 py-2 text-left text-sm text-red-600 transition-colors duration-200 outline-none hover:cursor-pointer hover:bg-red-50 focus-visible:bg-red-50 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-inset active:bg-red-100">
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
