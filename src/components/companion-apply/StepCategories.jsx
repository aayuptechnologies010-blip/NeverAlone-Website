import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Heart, Users, Briefcase, GraduationCap, Flame, AlertCircle } from 'lucide-react';

const availableCategories = [
  { id: 'just-talk', icon: MessageSquare, title: 'Just Talk', desc: 'Everyday conversations.' },
  { id: 'relationship', icon: Heart, title: 'Relationship Advice', desc: 'Dating, communication, breakups, trust.' },
  { id: 'family', icon: Users, title: 'Family & Personal', desc: 'Family situations, boundaries.' },
  { id: 'career', icon: Briefcase, title: 'Career & Work', desc: 'Jobs, interviews, goals.' },
  { id: 'college', icon: GraduationCap, title: 'College Life', desc: 'Studies, exams, campus life.' },
  { id: 'flirty', icon: Flame, title: 'Flirty Mode • 18+', desc: 'Playful, consensual, non-explicit.', isFlirty: true }
];

export default function StepCategories({ data, updateData, errors }) {
  const [showFlirtyConsent, setShowFlirtyConsent] = useState(false);
  const [flirtyConsent1, setFlirtyConsent1] = useState(data.flirtyConsent1 || false);
  const [flirtyConsent2, setFlirtyConsent2] = useState(data.flirtyConsent2 || false);

  const handleCategoryToggle = (catId, isFlirty) => {
    if (isFlirty) {
      if (data.categories.includes(catId)) {
        // Deselecting flirty mode
        updateData({ 
          categories: data.categories.filter(c => c !== catId),
          flirtyConsent1: false,
          flirtyConsent2: false
        });
        setFlirtyConsent1(false);
        setFlirtyConsent2(false);
        setShowFlirtyConsent(false);
      } else {
        // Attempting to select flirty mode -> show consent panel
        setShowFlirtyConsent(true);
      }
    } else {
      // Normal toggle
      const updated = data.categories.includes(catId)
        ? data.categories.filter(c => c !== catId)
        : [...data.categories, catId];
      updateData({ categories: updated });
    }
  };

  const confirmFlirtyMode = () => {
    if (flirtyConsent1 && flirtyConsent2) {
      updateData({ 
        categories: [...data.categories, 'flirty'],
        flirtyConsent1: true,
        flirtyConsent2: true
      });
      setShowFlirtyConsent(false);
    }
  };

  const cancelFlirtyMode = () => {
    setShowFlirtyConsent(false);
    setFlirtyConsent1(false);
    setFlirtyConsent2(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">What conversations are you comfortable with?</h2>
        <p className="text-gray-400">Select all that apply.</p>
        {errors.categories && <p className="text-red-400 text-sm mt-2">{errors.categories}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {availableCategories.map(cat => {
          const isSelected = data.categories.includes(cat.id);
          const Icon = cat.icon;
          
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleCategoryToggle(cat.id, cat.isFlirty)}
              className={`flex items-start gap-4 p-4 rounded-2xl border text-left transition-all ${
                isSelected 
                  ? cat.isFlirty 
                    ? 'bg-romantic-DEFAULT/10 border-romantic-DEFAULT/50 shadow-[0_0_15px_rgba(244,114,182,0.15)]'
                    : 'bg-electric-cyan/10 border-electric-cyan/50 shadow-[0_0_15px_rgba(34,211,238,0.1)]'
                  : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                isSelected
                  ? cat.isFlirty ? 'bg-romantic-DEFAULT/20 text-romantic-300' : 'bg-electric-cyan/20 text-electric-cyan'
                  : 'bg-white/5 text-gray-400'
              }`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className={`font-semibold text-sm mb-1 ${isSelected ? (cat.isFlirty ? 'text-romantic-200' : 'text-electric-cyan') : 'text-white'}`}>
                  {cat.title}
                </h3>
                <p className="text-xs text-gray-400">{cat.desc}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Flirty Mode Consent Panel */}
      <AnimatePresence>
        {showFlirtyConsent && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 32 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-romantic-DEFAULT/5 border border-romantic-DEFAULT/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-romantic-pink" />
                <h3 className="text-lg font-semibold text-white">Flirty Mode has additional boundaries.</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 text-sm">
                <div>
                  <p className="font-semibold text-romantic-200 mb-2">Flirty Mode is for:</p>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Playful conversation</li>
                    <li>• Fun banter</li>
                    <li>• Respectful compliments</li>
                    <li>• Mutual non-explicit flirting</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-red-400 mb-2">It does NOT allow:</p>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Sexual services</li>
                    <li>• Explicit sexual content</li>
                    <li>• Harassment or Coercion</li>
                    <li>• Physical meetups</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center mt-0.5">
                    <input type="checkbox" checked={flirtyConsent1} onChange={(e) => setFlirtyConsent1(e.target.checked)} className="peer sr-only" />
                    <div className={`w-5 h-5 border-2 rounded transition-colors ${flirtyConsent1 ? 'bg-romantic-DEFAULT border-romantic-DEFAULT' : 'border-gray-500 group-hover:border-romantic-DEFAULT/50'}`}>
                      {flirtyConsent1 && <svg className="w-4 h-4 text-white absolute top-0.5 left-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">I understand that Flirty Mode conversations must remain consensual, respectful and non-explicit.</p>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center mt-0.5">
                    <input type="checkbox" checked={flirtyConsent2} onChange={(e) => setFlirtyConsent2(e.target.checked)} className="peer sr-only" />
                    <div className={`w-5 h-5 border-2 rounded transition-colors ${flirtyConsent2 ? 'bg-romantic-DEFAULT border-romantic-DEFAULT' : 'border-gray-500 group-hover:border-romantic-DEFAULT/50'}`}>
                      {flirtyConsent2 && <svg className="w-4 h-4 text-white absolute top-0.5 left-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">I understand that Flirty Mode requires additional training/approval before I can offer it.</p>
                </label>
              </div>

              <div className="flex justify-end gap-3">
                <button type="button" onClick={cancelFlirtyMode} className="px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-white/10 transition-colors">
                  Cancel
                </button>
                <button 
                  type="button" 
                  onClick={confirmFlirtyMode}
                  disabled={!flirtyConsent1 || !flirtyConsent2}
                  className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-romantic-DEFAULT hover:bg-romantic-DEFAULT/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Confirm Flirty Mode
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
