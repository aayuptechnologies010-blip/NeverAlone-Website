import React from 'react';
import { motion } from 'framer-motion';

const EmotionalIntro = () => {
  const prompts = [
    "Had a long day?",
    "Heart feeling heavy?",
    "Relationship confusing you?",
    "Family situation bothering you?",
    "Career stuck in your head?",
    "Or just feeling a little alone?"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section 
      className="py-10 relative overflow-hidden flex flex-col items-center justify-center min-h-[70vh] bg-cover bg-center"
      style={{ backgroundImage: 'url(/emotional_bg.jpg)' }}
    >
      <div className="absolute inset-0 bg-brand-950/70 backdrop-blur-[2px]" />
      
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-romantic-DEFAULT/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-3xl font-serif italic text-white mb-6"
        >
          "Sometimes, one conversation changes the whole mood."
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center space-y-6 mb-8"
        >
          {prompts.map((prompt, index) => (
            <motion.div key={index} variants={itemVariants}>
              <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide">
                {prompt}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="inline-block px-8 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <p className="text-2xl md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-romantic-pink to-electric-cyan">
              Whatever it is — you can talk about it here.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmotionalIntro;
