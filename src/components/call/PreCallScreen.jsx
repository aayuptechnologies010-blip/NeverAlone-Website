import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, Clock, Phone, Shield } from 'lucide-react';

// Pre-call waiting screen shown before a conversation starts.
export default function PreCallScreen({ booking, countdown, onStart }) {
  const { companion, category, displayDate, displayTime, duration, callType } = booking;
  const isReady = countdown <= 0;
  const [readiness, setReadiness] = useState({ privateSpace: false, boundaries: false });
  const canStart = isReady && readiness.privateSpace && readiness.boundaries;

  const toggleReadiness = (key) => {
    setReadiness((current) => ({ ...current, [key]: !current[key] }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-romantic-DEFAULT/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-dream-purple/6 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-md w-full">
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-romantic-DEFAULT to-electric-DEFAULT flex items-center justify-center">
            <span className="text-white font-semibold text-sm">NA</span>
          </div>
          <span className="text-lg font-semibold text-white">Neuravia</span>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10">
          <Shield className="w-3.5 h-3.5 text-electric-cyan" />
          <span className="text-xs font-medium text-gray-300">Private Conversation</span>
        </div>

        {/* Companion image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative mb-6"
        >
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_40px_rgba(219,39,119,0.15)]">
            <img
              src={companion.image}
              alt={companion.name}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Companion info */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-1">
            <h2 className="text-2xl font-semibold text-white">{companion.name}</h2>
            {companion.verified && <CheckCircle2 className="w-5 h-5 text-electric-cyan" />}
          </div>
          <p className="text-sm text-gray-400 mb-1">Verified Companion</p>
          <p className="text-xs text-gray-500">{companion.style}</p>
        </div>

        {/* Details */}
        <div className="grid grid-cols-2 gap-4 w-full mb-8 text-center">
          <DetailPill icon={Calendar} label={displayDate} sub={displayTime} />
          <DetailPill icon={Clock} label={`${duration} Minutes`} sub={category} />
          <DetailPill icon={Phone} label={callType} className="col-span-2" />
        </div>

        {/* Countdown */}
        {!isReady && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">
              Your conversation starts in
            </p>
            <CountdownDisplay seconds={countdown} />
            <p className="text-xs text-gray-500 mt-4 max-w-xs">
              Take your time. You don't need to prepare anything.
            </p>
          </motion.div>
        )}

        {/* Privacy reminder */}
        <div className="w-full rounded-xl border border-white/10 bg-white/5 p-4 mb-8">
          <p className="text-xs font-medium text-gray-300 mb-3">Before you start</p>
          <div className="space-y-2">
            {[
              'Phone Calls Only',
              'No Video',
              'Respect Boundaries',
              'You can end the conversation anytime',
              'Report is always available',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs text-gray-400">
                <span className="w-1 h-1 rounded-full bg-electric-cyan flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full rounded-xl border border-electric-cyan/20 bg-electric-cyan/5 p-4 mb-8">
          <p className="text-xs font-medium text-white mb-3">A quick readiness check</p>
          <label className="flex cursor-pointer items-start gap-3 text-xs text-gray-300">
            <input type="checkbox" checked={readiness.privateSpace} onChange={() => toggleReadiness('privateSpace')} className="mt-0.5 h-4 w-4 rounded border-white/20 bg-brand-950 accent-cyan-400" />
            <span>I am in a place where I feel comfortable starting this private conversation.</span>
          </label>
          <label className="mt-3 flex cursor-pointer items-start gap-3 text-xs text-gray-300">
            <input type="checkbox" checked={readiness.boundaries} onChange={() => toggleReadiness('boundaries')} className="mt-0.5 h-4 w-4 rounded border-white/20 bg-brand-950 accent-cyan-400" />
            <span>I understand I can pause, end, or report the conversation at any time.</span>
          </label>
        </div>

        <div className="w-full mb-8 rounded-xl border border-white/10 bg-brand-950/60 p-4">
          <p className="text-xs font-medium text-gray-300 mb-3">What to expect</p>
          <ol className="space-y-2 text-xs text-gray-400">
            <li><span className="mr-2 text-electric-cyan">1.</span>Start wherever feels easiest. You do not need to explain everything at once.</li>
            <li><span className="mr-2 text-electric-cyan">2.</span>Share, ask questions, or take a quiet moment. You set the pace.</li>
            <li><span className="mr-2 text-electric-cyan">3.</span>At the end, reflect on what felt useful and choose a next step only if you want one.</li>
          </ol>
        </div>

        {/* Start button */}
        <button
          onClick={onStart}
          disabled={!canStart}
          className={`w-full flex items-center justify-center gap-2 py-4 rounded-full text-base font-semibold transition-all ${
            canStart
              ? 'text-white bg-gradient-to-r from-romantic-DEFAULT to-dream-DEFAULT hover:shadow-[0_0_25px_rgba(219,39,119,0.5)] hover:-translate-y-0.5'
              : 'text-gray-500 bg-white/5 border border-white/10 cursor-not-allowed'
          }`}
        >
          <Phone className="w-5 h-5" />
          {!isReady ? `Available at ${displayTime}` : canStart ? 'Start Conversation' : 'Complete readiness check'}
        </button>
      </div>
    </div>
  );
}

function DetailPill({ icon: Icon, label, sub, className = '' }) {
  return (
    <div className={`rounded-xl bg-white/5 border border-white/10 py-3 px-4 ${className}`}>
      <div className="flex items-center justify-center gap-1.5 text-sm text-white mb-0.5">
        <Icon className="w-3.5 h-3.5 text-gray-400" />
        {label}
      </div>
      {sub && <p className="text-[11px] text-gray-500">{sub}</p>}
    </div>
  );
}

function CountdownDisplay({ seconds }) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const pad = (n) => String(n).padStart(2, '0');

  return (
    <div className="flex items-center justify-center gap-2 font-mono">
      {h > 0 && (
        <>
          <span className="text-3xl font-semibold text-white">{pad(h)}</span>
          <span className="text-xl text-gray-600">:</span>
        </>
      )}
      <span className="text-3xl font-semibold text-white">{pad(m)}</span>
      <span className="text-xl text-gray-600">:</span>
      <span className="text-3xl font-semibold text-white">{pad(s)}</span>
    </div>
  );
}
