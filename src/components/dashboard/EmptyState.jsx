import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

// Generic empty-state component with an icon, message, and CTA.
export default function EmptyState({
  title = 'No conversations here yet.',
  message = 'Whenever you feel like talking, someone is just a few steps away.',
  ctaLabel = 'Find Someone',
  ctaTo = '/categories',
  icon: Icon = Search,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center text-center py-16 px-6"
    >
      <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-gray-400" />
      </div>

      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 max-w-sm mb-8">{message}</p>

      <Link
        to={ctaTo}
        className="px-6 py-3 rounded-full text-sm font-medium text-white bg-gradient-to-r from-romantic-DEFAULT to-dream-DEFAULT hover:shadow-[0_0_20px_rgba(219,39,119,0.4)] transition-all duration-300"
      >
        {ctaLabel}
      </Link>
    </motion.div>
  );
}
