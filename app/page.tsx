/**
 * Main Dashboard Page
 * Displays the BitRobot dashboard with all components
 */

"use client";

import React, { useState, useEffect } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { DiscoverCarousel } from "@/components/dashboard/DiscoverCarousel";
import { EarningsCard } from "@/components/dashboard/EarningsCard";
import { EarningsHistory } from "@/components/dashboard/EarningsHistory";
import { Leaderboard } from "@/components/dashboard/Leaderboard";
import { BonusBanner } from "@/components/dashboard/BonusBanner";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionErrorBoundary } from "@/components/ui/ErrorBoundary";
import {
  CarouselSkeleton,
  SectionHeaderSkeleton,
  EarningsCardSkeleton,
  BonusBannerSkeleton,
  EarningsHistorySkeleton,
  LeaderboardSkeleton,
} from "@/components/ui/Skeleton";
import {
  navItems,
  resourceLinks,
  carouselItems,
  earningsData,
  leaderboardData,
  userProfile,
} from "@/lib/mock-data";

/**
 * Main Dashboard Page Component
 *
 * Renders the complete BitRobot dashboard with:
 * - Sidebar navigation (desktop) / Mobile menu (mobile)
 * - Header with user menu
 * - Discover carousel
 * - Earnings cards
 * - Earnings history chart
 * - Leaderboard
 */
export default function DashboardPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background min-w-[350px] overflow-x-auto">
      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
        resourceLinks={resourceLinks}
        referralCount={12}
        onShareLink={() => {
          // Copy referral link to clipboard and show toast
        }}
      />

      {/* Centered Layout Wrapper */}
      <div className="max-w-[1258px] mx-auto flex">
        {/* Sidebar (hidden on mobile) */}
        <Sidebar
          navItems={navItems}
          resourceLinks={resourceLinks}
          referralCount={12}
          onShareLink={() => {
            // Copy referral link to clipboard and show toast
          }}
        />

        {/* Main Content Area */}
        <div className="flex-1 min-w-0 lg:max-w-[994px]">
          {/* Header */}
          <Header
            user={userProfile}
            onMenuOpen={() => setIsMobileMenuOpen(true)}
          />

          {/* Main Content */}
          <main className="pt-15 lg:pt-13 px-4 lg:pl-5.75 lg:pr-2.75 pb-8">
            {/* Discover Section */}
            <SectionErrorBoundary sectionName="carousel">
              {isLoading ? (
                <CarouselSkeleton />
              ) : (
                <DiscoverCarousel items={carouselItems} />
              )}
            </SectionErrorBoundary>

            {/* Earnings Section */}
            <section className="mb-8">
              <div className="mb-6">
                {isLoading ? (
                  <SectionHeaderSkeleton width="80px" />
                ) : (
                  <SectionHeader title="Earnings" />
                )}
              </div>

              {/* Earnings Cards Grid */}
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Left side: Earnings Cards + Bonus Banner */}
                <div className="lg:basis-[48%] flex flex-col gap-4">
                  <SectionErrorBoundary sectionName="earnings cards">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {isLoading ? (
                        <>
                          <EarningsCardSkeleton />
                          <EarningsCardSkeleton />
                        </>
                      ) : (
                        <>
                          <EarningsCard
                            title="Last Epoch"
                            points={234}
                            onBreakdownClick={() => {
                              // Open modal with detailed epoch breakdown
                            }}
                          />
                          <EarningsCard
                            title="Lifetime"
                            points={1300}
                            formatPoints={true}
                            onBreakdownClick={() => {
                              // Open modal with lifetime earnings breakdown
                            }}
                          />
                        </>
                      )}
                    </div>
                  </SectionErrorBoundary>
                  {/* Bonus Banner */}
                  <SectionErrorBoundary sectionName="bonus banner">
                    {isLoading ? (
                      <BonusBannerSkeleton />
                    ) : (
                      <BonusBanner
                        title="Bonuses available!"
                        description="The more you participate, the more you earn."
                        ctaText="SEE OPPORTUNITIES"
                        onCtaClick={() => {
                          // Navigate to bonus opportunities page
                        }}
                      />
                    )}
                  </SectionErrorBoundary>
                </div>
                {/* Right side: Earnings History */}
                <div className="lg:basis-[52%]">
                  <SectionErrorBoundary sectionName="earnings history">
                    {isLoading ? (
                      <EarningsHistorySkeleton />
                    ) : (
                      <EarningsHistory data={earningsData} />
                    )}
                  </SectionErrorBoundary>
                </div>
              </div>
            </section>

            {/* Leaderboard Section */}
            <SectionErrorBoundary sectionName="leaderboard">
              {isLoading ? (
                <LeaderboardSkeleton />
              ) : (
                <Leaderboard
                  entries={[
                    {
                      rank: userProfile.rank,
                      userId: userProfile.id,
                      avatar: userProfile.avatar,
                      lifetimeEarning: userProfile.lifetimeEarning,
                      thisEpoch: userProfile.thisEpoch,
                      referrals: userProfile.referrals,
                    },
                    ...leaderboardData,
                  ]}
                  currentUserId={userProfile.id}
                />
              )}
            </SectionErrorBoundary>
          </main>
        </div>
      </div>
    </div>
  );
}
