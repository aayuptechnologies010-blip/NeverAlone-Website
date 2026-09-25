import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, CheckCircle2 } from 'lucide-react';

const demoDates = ['Today', 'Tomorrow', 'Wednesday', 'Thursday'];
const demoSlots = ['6:00 PM', '7:30 PM', '9:00 PM', '10:30 PM'];

// Reschedule modal with demo date and time slot selection.
export default function RescheduleModal({ isOpen, onClose, companionName, onConfirm }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    if (selectedDate && selectedSlot) {
      onConfirm?.(selectedDate, selectedSlot);
      setConfirmed(true);
    }
  };

  const handleClose = () => {
    setSelectedDate(null);
    setSelectedSlot(null);
    setConfirmed(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
          >
            <div className="w-full sm:max-w-md bg-brand-950 border border-white/10 rounded-t-2xl sm:rounded-2xl p-6 relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              {!confirmed ? (
                <>
                  <div className="flex items-center gap-2 mb-6">
                    <Calendar className="w-5 h-5 text-romantic-pink" />
                    <h2 className="text-lg font-semibold text-white">
                      Choose another time
                    </h2>
                  </div>

                  {/* Date selection */}
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">
                    Select a date
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {demoDates.map((d) => (
                      <button
                        key={d}
                        onClick={() => setSelectedDate(d)}
                        className={`py-2.5 rounded-xl text-sm font-medium transition-all border ${
                          selectedDate === d
                            ? 'bg-gradient-to-r from-romantic-DEFAULT/20 to-dream-purple/20 border-romantic-DEFAULT/40 text-white'
                            : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>

                  {/* Time slots */}
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">
                    Select a time
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {demoSlots.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSlot(s)}
                        className={`py-2.5 rounded-xl text-sm font-medium transition-all border ${
                          selectedSlot === s
                            ? 'bg-gradient-to-r from-romantic-DEFAULT/20 to-dream-purple/20 border-romantic-DEFAULT/40 text-white'
                            : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={handleConfirm}
                    disabled={!selectedDate || !selectedSlot}
                    className={`w-full py-3 rounded-full text-sm font-medium transition-all ${
                      selectedDate && selectedSlot
                        ? 'text-white bg-gradient-to-r from-romantic-DEFAULT to-dream-DEFAULT hover:shadow-[0_0_15px_rgba(219,39,119,0.4)]'
                        : 'text-gray-500 bg-white/5 cursor-not-allowed'
                    }`}
                  >
                    Confirm New Time
                  </button>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Conversation rescheduled.
                  </h3>
                  <p className="text-sm text-gray-400 mb-6">
                    Your conversation{companionName ? ` with ${companionName}` : ''} has been moved to{' '}
                    <span className="text-white">{selectedDate}</span> at{' '}
                    <span className="text-white">{selectedSlot}</span>.
                  </p>
                  <button
                    onClick={handleClose}
                    className="px-6 py-2.5 rounded-full text-sm font-medium text-gray-300 border border-white/10 hover:bg-white/5 transition-colors"
                  >
                    Done
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
