import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function SafetyFinalCTA() {
  return (
    <section className="py-16 relative overflow-hidden bg-brand-950">
      <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-electric-cyan/5 to-brand-950 pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-3xl font-semibold text-white mb-6 leading-tight">
            Your comfort matters.
          </h2>

          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            You never owe anyone a conversation that crosses your boundaries. We are here to support a safe, respectful environment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full sm:w-auto">
            <Link
              to="/categories"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            >
              Find Someone To Talk To
            </Link>
            <button
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-medium text-gray-300 border border-white/20 hover:bg-white/5 hover:text-white transition-colors"
            >
              Contact Support
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest font-medium">
            <span>18+</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
            <span>Phone Calls Only</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
            <span>Respectful</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
            <span>Non-Explicit</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
