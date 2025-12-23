/**
 * @fileoverview Discover carousel component for showcasing integrations and features
 * @module components/dashboard/DiscoverCarousel
 */

"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EarnPointsBadge } from "@/components/ui/EarnPointsBadge";
import type { CarouselItem } from "@/types";

/**
 * Props for the DiscoverCarousel component
 * @interface DiscoverCarouselProps
 */
interface DiscoverCarouselProps {
  /** Array of carousel items to display */
  items: CarouselItem[];
}

/**
 * Carousel component for the Discover section
 * Displays integration cards with navigation arrows and indicator dots
 *
 * @param {DiscoverCarouselProps} props - Component props
 * @param {CarouselItem[]} props.items - Array of carousel items to display
 * @returns {JSX.Element} A carousel section with navigation
 *
 * @example
 * ```tsx
 * <DiscoverCarousel items={carouselItems} />
 * ```
 */
/** Auto-scroll interval in milliseconds */
const AUTO_SCROLL_INTERVAL = 5000;

export const DiscoverCarousel: React.FC<DiscoverCarouselProps> = ({
  items,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /**
   * Navigate to the next carousel item
   * Wraps around to the first item when at the end
   * @returns {void}
   */
  const handleNext = useCallback((): void => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  /**
   * Navigate to the previous carousel item
   * Wraps around to the last item when at the beginning
   * @returns {void}
   */
  const handlePrev = (): void => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  /**
   * Auto-scroll effect
   * Automatically advances to the next slide every AUTO_SCROLL_INTERVAL ms
   * Pauses when user hovers over the carousel
   */
  useEffect(() => {
    if (isPaused || items.length <= 1) return;

    const interval = setInterval(() => {
      handleNext();
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused, items.length, handleNext]);

  return (
    <section className="mb-8">
      {/* Section Header */}
      <div className="mb-4">
        <SectionHeader title="Discover" />
        <h2 className="text-2xl font-medium text-primary mt-3">
          Explore the BitRobot Network
        </h2>
      </div>

      {/* Carousel Container with Arrows */}
      <div className="flex items-center gap-2 sm:gap-[25px]">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="py-2 pl-1 sm:pl-2 pr-0 text-primary cursor-pointer hover:-translate-x-1 active:-translate-x-2 transition-transform duration-200 flex-shrink-0 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          aria-label="Previous item"
        >
          <Icon name="chevron-left" size={8} />
        </button>

        {/* Carousel Card */}
        <div
          className="flex-1 h-[220px] sm:h-[246px] rounded-2xl border border-border overflow-hidden relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slides Container */}
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div
                key={item.id}
                className="w-full h-full flex-shrink-0 relative"
              >
                {/* Background Image Layer */}
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage: "url('/images/robots.png')",
                    backgroundSize: "160%",
                    backgroundPosition: "45% 36%",
                  }}
                />

                {/* Vertical Gradient Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.8) 25%, rgba(255,255,255,0.98) 75%, rgba(255,255,255,0.98) 100%)",
                  }}
                />

                {/* Earn Points Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <EarnPointsBadge points={20} />
                </div>

                {/* Carousel Content */}
                <div className="absolute p-4 bottom-0 left-0">
                  {/* Icon */}
                  <div className="mb-4">
                    <Icon name={item.icon} size={30} className="text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="font-medium text-primary mb-1">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-2 mb-2.5">
                    {item.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button
                      variant="primary"
                      onClick={item.primaryAction.onClick}
                    >
                      {item.primaryAction.label}
                    </Button>
                    {item.secondaryAction && (
                      <Button
                        variant="outline"
                        onClick={item.secondaryAction.onClick}
                      >
                        {item.secondaryAction.label}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="py-2 pr-1 sm:pr-2 pl-0 text-primary cursor-pointer hover:translate-x-1 active:translate-x-2 transition-transform duration-200 flex-shrink-0 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          aria-label="Next item"
        >
          <Icon name="chevron-right" size={8} />
        </button>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center gap-1 mt-4">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-1 rounded-full transition-all duration-300 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
              index === currentIndex
                ? "bg-primary"
                : "bg-border hover:bg-primary/40 active:bg-primary/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
