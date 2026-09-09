import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Flame, AlertCircle } from 'lucide-react';
import { useTraining } from '../../../components/training/TrainingContext';
import LessonSection from '../../../components/training/LessonSection';
import DoDontCard from '../../../components/training/DoDontCard';
import ConversationExample from '../../../components/training/ConversationExample';
import ScenarioQuestion from '../../../components/training/ScenarioQuestion';

export default function ModuleFlirty() {
  const { getModuleStatus, setModuleStatus, saveAnswer, getAnswer } = useTraining();
  const navigate = useNavigate();
  const [quiz1Passed, setQuiz1Passed] = useState(false);
  const [quiz2Passed, setQuiz2Passed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (getModuleStatus('flirty-mode') === 'not-started') {
      setModuleStatus('flirty-mode', 'in-progress');
    }
    if (getAnswer('flirty-mode', 'q1')) setQuiz1Passed(true);
    if (getAnswer('flirty-mode', 'q2')) setQuiz2Passed(true);
  }, []);

  const handleComplete = () => {
    setModuleStatus('flirty-mode', 'completed');
    navigate('/companion/training');
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl">
      <div className="flex items-center gap-3 mb-2">
        <p className="text-xs font-bold text-romantic-pink uppercase tracking-widest">Module 06</p>
        <span className="px-2 py-0.5 rounded-full bg-romantic-DEFAULT/10 border border-romantic-DEFAULT/20 text-romantic-200 text-xs font-semibold">
          18+ • Additional Training
        </span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Playful still means respectful.</h1>
      <p className="text-gray-400 leading-relaxed mb-10">
        Flirty Mode allows light, playful, consensual conversation. This module covers where the boundaries are.
      </p>

      <LessonSection title="What Flirty Mode can include">
        <ul className="space-y-3">
          <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-romantic-pink mt-2 flex-shrink-0" />Playful conversation</li>
          <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-romantic-pink mt-2 flex-shrink-0" />Fun banter</li>
          <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-romantic-pink mt-2 flex-shrink-0" />Compliments</li>
          <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-romantic-pink mt-2 flex-shrink-0" />Personality-based conversation</li>
          <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-romantic-pink mt-2 flex-shrink-0" />Light romantic conversation</li>
          <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-romantic-pink mt-2 flex-shrink-0" />Mutual non-explicit flirting</li>
        </ul>
      </LessonSection>

      {/* Absolute boundaries */}
      <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 md:p-8 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="w-6 h-6 text-red-400" />
          <h3 className="text-lg font-bold text-white">Flirty Mode Absolute Boundaries</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
          {[
            'Sexual services', 'Explicit sexual content', 'Explicit images',
            'Harassment', 'Coercion', 'Blackmail',
            'Physical meetups', 'Pressure for personal information'
          ].map(item => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Consent */}
      <LessonSection title="Consent can change at any time">
        <div className="bg-romantic-DEFAULT/5 border border-romantic-DEFAULT/20 rounded-2xl p-6">
          <p className="text-sm text-gray-300 mb-4">If the other person becomes uncomfortable:</p>
          <ul className="space-y-2 text-sm text-gray-300 mb-4">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-romantic-pink" />Stop the flirty tone immediately.</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-romantic-pink" />Change the topic.</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-romantic-pink" />Respect their boundary immediately.</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-romantic-pink" />Do not pressure them to continue.</li>
          </ul>
          <p className="text-sm text-romantic-200/80 font-medium italic">
            Likewise, you may set your own boundary at any time.
          </p>
        </div>
      </LessonSection>

      <LessonSection title="Do's and Don'ts">
        <DoDontCard
          doItems={[
            '"You have a great sense of humour."',
            'Keep things light and playful.',
            'Respect when the tone shifts.',
            'Enjoy the conversation within boundaries.',
          ]}
          dontItems={[
            'Push for explicit content.',
            'Ignore when someone wants to change the topic.',
            'Pressure them to stay in flirty mode.',
            'Request images or personal contact details.',
          ]}
        />
      </LessonSection>

      <LessonSection label="Knowledge Check 1" title="Explicit content scenario">
        <ScenarioQuestion
          question={"A customer says: \"Let's make this more explicit.\" What should you do?"}
          options={[
            { id: 'a', text: 'Continue because they requested it.' },
            { id: 'b', text: 'Politely keep the conversation within non-explicit boundaries.' },
          ]}
          correctId="b"
          explanation={"\"I'm happy to keep things playful, but let's keep it non-explicit.\" Explicit content is never allowed, even if requested."}
          onComplete={() => { saveAnswer('flirty-mode', 'q1', true); setQuiz1Passed(true); }}
          savedAnswer={getAnswer('flirty-mode', 'q1') ? 'b' : null}
        />
      </LessonSection>

      <LessonSection label="Knowledge Check 2" title="Meetup scenario">
        <ScenarioQuestion
          question={"A customer says: \"Can we meet sometime?\" What's the correct direction?"}
          options={[
            { id: 'a', text: 'Share your location details.' },
            { id: 'b', text: 'Politely explain that Never Alone conversations remain online/phone-based and physical meetups are not part of the service.' },
            { id: 'c', text: 'Say maybe and keep the conversation going.' },
          ]}
          correctId="b"
          explanation="Physical meetups are never arranged through Never Alone. Politely redirect while keeping the conversation comfortable."
          onComplete={() => { saveAnswer('flirty-mode', 'q2', true); setQuiz2Passed(true); }}
          savedAnswer={getAnswer('flirty-mode', 'q2') ? 'b' : null}
        />
      </LessonSection>

      <div className="flex items-center justify-between pt-8 border-t border-white/10 mt-12">
        <Link to="/companion/training" className="px-6 py-3 rounded-full text-sm font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors">
          ← Back
        </Link>
        {quiz1Passed && quiz2Passed ? (
          <button onClick={handleComplete} className="px-8 py-3 rounded-full text-sm font-semibold text-brand-950 bg-romantic-DEFAULT hover:bg-romantic-DEFAULT/90 transition-colors shadow-[0_0_15px_rgba(244,114,182,0.2)]">
            {getModuleStatus('flirty-mode') === 'completed' ? 'Continue Training' : 'Complete Module'}
          </button>
        ) : (
          <span className="text-sm text-gray-500">Complete both knowledge checks to continue.</span>
        )}
      </div>
    </motion.div>
  );
}
