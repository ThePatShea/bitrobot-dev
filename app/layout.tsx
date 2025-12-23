/**
 * Root layout component
 * Provides global layout structure and metadata
 */

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

/**
 * Inter font configuration
 */
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

/**
 * Site configuration for meta tags
 */
const siteConfig = {
  name: 'BitRobot',
  title: 'BitRobot Dashboard',
  description:
    'Explore the BitRobot Network, track your earnings, and climb the leaderboard. Join the community and start earning today.',
  url: 'https://bitrobot.ai',
  ogImage: '/images/robots.png',
  twitterHandle: '@BitRobotNetwork',
};

/**
 * Metadata for the application
 * Includes Open Graph and Twitter Card meta tags for social sharing
 */
export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['BitRobot', 'crypto', 'earnings', 'blockchain', 'rewards', 'leaderboard', 'network'],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,

  // Favicon and icons
  icons: {
    icon: '/icons/logo.svg',
    shortcut: '/icons/logo.svg',
    apple: '/icons/logo.svg',
  },

  // Open Graph metadata for Facebook, LinkedIn, etc.
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Track your earnings and climb the leaderboard`,
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
    site: siteConfig.twitterHandle,
  },

  // Additional metadata
  metadataBase: new URL(siteConfig.url),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
