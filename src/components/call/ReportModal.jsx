import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Flag, CheckCircle2 } from 'lucide-react';
import { reportReasons } from '../../data/callDemo';

// Report modal accessible during an active call.
// Does NOT automatically end the call when opened.
export default function ReportModal({ isOpen, onClose, onEndCall }) {
  const [selected, setSelected] = useState(null);
  const [detail, setDetail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selected !== null) {
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    setSelected(null);
    setDetail('');
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={handleClose}
          />

          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
          >
            <div
              className="w-full sm:max-w-md bg-brand-950 border border-white/10 rounded-t-2xl sm:rounded-2xl p-6 relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              {!submitted ? (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <Flag className="w-5 h-5 text-amber-400" />
                    <h2 className="text-lg font-semibold text-white">
                      Report a concern
                    </h2>
                  </div>
                  <p className="text-sm text-gray-400 mb-6">
                    If something feels wrong or crosses your boundaries, tell us.
                  </p>

                  {/* Reasons */}
                  <div className="space-y-2 mb-6">
                    {reportReasons.map((reason, i) => (
                      <button
                        key={reason}
                        onClick={() => setSelected(i)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-sm border transition-all ${
                          selected === i
                            ? 'bg-red-500/10 border-red-500/30 text-white'
                            : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        {reason}
                      </button>
                    ))}
                  </div>

                  {/* Optional detail */}
                  <div className="mb-6">
                    <label className="text-sm text-gray-300 mb-2 block">
                      Tell us what happened{' '}
                      <span className="text-gray-500">(optional)</span>
                    </label>
                    <textarea
                      value={detail}
                      onChange={(e) => setDetail(e.target.value)}
                      rows={3}
                      placeholder="Describe the situation…"
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500/30 resize-none"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <button
                      onClick={handleSubmit}
                      disabled={selected === null}
                      className={`w-full py-3 rounded-full text-sm font-medium transition-all ${
                        selected !== null
                          ? 'text-white bg-red-500/80 hover:bg-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]'
                          : 'text-gray-500 bg-white/5 cursor-not-allowed'
                      }`}
                    >
                      Submit Report
                    </button>
                    <button
                      onClick={handleClose}
                      className="w-full py-3 rounded-full text-sm font-medium text-gray-400 border border-white/10 hover:bg-white/5 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Report received.
                  </h3>
                  <p className="text-sm text-gray-400 mb-6">
                    We take your safety seriously and will review this promptly.
                  </p>
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => {
                        handleClose();
                        if (onEndCall) onEndCall();
                      }}
                      className="w-full py-3 rounded-full text-sm font-medium text-gray-400 border border-white/10 hover:bg-white/5 transition-colors"
                    >
                      End Conversation
                    </button>
                    <button
                      onClick={handleClose}
                      className="w-full py-3 rounded-full text-sm font-medium text-white bg-gradient-to-r from-romantic-DEFAULT/80 to-dream-purple/80 hover:shadow-[0_0_12px_rgba(219,39,119,0.3)] transition-all"
                    >
                      Return To Call
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
