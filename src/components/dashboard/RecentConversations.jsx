import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

// Shows the 3 most recent conversations on the dashboard overview.
export default function RecentConversations({ conversations }) {
  if (!conversations || conversations.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.35 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-300">
          Recent Conversations
        </h3>
        <Link
          to="/dashboard/conversations"
          className="text-xs text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
        >
          View All <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="space-y-3">
        {conversations.map((conv) => (
          <div
            key={conv.id}
            className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors"
          >
            {/* Avatar */}
            <img
              src={conv.companion.image}
              alt={conv.companion.name}
              className="w-10 h-10 rounded-full object-cover border border-white/10 flex-shrink-0"
            />

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <p className="text-sm font-medium text-white truncate">
                  {conv.companion.name}
                </p>
                {conv.companion.verified && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-electric-cyan flex-shrink-0" />
                )}
              </div>
              <p className="text-xs text-gray-400 truncate">
                {conv.category} · {conv.displayDate} · {conv.duration} min
              </p>
            </div>

            {/* Status */}
            <span className="hidden sm:inline-flex text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 flex-shrink-0">
              {conv.status}
            </span>

            {/* Actions */}
            <div className="flex gap-2 flex-shrink-0">
              <Link
                to={`/dashboard/conversations/${conv.id}`}
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                View
              </Link>
              {conv.status === 'Completed' && (
                <Link
                  to="/categories"
                  className="text-xs text-romantic-pink hover:text-romantic-DEFAULT transition-colors"
                >
                  Talk Again
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
