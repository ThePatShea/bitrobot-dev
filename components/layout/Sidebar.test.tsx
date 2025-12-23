import { render, screen, fireEvent } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import type { NavItem, ResourceLink } from '@/types';

const mockNavItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', href: '/dashboard', active: true, badge: 'online' },
  { id: 'contribute', label: 'Contribute', icon: 'contribute', href: '/contribute', active: false },
  { id: 'profile', label: 'Profile', icon: 'profile', href: '/profile', active: false },
];

const mockResourceLinks: ResourceLink[] = [
  { id: 'help', label: 'Help', icon: 'help', href: 'https://help.example.com', external: true },
  { id: 'docs', label: 'Docs', icon: 'docs', href: 'https://docs.example.com', external: true },
];

const defaultProps = {
  navItems: mockNavItems,
  resourceLinks: mockResourceLinks,
  referralCount: 12,
  onShareLink: jest.fn(),
};

describe('Sidebar', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders navigation links', () => {
    render(<Sidebar {...defaultProps} />);

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Contribute')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });

  it('renders resource links', () => {
    render(<Sidebar {...defaultProps} />);

    expect(screen.getByText('Resources')).toBeInTheDocument();
    expect(screen.getByText('Help')).toBeInTheDocument();
    expect(screen.getByText('Docs')).toBeInTheDocument();
  });

  it('navigation links point to correct hrefs', () => {
    render(<Sidebar {...defaultProps} />);

    const dashboardLink = screen.getByText('Dashboard').closest('a');
    expect(dashboardLink).toHaveAttribute('href', '/dashboard');

    const contributeLink = screen.getByText('Contribute').closest('a');
    expect(contributeLink).toHaveAttribute('href', '/contribute');
  });

  it('shows online badge for active item', () => {
    const { container } = render(<Sidebar {...defaultProps} />);

    // The online badge is a green dot with shadow
    const onlineBadge = container.querySelector('.bg-success');
    expect(onlineBadge).toBeInTheDocument();
  });

  it('displays referral count', () => {
    render(<Sidebar {...defaultProps} referralCount={42} />);

    expect(screen.getByText('42')).toBeInTheDocument();
    expect(screen.getByText('referrals')).toBeInTheDocument();
  });

  it('calls onShareLink when share button is clicked', () => {
    const handleShare = jest.fn();
    render(<Sidebar {...defaultProps} onShareLink={handleShare} />);

    const shareButton = screen.getByText('Share Link');
    fireEvent.click(shareButton);

    expect(handleShare).toHaveBeenCalledTimes(1);
  });

  it('displays referral tooltip on hover', () => {
    render(<Sidebar {...defaultProps} />);

    // The tooltip content should be in the DOM (hidden by CSS)
    expect(screen.getByText(/Share your unique link/)).toBeInTheDocument();
  });

  it('shows Earn Pts badge', () => {
    render(<Sidebar {...defaultProps} />);

    expect(screen.getByText('Earn Pts')).toBeInTheDocument();
  });

  it('is hidden on mobile screens', () => {
    const { container } = render(<Sidebar {...defaultProps} />);

    const aside = container.querySelector('aside');
    expect(aside).toHaveClass('hidden', 'lg:block');
  });
});

