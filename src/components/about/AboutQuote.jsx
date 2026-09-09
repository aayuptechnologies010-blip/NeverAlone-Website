import React from 'react';
import { motion } from 'framer-motion';

export default function AboutQuote() {
  return (
    <section className="py-16 relative bg-brand-900 border-t border-b border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-romantic-DEFAULT/5 via-brand-900 to-electric-cyan/5 pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-3xl lg:text-6xl font-serif italic text-white mb-10 leading-tight">
            “You don’t have to have <br /> the perfect words.”
          </h2>
          
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-gray-400 font-light">
              You can start with:
            </p>
            <p className="text-2xl md:text-3xl font-medium text-romantic-200">
              ‘Hey, I just need someone to talk to.’
            </p>
            <p className="text-lg md:text-xl text-gray-400 font-light pt-4">
              That’s enough.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
