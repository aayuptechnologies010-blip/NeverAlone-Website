import React from 'react';
import { motion } from 'framer-motion';

const HowPlans = () => {
  return (
    <section className="py-16 bg-brand-900 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-900 to-brand-950" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <h2 className="text-3xl md:text-3xl font-semibold text-white mb-6">One hour. Every day. <br/><span className="text-romantic-pink font-serif italic">Just for conversation.</span></h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Standard companion subscriptions include one 60-minute conversation each day.
        </p>

        {/* Circular Time Visual */}
        <div className="relative w-64 h-64 mx-auto mb-10 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/10" />
            <motion.circle 
              cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric-cyan"
              strokeDasharray="283"
              initial={{ strokeDashoffset: 283 }}
              whileInView={{ strokeDashoffset: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </svg>
          <div className="text-center">
            <div className="text-3xl font-semibold text-white mb-1 tracking-tight">60:00</div>
            <div className="text-xs text-gray-400 uppercase tracking-widest font-medium">Daily<br/>Conversation</div>
          </div>
        </div>

        {/* Plans */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white font-medium">Weekly</div>
          <div className="px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white font-semibold shadow-[0_0_15px_rgba(255,255,255,0.1)]">Monthly</div>
          <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white font-medium">Yearly</div>
        </div>

        <p className="text-sm text-gray-500 italic bg-brand-950 border border-white/5 py-2 px-6 rounded-full inline-block">
          Availability varies by companion.
        </p>

      </div>
    </section>
  );
};

export default HowPlans;
