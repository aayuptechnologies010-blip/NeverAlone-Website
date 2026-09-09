import React from 'react';
import { motion } from 'framer-motion';
import { useTraining } from '../../components/training/TrainingContext';
import { modulesMeta } from '../../components/training/TrainingModuleCard';
import { CheckCircle2, Circle, Loader } from 'lucide-react';

export default function TrainingProgress() {
  const { getModuleStatus, flirtyModeRequired, completedCount, requiredCount } = useTraining();
  const pct = Math.round((completedCount / requiredCount) * 100);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl">
      <h1 className="text-3xl font-bold text-white mb-3">Training Progress</h1>
      <p className="text-gray-400 mb-10">Track your module completion status.</p>

      {/* Overall */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10">
        <div className="flex items-end justify-between mb-3">
          <p className="text-sm font-bold text-white">Overall</p>
          <p className="text-3xl font-bold text-electric-cyan">{pct}%</p>
        </div>
        <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-electric-cyan rounded-full transition-all duration-700" style={{ width: `${pct}%` }} />
        </div>
      </div>

      {/* Per-module list */}
      <div className="space-y-3">
        {modulesMeta.map(meta => {
          const status = getModuleStatus(meta.id);
          const notRequired = meta.isFlirty && !flirtyModeRequired;
          const Icon = meta.icon;

          return (
            <div key={meta.id} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                meta.isFlirty ? 'bg-romantic-DEFAULT/10' : 'bg-white/10'
              }`}>
                <Icon className={`w-5 h-5 ${meta.isFlirty ? 'text-romantic-pink' : 'text-gray-400'}`} />
              </div>
              <div className="flex-1">
                <p className="font-medium text-white text-sm">{meta.title}</p>
                <p className="text-xs text-gray-500">Module {meta.num}</p>
              </div>
              <div className="flex items-center gap-2">
                {notRequired ? (
                  <span className="text-xs font-bold text-gray-600 uppercase">Not Required</span>
                ) : status === 'completed' ? (
                  <><CheckCircle2 className="w-4 h-4 text-green-400" /><span className="text-xs font-bold text-green-400">Completed</span></>
                ) : status === 'in-progress' ? (
                  <><Loader className="w-4 h-4 text-electric-cyan" /><span className="text-xs font-bold text-electric-cyan">In Progress</span></>
                ) : (
                  <><Circle className="w-4 h-4 text-gray-600" /><span className="text-xs font-bold text-gray-500">Not Started</span></>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
