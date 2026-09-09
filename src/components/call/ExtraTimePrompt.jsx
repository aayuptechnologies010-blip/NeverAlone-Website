import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Plus } from 'lucide-react';

// Subtle notification prompts that appear during an active call
// when time is running low.
export default function ExtraTimePrompt({
  variant,        // '10min' | '5min'
  onAddTime,
  visible,
}) {
  const messages = {
    '10min': '10 minutes remaining',
    '5min': 'Your conversation is ending soon.',
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-sm mx-auto"
        >
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-amber-400" />
              <p className="text-sm text-white font-medium">
                {messages[variant]}
              </p>
            </div>

            {variant === '5min' && (
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400">Want more time?</p>
                  <p className="text-xs text-gray-500">+60 Minutes · ₹199</p>
                </div>
                <button
                  onClick={onAddTime}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-white bg-gradient-to-r from-romantic-DEFAULT/80 to-dream-purple/80 hover:shadow-[0_0_12px_rgba(219,39,119,0.3)] transition-all"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add 1 More Hour
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
