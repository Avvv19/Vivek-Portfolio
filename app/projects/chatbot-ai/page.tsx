'use client';

import { motion } from 'framer-motion';

export default function GPTProjectPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          GPT Project Showcase
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          A conversational AI chatbot with real-time responses, emotion-aware tone adjustment, and multilingual support.
        </p>
      </motion.div>

      <div className="mt-16 max-w-3xl mx-auto bg-white/5 p-6 rounded-xl border border-white/10">
        <h2 className="text-xl font-semibold text-cyan-400 mb-2">Core Features</h2>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Powered by GPT-4o for emotion-aware conversations</li>
          <li>Voice synthesis and multilingual inputs</li>
          <li>Contextual understanding and memory</li>
          <li>UI inspired by chat bubbles with typing effects</li>
        </ul>
      </div>
    </div>
  );
}

