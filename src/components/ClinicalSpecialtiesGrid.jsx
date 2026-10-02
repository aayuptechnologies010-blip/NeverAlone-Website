import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wind, 
  HeartHandshake, 
  Brain, 
  Heart, 
  Activity, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  ShieldAlert,
  Headphones
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ClinicalSpecialtiesGrid = () => {
  const [selectedCondition, setSelectedCondition] = useState('anxiety');

  const conditions = [
    {
      id: 'anxiety',
      title: 'Anxiety & Panic',
      icon: Wind,
      shortTag: 'CBT & RAS Frequency',
      badgeColor: 'from-cyan-500 to-blue-500',
      tagline: 'Break panic cycles and hyperactive nervous tension.',
      symptoms: [
        'Persistent racing thoughts & palpitations',
        'Fear of impending doom or panic attacks',
        'Muscle tightness and restless sleep'
      ],
      approach: 'Cognitive Behavioral Therapy (CBT) + 10 Hz Alpha Wave auditory therapy to quiet amygdala reactivity.',
      stats: '84% report lower anxiety within 3 sessions',
      duration: '45-60 Mins',
      recommendedTherapist: 'Clinical Psychologist / CBT Specialist'
    },
    {
      id: 'depression',
      title: 'Depression & Low Mood',
      icon: HeartHandshake,
      shortTag: 'Behavioral Activation',
      badgeColor: 'from-emerald-500 to-teal-500',
      tagline: 'Rediscover emotional vitality in a safe, non-judgmental container.',
      symptoms: [
        'Chronic lack of motivation or emotional numbness',
        'Feelings of guilt, worthlessness, or isolation',
        'Disrupted circadian cycle & mental fatigue'
      ],
      approach: 'Solution-focused behavioral therapy paired with low-frequency acoustic mood stabilization.',
      stats: '91% feel deeply understood after session 1',
      duration: '50-60 Mins',
      recommendedTherapist: 'RCI Certified Psychotherapist'
    },
    {
      id: 'overthinking',
      title: 'Overthinking & Burnout',
      icon: Brain,
      shortTag: 'Cognitive Defusion',
      badgeColor: 'from-brand-teal to-brand-green',
      tagline: 'Quiet repetitive rumination and decision paralysis.',
      symptoms: [
        'Replaying past conversations on repeat',
        'Inability to unwind after work or late at night',
        'Paralysis by analysis on everyday choices'
      ],
      approach: 'Mindfulness-based cognitive clarity techniques + bilateral acoustic relaxation.',
      stats: 'Instant somatic relief in 20 minutes',
      duration: '30-60 Mins',
      recommendedTherapist: 'Clarity & Mindfulness Counsellor'
    },
    {
      id: 'relationship',
      title: 'Couples & Relationship Stress',
      icon: Heart,
      shortTag: 'EFT & Attachment Healing',
      badgeColor: 'from-pink-500 to-rose-500',
      tagline: 'Heal painful communication gaps and attachment wounds.',
      symptoms: [
        'Frequent misunderstandings or defensive walls',
        'Breakup grief and post-relationship closure',
        'Trust breaches and codependency struggles'
      ],
      approach: 'Emotion-Focused Therapy (EFT) focusing on root emotional needs and secure dialogue.',
      stats: '78% resolution in recurring conflicts',
      duration: '60 Mins',
      recommendedTherapist: 'Relationship & Family Specialist'
    },
    {
      id: 'ocd',
      title: 'OCD & Intrusive Loops',
      icon: Activity,
      shortTag: 'ERP Protocol',
      badgeColor: 'from-amber-500 to-orange-500',
      tagline: 'Evidence-based tools to disarm unwanted intrusive patterns.',
      symptoms: [
        'Persistent distressing intrusive thoughts',
        'Compulsive checking, counting, or mental rituals',
        'Overwhelming urge for certainty and reassurance'
      ],
      approach: 'Exposure and Response Prevention (ERP) along with neuroplastic grounding protocols.',
      stats: 'Clinically validated standard protocol',
      duration: '50-60 Mins',
      recommendedTherapist: 'Licensed Clinical Psychologist (ERP trained)'
    },
    {
      id: 'adhd',
      title: 'ADHD & Executive Focus',
      icon: Zap,
      shortTag: 'Neuro-regulation',
      badgeColor: 'from-purple-500 to-indigo-500',
      tagline: 'Tame dopamine dysregulation and erratic focus cycles.',
      symptoms: [
        'Procrastination spirals followed by hyperfocus',
        'Time blindness and organizational overwhelm',
        'Emotional dysregulation and sensory fatigue'
      ],
      approach: 'Executive function coaching combined with rhythmic 40 Hz gamma stimulation.',
      stats: 'Structured daily habit frameworks',
      duration: '45-60 Mins',
      recommendedTherapist: 'Neurodevelopmental Counsellor'
    }
  ];

  const currentCondition = conditions.find(c => c.id === selectedCondition) || conditions[0];
  const CurrentIcon = currentCondition.icon;

  return (
    <section className="py-16 relative bg-brand-950 border-t border-white/10 overflow-hidden" id="therapy-specialties">
      {/* Background Ambience */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-brand-teal/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-brand-leaf/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-teal/15 border border-brand-teal/40 text-brand-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} className="text-brand-leaf" />
            <span>Specialized Clinical Support</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4 font-display">
            Therapy Tailored For Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-teal to-brand-leaf font-serif italic font-normal">
              Exact Emotional Need
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Whether you are navigating clinical conditions or looking for an empathetic listener, our RCI-certified psychologists and trained companions provide science-backed relief.
          </p>
        </div>

        {/* Condition Tabs / Pill Selectors */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {conditions.map((item) => {
            const Icon = item.icon;
            const isSelected = selectedCondition === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedCondition(item.id)}
                className={`flex items-center space-x-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                  isSelected
                    ? 'bg-gradient-to-r from-brand-teal to-brand-500 text-white border-cyan-300/40 shadow-lg shadow-brand-teal/25 scale-105'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon size={16} className={isSelected ? 'text-white' : 'text-brand-teal'} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Condition Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCondition.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-brand-900/95 via-brand-900/90 to-brand-950 border border-brand-700/60 rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          >
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Symptoms and Overview */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${currentCondition.badgeColor} text-white shadow-md`}>
                    <CurrentIcon size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-brand-300 tracking-wider">
                      {currentCondition.shortTag}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      {currentCondition.title}
                    </h3>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
                  "{currentCondition.tagline}"
                </p>

                {/* Common Symptoms */}
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">
                    Signs & Daily Experience:
                  </h4>
                  <div className="space-y-2">
                    {currentCondition.symptoms.map((symptom, i) => (
                      <div key={i} className="flex items-start space-x-2.5 text-sm text-slate-300">
                        <CheckCircle2 size={16} className="text-brand-leaf shrink-0 mt-0.5" />
                        <span>{symptom}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clinical Approach */}
                <div className="bg-brand-950/80 border border-brand-800/80 rounded-2xl p-4 sm:p-5">
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase text-brand-teal tracking-wider mb-1.5">
                    <Headphones size={14} className="text-brand-leaf" />
                    <span>Neuravia Evidence-Based Integration</span>
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {currentCondition.approach}
                  </p>
                </div>
              </div>

              {/* Right Column: Key Metrics & Booking Trigger */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full bg-brand-950/90 border border-white/10 rounded-2xl p-6 sm:p-8">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Clinical Outcome</span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-leaf/15 text-brand-leaf border border-brand-leaf/30">
                      Validated Care
                    </span>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-xs text-slate-400 block mb-1">Observed Efficacy</span>
                      <p className="text-xl sm:text-2xl font-bold text-white">
                        {currentCondition.stats}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                        <span className="text-[11px] text-slate-400 block">Session Length</span>
                        <span className="text-sm font-bold text-slate-200">{currentCondition.duration}</span>
                      </div>
                      <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                        <span className="text-[11px] text-slate-400 block">Session Type</span>
                        <span className="text-sm font-bold text-slate-200">1-on-1 Audio Call</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <span className="text-[11px] text-slate-400 block">Recommended Match</span>
                      <p className="text-xs font-semibold text-brand-300">
                        {currentCondition.recommendedTherapist}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <Link
                    to={`/book?condition=${currentCondition.id}`}
                    className="w-full py-3.5 px-6 rounded-full font-bold text-sm text-white bg-gradient-to-r from-brand-teal via-brand-cyan to-brand-green hover:opacity-95 shadow-lg shadow-brand-teal/25 transition-all text-center flex items-center justify-center space-x-2"
                  >
                    <span>Book For {currentCondition.title}</span>
                    <ArrowRight size={16} />
                  </Link>

                  <p className="text-[11px] text-center text-slate-400">
                    Flat rate from ₹797 • RCI Certified Professionals • 100% Confidential
                  </p>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default ClinicalSpecialtiesGrid;
