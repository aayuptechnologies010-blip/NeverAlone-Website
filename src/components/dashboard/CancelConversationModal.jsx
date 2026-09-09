import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle, CheckCircle2 } from 'lucide-react';

// Confirmation modal for cancelling a conversation (demo only).
export default function CancelConversationModal({
  isOpen,
  onClose,
  companionName,
  onConfirm,
}) {
  const [cancelled, setCancelled] = useState(false);

  const handleCancel = () => {
    setCancelled(true);
    if (onConfirm) onConfirm();
  };

  const handleClose = () => {
    setCancelled(false);
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
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
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
            <div className="w-full sm:max-w-sm bg-brand-950 border border-white/10 rounded-t-2xl sm:rounded-2xl p-6 relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              {!cancelled ? (
                <>
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="w-5 h-5 text-amber-400" />
                    <h2 className="text-lg font-semibold text-white">
                      Cancel this conversation?
                    </h2>
                  </div>

                  <p className="text-sm text-gray-400 mb-8">
                    Are you sure you want to cancel your conversation
                    {companionName ? ` with ${companionName}` : ''}?
                  </p>

                  <div className="flex flex-col gap-3">
                    <button
                      onClick={handleClose}
                      className="w-full py-3 rounded-full text-sm font-medium text-white bg-gradient-to-r from-romantic-DEFAULT to-dream-DEFAULT hover:shadow-[0_0_15px_rgba(219,39,119,0.4)] transition-all"
                    >
                      Keep Conversation
                    </button>
                    <button
                      onClick={handleCancel}
                      className="w-full py-3 rounded-full text-sm font-medium text-gray-400 border border-white/10 hover:bg-white/5 hover:text-white transition-colors"
                    >
                      Cancel Conversation
                    </button>
                  </div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <CheckCircle2 className="w-14 h-14 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Conversation cancelled.
                  </h3>
                  <p className="text-sm text-gray-400 mb-6">
                    Your conversation{companionName ? ` with ${companionName}` : ''} has
                    been cancelled.
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
