import { render, screen, fireEvent } from '@testing-library/react';
import { MobileMenu } from './MobileMenu';
import type { NavItem, ResourceLink } from '@/types';

const mockNavItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', href: '/dashboard', active: true },
  { id: 'contribute', label: 'Contribute', icon: 'contribute', href: '/contribute', active: false },
];

const mockResourceLinks: ResourceLink[] = [
  { id: 'help', label: 'Help', icon: 'help', href: 'https://help.example.com', external: true },
];

const defaultProps = {
  isOpen: true,
  onClose: jest.fn(),
  navItems: mockNavItems,
  resourceLinks: mockResourceLinks,
  referralCount: 5,
  onShareLink: jest.fn(),
};

describe('MobileMenu', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders navigation links when open', () => {
    render(<MobileMenu {...defaultProps} />);

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Contribute')).toBeInTheDocument();
  });

  it('renders resource links when open', () => {
    render(<MobileMenu {...defaultProps} />);

    expect(screen.getByText('Help')).toBeInTheDocument();
  });

  it('shows close button', () => {
    render(<MobileMenu {...defaultProps} />);

    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = jest.fn();
    render(<MobileMenu {...defaultProps} onClose={handleClose} />);

    const closeButton = screen.getByLabelText('Close menu');
    fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when backdrop is clicked', () => {
    const handleClose = jest.fn();
    const { container } = render(<MobileMenu {...defaultProps} onClose={handleClose} />);

    // The backdrop is the first fixed div with opacity
    const backdrop = container.querySelector('.bg-black\\/50');
    fireEvent.click(backdrop!);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when navigation link is clicked', () => {
    const handleClose = jest.fn();
    render(<MobileMenu {...defaultProps} onClose={handleClose} />);

    const dashboardLink = screen.getByText('Dashboard');
    fireEvent.click(dashboardLink);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('displays referral count', () => {
    render(<MobileMenu {...defaultProps} referralCount={99} />);

    expect(screen.getByText('99')).toBeInTheDocument();
  });

  it('calls both onShareLink and onClose when share is clicked', () => {
    const handleShare = jest.fn();
    const handleClose = jest.fn();
    render(<MobileMenu {...defaultProps} onShareLink={handleShare} onClose={handleClose} />);

    const shareButton = screen.getByText('Share Link');
    fireEvent.click(shareButton);

    expect(handleShare).toHaveBeenCalledTimes(1);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('is visually hidden when closed', () => {
    const { container } = render(<MobileMenu {...defaultProps} isOpen={false} />);

    const slideOut = container.querySelector('.-translate-x-full');
    expect(slideOut).toBeInTheDocument();
  });

  it('is visible when open', () => {
    const { container } = render(<MobileMenu {...defaultProps} isOpen={true} />);

    const slideOut = container.querySelector('.translate-x-0');
    expect(slideOut).toBeInTheDocument();
  });

  it('prevents body scroll when open', () => {
    render(<MobileMenu {...defaultProps} isOpen={true} />);

    expect(document.body.style.overflow).toBe('hidden');
  });

  it('restores body scroll when closed', () => {
    const { rerender } = render(<MobileMenu {...defaultProps} isOpen={true} />);

    rerender(<MobileMenu {...defaultProps} isOpen={false} />);

    expect(document.body.style.overflow).toBe('');
  });
});

