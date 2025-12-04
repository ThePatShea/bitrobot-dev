/**
 * @fileoverview Sidebar component containing navigation, resources, and referral information
 * @module components/layout/Sidebar
 */

"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import type { NavItem, ResourceLink } from "@/app/types";

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
      className={`
        flex items-center gap-3 px-4 py-2.5 transition-all duration-200 border-b border-border
        ${isActive ? "text-primary" : "text-muted hover:text-primary/70"}
        group relative
      `}
    >
      <div className="w-5 h-5 flex items-center justify-center">
        <Icon
          name={item.icon}
          size={item.iconSize ?? 20}
          className={
            isActive
              ? ""
              : "grayscale group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-200"
          }
        />
      </div>
      <span className="font-medium text-sm uppercase tracking-wide">
        {item.label}
      </span>
      {item.badge === "online" && (
        <span className="absolute right-4 w-2 h-2 bg-success rounded-full" />
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
      className="
        flex items-center gap-3 px-4 py-4 transition-all duration-200
        text-muted hover:text-primary/70 border-b border-border
        group
      "
    >
      <div className="w-5 h-5 flex items-center justify-center">
        <Icon
          name={item.icon}
          size={20}
          className="grayscale group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-200"
        />
      </div>
      <span className="font-medium text-sm uppercase tracking-wide">
        {item.label}
      </span>
      {item.external && (
        <Icon
          name="external-link"
          size={9}
          className="ml-auto grayscale group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-200"
        />
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
 *   onShareLink={() => console.log('Share clicked')}
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
    <aside className="w-66 h-screen bg-white flex flex-col fixed left-0 top-0">
      {/* Logo Section */}
      <div className="px-6 pt-6 pb-3">
        <Link href="#" className="flex items-center gap-1 group">
          <div className="w-8.75 h-8.75 bg-white border border-border rounded-lg flex items-center justify-center group-hover:border-primary/30 transition-all duration-200 shadow-[0_2px_8px_0_rgba(0,0,0,0.07)]">
            <Icon name="logo" size={20} />
          </div>
          <div className="px-3 py-2 bg-white border border-border rounded-lg group-hover:border-primary/30 transition-all duration-200 shadow-[0_2px_8px_0_rgba(0,0,0,0.07)]">
            <Icon name="bitrobot" size={85} className="h-[18px]" />
          </div>
        </Link>
      </div>

      <div className="border-r border-border flex-1 flex flex-col">
        {/* Navigation Menu */}
        <nav className="px-6 py-3 space-y-1">
          {navItems.map((item) => (
            <NavLink key={item.id} item={item} />
          ))}
        </nav>

        {/* Spacer - pushes bottom sections to the bottom */}
        <div className="flex-1" />

        {/* Resources Section */}
        <div className="px-6 py-4">
          <div className="px-4 py-3">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider bg-primary-light px-3 py-1 rounded-full">
              Resources
            </span>
          </div>
          <div>
            {resourceLinks.map((item) => (
              <ResourceItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Earn Points & Referrals Section */}
        <div className="p-4 border-t border-border space-y-3">
          <Button
            variant="secondary"
            fullWidth
            icon={<Icon name="points" size={16} />}
          >
            <span className="uppercase text-xs font-semibold">Earn Pts</span>
            <Icon name="info-circle" size={14} className="ml-auto opacity-60" />
          </Button>

          <div className="space-y-2">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-primary">
                {referralCount}
              </span>
              <span className="text-sm text-muted">referrals</span>
            </div>
            <p className="text-xs text-muted">Refer friends to earn more</p>
            <Button
              variant="outline"
              size="sm"
              fullWidth
              icon={<Icon name="share" size={14} />}
              onClick={onShareLink}
            >
              <span className="uppercase text-xs font-semibold">
                Share Link
              </span>
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
};
