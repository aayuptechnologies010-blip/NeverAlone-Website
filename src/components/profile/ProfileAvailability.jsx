import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock } from 'lucide-react';

const ProfileAvailability = ({ companion }) => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("Today");
  const [selectedTime, setSelectedTime] = useState(null);

  const dates = ["Today", "Tomorrow", "Wednesday", "Thursday"];
  const times = ["6:00 PM", "7:30 PM", "9:00 PM", "10:30 PM"];

  const handleContinue = () => {
    if (!selectedTime) return;
    const category = companion?.categories?.[0] || 'Just Talk';
    const companionName = companion?.name || 'Aisha';
    navigate(`/book?category=${encodeURIComponent(category)}&companion=${encodeURIComponent(companionName)}&date=${encodeURIComponent(selectedDate)}&time=${encodeURIComponent(selectedTime)}`);
  };

  return (
    <section id="availability-section" className="py-12 bg-brand-950">
      <div className="max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white mb-6">When would you like to talk?</h2>
        
        <div className="bg-brand-900/50 border border-white/5 rounded-3xl p-6 md:p-8">
          
          {/* Dates */}
          <div className="flex overflow-x-auto gap-3 pb-4 mb-6 scrollbar-hide">
            {dates.map(date => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`px-6 py-3 rounded-xl whitespace-nowrap text-sm font-medium transition-colors cursor-pointer ${
                  selectedDate === date 
                    ? 'bg-white text-brand-950' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {date}
              </button>
            ))}
          </div>

          {/* Times */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {times.map(time => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`flex items-center justify-center space-x-2 py-4 rounded-xl border transition-all cursor-pointer ${
                  selectedTime === time
                    ? 'bg-romantic-DEFAULT/20 border-romantic-DEFAULT text-white shadow-[0_0_15px_rgba(219,39,119,0.2)]'
                    : 'bg-brand-950 border-white/5 text-gray-300 hover:border-white/20'
                }`}
              >
                <Clock size={16} className={selectedTime === time ? "text-romantic-pink" : "text-gray-500"} />
                <span className="font-medium text-sm">{time}</span>
              </button>
            ))}
          </div>

          {/* Action */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
            <p className="text-sm text-gray-500 italic">Availability may change.</p>
            <button 
              onClick={handleContinue}
              disabled={!selectedTime}
              className={`w-full md:w-auto px-10 py-4 rounded-xl font-semibold transition-all ${
                selectedTime 
                  ? 'bg-white text-brand-950 hover:bg-gray-100 hover:scale-105 active:scale-95 cursor-pointer shadow-lg' 
                  : 'bg-white/10 text-gray-500 cursor-not-allowed'
              }`}
            >
              Continue
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProfileAvailability;
