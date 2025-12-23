/**
 * @fileoverview Integration tests for Dashboard page
 * @module app/page.test
 */

import { render, screen, waitFor } from '@testing-library/react';
import DashboardPage from './page';

// Mock next/image since it doesn't work in Jest by default
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />;
  },
}));

describe('DashboardPage', () => {
  it('renders loading skeletons initially', () => {
    render(<DashboardPage />);

    // Main content should be marked as loading
    expect(screen.getByRole('main')).toHaveAttribute('aria-busy', 'true');
  });

  it('renders content after loading completes', async () => {
    render(<DashboardPage />);

    // Wait for loading to complete
    await waitFor(() => {
      expect(screen.getByRole('main')).toHaveAttribute('aria-busy', 'false');
    });

    // Check key sections are rendered
    expect(screen.getByText('Discover')).toBeInTheDocument();
    expect(screen.getByText('Earnings')).toBeInTheDocument();
    expect(screen.getByText('Leaderboard')).toBeInTheDocument();
  });

  it('displays user profile data', async () => {
    render(<DashboardPage />);

    await waitFor(() => {
      expect(screen.getByRole('main')).toHaveAttribute('aria-busy', 'false');
    });

    // Check user data is displayed
    expect(screen.getByText('username123')).toBeInTheDocument();
  });
});

