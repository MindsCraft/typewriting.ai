import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import React from "react";
import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Typewriting - Chatbot that replaces forms.",
  description: "An intelligent feedback tool that listens, asks follow-up questions, identifies key information, and explains to help customers better understand your service or product.",
  keywords: ["business communication, AI chatbot, email management, generative AI, inbox automation, smart replies, AI assistant, automated responses, chat-based AI, business AI tools, reduce email overload, AI customer support, smart business chat, enterprise AI, document-based AI replies"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white text-[rgb(var(--tpr-text-default))]`}
      >
        <Providers>
          <Header />
          <main className="pt-20 flex-grow">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
