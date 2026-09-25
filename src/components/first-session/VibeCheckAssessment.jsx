import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2, RotateCcw, Brain, Heart, Zap, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const quizQuestions = [
  {
    id: 'primary_concern',
    question: "What has been on your mind the most lately?",
    subtitle: "Select what resonates closest with your current state",
    options: [
      { label: "Racing thoughts, overthinking & anxiety", icon: Brain, category: "Anxiety & Panic" },
      { label: "Feeling emotionally drained, low & heavy", icon: Heart, category: "Depression & Low Mood" },
      { label: "Heartbreak, relationship conflict or breakup", icon: Heart, category: "Breakups & Relationships" },
      { label: "Work stress, burnout or lack of focus", icon: Zap, category: "Burnout & Overthinking" },
      { label: "Just need a safe, confidential person to vent to", icon: HelpCircle, category: "Just Talk" },
    ]
  },
  {
    id: 'duration',
    question: "How long have you been carrying this feeling?",
    subtitle: "This helps us understand the depth of support you need",
    options: [
      { label: "Just recently (a few days or weeks)", weight: "gentle" },
      { label: "A few months, coming and going", weight: "moderate" },
      { label: "For a very long time / recurring pattern", weight: "clinical" },
    ]
  },
  {
    id: 'goal',
    question: "What would bring you the most relief right now?",
    subtitle: "What is your primary goal for your first session?",
    options: [
      { label: "Actionable coping techniques & practical clarity" },
      { label: "A warm, empathetic space to express without judgment" },
      { label: "Clinical assessment & understanding my emotional triggers" },
    ]
  }
];

export default function VibeCheckAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelect = (option) => {
    const updatedAnswers = { ...answers, [quizQuestions[currentStep].id]: option };
    setAnswers(updatedAnswers);

    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  const recommendedCategory = answers.primary_concern?.category || "Anxiety & Panic";

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-900/40 via-brand-950 to-brand-950 border-b border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric-cyan/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-electric-cyan/30 bg-electric-cyan/10 px-3.5 py-1 text-xs font-bold text-electric-cyan uppercase tracking-widest mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>2-Minute Match Quiz</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Not sure where to start? Take a 60-second check-in.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-300">
            Answer 3 quick gentle questions and get an instant recommendation for your first session.
          </p>
        </div>

        <div className="rounded-3xl border border-white/15 bg-brand-900/80 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          {!isCompleted ? (
            <div>
              {/* Progress dots */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                  Question {currentStep + 1} of {quizQuestions.length}
                </span>
                <div className="flex gap-2">
                  {quizQuestions.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentStep
                          ? 'w-8 bg-gradient-to-r from-pink-500 to-electric-cyan'
                          : idx < currentStep
                          ? 'w-4 bg-white/40'
                          : 'w-4 bg-white/10'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Question Header */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">
                    {quizQuestions[currentStep].question}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mb-6">
                    {quizQuestions[currentStep].subtitle}
                  </p>

                  {/* Options */}
                  <div className="space-y-3">
                    {quizQuestions[currentStep].options.map((option, idx) => {
                      const Icon = option.icon;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleSelect(option)}
                          className="w-full p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-pink-500/40 text-left transition-all flex items-center justify-between group cursor-pointer"
                        >
                          <div className="flex items-center gap-3.5">
                            {Icon && (
                              <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <Icon className="w-5 h-5" />
                              </div>
                            )}
                            <span className="text-sm font-semibold text-gray-200 group-hover:text-white">
                              {option.label}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-pink-400 group-hover:translate-x-1 transition-all" />
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center py-4"
            >
              <div className="w-16 h-16 bg-gradient-to-tr from-pink-500/20 to-electric-cyan/20 border border-electric-cyan/30 rounded-2xl flex items-center justify-center mx-auto mb-4 text-electric-cyan shadow-lg">
                <CheckCircle2 size={32} />
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-pink-400">
                Assessment Complete
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 mb-2">
                We recommend a session focused on: <br />
                <span className="text-electric-cyan font-black">{recommendedCategory}</span>
              </h3>
              <p className="text-sm text-gray-300 max-w-lg mx-auto mb-8 font-light">
                Based on your check-in, our clinical specialists will provide you with practical grounding frameworks, emotional validation, and a gentle path forward.
              </p>

              <div className="bg-brand-950/80 border border-white/10 rounded-2xl p-5 max-w-md mx-auto mb-8 text-left">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-gray-400">Recommended Session</span>
                  <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">Available Today</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <p className="text-lg font-bold text-white">60-Min 1-on-1 Consultation</p>
                  <p className="text-xl font-black text-electric-cyan">₹797</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
                <Link
                  to={`/book?serviceType=Professional+Support&concern=${encodeURIComponent(recommendedCategory)}`}
                  className="w-full sm:flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-bold text-sm shadow-xl shadow-pink-600/30 transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>Book This Match &bull; ₹797</span>
                  <ArrowRight size={16} />
                </Link>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto p-4 rounded-2xl border border-white/10 hover:bg-white/5 text-gray-400 hover:text-white transition text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <RotateCcw size={14} />
                  <span>Retake</span>
                </button>
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
