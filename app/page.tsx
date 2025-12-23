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
import { SectionHeader } from "@/components/ui/SectionHeader";
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
    iconSize: 18,
    href: "#",
    external: true,
  },
  {
    id: "docs",
    label: "Docs",
    icon: "docs",
    iconSize: 15,
    href: "#",
    external: true,
  },
  {
    id: "shop",
    label: "Shop",
    icon: "shop",
    iconSize: 16,
    href: "#",
    external: true,
  },
  {
    id: "about",
    label: "About",
    icon: "info-circle",
    iconSize: 20,
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
  {
    id: "discord-2",
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
  {
    id: "discord-3",
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
  {
    id: "discord-4",
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

// Leaderboard data (top 10 users)
const leaderboardData: LeaderboardEntry[] = [
  {
    rank: 1,
    userId: "0x479bd1234567890abcdef1234567890abc2a1b3",
    avatar: "/images/avatar-2.png",
    lifetimeEarning: 20023,
    thisEpoch: 3150,
    referrals: 56,
  },
  {
    rank: 2,
    userId: "0x39a02fedcba0987654321fedcba09876541e791",
    avatar: "/images/avatar-3.png",
    lifetimeEarning: 20023,
    thisEpoch: 3150,
    referrals: 43,
  },
  {
    rank: 3,
    userId: "0xb36a4abcdef123456789abcdef12345671d3a3",
    avatar: "/images/avatar-4.png",
    lifetimeEarning: 20023,
    thisEpoch: 3150,
    referrals: 41,
  },
  {
    rank: 4,
    userId: "0x321c7fedcba9876543210fedcba987654c3d8d",
    avatar: "/images/avatar-5.png",
    lifetimeEarning: 20023,
    thisEpoch: 3150,
    referrals: 32,
  },
  {
    rank: 5,
    userId: "0x932d1a1b2c3d4e5f6a7b8c9d0e1f2a3b4134015",
    avatar: "/images/avatar-6.png",
    lifetimeEarning: 20023,
    thisEpoch: 3150,
    referrals: 30,
  },
  {
    rank: 6,
    userId: "0x6542e9876543210fedcba9876543210fe2a407",
    avatar: "/images/avatar-7.png",
    lifetimeEarning: 20023,
    thisEpoch: 3150,
    referrals: 30,
  },
  {
    rank: 7,
    userId: "0x345c9abcdef0123456789abcdef0123457a06a",
    avatar: "/images/avatar-8.png",
    lifetimeEarning: 20023,
    thisEpoch: 3150,
    referrals: 30,
  },
  {
    rank: 8,
    userId: "0x9a49a1234567890abcdef1234567890abbece6",
    avatar: "/images/avatar-9.png",
    lifetimeEarning: 20023,
    thisEpoch: 3150,
    referrals: 28,
  },
  {
    rank: 9,
    userId: "0x03641fedcba0987654321fedcba098765452b87",
    avatar: "/images/avatar-10.png",
    lifetimeEarning: 20023,
    thisEpoch: 3150,
    referrals: 12,
  },
  {
    rank: 10,
    userId: "0x4a6a0abcdef123456789abcdef123456789516f2",
    avatar: "/images/avatar-11.png",
    lifetimeEarning: 20023,
    thisEpoch: 3150,
    referrals: 12,
  },
];

// User profile (includes leaderboard stats)
const userProfile: UserProfile = {
  username: "username123",
  avatar: "/images/avatar.png",
  id: "0x9ec42a1b2c3d4e5f6a7b8c9d0e1f2a3b4c579da5",
  rank: 230,
  lifetimeEarning: 20023,
  thisEpoch: 3150,
  referrals: 5,
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
      {/* Centered Layout Wrapper */}
      <div className="max-w-[1258px] mx-auto flex">
        {/* Sidebar */}
        <Sidebar
          navItems={navItems}
          resourceLinks={resourceLinks}
          referralCount={12}
          onShareLink={() => console.log("Share link clicked")}
        />

        {/* Main Content Area */}
        <div className="flex-1 max-w-[994px]">
          {/* Header */}
          <Header user={userProfile} />

          {/* Main Content */}
          <main className="pt-13 pl-5.75 pr-2.75 py-8">
            {/* Discover Section */}
            <DiscoverCarousel items={carouselItems} />

            {/* Earnings Section */}
            <section className="mb-8">
              <div className="mb-6">
                <SectionHeader title="Earnings" />
              </div>

              {/* Earnings Cards Grid */}
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Left side: Earnings Cards + Bonus Banner */}
                <div className="lg:basis-[48%] flex flex-col gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <EarningsCard
                      title="Last Epoch"
                      points={234}
                      onBreakdownClick={() =>
                        console.log("Last epoch breakdown")
                      }
                    />
                    <EarningsCard
                      title="Lifetime"
                      points={1300}
                      formatPoints={true}
                      onBreakdownClick={() => console.log("Lifetime breakdown")}
                    />
                  </div>
                  {/* Bonus Banner */}
                  <BonusBanner
                    title="Bonuses available!"
                    description="The more you participate, the more you earn."
                    ctaText="SEE OPPORTUNITIES"
                    onCtaClick={() => console.log("See opportunities clicked")}
                  />
                </div>
                {/* Right side: Earnings History */}
                <div className="lg:basis-[52%]">
                  <EarningsHistory data={earningsData} />
                </div>
              </div>
            </section>

            {/* Leaderboard Section */}
            <Leaderboard
              entries={[
                {
                  rank: userProfile.rank,
                  userId: userProfile.id,
                  avatar: userProfile.avatar,
                  lifetimeEarning: userProfile.lifetimeEarning,
                  thisEpoch: userProfile.thisEpoch,
                  referrals: userProfile.referrals,
                },
                ...leaderboardData,
              ]}
              currentUserId={userProfile.id}
            />
          </main>
        </div>
      </div>
    </div>
  );
}
