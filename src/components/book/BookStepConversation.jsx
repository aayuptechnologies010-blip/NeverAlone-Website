import React from 'react';
import { MessageCircle, Heart, Users, Briefcase, GraduationCap, Sparkles, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  { id: 'Just Talk', icon: MessageCircle, desc: 'Everyday conversations' },
  { id: 'Relationship Advice', icon: Heart, desc: 'Dating and communication' },
  { id: 'Family & Personal', icon: Users, desc: 'Family and boundaries' },
  { id: 'Career & Work', icon: Briefcase, desc: 'Jobs and future planning' },
  { id: 'College & Student Life', icon: GraduationCap, desc: 'Campus life and studies' },
  { id: 'Flirty Mode', icon: Sparkles, desc: '18+ playful and consensual' },
  { id: 'Professional Support', icon: Stethoscope, desc: 'Qualified mental health professionals' }
];

const BookStepConversation = ({ selectedCategory, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-2xl mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-white mb-2">What do you want to talk about?</h2>
        <p className="text-gray-400">Choose a category to find the most relevant companions.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`flex items-start space-x-4 p-4 rounded-2xl text-left border transition-all ${
              selectedCategory === cat.id
                ? cat.id === 'Professional Support'
                  ? 'bg-slate-800/50 border-slate-400 text-white shadow-[0_0_15px_rgba(148,163,184,0.3)]'
                  : 'bg-brand-900 border-electric-cyan text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                : 'bg-brand-950 border-white/10 text-gray-400 hover:border-white/30'
            } ${cat.id === 'Professional Support' && selectedCategory !== cat.id ? 'border-slate-700/50 bg-slate-900/50' : ''}`}
          >
            <cat.icon size={24} className={`shrink-0 mt-1 ${
              selectedCategory === cat.id 
                ? cat.id === 'Professional Support' ? 'text-slate-300' : 'text-electric-cyan' 
                : 'text-gray-500'
            }`} />
            <div>
              <h3 className="font-semibold text-base mb-1">{cat.id}</h3>
              <p className="text-xs text-inherit opacity-80">{cat.desc}</p>
            </div>
          </button>
        ))}
      </div>
      
      {selectedCategory === 'Professional Support' && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-6 p-4 bg-slate-800/30 border border-slate-700 rounded-xl flex items-start gap-3"
        >
          <Stethoscope className="text-slate-400 shrink-0 mt-0.5" size={20} />
          <p className="text-sm text-slate-300">
            You have selected Professional Support. You will only see appropriately qualified and verified mental-health professionals.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default BookStepConversation;
