import React, { useState } from 'react';
import { Search, Filter, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const filterCategories = [
  "Just Talk", "Relationship Advice", "Family & Personal", 
  "Career & Work", "College & Student Life", "Mindfulness & Healing"
];

const filterLanguages = ["Hindi", "English", "Hindi + English"];

const filterStyles = [
  "Warm & Easygoing", "Great Listener", "Calm & Thoughtful", 
  "Fun & Energetic", "Friendly & Talkative"
];

const CompanionsFilter = ({
  searchQuery,
  setSearchQuery,
  activeFilters,
  setActiveFilters,
  availableNowOnly,
  setAvailableNowOnly
}) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleFilter = (filter) => {
    setActiveFilters(prev => 
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    );
  };

  const clearFilters = () => {
    setActiveFilters([]);
    setSearchQuery('');
    setAvailableNowOnly(false);
  };

  const FilterSection = ({ title, options }) => (
    <div className="mb-6">
      <h3 className="text-xs font-bold text-gray-300 mb-3 uppercase tracking-wider">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {options.map(option => {
          const isActive = activeFilters.includes(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => toggleFilter(option)}
              className={`text-xs px-3 py-1.5 rounded-xl border transition-all ${
                isActive 
                  ? 'bg-gradient-to-r from-romantic-DEFAULT to-dream-DEFAULT text-white border-transparent shadow-sm' 
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
      {/* Mobile Filter & Search Bar */}
      <div className="lg:hidden mb-6 flex gap-3">
        <div className="relative flex-grow">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search companion by name, bio, topic..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-electric-cyan/40"
          />
        </div>
        <button 
          type="button"
          onClick={() => setIsMobileOpen(true)}
          className="bg-white/10 border border-white/20 rounded-xl px-4 flex items-center justify-center text-white relative"
        >
          <Filter size={18} />
          {(activeFilters.length > 0 || availableNowOnly) && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-romantic-pink rounded-full" />
          )}
        </button>
      </div>

      {/* Desktop Sidebar / Mobile Drawer */}
      <AnimatePresence>
        {(isMobileOpen || (typeof window !== 'undefined' && window.innerWidth >= 1024)) && (
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
              <div 
                className="fixed inset-0 bg-brand-950/80 backdrop-blur-sm" 
                onClick={() => setIsMobileOpen(false)} 
              />
            )}

            <div className={`
              ${isMobileOpen 
                ? 'relative w-4/5 max-w-sm h-full bg-brand-900 border-r border-white/10 overflow-y-auto p-6 z-10' 
                : 'sticky top-24 bg-brand-900/40 border border-white/10 rounded-2xl p-6 backdrop-blur-sm'}
            `}>
              
              {isMobileOpen && (
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Filter size={18} className="text-electric-cyan" />
                    Filters
                  </h2>
                  <button 
                    type="button" 
                    onClick={() => setIsMobileOpen(false)} 
                    className="p-1 rounded-lg bg-white/5 text-gray-400 hover:text-white"
                  >
                    <X size={20} />
                  </button>
                </div>
              )}

              {/* Desktop Search Input */}
              <div className={`relative mb-6 ${isMobileOpen ? 'block' : 'block'}`}>
                <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name, vibe..." 
                  className="w-full bg-brand-950/70 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-electric-cyan/50"
                />
              </div>

              {/* Available Now Toggle */}
              <div className="mb-6 p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-white">Available Now</span>
                </div>
                <button
                  type="button"
                  onClick={() => setAvailableNowOnly(!availableNowOnly)}
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${
                    availableNowOnly ? 'bg-emerald-500' : 'bg-white/20'
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                      availableNowOnly ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {(activeFilters.length > 0 || searchQuery || availableNowOnly) && (
                <div className="mb-6 flex items-center justify-between bg-romantic-DEFAULT/10 border border-romantic-DEFAULT/20 px-3 py-2 rounded-xl">
                  <span className="text-xs text-romantic-pink font-medium flex items-center gap-1.5">
                    <Sparkles size={12} />
                    Active Filters
                  </span>
                  <button 
                    type="button" 
                    onClick={clearFilters} 
                    className="text-xs text-gray-300 hover:text-white underline"
                  >
                    Clear All
                  </button>
                </div>
              )}

              <FilterSection title="Conversation Focus" options={filterCategories} />
              <div className="h-px w-full bg-white/5 my-5" />
              <FilterSection title="Language" options={filterLanguages} />
              <div className="h-px w-full bg-white/5 my-5" />
              <FilterSection title="Conversation Style" options={filterStyles} />
              
              {isMobileOpen && (
                <button
                  type="button"
                  onClick={() => setIsMobileOpen(false)}
                  className="w-full mt-6 py-3 rounded-xl bg-electric-cyan text-brand-950 font-bold text-sm"
                >
                  Apply & View Results
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CompanionsFilter;
