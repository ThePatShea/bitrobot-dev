/**
 * Main Dashboard Page
 * Displays the BitRobot dashboard with all components
 */

"use client";

import React from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { DiscoverCarousel } from "@/components/dashboard/DiscoverCarousel";
import { EarningsCard } from "@/components/dashboard/EarningsCard";
import { EarningsHistory } from "@/components/dashboard/EarningsHistory";
import { Leaderboard } from "@/components/dashboard/Leaderboard";
import { BonusBanner } from "@/components/dashboard/BonusBanner";
import { EarnPointsBadge } from "@/components/dashboard/EarnPointsBadge";
import type {
  NavItem,
  ResourceLink,
  CarouselItem,
  EarningsDataPoint,
  LeaderboardEntry,
  UserProfile,
} from "@/app/types";

/**
 * Mock data for the dashboard
 * In a real application, this would come from an API
 */

// Navigation items
const navItems: NavItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "dashboard",
    iconSize: 20,
    href: "#",
    active: true,
    badge: "online",
  },
  {
    id: "contribute",
    label: "Contribute",
    icon: "contribute",
    iconSize: 16,
    href: "#",
    active: false,
  },
  {
    id: "profile",
    label: "Profile",
    icon: "profile",
    iconSize: 15,
    href: "#",
    active: false,
  },
];

// Resource links
const resourceLinks: ResourceLink[] = [
  {
    id: "help",
    label: "Help",
    icon: "help",
    href: "#",
    external: true,
  },
  {
    id: "docs",
    label: "Docs",
    icon: "docs",
    href: "#",
    external: true,
  },
  {
    id: "shop",
    label: "Shop",
    icon: "shop",
    href: "#",
    external: true,
  },
  {
    id: "about",
    label: "About",
    icon: "info-circle",
    href: "#",
    external: true,
  },
];

// Carousel items
const carouselItems: CarouselItem[] = [
  {
    id: "discord",
    title: "Discord",
    description: "Stay involved, don't miss an update. Join the community.",
    icon: "discord",
    primaryAction: {
      label: "GET INVOLVED",
      onClick: () => console.log("Get involved clicked"),
    },
    secondaryAction: {
      label: "LEARN MORE",
      onClick: () => console.log("Learn more clicked"),
    },
  },
];

// Earnings history data
const earningsData: EarningsDataPoint[] = [
  { month: "OCT", value: 800 },
  { month: "NOV", value: 800 },
  { month: "DEC", value: 800 },
  { month: "JAN", value: 1000 },
  { month: "FEB", value: 800 },
  { month: "MAR", value: 800 },
  { month: "APR", value: 800 },
];

// Leaderboard data
const leaderboardData: LeaderboardEntry[] = [
  {
    rank: 230,
    userId: "0xDec42_75de5",
    avatar: "/images/avatar.png",
    lifetimeEarning: 20023,
    thisEpoch: 3150,
    referrals: 5,
  },
  {
    rank: 1,
    userId: "0xd78ct_2e83",
    avatar: "/images/avatar.png",
    lifetimeEarning: 20023,
    thisEpoch: 3150,
    referrals: 66,
  },
  {
    rank: 2,
    userId: "0x38a22_te701",
    avatar: "/images/avatar.png",
    lifetimeEarning: 20023,
    thisEpoch: 3150,
    referrals: 43,
  },
  {
    rank: 3,
    userId: "0xb58e4_k53e3",
    avatar: "/images/avatar.png",
    lifetimeEarning: 20023,
    thisEpoch: 3150,
    referrals: 41,
  },
  {
    rank: 4,
    userId: "0x32e7_c3d8d",
    avatar: "/images/avatar.png",
    lifetimeEarning: 20023,
    thisEpoch: 3150,
    referrals: 32,
  },
  {
    rank: 5,
    userId: "0xD32dt_t34015",
    avatar: "/images/avatar.png",
    lifetimeEarning: 20023,
    thisEpoch: 3150,
    referrals: 30,
  },
  {
    rank: 6,
    userId: "0x6542e_2e407",
    avatar: "/images/avatar.png",
    lifetimeEarning: 20023,
    thisEpoch: 3150,
    referrals: 30,
  },
  {
    rank: 7,
    userId: "0x34fc8_7a06a",
    avatar: "/images/avatar.png",
    lifetimeEarning: 20023,
    thisEpoch: 3150,
    referrals: 30,
  },
  {
    rank: 8,
    userId: "0x8a48a_bece6",
    avatar: "/images/avatar.png",
    lifetimeEarning: 20023,
    thisEpoch: 3150,
    referrals: 28,
  },
  {
    rank: 9,
    userId: "0xD364f_4526b7",
    avatar: "/images/avatar.png",
    lifetimeEarning: 20023,
    thisEpoch: 3150,
    referrals: 12,
  },
  {
    rank: 10,
    userId: "0xdaf6d_516f2",
    avatar: "/images/avatar.png",
    lifetimeEarning: 20023,
    thisEpoch: 3150,
    referrals: 12,
  },
];

// User profile
const userProfile: UserProfile = {
  username: "username123",
  avatar: "/images/avatar.png",
  id: "0xDec42_75de5",
};

/**
 * Main Dashboard Page Component
 *
 * Renders the complete BitRobot dashboard with:
 * - Sidebar navigation
 * - Header with user menu
 * - Discover carousel
 * - Earnings cards
 * - Earnings history chart
 * - Leaderboard
 */
export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar
        navItems={navItems}
        resourceLinks={resourceLinks}
        referralCount={12}
        onShareLink={() => console.log("Share link clicked")}
      />

      {/* Main Content Area */}
      <div className="ml-64">
        {/* Header */}
        <Header user={userProfile} />

        {/* Main Content */}
        <main className="pt-16 px-8 py-8">
          {/* Discover Section with Earn Points Badge */}
          <div className="relative">
            <div className="absolute top-4 right-4 z-10">
              <EarnPointsBadge
                points={20}
                onClick={() => console.log("Earn points clicked")}
              />
            </div>
            <DiscoverCarousel items={carouselItems} />
          </div>

          {/* Earnings Section */}
          <section className="mb-8">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider bg-primary-light rounded-full">
                Earnings
              </span>
            </div>

            {/* Earnings Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <EarningsCard
                title="Last Epoch"
                points={234}
                onBreakdownClick={() => console.log("Last epoch breakdown")}
              />
              <EarningsCard
                title="Lifetime"
                points={1300}
                formatPoints={true}
                onBreakdownClick={() => console.log("Lifetime breakdown")}
              />
              <EarningsHistory data={earningsData} />
            </div>

            {/* Bonus Banner */}
            <BonusBanner
              title="Bonuses available!"
              description="The more you participate, the more you earn."
              ctaText="SEE OPPORTUNITIES"
              onCtaClick={() => console.log("See opportunities clicked")}
            />
          </section>

          {/* Leaderboard Section */}
          <Leaderboard
            entries={leaderboardData}
            currentUserId={userProfile.id}
          />
        </main>
      </div>
    </div>
  );
}
