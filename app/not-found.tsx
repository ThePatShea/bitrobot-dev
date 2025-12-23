/**
 * Custom 404 Not Found Page
 * Displayed when a user navigates to a non-existent route
 */

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

/**
 * NotFound Component
 * Renders a visually engaging 404 error page with navigation back to home
 */
export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(var(--primary) 1px, transparent 1px),
              linear-gradient(90deg, var(--primary) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-lg mx-auto">
        {/* 404 number with glitch effect */}
        <div className="relative mb-6">
          <h1
            className="text-[140px] sm:text-[180px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary-hover to-primary-active select-none"
            style={{
              textShadow: "0 0 80px rgba(93, 75, 255, 0.3)",
            }}
          >
            404
          </h1>
          {/* Decorative glitch layers */}
          <span
            className="absolute inset-0 text-[140px] sm:text-[180px] font-black leading-none tracking-tighter text-primary/10 select-none animate-pulse"
            aria-hidden="true"
          >
            404
          </span>
        </div>

        {/* Robot icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center">
            <Icon name="logo" size={40} className="text-primary" />
          </div>
        </div>

        {/* Message */}
        <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">
          Page Not Found
        </h2>
        <p className="text-muted text-sm sm:text-base mb-8 max-w-sm mx-auto leading-relaxed">
          Oops! It seems like this page got lost in the network. Let&apos;s get
          you back on track.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
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
