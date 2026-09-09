import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BriefcaseMedical, AlertCircle, CheckCircle2, ChevronRight, ShieldCheck, FileText, UserCheck } from 'lucide-react';

export default function ProfessionalApplyLanding() {
  return (
    <div className="bg-brand-950 min-h-screen text-warm-white pb-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8 pt-20">
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-electric-cyan/10 border border-electric-cyan/20 text-electric-cyan text-xs font-bold uppercase tracking-widest mb-6">
            Professional Support
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Bring qualified support <br className="hidden md:block" />
            to meaningful conversations.
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Professional Support is a separate Never Alone service designed for appropriately qualified professionals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/professional-support/application" className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors text-lg">
              Apply As A Professional
            </Link>
            <Link to="/professional-support" className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-lg">
              Learn About Professional Support
            </Link>
          </div>
        </motion.div>

        {/* Important Notice */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="bg-brand-900 border border-electric-cyan/20 rounded-3xl p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 rounded-2xl bg-electric-cyan/10 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-8 h-8 text-electric-cyan" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Professional Support is different from regular companion conversations.</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p><strong>Regular companions</strong> focus on everyday conversation, listening, and friendly perspectives.</p>
                <p><strong>Professional Support</strong> is reserved for appropriately qualified and approved professionals.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Who Should Apply */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Who is this application for?</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            This application is intended for professionals who have relevant qualifications and credentials appropriate to the professional support they intend to provide.
          </p>
          <div className="flex flex-col md:flex-row gap-4 p-6 bg-brand-950 rounded-2xl border border-white/5">
            <BriefcaseMedical className="w-6 h-6 text-lavender-400 flex-shrink-0" />
            <p className="text-sm text-gray-300">Never Alone requires professionals to submit proof of qualification and identity before they can provide Professional Support on the platform.</p>
          </div>
        </motion.div>

        {/* Application Process */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ProcessStep num="01" title="Professional Details" icon={UserCheck} />
            <ProcessStep num="02" title="Qualifications" icon={BookOpen} />
            <ProcessStep num="03" title="Credentials & Documents" icon={FileText} />
            <ProcessStep num="04" title="Professional Profile" icon={BriefcaseMedical} />
            <ProcessStep num="05" title="Availability" icon={Clock} />
            <ProcessStep num="06" title="Review Application" icon={CheckCircle2} />
            <ProcessStep num="07" title="Verification & Approval" icon={ShieldCheck} />
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-br from-brand-800 to-brand-950 border border-white/10 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to apply?</h2>
          <Link to="/professional-support/application" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors text-lg">
            Start Professional Application <ChevronRight className="w-5 h-5" />
          </Link>
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-gray-500 mb-4">Looking to become a regular companion instead?</p>
            <Link to="/become-a-companion" className="text-sm font-semibold text-lavender-400 hover:text-lavender-300 transition-colors">
              Become A Companion
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

function ProcessStep({ num, title, icon: Icon }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:bg-white/10 transition-colors">
      <span className="text-4xl font-black text-white/5 absolute top-4 right-4">{num}</span>
      {Icon && <Icon className="w-6 h-6 text-electric-cyan mb-4" />}
      <h3 className="text-sm font-bold text-white uppercase tracking-wider">{title}</h3>
    </div>
  );
}

function BookOpen(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  );
}

function Clock(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}
