import React from 'react';
import { motion } from 'framer-motion';

// Active call timer with progress ring.
// Shows elapsed time out of total duration.
export default function CallTimer({ elapsedSeconds, totalMinutes }) {
  const totalSeconds = totalMinutes * 60;
  const fraction = Math.min(elapsedSeconds / totalSeconds, 1);
  const circumference = 2 * Math.PI * 46;
  const offset = circumference * (1 - fraction);

  const elapsed = formatTime(elapsedSeconds);
  const total = formatTime(totalSeconds);

  return (
    <div className="flex flex-col items-center">
      {/* Progress ring */}
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-3">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          {/* Track */}
          <circle
            cx="50" cy="50" r="46"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="4"
          />
          {/* Progress */}
          <motion.circle
            cx="50" cy="50" r="46"
            fill="none"
            stroke="url(#callTimerGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
          <defs>
            <linearGradient id="callTimerGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#db2777" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
          </defs>
        </svg>
        {/* Time text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl sm:text-3xl font-semibold text-white font-mono tracking-wider">
            {elapsed}
          </span>
        </div>
      </div>

      <p className="text-xs text-gray-500">
        of {total} minutes
      </p>
    </div>
  );
}

function formatTime(totalSec) {
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}
