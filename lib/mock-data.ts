/**
 * @fileoverview Mock data for the BitRobot Dashboard
 * In a real application, this data would come from an API
 * @module lib/mock-data
 */

import type {
  NavItem,
  ResourceLink,
  CarouselItem,
  EarningsDataPoint,
  LeaderboardEntry,
  UserProfile,
} from "@/types";

/**
 * Navigation menu items for the sidebar
 */
export const navItems: NavItem[] = [
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

/**
 * Resource links for the sidebar
 */
export const resourceLinks: ResourceLink[] = [
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

/**
 * Carousel items for the Discover section
 */
export const carouselItems: CarouselItem[] = [
  {
    id: "discord",
    title: "Discord",
    description: "Stay involved, don't miss an update. Join the community.",
    icon: "discord",
    primaryAction: {
      label: "GET INVOLVED",
      onClick: () => {
        // Open Discord invite link in new tab
      },
    },
    secondaryAction: {
      label: "LEARN MORE",
      onClick: () => {
        // Navigate to Discord info page
      },
    },
  },
  {
    id: "discord-2",
    title: "Discord",
    description: "Stay involved, don't miss an update. Join the community.",
    icon: "discord",
    primaryAction: {
      label: "GET INVOLVED",
      onClick: () => {
        // Open Discord invite link in new tab
      },
    },
    secondaryAction: {
      label: "LEARN MORE",
      onClick: () => {
        // Navigate to Discord info page
      },
    },
  },
  {
    id: "discord-3",
    title: "Discord",
    description: "Stay involved, don't miss an update. Join the community.",
    icon: "discord",
    primaryAction: {
      label: "GET INVOLVED",
      onClick: () => {
        // Open Discord invite link in new tab
      },
    },
    secondaryAction: {
      label: "LEARN MORE",
      onClick: () => {
        // Navigate to Discord info page
      },
    },
  },
  {
    id: "discord-4",
    title: "Discord",
    description: "Stay involved, don't miss an update. Join the community.",
    icon: "discord",
    primaryAction: {
      label: "GET INVOLVED",
      onClick: () => {
        // Open Discord invite link in new tab
      },
    },
    secondaryAction: {
      label: "LEARN MORE",
      onClick: () => {
        // Navigate to Discord info page
      },
    },
  },
];

/**
 * Earnings history data for the chart
 */
export const earningsData: EarningsDataPoint[] = [
  { month: "OCT", value: 800 },
  { month: "NOV", value: 800 },
  { month: "DEC", value: 800 },
  { month: "JAN", value: 1000 },
  { month: "FEB", value: 800 },
  { month: "MAR", value: 800 },
  { month: "APR", value: 800 },
];

/**
 * Leaderboard entries (top 10 users)
 */
export const leaderboardData: LeaderboardEntry[] = [
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

/**
 * Current user profile data
 */
export const userProfile: UserProfile = {
  username: "username123",
  avatar: "/images/avatar.png",
  id: "0x9ec42a1b2c3d4e5f6a7b8c9d0e1f2a3b4c579da5",
  rank: 230,
  lifetimeEarning: 20023,
  thisEpoch: 3150,
  referrals: 5,
};
