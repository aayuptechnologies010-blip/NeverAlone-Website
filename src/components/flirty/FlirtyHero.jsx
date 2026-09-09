import React from 'react';
import { motion } from 'framer-motion';

export default function FlirtyHero({ onScrollToVibe }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-romantic-DEFAULT/10 to-dream-purple/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-romantic-DEFAULT/30 bg-romantic-DEFAULT/10 mb-8"
        >
          <span className="text-sm font-medium text-romantic-pink">Playful. Respectful. 18+ ✨</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-6"
        >
          A little chemistry.<br />
          A good conversation.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-romantic-pink to-dream-purple">
            Nothing complicated.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Enjoy light, playful and consensual phone conversations with people who know how to keep things fun and respectful.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <button
            onClick={onScrollToVibe}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-romantic-DEFAULT to-dream-purple hover:shadow-[0_0_25px_rgba(219,39,119,0.5)] transition-all hover:-translate-y-1"
          >
            Find My Vibe
          </button>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-medium text-white border border-white/20 hover:bg-white/5 transition-colors"
          >
            How Flirty Mode Works
          </a>
        </motion.div>

        {/* Rules line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider"
        >
          <span>18+</span>
          <span className="w-1 h-1 rounded-full bg-gray-600" />
          <span>Consensual</span>
          <span className="w-1 h-1 rounded-full bg-gray-600" />
          <span>Non-Explicit</span>
          <span className="w-1 h-1 rounded-full bg-gray-600" />
          <span>Phone Calls Only</span>
        </motion.div>
      </div>
    </section>
  );
}
