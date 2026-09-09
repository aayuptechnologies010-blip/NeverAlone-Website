import React from 'react';
import { motion } from 'framer-motion';
import TrainingModuleCard from '../../components/training/TrainingModuleCard';

const moduleIds = ['listening', 'natural-conversation', 'advice-boundaries', 'relationship', 'safety', 'flirty-mode'];

export default function TrainingModules() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl">
      <h1 className="text-3xl font-bold text-white mb-3">All Modules</h1>
      <p className="text-gray-400 mb-10">Browse and complete each training module.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {moduleIds.map(id => (
          <TrainingModuleCard key={id} moduleId={id} />
        ))}
      </div>
    </motion.div>
  );
}
