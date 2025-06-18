'use client';

import { motion } from 'framer-motion';
import { Briefcase, School, Star } from 'lucide-react';

const timeline = [
  { icon: <Briefcase />, title: 'Pharmacy Analyst', year: '2020–2023', desc: 'Managed medication records and automated data entry' },
  { icon: <School />, title: 'Master’s in Data Science', year: '2024–2025', desc: 'AI, NLP, Visualization & Cloud Systems' },
  { icon: <Star />, title: 'AI Portfolio Launch', year: '2025', desc: 'Built interactive GPT + Voice Assistant showcase' }
];

export default function Timeline() {
  return (
    <div className="mt-20 space-y-12">
      {timeline.map((item, index) => (
        <motion.div
          key={index}
          className="relative pl-12 border-l border-white/20"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="absolute -left-6 top-1 bg-white/10 p-2 rounded-full">
            {item.icon}
          </div>
          <h3 className="text-xl font-bold text-yellow-300">{item.title}</h3>
          <p className="text-sm text-gray-400">{item.year}</p>
          <p className="text-sm text-gray-300 mt-1">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
