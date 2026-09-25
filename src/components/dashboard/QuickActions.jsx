import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  Calendar,
  RefreshCw,
  Clock,
  ShieldCheck,
  Wind,
} from 'lucide-react';
import CalmBreathingModal from './CalmBreathingModal';

export default function QuickActions() {
  const [breathingOpen, setBreathingOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <h3 className="text-sm font-semibold text-gray-300 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          <Link
            to="/companions"
            className="flex flex-col items-center gap-2 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-center group"
          >
            <Search className="w-5 h-5 text-gray-400 group-hover:text-romantic-pink transition-colors" />
            <span className="text-[11px] text-gray-400 group-hover:text-white leading-tight transition-colors">
              Find Someone
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setBreathingOpen(true)}
            className="flex flex-col items-center gap-2 p-3 rounded-xl border border-electric-cyan/20 bg-electric-cyan/5 hover:bg-electric-cyan/15 transition-all text-center group"
          >
            <Wind className="w-5 h-5 text-electric-cyan group-hover:scale-110 transition-transform" />
            <span className="text-[11px] text-electric-cyan group-hover:text-white font-medium leading-tight transition-colors">
              Calm Breathing
            </span>
          </button>

          <Link
            to="/first-session"
            className="flex flex-col items-center gap-2 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-center group"
          >
            <Calendar className="w-5 h-5 text-gray-400 group-hover:text-romantic-pink transition-colors" />
            <span className="text-[11px] text-gray-400 group-hover:text-white leading-tight transition-colors">
              First Session
            </span>
          </Link>

          <Link
            to="/dashboard/conversations"
            className="flex flex-col items-center gap-2 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-center group"
          >
            <RefreshCw className="w-5 h-5 text-gray-400 group-hover:text-romantic-pink transition-colors" />
            <span className="text-[11px] text-gray-400 group-hover:text-white leading-tight transition-colors">
              Reschedule
            </span>
          </Link>

          <Link
            to="/dashboard/conversations"
            className="flex flex-col items-center gap-2 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-center group"
          >
            <Clock className="w-5 h-5 text-gray-400 group-hover:text-romantic-pink transition-colors" />
            <span className="text-[11px] text-gray-400 group-hover:text-white leading-tight transition-colors">
              Call History
            </span>
          </Link>

          <Link
            to="/safety"
            className="flex flex-col items-center gap-2 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-center group"
          >
            <ShieldCheck className="w-5 h-5 text-gray-400 group-hover:text-romantic-pink transition-colors" />
            <span className="text-[11px] text-gray-400 group-hover:text-white leading-tight transition-colors">
              Safety Center
            </span>
          </Link>
        </div>
      </motion.div>

      {/* Calm Breathing Modal */}
      <CalmBreathingModal isOpen={breathingOpen} onClose={() => setBreathingOpen(false)} />
    </>
  );
}
