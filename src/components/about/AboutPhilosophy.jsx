import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake } from 'lucide-react';

export default function AboutPhilosophy() {
  return (
    <section className="py-16 bg-brand-950 relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-romantic-DEFAULT/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 inline-block"
        >
          <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative">
            <HeartHandshake className="w-10 h-10 text-white" />
            <div className="absolute inset-0 rounded-full border border-white/20 animate-ping" style={{ animationDuration: '3s' }} />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-3xl lg:text-6xl font-semibold text-white mb-6 leading-tight"
        >
          Neuravia isn’t about having <br className="hidden md:block" />
          <span className="text-gray-400">the perfect conversation.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl font-medium text-romantic-200 mb-10"
        >
          It’s about knowing there’s someone <br className="hidden md:block" />
          you can start one with.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-gray-500 uppercase tracking-widest font-semibold"
        >
          <p>Someone to talk to.</p>
          <p>Someone who listens.</p>
        </motion.div>

      </div>
    </section>
  );
}
