'use client';

import { useEffect, useRef } from 'react';

export default function AudioReactiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const bars = 96;
    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const time = Date.now() * 0.002;

      for (let i = 0; i < bars; i++) {
        const x = (width / bars) * i;
        const barHeight = Math.sin(i * 0.8 + time) * 60 + 80;

        const gradient = ctx.createLinearGradient(x, height, x, height - barHeight);
        gradient.addColorStop(0, '#a855f7'); // purple-500
        gradient.addColorStop(1, '#facc15'); // yellow-400

        ctx.fillStyle = gradient;
        ctx.fillRect(x, height - barHeight, 4, barHeight);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 z-0 w-screen h-screen pointer-events-none opacity-20"
    />
  );
}

