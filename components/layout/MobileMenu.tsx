/**
 * @fileoverview Mobile menu component with slide-out navigation
 * @module components/layout/MobileMenu
 */

'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EarnPointsBadge } from '@/components/ui/EarnPointsBadge';
import type { NavItem, ResourceLink } from '@/types';

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
const NavLink: React.FC<{ item: NavItem; onClick: () => void }> = ({ item, onClick }) => {
  const isActive = item.active;

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`border-border flex items-center gap-3 rounded-lg border-b px-1.5 py-2.5 transition-all duration-200 ${isActive ? 'text-primary' : 'text-muted hover:text-primary/70 active:text-primary/50'} group focus-visible:ring-primary relative outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
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
 */
const ResourceItem: React.FC<{ item: ResourceLink; onClick: () => void }> = ({ item, onClick }) => {
  return (
    <Link
      href={item.href}
      onClick={onClick}
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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-[280px] transform overflow-y-auto bg-white transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header with Logo and Close Button */}
        <div className="flex items-center justify-between px-4 pt-4 pb-3">
          <Link
            href="#"
            className="group focus-visible:ring-primary flex items-center gap-1 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            onClick={onClose}
          >
            <div className="border-border flex h-8.75 w-8.75 items-center justify-center rounded-lg border bg-white shadow-[0_2px_8px_0_rgba(0,0,0,0.07)] transition-all duration-200">
              <Icon name="logo" size={20} />
            </div>
            <div className="border-border rounded-lg border bg-white px-3 py-2 shadow-[0_2px_8px_0_rgba(0,0,0,0.07)] transition-all duration-200">
              <Icon name="bitrobot" size={85} className="h-[18px]" />
            </div>
          </Link>
          <button
            onClick={onClose}
            className="text-primary hover:bg-primary-light active:bg-primary-light-active focus-visible:ring-primary cursor-pointer rounded-lg p-2 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            aria-label="Close menu"
          >
            <Icon name="close" size={20} />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1 px-4 py-3">
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
        <div className="bg-light-bg mx-4 mb-6 space-y-9.25 rounded-2xl p-3 p-4 shadow-[0_1px_8px_0_rgba(0,0,0,0.1)]">
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
