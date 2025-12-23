/**
 * @fileoverview Error boundary component for graceful error handling
 * @module components/ui/ErrorBoundary
 */

"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "./Button";

/**
 * Props for the ErrorBoundary component
 */
interface ErrorBoundaryProps {
  /** Child components to render */
  children: ReactNode;
  /** Optional custom fallback UI */
  fallback?: ReactNode;
  /** Optional callback when an error is caught */
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

/**
 * State for the ErrorBoundary component
 */
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error boundary component that catches JavaScript errors in child components
 * Displays a fallback UI when an error occurs
 *
 * @example
 * ```tsx
 * <ErrorBoundary>
 *   <MyComponent />
 * </ErrorBoundary>
 *
 * // With custom fallback
 * <ErrorBoundary fallback={<CustomError />}>
 *   <MyComponent />
 * </ErrorBoundary>
 * ```
 */
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error to console in development
    console.error("ErrorBoundary caught an error:", error, errorInfo);

    // Call optional error callback
    this.props.onError?.(error, errorInfo);
  }

  handleRetry = (): void => {
    this.setState({ hasError: false, error: null });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      // Render custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <ErrorFallback error={this.state.error} onRetry={this.handleRetry} />
      );
    }

    return this.props.children;
  }
}

/**
 * Props for the ErrorFallback component
 */
interface ErrorFallbackProps {
  /** The error that was caught */
  error: Error | null;
  /** Callback to retry/reset the error state */
  onRetry?: () => void;
  /** Optional title override */
  title?: string;
  /** Optional description override */
  description?: string;
}

/**
 * Default error fallback UI component
 * Can be used standalone or as the default fallback for ErrorBoundary
 */
export const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  onRetry,
  title = "Something went wrong",
  description = "An unexpected error occurred. Please try again.",
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      {/* Error Illustration */}
      <div className="mb-6">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="60" cy="60" r="50" fill="#fef2f2" />
          <circle
            cx="60"
            cy="60"
            r="30"
            fill="none"
            stroke="#ef4444"
            strokeWidth="4"
            opacity="0.3"
          />
          <path
            d="M60 45V65"
            stroke="#ef4444"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.6"
          />
          <circle cx="60" cy="75" r="3" fill="#ef4444" opacity="0.6" />
        </svg>
      </div>

      {/* Error Title */}
      <h3 className="text-lg font-medium text-red-600 mb-2">{title}</h3>

      {/* Error Description */}
      <p className="text-sm text-muted max-w-sm mb-2">{description}</p>

      {/* Error Details (development only) */}
      {error && process.env.NODE_ENV === "development" && (
        <details className="mb-6 max-w-md">
          <summary className="text-xs text-muted cursor-pointer hover:text-primary active:text-primary/70 transition-colors duration-200 rounded outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
            View error details
          </summary>
          <pre className="mt-2 p-3 bg-gray-100 rounded-lg text-xs text-left overflow-auto max-h-32">
            {error.message}
            {error.stack && `\n\n${error.stack}`}
          </pre>
        </details>
      )}

      {/* Retry Button */}
      {onRetry && (
        <Button variant="primary" onClick={onRetry}>
          TRY AGAIN
        </Button>
      )}
    </div>
  );
};

/**
 * Wrapper component for section-level error boundaries
 * Provides a more compact error UI suitable for inline sections
 */
export const SectionErrorBoundary: React.FC<{
  children: ReactNode;
  sectionName?: string;
}> = ({ children, sectionName = "section" }) => {
  return (
    <ErrorBoundary
      fallback={
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
          <p className="text-sm text-red-600 mb-3">
            Failed to load {sectionName}
          </p>
          <Button
            variant="outline"
            className="border-red-300 text-red-600 hover:bg-red-100"
            onClick={() => window.location.reload()}
          >
            RELOAD PAGE
          </Button>
        </div>
      }
    >
      {children}
    </ErrorBoundary>
  );
};
