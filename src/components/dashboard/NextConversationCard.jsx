import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, Clock, ArrowRight } from 'lucide-react';

// The most prominent card on the dashboard – shows the next booked conversation.
export default function NextConversationCard({ conversation }) {
  // No upcoming conversation state
  if (!conversation) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8"
      >
        <h2 className="text-lg font-semibold text-white mb-3">
          No conversations booked yet.
        </h2>
        <p className="text-sm text-gray-400 mb-6 max-w-md">
          Whenever you feel like talking, someone is just a few steps away.
        </p>
        <Link
          to="/categories"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white bg-gradient-to-r from-romantic-DEFAULT to-dream-DEFAULT hover:shadow-[0_0_20px_rgba(219,39,119,0.4)] transition-all duration-300"
        >
          Find Someone To Talk To
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    );
  }

  const { companion, category, displayDate, displayTime, duration, status } =
    conversation;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.03] backdrop-blur-md p-6 md:p-8 relative overflow-hidden"
    >
      {/* Subtle gradient glow */}
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-romantic-DEFAULT/10 rounded-full blur-[80px] pointer-events-none" />

      <h2 className="text-base font-semibold text-gray-300 mb-5 relative">
        Your Next Conversation
      </h2>

      <div className="flex flex-col sm:flex-row gap-6 relative">
        {/* Companion image */}
        <img
          src={companion.image}
          alt={companion.name}
          className="w-20 h-20 rounded-2xl object-cover border border-white/10 flex-shrink-0"
        />

        <div className="flex-1 min-w-0">
          {/* Name + verified */}
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-xl font-semibold text-white">{companion.name}</h3>
            {companion.verified && (
              <CheckCircle2 className="w-4 h-4 text-electric-cyan" />
            )}
          </div>
          <p className="text-sm text-gray-400 mb-4">Verified Companion</p>

          {/* Details grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
            <DetailItem label="Category" value={category} />
            <DetailItem label="Date" value={displayDate} icon={Calendar} />
            <DetailItem label="Time" value={displayTime} icon={Clock} />
            <DetailItem label="Duration" value={`${duration} Minutes`} />
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {status}
            </span>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to={`/call/${conversation.id}`}
              className="px-6 py-2.5 rounded-full text-sm font-bold text-brand-950 bg-white hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all transform hover:scale-105"
            >
              📞 Join Call Room
            </Link>
            <Link
              to={`/dashboard/conversations/${conversation.id}`}
              className="px-5 py-2.5 rounded-full text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all"
            >
              View Details
            </Link>
            <Link
              to={`/dashboard/conversations/${conversation.id}?action=reschedule`}
              className="px-5 py-2.5 rounded-full text-sm font-medium text-gray-400 hover:text-white border border-white/10 hover:bg-white/5 transition-colors"
            >
              Reschedule
            </Link>
          </div>
        </div>
      </div>

      {/* Soft emotional line */}
      <p className="text-xs text-gray-500 mt-6 relative">
        Someone will be there when it's time. 💗
      </p>
    </motion.div>
  );
}

function DetailItem({ label, value, icon: Icon }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-wider text-gray-500 mb-1">
        {label}
      </p>
      <p className="text-sm text-white flex items-center gap-1.5">
        {Icon && <Icon className="w-3.5 h-3.5 text-gray-400" />}
        {value}
      </p>
    </div>
  );
}
