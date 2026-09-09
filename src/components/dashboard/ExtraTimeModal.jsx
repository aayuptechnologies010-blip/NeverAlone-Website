import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, CheckCircle2 } from 'lucide-react';

// Modal for adding extra conversation time (demo only – no payment processed).
export default function ExtraTimeModal({ isOpen, onClose, price = 199, duration = 60 }) {
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => setConfirmed(true);

  const handleClose = () => {
    setConfirmed(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full max-w-sm bg-brand-950 border border-white/10 rounded-2xl p-6 relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              {!confirmed ? (
                <>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-electric-cyan" />
                    <h2 className="text-lg font-semibold text-white">
                      Add Extra Conversation Time
                    </h2>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-center mb-6">
                    <p className="text-3xl font-semibold text-white mb-1">
                      +{duration} Minutes
                    </p>
                    <p className="text-lg text-romantic-pink font-semibold">
                      ₹{price}
                    </p>
                  </div>

                  <button
                    onClick={handleConfirm}
                    className="w-full py-3 rounded-full text-sm font-medium text-white bg-gradient-to-r from-romantic-DEFAULT to-dream-DEFAULT hover:shadow-[0_0_15px_rgba(219,39,119,0.4)] transition-all"
                  >
                    Continue
                  </button>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Time Added!
                  </h3>
                  <p className="text-sm text-gray-400 mb-6">
                    {duration} extra minutes have been added to your account.
                  </p>
                  <button
                    onClick={handleClose}
                    className="px-6 py-2.5 rounded-full text-sm font-medium text-gray-300 border border-white/10 hover:bg-white/5 transition-colors"
                  >
                    Done
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
