import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ban, X } from 'lucide-react';

export default function SafetyBlocking() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="blocking" className="py-16 bg-brand-950 relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-3xl font-semibold text-white mb-6">
          You decide who can reach you.
        </h2>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Blocking should prevent further matching or contact with that profile where platform rules and backend implementation support it.
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-red-500/50 hover:text-red-400 transition-all"
        >
          <Ban className="w-5 h-5" />
          Demo: Block Companion
        </button>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div
                className="w-full max-w-sm bg-brand-950 border border-red-500/30 rounded-3xl p-8 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-6">
                  <Ban className="w-8 h-8 text-red-400" />
                </div>
                
                <h3 className="text-xl font-semibold text-white text-center mb-4">
                  Block this person?
                </h3>
                
                <p className="text-sm text-gray-400 text-center mb-8">
                  You won't be matched with this profile again once blocking is enabled.
                </p>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-red-500/80 hover:bg-red-500 transition-colors shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                  >
                    Block
                  </button>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-full py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
