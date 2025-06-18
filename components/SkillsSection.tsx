'use client';

import { motion } from 'framer-motion';

const skills = [
  'Python', 'R', 'SQL', 'TensorFlow', 'PyTorch', 'Hugging Face',
  'XGBoost', 'Pandas', 'Scikit-learn', 'Power BI', 'GCP', 'AWS',
  'Streamlit', 'LangChain', 'Transformers', 'Docker', 'Kubernetes',
  'MLflow', 'Airflow', 'BigQuery', 'Kafka', 'FastAPI', 'React'
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm shadow-sm hover:scale-105 transition-transform"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
