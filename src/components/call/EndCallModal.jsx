import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// End call confirmation modal.
// Does NOT end immediately – requires explicit user confirmation.
export default function EndCallModal({ isOpen, onClose, onEndCall }) {
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
            onClick={onClose}
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
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-lg font-semibold text-white mb-2">
                End this conversation?
              </h2>
              <p className="text-sm text-gray-400 mb-8">
                You can end the conversation whenever you want.
              </p>

              <div className="flex flex-col gap-3">
                <button
                  onClick={onClose}
                  className="w-full py-3 rounded-full text-sm font-medium text-white bg-gradient-to-r from-romantic-DEFAULT to-dream-DEFAULT hover:shadow-[0_0_15px_rgba(219,39,119,0.4)] transition-all"
                >
                  Keep Talking
                </button>
                <button
                  onClick={onEndCall}
                  className="w-full py-3 rounded-full text-sm font-medium text-gray-400 border border-white/10 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/20 transition-colors"
                >
                  End Conversation
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
