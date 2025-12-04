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
        flex items-center gap-3 px-1.5 py-2.5 transition-all duration-200 border-b border-border
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
              : "grayscale brightness-[1.14] group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-70 transition-all duration-200"
          }
        />
      </div>
      <span className="font-medium text-sm uppercase tracking-wide">
        {item.label}
      </span>
      {item.badge === "online" && (
        <span className="absolute right-4 w-2.5 h-2.5 bg-success rounded-full shadow-[0_0_5px_4px_rgba(0,195,58,0.2)]" />
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
        flex items-center gap-3 px-1.5 py-3 transition-all duration-200
        text-muted hover:text-primary/70 border-b border-border
        group
      "
    >
      <div className="w-5 h-5 flex items-center justify-center">
        <Icon
          name={item.icon}
          size={item.iconSize ?? 20}
          className="grayscale brightness-[1.14] group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-70 transition-all duration-200"
        />
      </div>
      <span className="font-medium text-sm uppercase tracking-wide">
        {item.label}
      </span>
      {item.external && (
        <div className="ml-auto w-4 h-4 relative">
          <Icon
            name="external-link"
            size={9}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:left-full group-hover:top-0 group-hover:-translate-x-full group-hover:translate-y-0 grayscale brightness-[1.14] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-200"
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
          <div className="w-8.75 h-8.75 bg-white border border-border rounded-lg flex items-center justify-center transition-all duration-200 shadow-[0_2px_8px_0_rgba(0,0,0,0.07)]">
            <Icon name="logo" size={20} />
          </div>
          <div className="px-3 py-2 bg-white border border-border rounded-lg transition-all duration-200 shadow-[0_2px_8px_0_rgba(0,0,0,0.07)]">
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
        <div className="flex flex-col gap-1 px-6 py-4">
          <div className="py-3">
            <span className="text-[11px] text-primary uppercase tracking-wider bg-primary-light px-3 py-2 rounded-lg shadow-[0_1px_8px_0_rgba(0,0,0,0.1)]">
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
        <div className="p-4 space-y-6 bg-light-bg rounded-2xl p-3 mx-6 mb-[40px] shadow-[0_1px_8px_0_rgba(0,0,0,0.1)]">
          {/* Earn Pts Button and Info Icon Row */}
          <div className="flex items-center justify-between">
            <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-warning-bg text-warning-text rounded-lg font-semibold text-xs uppercase shadow-[0_1px_8px_0_rgba(0,0,0,0.08)]">
              <Icon name="points" size={18} />
              Earn Pts
            </button>
            <Icon name="info-circle" size={22} className="opacity-25" />
          </div>

          {/* Referrals Section */}
          <div className="space-y-3">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-medium text-primary">
                {referralCount}
              </span>
              <span className="text-xs text-primary font-medium">
                referrals
              </span>
            </div>
            <p className="text-[10px] text-muted">Refer friends to earn more</p>
            <button
              className="inline-flex items-center gap-2 px-2 py-2.25 border-1 border-primary text-primary rounded-lg text-[9px] uppercase hover:bg-primary-light transition-colors duration-200"
              onClick={onShareLink}
            >
              <span>Share Link</span>
              <Icon name="share" size={9} />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
