import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// A subtle emotional micro-card for the dashboard.
export default function EmotionalCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="rounded-2xl border border-white/10 bg-gradient-to-br from-romantic-DEFAULT/5 to-dream-purple/5 backdrop-blur-md p-6 text-center"
    >
      <p className="text-sm text-gray-300 leading-relaxed mb-1">
        Some days you'll have a lot to say.
      </p>
      <p className="text-sm text-gray-300 leading-relaxed mb-1">
        Some days you won't.
      </p>
      <p className="text-sm text-gray-400 italic mb-5">Both are okay.</p>

      <Link
        to="/categories"
        className="inline-block px-5 py-2 rounded-full text-xs font-medium text-gray-300 border border-white/10 hover:bg-white/5 transition-colors"
      >
        Find Someone
      </Link>
    </motion.div>
  );
}
