'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';

const experiences = [
  {
    title: 'Graduate Assistant',
    company: 'New England College',
    period: '2024 – 2025',
    location: 'New Hampshire, US',
    description:
      'Mentored 100+ students in Python, SQL, and statistical modeling. Developed automation tools reducing grading time by 40%.',
    achievements: [
      '15% improvement in course completion',
      'Python-based grading automation',
      'Optimized academic workflows',
    ],
  },
  {
    title: 'Research Assistant – NLP Course Design',
    company: 'New England College',
    period: '2024',
    location: 'New Hampshire, US',
    description:
      'Designed curriculum in NLP using Hugging Face and PyTorch. Improved student engagement by 20%.',
    achievements: [
      'Created deployment-ready content',
      'Integrated neural architectures in learning',
    ],
  },
  {
    title: 'Pharmacy Data Analyst',
    company: 'Medi Sure Drug Mart',
    period: '2020 – 2023',
    location: 'Hyderabad, India',
    description:
      'Automated daily record processing. Maintained 98% accuracy across 500+ daily entries.',
    achievements: [
      '25% reduction in operational timelines',
      'Secured compliance with industry standards',
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10 pt-20 pb-16 max-w-5xl mx-auto px-4">
        <motion.h1
          className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Experience
        </motion.h1>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h2 className="text-2xl font-bold text-white mb-1">{exp.title}</h2>
              <p className="text-purple-300 mb-1">{exp.company}</p>
              <div className="flex text-sm text-gray-400 mb-3 gap-6">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" /> {exp.period}
                </span>
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> {exp.location}
                </span>
              </div>
              <p className="mb-3 text-gray-300">{exp.description}</p>
              <ul className="list-disc pl-5 text-sm text-gray-300">
                {exp.achievements.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <Award className="w-4 h-4 text-cyan-400 mr-2 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}


