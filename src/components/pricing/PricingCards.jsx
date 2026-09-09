import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PricingCards = ({ selectedDuration }) => {
  return (
    <section className="py-8 bg-brand-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 items-stretch mt-6">
          
          {/* WEEKLY */}
          <motion.div 
            whileHover={{ y: -8 }}
            className={`flex flex-col bg-brand-900/40 backdrop-blur-md border rounded-[1.5rem] p-6 transition-all duration-500 ${
              selectedDuration === '7 Days' ? 'border-pink-500/50 shadow-[0_0_20px_rgba(236,72,153,0.15)] bg-brand-900/80' : 'border-white/10 hover:border-white/20 hover:bg-brand-900/60'
            }`}
          >
            <h3 className="text-[10px] font-bold text-gray-400 tracking-[0.2em] mb-2">WEEKLY</h3>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-lg font-medium text-gray-400">₹</span>
              <span className="text-3xl font-bold text-white">799</span>
            </div>
            <div className="text-xs text-pink-400 font-medium mb-4">For 7 Days</div>
            <p className="text-gray-400 font-serif italic mb-6 text-sm">"A little connection when you need it."</p>
            
            <ul className="space-y-3 mb-6 flex-grow">
              {["1 hour daily conversation", "Companion matching", "Private phone calls", "All categories included"].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                  <Check size={16} className="text-pink-500 shrink-0 mt-0.5" />
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mb-5 text-[11px] text-gray-500 text-center py-3 border-t border-white/5">
              Extra time: ₹199 / 60 mins
            </div>
            
            <Link to="/book" className="block text-center w-full py-3 rounded-lg border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-colors shadow-sm">
              Start For 7 Days
            </Link>
          </motion.div>

          {/* MONTHLY (HIGHLIGHTED) */}
          <motion.div 
            whileHover={{ y: -8 }}
            className={`flex flex-col bg-brand-900/80 backdrop-blur-xl border-2 rounded-[1.5rem] p-6 relative overflow-hidden transition-all duration-500 shadow-2xl ${
              selectedDuration === '30 Days' || !selectedDuration 
                ? 'border-pink-500 shadow-[0_0_30px_rgba(236,72,153,0.2)]' 
                : 'border-white/20'
            }`}
          >
            {/* Glow behind monthly card */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-pink-500/20 to-transparent pointer-events-none blur-2xl" />

            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-[9px] font-bold uppercase tracking-[0.2em] px-4 py-1 rounded-b-lg shadow-lg">
              Most Popular
            </div>
            
            <h3 className="text-[10px] font-bold text-pink-400 tracking-[0.2em] mb-2 mt-4">MONTHLY</h3>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-lg font-medium text-pink-300">₹</span>
              <span className="text-4xl font-bold text-white">2,999</span>
            </div>
            <div className="text-xs text-pink-400 font-medium mb-4">For 30 Days</div>
            <p className="text-gray-300 font-serif italic mb-6 text-sm">"Make space for a conversation every day."</p>
            
            <ul className="space-y-3 mb-6 flex-grow">
              {["1 hour daily conversation", "Priority companion matching", "Flexible scheduling", "Full access to all categories"].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-200">
                  <Check size={16} className="text-pink-400 shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(236,72,153,0.5)]" />
                  <span className={i === 1 ? 'font-semibold text-white' : 'leading-tight'}>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mb-5 text-[11px] text-gray-400 text-center py-3 border-t border-white/10">
              Extra time: ₹199 / 60 mins
            </div>
            
            <Link to="/book" className="block text-center w-full py-3 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 text-white text-sm font-bold hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all transform hover:scale-[1.02]">
              Start Talking
            </Link>
          </motion.div>

          {/* YEARLY */}
          <motion.div 
            whileHover={{ y: -8 }}
            className={`flex flex-col bg-brand-900/40 backdrop-blur-md border rounded-[1.5rem] p-6 relative transition-all duration-500 ${
              selectedDuration === '365 Days' ? 'border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.15)] bg-brand-900/80' : 'border-white/10 hover:border-white/20 hover:bg-brand-900/60'
            }`}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white/10 text-gray-300 text-[9px] font-bold uppercase tracking-[0.2em] px-4 py-1 rounded-b-lg border border-white/10 border-t-0 backdrop-blur-md">
              Best Value
            </div>

            <h3 className="text-[10px] font-bold text-purple-400 tracking-[0.2em] mb-2 mt-4">YEARLY</h3>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-lg font-medium text-gray-400">₹</span>
              <span className="text-3xl font-bold text-white">19,999</span>
            </div>
            <div className="text-xs text-purple-400 font-medium mb-4">≈ ₹1,667 / month</div>
            <p className="text-gray-400 font-serif italic mb-6 text-sm">"Know there's always a place to start."</p>
            
            <ul className="space-y-3 mb-6 flex-grow">
              {["1 hour daily conversation", "Year-round priority access", "Scheduled recurring chats", "Premium priority support"].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                  <Check size={16} className="text-purple-500 shrink-0 mt-0.5" />
                  <span className={i === 1 ? 'font-semibold text-white' : 'leading-tight'}>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mb-5 text-[11px] text-gray-500 text-center py-3 border-t border-white/5">
              Extra time: ₹199 / 60 mins
            </div>
            
            <Link to="/book" className="block text-center w-full py-3 rounded-lg border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-colors shadow-sm">
              Choose Yearly
            </Link>
          </motion.div>

        </div>

        {/* Info Box */}
        <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-4 text-center max-w-xl mx-auto">
          <h4 className="text-white text-sm font-semibold mb-1">Companion availability varies.</h4>
          <p className="text-xs text-gray-400">
            Your plan gives you eligible conversation access, but the same individual companion may not be available every day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
