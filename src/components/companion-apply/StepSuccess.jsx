import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function StepSuccess() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="py-12 flex flex-col items-center text-center"
    >
      <div className="w-24 h-24 rounded-full bg-electric-cyan/10 flex items-center justify-center mb-8 relative">
        <Heart className="w-12 h-12 text-electric-cyan fill-electric-cyan/20" />
        <div className="absolute inset-0 rounded-full border-2 border-electric-cyan/30 animate-ping" style={{ animationDuration: '2s' }} />
      </div>

      <h2 className="text-3xl md:text-3xl font-semibold text-white mb-4">
        Your application is ready for review.
      </h2>
      
      <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
        Once the application system is connected, submitted applications will move through review, verification and onboarding.
      </p>

      <div className="text-xs font-mono bg-white/5 text-gray-500 px-4 py-2 rounded-lg border border-white/10 mb-12">
        Backend integration pending
      </div>

      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-6 mb-12">
        <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-widest">Next Steps</h4>
        <div className="flex flex-col gap-4 text-left">
          <StepItem num="1" title="Application Review" active />
          <StepItem num="2" title="ID Verification" />
          <StepItem num="3" title="Companion Training" />
          <StepItem num="4" title="Final Approval" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/"
          className="px-8 py-4 rounded-full text-base font-semibold text-brand-950 bg-white hover:bg-gray-200 transition-colors"
        >
          Back To Home
        </Link>
        <Link
          to="/about"
          className="px-8 py-4 rounded-full text-base font-medium text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
        >
          Learn About Never Alone
        </Link>
      </div>

    </motion.div>
  );
}

function StepItem({ num, title, active }) {
  return (
    <div className="flex items-center gap-4">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${active ? 'bg-electric-cyan text-brand-950' : 'bg-white/10 text-gray-500'}`}>
        {num}
      </div>
      <span className={`font-medium ${active ? 'text-white' : 'text-gray-500'}`}>
        {title}
      </span>
    </div>
  );
}
