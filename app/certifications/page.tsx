'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import Image from 'next/image';
import ParticleBackground from '@/components/ParticleBackground';

export default function CertificationsPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const certifications = [
    "Google Cloud ML Engineer",
    "Microsoft GenAI Essentials",
    "Python & SQL (HackerRank)",
    "ISRO Geo Data Processing",
    "Quantium Analytics (Forage)"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white relative overflow-hidden">
      <ParticleBackground />

      {/* Background certificate image (blurred overlay) */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <Image
          src="/images/certificate.jpg"
          alt="Certificate Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="relative z-10 pt-20 pb-16 max-w-5xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <Award className="mx-auto mb-4 w-10 h-10 text-yellow-400" />
          <h1 className="text-5xl font-bold text-yellow-400">Certifications</h1>
          <p className="text-lg text-gray-300 mt-4">
            Recognized skills across AI, cloud, data, and analytics domains
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          {certifications.map((item, index) => (
            <div
              key={index}
              className="text-white text-center text-lg bg-white/5 p-4 rounded-xl border border-white/10 hover:border-yellow-400/40 transition backdrop-blur-sm"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
