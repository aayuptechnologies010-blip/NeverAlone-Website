import React from 'react';

// Reusable skeleton placeholder for loading states.
// Renders a glass-card shaped skeleton with animated shimmer.
export default function SkeletonCard({ className = '', lines = 3 }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 p-6 animate-pulse ${className}`}
    >
      {/* Avatar / image placeholder */}
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-12 rounded-full bg-white/10" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-3/5 rounded bg-white/10" />
          <div className="h-3 w-2/5 rounded bg-white/10" />
        </div>
      </div>

      {/* Text lines */}
      <div className="space-y-3">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="h-3 rounded bg-white/10"
            style={{ width: `${80 - i * 15}%` }}
          />
        ))}
      </div>
    </div>
  );
}
