
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function GPTProjectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white px-4 pt-20 pb-16 relative overflow-hidden">
      <motion.div className="max-w-4xl mx-auto space-y-10" initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center">
          GPT-Powered Career Assistant
        </h1>
        <p className="text-xl text-gray-300 text-center">
          A custom-trained AI chatbot that understands my career journey and guides recruiters, educators, and students in real time.
        </p>

        <Image
          src="/images/projects/mental-health-bot.jpg"
          alt="GPT Project"
          width={800}
          height={500}
          className="rounded-xl border border-white/10 shadow-lg"
        />

        <div className="bg-white/5 p-6 rounded-xl border border-white/10 space-y-4">
          <h2 className="text-2xl font-semibold text-pink-400">🚀 Problem</h2>
          <p className="text-gray-300">
            Traditional portfolio websites lack contextual engagement. Recruiters want quick, tailored answers, not static lists of skills or resumes.
          </p>

          <h2 className="text-2xl font-semibold text-cyan-400">🧠 Solution</h2>
          <p className="text-gray-300">
            I trained a GPT-4 chatbot using structured JSON derived from my resume, projects, and experiences. It adapts replies to job markets in the US, UK, and India.
          </p>

          <h2 className="text-2xl font-semibold text-purple-400">📊 Results</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>F1 Score: 93.6% (Custom Eval Dataset)</li>
            <li>Avg Response Time: &lt; 2.5s via Vercel Edge</li>
            <li>Supports 3 markets + voice integration</li>
          </ul>

          <div className="flex flex-wrap gap-2 pt-2">
            {['Next.js', 'GPT-4 API', 'LangChain', 'Vercel', 'TailwindCSS', 'JSON', 'Framer Motion'].map((tech) => (
              <span key={tech} className="bg-cyan-800/50 text-cyan-100 px-3 py-1 rounded-full text-xs">
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-4">
            <Link href="/chat" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition">
              Try the GPT Chatbot →
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
