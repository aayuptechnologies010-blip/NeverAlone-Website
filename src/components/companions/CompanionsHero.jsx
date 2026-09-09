import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Phone, UserPlus } from 'lucide-react';

const CompanionsHero = () => {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-brand-950 border-b border-white/5">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none flex justify-center">
        <div className="w-[600px] h-[300px] bg-gradient-to-r from-romantic-DEFAULT/10 via-dream-DEFAULT/10 to-electric-DEFAULT/10 rounded-full blur-[100px] -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-gray-300">Real people. Real conversations. 💗</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-3xl lg:text-6xl font-semibold text-white mb-6">
            Find someone who feels <br className="hidden md:block" />
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-romantic-pink to-electric-cyan">easy to talk to.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Choose a companion based on your mood, language, interests and conversation style.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 font-medium">
            <div className="flex items-center space-x-1.5">
              <ShieldCheck size={16} className="text-electric-cyan" />
              <span>Verified Companions</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Phone size={16} className="text-romantic-pink" />
              <span>Private Calls</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <UserPlus size={16} className="text-dream-purple" />
              <span>18+</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanionsHero;
