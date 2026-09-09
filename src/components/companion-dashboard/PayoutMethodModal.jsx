import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard } from 'lucide-react';

export default function PayoutMethodModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
              className="bg-brand-900 border border-white/10 rounded-3xl p-6 md:p-8 w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="payout-modal-title"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 id="payout-modal-title" className="text-xl font-semibold text-white">
                  Add Payout Method
                </h3>
                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-white p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-cyan"
                  aria-label="Close payout modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submitted ? (
                <div className="text-center py-8">
                  <CreditCard className="w-12 h-12 text-electric-cyan mx-auto mb-4" />
                  <p className="text-white font-semibold mb-2">Saved (frontend demo)</p>
                  <p className="text-sm text-gray-400">
                    Payout methods are not connected to a real payment system.
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-sm text-gray-400 mb-6">
                    Placeholder UI only. Do not enter real banking credentials.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs text-gray-400 font-medium mb-1">
                        Method Type
                      </label>
                      <select
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-electric-cyan/50"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select method
                        </option>
                        <option value="bank">Bank Account (placeholder)</option>
                        <option value="upi">UPI (placeholder)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 font-medium mb-1">
                        Account Label
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Primary account"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-electric-cyan/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 font-medium mb-1">
                        Account Details (placeholder)
                      </label>
                      <input
                        type="text"
                        placeholder="Not stored — demo only"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-electric-cyan/50"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 rounded-xl text-sm font-semibold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors focus:outline-none focus:ring-2 focus:ring-electric-cyan"
                    >
                      Save (Demo)
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
