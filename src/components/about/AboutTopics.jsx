import React from 'react';
import { motion } from 'framer-motion';

export default function AboutTopics({ topics }) {
  // Simple floating animation variants
  const floatVariants = {
    initial: { y: 0 },
    animate: (custom) => ({
      y: [0, custom % 2 === 0 ? -10 : 10, 0],
      transition: {
        duration: 4 + (custom % 3),
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  };

  return (
    <section className="py-16 bg-brand-950 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950 via-electric-cyan/5 to-brand-950 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-3xl font-semibold text-white mb-6">
            Whatever’s on your mind.
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {topics.map((topic, i) => (
            <motion.div
              key={topic}
              custom={i}
              variants={floatVariants}
              initial="initial"
              animate="animate"
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium backdrop-blur-sm shadow-sm"
            >
              {topic}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
