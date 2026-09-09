import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AboutFinalCTA() {
  return (
    <section className="py-16 bg-brand-950 relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-electric-cyan/5 to-brand-950 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        
        <p className="text-xs font-semibold text-electric-cyan uppercase tracking-widest mb-6">
          Start With One Sentence
        </p>

        <h2 className="text-3xl md:text-3xl lg:text-7xl font-semibold text-white mb-8 leading-tight">
          You don’t have to have <br className="hidden md:block" />
          the perfect words.
        </h2>

        <div className="mb-12">
          <p className="text-lg md:text-xl text-gray-400 font-light mb-4">
            Start with:
          </p>
          <p className="text-2xl md:text-3xl font-medium text-white mb-4">
            ‘Hey, I just need someone to talk to.’
          </p>
          <p className="text-lg md:text-xl text-gray-400 font-light">
            That’s enough.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            to="/categories"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            Find Someone To Talk To
          </Link>
          <Link
            to="/categories"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-medium text-gray-300 border border-white/20 hover:bg-white/5 transition-colors"
          >
            Explore Conversations
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-400 mb-8 font-medium">
          <span>1 Hour Every Day</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
          <span>Extra 1 Hour ₹199</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
          <span>Phone Calls Only</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-gray-600 uppercase tracking-widest font-semibold">
          <span>18+</span>
          <span className="w-1 h-1 rounded-full bg-gray-700" />
          <span>Private</span>
          <span className="w-1 h-1 rounded-full bg-gray-700" />
          <span>Respectful</span>
          <span className="w-1 h-1 rounded-full bg-gray-700" />
          <span>Non-Explicit</span>
        </div>

      </div>
    </section>
  );
}
