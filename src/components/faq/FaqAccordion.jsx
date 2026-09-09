import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FaqAccordion({ faq, isOpen, onToggle }) {
  // Highlight search matches if needed (optional enhancement)
  // For now, keeping it clean as requested.
  
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden mb-4 transition-colors hover:bg-white/[0.07]">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-electric-cyan/50"
      >
        <span className="text-base font-semibold text-white pr-8">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 pb-6 pt-2 text-gray-400 leading-relaxed text-sm md:text-base">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
