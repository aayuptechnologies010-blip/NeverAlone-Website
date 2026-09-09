import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X } from 'lucide-react';

const reportReasons = [
  'Harassment',
  'Explicit Content',
  'Threat / Coercion',
  'Asked For Personal Information',
  'Off-Platform Money Issue',
  'Physical Meetup Request',
  'Other',
];

export default function CompanionReportModal({ isOpen, onClose }) {
  const [reportReason, setReportReason] = useState('');
  const [reportDesc, setReportDesc] = useState('');
  const [reportSubmitted, setReportSubmitted] = useState(false);

  const handleClose = () => {
    setReportReason('');
    setReportDesc('');
    setReportSubmitted(false);
    onClose();
  };

  const handleSubmit = () => {
    if (!reportReason) return;
    setReportSubmitted(true);
    setTimeout(handleClose, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div
              className="bg-brand-900 border border-white/10 rounded-3xl p-6 md:p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="report-modal-title"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 id="report-modal-title" className="text-xl font-semibold text-white">
                  Report A Customer
                </h3>
                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-electric-cyan rounded-lg p-1"
                  aria-label="Close report modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {reportSubmitted ? (
                <div className="text-center py-8">
                  <ShieldCheck className="w-12 h-12 text-electric-cyan mx-auto mb-4" />
                  <p className="text-white font-semibold mb-2">Report submitted (demo).</p>
                  <p className="text-sm text-gray-400">Backend integration pending.</p>
                </div>
              ) : (
                <>
                  <p className="text-sm text-gray-400 mb-4">Select a reason for the report.</p>
                  <div className="space-y-2 mb-6">
                    {reportReasons.map((reason) => (
                      <button
                        key={reason}
                        onClick={() => setReportReason(reason)}
                        className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-red-500/50 ${
                          reportReason === reason
                            ? 'bg-red-500/10 border-red-500/30 text-red-300'
                            : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        {reason}
                      </button>
                    ))}
                  </div>
                  <div className="mb-6">
                    <label htmlFor="report-details" className="block text-xs text-gray-400 font-medium mb-1">
                      Details (Optional)
                    </label>
                    <textarea
                      id="report-details"
                      value={reportDesc}
                      onChange={(e) => setReportDesc(e.target.value)}
                      rows={3}
                      placeholder="Share any additional details..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500/50 resize-none"
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    disabled={!reportReason}
                    className="w-full px-6 py-3 rounded-xl text-sm font-semibold text-white bg-red-500 hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-red-400"
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
  );
}
