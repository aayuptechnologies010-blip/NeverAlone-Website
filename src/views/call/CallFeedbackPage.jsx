import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Flag, Heart, ShieldAlert, Sparkles, Star, ThumbsUp } from 'lucide-react';
import { demoCallBooking } from '../../data/callDemo';
import { allConversations } from '../../data/dashboardDemo';
import ReportModal from '../../components/call/ReportModal';

const questions = [
  { key: 'listened', label: 'Did you feel genuinely listened to?', options: ['Yes, completely', 'Mostly', 'Not really'] },
  { key: 'comfortable', label: 'Did you feel comfortable sharing?', options: ['Yes, safe space', 'Somewhat', 'No'] },
  { key: 'helpful', label: 'Was this conversation helpful for your mind?', options: ['Very helpful', 'A little', 'Not really'] },
];

const feelings = [
  { label: 'A lot lighter', emoji: '✨', color: 'from-emerald-500/20 to-cyan-500/20 border-emerald-500/40 text-emerald-300' },
  { label: 'Calmer & relaxed', emoji: '🌿', color: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/40 text-cyan-300' },
  { label: 'About the same', emoji: '☁️', color: 'from-white/10 to-white/5 border-white/20 text-gray-300' },
  { label: 'Still feeling heavy', emoji: '🌧️', color: 'from-pink-500/20 to-red-500/20 border-pink-500/40 text-pink-300' },
];

const complimentTags = [
  'Patient listener',
  'Warm & reassuring',
  'Understood me well',
  'Zero judgment',
  'Great energy',
  'Insightful advice',
];

export default function CallFeedbackPage() {
  const { bookingId } = useParams();
  const booking = useMemo(() => allConversations.find((item) => item.id === bookingId) || demoCallBooking, [bookingId]);
  const [answers, setAnswers] = useState({});
  const [feeling, setFeeling] = useState('');
  const [selectedCompliments, setSelectedCompliments] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);

  const toggleCompliment = (tag) => {
    setSelectedCompliments((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const recommendation = feeling === 'Still feeling heavy'
    ? 'You do not have to solve everything today. Take a warm drink, be gentle with yourself, and check our 24/7 Safety Helpline if you need urgent care.'
    : answers.helpful === 'Very helpful' || feeling === 'A lot lighter'
      ? 'We are glad you felt heard. Consistency helps emotional wellness—you can reconnect with this companion anytime from your dashboard.'
      : 'Finding the right companion is a journey. You can explore other therapists or take some personal time.';

  return (
    <div className="min-h-screen bg-brand-950 text-warm-white flex flex-col justify-center py-10 px-4 sm:px-6">
      <div className="mx-auto max-w-lg w-full">
        {!submitted ? (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            {/* Header / Companion Info */}
            <div className="mb-6 flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <img src={booking.companion.image} alt={booking.companion.name} className="h-12 w-12 rounded-full border border-white/20 object-cover" />
                <div>
                  <p className="text-sm font-bold text-white">{booking.companion.name}</p>
                  <p className="text-xs text-electric-cyan">{booking.category}</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                Call Completed
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">How do you feel now?</h1>
            <p className="mb-6 text-sm text-gray-400">Your reflection is private. It helps you check in with your mind after the call.</p>

            {/* Overall Rating Stars */}
            <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
              <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold block mb-2">Rate your conversation</span>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 text-gray-600 hover:scale-125 transition-transform"
                  >
                    <Star
                      size={28}
                      className={star <= rating ? 'text-amber-400 fill-amber-400' : 'text-gray-600'}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Feelings Selector */}
            <section className="mb-6 rounded-2xl border border-electric-cyan/20 bg-electric-cyan/5 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="h-4 w-4 text-electric-cyan" />
                <h2 className="text-sm font-semibold text-white">How is your mood leaving this call?</h2>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {feelings.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setFeeling(item.label)}
                    className={`rounded-xl border p-3 text-left text-xs font-medium transition-all flex items-center gap-2.5 ${
                      feeling === item.label
                        ? `bg-gradient-to-r ${item.color} shadow-sm`
                        : 'border-white/10 bg-brand-950/70 text-gray-400 hover:text-white'
                    }`}
                  >
                    <span className="text-base">{item.emoji}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </section>

            {/* Compliment Tags */}
            <div className="mb-6">
              <label className="text-xs text-gray-400 uppercase tracking-wider font-semibold block mb-2.5">
                What did you like about {booking.companion.name}?
              </label>
              <div className="flex flex-wrap gap-2">
                {complimentTags.map((tag) => {
                  const isSelected = selectedCompliments.includes(tag);
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleCompliment(tag)}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                        isSelected
                          ? 'bg-romantic-DEFAULT text-white border-romantic-DEFAULT shadow-sm'
                          : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Structured Questions */}
            <div className="mb-6 space-y-4">
              {questions.map((question) => (
                <div key={question.key}>
                  <p className="mb-2 text-xs font-medium text-gray-300">{question.label}</p>
                  <div className="flex gap-2">
                    {question.options.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setAnswers((current) => ({ ...current, [question.key]: option }))}
                        className={`flex-1 rounded-xl border py-2 text-xs font-medium transition ${
                          answers[question.key] === option
                            ? 'border-romantic-DEFAULT/40 bg-romantic-DEFAULT/20 text-white'
                            : 'border-white/10 bg-white/5 text-gray-400 hover:text-white'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Free Comment */}
            <div className="mb-6">
              <label className="mb-2 block text-xs text-gray-300">
                Personal reflection / Notes <span className="text-gray-500">(saved to your private diary)</span>
              </label>
              <textarea
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                rows={3}
                placeholder="What resonated with you the most during this talk?..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-white placeholder-gray-500 focus:border-electric-cyan/40 focus:outline-none"
              />
            </div>

            <button
              type="button"
              onClick={() => setSubmitted(true)}
              className="mb-4 w-full rounded-full bg-gradient-to-r from-romantic-DEFAULT to-dream-DEFAULT py-3.5 text-sm font-bold text-white transition-all hover:shadow-[0_0_25px_rgba(219,39,119,0.4)]"
            >
              Complete Check-In
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setReportOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs text-gray-500 transition-colors hover:text-gray-300"
              >
                <Flag className="h-3 w-3" /> Something did not feel right? Report this call
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="flex flex-col items-center pt-8 text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10">
              <CheckCircle2 className="h-8 w-8 text-emerald-400" />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-white">Check-in Saved ✨</h2>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-gray-300">{recommendation}</p>

            {feeling === 'Still feeling heavy' && (
              <Link to="/safety" className="mb-4 inline-flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-3 text-xs font-semibold text-red-200">
                <ShieldAlert className="h-4 w-4" /> View 24/7 KIRAN Helpline (1800-599-0019)
              </Link>
            )}

            <div className="flex w-full max-w-xs flex-col gap-3">
              <Link to="/first-session" className="w-full rounded-full bg-gradient-to-r from-romantic-DEFAULT to-dream-DEFAULT py-3 text-center text-xs font-bold text-white">
                Book ₹797 Next Session
              </Link>
              <Link to="/dashboard" className="w-full rounded-full border border-white/10 py-3 text-center text-xs font-medium text-gray-300 transition hover:bg-white/5">
                Go to Dashboard
              </Link>
            </div>
            <button
              type="button"
              onClick={() => setReportOpen(true)}
              className="mt-6 inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-300"
            >
              <Flag className="h-3 w-3" /> Report conversation
            </button>
          </motion.div>
        )}
      </div>
      <ReportModal isOpen={reportOpen} onClose={() => setReportOpen(false)} />
    </div>
  );
}
