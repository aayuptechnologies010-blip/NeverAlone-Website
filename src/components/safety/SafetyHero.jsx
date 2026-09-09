import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, UserCheck, Phone, Lock, EyeOff } from 'lucide-react';

export default function SafetyHero({ onReadGuidelines, onReport }) {
  return (
    <section className="relative pt-10 pb-20 md:pt-40 md:pb-28 bg-brand-950 overflow-hidden">
      {/* Premium Image Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen"
        style={{ backgroundImage: `url('/safety_hero_bg.jpg')` }}
      />
      {/* Dark gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950/80 via-brand-950/60 to-brand-950 pointer-events-none" />
      
      {/* Glowing accent */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-electric-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-electric-cyan/30 bg-electric-cyan/10 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
        >
          <ShieldAlert className="w-5 h-5 text-electric-cyan" />
          <span className="text-sm font-bold text-electric-cyan uppercase tracking-widest">
            Safety Center
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight drop-shadow-lg"
        >
          Feel comfortable. <br className="hidden md:block" />
          Keep your boundaries.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Never Alone is designed around private, respectful phone conversations with clear boundaries and easy access to safety tools.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-14"
        >
          <button
            onClick={onReadGuidelines}
            className="w-full sm:w-auto px-10 py-4 rounded-full text-lg font-bold text-brand-950 bg-electric-cyan hover:bg-white transition-all shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transform hover:-translate-y-1"
          >
            Read Our Guidelines
          </button>
          <button
            onClick={onReport}
            className="w-full sm:w-auto px-10 py-4 rounded-full text-lg font-bold text-white border-2 border-white/20 hover:border-white/50 hover:bg-white/10 backdrop-blur-sm transition-all transform hover:-translate-y-1"
          >
            Report A Concern
          </button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 md:gap-12 max-w-4xl mx-auto bg-brand-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-6"
        >
          <TrustItem icon={UserCheck} text="18+ Verified" />
          <TrustItem icon={Phone} text="Phone Calls Only" />
          <TrustItem icon={Lock} text="Private & Secure" />
          <TrustItem icon={EyeOff} text="Respectful" />
        </motion.div>
      </div>
    </section>
  );
}

function TrustItem({ icon: Icon, text }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-electric-cyan/20 to-transparent border border-electric-cyan/30 flex items-center justify-center text-electric-cyan shadow-[0_0_15px_rgba(34,211,238,0.15)]">
        <Icon className="w-6 h-6" />
      </div>
      <span className="text-xs md:text-sm font-bold text-gray-300 uppercase tracking-widest text-center">{text}</span>
    </div>
  );
}
