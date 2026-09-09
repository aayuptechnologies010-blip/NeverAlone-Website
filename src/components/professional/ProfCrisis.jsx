import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall } from 'lucide-react';

export default function ProfCrisis() {
  return (
    <section className="py-12 relative bg-brand-950 border-t border-b border-white/5">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
          <PhoneCall className="w-8 h-8 text-gray-400" />
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Need urgent help?
        </h2>
        
        <p className="text-lg font-medium text-gray-300 mb-4">
          Never Alone is not an emergency service.
        </p>

        <p className="text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          If you or someone else may be in immediate danger, experiencing a medical emergency, or going through a severe crisis, contact local emergency services or an appropriate crisis support service immediately.
        </p>

        <Link
          to="/safety"
          className="inline-flex px-8 py-3.5 rounded-full text-sm font-medium text-white bg-white/10 hover:bg-white/15 transition-colors border border-white/20"
        >
          View Safety Information
        </Link>
      </div>
    </section>
  );
}
