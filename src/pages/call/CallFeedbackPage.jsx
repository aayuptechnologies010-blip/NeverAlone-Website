import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Flag } from 'lucide-react';
import { demoCallBooking } from '../../data/callDemo';
import { allConversations } from '../../data/dashboardDemo';
import ReportModal from '../../components/call/ReportModal';

const questions = [
  {
    key: 'listened',
    label: 'Did they listen well?',
    options: ['Yes', 'Mostly', 'Not Really'],
  },
  {
    key: 'comfortable',
    label: 'Did you feel comfortable?',
    options: ['Yes', 'Mostly', 'No'],
  },
  {
    key: 'helpful',
    label: 'Was the conversation helpful?',
    options: ['Yes', 'A Little', 'Not Really'],
  },
  {
    key: 'again',
    label: 'Would you talk to them again?',
    options: ['Yes', 'Maybe', 'No'],
  },
];

export default function CallFeedbackPage() {
  const { bookingId } = useParams();
  const booking = useMemo(
    () => allConversations.find((c) => c.id === bookingId) || demoCallBooking,
    [bookingId]
  );

  const [answers, setAnswers] = useState({});
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);

  const setAnswer = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    // Demo only — data is not sent anywhere.
  };

  return (
    <div className="min-h-screen bg-brand-950 text-warm-white">
      <div className="max-w-lg mx-auto px-4 py-10 sm:py-16">
        {!submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Companion mini header */}
            <div className="flex items-center gap-3 mb-8">
              <img
                src={booking.companion.image}
                alt={booking.companion.name}
                className="w-10 h-10 rounded-full object-cover border border-white/10"
              />
              <div>
                <p className="text-sm font-medium text-white">
                  {booking.companion.name}
                </p>
                <p className="text-xs text-gray-400">{booking.category}</p>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-2xl font-bold text-white mb-2">
              How did the conversation feel?
            </h1>
            <p className="text-sm text-gray-400 mb-8">
              Your feedback helps us create better conversations.
            </p>

            {/* Questions */}
            <div className="space-y-6 mb-8">
              {questions.map((q) => (
                <div key={q.key}>
                  <p className="text-sm text-gray-300 mb-3">{q.label}</p>
                  <div className="flex gap-2">
                    {q.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setAnswer(q.key, opt)}
                        className={`flex-1 py-2.5 rounded-xl text-xs font-medium border transition-all ${
                          answers[q.key] === opt
                            ? 'bg-gradient-to-r from-romantic-DEFAULT/20 to-dream-purple/20 border-romantic-DEFAULT/40 text-white'
                            : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Optional comment */}
            <div className="mb-8">
              <label className="text-sm text-gray-300 mb-2 block">
                Anything else you'd like us to know?{' '}
                <span className="text-gray-500">(optional)</span>
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={3}
                placeholder="Share your thoughts…"
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-romantic-DEFAULT/40 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              className="w-full py-3.5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-romantic-DEFAULT to-dream-DEFAULT hover:shadow-[0_0_20px_rgba(219,39,119,0.4)] transition-all mb-6"
            >
              Submit Feedback
            </button>

            {/* Report link */}
            <div className="text-center">
              <button
                onClick={() => setReportOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                <Flag className="w-3 h-3" />
                Something didn't feel right? Report This Conversation
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center pt-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6"
            >
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </motion.div>

            <h2 className="text-2xl font-bold text-white mb-2">
              Thanks for sharing. 💗
            </h2>
            <p className="text-sm text-gray-400 mb-10 max-w-xs">
              Your feedback helps us make conversations better for everyone.
            </p>

            <div className="flex flex-col gap-3 w-full max-w-xs">
              <Link
                to="/categories"
                className="w-full py-3.5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-romantic-DEFAULT to-dream-DEFAULT hover:shadow-[0_0_20px_rgba(219,39,119,0.4)] transition-all text-center"
              >
                Find Someone Again
              </Link>
              <Link
                to="/dashboard"
                className="w-full py-3.5 rounded-full text-sm font-medium text-gray-300 border border-white/10 hover:bg-white/5 transition-colors text-center"
              >
                Back To Dashboard
              </Link>
            </div>

            {/* Report link */}
            <button
              onClick={() => setReportOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-300 transition-colors mt-8"
            >
              <Flag className="w-3 h-3" />
              Report This Conversation
            </button>
          </motion.div>
        )}
      </div>

      {/* Report modal (reused) */}
      <ReportModal
        isOpen={reportOpen}
        onClose={() => setReportOpen(false)}
      />
    </div>
  );
}
