import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const BookStepPlan = ({ selectedPlan, onSelect, isProfessional }) => {
  const plans = [
    { id: 'Weekly', price: '₹799', label: '' },
    { id: 'Monthly', price: '₹2,999', label: 'Most Popular' },
    { id: 'Yearly', price: '₹19,999', label: 'Best Value' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-3xl mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-white mb-2">How would you like to continue?</h2>
        <p className="text-gray-400">
          {isProfessional 
            ? "Professional Support sessions are billed separately." 
            : "Choose a companion plan to get 1 hour every day."}
        </p>
      </div>

      {isProfessional ? (
        <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 max-w-md mx-auto text-center cursor-pointer" onClick={() => onSelect('Professional Session')}>
          <h3 className="text-2xl font-semibold text-white mb-2">Single Session</h3>
          <p className="text-3xl font-semibold text-electric-cyan mb-4">₹1,499</p>
          <p className="text-gray-400 text-sm mb-6">60 minutes with a qualified professional.</p>
          <div className={`w-6 h-6 rounded-full mx-auto border flex items-center justify-center ${selectedPlan === 'Professional Session' ? 'bg-electric-cyan border-electric-cyan' : 'border-gray-500'}`}>
            {selectedPlan === 'Professional Session' && <Check size={14} className="text-brand-950" />}
          </div>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {plans.map(plan => (
              <div 
                key={plan.id}
                onClick={() => onSelect(plan.id)}
                className={`relative p-6 rounded-3xl border transition-all cursor-pointer flex flex-col ${
                  selectedPlan === plan.id
                    ? 'bg-brand-900 border-romantic-DEFAULT shadow-[0_0_20px_rgba(219,39,119,0.2)]'
                    : 'bg-brand-950 border-white/10 hover:border-white/30'
                }`}
              >
                {plan.label && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                    plan.label === 'Most Popular' ? 'bg-electric-cyan text-brand-950' : 'bg-romantic-DEFAULT text-white'
                  }`}>
                    {plan.label}
                  </div>
                )}
                <h3 className="text-lg font-medium text-gray-300 mb-2 mt-2 text-center">{plan.id}</h3>
                <p className="text-3xl font-semibold text-white mb-6 text-center">{plan.price}</p>
                <p className="text-sm text-gray-400 text-center flex-grow">1 hour every day.</p>
                
                <div className={`w-6 h-6 rounded-full mx-auto mt-6 border flex items-center justify-center ${selectedPlan === plan.id ? 'bg-romantic-DEFAULT border-romantic-DEFAULT' : 'border-gray-600'}`}>
                  {selectedPlan === plan.id && <Check size={14} className="text-white" />}
                </div>
              </div>
            ))}
          </div>

          <div 
            onClick={() => onSelect('Extra Time')}
            className={`p-6 rounded-2xl border transition-all cursor-pointer flex items-center justify-between max-w-md mx-auto ${
              selectedPlan === 'Extra Time' ? 'bg-brand-900 border-electric-cyan' : 'bg-brand-950 border-white/10'
            }`}
          >
            <div>
              <h4 className="text-white font-semibold mb-1">Extra 60 minutes</h4>
              <p className="text-sm text-gray-400">One-time extension</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xl font-semibold text-electric-cyan">₹199</span>
              <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedPlan === 'Extra Time' ? 'bg-electric-cyan border-electric-cyan' : 'border-gray-600'}`}>
                {selectedPlan === 'Extra Time' && <Check size={12} className="text-brand-950" />}
              </div>
            </div>
          </div>
        </>
      )}

    </motion.div>
  );
};

export default BookStepPlan;
