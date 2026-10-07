import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ClipboardCheck, ArrowRight, ShieldAlert } from 'lucide-react';

const AssessmentQuizModal = () => {
  return (
    <section className="py-14 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#fbfdfc] border border-slate-200/80 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-sm">
          
          <div className="w-14 h-14 rounded-2xl bg-[#00839a]/10 text-[#00839a] flex items-center justify-center mx-auto mb-2">
            <ClipboardCheck size={28} />
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#083058] tracking-tight font-display">
              Not Sure Where to Start?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
              Take our quick wellbeing check to understand what kind of support might be helpful for you.
            </p>
          </div>

          <div className="pt-2">
            <Link
              to="/categories"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-[#083058] hover:bg-[#0c4a6e] shadow-sm transition-all"
            >
              <span>Start Free Assessment</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-200/60 max-w-md mx-auto">
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Disclaimer: This assessment is for informational purposes only and is not a medical diagnosis.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AssessmentQuizModal;
