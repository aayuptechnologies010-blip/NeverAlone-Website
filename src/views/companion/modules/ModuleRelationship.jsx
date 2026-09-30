import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTraining } from '../../../components/training/TrainingContext';
import LessonSection from '../../../components/training/LessonSection';
import DoDontCard from '../../../components/training/DoDontCard';
import ConversationExample from '../../../components/training/ConversationExample';
import ScenarioQuestion from '../../../components/training/ScenarioQuestion';

export default function ModuleRelationship() {
  const { getModuleStatus, setModuleStatus, saveAnswer, getAnswer } = useTraining();
  const navigate = useNavigate();
  const [quizPassed, setQuizPassed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (getModuleStatus('relationship') === 'not-started') {
      setModuleStatus('relationship', 'in-progress');
    }
    if (getAnswer('relationship', 'q1')) setQuizPassed(true);
  }, []);

  const handleQuizComplete = () => {
    saveAnswer('relationship', 'q1', true);
    setQuizPassed(true);
  };

  const handleComplete = () => {
    setModuleStatus('relationship', 'completed');
    navigate('/companion/training');
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl">
      <p className="text-xs font-bold text-electric-cyan uppercase tracking-widest mb-2">Module 04</p>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Support the conversation, <br className="hidden md:block" />not a side.
      </h1>
      <p className="text-gray-400 leading-relaxed mb-10">
        Relationship and personal conversations are some of the most common on Neuravia. Learn how to navigate them responsibly.
      </p>

      <LessonSection title="Topics you'll encounter">
        <div className="flex flex-wrap gap-2">
          {['Dating', 'Communication', 'Breakups', 'Misunderstandings', 'Friendship', 'Trust', 'Moving On', 'Family', 'Boundaries', 'Decisions'].map(t => (
            <span key={t} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">{t}</span>
          ))}
        </div>
      </LessonSection>

      <LessonSection title="Key principles">
        <ul className="space-y-3">
          <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />Listen before giving opinions.</li>
          <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />Avoid controlling instructions ("You must leave them").</li>
          <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />Do not pressure users into major decisions.</li>
          <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />Do not automatically decide who is right or wrong.</li>
          <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />Help them explore the situation rather than making the decision for them.</li>
        </ul>
      </LessonSection>

      <LessonSection title="Example conversation">
        <ConversationExample
          personSays="My partner and I keep arguing. Should I break up?"
          goodResponse="That sounds difficult. What usually causes the arguments, and how do you feel after them?"
          avoidResponse="Yes, leave them."
          avoidReason="Making a major life decision for someone removes their autonomy. Help them explore rather than deciding for them."
        />
      </LessonSection>

      <LessonSection title="Do's and Don'ts">
        <DoDontCard
          doItems={[
            'Help them articulate what they\'re feeling.',
            'Ask clarifying questions about the situation.',
            'Acknowledge that relationships are complex.',
            'Share perspective without being directive.',
          ]}
          dontItems={[
            'Take sides automatically.',
            'Pressure them into breaking up or staying.',
            'Manipulate the customer toward an outcome.',
            'Dismiss their feelings about the situation.',
          ]}
        />
      </LessonSection>

      <LessonSection label="Knowledge Check">
        <ScenarioQuestion
          question={"Someone says: \"My best friend hasn't spoken to me in a week and I don't know what I did wrong.\" What's the best approach?"}
          options={[
            { id: 'a', text: '"They\'re probably not a real friend then."' },
            { id: 'b', text: '"That must feel confusing. Do you have any idea what might have changed?"' },
            { id: 'c', text: '"Just forget about them and move on."' },
          ]}
          correctId="b"
          explanation="Help them explore what happened rather than jumping to conclusions about the relationship."
          onComplete={handleQuizComplete}
          savedAnswer={getAnswer('relationship', 'q1') ? 'b' : null}
        />
      </LessonSection>

      <div className="flex items-center justify-between pt-8 border-t border-white/10 mt-12">
        <Link to="/companion/training" className="px-6 py-3 rounded-full text-sm font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors">
          ← Back
        </Link>
        {quizPassed ? (
          <button onClick={handleComplete} className="px-8 py-3 rounded-full text-sm font-semibold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            {getModuleStatus('relationship') === 'completed' ? 'Continue Training' : 'Complete Module'}
          </button>
        ) : (
          <span className="text-sm text-gray-500">Complete the knowledge check to continue.</span>
        )}
      </div>
    </motion.div>
  );
}
