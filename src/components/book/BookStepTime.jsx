import React from 'react';
import { motion } from 'framer-motion';

const BookStepTime = ({ selectedDate, selectedTime, onSelectDate, onSelectTime }) => {
  const dates = ["Today", "Tomorrow", "Wednesday", "Thursday", "Friday"];
  const times = ["5:30 PM", "6:00 PM", "7:30 PM", "9:00 PM", "10:30 PM"];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-2xl mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-white mb-2">When would you like to talk?</h2>
        <p className="text-gray-400 mb-2">Duration: <span className="text-white font-medium">60 minutes</span></p>
        <p className="text-xs text-gray-500 italic">Availability may change.</p>
      </div>

      <div className="bg-brand-900 border border-white/10 rounded-3xl p-6 md:p-8">
        
        {/* Dates */}
        <div className="flex overflow-x-auto gap-3 pb-4 mb-6 scrollbar-hide">
          {dates.map(date => (
            <button
              key={date}
              onClick={() => onSelectDate(date)}
              className={`px-6 py-3 rounded-xl whitespace-nowrap text-sm font-medium transition-colors ${
                selectedDate === date 
                  ? 'bg-white text-brand-950' 
                  : 'bg-white/5 border border-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {date}
            </button>
          ))}
        </div>

        {/* Times */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {times.map(time => (
            <button
              key={time}
              onClick={() => onSelectTime(time)}
              className={`py-4 rounded-xl border transition-all text-sm font-medium ${
                selectedTime === time
                  ? 'bg-electric-cyan/20 border-electric-cyan text-white shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                  : 'bg-brand-950 border-white/5 text-gray-400 hover:border-white/20'
              }`}
            >
              {time}
            </button>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default BookStepTime;
