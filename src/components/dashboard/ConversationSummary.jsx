import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, CheckCircle2, XCircle } from 'lucide-react';

const items = [
  { key: 'upcoming', label: 'Upcoming', icon: CalendarCheck, color: 'text-electric-cyan' },
  { key: 'completed', label: 'Completed', icon: CheckCircle2, color: 'text-emerald-400' },
  { key: 'cancelled', label: 'Cancelled', icon: XCircle, color: 'text-gray-400' },
];

// Summary stat cards showing conversation counts.
export default function ConversationSummary({ counts }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h3 className="text-sm font-semibold text-gray-300 mb-4">Conversations</h3>
      <div className="grid grid-cols-3 gap-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.key}
              className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
            >
              <Icon className={`w-5 h-5 mx-auto mb-2 ${item.color}`} />
              <p className="text-2xl font-semibold text-white">{counts[item.key]}</p>
              <p className="text-[11px] text-gray-400 mt-1">{item.label}</p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
