import React from 'react';
import { ShieldAlert, AlertTriangle } from 'lucide-react';

export default function ProfBoundaries() {
  return (
    <section className="py-16 relative bg-brand-950 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-3xl font-semibold text-white mb-4">
            Clear roles. Clear expectations.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We maintain strict boundaries to ensure everyone receives the appropriate level of care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Companions Boundary */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Regular Companions</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                Regular companions do not diagnose.
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                Regular companions do not prescribe.
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                Regular companions do not provide treatment.
              </li>
            </ul>
          </div>

          {/* Professionals Boundary */}
          <div className="bg-electric-cyan/5 border border-electric-cyan/20 rounded-3xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Professional Support</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Professional support is delivered separately by appropriately qualified and verified mental-health professionals.
            </p>
            <p className="text-gray-300 leading-relaxed">
              They can provide structured guidance, evidence-based approaches, and professional expertise in their areas of practice.
            </p>
          </div>
        </div>

        {/* Critical Warning */}
        <div className="mt-12 bg-red-950/30 border border-red-500/20 rounded-2xl p-6 flex items-start gap-4 max-w-3xl mx-auto">
          <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0" />
          <div>
            <h4 className="text-base font-semibold text-red-300 mb-1">Important Notice</h4>
            <p className="text-sm text-red-200/80">
              Never stop prescribed treatment or ignore professional medical advice based on a conversation with a regular companion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
