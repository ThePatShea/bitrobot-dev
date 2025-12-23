import { render, screen, fireEvent } from '@testing-library/react';
import { EarningsCard } from './EarningsCard';

describe('EarningsCard', () => {
  it('displays the title and points value', () => {
    render(<EarningsCard title="Last Epoch" points={234} />);

    expect(screen.getByText('Last Epoch')).toBeInTheDocument();
    expect(screen.getByText('234')).toBeInTheDocument();
    expect(screen.getByText('points')).toBeInTheDocument();
  });

  it('formats large numbers with k suffix', () => {
    render(<EarningsCard title="Lifetime" points={1300} formatPoints />);

    expect(screen.getByText('1.3k')).toBeInTheDocument();
  });

  it('formats millions with M suffix', () => {
    render(<EarningsCard title="Total" points={2500000} formatPoints />);

    expect(screen.getByText('2.5M')).toBeInTheDocument();
  });

  it('shows raw number when formatPoints is false', () => {
    render(<EarningsCard title="Epoch" points={1300} formatPoints={false} />);

    expect(screen.getByText('1300')).toBeInTheDocument();
  });

  it('shows breakdown link when click handler is provided', () => {
    const handleClick = jest.fn();
    render(<EarningsCard title="Epoch" points={100} onBreakdownClick={handleClick} />);

    expect(screen.getByText('Breakdown')).toBeInTheDocument();
  });

  it('hides breakdown link when no click handler', () => {
    render(<EarningsCard title="Epoch" points={100} />);

    expect(screen.queryByText('Breakdown')).not.toBeInTheDocument();
  });

  it('calls onBreakdownClick when card is clicked', () => {
    const handleClick = jest.fn();
    render(<EarningsCard title="Epoch" points={100} onBreakdownClick={handleClick} />);

    // Click the breakdown link
    fireEvent.click(screen.getByText('Breakdown'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('makes the card clickable when breakdown handler exists', () => {
    const handleClick = jest.fn();
    const { container } = render(
      <EarningsCard title="Epoch" points={100} onBreakdownClick={handleClick} />
    );

    // The card should have cursor-pointer class
    const card = container.querySelector('.cursor-pointer');
    expect(card).toBeInTheDocument();
  });
});
