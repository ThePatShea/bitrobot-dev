/**
 * @fileoverview Type definitions for the BitRobot Dashboard application
 * @module types
 */

/**
 * Navigation menu item structure
 * Represents a single item in the sidebar navigation
 * @interface NavItem
 */
export interface NavItem {
  /** Unique identifier for the nav item */
  id: string;
  /** Display label for the nav item */
  label: string;
  /** Icon name (without .svg extension) */
  icon: string;
  /** Icon size in pixels */
  iconSize?: number;
  /** URL path for navigation */
  href: string;
  /** Whether this item is currently active */
  active?: boolean;
  /** Optional badge indicator (like online status) */
  badge?: "online" | "offline";
}

/**
 * Resource link item structure
 * Represents an external resource link in the sidebar
 * @interface ResourceLink
 */
export interface ResourceLink {
  /** Unique identifier for the resource */
  id: string;
  /** Display label for the resource */
  label: string;
  /** Icon name (without .svg extension) */
  icon: string;
  /** Icon size in pixels */
  iconSize?: number;
  /** URL for the resource */
  href: string;
  /** Whether the link is external (shows arrow icon) */
  external?: boolean;
}

/**
 * Leaderboard entry structure
 * Represents a single user's data in the leaderboard table
 * @interface LeaderboardEntry
 */
export interface LeaderboardEntry {
  /** Rank position in the leaderboard */
  rank: number;
  /** User identifier (wallet address or username) */
  userId: string;
  /** User avatar image URL */
  avatar: string;
  /** Total lifetime earnings */
  lifetimeEarning: number;
  /** Earnings for the current epoch */
  lastEpoch: number;
  /** Number of successful referrals */
  referrals: number;
}

/**
 * Earnings data point for charts
 * Represents a single month's earnings value
 * @interface EarningsDataPoint
 */
export interface EarningsDataPoint {
  /** Month abbreviation (e.g., "JAN", "FEB") */
  month: string;
  /** Earnings value for that month */
  value: number;
}

/**
 * Carousel item structure
 * Represents a single slide in the discover carousel
 * @interface CarouselItem
 */
export interface CarouselItem {
  /** Unique identifier for the carousel item */
  id: string;
  /** Title of the carousel item */
  title: string;
  /** Description text */
  description: string;
  /** Icon name (without .svg extension) */
  icon: string;
  /** Primary action button configuration */
  primaryAction: {
    /** Button label text */
    label: string;
    /** Click handler callback */
    onClick: () => void;
  };
  /** Optional secondary action button configuration */
  secondaryAction?: {
    /** Button label text */
    label: string;
    /** Click handler callback */
    onClick: () => void;
  };
}

/**
 * User profile data structure
 * Represents the current logged-in user
 * @interface UserProfile
 */
export interface UserProfile {
  /** Display username */
  username: string;
  /** Avatar image URL */
  avatar: string;
  /** Unique user identifier (wallet address) */
  id: string;
  /** Rank position in the leaderboard */
  rank: number;
  /** Total lifetime earnings */
  lifetimeEarning: number;
  /** Earnings for the current epoch */
  lastEpoch: number;
  /** Number of successful referrals */
  referrals: number;
}
