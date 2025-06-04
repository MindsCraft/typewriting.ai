import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ['400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ['400', '500', '600', '700'],
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
  alternates: {
    canonical: SITE_URL,
  },
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
  manifest: '/site.webmanifest',

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`font-sans ${inter.variable} ${jetbrainsMono.variable} h-full scroll-smooth`}
      style={{
        '--font-sans': 'Inter, system-ui, -apple-system, sans-serif',
        '--font-mono': 'JetBrains Mono, monospace'
      } as React.CSSProperties}
    >
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

      <body className="font-sans antialiased">
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
