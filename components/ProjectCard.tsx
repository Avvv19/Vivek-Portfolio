'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  metrics?: string;
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags = [],
  metrics,
  link = '#',
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-gray-800/80 rounded-2xl overflow-hidden shadow-lg transition-all border border-gray-700"
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-4 space-y-2">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
          {metrics && <p className="text-xs text-green-400">{metrics}</p>}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </a>
    </motion.div>
  );
}
