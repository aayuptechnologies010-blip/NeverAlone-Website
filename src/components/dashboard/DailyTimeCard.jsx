import React from 'react';
import { motion } from 'framer-motion';

// Circular / arc progress card showing daily conversation time usage.
export default function DailyTimeCard({ totalMinutes, usedMinutes }) {
  const remaining = Math.max(0, totalMinutes - usedMinutes);
  const fraction = usedMinutes / totalMinutes;
  const circumference = 2 * Math.PI * 54; // radius = 54
  const offset = circumference * (1 - fraction);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6"
    >
      <h3 className="text-sm font-semibold text-gray-300 mb-5">
        Today's Conversation Time
      </h3>

      <div className="flex items-center gap-6">
        {/* Circular progress */}
        <div className="relative flex-shrink-0">
          <svg width="120" height="120" className="-rotate-90">
            {/* Track */}
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="8"
            />
            {/* Progress arc */}
            <motion.circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="url(#timeGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            />
            <defs>
              <linearGradient id="timeGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#db2777" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-semibold text-white">{remaining}</span>
            <span className="text-[10px] text-gray-400 uppercase tracking-wide">
              min left
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-3 text-sm">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-gray-500">
              Daily Limit
            </p>
            <p className="text-white font-medium">{totalMinutes} Minutes</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-gray-500">
              Used Today
            </p>
            <p className="text-white font-medium">{usedMinutes} min</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-gray-500">
              Remaining
            </p>
            <p className="text-white font-medium">{remaining} min</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
