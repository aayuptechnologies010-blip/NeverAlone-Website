import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope } from 'lucide-react';

export default function SupportProfShortcut() {
  return (
    <div className="bg-electric-cyan/5 border border-electric-cyan/20 rounded-3xl p-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="absolute top-0 right-0 w-64 h-64 bg-electric-cyan/10 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="relative z-10 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-electric-cyan/10 flex items-center justify-center flex-shrink-0 mt-1">
          <Stethoscope className="w-6 h-6 text-electric-cyan" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Looking for professional support?
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed max-w-md">
            Professional Support is separate from regular companion conversations and is intended for appropriately qualified and verified professionals.
          </p>
        </div>
      </div>

      <div className="relative z-10 w-full md:w-auto">
        <Link
          to="/professional-support"
          className="block w-full px-6 py-3 rounded-full text-center text-sm font-semibold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.2)]"
        >
          Explore Professional Support
        </Link>
      </div>
    </div>
  );
}
