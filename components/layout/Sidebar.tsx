/**
 * Sidebar component containing navigation, resources, and referral information
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import type { NavItem, ResourceLink } from '@/app/types';

/**
 * Sidebar component props
 */
interface SidebarProps {
  /** Array of navigation items */
  navItems: NavItem[];
  /** Array of resource links */
  resourceLinks: ResourceLink[];
  /** Number of referrals */
  referralCount: number;
  /** Referral share link handler */
  onShareLink: () => void;
}

/**
 * Navigation link component with hover effects and active state
 */
const NavLink: React.FC<{ item: NavItem }> = ({ item }) => {
  const isActive = item.active;
  
  return (
    <Link 
      href={item.href}
      className={`
        flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
        ${isActive 
          ? 'text-[#6366f1] bg-[#f5f3ff]' 
          : 'text-[#6b7280] hover:text-[#6366f1] hover:bg-[#f9fafb]'
        }
        group relative
      `}
    >
      <Icon name={item.icon} size={20} className={isActive ? '' : 'group-hover:scale-110 transition-transform duration-200'} />
      <span className="font-medium text-sm uppercase tracking-wide">{item.label}</span>
      {item.badge === 'online' && (
        <span className="absolute right-4 w-2 h-2 bg-[#22c55e] rounded-full" />
      )}
    </Link>
  );
};

/**
 * Resource link component with external link indicator
 */
const ResourceItem: React.FC<{ item: ResourceLink }> = ({ item }) => {
  return (
    <Link
      href={item.href}
      target={item.external ? '_blank' : undefined}
      rel={item.external ? 'noopener noreferrer' : undefined}
      className="
        flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
        text-[#6b7280] hover:text-[#6366f1] hover:bg-[#f9fafb]
        group
      "
    >
      <div className="relative">
        <Icon 
          name={item.icon} 
          size={20} 
          className="group-hover:scale-110 transition-all duration-200" 
        />
        {/* Icon shifts to top-right on hover as shown in the design */}
      </div>
      <span className="font-medium text-sm uppercase tracking-wide">{item.label}</span>
      {item.external && (
        <Icon 
          name="external-link" 
          size={16} 
          className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
        />
      )}
    </Link>
  );
};

/**
 * Main Sidebar component
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
  onShareLink
}) => {
  return (
    <aside className="w-64 h-screen bg-white border-r border-[#e5e7eb] flex flex-col fixed left-0 top-0">
      {/* Logo */}
      <div className="p-6 border-b border-[#e5e7eb]">
        <Link href="/" className="flex items-center gap-3 group">
          <Icon name="logo" size={32} className="group-hover:scale-105 transition-transform duration-200" />
          <span className="text-xl font-semibold text-[#6366f1]">BitRobot</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink key={item.id} item={item} />
        ))}
      </nav>

      {/* Resources Section */}
      <div className="px-3 py-4 border-t border-[#e5e7eb]">
        <div className="px-4 py-2">
          <span className="text-xs font-semibold text-[#6366f1] uppercase tracking-wider bg-[#f5f3ff] px-3 py-1 rounded-full">
            Resources
          </span>
        </div>
        <div className="mt-2 space-y-1">
          {resourceLinks.map((item) => (
            <ResourceItem key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Earn Points & Referrals Section */}
      <div className="p-4 border-t border-[#e5e7eb] space-y-3">
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
            <span className="text-3xl font-bold text-[#6366f1]">{referralCount}</span>
            <span className="text-sm text-[#6b7280]">referrals</span>
          </div>
          <p className="text-xs text-[#6b7280]">Refer friends to earn more</p>
          <Button 
            variant="outline" 
            size="sm"
            fullWidth
            icon={<Icon name="share" size={14} />}
            onClick={onShareLink}
          >
            <span className="uppercase text-xs font-semibold">Share Link</span>
          </Button>
        </div>
      </div>
    </aside>
  );
};

