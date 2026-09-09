import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { demoConversations, demoSchedule } from '../../data/companionDashboardData';

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function CompanionSchedule() {
  const [view, setView] = useState('day'); // 'day' | 'week'
  const [selectedDate, setSelectedDate] = useState(new Date());

  const today = new Date();
  const isToday = selectedDate.toDateString() === today.toDateString();
  const dayName = dayNames[selectedDate.getDay()];
  const scheduleKey = dayName === 'Sunday' ? 'Sunday' : dayName;
  const daySchedule = demoSchedule[scheduleKey];

  const todayConvs = isToday ? demoConversations.filter(c => c.date === 'Today') : [];

  const navigateDay = (dir) => {
    const d = new Date(selectedDate);
    d.setDate(d.getDate() + dir);
    setSelectedDate(d);
  };

  const getWeekDates = () => {
    const d = new Date(selectedDate);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(d.setDate(diff));
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      return date;
    });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-1">My Schedule</h1>
        <p className="text-gray-400">View your availability and booked conversations.</p>
      </div>

      {/* View toggle + navigation */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <button onClick={() => setView('day')} className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${view === 'day' ? 'bg-white/10 text-electric-cyan' : 'text-gray-500 hover:text-white'}`}>Day</button>
          <button onClick={() => setView('week')} className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${view === 'week' ? 'bg-white/10 text-electric-cyan' : 'text-gray-500 hover:text-white'}`}>Week</button>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => navigateDay(view === 'week' ? -7 : -1)} className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm font-bold text-white min-w-[120px] text-center">
            {view === 'day' ? (isToday ? 'Today' : selectedDate.toLocaleDateString('en-IN', { weekday: 'long', month: 'short', day: 'numeric' })) : `Week of ${getWeekDates()[0].toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}`}
          </span>
          <button onClick={() => navigateDay(view === 'week' ? 7 : 1)} className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {view === 'day' ? (
        <div className="space-y-4">
          {/* Availability */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Availability — {dayName}</p>
            {daySchedule?.available ? (
              <div className="space-y-2">
                {daySchedule.slots.map((slot, i) => (
                  <p key={i} className="text-sm text-electric-cyan font-medium">{formatTime(slot.start)} – {formatTime(slot.end)}</p>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 italic">Unavailable</p>
            )}
          </div>

          {/* Conversations */}
          {todayConvs.length > 0 ? (
            <div className="space-y-3">
              {todayConvs.map(conv => (
                <div key={conv.id} className={`border rounded-2xl p-5 flex items-center gap-4 ${
                  conv.status === 'upcoming' ? 'bg-electric-cyan/5 border-electric-cyan/20' : 'bg-white/5 border-white/10'
                }`}>
                  <div className="text-center min-w-[60px]">
                    <p className="text-sm font-bold text-white">{conv.time}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-white">{conv.category}</p>
                    <p className="text-xs text-gray-400">{conv.customer} • {conv.duration}</p>
                  </div>
                  <span className={`text-xs font-bold uppercase ${conv.status === 'completed' ? 'text-green-400' : 'text-electric-cyan'}`}>
                    {conv.status === 'completed' ? 'Done' : 'Upcoming'}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <p className="text-sm text-gray-500">No conversations on this day.</p>
            </div>
          )}
        </div>
      ) : (
        /* Week view */
        <div className="grid grid-cols-7 gap-2">
          {getWeekDates().map((date, i) => {
            const dn = dayNames[date.getDay()];
            const schedule = demoSchedule[dn];
            const isTodayDate = date.toDateString() === today.toDateString();
            return (
              <div
                key={i}
                onClick={() => { setSelectedDate(date); setView('day'); }}
                className={`rounded-2xl p-3 cursor-pointer transition-colors border ${
                  isTodayDate ? 'bg-electric-cyan/10 border-electric-cyan/30' : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <p className={`text-xs font-bold text-center mb-1 ${isTodayDate ? 'text-electric-cyan' : 'text-gray-500'}`}>{shortDays[date.getDay()]}</p>
                <p className={`text-lg font-bold text-center mb-2 ${isTodayDate ? 'text-white' : 'text-gray-300'}`}>{date.getDate()}</p>
                {schedule?.available ? (
                  <div className="w-full h-1.5 rounded-full bg-electric-cyan/30" />
                ) : (
                  <div className="w-full h-1.5 rounded-full bg-white/10" />
                )}
              </div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}

function formatTime(t) {
  const [h, m] = t.split(':').map(Number);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 || 12;
  return `${h12}:${m.toString().padStart(2, '0')} ${ampm}`;
}
