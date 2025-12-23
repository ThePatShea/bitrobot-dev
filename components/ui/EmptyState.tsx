/**
 * @fileoverview Empty state component for displaying when no data is available
 * @module components/ui/EmptyState
 */

import React from 'react';
import { Button } from './Button';

/**
 * Props for the EmptyState component
 */
interface EmptyStateProps {
  /** Title message to display */
  title: string;
  /** Optional description text */
  description?: string;
  /** Icon type to display */
  icon?: 'data' | 'search' | 'error' | 'inbox';
  /** Optional action button configuration */
  action?: {
    label: string;
    onClick: () => void;
  };
  /** Additional CSS classes */
  className?: string;
}

/**
 * SVG illustrations for different empty state types
 */
const illustrations = {
  data: (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary-light"
    >
      <circle cx="60" cy="60" r="50" fill="currentColor" />
      <rect
        x="35"
        y="40"
        width="50"
        height="8"
        rx="4"
        fill="currentColor"
        className="text-primary/20"
      />
      <rect
        x="35"
        y="56"
        width="35"
        height="8"
        rx="4"
        fill="currentColor"
        className="text-primary/20"
      />
      <rect
        x="35"
        y="72"
        width="42"
        height="8"
        rx="4"
        fill="currentColor"
        className="text-primary/20"
      />
    </svg>
  ),
  search: (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary-light"
    >
      <circle cx="60" cy="60" r="50" fill="currentColor" />
      <circle
        cx="52"
        cy="52"
        r="20"
        stroke="currentColor"
        strokeWidth="6"
        fill="none"
        className="text-primary/20"
      />
      <line
        x1="68"
        y1="68"
        x2="82"
        y2="82"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        className="text-primary/20"
      />
    </svg>
  ),
  error: (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-red-100"
    >
      <circle cx="60" cy="60" r="50" fill="currentColor" />
      <circle
        cx="60"
        cy="60"
        r="30"
        fill="none"
        stroke="#ef4444"
        strokeWidth="4"
        className="opacity-30"
      />
      <line
        x1="48"
        y1="48"
        x2="72"
        y2="72"
        stroke="#ef4444"
        strokeWidth="4"
        strokeLinecap="round"
        className="opacity-50"
      />
      <line
        x1="72"
        y1="48"
        x2="48"
        y2="72"
        stroke="#ef4444"
        strokeWidth="4"
        strokeLinecap="round"
        className="opacity-50"
      />
    </svg>
  ),
  inbox: (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary-light"
    >
      <circle cx="60" cy="60" r="50" fill="currentColor" />
      <path
        d="M40 50 L60 35 L80 50 L80 80 L40 80 Z"
        fill="currentColor"
        className="text-primary/20"
      />
      <path
        d="M40 50 L60 65 L80 50"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        className="text-primary/30"
      />
    </svg>
  ),
};

/**
 * Empty state component for displaying when no content is available
 * Shows an illustration, message, and optional action button
 *
 * @param {EmptyStateProps} props - Component props
 * @returns {JSX.Element} An empty state display
 *
 * @example
 * ```tsx
 * <EmptyState
 *   icon="data"
 *   title="No earnings yet"
 *   description="Start contributing to earn points"
 *   action={{ label: "Get Started", onClick: handleStart }}
 * />
 * ```
 */
export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon = 'data',
  action,
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center px-4 py-12 text-center ${className}`}
    >
      {/* Illustration */}
      <div className="mb-6">{illustrations[icon]}</div>

      {/* Title */}
      <h3 className="text-primary mb-2 text-lg font-medium">{title}</h3>

      {/* Description */}
      {description && <p className="text-muted mb-6 max-w-sm text-sm">{description}</p>}

      {/* Action Button */}
      {action && (
        <Button variant="primary" onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </div>
  );
};

/**
 * Empty state specifically for leaderboard
 */
export const LeaderboardEmptyState: React.FC = () => (
  <EmptyState
    icon="data"
    title="No rankings yet"
    description="Be the first to climb the leaderboard by earning points through contributions."
    action={{
      label: 'START CONTRIBUTING',
      onClick: () => {
        // Navigate to contribute page
      },
    }}
  />
);

/**
 * Empty state specifically for earnings
 */
export const EarningsEmptyState: React.FC = () => (
  <EmptyState
    icon="inbox"
    title="No earnings history"
    description="Your earnings will appear here once you start contributing to the network."
  />
);

/**
 * Empty state for search results
 */
export const SearchEmptyState: React.FC<{ query?: string }> = ({ query }) => (
  <EmptyState
    icon="search"
    title="No results found"
    description={
      query
        ? `We couldn't find anything matching "${query}". Try a different search term.`
        : "Try adjusting your search or filters to find what you're looking for."
    }
  />
);
