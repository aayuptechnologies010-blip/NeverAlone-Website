import React from 'react';
import { Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingProfessional = () => {
  return (
    <section className="py-16 bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-800/50 mb-6">
          <Stethoscope size={14} className="text-cyan-400" />
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">SEPARATE PROFESSIONAL SERVICE</span>
        </div>

        <h2 className="text-3xl font-semibold text-white mb-6">Looking for professional mental-health support?</h2>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
          Professional support is separate from ordinary companion conversations and is provided only by appropriately qualified and verified professionals.
        </p>

        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 max-w-lg mx-auto mb-8 shadow-xl">
          <p className="text-white font-medium text-xl mb-6">Session pricing varies by professional and service.</p>
          <div className="grid grid-cols-2 gap-4 text-sm text-slate-300">
            <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-700/50">Individual Session</div>
            <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-700/50">Professional Consultation</div>
            <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-700/50">Packages</div>
            <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-700/50">Subscription Options</div>
          </div>
        </div>

        <Link to="/book" className="inline-block px-8 py-4 rounded-xl font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors mb-4">
          Explore Professional Support
        </Link>
        <p className="text-xs text-slate-500 block">Companions are not therapists.</p>

      </div>
    </section>
  );
};

export default PricingProfessional;
