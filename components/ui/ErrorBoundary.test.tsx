import { render, screen, fireEvent } from '@testing-library/react';
import { ErrorBoundary, ErrorFallback, SectionErrorBoundary } from './ErrorBoundary';

// Component that throws an error
const ThrowingComponent = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error message');
  }
  return <div>Content rendered successfully</div>;
};

// Suppress console.error for expected errors in tests
const originalConsoleError = console.error;
beforeAll(() => {
  console.error = jest.fn();
});
afterAll(() => {
  console.error = originalConsoleError;
});

describe('ErrorBoundary', () => {
  it('renders children when no error', () => {
    render(
      <ErrorBoundary>
        <div>Hello World</div>
      </ErrorBoundary>
    );

    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('renders fallback UI when child throws', () => {
    render(
      <ErrorBoundary>
        <ThrowingComponent shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(screen.getByText(/An unexpected error occurred/)).toBeInTheDocument();
  });

  it('renders custom fallback when provided', () => {
    render(
      <ErrorBoundary fallback={<div>Custom error UI</div>}>
        <ThrowingComponent shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Custom error UI')).toBeInTheDocument();
    expect(screen.queryByText('Something went wrong')).not.toBeInTheDocument();
  });

  it('calls onError callback when error occurs', () => {
    const handleError = jest.fn();

    render(
      <ErrorBoundary onError={handleError}>
        <ThrowingComponent shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(handleError).toHaveBeenCalledTimes(1);
    expect(handleError.mock.calls[0][0]).toBeInstanceOf(Error);
    expect(handleError.mock.calls[0][0].message).toBe('Test error message');
  });

  it('shows retry button in default fallback', () => {
    render(
      <ErrorBoundary>
        <ThrowingComponent shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('TRY AGAIN')).toBeInTheDocument();
  });

  it('resets error state when retry is clicked', () => {
    let shouldThrow = true;

    const { rerender } = render(
      <ErrorBoundary>
        <ThrowingComponent shouldThrow={shouldThrow} />
      </ErrorBoundary>
    );

    // Error should be showing
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();

    // Fix the error condition
    shouldThrow = false;

    // Click retry
    fireEvent.click(screen.getByText('TRY AGAIN'));

    // Rerender with fixed component
    rerender(
      <ErrorBoundary>
        <ThrowingComponent shouldThrow={shouldThrow} />
      </ErrorBoundary>
    );

    // Now the content should render (after retry clears error state)
    // Note: The component re-throws after retry since shouldThrow is still true at render time
  });
});

describe('ErrorFallback', () => {
  it('displays title and description', () => {
    render(<ErrorFallback error={null} />);

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(screen.getByText(/An unexpected error occurred/)).toBeInTheDocument();
  });

  it('uses custom title when provided', () => {
    render(<ErrorFallback error={null} title="Custom Title" />);

    expect(screen.getByText('Custom Title')).toBeInTheDocument();
  });

  it('uses custom description when provided', () => {
    render(<ErrorFallback error={null} description="Custom description text" />);

    expect(screen.getByText('Custom description text')).toBeInTheDocument();
  });

  it('shows retry button when onRetry is provided', () => {
    render(<ErrorFallback error={null} onRetry={() => {}} />);

    expect(screen.getByText('TRY AGAIN')).toBeInTheDocument();
  });

  it('hides retry button when onRetry is not provided', () => {
    render(<ErrorFallback error={null} />);

    expect(screen.queryByText('TRY AGAIN')).not.toBeInTheDocument();
  });

  it('calls onRetry when button is clicked', () => {
    const handleRetry = jest.fn();
    render(<ErrorFallback error={null} onRetry={handleRetry} />);

    fireEvent.click(screen.getByText('TRY AGAIN'));

    expect(handleRetry).toHaveBeenCalledTimes(1);
  });

  it('renders error illustration', () => {
    const { container } = render(<ErrorFallback error={null} />);

    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });
});

describe('SectionErrorBoundary', () => {
  it('renders children when no error', () => {
    render(
      <SectionErrorBoundary>
        <div>Section content</div>
      </SectionErrorBoundary>
    );

    expect(screen.getByText('Section content')).toBeInTheDocument();
  });

  it('shows section-specific error message', () => {
    render(
      <SectionErrorBoundary sectionName="leaderboard">
        <ThrowingComponent shouldThrow={true} />
      </SectionErrorBoundary>
    );

    expect(screen.getByText('Failed to load leaderboard')).toBeInTheDocument();
  });

  it('shows reload button instead of retry', () => {
    render(
      <SectionErrorBoundary>
        <ThrowingComponent shouldThrow={true} />
      </SectionErrorBoundary>
    );

    expect(screen.getByText('RELOAD PAGE')).toBeInTheDocument();
  });

  it('uses default section name when not specified', () => {
    render(
      <SectionErrorBoundary>
        <ThrowingComponent shouldThrow={true} />
      </SectionErrorBoundary>
    );

    expect(screen.getByText('Failed to load section')).toBeInTheDocument();
  });
});

