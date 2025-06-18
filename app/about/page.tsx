'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, GraduationCap, Award, Users, Lightbulb } from 'lucide-react'
import ParticleBackground from '@/components/ParticleBackground'
import SkillsSection from '@/components/SkillsSection'
import Timeline from '@/components/Timeline'
import Image from 'next/image'
import React from 'react'

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const experiences = [
    {
      title: "Graduate Assistant",
      company: "New England College",
      period: "2024 – 2025",
      location: "New Hampshire, US",
      description: "Transformed educational outcomes by mentoring over 100 students in Python programming, SQL optimization, and statistical modeling. Developed innovative teaching approaches resulting in 15% improvement in course completion rates.",
      achievements: [
        "Mentored 100+ students in advanced programming",
        "Improved course completion rates by 15%",
        "Reduced assessment time by 40% through automation",
        "Architected Python-based automated grading systems"
      ]
    },
    {
      title: "Research Assistant – NLP Course Design",
      company: "New England College",
      period: "2024",
      location: "New Hampshire, US", 
      description: "Pioneered cutting-edge natural language processing curriculum development, integrating advanced frameworks and achieving 20% increase in student engagement.",
      achievements: [
        "Developed NLP curriculum with Hugging Face Transformers",
        "Increased student engagement by 20%",
        "Created deployment-ready educational content",
        "Integrated PyTorch architectures for practical learning"
      ]
    },
    {
      title: "Pharmacy Data Analyst",
      company: "Medi Sure Drug Mart",
      period: "2020 – 2023",
      location: "Hyderabad, India",
      description: "Revolutionized data management by constructing automated processing pipelines handling 500+ records daily with 98% accuracy rates.",
      achievements: [
        "Processed 500+ records daily with 98% accuracy",
        "Reduced operational timelines by 25%",
        "Implemented secure data management systems",
        "Ensured regulatory compliance frameworks"
      ]
    }
  ]

  const education = [
    {
      degree: "Master's in Data Science & Analytics",
      school: "New England College",
      period: "2024–2025",
      location: "New Hampshire, US",
      focus: "Advanced AI, Machine Learning, and Statistical Modeling"
    },
    {
      degree: "Master of Pharmacy (Pharmaceutics)",
      school: "Osmania University",
      period: "2017–2019",
      location: "Hyderabad, India",
      focus: "Novel Systems and Advanced Analytics"
    },
    {
      degree: "Bachelor of Pharmacy",
      school: "Osmania University", 
      period: "2013–2017",
      location: "Hyderabad, India",
      focus: "Applied Sciences and Chemical Analysis"
    }
  ]

  // Education Section is rendered inside the return statement below; remove this stray JSX block.

  const leadership = [
    {
      title: "Conference Speaker",
      event: "ETIPS 2019",
      description: "Presented breakthrough research to 80+ industry professionals"
    },
    {
      title: "Event Management Leadership",
      event: "Public Event 2022",
      description: "Orchestrated large-scale event for 3,000+ attendees with 10% budget optimization"
    },
    {
      title: "Sports Team Captain",
      event: "College Championships",
      description: "Led team to four consecutive championship victories (2018–2022)"
    }
  ]

   return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero Section */}
          <motion.div className="text-center mb-16" initial="initial" animate="animate" variants={staggerChildren}>
            <motion.div className="w-40 h-40 mx-auto mb-6 relative" variants={fadeInUp}>
              <Image
                src="/images/profile.png"
                alt="Vivek Profile"
                width={160}
                height={160}
                className="rounded-full ring-4 ring-yellow-400 shadow-xl object-cover"
                priority
              />
            </motion.div>

            <motion.h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" variants={fadeInUp}>
              About Me
            </motion.h1>
            <motion.p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed" variants={fadeInUp}>
              From pharmaceutical labs to AI architectures, my journey bridges healthcare expertise with cutting-edge technology to solve complex business challenges.
            </motion.p>
          </motion.div>

          {/* Story Section */}
          <motion.div className="mb-20" initial="initial" animate="animate" variants={fadeInUp}>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">My Journey</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                My story began in the pharmaceutical labs of Hyderabad, India, where I spent years understanding the intricate science behind life-saving medications...
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Today, I stand at the intersection of healthcare knowledge and cutting-edge technology...
              </p>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div className="mb-20" initial="initial" animate="animate" variants={staggerChildren}>
            <motion.h2 className="text-4xl font-bold mb-12 text-center text-purple-400" variants={fadeInUp}>
              Professional Experience
            </motion.h2>
            {/* ... mapped experiences ... */}
          </motion.div>

          {/* Education Section */}
          <motion.div className="mb-20" initial="initial" animate="animate" variants={staggerChildren}>
            <motion.h2 className="text-4xl font-bold mb-12 text-center text-cyan-400" variants={fadeInUp}>
              Education
            </motion.h2>
            {/* ... mapped education ... */}
          </motion.div>

          {/* ✅ Timeline Inserted Here */}
          <Timeline />


          {/* Skills Section */}
          <SkillsSection />

          {/* Certifications Section */}
<motion.div 
  className="mb-20"
  initial="initial"
  animate="animate"
  variants={staggerChildren}
>
  <motion.h2 
    className="text-4xl font-bold mb-12 text-center text-yellow-400"
    variants={fadeInUp}
  >
    Certifications
  </motion.h2>

  <div className="grid md:grid-cols-2 gap-6">
    {[
      "Google Cloud ML Engineer",
      "Microsoft GenAI Essentials",
      "Python & SQL (HackerRank)",
      "ISRO Geo Data Processing",
      "Quantium Analytics (Forage)"
    ].map((cert, index) => (
      <motion.div
        key={index}
        className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20 hover:border-yellow-400/40 transition"
        variants={fadeInUp}
      >
        <div className="flex items-center gap-3 text-yellow-300 text-lg">
          <Award className="w-5 h-5" />
          <span>{cert}</span>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>

           {/* Leadership Section */}
          <motion.div className="mb-20" initial="initial" animate="animate" variants={staggerChildren}>
            <motion.h2 className="text-4xl font-bold mb-12 text-center text-pink-400" variants={fadeInUp}>
              Leadership & Community Impact
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300 text-center"
                  variants={fadeInUp}
                >
                  <Users className="w-8 h-8 text-pink-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{leader.title}</h3>
                  <p className="text-pink-300 mb-3">{leader.event}</p>
                  <p className="text-sm text-gray-300">{leader.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Vision Section */}
          <motion.div className="text-center" initial="initial" animate="animate" variants={fadeInUp}>
            <div className="bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <Lightbulb className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">My Vision</h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
                I believe the future lies in intelligent systems that augment human capability rather than replace human connection. My goal is to create AI solutions that empower professionals to make better decisions, enable organizations to optimize their operations, and bridge the gap between complex data and meaningful business outcomes.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}