import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

// Small card to add extra conversation time – opens a modal on click.
export default function ExtraTimeCard({ price, duration, onAddTime }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="rounded-2xl border border-white/10 bg-gradient-to-br from-dream-purple/10 to-electric-cyan/10 backdrop-blur-md p-6"
    >
      <h3 className="text-sm font-semibold text-gray-300 mb-2">
        Need more time?
      </h3>
      <p className="text-xs text-gray-400 mb-4">
        Add another {duration} minutes to keep the conversation going.
      </p>

      <div className="flex items-end justify-between">
        <div>
          <span className="text-2xl font-semibold text-white">₹{price}</span>
          <span className="text-xs text-gray-400 ml-1">/ {duration} min</span>
        </div>
        <button
          onClick={onAddTime}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-white bg-gradient-to-r from-electric-DEFAULT to-dream-DEFAULT hover:shadow-[0_0_12px_rgba(6,182,212,0.3)] transition-all"
        >
          <Plus className="w-3.5 h-3.5" />
          Add {duration} Minutes
        </button>
      </div>
    </motion.div>
  );
}
