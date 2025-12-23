import { render, screen, fireEvent, act } from '@testing-library/react';
import { DiscoverCarousel } from './DiscoverCarousel';
import type { CarouselItem } from '@/types';

const mockItems: CarouselItem[] = [
  {
    id: 'discord',
    title: 'Discord',
    description: 'Join the community.',
    icon: 'discord',
    primaryAction: { label: 'GET INVOLVED', onClick: jest.fn() },
    secondaryAction: { label: 'LEARN MORE', onClick: jest.fn() },
  },
  {
    id: 'telegram',
    title: 'Telegram',
    description: 'Chat with us.',
    icon: 'discord',
    primaryAction: { label: 'JOIN NOW', onClick: jest.fn() },
  },
  {
    id: 'twitter',
    title: 'Twitter',
    description: 'Follow for updates.',
    icon: 'discord',
    primaryAction: { label: 'FOLLOW', onClick: jest.fn() },
  },
];

describe('DiscoverCarousel', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('displays the section header and subtitle', () => {
    render(<DiscoverCarousel items={mockItems} />);

    expect(screen.getByText('Discover')).toBeInTheDocument();
    expect(screen.getByText('Explore the BitRobot Network')).toBeInTheDocument();
  });

  it('shows the first slide initially', () => {
    render(<DiscoverCarousel items={mockItems} />);

    expect(screen.getByText('Discord')).toBeInTheDocument();
    expect(screen.getByText('Join the community.')).toBeInTheDocument();
  });

  it('renders navigation arrows', () => {
    render(<DiscoverCarousel items={mockItems} />);

    expect(screen.getByLabelText('Previous item')).toBeInTheDocument();
    expect(screen.getByLabelText('Next item')).toBeInTheDocument();
  });

  it('advances to next slide when next button is clicked', () => {
    render(<DiscoverCarousel items={mockItems} />);

    const nextButton = screen.getByLabelText('Next item');
    fireEvent.click(nextButton);

    // Second slide content should now be visible
    expect(screen.getByText('Telegram')).toBeInTheDocument();
    expect(screen.getByText('Chat with us.')).toBeInTheDocument();
  });

  it('goes to previous slide when prev button is clicked', () => {
    render(<DiscoverCarousel items={mockItems} />);

    // Go forward first
    const nextButton = screen.getByLabelText('Next item');
    fireEvent.click(nextButton);

    // Then go back
    const prevButton = screen.getByLabelText('Previous item');
    fireEvent.click(prevButton);

    expect(screen.getByText('Discord')).toBeInTheDocument();
  });

  it('wraps around from last to first slide', () => {
    render(<DiscoverCarousel items={mockItems} />);

    const nextButton = screen.getByLabelText('Next item');

    // Click through all slides
    fireEvent.click(nextButton); // slide 2
    fireEvent.click(nextButton); // slide 3
    fireEvent.click(nextButton); // should wrap to slide 1

    expect(screen.getByText('Discord')).toBeInTheDocument();
  });

  it('wraps around from first to last slide', () => {
    render(<DiscoverCarousel items={mockItems} />);

    const prevButton = screen.getByLabelText('Previous item');
    fireEvent.click(prevButton);

    expect(screen.getByText('Twitter')).toBeInTheDocument();
  });

  it('renders indicator dots for each slide', () => {
    render(<DiscoverCarousel items={mockItems} />);

    const indicators = screen.getAllByLabelText(/Go to slide/);
    expect(indicators).toHaveLength(3);
  });

  it('navigates to specific slide when indicator is clicked', () => {
    render(<DiscoverCarousel items={mockItems} />);

    const thirdIndicator = screen.getByLabelText('Go to slide 3');
    fireEvent.click(thirdIndicator);

    expect(screen.getByText('Twitter')).toBeInTheDocument();
  });

  it('highlights the active indicator dot', () => {
    render(<DiscoverCarousel items={mockItems} />);

    const firstIndicator = screen.getByLabelText('Go to slide 1');
    expect(firstIndicator).toHaveClass('bg-primary');

    const secondIndicator = screen.getByLabelText('Go to slide 2');
    expect(secondIndicator).not.toHaveClass('bg-primary');
  });

  it('auto-scrolls to next slide after interval', () => {
    render(<DiscoverCarousel items={mockItems} />);

    // Initially showing first slide
    expect(screen.getByText('Discord')).toBeInTheDocument();

    // Fast-forward past the auto-scroll interval (5 seconds)
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    // Should now show second slide
    expect(screen.getByText('Telegram')).toBeInTheDocument();
  });

  it('calls primary action onClick when button is clicked', () => {
    const primaryClick = jest.fn();
    const items: CarouselItem[] = [
      {
        id: 'test',
        title: 'Test',
        description: 'Test item',
        icon: 'discord',
        primaryAction: { label: 'CLICK ME', onClick: primaryClick },
      },
    ];

    render(<DiscoverCarousel items={items} />);

    fireEvent.click(screen.getByText('CLICK ME'));
    expect(primaryClick).toHaveBeenCalledTimes(1);
  });

  it('shows secondary action button when provided', () => {
    render(<DiscoverCarousel items={mockItems} />);

    expect(screen.getByText('LEARN MORE')).toBeInTheDocument();
  });

  it('hides secondary action when not provided', () => {
    const items: CarouselItem[] = [
      {
        id: 'test',
        title: 'Test',
        description: 'Test item',
        icon: 'discord',
        primaryAction: { label: 'PRIMARY', onClick: jest.fn() },
      },
    ];

    render(<DiscoverCarousel items={items} />);

    expect(screen.queryByText('LEARN MORE')).not.toBeInTheDocument();
  });
});
