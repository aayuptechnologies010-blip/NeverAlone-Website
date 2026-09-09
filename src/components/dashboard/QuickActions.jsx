import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  Calendar,
  RefreshCw,
  Clock,
  ShieldCheck,
  HelpCircle,
} from 'lucide-react';

const actions = [
  { label: 'Find Someone', icon: Search, to: '/categories' },
  { label: 'Book Conversation', icon: Calendar, to: '/categories' },
  { label: 'Reschedule', icon: RefreshCw, to: '/dashboard/conversations' },
  { label: 'Conversation History', icon: Clock, to: '/dashboard/conversations' },
  { label: 'Safety Center', icon: ShieldCheck, to: '/safety' },
  { label: 'Support', icon: HelpCircle, to: '/dashboard/support' },
];

export default function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <h3 className="text-sm font-semibold text-gray-300 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.label}
              to={action.to}
              className="flex flex-col items-center gap-2 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-center group"
            >
              <Icon className="w-5 h-5 text-gray-400 group-hover:text-romantic-pink transition-colors" />
              <span className="text-[11px] text-gray-400 group-hover:text-white leading-tight transition-colors">
                {action.label}
              </span>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}
