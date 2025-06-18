'use client';

import { usePathname } from 'next/navigation';
import Head from 'next/head';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import ThemeProvider from '@/components/ThemeProvider';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import GlitchIntro from '@/components/GlitchIntro';
import AudioReactiveBackground from '@/components/AudioReactiveBackground';
import PageTransitionWrapper from '@/components/PageTransitionWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI & Data Science Expert',
  description: 'From Molecules to Machine Learning: A Data-Driven Transformation.',
  authors: [{ name: 'Venkata Vivek Varma' }],
};

const FaviconHead = () => {
  const pathname = usePathname();
  const getFavicon = () => {
    if (pathname.startsWith('/projects/ai-ml')) return '/icons/ai-ml/favicon.ico';
    if (pathname.startsWith('/projects/healthcare')) return '/icons/healthcare/favicon.ico';
    if (pathname.startsWith('/projects/web-dev')) return '/icons/web-dev/favicon.ico';
    if (pathname.startsWith('/projects/research')) return '/icons/research/favicon.ico';
    if (pathname.startsWith('/chat')) return '/icons/chat/favicon.ico';
    if (pathname.startsWith('/contact')) return '/icons/contact/favicon.ico';
    if (pathname.startsWith('/about')) return '/icons/about/favicon.ico';
    return '/icons/default/favicon.ico';
  };

  return (
    <Head>
      <link rel="icon" href={getFavicon()} />
    </Head>
  );
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <FaviconHead />
      <body className={`${inter.className} antialiased bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white`}>
        <ThemeProvider>
          <AudioReactiveBackground />
          <GlitchIntro />
          <div className="min-h-screen">
            <Navigation />
            <ThemeToggle />
            <PageTransitionWrapper>
              <main className="relative overflow-hidden">{children}</main>
            </PageTransitionWrapper>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
