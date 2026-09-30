import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, ShieldCheck, Sparkles, CheckCircle2, ArrowRight, UserCheck, Lock } from 'lucide-react';

const FirstSessionOffer = () => {
  return (
    <section className="py-12 relative bg-brand-950 overflow-hidden border-t border-white/10">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-romantic-DEFAULT/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-electric-DEFAULT/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-brand-900 via-brand-900/90 to-brand-950 border border-white/15 rounded-3xl p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-navy via-brand-teal to-brand-leaf" />

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Offer details */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-teal/15 border border-brand-teal/40 text-brand-300 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles size={14} className="text-brand-leaf" />
                <span>Start Wherever You Are • First Session Offer</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4 font-display">
                Book Your First 1-on-1 Session Online.
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                Talk with a verified companion or professional in a comfortable, confidential space. Share what matters, feel heard, and take the first step together — no package commitment required.
              </p>

              {/* Key Value Props Pill Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-xl p-3">
                  <Clock size={18} className="text-brand-teal shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200 font-semibold">60 Mins Call</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-xl p-3">
                  <ShieldCheck size={18} className="text-brand-300 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200 font-semibold">100% Confidential</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-xl p-3 col-span-2 sm:col-span-1">
                  <UserCheck size={18} className="text-brand-leaf shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200 font-semibold">Same-Day Match</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/first-session"
                  className="px-8 py-4 rounded-full font-bold text-base text-brand-950 bg-gradient-to-r from-white via-slate-100 to-slate-200 hover:from-white hover:to-white shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all transform hover:-translate-y-0.5 flex items-center space-x-2"
                >
                  <span>Explore First Session</span>
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/professional-support"
                  className="px-6 py-4 rounded-full font-semibold text-sm text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-colors"
                >
                  Meet Professionals
                </Link>
              </div>
            </div>

            {/* Right Column: Pricing & Booking Summary Card */}
            <div className="lg:col-span-5">
              <div className="bg-brand-950/90 border border-brand-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md relative shadow-xl">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs text-brand-300 uppercase tracking-widest font-bold">Single Session</span>
                    <h3 className="text-2xl font-bold text-white mt-1">First Conversation</h3>
                  </div>
                  <span className="px-3 py-1 bg-brand-leaf/10 border border-brand-leaf/40 text-brand-leaf text-xs font-bold rounded-full">
                    Available Today
                  </span>
                </div>

                <div className="flex items-baseline space-x-2 mb-6 pb-6 border-b border-white/10">
                  <span className="text-4xl font-extrabold text-white">₹499</span>
                  <span className="text-slate-400 text-sm">/ 60 minutes session</span>
                </div>

                <ul className="space-y-3 mb-8 text-sm text-slate-300">
                  <li className="flex items-center space-x-2.5">
                    <CheckCircle2 size={16} className="text-brand-leaf shrink-0" />
                    <span>Private 1-on-1 audio call from your safe space</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <CheckCircle2 size={16} className="text-brand-leaf shrink-0" />
                    <span>Choose Hindi, English, or regional languages</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <CheckCircle2 size={16} className="text-brand-leaf shrink-0" />
                    <span>Care team reviews fit before connecting</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <CheckCircle2 size={16} className="text-brand-leaf shrink-0" />
                    <span>No waitlist • Book in under 60 seconds</span>
                  </li>
                </ul>

                <Link
                  to="/first-session"
                  className="w-full block text-center py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-brand-navy via-brand-teal to-brand-green hover:opacity-95 shadow-lg shadow-brand-teal/20 transition-all border border-cyan-400/20"
                >
                  Get Started (₹499)
                </Link>

                <p className="text-[11px] text-gray-500 text-center mt-3 flex items-center justify-center gap-1.5">
                  <Lock size={12} className="text-gray-400" />
                  <span>Encrypted • Identity remains 100% private</span>
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FirstSessionOffer;
