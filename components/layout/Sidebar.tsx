/**
 * @fileoverview Sidebar component containing navigation, resources, and referral information
 * @module components/layout/Sidebar
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EarnPointsBadge } from '@/components/ui/EarnPointsBadge';
import type { NavItem, ResourceLink } from '@/types';

/**
 * Props for the Sidebar component
 * @interface SidebarProps
 */
interface SidebarProps {
  /** Array of navigation menu items to display */
  navItems: NavItem[];
  /** Array of resource links to display in the resources section */
  resourceLinks: ResourceLink[];
  /** Number of referrals to display */
  referralCount: number;
  /** Callback function triggered when the share link button is clicked */
  onShareLink: () => void;
}

/**
 * Navigation link component with hover effects and active state indicator
 * Renders a single navigation item with icon, label, and optional online badge
 *
 * @param {Object} props - Component props
 * @param {NavItem} props.item - The navigation item data to render
 * @returns {JSX.Element} A styled navigation link
 */
const NavLink: React.FC<{ item: NavItem }> = ({ item }) => {
  const isActive = item.active;

  return (
    <Link
      href={item.href}
      className={`border-border flex items-center gap-3 rounded-lg border-b px-1.5 py-2.5 transition-all duration-200 ${
        isActive ? 'text-primary' : 'text-muted hover:text-primary/70 active:text-primary/50'
      } group focus-visible:ring-primary relative outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
    >
      <div className="flex h-5 w-5 items-center justify-center">
        <Icon
          name={item.icon}
          size={item.iconSize ?? 20}
          className={
            isActive
              ? ''
              : 'brightness-[1.14] grayscale transition-all duration-200 group-hover:opacity-70 group-hover:brightness-100 group-hover:grayscale-0'
          }
        />
      </div>
      <span className="text-sm font-medium tracking-wide uppercase">{item.label}</span>
      {item.badge === 'online' && (
        <span className="bg-success absolute right-4 h-2.5 w-2.5 rounded-full shadow-[0_0_5px_4px_rgba(0,195,58,0.2)]" />
      )}
    </Link>
  );
};

/**
 * Resource link component with external link indicator
 * Renders a single resource item with icon, label, and external link arrow
 *
 * @param {Object} props - Component props
 * @param {ResourceLink} props.item - The resource link data to render
 * @returns {JSX.Element} A styled resource link
 */
const ResourceItem: React.FC<{ item: ResourceLink }> = ({ item }) => {
  return (
    <Link
      href={item.href}
      className="text-muted hover:text-primary/70 active:text-primary/50 border-border group focus-visible:ring-primary flex items-center gap-3 rounded-lg border-b px-1.5 py-3 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    >
      <div className="flex h-5 w-5 items-center justify-center">
        <Icon
          name={item.icon}
          size={item.iconSize ?? 20}
          className="brightness-[1.14] grayscale transition-all duration-200 group-hover:opacity-70 group-hover:brightness-100 group-hover:grayscale-0"
        />
      </div>
      <span className="text-sm font-medium tracking-wide uppercase">{item.label}</span>
      {item.external && (
        <div className="relative ml-auto h-4 w-4">
          <Icon
            name="external-link"
            size={9}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 brightness-[1.14] grayscale transition-all duration-200 group-hover:top-0 group-hover:left-full group-hover:-translate-x-full group-hover:translate-y-0 group-hover:brightness-100 group-hover:grayscale-0"
          />
        </div>
      )}
    </Link>
  );
};

/**
 * Main Sidebar component for the dashboard layout
 * Contains the logo, navigation menu, resources section, and referral information
 *
 * @param {SidebarProps} props - Component props
 * @param {NavItem[]} props.navItems - Array of navigation items
 * @param {ResourceLink[]} props.resourceLinks - Array of resource links
 * @param {number} props.referralCount - Number of referrals to display
 * @param {Function} props.onShareLink - Callback for share link button click
 * @returns {JSX.Element} The complete sidebar component
 *
 * @example
 * ```tsx
 * <Sidebar
 *   navItems={navItems}
 *   resourceLinks={resourceLinks}
 *   referralCount={12}
 *   onShareLink={() => {
 *     // Copy referral link to clipboard
 *   }}
 * />
 * ```
 */
export const Sidebar: React.FC<SidebarProps> = ({
  navItems,
  resourceLinks,
  referralCount,
  onShareLink,
}) => {
  return (
    <aside className="hidden w-66 shrink-0 lg:block">
      {/* Fixed inner container that stays in viewport */}
      <div className="fixed top-0 flex h-screen w-66 flex-col overflow-y-auto bg-white">
        {/* Logo Section */}
        <div className="px-6 pt-6 pb-3">
          <Link
            href="#"
            className="group focus-visible:ring-primary flex items-center gap-1 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          >
            <div className="border-border flex h-8.75 w-8.75 items-center justify-center rounded-lg border bg-white shadow-[0_2px_8px_0_rgba(0,0,0,0.07)] transition-all duration-200">
              <Icon name="logo" size={20} />
            </div>
            <div className="border-border rounded-lg border bg-white px-3 py-2 shadow-[0_2px_8px_0_rgba(0,0,0,0.07)] transition-all duration-200">
              <Icon name="bitrobot" size={85} className="h-[18px]" />
            </div>
          </Link>
        </div>

        <div className="border-border flex flex-1 flex-col border-r">
          {/* Navigation Menu */}
          <nav className="space-y-1 px-6 py-3">
            {navItems.map((item) => (
              <NavLink key={item.id} item={item} />
            ))}
          </nav>

          {/* Spacer - pushes bottom sections to the bottom */}
          <div className="flex-1" />

          {/* Resources Section */}
          <div className="flex flex-col gap-1 px-6 py-4">
            <div className="py-3">
              <SectionHeader title="Resources" />
            </div>
            <div>
              {resourceLinks.map((item) => (
                <ResourceItem key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Earn Points & Referrals Section */}
          <div className="bg-light-bg mx-6 mb-[40px] space-y-9.25 rounded-2xl p-3 p-4 shadow-[0_1px_8px_0_rgba(0,0,0,0.1)]">
            {/* Earn Pts Button and Info Icon Row */}
            <div className="flex items-center justify-between">
              <EarnPointsBadge />
              <div className="group/tooltip relative">
                <Icon
                  name="info-circle"
                  size={20}
                  className="opacity-50 transition-opacity duration-200 group-hover/tooltip:opacity-100"
                />
                <div className="bg-card-bg text-muted border-border invisible absolute top-full right-0 z-50 mt-2 w-48 rounded-xl border p-3 text-xs opacity-0 shadow-[0_1px_8px_0_rgba(0,0,0,0.1)] transition-all duration-200 group-hover/tooltip:visible group-hover/tooltip:opacity-100">
                  Share your unique link with your friends to earn points when they sign up.
                </div>
              </div>
            </div>

            {/* Referrals Section */}
            <div>
              <div className="mb-1.5 flex items-baseline gap-2">
                <span className="text-primary text-2xl font-medium">{referralCount}</span>
                <span className="text-primary text-xs font-medium">referrals</span>
              </div>
              <p className="text-muted mb-2.5 text-[10px]">Refer friends to earn more</p>
              <Button
                variant="outline"
                size="md"
                iconAfter={<Icon name="share" size={9} />}
                onClick={onShareLink}
              >
                Share Link
              </Button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
