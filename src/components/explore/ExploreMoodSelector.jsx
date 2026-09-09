import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageCircle, Heart, Users, Briefcase, GraduationCap, Sparkles, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExploreMoodSelector = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  const moods = [
    {
      id: 1, label: "I just want someone to listen", category: "Just Talk",
      icon: MessageCircle, desc: "Connect with a friendly listener to talk about your day, vent, or just chat about anything. No pressure, no agenda.",
      cta: "Explore Just Talk", bg: "bg-blue-500", light: "bg-blue-50", border: "border-blue-200", textColor: "text-blue-600"
    },
    {
      id: 2, label: "My relationship is confusing me", category: "Relationship Advice",
      icon: Heart, desc: "Get an outside perspective on dating, breakups, mixed signals, or communication issues.",
      cta: "Explore Relationships", bg: "bg-pink-500", light: "bg-pink-50", border: "border-pink-200", textColor: "text-pink-600"
    },
    {
      id: 3, label: "Family is on my mind", category: "Family & Personal",
      icon: Users, desc: "Talk through family disagreements, boundaries, or personal decisions with someone who understands.",
      cta: "Explore Family Support", bg: "bg-orange-500", light: "bg-orange-50", border: "border-orange-200", textColor: "text-orange-600"
    },
    {
      id: 4, label: "I'm worried about work or career", category: "Career & Work",
      icon: Briefcase, desc: "Discuss job stress, career changes, interviews, or workplace situations.",
      cta: "Explore Career Advice", bg: "bg-emerald-500", light: "bg-emerald-50", border: "border-emerald-200", textColor: "text-emerald-600"
    },
    {
      id: 5, label: "College feels overwhelming", category: "College & Student Life",
      icon: GraduationCap, desc: "Navigate campus life, study pressure, friendships, and future plans with a supportive companion.",
      cta: "Explore Student Support", bg: "bg-purple-500", light: "bg-purple-50", border: "border-purple-200", textColor: "text-purple-600"
    },
    {
      id: 6, label: "I want something playful", category: "Flirty Mode",
      icon: Sparkles, desc: "Enjoy lighthearted, respectful, and consensual fun banter (18+ only).",
      cta: "Explore Flirty Mode", bg: "bg-rose-500", light: "bg-rose-50", border: "border-rose-200", textColor: "text-rose-600"
    },
    {
      id: 7, label: "I need professional support", category: "Professional Support",
      icon: Stethoscope, desc: "Connect with verified mental-health professionals for qualified therapy sessions.",
      cta: "Explore Professional Help", bg: "bg-slate-600", light: "bg-slate-50", border: "border-slate-200", textColor: "text-slate-600"
    }
  ];

  return (
    <section 
      id="mood-selector" 
      className="py-10 relative overflow-hidden border-t border-brand-900/50"
      style={{ backgroundImage: 'url(/explore_mood_bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Dark overlay to make text highly readable and blend with the dark theme */}
      <div className="absolute inset-0 bg-brand-950/80 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-brand-950/60" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-white mb-2"
          >
            How are you feeling right now?
          </motion.h2>
          <p className="text-gray-300 text-sm md:text-base">Tap what resonates — we'll point you in the right direction.</p>
        </div>

        {/* Pill Options */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-8">
          {moods.map((mood) => (
            <motion.button
              key={mood.id}
              onClick={() => setSelectedMood(mood)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border backdrop-blur-sm ${
                selectedMood?.id === mood.id
                  ? `${mood.bg} text-white border-transparent shadow-lg shadow-black/20`
                  : `bg-white/10 text-gray-200 border-white/10 hover:bg-white/20 hover:text-white hover:border-white/30 hover:shadow-md hover:-translate-y-0.5`
              }`}
            >
              {mood.label}
            </motion.button>
          ))}
        </div>

        {/* Dynamic Recommendation */}
        <div className="min-h-[140px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!selectedMood ? (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-gray-400 font-serif italic text-base md:text-lg text-center px-4"
              >
                Select how you're feeling to find the right conversation.
              </motion.p>
            ) : (
              <motion.div
                key={selectedMood.id}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className={`bg-brand-900/80 backdrop-blur-md border border-white/10 p-5 md:p-6 rounded-2xl w-full max-w-2xl mx-auto shadow-2xl`}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${selectedMood.bg} shadow-md`}>
                    <selectedMood.icon size={24} className="text-white" />
                  </div>
                  <div className="flex-grow">
                    <p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${selectedMood.textColor.replace('600', '400')}`}>Recommended for you</p>
                    <h3 className="text-lg font-bold text-white mb-1">{selectedMood.category}</h3>
                    <p className="text-gray-300 text-sm mb-3 leading-snug">{selectedMood.desc}</p>
                    <Link
                      to="/categories"
                      className={`inline-flex items-center space-x-1.5 text-sm font-semibold ${selectedMood.textColor.replace('600', '400')} hover:text-white transition-colors`}
                    >
                      <span>{selectedMood.cta}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ExploreMoodSelector;
