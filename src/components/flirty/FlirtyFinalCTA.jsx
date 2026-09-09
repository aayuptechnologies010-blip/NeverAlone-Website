import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function FlirtyFinalCTA({ onScrollToVibe }) {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950 via-romantic-DEFAULT/5 to-brand-950 pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
            <Sparkles className="w-4 h-4 text-romantic-pink" />
            <span className="text-xs font-semibold text-gray-300 tracking-wider uppercase">
              18+ • Consensual • Non-Explicit
            </span>
          </div>

          <h2 className="text-3xl md:text-3xl font-semibold text-white mb-6 leading-tight">
            Maybe you just want a conversation <br className="hidden md:block" />
            with a little spark. ✨
          </h2>

          <p className="text-gray-400 text-lg mb-10">
            Find someone whose personality matches the mood.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full sm:w-auto">
            <button
              onClick={onScrollToVibe}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-romantic-DEFAULT to-dream-purple hover:shadow-[0_0_25px_rgba(219,39,119,0.5)] transition-all hover:-translate-y-1"
            >
              Find My Vibe
            </button>
            <Link
              to="/categories"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-medium text-gray-300 border border-white/20 hover:bg-white/5 hover:text-white transition-colors"
            >
              Explore All Conversations
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-gray-500 uppercase tracking-widest font-medium">
            <span>Phone Calls Only</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
            <span>Respectful Boundaries</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
