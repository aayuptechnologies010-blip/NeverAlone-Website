import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CreditCard } from 'lucide-react';

// Shows current subscription plan details.
export default function CurrentPlanCard({ plan }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6"
    >
      <div className="flex items-center gap-2 mb-5">
        <CreditCard className="w-4 h-4 text-dream-purple" />
        <h3 className="text-sm font-semibold text-gray-300">My Plan</h3>
      </div>

      <div className="space-y-3 text-sm mb-6">
        <div className="flex justify-between">
          <span className="text-gray-400">Plan</span>
          <span className="text-white font-medium">{plan.type}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Price</span>
          <span className="text-white font-medium">
            {plan.currency}{plan.price.toLocaleString('en-IN')}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Duration</span>
          <span className="text-white font-medium">{plan.durationDays} Days</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Daily</span>
          <span className="text-white font-medium">
            {plan.dailyMinutes} Min / Day
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Renewal</span>
          <span className="text-white font-medium">{plan.renewalDate}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Link
          to="/dashboard/plan"
          className="px-4 py-2 rounded-full text-xs font-medium text-white bg-gradient-to-r from-romantic-DEFAULT/80 to-dream-purple/80 hover:shadow-[0_0_12px_rgba(219,39,119,0.3)] transition-all"
        >
          View Plan
        </Link>
        <Link
          to="/dashboard/plan"
          className="px-4 py-2 rounded-full text-xs font-medium text-gray-300 border border-white/10 hover:bg-white/5 transition-colors"
        >
          Manage Plan
        </Link>
      </div>
    </motion.div>
  );
}
