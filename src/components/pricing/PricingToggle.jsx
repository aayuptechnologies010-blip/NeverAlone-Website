import React from 'react';

const PricingToggle = ({ selected, onSelect }) => {
  return (
    <section className="py-12 bg-brand-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-semibold text-white mb-8">How long would you like Neuravia around?</h2>
        
        <div className="inline-flex bg-brand-900 border border-white/10 rounded-full p-1.5">
          {['7 Days', '30 Days', '365 Days'].map(duration => (
            <button
              key={duration}
              onClick={() => onSelect(duration)}
              className={`px-6 md:px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                selected === duration
                  ? 'bg-gradient-to-r from-romantic-DEFAULT to-electric-DEFAULT text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {duration}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingToggle;
