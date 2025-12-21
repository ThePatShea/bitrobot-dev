/**
 * @fileoverview Discover carousel component for showcasing integrations and features
 * @module components/dashboard/DiscoverCarousel
 */

"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
        <h2 className="text-2xl font-semibold text-primary mt-3">
          Explore the BitRobot Network
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        <Card className="p-8 min-h-[280px]">
          <div className="flex items-center justify-between">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="p-2 rounded-lg hover:bg-hover-bg transition-colors duration-200 -ml-2"
              aria-label="Previous item"
            >
              <Icon name="chevron-left" size={24} />
            </button>

            {/* Carousel Content */}
            <div className="flex-1 px-8">
              <div className="max-w-md mx-auto text-center space-y-6">
                {/* Icon */}
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-discord flex items-center justify-center">
                    <Icon name={currentItem.icon} size={32} />
                  </div>
                </div>

                {/* Title and Description */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {currentItem.title}
                  </h3>
                  <p className="text-sm text-muted">
                    {currentItem.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 justify-center">
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
              className="p-2 rounded-lg hover:bg-hover-bg transition-colors duration-200 -mr-2"
              aria-label="Next item"
            >
              <Icon name="chevron-right" size={24} />
            </button>
          </div>
        </Card>

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
      </div>
    </section>
  );
};
