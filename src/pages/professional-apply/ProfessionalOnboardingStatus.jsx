import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, AlertCircle, Lock, ChevronRight, FileText, ShieldCheck } from 'lucide-react';

export default function ProfessionalOnboardingStatus() {
  // Demo State (Pending Review)
  const status = {
    application: 'completed', // completed
    documentReview: 'current', // completed, current, pending, additional-info
    credentialReview: 'pending', // completed, current, pending, additional-info
    profileReview: 'pending', // completed, current, pending, additional-info
    approval: 'pending', // approved, pending
  };

  return (
    <div className="bg-brand-950 min-h-screen font-sans text-warm-white pb-20 pt-20">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-electric-cyan/10 border border-electric-cyan/20 text-electric-cyan text-xs font-bold uppercase tracking-widest mb-4">
            Professional Onboarding
          </span>
          <h1 className="text-3xl font-bold text-white mb-4">Professional application ready for review.</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Professional applications require credential and profile review before becoming available through Professional Support.
          </p>
        </div>

        {/* Status Timeline */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 mb-8">
          <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[1.375rem] md:before:left-[2.125rem] before:w-px before:bg-white/10">
            
            <StatusStep 
              title="Application" 
              status={status.application}
              desc="Application submitted successfully."
            />
            
            <StatusStep 
              title="Document Review" 
              status={status.documentReview}
              desc="We are reviewing your identity and qualification documents."
              currentAction={status.documentReview === 'additional-info' ? 'Review Application' : null}
            />

            <StatusStep 
              title="Credential Verification" 
              status={status.credentialReview}
              desc="Verifying professional licenses and registration."
            />

            <StatusStep 
              title="Profile Review" 
              status={status.profileReview}
              desc="Ensuring your profile meets Professional Support guidelines."
            />

            <StatusStep 
              title="Approval" 
              status={status.approval}
              desc="Final approval for Professional Support access."
              icon={ShieldCheck}
            />

          </div>
        </div>

        {/* Access Locked / Professional Boundaries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-brand-900 border border-white/5 rounded-3xl p-6 md:p-8 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
              <Lock className="w-6 h-6 text-gray-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Professional Support Access</h3>
              <p className="text-sm text-gray-400">Locked pending final approval.</p>
            </div>
          </div>

          <div className="bg-brand-900 border border-white/5 rounded-3xl p-6 md:p-8">
            <h3 className="text-lg font-bold text-white mb-4">Professional responsibilities</h3>
            <ul className="space-y-3">
              {[
                'Stay within your verified professional scope.',
                'Maintain appropriate conversation boundaries.',
                'Respect customer privacy.',
                'Use reporting/safety systems when necessary.',
                'Do not make guarantees about outcomes.',
                'Do not misrepresent qualifications.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

function StatusStep({ title, status, desc, currentAction, icon: IconComponent }) {
  const isCompleted = status === 'completed' || status === 'approved';
  const isCurrent = status === 'current';
  const isPending = status === 'pending';
  const isAdditionalInfo = status === 'additional-info';

  const iconClasses = {
    completed: 'bg-green-500 border-green-500 text-brand-950',
    approved: 'bg-green-500 border-green-500 text-brand-950',
    current: 'bg-electric-cyan border-electric-cyan text-brand-950',
    'additional-info': 'bg-yellow-500 border-yellow-500 text-brand-950',
    pending: 'bg-brand-950 border-gray-600 text-gray-500',
  };

  const labelClasses = {
    completed: 'text-green-500 bg-green-500/10',
    approved: 'text-green-500 bg-green-500/10',
    current: 'text-electric-cyan bg-electric-cyan/10',
    'additional-info': 'text-yellow-500 bg-yellow-500/10',
    pending: 'text-gray-500 bg-white/5',
  };

  const labels = {
    completed: '✓',
    approved: '✓',
    current: 'Next',
    'additional-info': 'Additional Information Required',
    pending: 'Upcoming',
  };

  return (
    <div className="relative flex items-start gap-6 md:gap-8">
      <div className={`relative z-10 w-11 h-11 md:w-16 md:h-16 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${iconClasses[status]}`}>
        {isCompleted ? (
          <CheckCircle2 className="w-5 h-5 md:w-7 md:h-7" />
        ) : isAdditionalInfo ? (
          <AlertCircle className="w-5 h-5 md:w-7 md:h-7" />
        ) : IconComponent ? (
          <IconComponent className="w-5 h-5 md:w-7 md:h-7" />
        ) : isCurrent ? (
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-brand-950 animate-pulse" />
        ) : (
          <Clock className="w-5 h-5 md:w-7 md:h-7" />
        )}
      </div>
      
      <div className="flex-1 pt-1 md:pt-3">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
          <h3 className={`text-lg font-bold ${isPending ? 'text-gray-500' : 'text-white'}`}>{title}</h3>
          <span className={`self-start sm:self-auto text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded ${labelClasses[status]}`}>
            {labels[status]}
          </span>
        </div>
        
        <p className={`text-sm ${isPending ? 'text-gray-600' : 'text-gray-400'}`}>
          {isAdditionalInfo ? 'Additional information is needed before the application can continue.' : desc}
        </p>

        {currentAction && (
          <button className="mt-4 px-4 py-2 rounded-lg text-xs font-bold text-brand-950 bg-yellow-500 hover:bg-yellow-400 transition-colors">
            {currentAction}
          </button>
        )}
      </div>
    </div>
  );
}
