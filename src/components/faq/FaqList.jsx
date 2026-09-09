import React, { useState } from 'react';
import FaqAccordion from './FaqAccordion';
import { motion } from 'framer-motion';

export default function FaqList({ faqs, isSearching, onClearSearch }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (faqs.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-2xl">
          🔍
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Couldn’t find that answer.
        </h3>
        <p className="text-gray-400 mb-8 max-w-sm">
          Try another search term or browse the categories to find what you need.
        </p>
        <div className="flex gap-4">
          <button
            onClick={onClearSearch}
            className="px-6 py-3 rounded-full text-sm font-medium text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors"
          >
            Clear Search
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1">
      {isSearching && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 text-sm font-medium text-electric-cyan"
        >
          Found {faqs.length} matching {faqs.length === 1 ? 'answer' : 'answers'}
        </motion.div>
      )}

      <div>
        {faqs.map((faq, index) => (
          <FaqAccordion
            key={index} // Using index is acceptable here as the list filters and we want state reset
            faq={faq}
            isOpen={openIndex === index}
            onToggle={() => toggle(index)}
          />
        ))}
      </div>
    </div>
  );
}
