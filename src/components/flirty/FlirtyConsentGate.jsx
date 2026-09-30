import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FlirtyConsentGate({ onConsent }) {
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [rulesConfirmed, setRulesConfirmed] = useState(false);

  const canEnter = ageConfirmed && rulesConfirmed;

  return (
    <AnimatePresence>
      <motion.div
        key="flirty-consent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-brand-950 p-4 overflow-y-auto"
      >
        <div className="max-w-xl w-full mx-auto flex flex-col items-center">
          {/* Logo & Badge */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-romantic-DEFAULT to-dream-purple flex items-center justify-center shadow-[0_0_15px_rgba(219,39,119,0.4)]">
                <span className="text-white font-semibold text-sm">NA</span>
              </div>
              <span className="text-lg font-semibold text-white">Neuravia</span>
            </div>
            <div className="px-4 py-1.5 rounded-full border border-romantic-DEFAULT/30 bg-romantic-DEFAULT/10 text-romantic-pink text-xs font-semibold tracking-wide uppercase">
              Flirty Mode • 18+
            </div>
          </div>

          <div className="w-full bg-brand-950/80 border border-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
            {/* Subtle background glow inside card */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-romantic-DEFAULT/10 rounded-full blur-[60px]" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-dream-purple/10 rounded-full blur-[60px]" />
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3 text-center">
                Before we get playful...
              </h2>
              <p className="text-sm text-gray-400 mb-8 text-center max-w-md mx-auto">
                Flirty Mode is for adults who want light, consensual and non-explicit conversations.
              </p>

              {/* Rules Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  '18+ Only',
                  'Mutual Consent',
                  'Non-Explicit',
                  'Phone Calls Only'
                ].map((rule) => (
                  <div key={rule} className="flex items-center gap-2 bg-white/5 border border-white/5 rounded-xl p-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-romantic-pink" />
                    <span className="text-sm font-medium text-gray-300">{rule}</span>
                  </div>
                ))}
              </div>

              {/* Checkboxes */}
              <div className="space-y-4 mb-8">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-start pt-0.5">
                    <input
                      type="checkbox"
                      checked={ageConfirmed}
                      onChange={(e) => setAgeConfirmed(e.target.checked)}
                      className="peer sr-only"
                    />
                    <div className="w-5 h-5 rounded border border-white/20 bg-white/5 peer-checked:bg-romantic-DEFAULT peer-checked:border-romantic-DEFAULT transition-all flex items-center justify-center">
                      <svg
                        className={`w-3.5 h-3.5 text-white transition-opacity ${ageConfirmed ? 'opacity-100' : 'opacity-0'}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors select-none leading-tight pt-0.5">
                    I confirm that I am 18 years of age or older.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-start pt-0.5">
                    <input
                      type="checkbox"
                      checked={rulesConfirmed}
                      onChange={(e) => setRulesConfirmed(e.target.checked)}
                      className="peer sr-only"
                    />
                    <div className="w-5 h-5 rounded border border-white/20 bg-white/5 peer-checked:bg-romantic-DEFAULT peer-checked:border-romantic-DEFAULT transition-all flex items-center justify-center">
                      <svg
                        className={`w-3.5 h-3.5 text-white transition-opacity ${rulesConfirmed ? 'opacity-100' : 'opacity-0'}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors select-none leading-snug pt-0.5">
                    I understand that Flirty Mode is for consensual, non-explicit conversation and does not include sexual services or physical meetups.
                  </span>
                </label>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => canEnter && onConsent()}
                  disabled={!canEnter}
                  className={`w-full py-4 rounded-xl text-base font-semibold transition-all ${
                    canEnter
                      ? 'text-white bg-gradient-to-r from-romantic-DEFAULT to-dream-purple hover:shadow-[0_0_20px_rgba(219,39,119,0.4)] hover:-translate-y-0.5'
                      : 'text-gray-500 bg-white/5 border border-white/10 cursor-not-allowed'
                  }`}
                >
                  Enter Flirty Mode
                </button>
                <button
                  onClick={() => window.history.back()}
                  className="w-full py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
