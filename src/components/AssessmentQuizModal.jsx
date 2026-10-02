import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ClipboardCheck, 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle2, 
  ShieldCheck, 
  Activity, 
  Heart,
  Brain,
  HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AssessmentQuizModal = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 'q1',
      question: "Over the last 2 weeks, how often have you felt overwhelmed, nervous, or on edge?",
      options: [
        { label: "Not at all", score: 0 },
        { label: "Several days", score: 1 },
        { label: "More than half the days", score: 2 },
        { label: "Nearly every single day", score: 3 }
      ]
    },
    {
      id: 'q2',
      question: "Have you experienced little interest, low pleasure, or trouble motivating yourself in daily activities?",
      options: [
        { label: "Not at all", score: 0 },
        { label: "Occasionally", score: 1 },
        { label: "Frequently", score: 2 },
        { label: "Almost constantly", score: 3 }
      ]
    },
    {
      id: 'q3',
      question: "Do you experience persistent overthinking, late-night mental loops, or racing thoughts?",
      options: [
        { label: "Rarely or never", score: 0 },
        { label: "Sometimes when stressed", score: 1 },
        { label: "Often at night or during work", score: 2 },
        { label: "Constant exhausting mental chatter", score: 3 }
      ]
    },
    {
      id: 'q4',
      question: "What kind of support feels most comforting to you right now?",
      options: [
        { label: "Just an empathetic human listener to vent freely", score: 1 },
        { label: "Structured CBT & clinical coping tools", score: 2 },
        { label: "Sound frequency relaxation & somatic calming", score: 2 },
        { label: "Combined therapy + neuroscience audio support", score: 3 }
      ]
    }
  ];

  const handleSelectOption = (score) => {
    const newAnswers = { ...answers, [currentStep]: score };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateTotal = () => {
    return Object.values(answers).reduce((acc, curr) => acc + curr, 0);
  };

  const getAssessmentResult = () => {
    const total = calculateTotal();
    if (total <= 3) {
      return {
        level: "Mild Stress & Fatigue",
        color: "text-emerald-400",
        badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
        desc: "You are dealing with situational everyday stress. A supportive listener or calming acoustic wave session will quickly restore your focus.",
        recommended: "1-on-1 Empathetic Companion or 10 Hz Alpha Wave Track"
      };
    } else if (total <= 7) {
      return {
        level: "Moderate Anxiety & Emotional Overload",
        color: "text-brand-teal",
        badgeBg: "bg-brand-teal/20 text-brand-300 border-brand-teal/30",
        desc: "Your nervous system is operating on high alert with frequent thought loops and emotional tension. Evidence-based CBT techniques will help you regain mental clarity.",
        recommended: "First 1-on-1 Session with Clinical Psychologist + CBT grounding"
      };
    } else {
      return {
        level: "High Anxiety & Persistent Strain",
        color: "text-cyan-300",
        badgeBg: "bg-cyan-500/20 text-cyan-200 border-cyan-500/30",
        desc: "You are carrying heavy mental exhaustion that is actively impacting your daily rhythm, sleep, and emotional peace. You deserve dedicated, non-judgmental professional care.",
        recommended: "Comprehensive 1-on-1 Clinical Support + Delta/Alpha Sound Protocol"
      };
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };

  return (
    <section className="py-16 relative bg-brand-950 overflow-hidden border-t border-white/10" id="assessment">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-teal/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Card Container */}
        <div className="bg-gradient-to-br from-brand-900 via-brand-900/90 to-brand-950 border border-brand-700/60 rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl relative">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-teal/15 border border-brand-teal/40 text-brand-300 text-xs font-bold uppercase tracking-wider mb-3">
              <ClipboardCheck size={14} className="text-brand-leaf" />
              <span>Free 60-Second Well-Being Assessment</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight font-display">
              Discover Your Mental Health Baseline
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              Based on clinically validated psychological screening metrics (PHQ & GAD). Instant, 100% confidential, and no registration required.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={`step-${currentStep}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-400 font-semibold">
                    <span>Question {currentStep + 1} of {questions.length}</span>
                    <span>{Math.round(((currentStep + 1) / questions.length) * 100)}% Completed</span>
                  </div>
                  <div className="w-full h-2 bg-brand-950 rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-brand-teal to-brand-leaf"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Question */}
                <div className="py-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                    {questions[currentStep].question}
                  </h3>
                </div>

                {/* Options */}
                <div className="grid sm:grid-cols-2 gap-3.5">
                  {questions[currentStep].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(option.score)}
                      className="text-left p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-teal/50 transition-all duration-200 group flex items-start space-x-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-brand-950 border border-white/20 flex items-center justify-center text-xs text-slate-300 group-hover:border-brand-leaf group-hover:text-brand-leaf shrink-0 mt-0.5">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="text-sm sm:text-base text-slate-200 group-hover:text-white font-medium">
                        {option.label}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              /* Results View */
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 text-center"
              >
                {(() => {
                  const result = getAssessmentResult();
                  return (
                    <>
                      <div className="p-6 sm:p-8 rounded-2xl bg-brand-950/80 border border-brand-800/80 text-left space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Assessment Status</span>
                            <h3 className={`text-2xl font-extrabold mt-0.5 ${result.color}`}>
                              {result.level}
                            </h3>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${result.badgeBg}`}>
                            Personalized Report Ready
                          </span>
                        </div>

                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                          {result.desc}
                        </p>

                        <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-xs font-bold uppercase text-brand-300 block mb-1">
                            Recommended Care Path:
                          </span>
                          <p className="text-sm font-semibold text-white">
                            {result.recommended}
                          </p>
                        </div>
                      </div>

                      {/* CTAs */}
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                        <Link
                          to="/first-session"
                          className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-brand-teal via-brand-cyan to-brand-green hover:opacity-95 shadow-lg shadow-brand-teal/25 transition-all flex items-center justify-center space-x-2"
                        >
                          <span>Claim First Session Support (From ₹797)</span>
                          <ArrowRight size={16} />
                        </Link>
                        <button
                          onClick={handleReset}
                          className="w-full sm:w-auto px-6 py-3.5 rounded-full font-semibold text-sm text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-center space-x-2"
                        >
                          <RotateCcw size={15} />
                          <span>Retake Assessment</span>
                        </button>
                      </div>

                      <div className="flex items-center justify-center space-x-2 text-xs text-slate-400">
                        <ShieldCheck size={14} className="text-brand-leaf" />
                        <span>Private, HIPAA-aligned standard • No spam or phone disclosure</span>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};

export default AssessmentQuizModal;
