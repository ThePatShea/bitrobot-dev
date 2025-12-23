/**
 * Root layout component
 * Provides global layout structure and metadata
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/**
 * Inter font configuration
 */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/**
 * Metadata for the application
 */
export const metadata: Metadata = {
  title: "BitRobot Dashboard",
  description: "Explore the BitRobot Network and track your earnings",
  icons: {
    icon: "/icons/logo.svg",
  },
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
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
