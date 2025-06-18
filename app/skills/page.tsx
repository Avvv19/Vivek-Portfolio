'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import ParticleBackground from '@/components/ParticleBackground'

export default function SkillsPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const skills = [
    "Python", "R", "SQL", "TensorFlow", "PyTorch", "Hugging Face",
    "GCP", "AWS", "Docker", "MLOps", "Spark", "Airflow",
    "Power BI", "Streamlit", "Statistical Analysis", "XGBoost", "Scikit-learn",
    "Transformers", "Predictive Modeling", "Reinforcement Learning"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white relative overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 pt-20 pb-16 max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <Star className="mx-auto mb-4 w-10 h-10 text-blue-400" />
          <h1 className="text-5xl font-bold text-blue-400">Technical Mastery</h1>
          <p className="text-lg text-gray-300 mt-4">My skill set spans AI, ML, engineering, cloud, and analytics.</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          {skills.map((skill, index) => (
            <div key={index} className="bg-white/5 text-center p-4 rounded-xl border border-white/10 hover:border-blue-400/40 transition">
              <span className="text-white">{skill}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

