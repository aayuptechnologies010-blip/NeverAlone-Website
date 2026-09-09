import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Clock, MessageSquare, CalendarDays, DollarSign,
  User, ShieldCheck, CheckCircle2, ChevronRight, Mic, Volume2, Phone
} from 'lucide-react';
import { demoCompanion, demoConversations } from '../../data/companionDashboardData';

export default function CompanionOverview() {
  const upcoming = demoConversations.filter(c => c.status === 'upcoming');
  const completed = demoConversations.filter(c => c.status === 'completed' && c.date === 'Today');
  const next = upcoming[0];

  // Approval gate
  if (demoCompanion.status !== 'approved') {
    return <ApprovalPending status={demoCompanion.status} />;
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-5xl space-y-8">
      {/* Today header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-1">Today</h1>
        <p className="text-gray-400">Your conversations and availability at a glance.</p>
      </div>

      {/* Next Conversation — primary card */}
      {next ? (
        <div className="bg-gradient-to-br from-electric-cyan/10 to-brand-900 border border-electric-cyan/20 rounded-3xl p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-electric-cyan/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative z-10">
            <p className="text-xs font-bold text-electric-cyan uppercase tracking-widest mb-4">Next Conversation</p>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-lg font-bold text-electric-cyan">
                    {next.customer[0]}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{next.customer}</h3>
                    <span className="text-sm text-gray-400">{next.category}</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <span className="text-white font-medium">{next.date} • {next.time}</span>
                  <span className="text-gray-400">{next.duration}</span>
                  <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20">Confirmed</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Link to={`/companion/conversations`} className="px-5 py-2.5 rounded-xl text-sm font-semibold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
          <p className="text-gray-400">No conversations scheduled yet.</p>
        </div>
      )}

      {/* Quick summary cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <SummaryCard label="Today's Conversations" value={upcoming.length + completed.length} />
        <SummaryCard label="Upcoming" value={upcoming.length} />
        <SummaryCard label="Completed" value={completed.length} />
        <SummaryCard label="Available Hours" value={demoCompanion.todayHours} small />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Today's timeline */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-widest">Today's Conversations</h3>
          <div className="space-y-4">
            {demoConversations.filter(c => c.date === 'Today').map(conv => (
              <div key={conv.id} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="text-center min-w-[60px]">
                  <p className="text-sm font-bold text-white">{conv.time}</p>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">{conv.category}</p>
                  <p className="text-xs text-gray-500">{conv.customer} • {conv.duration}</p>
                </div>
                <span className={`text-xs font-bold uppercase ${
                  conv.status === 'completed' ? 'text-green-400' : 'text-electric-cyan'
                }`}>{conv.status === 'completed' ? 'Done' : 'Upcoming'}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {/* Availability quick control */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-widest">Availability</h3>
              <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20">Available Today</span>
            </div>
            <p className="text-lg text-white font-medium mb-4">{demoCompanion.todayHours}</p>
            <p className="text-xs text-gray-500 mb-4">Update your availability if your schedule changes.</p>
            <Link to="/companion/availability" className="text-sm font-semibold text-electric-cyan hover:text-white transition-colors flex items-center gap-1">
              Manage Availability <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Before your next conversation */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-widest">Before your next conversation</h3>
            <ul className="space-y-3">
              {[
                'Find a quiet place',
                'Be ready on time',
                'Review the conversation category',
                'Respect privacy and boundaries',
                'Keep Report / End controls accessible'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-electric-cyan/60 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div>
        <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-widest">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <QuickAction to="/companion/schedule" icon={CalendarDays} label="View Schedule" />
          <QuickAction to="/companion/availability" icon={Clock} label="Update Availability" />
          <QuickAction to="/companion/conversations" icon={MessageSquare} label="History" />
          <QuickAction to="/companion/earnings" icon={DollarSign} label="View Earnings" />
          <QuickAction to="/companion/safety" icon={ShieldCheck} label="Safety & Support" />
          <QuickAction to="/companion/profile" icon={User} label="Edit Profile" />
        </div>
      </div>
    </motion.div>
  );
}

function SummaryCard({ label, value, small }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
      <p className="text-xs text-gray-500 mb-1 font-medium">{label}</p>
      <p className={`font-bold text-white ${small ? 'text-sm' : 'text-2xl'}`}>{value}</p>
    </div>
  );
}

function QuickAction({ to, icon: Icon, label }) {
  return (
    <Link to={to} className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-colors text-center">
      <Icon className="w-5 h-5 text-gray-400" />
      <span className="text-xs font-medium text-gray-300">{label}</span>
    </Link>
  );
}

function ApprovalPending({ status }) {
  const messages = {
    'application-pending': { title: 'Application Pending', desc: 'Your application has been submitted and is waiting for review.' },
    'training-required': { title: 'Training Required', desc: 'Please complete the required training modules before your application can proceed.' },
    'approval-pending': { title: 'Approval Pending', desc: 'Your application and training are complete. Your profile is waiting for platform approval.' },
    'suspended': { title: 'Account Restricted', desc: 'Your companion account is currently restricted. Please contact support for assistance.' },
  };
  const msg = messages[status] || messages['approval-pending'];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-xl mx-auto py-16 text-center">
      <div className="w-20 h-20 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto mb-6">
        <Clock className="w-10 h-10 text-yellow-400" />
      </div>
      <h2 className="text-2xl font-bold text-white mb-3">{msg.title}</h2>
      <p className="text-gray-400 leading-relaxed mb-8">{msg.desc}</p>
      {status === 'training-required' && (
        <Link to="/companion/training" className="px-6 py-3 rounded-full text-sm font-semibold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors">
          Go To Training
        </Link>
      )}
    </motion.div>
  );
}
