import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Flag } from 'lucide-react';

// Screen shown after a call has ended – summary + CTAs.
export default function CallEndedScreen({
  booking,
  elapsedMinutes,
  onLeaveFeedback,
  onReport,
}) {
  const { companion, category } = booking;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 relative">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col items-center max-w-md w-full"
      >
        {/* Success icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6"
        >
          <CheckCircle2 className="w-8 h-8 text-emerald-400" />
        </motion.div>

        <h1 className="text-2xl font-semibold text-white mb-6">
          Conversation ended
        </h1>

        {/* Companion summary */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={companion.image}
            alt={companion.name}
            className="w-14 h-14 rounded-full object-cover border border-white/10"
          />
          <div>
            <p className="text-base font-semibold text-white">{companion.name}</p>
            <p className="text-xs text-gray-400">{category}</p>
          </div>
        </div>

        {/* Duration */}
        <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-center mb-6 w-full">
          <p className="text-[11px] uppercase tracking-wider text-gray-500 mb-1">
            Duration
          </p>
          <p className="text-2xl font-semibold text-white">
            {elapsedMinutes} Minutes
          </p>
        </div>

        {/* Emotional line */}
        <p className="text-sm text-gray-400 mb-10">
          Thanks for taking a little time to talk. 💗
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-3 w-full">
          <button
            onClick={onLeaveFeedback}
            className="w-full py-3.5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-romantic-DEFAULT to-dream-DEFAULT hover:shadow-[0_0_20px_rgba(219,39,119,0.4)] transition-all"
          >
            Leave Feedback
          </button>
          <Link
            to="/categories"
            className="w-full py-3.5 rounded-full text-sm font-medium text-gray-300 border border-white/10 hover:bg-white/5 transition-colors text-center"
          >
            Talk Again
          </Link>
          <Link
            to="/dashboard"
            className="w-full py-3.5 rounded-full text-sm font-medium text-gray-400 hover:text-white transition-colors text-center"
          >
            Go To Dashboard
          </Link>
        </div>

        {/* Report access */}
        <button
          onClick={onReport}
          className="flex items-center gap-1.5 mt-8 text-xs text-gray-500 hover:text-gray-300 transition-colors"
        >
          <Flag className="w-3 h-3" />
          Something didn't feel right?
        </button>
      </motion.div>
    </div>
  );
}
