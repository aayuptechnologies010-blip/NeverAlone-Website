import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { demoCallBooking, CALL_STATES, extraTimeConfig } from '../../data/callDemo';
import { allConversations } from '../../data/dashboardDemo';

import PreCallScreen from '../../components/call/PreCallScreen';
import ActiveCallScreen from '../../components/call/ActiveCallScreen';
import CallEndedScreen from '../../components/call/CallEndedScreen';
import EndCallModal from '../../components/call/EndCallModal';
import CallExtraTimeModal from '../../components/call/CallExtraTimeModal';
import ReportModal from '../../components/call/ReportModal';

// ─── Demo configuration ────────────────────────────────────────
// Adjust these to test different states without waiting real-time.
const DEMO_CONFIG = {
  // Pre-call countdown in seconds (set to 0 for instant-ready).
  countdownSeconds: 10,
  // Speed multiplier for the call timer (1 = real-time, 60 = 1 min/sec).
  timerSpeed: 1,
  // Total call duration in minutes.
  totalMinutes: 60,
};

export default function CallPage() {
  const { bookingId } = useParams();
  const navigate = useNavigate();

  // Find booking from demo data (fallback to default).
  const booking =
    allConversations.find((c) => c.id === bookingId) || demoCallBooking;

  // ── State ──
  const [callState, setCallState] = useState(CALL_STATES.SCHEDULED);
  const [countdown, setCountdown] = useState(DEMO_CONFIG.countdownSeconds);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(false);
  const [timeWarning, setTimeWarning] = useState(null); // null | '10min' | '5min'

  // Modals
  const [endCallOpen, setEndCallOpen] = useState(false);
  const [extraTimeOpen, setExtraTimeOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);

  const timerRef = useRef(null);
  const countdownRef = useRef(null);

  const totalSeconds = DEMO_CONFIG.totalMinutes * 60;

  // ── Pre-call countdown ──
  useEffect(() => {
    if (callState !== CALL_STATES.SCHEDULED) return;

    if (countdown <= 0) {
      setCallState(CALL_STATES.READY);
      return;
    }

    countdownRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownRef.current);
          setCallState(CALL_STATES.READY);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdownRef.current);
  }, [callState, countdown]);

  // ── Active call timer ──
  useEffect(() => {
    if (callState !== CALL_STATES.ACTIVE) return;

    timerRef.current = setInterval(() => {
      setElapsedSeconds((prev) => {
        const next = prev + 1;
        const remaining = totalSeconds - next;

        // Time warnings
        if (remaining <= 5 * 60 && remaining > 0) {
          setTimeWarning('5min');
        } else if (remaining <= 10 * 60 && remaining > 5 * 60) {
          setTimeWarning('10min');
        }

        // Auto-end
        if (next >= totalSeconds) {
          clearInterval(timerRef.current);
          setCallState(CALL_STATES.ENDED);
          return totalSeconds;
        }

        return next;
      });
    }, 1000 / DEMO_CONFIG.timerSpeed);

    return () => clearInterval(timerRef.current);
  }, [callState, totalSeconds]);

  // ── Handlers ──
  const handleStart = useCallback(() => {
    setCallState(CALL_STATES.ACTIVE);
    setElapsedSeconds(0);
    setTimeWarning(null);
  }, []);

  const handleEndCall = useCallback(() => {
    clearInterval(timerRef.current);
    setEndCallOpen(false);
    setCallState(CALL_STATES.ENDED);
  }, []);

  const handleLeaveFeedback = useCallback(() => {
    navigate(`/call/${bookingId || booking.id}/feedback`);
  }, [navigate, bookingId, booking.id]);

  const elapsedMinutes = Math.floor(elapsedSeconds / 60);

  return (
    <div className="min-h-screen bg-brand-950 text-warm-white">
      <AnimatePresence mode="wait">
        {/* ── PRE-CALL (scheduled / ready) ── */}
        {(callState === CALL_STATES.SCHEDULED ||
          callState === CALL_STATES.READY) && (
          <motion.div
            key="precall"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <PreCallScreen
              booking={booking}
              countdown={countdown}
              onStart={handleStart}
            />
          </motion.div>
        )}

        {/* ── ACTIVE CALL ── */}
        {callState === CALL_STATES.ACTIVE && (
          <motion.div
            key="active"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ActiveCallScreen
              booking={booking}
              elapsedSeconds={elapsedSeconds}
              isMuted={isMuted}
              isSpeakerOn={isSpeakerOn}
              timeWarning={timeWarning}
              onToggleMute={() => setIsMuted((p) => !p)}
              onToggleSpeaker={() => setIsSpeakerOn((p) => !p)}
              onEndCall={() => setEndCallOpen(true)}
              onReport={() => setReportOpen(true)}
              onAddTime={() => setExtraTimeOpen(true)}
            />
          </motion.div>
        )}

        {/* ── CALL ENDED ── */}
        {callState === CALL_STATES.ENDED && (
          <motion.div
            key="ended"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <CallEndedScreen
              booking={booking}
              elapsedMinutes={elapsedMinutes || DEMO_CONFIG.totalMinutes}
              onLeaveFeedback={handleLeaveFeedback}
              onReport={() => setReportOpen(true)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Modals ── */}
      <EndCallModal
        isOpen={endCallOpen}
        onClose={() => setEndCallOpen(false)}
        onEndCall={handleEndCall}
      />
      <CallExtraTimeModal
        isOpen={extraTimeOpen}
        onClose={() => setExtraTimeOpen(false)}
        companionName={booking.companion?.name}
        price={extraTimeConfig.price}
        duration={extraTimeConfig.duration}
      />
      <ReportModal
        isOpen={reportOpen}
        onClose={() => setReportOpen(false)}
        onEndCall={handleEndCall}
      />
    </div>
  );
}
