import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTraining } from '../../../components/training/TrainingContext';
import LessonSection from '../../../components/training/LessonSection';
import DoDontCard from '../../../components/training/DoDontCard';
import ConversationExample from '../../../components/training/ConversationExample';
import ScenarioQuestion from '../../../components/training/ScenarioQuestion';

export default function ModuleListening() {
  const { getModuleStatus, setModuleStatus, saveAnswer, getAnswer } = useTraining();
  const navigate = useNavigate();
  const [quizPassed, setQuizPassed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (getModuleStatus('listening') === 'not-started') {
      setModuleStatus('listening', 'in-progress');
    }
    if (getAnswer('listening', 'q1')) setQuizPassed(true);
  }, []);

  const handleQuizComplete = () => {
    saveAnswer('listening', 'q1', true);
    setQuizPassed(true);
  };

  const handleComplete = () => {
    setModuleStatus('listening', 'completed');
    navigate('/companion/training');
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl">
      {/* Header */}
      <div className="mb-2">
        <p className="text-xs font-bold text-electric-cyan uppercase tracking-widest mb-2">Module 01</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Listening is more than waiting to speak.</h1>
        <p className="text-gray-400 leading-relaxed mb-10">
          Good listening isn't about having the right words ready. It's about giving the other person space to share what's on their mind.
        </p>
      </div>

      <LessonSection title="What good listening looks like">
        <ul className="space-y-3">
          <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />Give the other person space to speak.</li>
          <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />Avoid interrupting unnecessarily.</li>
          <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />Ask open-ended questions.</li>
          <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />Acknowledge what they said before moving on.</li>
          <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />Do not immediately turn every conversation into your own story.</li>
          <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />Do not assume you know how they feel.</li>
        </ul>
      </LessonSection>

      <LessonSection title="Example conversation">
        <ConversationExample
          personSays="I've had a really exhausting week."
          goodResponse="That sounds like a lot. What's been taking most of your energy?"
          avoidResponse="Everyone has stressful weeks."
          avoidReason="Dismissive responses shut down conversation and make the person feel unheard."
        />
      </LessonSection>

      <LessonSection title="Do's and Don'ts">
        <DoDontCard
          doItems={[
            'Let them finish their thought before responding.',
            'Ask follow-up questions based on what they said.',
            'Use phrases like "Tell me more" or "How did that feel?"',
            'Be comfortable with brief pauses.',
          ]}
          dontItems={[
            'Interrupt to share your own similar experience.',
            'Immediately offer solutions they didn\'t ask for.',
            'Say "I know exactly how you feel."',
            'Rush them to get to the point.',
          ]}
        />
      </LessonSection>

      <LessonSection label="Knowledge Check" title="Practice scenario">
        <ScenarioQuestion
          question={'Someone says: "I don\'t really know why I called. I just wanted to talk." Which response feels more appropriate?'}
          options={[
            { id: 'a', text: '"Then what do you want me to do?"' },
            { id: 'b', text: '"That\'s okay. We can just talk. How has your day been?"' },
            { id: 'c', text: '"You should probably call someone else."' },
          ]}
          correctId="b"
          explanation="They don't need to arrive with a perfect topic. Making them feel welcome to simply talk is the right approach."
          onComplete={handleQuizComplete}
          savedAnswer={getAnswer('listening', 'q1') ? 'b' : null}
        />
      </LessonSection>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-white/10 mt-12">
        <Link to="/companion/training" className="px-6 py-3 rounded-full text-sm font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors">
          ← Back
        </Link>
        {quizPassed ? (
          <button
            onClick={handleComplete}
            className="px-8 py-3 rounded-full text-sm font-semibold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.2)]"
          >
            {getModuleStatus('listening') === 'completed' ? 'Continue Training' : 'Complete Module'}
          </button>
        ) : (
          <span className="text-sm text-gray-500">Complete the knowledge check to continue.</span>
        )}
      </div>
    </motion.div>
  );
}
