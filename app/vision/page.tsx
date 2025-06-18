'use client'

import { motion } from 'framer-motion'
import { Target } from 'lucide-react'
import ParticleBackground from '@/components/ParticleBackground'

export default function VisionPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white relative overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 pt-20 pb-16 max-w-5xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <Target className="mx-auto mb-4 w-10 h-10 text-pink-400" />
          <h1 className="text-5xl font-bold text-pink-400">My Vision</h1>
          <p className="text-lg text-gray-300 mt-4">AI systems that empower—not replace—human potential.</p>
        </motion.div>

        <motion.div
          className="bg-white/5 rounded-2xl p-6 border border-white/10 text-lg text-gray-300 leading-relaxed"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <p className="mb-4">
            I believe the future lies in intelligent systems that augment human capability rather than replace human connection. 
            My goal is to create AI solutions that empower professionals to make better decisions, enable organizations to optimize their operations, 
            and bridge the gap between complex data and meaningful business outcomes.
          </p>
          <p>
            Every line of code I write, every model I train, and every system I architect is guided by a simple principle: technology should serve humanity's greatest challenges. 
            With my unique combination of domain knowledge, advanced AI expertise, and passion for problem-solving, I'm ready to tackle the most complex business challenges 
            and drive innovation that creates lasting positive impact.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

