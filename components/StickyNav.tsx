// components/StickyNav.tsx
'use client';

import React from 'react';

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Extras', id: 'extras' },
  { label: 'Vision', id: 'vision' }
];

export default function StickyNav() {
  return (
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur px-6 py-3 flex gap-4 overflow-x-auto scrollbar-hide border-b border-white/10">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="text-white hover:text-blue-400 transition-colors whitespace-nowrap"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
