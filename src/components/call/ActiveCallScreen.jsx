import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import CompanionCallProfile from './CompanionCallProfile';
import CallTimer from './CallTimer';
import CallControls from './CallControls';
import ExtraTimePrompt from './ExtraTimePrompt';

// Full-screen active call interface.
// Calm, distraction-free, centered layout with ambient background.
export default function ActiveCallScreen({
  booking,
  elapsedSeconds,
  isMuted,
  isSpeakerOn,
  timeWarning,       // null | '10min' | '5min'
  onToggleMute,
  onToggleSpeaker,
  onEndCall,
  onReport,
  onAddTime,
}) {
  const { companion, category, duration } = booking;

  return (
    <div className="fixed inset-0 bg-brand-950 flex flex-col z-10">
      {/* ── Ambient background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.06, 0.1, 0.06] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-romantic-DEFAULT/10 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-dream-purple/8 rounded-full blur-[120px]"
        />

        {/* Subtle waveform bar */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex items-end gap-1">
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{
                height: [4, 8 + Math.random() * 16, 4],
              }}
              transition={{
                duration: 1.2 + Math.random() * 0.8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 0.5,
              }}
              className="w-0.5 rounded-full bg-white/10"
            />
          ))}
        </div>
      </div>

      {/* ── Top bar ── */}
      <div className="relative z-10 flex items-center justify-between px-4 sm:px-6 pt-4 pb-2">
        <div className="flex items-center gap-2">
          <Shield className="w-3.5 h-3.5 text-electric-cyan/60" />
          <span className="text-[11px] text-gray-500">Private phone conversation</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] text-gray-500">Conversation in progress</span>
        </div>
      </div>

      {/* ── Center content ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 gap-6 max-w-lg mx-auto w-full">
        {/* Companion profile */}
        <CompanionCallProfile companion={companion} category={category} />

        {/* Timer */}
        <CallTimer elapsedSeconds={elapsedSeconds} totalMinutes={duration} />

        {/* Time warnings */}
        <ExtraTimePrompt
          variant="10min"
          visible={timeWarning === '10min'}
          onAddTime={onAddTime}
        />
        <ExtraTimePrompt
          variant="5min"
          visible={timeWarning === '5min'}
          onAddTime={onAddTime}
        />
      </div>

      {/* ── Bottom controls ── */}
      <div className="relative z-10 pb-8 sm:pb-10 pt-4 px-4"
        style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom, 0px))' }}
      >
        <CallControls
          isMuted={isMuted}
          isSpeakerOn={isSpeakerOn}
          onToggleMute={onToggleMute}
          onToggleSpeaker={onToggleSpeaker}
          onEndCall={onEndCall}
          onReport={onReport}
        />
      </div>
    </div>
  );
}
