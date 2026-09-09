import React from 'react';
import { motion } from 'framer-motion';

export default function FlirtyVibeSelector({ vibes, selectedVibe, onSelectVibe }) {
  return (
    <section className="py-12 relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-3xl font-semibold text-white mb-4">
            What kind of vibe are you feeling?
          </h2>
          <p className="text-gray-400">
            Select a mood to see who matches your energy.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {vibes.map((vibe) => {
            const isSelected = selectedVibe === vibe.id;
            return (
              <button
                key={vibe.id}
                onClick={() => onSelectVibe(vibe.id)}
                className={`relative px-6 py-4 rounded-2xl text-sm md:text-base font-medium transition-all duration-300 border ${
                  isSelected
                    ? 'border-romantic-DEFAULT bg-romantic-DEFAULT/10 text-white shadow-[0_0_20px_rgba(219,39,119,0.3)]'
                    : 'border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {vibe.label}
                {isSelected && (
                  <motion.div
                    layoutId="vibe-indicator"
                    className="absolute inset-0 rounded-2xl border-2 border-romantic-DEFAULT pointer-events-none"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
