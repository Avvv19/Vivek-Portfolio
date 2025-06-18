'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ParticleBackground from '@/components/ParticleBackground';

export default function Projects() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projects = [
    {
      slug: 'diabetic-data-ai',
      title: 'AI-Powered Diabetic Data Analysis',
      description: 'Advanced predictive system with 94% F1-score using GCP ML infrastructure.',
      technologies: ['Python', 'XGBoost', 'GCP', 'SHAP'],
      metrics: { accuracy: '94%', earlyDetection: '6 months', efficiency: '60% faster' },
      image: '/images/project-1.jpg',  // make sure this image exists locally
      color: 'from-blue-500 to-purple-600'
    },
    {
      slug: 'mental-health-chatbot',
      title: 'Mental Health Chatbot Using GenAI',
      description: 'Conversational AI with 92% satisfaction using HuggingFace + Groq.',
      technologies: ['NLP', 'Groq Cloud', 'LangChain'],
      metrics: { satisfaction: '92%', accuracy: '89%' },
      image: '/images/project-2.jpg',
      color: 'from-green-500 to-teal-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div className="text-center mb-16" initial="initial" animate="animate" variants={staggerChildren}>
            <motion.h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" variants={fadeInUp}>
              My Projects
            </motion.h1>
            <motion.p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed" variants={fadeInUp}>
              Explore the innovations transforming real-world challenges into AI-powered solutions.
            </motion.p>
          </motion.div>

          <motion.div className="grid lg:grid-cols-2 gap-8 mb-16" initial="initial" animate="animate" variants={staggerChildren}>
            {projects.map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Link href={`/projects/${project.slug}`}>
                  <div className="cursor-pointer">
                    <div className={`rounded-xl overflow-hidden border border-white/10 hover:border-cyan-400 transition duration-300 bg-gradient-to-r ${project.color}`}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={500}
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL="/images/placeholder.png"
                        layout="responsive"
                      />
                      <div className="p-4">
                        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                        <p className="text-sm text-gray-300 mb-2">{project.description}</p>
                        <div className="text-xs text-cyan-300">
                          {Object.entries(project.metrics).map(([key, val]) => `${key}: ${val}`).join(' | ')}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
