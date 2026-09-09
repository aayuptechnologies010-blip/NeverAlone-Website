import React from 'react';
import { motion } from 'framer-motion';
import { MicOff, Volume2, PhoneOff, Flag, CheckCircle2 } from 'lucide-react';

const HowJourney = () => {
  return (
    <section id="how-journey" className="py-16 bg-brand-950 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-20 mb-32">
          <div className="w-full md:w-1/2">
            <div className="text-electric-cyan font-semibold mb-4 tracking-widest text-sm">STEP 01</div>
            <h2 className="text-3xl md:text-3xl font-semibold text-white mb-4">Tell us what you need</h2>
            <p className="text-gray-400 text-lg">Choose the type of conversation that feels right today.</p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-brand-900 border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-electric-DEFAULT/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex flex-wrap gap-3">
                {['Just Talk', 'Relationship', 'Family', 'Career', 'College', 'Flirty Mode'].map((cat, i) => (
                  <motion.div 
                    key={cat}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`px-4 py-2 rounded-xl text-sm font-medium ${i === 0 ? 'bg-white text-brand-950' : 'bg-brand-950 border border-white/10 text-gray-300'}`}
                  >
                    {cat}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6 lg:gap-20 mb-32">
          <div className="w-full md:w-1/2">
            <div className="text-romantic-DEFAULT font-semibold mb-4 tracking-widest text-sm">STEP 02</div>
            <h2 className="text-3xl md:text-3xl font-semibold text-white mb-4">Find your match</h2>
            <p className="text-gray-400 text-lg">Explore verified people based on language, interests, conversation style and availability.</p>
          </div>
          <div className="w-full md:w-1/2 relative">
            <motion.div 
              className="bg-brand-900 border border-white/10 rounded-3xl p-5 shadow-2xl relative z-20 w-3/4 mr-auto"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gray-800 overflow-hidden">
                  <img src="https://i.pravatar.cc/150?img=47" alt="Aisha" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-1"><span className="text-white font-semibold">Aisha</span><CheckCircle2 size={12} className="text-electric-cyan"/></div>
                  <span className="text-xs text-romantic-pink">Warm & Easygoing</span>
                </div>
              </div>
              <div className="text-xs text-gray-500 flex justify-between">
                <span>Hindi • English</span>
                <span>Available Tonight</span>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 text-center text-xs font-semibold text-white">View Profile</div>
            </motion.div>
            
            <motion.div 
              className="bg-brand-900/50 border border-white/5 rounded-3xl p-5 shadow-xl absolute top-8 right-8 z-10 w-3/4 scale-95 opacity-50 blur-[1px]"
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gray-800 overflow-hidden">
                  <img src="https://i.pravatar.cc/150?img=44" alt="Riya" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-1"><span className="text-white font-semibold">Riya</span></div>
                  <span className="text-xs text-gray-400">Great Listener</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-20 mb-32">
          <div className="w-full md:w-1/2">
            <div className="text-dream-DEFAULT font-semibold mb-4 tracking-widest text-sm">STEP 03</div>
            <h2 className="text-3xl md:text-3xl font-semibold text-white mb-4">Choose a time</h2>
            <p className="text-gray-400 text-lg">Pick a convenient date and available time for your private phone conversation.</p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-brand-900 border border-white/10 rounded-3xl p-6 shadow-2xl">
              <div className="flex gap-2 mb-6">
                {['Today', 'Tomorrow', 'Wed'].map((d, i) => (
                  <div key={d} className={`px-4 py-2 rounded-lg text-sm font-medium ${i===0 ? 'bg-white text-brand-950' : 'bg-brand-950 text-gray-400'}`}>{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {['6:00 PM', '7:30 PM', '9:00 PM', '10:30 PM'].map((t, i) => (
                  <div key={t} className={`py-3 text-center rounded-xl border text-sm font-medium ${i===1 ? 'border-electric-cyan text-white shadow-[0_0_15px_rgba(6,182,212,0.3)] bg-electric-cyan/10' : 'border-white/5 text-gray-400 bg-brand-950'}`}>{t}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6 lg:gap-20">
          <div className="w-full md:w-1/2">
            <div className="text-white font-semibold mb-4 tracking-widest text-sm">STEP 04</div>
            <h2 className="text-3xl md:text-3xl font-semibold text-white mb-4">Have your conversation</h2>
            <p className="text-gray-400 text-lg mb-4">At your scheduled time, connect through a private phone call.</p>
            <p className="text-sm text-gray-500 italic bg-white/5 border border-white/10 p-4 rounded-xl">Your personal number does not need to be unnecessarily exposed.</p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            {/* Phone Call UI Mockup */}
            <motion.div 
              className="w-[280px] h-[580px] bg-black rounded-[3rem] border-[8px] border-gray-800 p-6 relative flex flex-col items-center justify-between overflow-hidden shadow-2xl"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              {/* Top info */}
              <div className="text-center mt-12 w-full z-10">
                <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full mb-6 overflow-hidden border-2 border-white/10">
                  <img src="https://i.pravatar.cc/150?img=47" alt="Aisha" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl text-white font-medium">Aisha</h3>
                <p className="text-gray-400 text-sm">Just Talk</p>
                <p className="text-white font-mono mt-4 text-xl">00:42:18</p>
              </div>

              {/* Pulsing background effect */}
              <motion.div 
                className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Bottom controls */}
              <div className="grid grid-cols-3 gap-y-6 gap-x-4 w-full mb-8 z-10">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center text-white"><MicOff size={20} /></div>
                  <span className="text-[10px] text-gray-400">Mute</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center text-white"><Volume2 size={20} /></div>
                  <span className="text-[10px] text-gray-400">Speaker</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center text-white"><Flag size={20} /></div>
                  <span className="text-[10px] text-gray-400">Report</span>
                </div>
                <div className="col-span-3 flex justify-center mt-4">
                  <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center text-white shadow-lg"><PhoneOff size={24} /></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowJourney;
