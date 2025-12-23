import { render, screen } from '@testing-library/react';
import { EarningsHistory } from './EarningsHistory';
import type { EarningsDataPoint } from '@/types';

const mockData: EarningsDataPoint[] = [
  { month: 'OCT', value: 800 },
  { month: 'NOV', value: 850 },
  { month: 'DEC', value: 920 },
  { month: 'JAN', value: 1000 },
  { month: 'FEB', value: 780 },
  { month: 'MAR', value: 890 },
  { month: 'APR', value: 950 },
];

describe('EarningsHistory', () => {
  it('displays the section header', () => {
    render(<EarningsHistory data={mockData} />);

    expect(screen.getByText('Earnings History')).toBeInTheDocument();
  });

  it('renders a bar for each month', () => {
    const { container } = render(<EarningsHistory data={mockData} />);

    // Each month has a label
    expect(screen.getByText('OCT')).toBeInTheDocument();
    expect(screen.getByText('NOV')).toBeInTheDocument();
    expect(screen.getByText('DEC')).toBeInTheDocument();
    expect(screen.getByText('JAN')).toBeInTheDocument();
    expect(screen.getByText('FEB')).toBeInTheDocument();
    expect(screen.getByText('MAR')).toBeInTheDocument();
    expect(screen.getByText('APR')).toBeInTheDocument();
  });

  it('displays formatted values above each bar', () => {
    render(<EarningsHistory data={mockData} />);

    // Values should be formatted with commas
    expect(screen.getByText('1,000')).toBeInTheDocument();
    expect(screen.getByText('850')).toBeInTheDocument();
    expect(screen.getByText('920')).toBeInTheDocument();
  });

  it('renders y-axis labels', () => {
    render(<EarningsHistory data={mockData} />);

    expect(screen.getByText('1.1K')).toBeInTheDocument();
    expect(screen.getByText('1K')).toBeInTheDocument();
    expect(screen.getByText('900')).toBeInTheDocument();
    expect(screen.getByText('700')).toBeInTheDocument();
  });

  it('shows empty state when no data', () => {
    render(<EarningsHistory data={[]} />);

    expect(screen.getByText('No earnings history')).toBeInTheDocument();
    expect(screen.getByText(/earnings will appear here/i)).toBeInTheDocument();
  });

  it('does not show chart elements when empty', () => {
    render(<EarningsHistory data={[]} />);

    expect(screen.queryByText('OCT')).not.toBeInTheDocument();
    expect(screen.queryByText('Earnings History')).not.toBeInTheDocument();
  });

  it('renders with minimum data set', () => {
    const minData: EarningsDataPoint[] = [{ month: 'JAN', value: 700 }];

    render(<EarningsHistory data={minData} />);

    expect(screen.getByText('JAN')).toBeInTheDocument();
    // Using getAllByText since 700 also appears in y-axis labels
    expect(screen.getAllByText('700').length).toBeGreaterThanOrEqual(1);
  });

  it('handles values at the chart boundaries', () => {
    const boundaryData: EarningsDataPoint[] = [
      { month: 'MIN', value: 650 }, // Near minimum (600 exists in y-axis)
      { month: 'MAX', value: 1150 }, // Near maximum
    ];

    render(<EarningsHistory data={boundaryData} />);

    expect(screen.getByText('650')).toBeInTheDocument();
    expect(screen.getByText('1,150')).toBeInTheDocument();
  });
});

