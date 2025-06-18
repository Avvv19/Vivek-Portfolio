'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import ParticleBackground from '@/components/ParticleBackground';

export default function ContactPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      <ParticleBackground />

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/contact-bg.jpg"
          alt="Contact Background"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Let’s Connect
          </h1>
          <p className="text-lg text-gray-300">
            Have a project, question, or opportunity? I’d love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10"
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
}

