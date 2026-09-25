import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smile, 
  Frown, 
  Meh, 
  Heart, 
  Sparkles, 
  Check, 
  Send, 
  BookOpen, 
  Calendar 
} from 'lucide-react';

const moodOptions = [
  { id: 'great', label: 'Peaceful & Great', emoji: '✨', color: 'from-green-500/20 to-emerald-500/10 border-green-500/30 text-green-300' },
  { id: 'good', label: 'Doing Okay', emoji: '🙂', color: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-300' },
  { id: 'anxious', label: 'Anxious / Overthinking', emoji: '🌪️', color: 'from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-300' },
  { id: 'low', label: 'Low / Disconnected', emoji: '🌧️', color: 'from-pink-500/20 to-rose-500/10 border-pink-500/30 text-pink-300' },
  { id: 'heavy', label: 'Overwhelmed', emoji: '💔', color: 'from-purple-500/20 to-red-500/10 border-purple-500/30 text-purple-300' },
];

export default function MoodTrackerCard() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [journalHistory, setJournalHistory] = useState([
    { date: 'Yesterday', mood: '🌪️ Anxious', note: 'Had trouble focusing at work, listening session helped calm down.' },
    { date: '2 days ago', mood: '🙂 Doing Okay', note: 'Feeling more centered after a good sleep.' },
  ]);

  const handleSave = (e) => {
    e.preventDefault();
    if (!selectedMood) return;

    const moodObj = moodOptions.find(m => m.id === selectedMood);
    const newEntry = {
      date: 'Today',
      mood: `${moodObj.emoji} ${moodObj.label}`,
      note: note.trim() || 'Checked in with feelings.'
    };

    setJournalHistory([newEntry, ...journalHistory]);
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      setNote('');
      setSelectedMood(null);
    }, 2500);
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-brand-900/60 p-6 sm:p-7 backdrop-blur-xl shadow-xl relative overflow-hidden">
      
      {/* Glow accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-600/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-pink-500/15 border border-pink-500/30 text-pink-400 flex items-center justify-center">
            <Heart className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Daily Mood & Emotion Journal</h3>
            <p className="text-xs text-gray-400">Track how your heart and mind feel today</p>
          </div>
        </div>
        <span className="text-xs text-electric-cyan font-bold bg-electric-cyan/10 border border-electric-cyan/20 px-2.5 py-1 rounded-full">
          Private Journal
        </span>
      </div>

      <AnimatePresence mode="wait">
        {isSaved ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="py-6 text-center"
          >
            <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-2 border border-green-500/30">
              <Check className="w-6 h-6" />
            </div>
            <p className="text-sm font-bold text-white">Mood logged successfully!</p>
            <p className="text-xs text-gray-400 mt-0.5">Acknowledging your feelings is the first step toward calm.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSave} className="space-y-4">
            {/* Mood selector buttons */}
            <div>
              <p className="text-xs font-semibold text-gray-300 mb-2.5">How are you feeling right now?</p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {moodOptions.map((mood) => {
                  const active = selectedMood === mood.id;
                  return (
                    <button
                      type="button"
                      key={mood.id}
                      onClick={() => setSelectedMood(mood.id)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        active 
                          ? `bg-gradient-to-b ${mood.color} shadow-lg scale-[1.02]`
                          : 'bg-brand-950/60 border-white/10 hover:border-white/20 text-gray-400'
                      }`}
                    >
                      <span className="text-2xl mb-1">{mood.emoji}</span>
                      <span className={`text-[11px] font-bold leading-tight ${active ? 'text-white' : 'text-gray-300'}`}>
                        {mood.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Note input */}
            {selectedMood && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-2 pt-1"
              >
                <label className="block text-xs font-semibold text-gray-300">
                  What is on your mind? (Optional note)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="e.g. Felt a bit restless in the morning, taking a 10 min break..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="flex-1 bg-brand-950 border border-white/10 focus:border-pink-500 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-1.5 shrink-0 cursor-pointer"
                  >
                    <span>Save</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )}
          </form>
        )}
      </AnimatePresence>

      {/* Recent check-ins list */}
      <div className="mt-6 pt-5 border-t border-white/10">
        <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-pink-400" />
          <span>Past Mood Insights</span>
        </p>
        <div className="space-y-2">
          {journalHistory.slice(0, 2).map((item, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between gap-3 text-xs">
              <div>
                <span className="font-bold text-white mr-2">{item.mood}</span>
                <span className="text-gray-400 font-light">{item.note}</span>
              </div>
              <span className="text-[10px] text-gray-500 font-medium shrink-0">{item.date}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
