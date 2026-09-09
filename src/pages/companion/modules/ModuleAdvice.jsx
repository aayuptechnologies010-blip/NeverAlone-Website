import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { useTraining } from '../../../components/training/TrainingContext';
import LessonSection from '../../../components/training/LessonSection';
import DoDontCard from '../../../components/training/DoDontCard';
import ScenarioQuestion from '../../../components/training/ScenarioQuestion';

export default function ModuleAdvice() {
  const { getModuleStatus, setModuleStatus, saveAnswer, getAnswer } = useTraining();
  const navigate = useNavigate();
  const [quizPassed, setQuizPassed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (getModuleStatus('advice-boundaries') === 'not-started') {
      setModuleStatus('advice-boundaries', 'in-progress');
    }
    if (getAnswer('advice-boundaries', 'q1')) setQuizPassed(true);
  }, []);

  const handleQuizComplete = () => {
    saveAnswer('advice-boundaries', 'q1', true);
    setQuizPassed(true);
  };

  const handleComplete = () => {
    setModuleStatus('advice-boundaries', 'completed');
    navigate('/companion/training');
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl">
      <p className="text-xs font-bold text-electric-cyan uppercase tracking-widest mb-2">Module 03</p>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        You can offer perspective. <br className="hidden md:block" />
        You don't have to have the answer.
      </h1>
      <p className="text-gray-400 leading-relaxed mb-10">
        Companions can share friendly thoughts and perspectives. But there are clear boundaries around what companions should not do.
      </p>

      <LessonSection title="What companions may provide">
        <ul className="space-y-3">
          <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />Friendly perspectives</li>
          <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />General advice based on personal experience</li>
          <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />Conversation and listening</li>
          <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />Personal observations</li>
        </ul>
      </LessonSection>

      {/* Critical card */}
      <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 md:p-8 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="w-6 h-6 text-red-400" />
          <h3 className="text-lg font-bold text-white">Critical Mental-Health Boundary</h3>
        </div>
        <p className="text-sm text-gray-300 mb-4">Regular companions must NOT:</p>
        <ul className="space-y-2 text-sm text-gray-400">
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400" /> Diagnose any condition</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400" /> Prescribe medication</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400" /> Provide clinical treatment</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400" /> Claim to be a therapist</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400" /> Tell someone to stop prescribed treatment</li>
        </ul>
        <div className="mt-6 bg-electric-cyan/5 border border-electric-cyan/20 rounded-xl p-4">
          <p className="text-sm text-electric-cyan/90">
            Professional Support is a separate service for appropriately qualified and verified professionals.
          </p>
        </div>
      </div>

      <LessonSection title="Do's and Don'ts">
        <DoDontCard
          doItems={[
            '"From my perspective, that sounds difficult."',
            '"Have you considered talking to someone who specialises in that?"',
            'Share a personal thought when appropriate.',
            'Acknowledge you don\'t have all the answers.',
          ]}
          dontItems={[
            '"You definitely have anxiety."',
            '"You should stop taking that medication."',
            '"I\'m basically a therapist."',
            'Provide a clinical-style assessment.',
          ]}
        />
      </LessonSection>

      <LessonSection label="Knowledge Check" title="Scenario">
        <ScenarioQuestion
          question='Someone says: "Do you think I have depression?" Which response is appropriate?'
          options={[
            { id: 'a', text: '"Yes, that definitely sounds like depression."' },
            { id: 'b', text: '"I can\'t diagnose that, but I can listen to what you\'ve been experiencing. If you\'re concerned about your mental health, qualified professional support may be more appropriate."' },
            { id: 'c', text: '"Just try to be more positive."' },
          ]}
          correctId="b"
          explanation="Companions should never diagnose. Acknowledge their experience, listen, and gently suggest professional support if appropriate."
          onComplete={handleQuizComplete}
          savedAnswer={getAnswer('advice-boundaries', 'q1') ? 'b' : null}
        />
      </LessonSection>

      <div className="flex items-center justify-between pt-8 border-t border-white/10 mt-12">
        <Link to="/companion/training" className="px-6 py-3 rounded-full text-sm font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors">
          ← Back
        </Link>
        {quizPassed ? (
          <button onClick={handleComplete} className="px-8 py-3 rounded-full text-sm font-semibold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            {getModuleStatus('advice-boundaries') === 'completed' ? 'Continue Training' : 'Complete Module'}
          </button>
        ) : (
          <span className="text-sm text-gray-500">Complete the knowledge check to continue.</span>
        )}
      </div>
    </motion.div>
  );
}
