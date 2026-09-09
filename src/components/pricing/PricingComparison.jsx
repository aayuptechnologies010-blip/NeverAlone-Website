import React from 'react';
import { Check, Minus } from 'lucide-react';

const PricingComparison = () => {
  const features = [
    { name: 'Duration', w: '7 Days', m: '30 Days', y: '365 Days' },
    { name: 'Daily Conversation', w: '60 Min', m: '60 Min', y: '60 Min' },
    { name: 'Companion Matching', w: true, m: true, y: true },
    { name: 'Private Phone Calls', w: true, m: true, y: true },
    { name: 'Friendly General Perspectives', w: true, m: true, y: true },
    { name: 'Priority Matching', w: false, m: true, y: true },
    { name: 'Flexible Scheduling', w: false, m: true, y: true },
    { name: 'Priority Support', w: false, m: false, y: true },
    { name: 'Extra 60 Minutes', w: '₹199', m: '₹199', y: '₹199' }
  ];

  const renderValue = (val) => {
    if (val === true) return <Check size={18} className="text-electric-cyan mx-auto" />;
    if (val === false) return <Minus size={18} className="text-gray-600 mx-auto" />;
    return <span className="text-gray-300 font-medium">{val}</span>;
  };

  return (
    <section className="py-16 bg-brand-950 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl font-semibold text-white text-center mb-12">Plan Comparison</h2>

        <div className="overflow-x-auto pb-4">
          <div className="min-w-[700px] bg-brand-900 border border-white/10 rounded-2xl overflow-hidden">
            
            {/* Header */}
            <div className="grid grid-cols-4 bg-brand-950 border-b border-white/10">
              <div className="p-6 text-sm font-semibold text-gray-400 uppercase tracking-wider text-left">Feature</div>
              <div className="p-6 text-sm font-semibold text-white uppercase tracking-wider text-center">Weekly</div>
              <div className="p-6 text-sm font-semibold text-romantic-pink uppercase tracking-wider text-center bg-white/5">Monthly</div>
              <div className="p-6 text-sm font-semibold text-dream-DEFAULT uppercase tracking-wider text-center">Yearly</div>
            </div>

            {/* Body */}
            <div>
              {features.map((feature, idx) => (
                <div key={idx} className={`grid grid-cols-4 border-b border-white/5 ${idx % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'}`}>
                  <div className="p-4 px-6 text-sm text-gray-300 flex items-center">{feature.name}</div>
                  <div className="p-4 flex items-center justify-center text-sm">{renderValue(feature.w)}</div>
                  <div className="p-4 flex items-center justify-center text-sm bg-white/5">{renderValue(feature.m)}</div>
                  <div className="p-4 flex items-center justify-center text-sm">{renderValue(feature.y)}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingComparison;
