import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { companions } from '../../data/companionsData';

const BookStepCompanion = ({ selectedCategory, selectedCompanion, onSelect }) => {
  
  // Filter companions based on selected category
  const filteredCompanions = companions.filter(c => {
    if (selectedCategory === 'Professional Support') {
      return c.isProfessional;
    } else {
      // Exclude professionals from regular categories, and check if category matches
      return !c.isProfessional && c.categories.includes(selectedCategory);
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-4xl mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-white mb-2">Who feels right to talk to?</h2>
        <p className="text-gray-400">Select a companion for your <span className="text-white font-medium">{selectedCategory}</span> conversation.</p>
      </div>

      {filteredCompanions.length === 0 ? (
        <div className="text-center py-12 bg-white/5 rounded-3xl border border-white/10">
          <p className="text-gray-400 mb-4">No available companions match this category currently.</p>
          <button onClick={() => onSelect(null)} className="text-electric-cyan hover:underline">Go back and choose another category</button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {filteredCompanions.map((comp) => (
            <div 
              key={comp.id}
              onClick={() => onSelect(comp.id)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                selectedCompanion === comp.id
                  ? 'bg-brand-900 border-electric-cyan shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  : 'bg-brand-950 border-white/10 hover:border-white/30'
              }`}
            >
              <div className="flex gap-4">
                <img src={comp.image} alt={comp.name} className="w-20 h-20 rounded-xl object-cover" />
                <div className="flex-grow">
                  <div className="flex items-center gap-1">
                    <h3 className="font-semibold text-white text-lg">{comp.name}</h3>
                    {comp.isVerified && <CheckCircle2 size={14} className="text-electric-cyan" />}
                  </div>
                  <p className="text-sm text-romantic-pink font-medium mb-1">{comp.style}</p>
                  <p className="text-xs text-gray-500 mb-2">{comp.languages.join(" • ")}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] px-2 py-1 bg-white/5 rounded-md text-gray-400">{comp.availability}</span>
                    <button className={`text-xs font-semibold px-4 py-1.5 rounded-full ${
                      selectedCompanion === comp.id ? 'bg-electric-cyan text-brand-950' : 'bg-white/10 text-white'
                    }`}>
                      {selectedCompanion === comp.id ? 'Selected' : 'Choose'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default BookStepCompanion;
