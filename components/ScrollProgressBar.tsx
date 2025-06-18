'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ScrollProgressBarProps {
  className?: string;
  color?: string;
  height?: number;
}

export default function ScrollProgressBar({ 
  className = '', 
  color = 'bg-gradient-to-r from-blue-500 to-purple-500',
  height = 3
}: ScrollProgressBarProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 z-50 ${color} ${className}`}
      style={{
        scaleX,
        height,
        transformOrigin: "0%"
      }}
    />
  );
}
