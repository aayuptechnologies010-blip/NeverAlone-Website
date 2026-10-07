import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

const FirstSessionOffer = () => {
  return (
    <section className="py-14 sm:py-16 bg-[#fbfdfc] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-md overflow-hidden relative">
          <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Text Copy */}
            <div className="lg:col-span-7 text-left space-y-5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00839a]/10 text-[#00839a] text-xs font-semibold uppercase tracking-wider">
                <Sparkles size={13} />
                <span>Take The First Step</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#083058] tracking-tight font-display">
                Your Mental Wellbeing Matters.
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                You don't need to wait until everything feels unbearable before asking for support. Taking care of your mind isn't a sign of weakness. It's a step toward a healthier, more balanced life.
              </p>

              <div className="pt-3">
                <Link
                  to="/first-session"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-[#083058] hover:bg-[#0c4a6e] shadow-sm hover:shadow-md transition-all"
                >
                  <span>Start Your Journey →</span>
                </Link>
              </div>
            </div>

            {/* Visual Photography Scene */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-lg p-2 bg-slate-50 w-full max-w-md">
                <div className="rounded-xl overflow-hidden aspect-[16/10] bg-slate-100">
                  <img
                    src="/images/neuravia-wellbeing.jpg"
                    alt="Peaceful mental wellbeing and mindfulness"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-3 px-3 py-1.5 flex items-center justify-between text-xs text-slate-600">
                  <span className="font-semibold text-[#083058]">Gentle 1-on-1 Guidance</span>
                  <span className="font-bold text-[#00839a]">Starting at ₹499</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FirstSessionOffer;
