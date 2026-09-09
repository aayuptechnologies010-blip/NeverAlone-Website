import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, BookOpen, ShieldCheck, Lock } from 'lucide-react';

const journey = [
  { label: 'Application', icon: CheckCircle2, status: 'done' },
  { label: 'Verification', icon: Clock, status: 'pending' },
  { label: 'Training', icon: BookOpen, status: 'current' },
  { label: 'Approval', icon: ShieldCheck, status: 'upcoming' },
  { label: 'Available For Conversations', icon: Lock, status: 'locked' },
];

export default function CompanionOnboarding() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-brand-950 font-sans text-warm-white flex items-center justify-center px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full text-center"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
          <span className="text-xs font-semibold text-electric-cyan uppercase tracking-wider">
            Companion Onboarding
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Great conversations start <br className="hidden md:block" />
          with good listening.
        </h1>

        <p className="text-lg text-gray-400 mb-12 max-w-lg mx-auto leading-relaxed">
          Before becoming available for conversations, learn the principles that keep Never Alone respectful, comfortable and safe.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Link
            to="/companion/training"
            className="px-8 py-4 rounded-full text-base font-semibold text-brand-950 bg-white hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Start Training
          </Link>
          <Link
            to="/companion/training/guidelines"
            className="px-8 py-4 rounded-full text-base font-medium text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
          >
            Review Companion Guidelines
          </Link>
        </div>

        {/* Journey */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-left">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Your Journey</h3>
          <div className="space-y-4">
            {journey.map((step, idx) => {
              const Icon = step.icon;
              const colors = {
                done: 'text-green-400 bg-green-500/10 border-green-500/30',
                pending: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30',
                current: 'text-electric-cyan bg-electric-cyan/10 border-electric-cyan/30',
                upcoming: 'text-gray-500 bg-white/5 border-white/10',
                locked: 'text-gray-600 bg-white/5 border-white/10 opacity-50',
              }[step.status];

              return (
                <div key={idx} className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${colors}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium ${step.status === 'locked' ? 'text-gray-600' : 'text-white'}`}>
                      {step.label}
                    </p>
                    {step.status === 'done' && <p className="text-xs text-green-400">Completed (Demo)</p>}
                    {step.status === 'pending' && <p className="text-xs text-yellow-400">Pending (Demo)</p>}
                    {step.status === 'current' && <p className="text-xs text-electric-cyan">Current Step</p>}
                  </div>
                  {idx < journey.length - 1 && (
                    <div className="hidden sm:block w-px h-6 bg-white/10 ml-5" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
