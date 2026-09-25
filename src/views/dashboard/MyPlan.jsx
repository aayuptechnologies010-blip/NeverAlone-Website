import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CreditCard, Clock, Plus } from 'lucide-react';
import { demoPlan } from '../../data/dashboardDemo';
import ExtraTimeModal from '../../components/dashboard/ExtraTimeModal';

export default function MyPlan() {
  const [extraTimeOpen, setExtraTimeOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-white">My Plan</h1>
        <p className="text-sm text-gray-400 mt-1">
          Manage your subscription and add extra time.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Current Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.03] backdrop-blur-md p-6 md:p-8 relative overflow-hidden"
        >
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-dream-purple/10 rounded-full blur-[60px] pointer-events-none" />

          <div className="flex items-center gap-2 mb-6 relative">
            <CreditCard className="w-5 h-5 text-dream-purple" />
            <h2 className="text-lg font-semibold text-white">Current Plan</h2>
          </div>

          <div className="space-y-4 text-sm mb-8 relative">
            <PlanRow label="Plan" value={demoPlan.type} />
            <PlanRow
              label="Price"
              value={`${demoPlan.currency}${demoPlan.price.toLocaleString('en-IN')}`}
              highlight
            />
            <PlanRow
              label="Daily Conversation"
              value={`${demoPlan.dailyMinutes} Minutes`}
            />
            <PlanRow
              label="Plan Duration"
              value={`${demoPlan.durationDays} Days`}
            />
            <PlanRow label="Renewal Date" value={demoPlan.renewalDate} />
          </div>

          <div className="flex flex-wrap gap-3 relative">
            <Link
              to="/pricing"
              className="px-5 py-2.5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-romantic-DEFAULT to-dream-DEFAULT hover:shadow-[0_0_15px_rgba(219,39,119,0.4)] transition-all"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>

        {/* Extra Time */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-electric-cyan/5 to-dream-purple/5 backdrop-blur-md p-6 md:p-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <Clock className="w-5 h-5 text-electric-cyan" />
            <h2 className="text-lg font-semibold text-white">Extra Time</h2>
          </div>

          <p className="text-sm text-gray-400 mb-2">
            Need more time beyond your daily limit?
          </p>
          <p className="text-sm text-gray-400 mb-8">
            Add an additional {demoPlan.extraTimeDuration} minutes for just{' '}
            <span className="text-white font-medium">
              {demoPlan.currency}{demoPlan.extraTimePrice}
            </span>
            .
          </p>

          <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-center mb-6">
            <p className="text-3xl font-bold text-white mb-1">
              +{demoPlan.extraTimeDuration} Minutes
            </p>
            <p className="text-lg text-romantic-pink font-semibold">
              {demoPlan.currency}{demoPlan.extraTimePrice}
            </p>
          </div>

          <button
            onClick={() => setExtraTimeOpen(true)}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-medium text-white bg-gradient-to-r from-electric-DEFAULT to-dream-DEFAULT hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
          >
            <Plus className="w-4 h-4" />
            Add Extra Time
          </button>
        </motion.div>
      </div>

      <ExtraTimeModal
        isOpen={extraTimeOpen}
        onClose={() => setExtraTimeOpen(false)}
        price={demoPlan.extraTimePrice}
        duration={demoPlan.extraTimeDuration}
      />
    </>
  );
}

function PlanRow({ label, value, highlight }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
      <span className="text-gray-400">{label}</span>
      <span
        className={`font-medium ${
          highlight ? 'text-romantic-pink text-lg' : 'text-white'
        }`}
      >
        {value}
      </span>
    </div>
  );
}
