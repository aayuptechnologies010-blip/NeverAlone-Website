import React from 'react';

const styles = {
  upcoming: 'text-electric-cyan bg-electric-cyan/10 border-electric-cyan/20',
  completed: 'text-green-400 bg-green-500/10 border-green-500/20',
  cancelled: 'text-gray-500 bg-white/5 border-white/10',
  confirmed: 'text-green-400 bg-green-500/10 border-green-500/20',
  pending: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
};

export default function CompanionStatusBadge({ status, label }) {
  const key = status?.toLowerCase().replace(/\s+/g, '-');
  const className = styles[key] || styles.pending;

  return (
    <span className={`text-xs font-semibold uppercase px-2 py-0.5 rounded-full border ${className}`}>
      {label || status}
    </span>
  );
}
