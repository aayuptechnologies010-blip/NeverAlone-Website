import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, UserCheck } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-14 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-[#083058] to-[#041a22] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-xl relative overflow-hidden">
          {/* Soft ambient light overlay */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00839a]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display leading-tight">
              You Don't Have to Figure Everything Out Alone.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
              Sometimes, the first step is simply talking to someone who understands.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/first-session"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-[#083058] bg-white hover:bg-slate-100 shadow-md transition-all flex items-center justify-center space-x-2"
              >
                <span>Book Your Session — ₹499</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/#therapists"
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-sm sm:text-base text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all flex items-center justify-center space-x-2"
              >
                <UserCheck size={16} />
                <span>Find a Therapist</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
