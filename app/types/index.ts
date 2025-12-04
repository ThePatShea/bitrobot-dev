/**
 * Type definitions for the BitRobot Dashboard application
 */

/**
 * Navigation menu item structure
 */
export interface NavItem {
  /** Unique identifier for the nav item */
  id: string;
  /** Display label for the nav item */
  label: string;
  /** Icon path or identifier */
  icon: string;
  /** URL path for navigation */
  href: string;
  /** Whether this item is currently active */
  active?: boolean;
  /** Optional badge indicator (like online status) */
  badge?: "online" | "offline";
}

/**
 * Resource link item structure
 */
export interface ResourceLink {
  /** Unique identifier for the resource */
  id: string;
  /** Display label for the resource */
  label: string;
  /** Icon path or identifier */
  icon: string;
  /** URL for the resource (can be external) */
  href: string;
  /** Whether the link opens in a new tab */
  external?: boolean;
}

/**
 * Leaderboard entry structure
 */
export interface LeaderboardEntry {
  /** Rank position */
  rank: number;
  /** User identifier */
  userId: string;
  /** User avatar URL */
  avatar: string;
  /** Lifetime earnings */
  lifetimeEarning: number;
  /** Current epoch earnings */
  thisEpoch: number;
  /** Number of referrals */
  referrals: number;
}

/**
 * Earnings data point for charts
 */
export interface EarningsDataPoint {
  /** Month abbreviation (e.g., "JAN", "FEB") */
  month: string;
  /** Earnings value for that month */
  value: number;
}

/**
 * Carousel item structure
 */
export interface CarouselItem {
  /** Unique identifier */
  id: string;
  /** Title of the carousel item */
  title: string;
  /** Description text */
  description: string;
  /** Icon identifier or path */
  icon: string;
  /** Primary action button config */
  primaryAction: {
    label: string;
    onClick: () => void;
  };
  /** Secondary action button config */
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
}

/**
 * User profile data
 */
export interface UserProfile {
  /** Username */
  username: string;
  /** Avatar image URL */
  avatar: string;
  /** User ID */
  id: string;
}
