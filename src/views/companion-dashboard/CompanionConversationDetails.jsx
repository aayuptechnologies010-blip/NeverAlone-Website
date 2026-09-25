import React, { useMemo } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Phone,
  ShieldCheck,
  VideoOff,
  CameraOff,
} from 'lucide-react';
import { getConversationById } from '../../data/companionDashboardData';
import CompanionStatusBadge from '../../components/companion-dashboard/CompanionStatusBadge';

export default function CompanionConversationDetails() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const showCallView = searchParams.get('view') === 'call';

  const conversation = useMemo(() => getConversationById(id), [id]);

  if (!conversation) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400">Conversation not found.</p>
        <Link
          to="/companion/conversations"
          className="text-sm text-electric-cyan mt-4 inline-block hover:text-white transition-colors"
        >
          Back to Conversations
        </Link>
      </div>
    );
  }

  const { customer, category, date, time, duration, status, feedbackStatus } = conversation;

  return (
    <>
      <Link
        to="/companion/conversations"
        className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white mb-6 transition-colors focus:outline-none focus:ring-2 focus:ring-electric-cyan rounded-lg"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Conversations
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-2xl font-bold text-white mb-8">Conversation Details</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-2xl font-bold text-electric-cyan flex-shrink-0">
                  {customer[0]}
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Customer</p>
                  <h2 className="text-xl font-bold text-white mb-1">{customer}</h2>
                  <p className="text-sm text-gray-400">{category}</p>
                  <div className="mt-3">
                    <CompanionStatusBadge status={status} />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
                Conversation Info
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InfoRow icon={Calendar} label="Date" value={date} />
                <InfoRow icon={Clock} label="Time" value={time} />
                <InfoRow icon={Clock} label="Duration" value={duration} />
                <InfoRow icon={Phone} label="Call Type" value="Phone Call Only" />
              </div>
            </div>

            {status === 'completed' && feedbackStatus && (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-2">
                  Feedback Status
                </h3>
                <p className="text-sm text-gray-400">
                  Customer feedback: {feedbackStatus}
                  {feedbackStatus === 'Submitted' && ' — summary only, no private comments shown.'}
                </p>
              </div>
            )}

            {showCallView && status === 'upcoming' && (
              <div className="rounded-2xl border border-electric-cyan/20 bg-electric-cyan/5 p-6">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
                  Call Details (Demo)
                </h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-electric-cyan" />
                    Phone call — platform will connect when backend is ready
                  </p>
                  <p className="flex items-center gap-2">
                    <VideoOff className="w-4 h-4 text-gray-500" />
                    Video not available
                  </p>
                  <p className="flex items-center gap-2">
                    <CameraOff className="w-4 h-4 text-gray-500" />
                    No customer contact details shared
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  Actual calling is not implemented. This prepares the companion call flow architecture.
                </p>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-electric-cyan/20 bg-electric-cyan/5 p-6">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-electric-cyan" />
                <h3 className="text-sm font-bold text-white">Safety Reminders</h3>
              </div>
              <ul className="space-y-2 text-xs text-gray-400">
                <li>• Respect customer privacy — no personal info requests</li>
                <li>• You can set boundaries at any time</li>
                <li>• End or report if the conversation crosses limits</li>
                <li>• Regular companions are not therapists</li>
              </ul>
              <Link
                to="/companion/safety"
                className="text-xs text-electric-cyan hover:text-white font-semibold mt-4 inline-block"
              >
                Safety & Support →
              </Link>
            </div>

            {status === 'upcoming' && (
              <Link
                to={`/companion/conversations/${id}?view=call`}
                className="block w-full px-6 py-3 rounded-xl text-sm font-bold text-center text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors"
              >
                View Call Screen
              </Link>
            )}

            {status === 'cancelled' && (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <p className="text-sm text-gray-400">This conversation was cancelled.</p>
                <p className="text-xs text-gray-600 mt-2">
                  Cancellation policies are not yet configured.
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
}

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="w-4 h-4 text-gray-500 flex-shrink-0" />
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm text-white font-medium">{value}</p>
      </div>
    </div>
  );
}
