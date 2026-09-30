import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, CheckCircle2, Clock, Lock } from 'lucide-react';
import { useTraining } from '../../components/training/TrainingContext';

export default function TrainingReview() {
  const { allRequiredComplete, flirtyModeRequired, trainingComplete, setTrainingComplete } = useTraining();
  const navigate = useNavigate();

  const [declBoundaries, setDeclBoundaries] = useState(false);
  const [declSafety, setDeclSafety] = useState(false);
  const [declFlirty, setDeclFlirty] = useState(false);
  const [error, setError] = useState('');

  if (!allRequiredComplete && !trainingComplete) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl py-12 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Complete all required modules first.</h2>
        <p className="text-gray-400 mb-8">You need to finish every required training module before reviewing and completing training.</p>
        <Link to="/companion/training" className="px-6 py-3 rounded-full text-sm font-semibold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors">
          Back to Training
        </Link>
      </motion.div>
    );
  }

  if (trainingComplete) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto py-16 text-center"
      >
        <div className="w-24 h-24 rounded-full bg-electric-cyan/10 flex items-center justify-center mx-auto mb-8 relative">
          <Heart className="w-12 h-12 text-electric-cyan fill-electric-cyan/20" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Training complete.</h1>
        <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto leading-relaxed">
          You've completed the required companion training modules.
        </p>

        <div className="text-xs font-mono bg-white/5 text-gray-500 px-4 py-2 rounded-lg border border-white/10 inline-block mb-12">
          Backend integration pending
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-12 text-left max-w-sm mx-auto">
          <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Next Steps</h4>
          <div className="space-y-4">
            <StepItem num="1" title="Training" status="done" />
            <StepItem num="2" title="Approval" status="next" />
            <StepItem num="3" title="Available For Conversations" status="locked" />
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-8">
          Training completion does not automatically grant approval. Your application and training will be reviewed.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="px-8 py-4 rounded-full text-base font-semibold text-brand-950 bg-white hover:bg-gray-200 transition-colors"
          >
            Back To Home
          </Link>
          <Link
            to="/about"
            className="px-8 py-4 rounded-full text-base font-medium text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
          >
            Learn About Neuravia
          </Link>
        </div>
      </motion.div>
    );
  }

  const handleFinish = () => {
    const allChecked = declBoundaries && declSafety && (!flirtyModeRequired || declFlirty);
    if (!allChecked) {
      setError('You must agree to all declarations.');
      return;
    }
    setTrainingComplete(true);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Training Review</h1>
      <p className="text-gray-400 mb-10">You've completed all required modules. Review the core principles and acknowledge the guidelines.</p>

      {/* Principles summary */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-8">
        <h3 className="text-lg font-bold text-white mb-4">Core Principles</h3>
        <ul className="space-y-3 text-sm text-gray-300">
          <li className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-electric-cyan flex-shrink-0 mt-0.5" />Listen before advising.</li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-electric-cyan flex-shrink-0 mt-0.5" />Respect boundaries — yours and theirs.</li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-electric-cyan flex-shrink-0 mt-0.5" />Stay within your role. Companions are not therapists.</li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-electric-cyan flex-shrink-0 mt-0.5" />Protect privacy. Do not request unnecessary personal information.</li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-electric-cyan flex-shrink-0 mt-0.5" />Never arrange physical meetups.</li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-electric-cyan flex-shrink-0 mt-0.5" />Use reporting when necessary.</li>
          {flirtyModeRequired && (
            <li className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-romantic-pink flex-shrink-0 mt-0.5" />Flirty Mode stays consensual and non-explicit.</li>
          )}
        </ul>
      </div>

      {/* Declarations */}
      <div className="space-y-4 mb-10">
        <Checkbox
          checked={declBoundaries}
          onChange={setDeclBoundaries}
          label="I understand the boundaries of the companion role."
        />
        <Checkbox
          checked={declSafety}
          onChange={setDeclSafety}
          label="I agree to follow Neuravia's safety and conversation guidelines."
        />
        {flirtyModeRequired && (
          <Checkbox
            checked={declFlirty}
            onChange={setDeclFlirty}
            label="I understand and agree to the additional Flirty Mode boundaries."
            pink
          />
        )}
        {error && <p className="text-red-400 text-sm">{error}</p>}
      </div>

      <button
        onClick={handleFinish}
        className="px-10 py-4 rounded-xl text-base font-bold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.2)]"
      >
        Complete Training
      </button>
    </motion.div>
  );
}

function Checkbox({ checked, onChange, label, pink }) {
  return (
    <label className="flex items-start gap-3 cursor-pointer group">
      <div className="relative flex items-center justify-center mt-0.5">
        <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="sr-only" />
        <div className={`w-5 h-5 border-2 rounded transition-colors ${
          checked
            ? pink ? 'bg-romantic-DEFAULT border-romantic-DEFAULT' : 'bg-electric-cyan border-electric-cyan'
            : 'border-gray-500 group-hover:border-electric-cyan/50'
        }`}>
          {checked && (
            <svg className="w-4 h-4 text-brand-950 absolute top-0.5 left-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>
      <p className={`text-sm font-medium ${checked ? 'text-white' : 'text-gray-300'}`}>{label}</p>
    </label>
  );
}

function StepItem({ num, title, status }) {
  const colors = {
    done: 'bg-green-500/10 text-green-400 border-green-500/30',
    next: 'bg-electric-cyan/10 text-electric-cyan border-electric-cyan/30',
    locked: 'bg-white/5 text-gray-600 border-white/10',
  }[status];

  const Icon = { done: CheckCircle2, next: Clock, locked: Lock }[status];

  return (
    <div className="flex items-center gap-4">
      <div className={`w-8 h-8 rounded-full border flex items-center justify-center ${colors}`}>
        <Icon className="w-4 h-4" />
      </div>
      <span className={`font-medium ${status === 'locked' ? 'text-gray-600' : 'text-white'}`}>{title}</span>
      {status === 'done' && <span className="text-xs text-green-400 font-bold ml-auto">✓</span>}
    </div>
  );
}
