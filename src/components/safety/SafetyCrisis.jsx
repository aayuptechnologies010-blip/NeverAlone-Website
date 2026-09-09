import React from 'react';
import { AlertTriangle, PhoneCall } from 'lucide-react';

export default function SafetyCrisis() {
  return (
    <section className="py-12 relative bg-brand-950 border-t border-b border-white/5">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/10 mb-8">
          <AlertTriangle className="w-4 h-4 text-red-400" />
          <span className="text-sm font-medium text-red-400 uppercase tracking-wider">
            Urgent Support
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Never Alone is not an emergency service.
        </h2>
        
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed text-lg">
          If you or someone else may be in immediate danger, contact local emergency services or an appropriate crisis-support service immediately.
        </p>

        <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium text-brand-950 bg-white hover:bg-gray-200 transition-colors">
          <PhoneCall className="w-4 h-4" />
          Find Emergency Resources
        </button>
      </div>
    </section>
  );
}
