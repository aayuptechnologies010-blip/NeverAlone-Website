import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ShieldAlert, MessageSquare, BookOpen, AlertCircle, Flag, X } from 'lucide-react';

const reportReasons = [
  'Harassment',
  'Explicit Content',
  'Threat / Coercion',
  'Asked For Personal Information',
  'Off-Platform Money Issue',
  'Physical Meetup Request',
  'Other',
];

export default function CompanionSafety() {
  const [showReport, setShowReport] = useState(false);
  const [reportReason, setReportReason] = useState('');
  const [reportDesc, setReportDesc] = useState('');
  const [reportSubmitted, setReportSubmitted] = useState(false);

  const handleSubmitReport = () => {
    if (!reportReason) return;
    setReportSubmitted(true);
    setTimeout(() => {
      setShowReport(false);
      setReportSubmitted(false);
      setReportReason('');
      setReportDesc('');
    }, 2000);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-1">Safety & Support</h1>
        <p className="text-gray-400">Your boundaries matter too.</p>
      </div>

      {/* Actions grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <SafetyAction
          icon={Flag}
          title="Report A Customer"
          desc="Report a conversation that crossed boundaries."
          onClick={() => setShowReport(true)}
          isButton
          highlight
        />
        <SafetyAction icon={BookOpen} title="Conversation Guidelines" desc="Review companion conversation guidelines." to="/companion/training/guidelines" />
        <SafetyAction icon={MessageSquare} title="Contact Support" desc="Get help with a platform issue." to="/contact" />
        <SafetyAction icon={AlertCircle} title="Emergency Guidance" desc="Understand when to redirect to emergency services." />
        <SafetyAction icon={ShieldCheck} title="Training & Boundaries" desc="Review training modules and boundaries." to="/companion/training" />
      </div>

      {/* Boundary reminder */}
      <div className="bg-electric-cyan/5 border border-electric-cyan/20 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">You can always:</h3>
        <ul className="space-y-3 text-sm text-gray-300">
          <li className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-electric-cyan flex-shrink-0" />Change the subject.</li>
          <li className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-electric-cyan flex-shrink-0" />Set a boundary.</li>
          <li className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-electric-cyan flex-shrink-0" />End the conversation.</li>
          <li className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-electric-cyan flex-shrink-0" />Report the customer.</li>
        </ul>
        <p className="text-sm text-electric-cyan/80 font-medium italic mt-4">
          "You never have to continue a conversation that crosses your boundaries."
        </p>
      </div>

      {/* Flirty mode safety reminder */}
      <div className="bg-romantic-DEFAULT/5 border border-romantic-DEFAULT/20 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-romantic-pink" />
          Flirty Mode Safety
        </h3>
        <ul className="space-y-2 text-sm text-gray-300">
          <li>• 18+ Only</li>
          <li>• Mutual Consent Required</li>
          <li>• Non-Explicit Only</li>
          <li>• No Physical Meetups</li>
          <li>• Either person can stop the flirty tone at any time.</li>
        </ul>
      </div>

      {/* Professional boundary */}
      <div className="bg-brand-900 border border-white/10 rounded-xl p-4 flex gap-3">
        <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-gray-400">Regular companions are not therapists. Do not add unverified professional titles. Professional Support is a separate service.</p>
      </div>

      {/* Report modal */}
      <AnimatePresence>
        {showReport && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 z-50" onClick={() => setShowReport(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-brand-900 border border-white/10 rounded-3xl p-6 md:p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">Report A Customer</h3>
                  <button onClick={() => setShowReport(false)} className="text-gray-400 hover:text-white"><X className="w-5 h-5" /></button>
                </div>

                {reportSubmitted ? (
                  <div className="text-center py-8">
                    <ShieldCheck className="w-12 h-12 text-electric-cyan mx-auto mb-4" />
                    <p className="text-white font-bold mb-2">Report submitted (demo).</p>
                    <p className="text-sm text-gray-400">Backend integration pending.</p>
                  </div>
                ) : (
                  <>
                    <p className="text-sm text-gray-400 mb-4">Select a reason for the report.</p>
                    <div className="space-y-2 mb-6">
                      {reportReasons.map(reason => (
                        <button
                          key={reason}
                          onClick={() => setReportReason(reason)}
                          className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ${
                            reportReason === reason
                              ? 'bg-red-500/10 border-red-500/30 text-red-300'
                              : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                          }`}
                        >{reason}</button>
                      ))}
                    </div>
                    <div className="mb-6">
                      <label className="block text-xs text-gray-400 font-medium mb-1">Details (Optional)</label>
                      <textarea
                        value={reportDesc}
                        onChange={(e) => setReportDesc(e.target.value)}
                        rows={3}
                        placeholder="Share any additional details..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500/50 resize-none"
                      />
                    </div>
                    <button
                      onClick={handleSubmitReport}
                      disabled={!reportReason}
                      className="w-full px-6 py-3 rounded-xl text-sm font-bold text-white bg-red-500 hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Submit Report
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function SafetyAction({ icon: Icon, title, desc, to, onClick, isButton, highlight }) {
  const classes = `flex items-start gap-4 p-5 rounded-2xl border transition-all text-left w-full ${
    highlight
      ? 'bg-red-500/5 border-red-500/20 hover:bg-red-500/10'
      : 'bg-white/5 border-white/10 hover:bg-white/10'
  }`;

  const content = (
    <>
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${highlight ? 'bg-red-500/10' : 'bg-white/10'}`}>
        <Icon className={`w-5 h-5 ${highlight ? 'text-red-400' : 'text-gray-400'}`} />
      </div>
      <div>
        <h3 className={`text-sm font-bold mb-1 ${highlight ? 'text-red-300' : 'text-white'}`}>{title}</h3>
        <p className="text-xs text-gray-400">{desc}</p>
      </div>
    </>
  );

  if (isButton) return <button onClick={onClick} className={classes}>{content}</button>;
  if (to) return <Link to={to} className={classes}>{content}</Link>;
  return <div className={classes}>{content}</div>;
}
