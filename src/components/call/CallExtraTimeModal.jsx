import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Phone, VideoOff, Info } from 'lucide-react';

// Modal for adding extra time during an active call.
// Frontend demo only – shows a placeholder state instead of processing payment.
export default function CallExtraTimeModal({
  isOpen,
  onClose,
  companionName,
  price = 199,
  duration = 60,
}) {
  const [submitted, setSubmitted] = useState(false);

  const handleContinue = () => setSubmitted(true);

  const handleClose = () => {
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
              className="w-full sm:max-w-sm bg-brand-950 border border-white/10 rounded-t-2xl sm:rounded-2xl p-6 relative"
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
                  <div className="flex items-center gap-2 mb-5">
                    <Clock className="w-5 h-5 text-electric-cyan" />
                    <h2 className="text-lg font-semibold text-white">
                      Keep the conversation going?
                    </h2>
                  </div>

                  <div className="space-y-3 text-sm mb-5">
                    <div className="flex justify-between text-gray-300">
                      <span className="text-gray-400">Additional Time</span>
                      <span className="text-white font-medium">{duration} Minutes</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span className="text-gray-400">Price</span>
                      <span className="text-romantic-pink font-semibold">₹{price}</span>
                    </div>
                    {companionName && (
                      <div className="flex justify-between text-gray-300">
                        <span className="text-gray-400">Current Companion</span>
                        <span className="text-white font-medium">{companionName}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-[11px] text-gray-500 mb-4 flex items-start gap-1.5">
                    <Info className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    Continuing with the current companion is subject to availability.
                  </p>

                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-6">
                    <span className="flex items-center gap-1">
                      <Phone className="w-3 h-3" /> Private Phone Call
                    </span>
                    <span className="flex items-center gap-1">
                      <VideoOff className="w-3 h-3" /> No Video
                    </span>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button
                      onClick={handleContinue}
                      className="w-full py-3 rounded-full text-sm font-medium text-white bg-gradient-to-r from-romantic-DEFAULT to-dream-DEFAULT hover:shadow-[0_0_15px_rgba(219,39,119,0.4)] transition-all"
                    >
                      Continue — ₹{price}
                    </button>
                    <button
                      onClick={handleClose}
                      className="w-full py-3 rounded-full text-sm font-medium text-gray-400 border border-white/10 hover:bg-white/5 transition-colors"
                    >
                      Not Now
                    </button>
                  </div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                    <Info className="w-6 h-6 text-electric-cyan" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Payment integration will be connected here.
                  </h3>
                  <p className="text-sm text-gray-400 mb-6">
                    This is a frontend demonstration. No payment has been processed.
                  </p>
                  <button
                    onClick={handleClose}
                    className="px-6 py-2.5 rounded-full text-sm font-medium text-gray-300 border border-white/10 hover:bg-white/5 transition-colors"
                  >
                    Return to Call
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
