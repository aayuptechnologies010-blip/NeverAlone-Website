import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, Lock, Activity } from 'lucide-react';

export default function ProfHero({ onExplore }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-950 overflow-hidden">
      {/* Calm background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950 via-brand-900 to-brand-950 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-electric-cyan/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric-cyan/20 bg-electric-cyan/5 mb-8"
        >
          <ShieldCheck className="w-4 h-4 text-electric-cyan" />
          <span className="text-sm font-medium text-electric-cyan uppercase tracking-wider">
            Qualified Professional Support
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-3xl lg:text-6xl font-semibold text-white leading-tight mb-6"
        >
          When you need more than <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-blue-400">
            a conversation.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Connect with appropriately qualified and verified mental-health professionals through a clearly separate professional support service.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <button
            onClick={onExplore}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            Explore Professionals
          </button>
          <a
            href="#difference"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-medium text-gray-300 border border-white/20 hover:bg-white/5 transition-colors"
          >
            Understand The Difference
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto"
        >
          <TrustItem icon={UserCheck} text="Qualified Professionals" />
          <TrustItem icon={ShieldCheck} text="Verified Profiles" />
          <TrustItem icon={Lock} text="Private" />
          <TrustItem icon={Activity} text="18+ Service" />
        </motion.div>
      </div>
    </section>
  );
}

function TrustItem({ icon: Icon, text }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400">
        <Icon className="w-5 h-5" />
      </div>
      <span className="text-xs font-medium text-gray-400 uppercase tracking-wider text-center">{text}</span>
    </div>
  );
}
