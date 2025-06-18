'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function GlitchIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 4000); // hide after 4s
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3.2, duration: 0.8, ease: 'easeOut' }}
    >
      <motion.h1
        className="glitch text-5xl sm:text-6xl md:text-7xl font-bold uppercase text-center tracking-widest"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        VIVEK VARMA
      </motion.h1>
    </motion.div>
  );
}

