import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const filterCategories = [
  "Just Talk", "Relationship Advice", "Family & Personal", 
  "Career & Work", "College & Student Life", "Flirty Mode"
];

const filterLanguages = ["Hindi", "English", "Hindi + English"];

const filterStyles = [
  "Warm & Easygoing", "Great Listener", "Calm & Thoughtful", 
  "Fun & Energetic", "Friendly & Talkative"
];

const CompanionsFilter = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);

  const toggleFilter = (filter) => {
    setActiveFilters(prev => 
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    );
  };

  const clearFilters = () => setActiveFilters([]);

  const FilterSection = ({ title, options }) => (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {options.map(option => {
          const isActive = activeFilters.includes(option);
          return (
            <button
              key={option}
              onClick={() => toggleFilter(option)}
              className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                isActive 
                  ? 'bg-white text-brand-950 border-white' 
                  : 'bg-white/5 border-white/10 text-gray-400 hover:text-gray-200 hover:border-white/30'
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="relative">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-6 flex gap-3">
        <div className="relative flex-grow">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search by name or interest..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-white/30"
          />
        </div>
        <button 
          onClick={() => setIsMobileOpen(true)}
          className="bg-white/10 border border-white/20 rounded-xl px-4 flex items-center justify-center text-white"
        >
          <Filter size={18} />
        </button>
      </div>

      {/* Desktop Sidebar / Mobile Drawer */}
      <AnimatePresence>
        {(isMobileOpen || window.innerWidth >= 1024) && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className={`
              ${isMobileOpen ? 'fixed inset-0 z-50 flex' : 'block'}
            `}
          >
            {/* Mobile Backdrop */}
            {isMobileOpen && (
              <div className="fixed inset-0 bg-brand-950/80 backdrop-blur-sm" onClick={() => setIsMobileOpen(false)} />
            )}

            <div className={`
              ${isMobileOpen ? 'relative w-4/5 max-w-sm h-full bg-brand-900 border-r border-white/10 overflow-y-auto p-6' : 'sticky top-24'}
            `}>
              
              {isMobileOpen && (
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl font-semibold text-white">Filters</h2>
                  <button onClick={() => setIsMobileOpen(false)} className="text-gray-400 hover:text-white">
                    <X size={24} />
                  </button>
                </div>
              )}

              {/* Desktop Search (hidden on mobile drawer since it's outside) */}
              <div className={`relative mb-8 ${isMobileOpen ? 'hidden' : 'block'}`}>
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-white/30"
                />
              </div>

              {activeFilters.length > 0 && (
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs text-romantic-pink font-medium">{activeFilters.length} Active</span>
                  <button onClick={clearFilters} className="text-xs text-gray-400 hover:text-white underline">Clear All</button>
                </div>
              )}

              <FilterSection title="Conversation Type" options={filterCategories} />
              <div className="h-px w-full bg-white/5 my-6" />
              <FilterSection title="Language" options={filterLanguages} />
              <div className="h-px w-full bg-white/5 my-6" />
              <FilterSection title="Conversation Style" options={filterStyles} />
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CompanionsFilter;
