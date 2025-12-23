/**
 * @fileoverview Mobile menu component with slide-out navigation
 * @module components/layout/MobileMenu
 */

"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EarnPointsBadge } from "@/components/ui/EarnPointsBadge";
import type { NavItem, ResourceLink } from "@/app/types";

/**
 * Props for the MobileMenu component
 * @interface MobileMenuProps
 */
interface MobileMenuProps {
  /** Whether the menu is open */
  isOpen: boolean;
  /** Callback to close the menu */
  onClose: () => void;
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
 */
const NavLink: React.FC<{ item: NavItem; onClick: () => void }> = ({
  item,
  onClick,
}) => {
  const isActive = item.active;

  return (
    <Link
      href={item.href}
      onClick={onClick}
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
 */
const ResourceItem: React.FC<{ item: ResourceLink; onClick: () => void }> = ({
  item,
  onClick,
}) => {
  return (
    <Link
      href={item.href}
      onClick={onClick}
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
 * Mobile menu component with slide-out navigation
 * Contains the same content as the sidebar but optimized for mobile
 */
export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navItems,
  resourceLinks,
  referralCount,
  onShareLink,
}) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white z-50 transform transition-transform duration-300 ease-out lg:hidden overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header with Logo and Close Button */}
        <div className="px-4 pt-4 pb-3 flex items-center justify-between">
          <Link href="#" className="flex items-center gap-1 group" onClick={onClose}>
            <div className="w-8.75 h-8.75 bg-white border border-border rounded-lg flex items-center justify-center transition-all duration-200 shadow-[0_2px_8px_0_rgba(0,0,0,0.07)]">
              <Icon name="logo" size={20} />
            </div>
            <div className="px-3 py-2 bg-white border border-border rounded-lg transition-all duration-200 shadow-[0_2px_8px_0_rgba(0,0,0,0.07)]">
              <Icon name="bitrobot" size={85} className="h-[18px]" />
            </div>
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-primary hover:bg-primary-light rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <Icon name="close" size={20} />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <NavLink key={item.id} item={item} onClick={onClose} />
          ))}
        </nav>

        {/* Resources Section */}
        <div className="flex flex-col gap-1 px-4 py-4">
          <div className="py-3">
            <SectionHeader title="Resources" />
          </div>
          <div>
            {resourceLinks.map((item) => (
              <ResourceItem key={item.id} item={item} onClick={onClose} />
            ))}
          </div>
        </div>

        {/* Earn Points & Referrals Section */}
        <div className="p-4 space-y-9.25 bg-light-bg rounded-2xl p-3 mx-4 mb-6 shadow-[0_1px_8px_0_rgba(0,0,0,0.1)]">
          {/* Earn Pts Button and Info Icon Row */}
          <div className="flex items-center justify-between">
            <EarnPointsBadge />
            <div className="relative group/tooltip">
              <Icon
                name="info-circle"
                size={20}
                className="opacity-50 group-hover/tooltip:opacity-100 transition-opacity duration-200"
              />
              <div className="absolute right-0 top-full mt-2 w-48 p-3 bg-card-bg text-muted text-xs rounded-xl border border-border opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 z-50 shadow-[0_1px_8px_0_rgba(0,0,0,0.1)]">
                Share your unique link with your friends to earn points when
                they sign up.
              </div>
            </div>
          </div>

          {/* Referrals Section */}
          <div>
            <div className="flex items-baseline gap-2 mb-1.5">
              <span className="text-2xl font-medium text-primary">
                {referralCount}
              </span>
              <span className="text-xs text-primary font-medium">
                referrals
              </span>
            </div>
            <p className="text-[10px] text-muted mb-2.5">
              Refer friends to earn more
            </p>
            <Button
              variant="outline"
              size="md"
              iconAfter={<Icon name="share" size={9} />}
              onClick={() => {
                onShareLink();
                onClose();
              }}
            >
              Share Link
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

