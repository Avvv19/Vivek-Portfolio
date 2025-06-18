'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import VoiceAssistant from '@/components/VoiceAssistant';
import ParticleBackground from '@/components/ParticleBackground';

export default function VoicePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      <ParticleBackground />

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/voice-bg.jpg"
          alt="Voice Background"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        <motion.div initial="initial" animate="animate" variants={fadeInUp}>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-300 to-teal-400 bg-clip-text text-transparent">
            Voice Assistant
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mb-10">
            Meet your real-time voice-powered assistant. It understands natural conversation,
            reacts instantly, and supports both Indian and US English accents — powered by GPT-4o.
          </p>
        </motion.div>

        <motion.div
          className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <VoiceAssistant />
        </motion.div>
      </div>
    </div>
  );
}

