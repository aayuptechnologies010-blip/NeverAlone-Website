import React from 'react';
import { motion } from 'framer-motion';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function StepAvailability({ data, updateData, errors }) {
  
  const handleToggleDay = (day) => {
    const isAvailable = data.availability[day].isAvailable;
    updateData({
      availability: {
        ...data.availability,
        [day]: { ...data.availability[day], isAvailable: !isAvailable }
      }
    });
  };

  const handleTimeChange = (day, field, value) => {
    updateData({
      availability: {
        ...data.availability,
        [day]: { ...data.availability[day], [field]: value }
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">When are you usually available?</h2>
        <p className="text-gray-400">Reliable availability helps us schedule better conversations.</p>
        {errors.availability && <p className="text-red-400 text-sm mt-2">{errors.availability}</p>}
      </div>

      <div className="space-y-4">
        {days.map(day => {
          const dayData = data.availability[day] || { isAvailable: false, start: '', end: '' };
          return (
            <div key={day} className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => handleToggleDay(day)}
                  className={`w-12 h-6 rounded-full transition-colors relative flex items-center ${
                    dayData.isAvailable ? 'bg-electric-cyan' : 'bg-white/20'
                  }`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full absolute transition-transform ${
                    dayData.isAvailable ? 'translate-x-7' : 'translate-x-1'
                  }`} />
                </button>
                <span className={`font-semibold ${dayData.isAvailable ? 'text-white' : 'text-gray-500'}`}>
                  {day}
                </span>
              </div>

              {dayData.isAvailable ? (
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <input
                    type="time"
                    value={dayData.start}
                    onChange={(e) => handleTimeChange(day, 'start', e.target.value)}
                    className="flex-1 md:w-32 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-electric-cyan/50"
                    style={{ colorScheme: 'dark' }}
                  />
                  <span className="text-gray-500">to</span>
                  <input
                    type="time"
                    value={dayData.end}
                    onChange={(e) => handleTimeChange(day, 'end', e.target.value)}
                    className="flex-1 md:w-32 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-electric-cyan/50"
                    style={{ colorScheme: 'dark' }}
                  />
                </div>
              ) : (
                <span className="text-sm text-gray-500 italic">Unavailable</span>
              )}
              
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
