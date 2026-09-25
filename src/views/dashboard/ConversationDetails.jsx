import React, { useState, useMemo } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Clock,
  Phone,
  VideoOff,
  CameraOff,
  FileText,
  Heart,
  ShieldCheck,
} from 'lucide-react';
import { allConversations } from '../../data/dashboardDemo';

import RescheduleModal from '../../components/dashboard/RescheduleModal';
import CancelConversationModal from '../../components/dashboard/CancelConversationModal';
import FeedbackModal from '../../components/dashboard/FeedbackModal';

export default function ConversationDetails() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const openAction = searchParams.get('action');

  const conversation = useMemo(
    () => allConversations.find((c) => c.id === id),
    [id]
  );

  const [rescheduleOpen, setRescheduleOpen] = useState(openAction === 'reschedule');
  const [cancelOpen, setCancelOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  if (!conversation) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400">Conversation not found.</p>
        <Link
          to="/dashboard/conversations"
          className="text-sm text-romantic-pink mt-4 inline-block"
        >
          Back to Conversations
        </Link>
      </div>
    );
  }

  const { companion, category, displayDate, displayTime, duration, status, callType } =
    conversation;

  return (
    <>
      {/* Back link */}
      <Link
        to="/dashboard/conversations"
        className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Conversations
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-2xl font-bold text-white mb-8">
          Conversation Details
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-2 space-y-6">
            {/* Companion Card */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <div className="flex items-start gap-4">
                <img
                  src={companion.image}
                  alt={companion.name}
                  className="w-16 h-16 rounded-2xl object-cover border border-white/10 flex-shrink-0"
                />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-lg font-semibold text-white">
                      {companion.name}
                    </h2>
                    {companion.verified && (
                      <CheckCircle2 className="w-4 h-4 text-electric-cyan" />
                    )}
                  </div>
                  <p className="text-sm text-gray-400 mb-1">Verified Companion</p>
                  <p className="text-xs text-gray-500">{companion.style}</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {companion.languages?.join(' · ')}
                  </p>
                </div>
              </div>

              <Link
                to={`/companions/${companion.id}`}
                className="inline-block mt-4 px-4 py-2 rounded-full text-xs font-medium text-gray-300 border border-white/10 hover:bg-white/5 transition-colors"
              >
                View Profile
              </Link>
            </div>

            {/* Booking Information */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <h3 className="text-sm font-semibold text-gray-300 mb-4">
                Booking Information
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 text-sm">
                <InfoItem label="Conversation" value={category} />
                <InfoItem
                  label="Date"
                  value={displayDate}
                  icon={Calendar}
                />
                <InfoItem
                  label="Time"
                  value={displayTime}
                  icon={Clock}
                />
                <InfoItem label="Duration" value={`${duration} Minutes`} />
                <InfoItem label="Call Type" value={callType} icon={Phone} />
                <InfoItem label="Status" value={status} highlight={status === 'Confirmed'} />
              </div>
            </div>

            {/* Privacy Card */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-4 h-4 text-electric-cyan" />
                <h3 className="text-sm font-semibold text-gray-300">
                  Your privacy
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { icon: Phone, text: 'Phone Call Only' },
                  { icon: VideoOff, text: 'No Video' },
                  { icon: CameraOff, text: 'No Camera' },
                  { icon: FileText, text: 'Report Available' },
                  { icon: Heart, text: 'Respectful Boundaries' },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-2 text-xs text-gray-400"
                  >
                    <Icon className="w-3.5 h-3.5 text-gray-500" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN (actions) ── */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <h3 className="text-sm font-semibold text-gray-300 mb-4">
                Actions
              </h3>
              <div className="flex flex-col gap-3">
                {status === 'Confirmed' && (
                  <>
                    <Link
                      to={`/call/${id}`}
                      className="w-full py-3 rounded-full text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-electric-DEFAULT hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all text-center"
                    >
                      Join Call
                    </Link>
                    <button
                      onClick={() => setRescheduleOpen(true)}
                      className="w-full py-3 rounded-full text-sm font-medium text-white bg-gradient-to-r from-romantic-DEFAULT to-dream-DEFAULT hover:shadow-[0_0_15px_rgba(219,39,119,0.4)] transition-all"
                    >
                      Reschedule
                    </button>
                    <button
                      onClick={() => setCancelOpen(true)}
                      className="w-full py-3 rounded-full text-sm font-medium text-gray-400 border border-white/10 hover:bg-white/5 hover:text-white transition-colors"
                    >
                      Cancel Conversation
                    </button>
                  </>
                )}

                {status === 'Completed' && (
                  <>
                    <Link
                      to="/categories"
                      className="w-full py-3 rounded-full text-sm font-medium text-white bg-gradient-to-r from-romantic-DEFAULT to-dream-DEFAULT hover:shadow-[0_0_15px_rgba(219,39,119,0.4)] transition-all text-center"
                    >
                      Talk Again
                    </Link>
                    {!conversation.feedbackSubmitted && (
                      <button
                        onClick={() => setFeedbackOpen(true)}
                        className="w-full py-3 rounded-full text-sm font-medium text-gray-300 border border-white/10 hover:bg-white/5 transition-colors"
                      >
                        Leave Feedback
                      </button>
                    )}
                  </>
                )}

                {status === 'Cancelled' && (
                  <Link
                    to="/categories"
                    className="w-full py-3 rounded-full text-sm font-medium text-white bg-gradient-to-r from-romantic-DEFAULT to-dream-DEFAULT hover:shadow-[0_0_15px_rgba(219,39,119,0.4)] transition-all text-center"
                  >
                    Book Again
                  </Link>
                )}
              </div>
            </div>

            {/* Safety quick access */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <h3 className="text-sm font-semibold text-gray-300 mb-3">
                Need Help?
              </h3>
              <div className="flex flex-col gap-2">
                <Link
                  to="/dashboard/support"
                  className="text-xs text-gray-400 hover:text-white transition-colors"
                >
                  Report a Problem
                </Link>
                <Link
                  to="/safety"
                  className="text-xs text-gray-400 hover:text-white transition-colors"
                >
                  Safety Guidelines
                </Link>
                <Link
                  to="/dashboard/support"
                  className="text-xs text-gray-400 hover:text-white transition-colors"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modals */}
      <RescheduleModal
        isOpen={rescheduleOpen}
        onClose={() => setRescheduleOpen(false)}
        companionName={companion.name}
      />
      <CancelConversationModal
        isOpen={cancelOpen}
        onClose={() => setCancelOpen(false)}
        companionName={companion.name}
      />
      <FeedbackModal
        isOpen={feedbackOpen}
        onClose={() => setFeedbackOpen(false)}
        companionName={companion.name}
      />
    </>
  );
}

function InfoItem({ label, value, icon: Icon, highlight }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-wider text-gray-500 mb-1">
        {label}
      </p>
      <p
        className={`text-sm flex items-center gap-1.5 ${
          highlight ? 'text-emerald-400' : 'text-white'
        }`}
      >
        {Icon && <Icon className="w-3.5 h-3.5 text-gray-400" />}
        {value}
      </p>
    </div>
  );
}
