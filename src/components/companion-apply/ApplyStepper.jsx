import React from 'react';

const steps = [
  'Basic Details',
  'About You',
  'Categories',
  'Availability',
  'Verification',
  'Review'
];

export default function ApplyStepper({ currentStepIndex }) {
  return (
    <div className="w-full py-6">
      {/* Mobile compact stepper */}
      <div className="md:hidden flex flex-col items-center">
        <p className="text-xs text-electric-cyan font-semibold uppercase tracking-widest mb-2">
          Step {currentStepIndex + 1} of {steps.length}
        </p>
        <p className="text-lg font-semibold text-white">
          {steps[currentStepIndex]}
        </p>
        <div className="w-full flex gap-1 mt-4">
          {steps.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                idx <= currentStepIndex ? 'bg-electric-cyan' : 'bg-white/10'
              }`} 
            />
          ))}
        </div>
      </div>

      {/* Desktop stepper */}
      <div className="hidden md:flex items-center justify-between relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-white/10 z-0" />
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-electric-cyan z-0 transition-all duration-300"
          style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
        />
        
        {steps.map((step, idx) => {
          const isActive = idx === currentStepIndex;
          const isCompleted = idx < currentStepIndex;
          
          return (
            <div key={idx} className="relative z-10 flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${
                isActive 
                  ? 'bg-electric-cyan text-brand-950 ring-4 ring-brand-950' 
                  : isCompleted
                    ? 'bg-electric-cyan text-brand-950 ring-4 ring-brand-950'
                    : 'bg-brand-900 border-2 border-white/20 text-gray-500'
              }`}>
                {isCompleted ? '✓' : idx + 1}
              </div>
              <p className={`absolute top-10 text-xs font-semibold whitespace-nowrap transition-colors ${
                isActive ? 'text-electric-cyan' : isCompleted ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {step}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
