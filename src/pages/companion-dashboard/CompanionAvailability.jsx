import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Copy, X } from 'lucide-react';
import { demoSchedule } from '../../data/companionDashboardData';

const dayOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function CompanionAvailability() {
  const [availability, setAvailability] = useState(demoSchedule);
  const [tempUnavailable, setTempUnavailable] = useState({ from: '', until: '', reason: '' });
  const [saved, setSaved] = useState(false);

  const toggleDay = (day) => {
    setAvailability(prev => ({
      ...prev,
      [day]: { ...prev[day], available: !prev[day].available, slots: prev[day].available ? [] : [{ start: '18:00', end: '22:00' }] }
    }));
    setSaved(false);
  };

  const updateSlot = (day, slotIdx, field, value) => {
    setAvailability(prev => {
      const newSlots = [...prev[day].slots];
      newSlots[slotIdx] = { ...newSlots[slotIdx], [field]: value };
      return { ...prev, [day]: { ...prev[day], slots: newSlots } };
    });
    setSaved(false);
  };

  const addSlot = (day) => {
    setAvailability(prev => ({
      ...prev,
      [day]: { ...prev[day], slots: [...prev[day].slots, { start: '18:00', end: '22:00' }] }
    }));
    setSaved(false);
  };

  const removeSlot = (day, slotIdx) => {
    setAvailability(prev => {
      const newSlots = prev[day].slots.filter((_, i) => i !== slotIdx);
      return { ...prev, [day]: { ...prev[day], slots: newSlots, available: newSlots.length > 0 } };
    });
    setSaved(false);
  };

  const copyToWeekdays = () => {
    const monSlots = availability.Monday.slots;
    const monAvail = availability.Monday.available;
    setAvailability(prev => {
      const next = { ...prev };
      ['Tuesday', 'Wednesday', 'Thursday', 'Friday'].forEach(d => {
        next[d] = { available: monAvail, slots: [...monSlots] };
      });
      return next;
    });
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-1">When are you available?</h1>
        <p className="text-gray-400">Keep your schedule accurate so conversations can be booked at times that work for you.</p>
      </div>

      {/* Quick action */}
      <button onClick={copyToWeekdays} className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-electric-cyan bg-electric-cyan/10 border border-electric-cyan/20 hover:bg-electric-cyan/20 transition-colors">
        <Copy className="w-4 h-4" /> Copy Monday to weekdays
      </button>

      {/* Weekly editor */}
      <div className="space-y-4">
        {dayOrder.map(day => {
          const dayData = availability[day];
          return (
            <div key={day} className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => toggleDay(day)}
                    className={`w-12 h-6 rounded-full relative transition-colors ${dayData.available ? 'bg-electric-cyan' : 'bg-white/20'}`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${dayData.available ? 'translate-x-7' : 'translate-x-1'}`} />
                  </button>
                  <span className={`font-bold text-sm ${dayData.available ? 'text-white' : 'text-gray-500'}`}>{day}</span>
                </div>
                {!dayData.available && <span className="text-xs text-gray-500 italic">Unavailable</span>}
              </div>

              {dayData.available && (
                <div className="space-y-3 ml-16">
                  {dayData.slots.map((slot, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <input type="time" value={slot.start} onChange={(e) => updateSlot(day, idx, 'start', e.target.value)} className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-electric-cyan/50" style={{ colorScheme: 'dark' }} />
                      <span className="text-gray-500 text-sm">to</span>
                      <input type="time" value={slot.end} onChange={(e) => updateSlot(day, idx, 'end', e.target.value)} className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-electric-cyan/50" style={{ colorScheme: 'dark' }} />
                      {dayData.slots.length > 1 && (
                        <button onClick={() => removeSlot(day, idx)} className="text-gray-500 hover:text-red-400 transition-colors">
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                  <button onClick={() => addSlot(day)} className="flex items-center gap-1 text-xs text-electric-cyan hover:text-white transition-colors font-semibold">
                    <Plus className="w-3.5 h-3.5" /> Add Time Range
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Temporary unavailability */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-2">Need some time off?</h3>
        <p className="text-xs text-gray-500 mb-4">This prevents future availability during the selected period.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1 font-medium">Unavailable From</label>
            <input type="date" value={tempUnavailable.from} onChange={(e) => setTempUnavailable(p => ({ ...p, from: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-electric-cyan/50" style={{ colorScheme: 'dark' }} />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1 font-medium">Unavailable Until</label>
            <input type="date" value={tempUnavailable.until} onChange={(e) => setTempUnavailable(p => ({ ...p, until: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-electric-cyan/50" style={{ colorScheme: 'dark' }} />
          </div>
        </div>
        <div>
          <label className="block text-xs text-gray-400 mb-1 font-medium">Reason (Optional)</label>
          <input type="text" value={tempUnavailable.reason} onChange={(e) => setTempUnavailable(p => ({ ...p, reason: e.target.value }))} placeholder="e.g. Personal time" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-electric-cyan/50" />
        </div>
      </div>

      {/* Save */}
      <div className="flex items-center gap-4">
        <button onClick={handleSave} className="px-8 py-3 rounded-xl text-sm font-bold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors">
          Save Availability
        </button>
        {saved && <span className="text-sm text-green-400 font-medium">Saved (frontend demo)</span>}
      </div>
      <p className="text-xs text-gray-600">Changes are stored locally and not sent to a real server.</p>
    </motion.div>
  );
}
