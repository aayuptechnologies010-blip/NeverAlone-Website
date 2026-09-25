import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertTriangle, ShieldAlert } from 'lucide-react';
import { useTraining } from '../../../components/training/TrainingContext';
import LessonSection from '../../../components/training/LessonSection';
import DoDontCard from '../../../components/training/DoDontCard';
import ScenarioQuestion from '../../../components/training/ScenarioQuestion';

export default function ModuleSafety() {
  const { getModuleStatus, setModuleStatus, saveAnswer, getAnswer } = useTraining();
  const navigate = useNavigate();
  const [quizPassed, setQuizPassed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (getModuleStatus('safety') === 'not-started') {
      setModuleStatus('safety', 'in-progress');
    }
    if (getAnswer('safety', 'q1')) setQuizPassed(true);
  }, []);

  const handleQuizComplete = () => {
    saveAnswer('safety', 'q1', true);
    setQuizPassed(true);
  };

  const handleComplete = () => {
    setModuleStatus('safety', 'completed');
    navigate('/companion/training');
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl">
      <p className="text-xs font-bold text-electric-cyan uppercase tracking-widest mb-2">Module 05</p>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Know when a conversation crosses a line.</h1>
      <p className="text-gray-400 leading-relaxed mb-10">
        Safety rules exist to protect both the customer and the companion. Learn what is never allowed and how to respond.
      </p>

      {/* Not allowed */}
      <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 md:p-8 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-red-400" />
          <h3 className="text-lg font-bold text-white">Not Allowed On Never Alone</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
          {[
            'Sexual services', 'Explicit sexual content', 'Explicit images',
            'Harassment', 'Threats', 'Coercion', 'Blackmail', 'Exploitation',
            'Off-platform money requests', 'Pressure for private information',
            'Physical meetup requests'
          ].map(item => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Companion safety */}
      <LessonSection title="Safety protects companions too">
        <div className="bg-electric-cyan/5 border border-electric-cyan/20 rounded-2xl p-6">
          <p className="text-sm text-gray-300 mb-4">A companion can:</p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-electric-cyan" />Set a boundary</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-electric-cyan" />Change the subject</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-electric-cyan" />End the conversation</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-electric-cyan" />Report the customer</li>
          </ul>
          <p className="text-sm text-electric-cyan/80 mt-4 font-medium italic">
            "You never have to continue a conversation that crosses your boundaries."
          </p>
        </div>
      </LessonSection>

      {/* Personal info */}
      <LessonSection title="Personal information">
        <p>Do not request unnecessary personal information from customers:</p>
        <DoDontCard
          doItems={[
            'Keep conversation within the platform.',
            'Use only the information the customer voluntarily shares.',
          ]}
          dontItems={[
            'Request home addresses.',
            'Ask for passwords or OTP codes.',
            'Request bank details or private credentials.',
            'Encourage moving to off-platform arrangements.',
          ]}
        />
      </LessonSection>

      {/* Money rule */}
      <div className="bg-brand-900 border-2 border-red-500/30 rounded-2xl p-6 mb-12">
        <h3 className="text-lg font-bold text-red-300 mb-2">Never request off-platform money from customers.</h3>
        <p className="text-sm text-gray-400">Keep transactions within approved platform systems once implemented.</p>
      </div>

      {/* Offline meetup rule */}
      <div className="bg-brand-900 border-2 border-red-500/30 rounded-2xl p-6 mb-12">
        <h3 className="text-lg font-bold text-red-300 mb-2">No physical meetups.</h3>
        <p className="text-sm text-gray-400">Never Alone is for online phone conversations only. Do not arrange physical meetings through the platform.</p>
      </div>

      {/* Crisis */}
      <LessonSection title="When the situation is beyond a normal conversation">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <ShieldAlert className="w-5 h-5 text-yellow-400" />
            <p className="text-sm font-bold text-white">Never Alone is not an emergency service.</p>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Companions should not try to act as emergency professionals. If someone may be in immediate danger, the platform flow should direct them toward appropriate emergency or crisis resources.
          </p>
        </div>
      </LessonSection>

      <LessonSection label="Knowledge Check">
        <ScenarioQuestion
          question={"A customer says: \"Can I send you money directly?\" What's the correct response direction?"}
          options={[
            { id: 'a', text: 'Accept if the amount is small.' },
            { id: 'b', text: 'Do not accept or request off-platform payment. Keep transactions within approved platform systems once implemented.' },
            { id: 'c', text: 'Share your bank details privately.' },
          ]}
          correctId="b"
          explanation="Off-platform money transactions are never allowed. All payments should go through approved platform systems."
          onComplete={handleQuizComplete}
          savedAnswer={getAnswer('safety', 'q1') ? 'b' : null}
        />
      </LessonSection>

      <div className="flex items-center justify-between pt-8 border-t border-white/10 mt-12">
        <Link to="/companion/training" className="px-6 py-3 rounded-full text-sm font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors">
          ← Back
        </Link>
        {quizPassed ? (
          <button onClick={handleComplete} className="px-8 py-3 rounded-full text-sm font-semibold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            {getModuleStatus('safety') === 'completed' ? 'Continue Training' : 'Complete Module'}
          </button>
        ) : (
          <span className="text-sm text-gray-500">Complete the knowledge check to continue.</span>
        )}
      </div>
    </motion.div>
  );
}
