import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Languages, MessageCircle, Sparkles } from 'lucide-react';

const concernOptions = [
  { id: 'anxiety', label: 'Anxiety or panic', detail: 'Worry, racing thoughts, or feeling on edge' },
  { id: 'stress', label: 'Stress or burnout', detail: 'Work, studies, family, or emotional overload' },
  { id: 'low-mood', label: 'Low mood', detail: 'Feeling heavy, disconnected, or less like yourself' },
  { id: 'relationship', label: 'Relationship concern', detail: 'Conflict, heartbreak, or communication difficulties' },
  { id: 'not-sure', label: 'I am not sure yet', detail: 'I would like help understanding what is going on' },
];

const languageOptions = ['English', 'Hindi', 'Hinglish', 'No preference'];
const supportOptions = ['A structured approach', 'A calm space to talk', 'Help deciding my next step', 'Not sure yet'];
const timeOptions = ['Morning', 'Afternoon', 'Evening', 'Night', 'No preference'];

export default function BookStepCheckIn({ preferences, onChange }) {
  const update = (key, value) => onChange({ ...preferences, [key]: value });

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-electric-cyan/10 text-electric-cyan"><HeartHandshake className="h-6 w-6" /></div>
        <h2 className="text-3xl font-semibold text-white mb-2">A small private check-in</h2>
        <p className="text-gray-400">This helps us show a more suitable starting point. It is optional and is not a diagnosis.</p>
      </div>

      <div className="space-y-7 rounded-3xl border border-white/10 bg-brand-900 p-6 sm:p-8">
        <fieldset>
          <legend className="flex items-center gap-2 text-sm font-semibold text-white"><Sparkles className="h-4 w-4 text-electric-cyan" /> What feels most important today?</legend>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {concernOptions.map((option) => (
              <button key={option.id} type="button" onClick={() => update('concern', option.id)} className={`rounded-xl border p-4 text-left transition ${preferences.concern === option.id ? 'border-electric-cyan bg-electric-cyan/10' : 'border-white/10 bg-brand-950/60 hover:border-white/30'}`}>
                <span className="block text-sm font-semibold text-white">{option.label}</span>
                <span className="mt-1 block text-xs leading-relaxed text-gray-400">{option.detail}</span>
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="flex items-center gap-2 text-sm font-semibold text-white"><Sparkles className="h-4 w-4 text-electric-cyan" /> When do you usually feel most comfortable?</legend>
          <div className="mt-4 flex flex-wrap gap-2">
            {timeOptions.map((time) => (
              <button key={time} type="button" onClick={() => update('timePreference', time)} className={`rounded-full px-4 py-2 text-sm font-medium transition ${preferences.timePreference === time ? 'bg-white text-brand-950' : 'border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10'}`}>{time}</button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="flex items-center gap-2 text-sm font-semibold text-white"><Languages className="h-4 w-4 text-electric-cyan" /> Which language feels easiest?</legend>
          <div className="mt-4 flex flex-wrap gap-2">
            {languageOptions.map((language) => (
              <button key={language} type="button" onClick={() => update('language', language)} className={`rounded-full px-4 py-2 text-sm font-medium transition ${preferences.language === language ? 'bg-white text-brand-950' : 'border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10'}`}>{language}</button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="flex items-center gap-2 text-sm font-semibold text-white"><MessageCircle className="h-4 w-4 text-electric-cyan" /> What would feel most helpful?</legend>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {supportOptions.map((option) => (
              <button key={option} type="button" onClick={() => update('supportStyle', option)} className={`rounded-xl border px-4 py-3 text-left text-sm transition ${preferences.supportStyle === option ? 'border-electric-cyan bg-electric-cyan/10 text-white' : 'border-white/10 bg-brand-950/60 text-gray-300 hover:border-white/30'}`}>{option}</button>
            ))}
          </div>
        </fieldset>
      </div>
    </motion.div>
  );
}
