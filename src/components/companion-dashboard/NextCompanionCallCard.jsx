import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import CompanionStatusBadge from './CompanionStatusBadge';

function parseTimeToMinutes(timeStr) {
  const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return null;
  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const ampm = match[3].toUpperCase();
  if (ampm === 'PM' && hours !== 12) hours += 12;
  if (ampm === 'AM' && hours === 12) hours = 0;
  return hours * 60 + minutes;
}

function getCountdown(timeStr, dateStr) {
  if (dateStr !== 'Today') return null;
  const targetMinutes = parseTimeToMinutes(timeStr);
  if (targetMinutes === null) return null;

  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const diff = targetMinutes - nowMinutes;

  if (diff <= 0) return 'Starting soon';
  if (diff < 60) return `Starts in ${diff} min`;
  const hours = Math.floor(diff / 60);
  const mins = diff % 60;
  return mins > 0 ? `Starts in ${hours}h ${mins}m` : `Starts in ${hours}h`;
}

export default function NextCompanionCallCard({ conversation }) {
  const countdown = useMemo(
    () => getCountdown(conversation.time, conversation.date),
    [conversation.time, conversation.date]
  );

  return (
    <div className="bg-gradient-to-br from-electric-cyan/10 to-brand-900 border border-electric-cyan/20 rounded-3xl p-6 md:p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-electric-cyan/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="relative z-10">
        <p className="text-xs font-semibold text-electric-cyan uppercase tracking-widest mb-4">
          Next Conversation
        </p>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-lg font-semibold text-electric-cyan">
                {conversation.customer[0]}
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Customer</p>
                <h3 className="text-xl font-semibold text-white">{conversation.customer}</h3>
                <span className="text-sm text-gray-400">{conversation.category}</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="text-white font-medium">
                {conversation.date} • {conversation.time}
              </span>
              <span className="text-gray-400">{conversation.duration}</span>
              <CompanionStatusBadge status="confirmed" label="Confirmed" />
              {countdown && (
                <span className="text-electric-cyan font-semibold">{countdown}</span>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to={`/companion/conversations/${conversation.id}`}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors focus:outline-none focus:ring-2 focus:ring-electric-cyan"
            >
              View Details
            </Link>
            <Link
              to={`/companion/conversations/${conversation.id}?view=call`}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <Phone className="w-4 h-4" />
              Call Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
