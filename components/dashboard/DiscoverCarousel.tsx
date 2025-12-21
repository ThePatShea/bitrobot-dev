/**
 * @fileoverview Discover carousel component for showcasing integrations and features
 * @module components/dashboard/DiscoverCarousel
 */

"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EarnPointsBadge } from "@/components/ui/EarnPointsBadge";
import type { CarouselItem } from "@/app/types";

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
export const DiscoverCarousel: React.FC<DiscoverCarouselProps> = ({
  items,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * Navigate to the next carousel item
   * Wraps around to the first item when at the end
   * @returns {void}
   */
  const handleNext = (): void => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  /**
   * Navigate to the previous carousel item
   * Wraps around to the last item when at the beginning
   * @returns {void}
   */
  const handlePrev = (): void => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const currentItem = items[currentIndex];

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
      <div className="flex items-center gap-[25px]">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="p-2 text-primary hover:opacity-70 transition-opacity duration-200 flex-shrink-0"
          aria-label="Previous item"
        >
          <Icon name="chevron-left" size={8} />
        </button>

        {/* Carousel Card */}
        <div className="flex-1 h-[246px] rounded-2xl border border-border overflow-hidden relative">
          {/* Background Image Layer */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: "url('/images/carousel.png')",
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
              <Icon
                name={currentItem.icon}
                size={30}
                className="text-primary"
              />
            </div>

            {/* Title */}
            <h3 className="font-medium text-primary mb-1">
              {currentItem.title}
            </h3>

            {/* Description */}
            <p className="text-xs text-gray-2 mb-2.5">
              {currentItem.description}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button
                variant="primary"
                onClick={currentItem.primaryAction.onClick}
              >
                {currentItem.primaryAction.label}
              </Button>
              {currentItem.secondaryAction && (
                <Button
                  variant="outline"
                  onClick={currentItem.secondaryAction.onClick}
                >
                  {currentItem.secondaryAction.label}
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="p-2 text-primary hover:opacity-70 transition-opacity duration-200 flex-shrink-0"
          aria-label="Next item"
        >
          <Icon name="chevron-right" size={8} />
        </button>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-primary"
                : "w-1 bg-border hover:bg-primary/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
