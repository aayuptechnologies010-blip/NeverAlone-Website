import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Plus, Phone, VideoOff, Check } from 'lucide-react';

const PricingDailyMeaning = () => {
  return (
    <section className="py-10 bg-gray-50 border-y border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8">
        
        <div className="text-center mb-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-gray-900 mb-1"
          >
            How does your time work?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600  mx-auto text-sm"
          >
            Clear, simple rules so you always know when you can talk.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          
          {/* Left Side: Daily 60 Minutes */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="w-full lg:w-1/2 bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col justify-between transition-all duration-300"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                <Clock size={12} /> Daily Refresh
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">What does 1 hour every day mean?</h3>
              <p className="text-sm text-gray-600 mb-6">
                Each active subscription grants you exactly one standard 60-minute conversation every single day.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 rounded-full flex items-center justify-center bg-gray-50 shadow-inner mb-6 transition-transform hover:scale-105">
                {/* Progress Ring */}
                <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="46" fill="none" stroke="#f3f4f6" strokeWidth="3" />
                  <motion.circle 
                    cx="50" cy="50" r="46" fill="none" stroke="url(#pinkGradient)" strokeWidth="4" strokeDasharray="289" strokeLinecap="round"
                    initial={{ strokeDashoffset: 289 }} whileInView={{ strokeDashoffset: 0 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="text-center relative">
                  <div className="text-3xl font-bold text-gray-900 tracking-tighter">60<span className="text-pink-500 font-light">:</span>00</div>
                  <div className="text-[9px] text-gray-500 font-bold uppercase tracking-[0.2em] mt-1">Mins</div>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1.5 w-full mb-4">
                {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, idx) => (
                  <div key={day} className="flex flex-col items-center">
                    <div className="text-[8px] md:text-[9px] text-gray-400 font-bold mb-1.5 tracking-widest">{day}</div>
                    <div className={`w-full aspect-square rounded-lg flex items-center justify-center text-[10px] font-bold transition-all duration-300 ${
                      idx === 0 
                        ? 'bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-md transform scale-110' 
                        : 'bg-gray-50 text-gray-400 border border-gray-100 hover:bg-gray-100 hover:text-gray-600 cursor-default'
                    }`}>
                      60m
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-gray-400 italic text-center">Subject to companion availability.</p>
            </div>
          </motion.div>

          {/* Right Side: Extra Hour */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="w-full lg:w-1/2 bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col justify-between transition-all duration-300"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                <Plus size={12} /> Extend Session
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Not ready to stop talking?</h3>
              <p className="text-sm text-gray-600 mb-5">
                Good conversation doesn't have to end abruptly. Add another 60 minutes for <span className="font-bold text-gray-900">₹199</span>.
              </p>

              <ul className="space-y-2.5 mb-6">
                {[
                  { icon: Plus, text: "Additional 60-minute phone conversation" },
                  { icon: Check, text: "Continue with current companion (if available)" },
                  { icon: Phone, text: "Private audio-only call" },
                  { icon: Check, text: "Multiple extensions may be purchased" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon size={10} className="text-purple-600" />
                    </div>
                    <span className="text-[13px] font-medium leading-tight">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive Mockup */}
            <motion.div 
              whileHover={{ y: -2 }}
              className="w-full bg-gray-50 border border-gray-200 rounded-[1.5rem] p-4 text-center mt-auto"
            >
              <div className="text-pink-500 font-mono text-xl mb-0.5 font-bold">55:00 <span className="text-gray-400 text-xs">/ 60:00</span></div>
              <p className="text-[11px] text-gray-500 font-medium mb-3">Your session is ending soon.</p>

              <button className="w-full relative group rounded-lg overflow-hidden mb-2">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 group-hover:opacity-20 transition-opacity" />
                <div className="border border-purple-200 rounded-lg py-2.5 relative z-10 flex items-center justify-center gap-3 transition-colors bg-white">
                  <span className="text-gray-900 font-bold text-xs">+ 60 MINUTES</span>
                  <span className="text-purple-600 font-bold text-lg">₹199</span>
                </div>
              </button>

              <button onClick={() => alert('Demo only.')} className="w-full py-2.5 rounded-lg bg-gray-900 text-white text-xs font-bold shadow hover:shadow-lg hover:bg-gray-800 transition-all">
                Add Another Hour
              </button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PricingDailyMeaning;
