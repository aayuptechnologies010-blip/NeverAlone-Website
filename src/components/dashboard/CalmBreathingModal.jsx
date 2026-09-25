import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wind, Play, Square, X, Sparkles, CheckCircle } from 'lucide-react';

export default function CalmBreathingModal({ isOpen, onClose }) {
  const [phase, setPhase] = useState('Inhale'); // Inhale, Hold, Exhale, Rest
  const [timer, setTimer] = useState(4);
  const [cycleCount, setCycleCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isOpen || !isRunning) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev > 1) {
          return prev - 1;
        } else {
          // Switch phases
          setPhase((currentPhase) => {
            if (currentPhase === 'Inhale') return 'Hold';
            if (currentPhase === 'Hold') return 'Exhale';
            if (currentPhase === 'Exhale') return 'Rest';
            // Rest -> Inhale
            setCycleCount((c) => c + 1);
            return 'Inhale';
          });
          return 4; // 4 seconds per phase (Box Breathing)
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen, isRunning, phase]);

  const getPhaseInstruction = () => {
    switch (phase) {
      case 'Inhale':
        return 'Deep breath in through your nose...';
      case 'Hold':
        return 'Hold your breath gently...';
      case 'Exhale':
        return 'Slowly release through your mouth...';
      case 'Rest':
        return 'Pause and relax your shoulders...';
      default:
        return '';
    }
  };

  const getCircleScale = () => {
    switch (phase) {
      case 'Inhale':
        return 1.4;
      case 'Hold':
        return 1.4;
      case 'Exhale':
        return 0.85;
      case 'Rest':
        return 0.85;
      default:
        return 1;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-950/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-md bg-brand-900 border border-white/10 rounded-3xl p-6 sm:p-8 text-center shadow-2xl overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-electric-cyan/15 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className="flex items-center gap-2 text-electric-cyan text-sm font-semibold">
                <Wind size={18} />
                <span>Box Breathing Calm</span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition"
              >
                <X size={18} />
              </button>
            </div>

            {/* Breathing Visualizer */}
            <div className="relative my-8 flex items-center justify-center h-52">
              {/* Outer Ripple */}
              <motion.div
                animate={{
                  scale: getCircleScale(),
                  opacity: phase === 'Inhale' || phase === 'Hold' ? 0.6 : 0.2,
                }}
                transition={{ duration: 4, ease: 'easeInOut' }}
                className="absolute w-44 h-44 rounded-full border border-electric-cyan/40 bg-electric-cyan/10"
              />

              {/* Inner Pulsing Core */}
              <motion.div
                animate={{
                  scale: getCircleScale() * 0.85,
                  backgroundColor: phase === 'Exhale' ? 'rgba(236, 72, 153, 0.2)' : 'rgba(6, 182, 212, 0.25)',
                  borderColor: phase === 'Exhale' ? 'rgba(236, 72, 153, 0.5)' : 'rgba(6, 182, 212, 0.6)',
                }}
                transition={{ duration: 4, ease: 'easeInOut' }}
                className="w-32 h-32 rounded-full border-2 flex flex-col items-center justify-center relative z-10 shadow-lg"
              >
                <span className="text-3xl font-bold text-white mb-0.5">{timer}s</span>
                <span className="text-xs uppercase tracking-wider font-semibold text-gray-300">{phase}</span>
              </motion.div>
            </div>

            {/* Instruction */}
            <p className="text-sm font-medium text-gray-200 mb-6 relative z-10 min-h-[24px]">
              {getPhaseInstruction()}
            </p>

            {/* Stats & Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-white/5 relative z-10">
              <span className="text-xs text-gray-400 flex items-center gap-1.5">
                <Sparkles size={13} className="text-electric-cyan" />
                {cycleCount} Cycles Completed
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsRunning(!isRunning)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white hover:bg-white/15 transition flex items-center gap-1.5"
                >
                  {isRunning ? <Square size={12} /> : <Play size={12} />}
                  <span>{isRunning ? 'Pause' : 'Resume'}</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold bg-electric-cyan text-brand-950 hover:bg-cyan-300 transition flex items-center gap-1"
                >
                  <CheckCircle size={13} />
                  <span>I Feel Calmer</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
