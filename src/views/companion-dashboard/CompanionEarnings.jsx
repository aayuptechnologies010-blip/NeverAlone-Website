import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, CreditCard, Clock } from 'lucide-react';
import { demoEarnings, demoConversations } from '../../data/companionDashboardData';

export default function CompanionEarnings() {
  const completed = demoConversations.filter(c => c.status === 'completed');

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-1">Earnings</h1>
        <p className="text-gray-400">Track earnings from completed conversations once the platform's payout system is connected.</p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <EarningsCard icon={DollarSign} label="Available Balance" value={`₹ ${demoEarnings.available}`} />
        <EarningsCard icon={Clock} label="Pending" value={`₹ ${demoEarnings.pending}`} />
        <EarningsCard icon={CreditCard} label="Total Paid" value={`₹ ${demoEarnings.totalPaid}`} />
      </div>

      {/* Earnings history */}
      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/5">
          <h3 className="text-sm font-bold text-white uppercase tracking-widest">Earnings History</h3>
        </div>
        
        {/* Table header */}
        <div className="hidden sm:grid grid-cols-5 gap-4 px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-white/5">
          <span>Date</span>
          <span>Conversation</span>
          <span>Duration</span>
          <span>Earning</span>
          <span>Status</span>
        </div>

        {completed.length > 0 ? (
          completed.map(conv => (
            <div key={conv.id} className="grid grid-cols-1 sm:grid-cols-5 gap-2 sm:gap-4 px-6 py-4 border-b border-white/5 hover:bg-white/[0.03] transition-colors">
              <span className="text-sm text-gray-300">{conv.date}</span>
              <span className="text-sm text-white font-medium">{conv.category}</span>
              <span className="text-sm text-gray-400">{conv.duration}</span>
              <span className="text-sm text-gray-500">—</span>
              <span className="text-xs font-bold text-gray-500 uppercase">Pending configuration</span>
            </div>
          ))
        ) : (
          <div className="p-8 text-center text-sm text-gray-500">
            Earnings will appear here after eligible completed conversations once payout rules are configured.
          </div>
        )}
      </div>

      {/* Payout section */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">Payouts</h3>
        
        <div className="flex items-center justify-between mb-6 bg-brand-950 border border-white/10 rounded-xl p-4">
          <div>
            <p className="text-sm font-medium text-gray-300">Payout Method</p>
            <p className="text-xs text-gray-500 mt-0.5">Not configured</p>
          </div>
          <button className="px-4 py-2 rounded-xl text-xs font-semibold text-electric-cyan bg-electric-cyan/10 border border-electric-cyan/20 hover:bg-electric-cyan/20 transition-colors">
            Add Payout Method
          </button>
        </div>

        <div>
          <h4 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-widest">Payout History</h4>
          <div className="bg-brand-950 border border-white/10 rounded-xl p-8 text-center">
            <p className="text-sm text-gray-500">No payouts yet.</p>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-600">Earning rates, payout schedules, and payout methods have not been configured. This is a frontend placeholder.</p>
    </motion.div>
  );
}

function EarningsCard({ icon: Icon, label, value }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
          <Icon className="w-5 h-5 text-gray-400" />
        </div>
      </div>
      <p className="text-xs text-gray-500 font-medium mb-1">{label}</p>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}
