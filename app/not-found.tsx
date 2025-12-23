/**
 * Custom 404 Not Found Page
 * Displayed when a user navigates to a non-existent route
 */

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';

/**
 * NotFound Component
 * Renders a visually engaging 404 error page with navigation back to home
 */
export default function NotFound() {
  return (
    <div className="bg-background relative flex min-h-screen items-center justify-center overflow-hidden p-4">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="bg-primary/10 absolute top-1/4 -left-32 h-96 w-96 animate-pulse rounded-full blur-3xl" />
        <div className="bg-primary/5 absolute -right-32 bottom-1/4 h-80 w-80 animate-pulse rounded-full blur-3xl [animation-delay:1s]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(var(--primary) 1px, transparent 1px),
              linear-gradient(90deg, var(--primary) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-lg text-center">
        {/* 404 number with glitch effect */}
        <div className="relative mb-6">
          <h1
            className="from-primary via-primary-hover to-primary-active bg-gradient-to-br bg-clip-text text-[140px] leading-none font-black tracking-tighter text-transparent select-none sm:text-[180px]"
            style={{
              textShadow: '0 0 80px rgba(93, 75, 255, 0.3)',
            }}
          >
            404
          </h1>
          {/* Decorative glitch layers */}
          <span
            className="text-primary/10 absolute inset-0 animate-pulse text-[140px] leading-none font-black tracking-tighter select-none sm:text-[180px]"
            aria-hidden="true"
          >
            404
          </span>
        </div>

        {/* Robot icon */}
        <div className="mb-6 flex justify-center">
          <div className="bg-primary-light flex h-16 w-16 items-center justify-center rounded-2xl">
            <Icon name="logo" size={40} className="text-primary" />
          </div>
        </div>

        {/* Message */}
        <h2 className="text-foreground mb-3 text-xl font-semibold sm:text-2xl">Page Not Found</h2>
        <p className="text-muted mx-auto mb-8 max-w-sm text-sm leading-relaxed sm:text-base">
          Oops! It seems like this page got lost in the network. Let&apos;s get you back on track.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/">
            <Button variant="primary" size="lg">
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
