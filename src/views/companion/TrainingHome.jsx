import React from 'react';
import { motion } from 'framer-motion';
import { useTraining } from '../../components/training/TrainingContext';
import TrainingModuleCard from '../../components/training/TrainingModuleCard';

const moduleIds = ['listening', 'natural-conversation', 'advice-boundaries', 'relationship', 'safety', 'flirty-mode'];

export default function TrainingHome() {
  const { completedCount, requiredCount } = useTraining();
  const pct = Math.round((completedCount / requiredCount) * 100);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl"
    >
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Companion Training</h1>
        <p className="text-gray-400 leading-relaxed">
          Complete the required modules to understand conversation skills, boundaries and safety.
        </p>
      </div>

      {/* Progress bar */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-bold text-white">{completedCount} of {requiredCount} modules completed</p>
          <span className="text-sm font-bold text-electric-cyan">{pct}%</span>
        </div>
        <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-electric-cyan to-dream-purple rounded-full transition-all duration-700"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-3">
          This is a frontend demo. Progress is stored locally and not sent to a server.
        </p>
      </div>

      {/* Module grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {moduleIds.map(id => (
          <TrainingModuleCard key={id} moduleId={id} />
        ))}
      </div>
    </motion.div>
  );
}
