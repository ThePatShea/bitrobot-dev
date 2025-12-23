import { render, screen, within } from '@testing-library/react';
import { Leaderboard } from './Leaderboard';
import type { LeaderboardEntry } from '@/types';

const mockEntries: LeaderboardEntry[] = [
  {
    rank: 1,
    userId: '0x1234567890abcdef1234567890abcdef12345678',
    avatar: '/images/avatar-2.png',
    lifetimeEarning: 20023,
    lastEpoch: 3150,
    referrals: 56,
  },
  {
    rank: 2,
    userId: '0xabcdef1234567890abcdef1234567890abcdef12',
    avatar: '/images/avatar-3.png',
    lifetimeEarning: 18500,
    lastEpoch: 2800,
    referrals: 43,
  },
  {
    rank: 230,
    userId: 'username123',
    avatar: '/images/avatar.png',
    lifetimeEarning: 1300,
    lastEpoch: 234,
    referrals: 12,
  },
];

describe('Leaderboard', () => {
  it('displays the section header', () => {
    render(<Leaderboard entries={mockEntries} />);

    expect(screen.getByText('Leaderboard')).toBeInTheDocument();
  });

  it('renders all column headers', () => {
    render(<Leaderboard entries={mockEntries} />);

    expect(screen.getByText('Rank')).toBeInTheDocument();
    expect(screen.getByText('User')).toBeInTheDocument();
    expect(screen.getByText('Lifetime')).toBeInTheDocument();
    expect(screen.getByText('Epoch')).toBeInTheDocument();
    expect(screen.getByText('Refs')).toBeInTheDocument();
  });

  it('renders a row for each entry', () => {
    render(<Leaderboard entries={mockEntries} />);

    const rows = screen.getAllByRole('row');
    // 1 header row + 3 data rows
    expect(rows).toHaveLength(4);
  });

  it('displays user data correctly', () => {
    render(<Leaderboard entries={mockEntries} />);

    // First user's data
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('20,023')).toBeInTheDocument();
    expect(screen.getByText('3,150')).toBeInTheDocument();
    expect(screen.getByText('56')).toBeInTheDocument();
  });

  it('truncates long wallet addresses', () => {
    render(<Leaderboard entries={mockEntries} />);

    // The full address shouldn't be visible
    expect(
      screen.queryByText('0x1234567890abcdef1234567890abcdef12345678')
    ).not.toBeInTheDocument();
    // But the truncated version should be
    expect(screen.getByText('0x123...5678')).toBeInTheDocument();
  });

  it('highlights the current user row', () => {
    render(<Leaderboard entries={mockEntries} currentUserId="username123" />);

    // Find the row by the rank number (230) since username is truncated
    const rankCell = screen.getByText('230');
    const row = rankCell.closest('tr');

    // The cells in this row should have the highlight background
    const cells = within(row!).getAllByRole('cell');
    cells.forEach((cell) => {
      expect(cell).toHaveClass('bg-primary-light');
    });
  });

  it('does not highlight other users', () => {
    render(<Leaderboard entries={mockEntries} currentUserId="username123" />);

    // Find a row that's NOT the current user
    const otherUserCell = screen.getByText('0x123...5678');
    const row = otherUserCell.closest('tr');

    // These cells should NOT have the highlight background
    const cells = within(row!).getAllByRole('cell');
    cells.forEach((cell) => {
      expect(cell).not.toHaveClass('bg-primary-light');
    });
  });

  it('shows empty state when no entries', () => {
    render(<Leaderboard entries={[]} />);

    expect(screen.getByText('No rankings yet')).toBeInTheDocument();
    expect(screen.getByText(/climb the leaderboard/i)).toBeInTheDocument();
  });

  it('renders user avatars', () => {
    render(<Leaderboard entries={mockEntries} />);

    const avatars = screen.getAllByRole('img');
    expect(avatars).toHaveLength(3);
    expect(avatars[0]).toHaveAttribute('src', '/images/avatar-2.png');
  });
});
