import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import React from "react";
import { Providers } from "@/components/providers";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Typewriting - Chatbot that replaces forms.",
  description: "An intelligent feedback tool that listens, asks follow-up questions, identifies key information, and explains to help customers better understand your service or product.",
  keywords: ["business communication, AI chatbot, email management, generative AI, inbox automation, smart replies, AI assistant, automated responses, chat-based AI, business AI tools, reduce email overload, AI customer support, smart business chat, enterprise AI, document-based AI replies"],

  // Author and site info
  authors: [{ name: "Typewriting.ai" }],
  creator: "Typewriting.ai",
  publisher: "Typewriting.ai",

  icons: {
    icon: '/favicon.ico',
  },

  openGraph: {
    title: "Typewriting - Chatbot that replaces forms.",
    description: "An intelligent feedback tool that listens, asks follow-up questions, identifies key information, and explains to help customers better understand your service or product.",
    url: 'https://typewriting.ai',
    siteName: 'Typewriting',
    images: ['/typewriting-logo.jpg'],
    locale: 'en_US',
    type: 'website',
  },

  alternates: {
    canonical: 'https://typewriting.ai',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Typewriting - Chatbot that replaces forms.',
    description: 'An intelligent feedback tool that listens, asks follow-up questions, identifies key information, and explains to help customers better understand your service or product.',
    images: ['/typewriting-logo.jpg'],
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

  category: 'business',

};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-VVR0XTQPJD';

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
    </Script>
    <link rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 128 128%22><text y=%221.2em%22 font-size=%2296%22>⬛</text><text y=%221.3em%22 x=%220.2em%22 font-size=%2276%22 fill=%22%23fff%22>tw</text></svg>"/>
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white text-[rgb(var(--tpr-text-default))]`}
    >
    <Providers>
      <Header/>
      <main className="pt-20 flex-grow">
        {children}
      </main>
      <Footer/>
    </Providers>
    </body>
    </html>
  );
}
