import React from 'react';
import { Link } from 'react-router-dom';
import { useTraining } from './TrainingContext';
import { Headphones, MessageCircle, Shield, Heart, AlertTriangle, Flame, Lock, CheckCircle2, ArrowRight } from 'lucide-react';

const modulesMeta = [
  { id: 'listening', num: '01', title: 'Listening Well', icon: Headphones, desc: 'Learn to give people space to speak and be heard.' },
  { id: 'natural-conversation', num: '02', title: 'Keeping Conversation Natural', icon: MessageCircle, desc: 'Make conversations feel human, not scripted.' },
  { id: 'advice-boundaries', num: '03', title: 'Friendly Advice & Boundaries', icon: Shield, desc: 'Understand the limits of companion advice.' },
  { id: 'relationship', num: '04', title: 'Relationship & Personal Conversations', icon: Heart, desc: 'Handle relationship topics responsibly.' },
  { id: 'safety', num: '05', title: 'Safety & Difficult Situations', icon: AlertTriangle, desc: 'Recognise when a conversation crosses a line.' },
  { id: 'flirty-mode', num: '06', title: 'Flirty Mode Training', icon: Flame, desc: 'Playful still means respectful.', isFlirty: true },
];

export default function TrainingModuleCard({ moduleId }) {
  const { getModuleStatus, flirtyModeRequired } = useTraining();
  const meta = modulesMeta.find(m => m.id === moduleId);
  if (!meta) return null;

  const status = getModuleStatus(moduleId);
  const Icon = meta.icon;

  // Flirty mode conditional visibility
  const isFlirty = meta.isFlirty;
  const notRequired = isFlirty && !flirtyModeRequired;

  const statusLabel = notRequired ? 'Not Required' : {
    'not-started': 'Not Started',
    'in-progress': 'In Progress',
    'completed': 'Completed',
    'locked': 'Locked',
  }[status] || 'Not Started';

  const statusColor = notRequired ? 'text-gray-600' : {
    'not-started': 'text-gray-500',
    'in-progress': 'text-electric-cyan',
    'completed': 'text-green-400',
    'locked': 'text-gray-600',
  }[status] || 'text-gray-500';

  const ctaText = status === 'completed' ? 'Review' : status === 'in-progress' ? 'Continue' : 'Start Module';
  const isLocked = status === 'locked';

  return (
    <div className={`bg-white/5 border rounded-2xl p-6 transition-all ${
      isFlirty && !notRequired ? 'border-romantic-DEFAULT/20' : 'border-white/10'
    } ${isLocked || notRequired ? 'opacity-60' : 'hover:bg-white/[0.07] hover:border-white/20'}`}>
      
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
          isFlirty ? 'bg-romantic-DEFAULT/10' : 'bg-white/10'
        }`}>
          <Icon className={`w-6 h-6 ${isFlirty ? 'text-romantic-pink' : 'text-gray-400'}`} />
        </div>
        <div className="flex items-center gap-2">
          {status === 'completed' && <CheckCircle2 className="w-4 h-4 text-green-400" />}
          {isLocked && <Lock className="w-4 h-4 text-gray-600" />}
          <span className={`text-xs font-semibold uppercase tracking-wider ${statusColor}`}>
            {statusLabel}
          </span>
        </div>
      </div>

      <p className="text-xs text-gray-500 font-semibold mb-1">Module {meta.num}</p>
      <h3 className="text-lg font-semibold text-white mb-2">{meta.title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed mb-6">{meta.desc}</p>

      {isFlirty && (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-romantic-DEFAULT/10 text-romantic-200 text-xs font-semibold mb-4 border border-romantic-DEFAULT/20">
          18+ • Additional Training
        </span>
      )}

      {!isLocked && !notRequired && (
        <Link
          to={`/companion/training/${moduleId}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-electric-cyan hover:text-white transition-colors"
        >
          {ctaText} <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
}

export { modulesMeta };
