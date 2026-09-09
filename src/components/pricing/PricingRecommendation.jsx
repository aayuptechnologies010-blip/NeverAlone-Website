import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PricingRecommendation = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 'try', label: 'I just want to try it', rec: 'Weekly', price: '₹799 / 7 Days' },
    { id: 'month', label: 'I’d like someone around this month', rec: 'Monthly', price: '₹2,999 / 30 Days' },
    { id: 'long', label: 'I want long-term access', rec: 'Yearly', price: '₹19,999 / 365 Days' }
  ];

  return (
    <section className="py-16 bg-brand-950 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl font-semibold text-white mb-6">Not sure which plan feels right?</h2>
        <p className="text-gray-400 mb-12">How often do you think you'll want to talk?</p>

        <div className="flex flex-col gap-4 mb-12 max-w-md mx-auto">
          {options.map(opt => (
            <button
              key={opt.id}
              onClick={() => setSelectedOption(opt)}
              className={`p-4 rounded-2xl border text-left transition-all ${
                selectedOption?.id === opt.id 
                  ? 'bg-white/10 border-electric-cyan text-white shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                  : 'bg-brand-900 border-white/10 text-gray-400 hover:border-white/30'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selectedOption && (
            <motion.div
              key={selectedOption.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-gradient-to-br from-brand-900 to-brand-950 border border-white/10 p-8 rounded-[2rem] max-w-sm mx-auto shadow-2xl"
            >
              <h3 className="text-xl font-medium text-white mb-2">{selectedOption.rec} might fit you 💗</h3>
              <p className="text-electric-cyan font-semibold text-2xl mb-8">{selectedOption.price}</p>
              
              <button className="w-full py-4 rounded-xl font-semibold text-brand-950 bg-white hover:bg-gray-100 transition-colors">
                Choose {selectedOption.rec}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default PricingRecommendation;
