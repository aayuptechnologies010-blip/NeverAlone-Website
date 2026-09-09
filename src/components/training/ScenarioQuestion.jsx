import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

/**
 * Reusable knowledge-check / scenario-question component.
 * 
 * Props:
 *   question    – the scenario prompt string
 *   options     – [ { id, text } ]
 *   correctId   – id of correct option
 *   explanation – shown after correct answer
 *   onComplete  – called when user gets correct answer
 *   savedAnswer – previously selected answer id (for revisiting)
 */
export default function ScenarioQuestion({ question, options, correctId, explanation, onComplete, savedAnswer }) {
  const [selected, setSelected] = useState(savedAnswer || null);
  const [submitted, setSubmitted] = useState(!!savedAnswer);
  const [isCorrect, setIsCorrect] = useState(savedAnswer === correctId);

  const handleSubmit = () => {
    if (!selected) return;
    setSubmitted(true);
    const correct = selected === correctId;
    setIsCorrect(correct);
    if (correct && onComplete) onComplete();
  };

  const handleRetry = () => {
    setSelected(null);
    setSubmitted(false);
    setIsCorrect(false);
  };

  return (
    <div className="bg-brand-900 border border-white/10 rounded-2xl p-6 md:p-8">
      <p className="text-xs font-semibold text-electric-cyan uppercase tracking-widest mb-4">Knowledge Check</p>
      <p className="text-white font-medium mb-6 leading-relaxed">{question}</p>

      <div className="space-y-3 mb-6">
        {options.map(opt => {
          let borderColor = 'border-white/10';
          let bgColor = 'bg-white/5';
          let textColor = 'text-gray-300';

          if (submitted && opt.id === correctId) {
            borderColor = 'border-green-500/50';
            bgColor = 'bg-green-500/10';
            textColor = 'text-green-300';
          } else if (submitted && opt.id === selected && !isCorrect) {
            borderColor = 'border-red-500/50';
            bgColor = 'bg-red-500/10';
            textColor = 'text-red-300';
          } else if (!submitted && opt.id === selected) {
            borderColor = 'border-electric-cyan/50';
            bgColor = 'bg-electric-cyan/10';
            textColor = 'text-electric-cyan';
          }

          return (
            <button
              key={opt.id}
              type="button"
              disabled={submitted}
              onClick={() => setSelected(opt.id)}
              className={`w-full text-left p-4 rounded-xl border transition-all ${borderColor} ${bgColor} ${textColor} ${
                submitted ? 'cursor-default' : 'hover:border-white/30 cursor-pointer'
              }`}
            >
              <span className="text-sm font-medium">{opt.text}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {isCorrect ? (
              <div className="flex items-start gap-3 bg-green-500/10 border border-green-500/20 rounded-xl p-4 mb-4">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-green-300 mb-1">Correct ✓</p>
                  <p className="text-sm text-gray-300 leading-relaxed">{explanation}</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-red-300">Try Again</p>
                    <p className="text-xs text-gray-400 mt-1">Review the options and try once more.</p>
                  </div>
                </div>
                <button
                  onClick={handleRetry}
                  className="self-start px-5 py-2 rounded-full text-sm font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  Retry
                </button>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div key="submit">
            <button
              onClick={handleSubmit}
              disabled={!selected}
              className="px-6 py-3 rounded-xl text-sm font-semibold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Check Answer
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
