import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, PartyPopper, HeartPulse, Check, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

const FlirtyModeSpotlight = () => {
  const vibes = [
    { icon: Heart, text: "Playful conversations" },
    { icon: PartyPopper, text: "Fun banter" },
    { icon: Sparkles, text: "Compliments" },
    { icon: HeartPulse, text: "Light romantic conversation" }
  ];

  const boundaries = [
    "18+ Only",
    "Mutual Consent",
    "Non-Explicit",
    "Phone Calls Only"
  ];

  return (
    <section className="py-10 relative overflow-hidden bg-brand-950">
      <div className="absolute inset-0 bg-gradient-to-tr from-romantic-DEFAULT/10 via-brand-950 to-brand-950" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-brand-900/50 border border-romantic-DEFAULT/20 rounded-[2.5rem] p-6 md:p-10 backdrop-blur-xl relative overflow-hidden">
          {/* Internal Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-romantic-DEFAULT/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-4 items-center relative z-10">
            
            {/* Left Side */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                  Feeling a little playful? <span className="text-romantic-pink">✨</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mb-6">
                  Meet someone who matches your vibe.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {vibes.map((vibe, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-romantic-DEFAULT/10 flex items-center justify-center text-romantic-pink shrink-0">
                      <vibe.icon size={18} />
                    </div>
                    <span className="text-sm md:text-base text-white font-medium">{vibe.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Link 
                  to="/categories" 
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-base font-semibold text-white bg-pink-600 hover:bg-pink-500 hover:shadow-[0_0_20px_rgba(219,39,119,0.5)] transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Sparkles size={18} />
                  <span>Explore Flirty Mode</span>
                </Link>
              </motion.div>
            </div>

            {/* Right Side: Boundaries Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:ml-auto w-full max-w-sm mt-8 lg:mt-0"
            >
              <div className="bg-brand-950/80 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-white/20 transition-colors">
                <div className="flex items-center space-x-3 mb-4 pb-4 border-b border-white/10">
                  <ShieldAlert className="text-gray-400" size={20} />
                  <h3 className="text-lg font-semibold text-white">Clear Boundaries</h3>
                </div>
                
                <ul className="space-y-3">
                  {boundaries.map((boundary, index) => (
                    <li key={index} className="flex items-center space-x-3 text-sm text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-gray-400" />
                      </div>
                      <span className="font-medium">{boundary}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="text-[10px] md:text-xs text-gray-500 leading-relaxed">
                    Neuravia is not a dating app or an adult services platform. All conversations are phone-call only and must remain strictly non-explicit.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FlirtyModeSpotlight;
