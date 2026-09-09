import React, { useState } from 'react';
import { Flag, ArrowRight } from 'lucide-react';
import ReportModal from '../call/ReportModal';

const steps = [
  'Open Report',
  'Choose a reason',
  'Add optional context',
  'Submit',
  'Return to safety'
];

export default function SafetyReporting() {
  const [isReportOpen, setIsReportOpen] = useState(false);

  return (
    <section id="reporting" className="py-16 bg-brand-950 relative border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-3xl font-semibold text-white mb-4">
            If something feels wrong, tell us.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Reporting should remain available before, during and after a conversation.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-between bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
          
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-6">How it works</h3>
            <div className="space-y-4">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-semibold text-white">
                    {idx + 1}
                  </div>
                  <span className="text-gray-300 font-medium">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex flex-col items-center justify-center px-8">
            <ArrowRight className="w-8 h-8 text-white/20 mb-2" />
            <ArrowRight className="w-8 h-8 text-white/10 mb-2" />
            <ArrowRight className="w-8 h-8 text-white/5" />
          </div>

          <div className="flex-1 w-full bg-brand-950/50 rounded-2xl p-8 border border-white/5 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6">
              <Flag className="w-8 h-8 text-red-400" />
            </div>
            <h4 className="text-white font-semibold mb-2">Try the reporting tool</h4>
            <p className="text-sm text-gray-400 mb-6">Experience how easy it is to set a boundary.</p>
            <button
              onClick={() => setIsReportOpen(true)}
              className="w-full px-8 py-3 rounded-xl text-sm font-semibold text-white bg-red-500/80 hover:bg-red-500 transition-all shadow-[0_0_15px_rgba(239,68,68,0.2)]"
            >
              Report A Concern (Demo)
            </button>
          </div>

        </div>
      </div>

      <ReportModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
      />
    </section>
  );
}
