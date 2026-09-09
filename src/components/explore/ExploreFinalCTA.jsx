import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const floatingHearts = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  duration: Math.random() * 10 + 10,
  delay: Math.random() * 10,
  size: Math.random() * 16 + 8,
}));

const ExploreFinalCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-brand-900 flex flex-col items-center justify-center text-center border-t border-white/10 min-h-[50vh]">

      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-pink-500/25"
            style={{ left: heart.left, bottom: '-40px' }}
            animate={{
              y: ['0vh', '-100vh'],
              opacity: [0, 0.7, 0],
              rotate: [0, Math.random() * 360]
            }}
            transition={{ duration: heart.duration, repeat: Infinity, delay: heart.delay, ease: "linear" }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: heart.size, height: heart.size }}>
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Heart Outline */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25 z-0">
        <svg viewBox="0 0 24 24" className="w-[280px] h-[280px] md:w-[420px] md:h-[420px]" fill="none" stroke="url(#expHG)" strokeWidth="0.3">
          <defs>
            <linearGradient id="expHG" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          <motion.path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-gray-400 mb-4 font-medium"
        >
          You don't have to know exactly what you need.
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-4xl font-semibold text-white mb-8"
        >
          Start with what's on your mind.
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-10"
        >
          <p className="text-2xl md:text-4xl font-serif italic text-white leading-tight mb-3">
            "Hey… I just need someone to talk to."
          </p>
          <p className="text-lg text-pink-400 font-medium">That's enough. 💗</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/categories"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-white bg-pink-600 hover:bg-pink-500 hover:shadow-[0_0_30px_rgba(219,39,119,0.4)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Find Someone
          </Link>
          <button
            onClick={() => document.getElementById('all-categories')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-medium text-white border border-white/20 hover:bg-white/10 transition-all duration-300"
          >
            Browse Companions
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreFinalCTA;
