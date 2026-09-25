import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { professionalsDemo } from '../../data/professionalDemo';

const companionPlans = [
  { id: 'First Session', price: '\u20B9797', label: 'Single 60 Min', description: 'One-time confidential 1-on-1 session' },
  { id: 'Weekly', price: '\u20B9799', label: '', description: '1 hour every day for 7 days' },
  { id: 'Monthly', price: '\u20B92,999', label: 'Most Popular', description: '1 hour every day for 30 days' },
  { id: 'Yearly', price: '\u20B919,999', label: 'Best Value', description: '1 hour every day for 365 days' },
];

export default function BookStepPlan({ selectedPlan, onSelect, isProfessional, selectedProfile }) {
  const professional = professionalsDemo.find((profile) => profile.id === selectedProfile);

  if (isProfessional) {
    return (
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-white mb-2">Review your professional session</h2>
          <p className="text-gray-400">The fee and duration below are from the professional profile you selected.</p>
        </div>
        <button
          type="button"
          onClick={() => onSelect('Professional Session')}
          className={`w-full max-w-md mx-auto block rounded-3xl border p-8 text-center transition ${selectedPlan === 'Professional Session' ? 'bg-slate-800/70 border-electric-cyan shadow-[0_0_20px_rgba(6,182,212,0.2)]' : 'bg-slate-800/50 border-slate-700 hover:border-slate-500'}`}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-electric-cyan">Professional Support</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{professional?.name || 'Single Session'}</h3>
          <p className="mt-2 text-3xl font-semibold text-electric-cyan">{professional?.pricing || 'Fee shown on profile'}</p>
          <p className="mt-3 text-sm text-gray-400">{professional?.sessionDuration || '60 Minutes'} with an appropriately qualified professional.</p>
          <span className={`mt-6 flex h-6 w-6 mx-auto items-center justify-center rounded-full border ${selectedPlan === 'Professional Session' ? 'bg-electric-cyan border-electric-cyan' : 'border-gray-500'}`}>
            {selectedPlan === 'Professional Session' && <Check size={14} className="text-brand-950" />}
          </span>
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-white mb-2">How would you like to continue?</h2>
        <p className="text-gray-400">Choose a companion plan to get 1 hour every day.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {companionPlans.map((plan) => (
          <button
            key={plan.id}
            type="button"
            onClick={() => onSelect(plan.id)}
            className={`relative p-5 rounded-3xl border transition-all text-left flex flex-col ${selectedPlan === plan.id ? 'bg-brand-900 border-romantic-DEFAULT shadow-[0_0_20px_rgba(219,39,119,0.2)]' : 'bg-brand-950 border-white/10 hover:border-white/30'}`}
          >
            {plan.label && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-electric-cyan px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand-950 whitespace-nowrap">{plan.label}</span>}
            <h3 className="text-base font-semibold text-gray-200 mb-1 mt-1 text-center">{plan.id}</h3>
            <p className="text-2xl font-bold text-white mb-2 text-center">{plan.price}</p>
            <p className="text-xs text-gray-400 text-center flex-grow">{plan.description}</p>
            <span className={`mt-4 flex h-5 w-5 mx-auto items-center justify-center rounded-full border ${selectedPlan === plan.id ? 'bg-romantic-DEFAULT border-romantic-DEFAULT' : 'border-gray-600'}`}>
              {selectedPlan === plan.id && <Check size={12} className="text-white" />}
            </span>
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={() => onSelect('Extra Time')}
        className={`p-6 rounded-2xl border transition-all flex items-center justify-between max-w-md mx-auto w-full ${selectedPlan === 'Extra Time' ? 'bg-brand-900 border-electric-cyan' : 'bg-brand-950 border-white/10'}`}
      >
        <span className="text-left"><span className="block text-white font-semibold mb-1">Extra 60 minutes</span><span className="text-sm text-gray-400">One-time extension</span></span>
        <span className="flex items-center gap-4"><span className="text-xl font-semibold text-electric-cyan">\u20B9199</span><span className={`flex h-5 w-5 items-center justify-center rounded-full border ${selectedPlan === 'Extra Time' ? 'bg-electric-cyan border-electric-cyan' : 'border-gray-600'}`}>{selectedPlan === 'Extra Time' && <Check size={12} className="text-brand-950" />}</span></span>
      </button>
    </motion.div>
  );
}
