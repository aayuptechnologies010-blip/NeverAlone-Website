import React from 'react';
import { motion } from 'framer-motion';
import { Clock3, Info } from 'lucide-react';

const dates = ['Today', 'Tomorrow', 'Wednesday', 'Thursday', 'Friday'];
const slots = [
  { time: '10:00 AM', period: 'Morning' },
  { time: '12:30 PM', period: 'Afternoon' },
  { time: '3:00 PM', period: 'Afternoon' },
  { time: '5:30 PM', period: 'Evening' },
  { time: '7:30 PM', period: 'Evening' },
  { time: '9:00 PM', period: 'Night' },
];

export default function BookStepTime({ selectedDate, selectedTime, preferences, onSelectDate, onSelectTime }) {
  const orderedSlots = [...slots].sort((first, second) => {
    if (!preferences?.timePreference || preferences.timePreference === 'No preference') return 0;
    return Number(second.period === preferences.timePreference) - Number(first.period === preferences.timePreference);
  });

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-electric-cyan/10 text-electric-cyan"><Clock3 className="h-6 w-6" /></div>
        <h2 className="text-3xl font-semibold text-white mb-2">Choose a time that feels manageable</h2>
        <p className="text-gray-400">Select a preferred 60-minute session slot.</p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-brand-900 p-6 md:p-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Choose a day</p>
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {dates.map((date) => (
            <button key={date} type="button" onClick={() => onSelectDate(date)} className={`min-w-[104px] rounded-xl px-4 py-3 text-sm font-medium transition ${selectedDate === date ? 'bg-white text-brand-950' : 'border border-white/10 bg-brand-950 text-gray-400 hover:border-white/30 hover:text-white'}`}>{date}</button>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Choose a preferred time</p>
          {preferences?.timePreference && preferences.timePreference !== 'No preference' && <span className="rounded-full bg-electric-cyan/10 px-2.5 py-1 text-[10px] font-semibold text-electric-cyan">{preferences.timePreference} first</span>}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3">
          {orderedSlots.map((slot) => (
            <button key={slot.time} type="button" onClick={() => onSelectTime(slot.time)} className={`rounded-xl border px-3 py-4 text-sm font-medium transition ${selectedTime === slot.time ? 'border-electric-cyan bg-electric-cyan/20 text-white shadow-[0_0_15px_rgba(6,182,212,0.2)]' : 'border-white/10 bg-brand-950 text-gray-400 hover:border-white/30 hover:text-white'}`}>
              <span className="block">{slot.time}</span><span className="mt-1 block text-[10px] text-gray-500">{slot.period}</span>
            </button>
          ))}
        </div>
        <p className="mt-6 flex gap-2 rounded-xl border border-white/5 bg-brand-950/60 p-3 text-xs leading-relaxed text-gray-400"><Info className="h-4 w-4 shrink-0 text-electric-cyan" /> Your selected time is a booking preference. Final availability is confirmed when your booking is processed.</p>
      </div>
    </motion.div>
  );
}
