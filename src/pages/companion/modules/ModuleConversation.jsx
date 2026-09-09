import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTraining } from '../../../components/training/TrainingContext';
import LessonSection from '../../../components/training/LessonSection';
import DoDontCard from '../../../components/training/DoDontCard';
import ConversationExample from '../../../components/training/ConversationExample';
import ScenarioQuestion from '../../../components/training/ScenarioQuestion';

export default function ModuleConversation() {
  const { getModuleStatus, setModuleStatus, saveAnswer, getAnswer } = useTraining();
  const navigate = useNavigate();
  const [quizPassed, setQuizPassed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (getModuleStatus('natural-conversation') === 'not-started') {
      setModuleStatus('natural-conversation', 'in-progress');
    }
    if (getAnswer('natural-conversation', 'q1')) setQuizPassed(true);
  }, []);

  const handleQuizComplete = () => {
    saveAnswer('natural-conversation', 'q1', true);
    setQuizPassed(true);
  };

  const handleComplete = () => {
    setModuleStatus('natural-conversation', 'completed');
    navigate('/companion/training');
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl">
      <p className="text-xs font-bold text-electric-cyan uppercase tracking-widest mb-2">Module 02</p>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">A conversation shouldn't feel like an interview.</h1>
      <p className="text-gray-400 leading-relaxed mb-10">
        Good companion conversations feel natural, not scripted. Learn how to keep things flowing.
      </p>

      <LessonSection title="What makes conversation natural">
        <ul className="space-y-3">
          <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />Ask questions naturally, not in rapid succession.</li>
          <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />Respond to what the person actually says.</li>
          <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />Share small, appropriate thoughts when useful.</li>
          <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />Allow pauses — silence is not failure.</li>
          <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />Change topics naturally, not abruptly.</li>
          <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />Do not fire question after question.</li>
        </ul>
      </LessonSection>

      <LessonSection title="Conversation topics">
        <p>Conversations may naturally touch on many everyday topics:</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {['My Day', 'Movies', 'Music', 'Travel', 'Hobbies', 'Life', 'Goals', 'Work', 'College', 'Random Thoughts'].map(t => (
            <span key={t} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">{t}</span>
          ))}
        </div>
      </LessonSection>

      <LessonSection title="Example: natural flow">
        <ConversationExample
          personSays="I've been listening to the same song all week."
          goodResponse="Now I'm curious — what song?"
        />
        <p className="text-gray-400 mt-4 text-sm">
          From here, the conversation can naturally move into music, memories, movies, travel, daily life — without feeling scripted.
        </p>
      </LessonSection>

      <LessonSection title="Do's and Don'ts">
        <DoDontCard
          doItems={[
            'Let one topic flow into another naturally.',
            'Share a brief thought before asking the next question.',
            'Be comfortable when the conversation pauses.',
            'Follow the person\'s energy and interests.',
          ]}
          dontItems={[
            'Rapid-fire questions one after another.',
            'Ignore what they just said to ask something unrelated.',
            'Stick to a script or checklist of topics.',
            'Fill every silence immediately.',
          ]}
        />
      </LessonSection>

      <LessonSection label="Knowledge Check">
        <ScenarioQuestion
          question={"Someone says: \"I watched this movie last night and I can't stop thinking about it.\" What's the best next step?"}
          options={[
            { id: 'a', text: '"What other hobbies do you have?"' },
            { id: 'b', text: '"Oh interesting. What was the movie?"' },
            { id: 'c', text: '"I don\'t really watch movies."' },
          ]}
          correctId="b"
          explanation="Follow the thread they just opened. Respond to what they actually said, then let the conversation grow from there."
          onComplete={handleQuizComplete}
          savedAnswer={getAnswer('natural-conversation', 'q1') ? 'b' : null}
        />
      </LessonSection>

      <div className="flex items-center justify-between pt-8 border-t border-white/10 mt-12">
        <Link to="/companion/training" className="px-6 py-3 rounded-full text-sm font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors">
          ← Back
        </Link>
        {quizPassed ? (
          <button onClick={handleComplete} className="px-8 py-3 rounded-full text-sm font-semibold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            {getModuleStatus('natural-conversation') === 'completed' ? 'Continue Training' : 'Complete Module'}
          </button>
        ) : (
          <span className="text-sm text-gray-500">Complete the knowledge check to continue.</span>
        )}
      </div>
    </motion.div>
  );
}
