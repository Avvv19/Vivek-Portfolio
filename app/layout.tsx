'use client';

import './globals.css';
import { Inter } from 'next/font/google';

import Navigation from '@/components/Navigation';
import ThemeProvider from '@/components/ThemeProvider';
import ThemeToggle from '@/components/ThemeToggle';
import Footer from '@/components/Footer';
import GlitchIntro from '@/components/GlitchIntro';
import AudioReactiveBackground from '@/components/AudioReactiveBackground';
import PageTransitionWrapper from '@/components/PageTransitionWrapper';
import StickyNav from '@/components/StickyNav';
import DynamicFavicon from '@/components/DynamicFavicon';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="theme_color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="description" content="From Molecules to Machine Learning: A Data-Driven Transformation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="application-name" content="Vivek Portfolio" />
        <meta name="author" content="Venkata Vivek Varma Alluru" />
        <meta name="keywords" content="AI, Machine Learning, Healthcare, Portfolio, NLP, Web Dev" />
        <meta property="og:title" content="Vivek Portfolio" />
        <meta property="og:description" content="From Molecules to Machine Learning: A Data-Driven Transformation." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/profile.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>AI & Data Science Expert</title>
      </head>
      <body className={`${inter.className} antialiased bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white`}>
        <DynamicFavicon /> {/* 🔥 Dynamic favicon loader */}
        <ThemeProvider>
          <AudioReactiveBackground />
          <GlitchIntro />
          <div className="relative z-10 min-h-screen flex flex-col">
            <Navigation />
            <StickyNav />
            <ThemeToggle />
            <PageTransitionWrapper>
              <main className="flex-1 overflow-hidden">
                {children}
              </main>
            </PageTransitionWrapper>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
