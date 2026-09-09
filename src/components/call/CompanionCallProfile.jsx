import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

// Large circular companion profile used during an active call.
// Shows a subtle animated ring to indicate an active conversation.
export default function CompanionCallProfile({ companion, category }) {
  return (
    <div className="flex flex-col items-center">
      {/* Animated ring */}
      <div className="relative mb-5">
        {/* Outer pulsing ring */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.15, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -inset-3 rounded-full bg-gradient-to-br from-romantic-DEFAULT/30 to-dream-purple/20 blur-sm"
        />
        {/* Inner ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-1.5 rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, rgba(219,39,119,0.4), rgba(192,132,252,0.2), rgba(34,211,238,0.15), transparent, rgba(219,39,119,0.4))',
          }}
        />
        {/* Image */}
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-white/10 z-10">
          <img
            src={companion.image}
            alt={companion.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name & info */}
      <div className="flex items-center gap-2 mb-1">
        <h2 className="text-xl sm:text-2xl font-semibold text-white">{companion.name}</h2>
        {companion.verified && <CheckCircle2 className="w-4 h-4 text-electric-cyan" />}
      </div>
      <p className="text-xs text-gray-400 mb-0.5">Verified Companion</p>
      <p className="text-xs text-gray-500 mb-1">{companion.style}</p>
      <p className="text-xs text-gray-500">{category}</p>
    </div>
  );
}
