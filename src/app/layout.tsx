import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import React from "react";
import { Providers } from "@/components/providers";
import Script from "next/script";
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';

// Site metadata constants
const SITE_TITLE = 'Typewriting - Chatbot that replaces forms';
const SITE_DESCRIPTION = 'An intelligent feedback tool that listens, asks follow-up questions, and explains to help customers better understand your service or product.';
const SITE_URL = 'https://typewriting.ai';
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-VVR0XTQPJD';

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Viewport settings
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#2382fc',
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Typewriting.ai",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": SITE_DESCRIPTION,
  "url": SITE_URL,
  "publisher": {
    "@type": "Organization",
    "name": "Typewriting.ai",
    "logo": {
      "@type": "ImageObject",
      "url": `${SITE_URL}/logo.png`
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150"
  }
};

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),

  // Site information
  applicationName: 'Typewriting.ai',
  authors: [{
    name: 'Typewriting.ai',
    url: SITE_URL
  }],
  creator: 'Typewriting.ai',
  publisher: 'Typewriting.ai',
  generator: 'Next.js',

  // SEO
  keywords: [
    'AI chatbot', 'business communication', 'customer support',
    'automated responses', 'enterprise AI', 'chat automation',
    'AI assistant', 'smart replies', 'business automation'
  ],

  // Icons and theme
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },

  // Open Graph
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: 'Typewriting.ai',
    images: [{
      url: `${SITE_URL}/images/og-image.png`,
      width: 1200,
      height: 630,
      alt: SITE_TITLE,
    }],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: '@typewriting_ai',
    site: '@typewriting_ai',
    images: [{
      url: `${SITE_URL}/images/og-image.png`,
      width: 1200,
      height: 630,
      alt: SITE_TITLE,
    }],
  },

  // SEO
  alternates: {
    canonical: SITE_URL,
    languages: {
      'en-US': '/en-US',
    },
  },

  // Robots
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

  // Additional
  category: 'business',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        {/* Google Analytics - Client Component */}
        <GoogleAnalytics />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Preconnect to important origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon and icon links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2382fc" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased text-gray-900 bg-white`}>
        <Providers>
          <Header />
          <main id="main-content" className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
