import React from 'react';
import { Link } from 'react-router-dom';

export default function SupportFinalCTA({ onGetSupport }) {
  return (
    <section className="py-16 bg-brand-950 relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-electric-cyan/5 to-brand-950 pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-3xl font-semibold text-white mb-6 leading-tight">
          You don’t have to figure <br className="hidden md:block" />
          everything out alone.
        </h2>

        <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
          If something about Never Alone is unclear, tell us what you need help with.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={onGetSupport}
            className="px-8 py-4 rounded-full text-base font-semibold text-brand-950 bg-white hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Get Support
          </button>
          <Link
            to="/faq"
            className="px-8 py-4 rounded-full text-base font-medium text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
          >
            Browse FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
