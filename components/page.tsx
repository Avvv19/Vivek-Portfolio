'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Target, Users } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import SkillsSection from '@/components/SkillsSection';
import ProjectCard from '@/components/ProjectCard';
import Chatbot from '@/components/Chatbot';
import VoiceAssistant from '@/components/VoiceAssistant';

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const featuredProjects = [
    {
      title: 'Sample Project',
      description: 'A short project summary.',
      image: '/images/projects/sample.jpg',
      tags: ['AI'],
      metrics: '90% Success',
      link: '#'
    }
  ];

  const stats = [
    { number: '94%', label: 'AI Model Accuracy', icon: Target },
    { number: '100+', label: 'Students Mentored', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <ParticleBackground />
      <section id="hero" className="min-h-screen flex items-center justify-center px-4">
        <motion.div style={{ y }} className="text-center z-10">
          <h1 className="text-5xl font-bold text-white">Vivek Varma</h1>
          <p className="text-lg text-gray-300">AI/ML Engineer • Data Scientist</p>
          <ChevronDown onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })} className="mt-4 w-8 h-8 mx-auto text-white/60 cursor-pointer" />
        </motion.div>
      </section>
      <section id="stats" className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center">
                <Icon className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                <div className="text-4xl font-bold text-white">{stat.number}</div>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
      <section id="projects" className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid gap-8">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </section>
      <SkillsSection />
      <Chatbot />
      <div className="fixed bottom-6 left-6 z-40">
        <VoiceAssistant />
      </div>
    </div>
  );
}
