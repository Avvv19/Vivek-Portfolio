'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function FaviconHead() {
  const pathname = usePathname();

  const section = (() => {
    if (pathname.startsWith('/projects/ai-ml')) return 'ai-ml';
    if (pathname.startsWith('/projects/healthcare')) return 'healthcare';
    if (pathname.startsWith('/projects/web-dev')) return 'web-dev';
    if (pathname.startsWith('/projects/research')) return 'research';
    if (pathname.startsWith('/chat')) return 'chat';
    if (pathname.startsWith('/voice')) return 'voice';
    if (pathname.startsWith('/contact')) return 'contact';
    if (pathname.startsWith('/about')) return 'about';
    return 'default';
  })();

  useEffect(() => {
    const head = document.head;

    const icons = [
      { rel: 'icon', href: `/icons/${section}/favicon.ico`, type: 'image/x-icon' },
      { rel: 'apple-touch-icon', href: `/icons/${section}/apple-touch-icon.png`, sizes: '180x180' },
      { rel: 'shortcut icon', href: `/icons/${section}/favicon-32x32.png`, type: 'image/png' },
      { rel: 'icon', href: `/icons/${section}/favicon-16x16.png`, type: 'image/png', sizes: '16x16' },
      { rel: 'icon', href: `/icons/${section}/android-chrome-192x192.png`, type: 'image/png', sizes: '192x192' },
      { rel: 'icon', href: `/icons/${section}/android-chrome-512x512.png`, type: 'image/png', sizes: '512x512' }
    ];

    // Remove old icons
    head.querySelectorAll('link[rel*="icon"]').forEach(link => link.remove());

    // Append new icons
    icons.forEach(attrs => {
      const link = document.createElement('link');
      Object.entries(attrs).forEach(([key, value]) => link.setAttribute(key, value));
      head.appendChild(link);
    });
  }, [section]);

  return null;
}
