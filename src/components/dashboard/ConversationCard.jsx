import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Calendar, Clock } from 'lucide-react';

// Renders a single conversation list item with status-specific actions.
export default function ConversationCard({
  conversation,
  onReschedule,
  onCancel,
  onFeedback,
}) {
  const { id, companion, category, displayDate, displayTime, duration, status, feedbackSubmitted } =
    conversation;

  const statusStyles = {
    Confirmed:
      'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    Completed:
      'bg-electric-cyan/10 border-electric-cyan/20 text-electric-cyan',
    Cancelled:
      'bg-white/5 border-white/10 text-gray-400',
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors">
      {/* Avatar */}
      <img
        src={companion.image}
        alt={companion.name}
        className="w-12 h-12 rounded-full object-cover border border-white/10 flex-shrink-0"
      />

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 mb-0.5">
          <p className="text-sm font-medium text-white truncate">{companion.name}</p>
          {companion.verified && (
            <CheckCircle2 className="w-3.5 h-3.5 text-electric-cyan flex-shrink-0" />
          )}
        </div>
        <p className="text-xs text-gray-400 flex items-center gap-2 flex-wrap">
          <span>{category}</span>
          <span className="text-gray-600">·</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {displayDate}
          </span>
          {displayTime && (
            <>
              <span className="text-gray-600">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {displayTime}
              </span>
            </>
          )}
          <span className="text-gray-600">·</span>
          <span>{duration} min</span>
        </p>
      </div>

      {/* Status badge */}
      <span
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium border flex-shrink-0 ${statusStyles[status] || statusStyles.Cancelled}`}
      >
        {status === 'Confirmed' && (
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        )}
        {status}
      </span>

      {/* Actions */}
      <div className="flex flex-wrap gap-2 flex-shrink-0">
        <Link
          to={`/dashboard/conversations/${id}`}
          className="px-3 py-1.5 rounded-full text-xs font-medium text-gray-300 border border-white/10 hover:bg-white/5 transition-colors"
        >
          View Details
        </Link>

        {status === 'Confirmed' && (
          <>
            <button
              onClick={() => onReschedule && onReschedule(conversation)}
              className="px-3 py-1.5 rounded-full text-xs font-medium text-gray-300 border border-white/10 hover:bg-white/5 transition-colors"
            >
              Reschedule
            </button>
            <button
              onClick={() => onCancel && onCancel(conversation)}
              className="px-3 py-1.5 rounded-full text-xs font-medium text-gray-400 hover:text-red-400 border border-white/10 hover:border-red-400/30 transition-colors"
            >
              Cancel
            </button>
          </>
        )}

        {status === 'Completed' && (
          <>
            <Link
              to="/categories"
              className="px-3 py-1.5 rounded-full text-xs font-medium text-romantic-pink border border-romantic-DEFAULT/20 hover:bg-romantic-DEFAULT/10 transition-colors"
            >
              Talk Again
            </Link>
            {!feedbackSubmitted && (
              <button
                onClick={() => onFeedback && onFeedback(conversation)}
                className="px-3 py-1.5 rounded-full text-xs font-medium text-gray-300 border border-white/10 hover:bg-white/5 transition-colors"
              >
                Leave Feedback
              </button>
            )}
          </>
        )}

        {status === 'Cancelled' && (
          <Link
            to="/categories"
            className="px-3 py-1.5 rounded-full text-xs font-medium text-romantic-pink border border-romantic-DEFAULT/20 hover:bg-romantic-DEFAULT/10 transition-colors"
          >
            Book Again
          </Link>
        )}
      </div>
    </div>
  );
}
