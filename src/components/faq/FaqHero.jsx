import React from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

const popularSearches = [
  '60 Minutes Daily',
  'Extra Time',
  'Booking',
  'Flirty Mode',
  'Privacy',
  'Professional Support'
];

export default function FaqHero({ searchQuery, onSearchChange, onChipClick }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-950 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950 via-electric-cyan/5 to-brand-950 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-electric-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8"
        >
          <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
            Help Center
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-3xl lg:text-6xl font-semibold text-white leading-tight mb-6"
        >
          Questions? <br className="hidden md:block" />
          We’re here to make things clear.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Find quick answers about conversations, plans, booking, privacy, Flirty Mode, Professional Support and more.
        </motion.p>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto relative group"
        >
          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
            <Search className="w-6 h-6 text-gray-400 group-focus-within:text-electric-cyan transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search for an answer…"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-electric-cyan/50 focus:bg-white/10 rounded-full py-5 pl-16 pr-6 text-lg text-white placeholder-gray-500 outline-none transition-all shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm"
          />
        </motion.div>

        {/* Popular Chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
        >
          {popularSearches.map((term) => (
            <button
              key={term}
              onClick={() => onChipClick(term)}
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-400 bg-white/5 border border-white/5 hover:bg-white/10 hover:text-white transition-colors"
            >
              {term}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
