import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Phone, VideoOff, Check } from 'lucide-react';

const PricingExtraHour = () => {
  return (
    <section className="py-16 bg-brand-900 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-20">
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-3xl font-semibold text-white mb-2">Good conversation and not ready to stop?</h2>
            <p className="text-xl text-gray-400 mb-8">Add another 60 minutes for ₹199.</p>

            <ul className="space-y-4">
              {[
                { icon: Plus, text: "Additional 60-minute phone conversation" },
                { icon: Check, text: "Continue with current companion subject to availability" },
                { icon: Phone, text: "Private phone call" },
                { icon: VideoOff, text: "No video" },
                { icon: Check, text: "Multiple extensions may be purchased when available" }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300">
                  <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon size={12} className="text-electric-cyan" />
                  </div>
                  <span className="text-sm md:text-base leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            {/* Interactive Mockup */}
            <motion.div 
              className="w-full max-w-sm bg-brand-950 border border-white/10 rounded-[2.5rem] p-8 shadow-2xl text-center"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              <div className="text-romantic-pink font-mono text-3xl mb-2 font-semibold">55:00 <span className="text-gray-600 text-lg">/ 60:00</span></div>
              <p className="text-sm text-gray-400 mb-8">Your session is ending soon.</p>

              <button className="w-full relative group rounded-2xl overflow-hidden mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-electric-cyan to-electric-DEFAULT opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="border border-electric-cyan/30 rounded-2xl p-6 relative z-10 flex flex-col items-center group-hover:border-electric-cyan/50 transition-colors">
                  <span className="text-white font-semibold text-lg mb-1">+ 60 MINUTES</span>
                  <span className="text-electric-cyan font-semibold text-2xl">₹199</span>
                </div>
              </button>

              <button onClick={() => alert('Demo only. Would open payment/confirmation modal.')} className="w-full py-4 rounded-xl bg-white text-brand-950 font-semibold hover:bg-gray-200 transition-colors">
                Add Another Hour
              </button>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PricingExtraHour;
