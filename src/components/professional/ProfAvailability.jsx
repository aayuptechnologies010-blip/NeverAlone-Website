import React, { useState } from 'react';

const days = ['Today', 'Tomorrow', 'Wednesday', 'Thursday'];
const times = ['5:00 PM', '6:30 PM', '8:00 PM'];

export default function ProfAvailability({ professional, onBook }) {
  const [selectedDay, setSelectedDay] = useState('Today');
  const [selectedTime, setSelectedTime] = useState(null);

  const canContinue = selectedDay && selectedTime;

  return (
    <section id="availability" className="py-12 bg-brand-950 pb-32">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-white mb-2">Availability</h2>
        <p className="text-sm text-gray-400 mb-8">{professional.availabilityInfo}</p>
        
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
          
          {/* Days */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Select Day
            </h3>
            <div className="flex flex-wrap gap-3">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => {
                    setSelectedDay(day);
                    setSelectedTime(null);
                  }}
                  className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                    selectedDay === day
                      ? 'bg-electric-cyan text-brand-950 shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                      : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Times */}
          <div className="mb-10">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Select Time
            </h3>
            <div className="flex flex-wrap gap-3">
              {times.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                    selectedTime === time
                      ? 'bg-electric-cyan text-brand-950 shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                      : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
            <p className="text-xs text-gray-500">
              * Availability may vary. Booking confirms your slot.
            </p>
            <button
              onClick={onBook}
              disabled={!canContinue}
              className={`px-8 py-4 rounded-xl text-base font-semibold transition-all w-full sm:w-auto ${
                canContinue
                  ? 'bg-electric-cyan text-brand-950 hover:bg-electric-cyan/90 shadow-[0_0_20px_rgba(34,211,238,0.2)]'
                  : 'bg-white/5 border border-white/10 text-gray-500 cursor-not-allowed'
              }`}
            >
              Continue To Booking
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
