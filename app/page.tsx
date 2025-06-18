'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Brain,
  Briefcase,
  BookOpen,
  Award,
  Star,
  Users,
  Activity,
  Target
} from 'lucide-react';

import Chatbot from '@/components/Chatbot';
import VoiceAssistant from '@/components/VoiceAssistant';
import ParticleBackground from '@/components/ParticleBackground';

const Section = ({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-6 border border-white/10 rounded-xl">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 bg-white/5 hover:bg-white/10 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-6 h-6 text-blue-400" />
          <span className="font-semibold text-lg text-white">{title}</span>
        </div>
        <ChevronDown className={`w-5 h-5 text-white transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 py-4 text-white space-y-4 bg-white/5"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">

      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg" // or use hero-4k.jpg conditionally
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Optional dark overlay */}
      </div>

      <ParticleBackground />

      <section className="relative z-10 text-center py-20 px-4">
        <h1 className="text-5xl font-bold glitch text-white mb-2">Venkata Vivek Varma Alluru</h1>
        <p className="text-lg text-blue-300">
          From Molecules to Machine Learning: A Data-Driven Transformation
        </p>
      </section>

      <div className="relative z-10 max-w-4xl mx-auto px-4 pb-24">
        {/* Future sections */}
      </div>

      <div className="fixed bottom-6 left-6 z-40">
        <VoiceAssistant />
      </div>
      <div className="fixed bottom-6 right-6 z-40">
        <Chatbot />
      </div>
    </div>
  );
}
