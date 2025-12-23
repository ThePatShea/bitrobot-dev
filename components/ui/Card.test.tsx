/**
 * @fileoverview Unit tests for Card component
 * @module components/ui/Card.test
 */

import { render, screen, fireEvent } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('renders children content', () => {
    render(
      <Card>
        <p>Card content</p>
      </Card>
    );
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies base card styles', () => {
    render(<Card>Content</Card>);
    const card = screen.getByText('Content').closest('div');
    expect(card).toHaveClass('bg-light-bg', 'rounded-2xl', 'border-border');
  });

  it('applies hover styles when hoverable is true', () => {
    render(<Card hoverable>Hoverable Card</Card>);
    const card = screen.getByRole('button');
    expect(card).toHaveClass('cursor-pointer');
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(
      <Card hoverable onClick={handleClick}>
        Clickable
      </Card>
    );

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is keyboard accessible when hoverable', () => {
    const handleClick = jest.fn();
    render(
      <Card hoverable onClick={handleClick}>
        Accessible
      </Card>
    );

    const card = screen.getByRole('button');
    expect(card).toHaveAttribute('tabindex', '0');

    // Test Enter key
    fireEvent.keyDown(card, { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);

    // Test Space key
    fireEvent.keyDown(card, { key: ' ' });
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('does not have button role when not hoverable', () => {
    render(<Card>Static Card</Card>);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
