import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, MessageSquare } from 'lucide-react';

const questions = [
  { key: 'listened', label: 'Did they listen well?' },
  { key: 'comfortable', label: 'Did you feel comfortable?' },
  { key: 'helpful', label: 'Was the conversation helpful?' },
  { key: 'again', label: 'Would you talk to them again?' },
];

const options = ['Yes', 'Somewhat', 'No'];

export default function FeedbackModal({ isOpen, onClose, companionName }) {
  const [answers, setAnswers] = useState({});
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const setAnswer = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    // Demo only — data is not sent anywhere.
  };

  const handleClose = () => {
    setAnswers({});
    setComment('');
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
            <div className="w-full sm:max-w-md bg-brand-950 border border-white/10 rounded-t-2xl sm:rounded-2xl p-6 relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              {!submitted ? (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-5 h-5 text-romantic-pink" />
                    <h2 className="text-lg font-semibold text-white">
                      Tell us how the conversation felt.
                    </h2>
                  </div>
                  {companionName && (
                    <p className="text-xs text-gray-400 mb-6">
                      Your feedback about {companionName} stays private.
                    </p>
                  )}

                  <div className="space-y-5 mb-6">
                    {questions.map((q) => (
                      <div key={q.key}>
                        <p className="text-sm text-gray-300 mb-2">{q.label}</p>
                        <div className="flex gap-2">
                          {options.map((opt) => (
                            <button
                              key={opt}
                              onClick={() => setAnswer(q.key, opt)}
                              className={`flex-1 py-2 rounded-xl text-xs font-medium border transition-all ${
                                answers[q.key] === opt
                                  ? 'bg-gradient-to-r from-romantic-DEFAULT/20 to-dream-purple/20 border-romantic-DEFAULT/40 text-white'
                                  : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Optional comment */}
                  <div className="mb-6">
                    <label className="text-sm text-gray-300 mb-2 block">
                      Anything you'd like us to know?{' '}
                      <span className="text-gray-500">(optional)</span>
                    </label>
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      rows={3}
                      placeholder="Share your thoughts…"
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-romantic-DEFAULT/40 resize-none"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full py-3 rounded-full text-sm font-medium text-white bg-gradient-to-r from-romantic-DEFAULT to-dream-DEFAULT hover:shadow-[0_0_15px_rgba(219,39,119,0.4)] transition-all"
                  >
                    Submit Feedback
                  </button>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Thank you for your feedback!
                  </h3>
                  <p className="text-sm text-gray-400 mb-6">
                    Your feedback helps us make conversations better for everyone.
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
