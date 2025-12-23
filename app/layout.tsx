/**
 * Root layout component
 * Provides global layout structure and metadata
 */

import type { Metadata } from "next";
import "./globals.css";

/**
 * Metadata for the application
 */
export const metadata: Metadata = {
  title: "BitRobot Dashboard",
  description: "Explore the BitRobot Network and track your earnings",
};

/**
 * Root layout component
 * Wraps all pages with common HTML structure
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
