import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, CheckCircle2 } from 'lucide-react';

const InteractiveQuestion = () => {
  const moods = [
    "I just want someone to listen.",
    "I need relationship advice.",
    "I'm confused about my career.",
    "I feel lonely.",
    "I want something fun & playful."
  ];

  const [selectedMood, setSelectedMood] = useState(moods[0]);

  const demoCompanions = {
    "I just want someone to listen.": [
      { name: "Riya", tags: ["Great Listener", "Warm"], img: "https://i.pravatar.cc/150?img=44" },
      { name: "Aman", tags: ["Calm", "Patient"], img: "https://i.pravatar.cc/150?img=11" }
    ],
    "I need relationship advice.": [
      { name: "Sarah", tags: ["Empathetic", "Direct"], img: "https://i.pravatar.cc/150?img=5" },
      { name: "Vikram", tags: ["Experienced", "Kind"], img: "https://i.pravatar.cc/150?img=8" }
    ],
    "I'm confused about my career.": [
      { name: "Priya", tags: ["Corporate", "Mentor"], img: "https://i.pravatar.cc/150?img=9" },
      { name: "David", tags: ["Tech", "Startup"], img: "https://i.pravatar.cc/150?img=12" }
    ],
    "I feel lonely.": [
      { name: "Aisha", tags: ["Warm", "Friendly"], img: "https://i.pravatar.cc/150?img=47" },
      { name: "Neha", tags: ["Talkative", "Sweet"], img: "https://i.pravatar.cc/150?img=32" }
    ],
    "I want something fun & playful.": [
      { name: "Ananya", tags: ["Fun", "Energetic"], img: "https://i.pravatar.cc/150?img=20" },
      { name: "Karan", tags: ["Humorous", "Chill"], img: "https://i.pravatar.cc/150?img=14" }
    ]
  };

  return (
    <section className="py-10 relative bg-brand-950 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-900 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading outside grid so both columns start at same level */}
        <h2 className="text-3xl md:text-3xl font-semibold text-white mb-8">
          Who would you talk to tonight?
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Side: Mood Options */}
          <div className="flex flex-col justify-between gap-3 h-full">
            {moods.map((mood, index) => (
              <button
                key={index}
                onClick={() => setSelectedMood(mood)}
                className={`w-full text-left px-6 py-4 rounded-2xl border transition-all duration-300 flex-1 flex items-center ${
                  selectedMood === mood 
                    ? 'bg-gradient-to-r from-romantic-DEFAULT/20 to-electric-DEFAULT/20 border-electric-DEFAULT/50 shadow-[0_0_15px_rgba(6,182,212,0.2)]' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <span className={`text-base md:text-lg ${selectedMood === mood ? 'text-white font-medium' : 'text-gray-300'}`}>
                  "{mood}"
                </span>
              </button>
            ))}
          </div>

          {/* Right Side: Companion Cards / Image — perfectly matches height of left side */}
          <div className="relative h-full flex flex-col">
            <AnimatePresence mode="wait">
              {!selectedMood ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full min-h-[380px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group flex flex-col justify-end"
                >
                  {/* Pink glow behind */}
                  <div className="absolute -inset-3 bg-romantic-DEFAULT/15 rounded-3xl blur-2xl pointer-events-none z-0" />

                  {/* Full-fill image */}
                  <img
                    src="/talk_tonight.jpg"
                    alt="Someone available to talk tonight"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Dark gradient top */}
                  <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-brand-950/60 to-transparent z-10 pointer-events-none" />

                  {/* Dark gradient bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-brand-950/90 via-brand-950/50 to-transparent z-10 pointer-events-none" />

                  {/* Bottom content */}
                  <div className="relative flex flex-col items-center gap-2 p-5 z-20">
                    <div className="flex items-center space-x-2 bg-brand-900/85 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-lg">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-sm text-gray-200 font-medium">Someone is available right now</span>
                    </div>
                    <p className="text-xs text-gray-400 italic text-center">← Select a mood to find your person</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={selectedMood}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full min-h-[380px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-brand-900/60 backdrop-blur-xl p-5 flex flex-col justify-between"
                >
                  {/* Subtle background ambient glow */}
                  <div className="absolute -inset-3 bg-romantic-DEFAULT/10 rounded-3xl blur-2xl pointer-events-none z-0" />
                  
                  {/* Header inside frame */}
                  <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10 shrink-0">
                    <div>
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-romantic-DEFAULT">Selected Mood</span>
                      <h3 className="text-base font-semibold text-white leading-tight">{selectedMood}</h3>
                    </div>
                    <button 
                      onClick={() => setSelectedMood(null)}
                      className="text-xs text-gray-400 hover:text-white px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                    >
                      Change mood
                    </button>
                  </div>

                  {/* Companion Cards List */}
                  <div className="relative z-10 flex-1 flex flex-col justify-center space-y-3 py-4">
                    {demoCompanions[selectedMood]?.map((companion, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-brand-950/70 hover:bg-brand-950/90 backdrop-blur-md border border-white/10 hover:border-romantic-DEFAULT/40 p-4 rounded-xl flex items-center justify-between transition-all duration-300 group"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="relative shrink-0">
                            <img src={companion.img} alt={companion.name} className="w-12 h-12 rounded-full object-cover border-2 border-white/20 group-hover:scale-105 transition-transform" />
                            <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-brand-950" />
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h4 className="text-base font-semibold text-white">{companion.name}</h4>
                              <CheckCircle2 size={14} className="text-electric-cyan" />
                            </div>
                            <div className="flex flex-wrap gap-1.5 mt-1">
                              {companion.tags.map(tag => (
                                <span key={tag} className="text-xs px-2.5 py-0.5 bg-white/5 border border-white/5 rounded-md text-gray-300">{tag}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-romantic-DEFAULT hover:to-dream-DEFAULT flex items-center justify-center text-white transition-all shadow-md group-hover:scale-110 shrink-0 ml-3">
                          <Phone size={16} />
                        </button>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom frame status */}
                  <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 shrink-0">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      100% Anonymous & Private
                    </span>
                    <span className="text-romantic-DEFAULT font-medium cursor-pointer hover:underline">Instant Connect →</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InteractiveQuestion;
