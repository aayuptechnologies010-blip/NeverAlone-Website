import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import ReportModal from '../call/ReportModal';

export default function SupportSafetyShortcut() {
  const [isReportOpen, setIsReportOpen] = useState(false);

  return (
    <section className="py-16 bg-brand-950 relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-8 md:gap-6 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="w-20 h-20 rounded-2xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
            <ShieldAlert className="w-10 h-10 text-red-400" />
          </div>

          <div className="flex-1 relative z-10">
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-3">
              Safety
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Something didn’t feel right?
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              If a conversation crossed your boundaries, you can report the concern through Never Alone’s safety tools.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button 
                onClick={() => setIsReportOpen(true)}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-semibold text-white bg-red-500 hover:bg-red-600 transition-colors shadow-[0_0_15px_rgba(239,68,68,0.2)]"
              >
                Report A Concern
              </button>
              <Link 
                to="/safety"
                className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-medium text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors text-center"
              >
                Visit Safety Center
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center bg-white/5 border border-white/10 rounded-xl p-6">
          <p className="text-sm font-semibold text-red-300 mb-1">
            Never Alone is not an emergency service.
          </p>
          <p className="text-sm text-gray-400">
            If you or someone else may be in immediate danger, contact appropriate local emergency or crisis-support services.
          </p>
        </div>

      </div>

      {/* Reuse existing Report Modal */}
      <AnimatePresence>
        {isReportOpen && (
          <ReportModal onClose={() => setIsReportOpen(false)} />
        )}
      </AnimatePresence>
    </section>
  );
}
