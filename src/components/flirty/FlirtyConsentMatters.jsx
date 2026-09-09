import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

export default function FlirtyConsentMatters() {
  return (
    <section className="py-16 bg-brand-950 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8 shadow-lg">
          <Shield className="w-8 h-8 text-electric-cyan" />
        </div>

        <h2 className="text-3xl md:text-3xl font-semibold text-white mb-6">
          Good chemistry starts with consent.
        </h2>
        
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Either person can change the tone, set a boundary or end the conversation at any time.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            'You can say no',
            'You can change the subject',
            'You can end the call',
            'You can report a concern'
          ].map((item) => (
            <div key={item} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300">
              {item}
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-12">
          No explanation required.
        </p>

        <Link
          to="/safety"
          className="inline-flex px-8 py-3.5 rounded-full text-sm font-medium text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.3)]"
        >
          View Safety Guidelines
        </Link>
      </div>
    </section>
  );
}
