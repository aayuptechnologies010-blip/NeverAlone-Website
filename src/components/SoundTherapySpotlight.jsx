import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, Sparkles, Brain, Moon, Shield, Waves, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const SoundTherapySpotlight = () => {
  const [activeTrack, setActiveTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const tracks = [
    {
      id: 1,
      title: "Alpha Neuro Wave (10 Hz)",
      subtitle: "Focus, Anxiety Release & Mental Clarity",
      frequency: "8-12 Hz Alpha Range",
      benefit: "Reduces Amygdala Hyperactivity by 40%",
      tag: "Focus & Calm",
      color: "from-brand-teal to-brand-500",
      icon: Brain,
      description: "Scientifically tuned harmonic frequencies that sync brainwaves to natural alpha states, accelerating calm and rational perspective."
    },
    {
      id: 2,
      title: "Delta Deep Sleep & Somatic Reset",
      subtitle: "Insomnia Relief & Stress Reset",
      frequency: "0.5-4 Hz Delta Range",
      benefit: "Induces REM & Cellular Recovery 2x Faster",
      tag: "Deep Sleep",
      color: "from-blue-600 to-indigo-600",
      icon: Moon,
      description: "Low-frequency vibroacoustic sound therapy engineered to lower cortisol levels and trigger restorative physical recovery."
    },
    {
      id: 3,
      title: "Vibroacoustic Emotional Release",
      subtitle: "Heartbreak, Overthinking & Somatic Ease",
      frequency: "432 Hz Solfeggio & Flute",
      benefit: "Soothes Nervous System in 15 Mins",
      tag: "Emotional Healing",
      color: "from-emerald-500 to-teal-500",
      icon: Waves,
      description: "Indian classical meditative resonance blended with contemporary acoustic therapy for deep emotional decompression."
    }
  ];

  const handlePlayToggle = (index) => {
    if (activeTrack === index) {
      setIsPlaying(!isPlaying);
    } else {
      setActiveTrack(index);
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-16 relative bg-brand-950 overflow-hidden border-t border-white/10">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-brand-teal/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-electric-DEFAULT/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-teal/15 border border-brand-teal/40 text-brand-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={14} className="text-brand-leaf animate-pulse" />
            <span>Science-Backed Sound & Neuroscience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4 font-display">
            Combine 1-on-1 Support with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-teal to-brand-leaf font-serif italic font-normal">
              Neuroscience Sound Therapy
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Rewire stress, quiet racing thoughts, and sleep deeper. Neuravia combines talk therapy and confidential companionship with clinically validated acoustic wave frequencies.
          </p>
        </div>

        {/* Interactive Audio Player & Track Selector */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Track Cards */}
          <div className="lg:col-span-7 space-y-4">
            {tracks.map((track, idx) => {
              const Icon = track.icon;
              const isSelected = activeTrack === idx;

              return (
                <motion.div
                  key={track.id}
                  onClick={() => handlePlayToggle(idx)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={`cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-300 border relative overflow-hidden ${
                    isSelected
                      ? 'bg-gradient-to-r from-brand-900 to-brand-900/90 border-brand-teal/60 shadow-[0_10px_30px_rgba(2,132,199,0.25)]'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Active Indicator Bar */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-brand-teal to-brand-leaf" />
                  )}

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${track.color} text-white shadow-md shrink-0 mt-0.5`}>
                        <Icon size={22} />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-brand-teal/20 text-brand-300 border border-brand-teal/30">
                            {track.tag}
                          </span>
                          <span className="text-xs text-slate-400 font-medium">
                            {track.frequency}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                          {track.title}
                        </h3>
                        <p className="text-sm text-slate-300 mb-2">
                          {track.subtitle}
                        </p>
                        <p className="text-xs text-brand-leaf font-medium flex items-center gap-1">
                          <Activity size={13} />
                          {track.benefit}
                        </p>
                      </div>
                    </div>

                    {/* Play/Pause Button */}
                    <button
                      type="button"
                      aria-label={isSelected && isPlaying ? "Pause preview" : "Play preview"}
                      className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all ${
                        isSelected && isPlaying
                          ? 'bg-brand-leaf text-brand-950 shadow-[0_0_20px_rgba(74,222,128,0.5)]'
                          : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                      }`}
                    >
                      {isSelected && isPlaying ? <Pause size={20} className="fill-current" /> : <Play size={20} className="fill-current ml-0.5" />}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Audio Visualizer & Clinical Info Box */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-brand-900/90 to-brand-950 border border-brand-700/60 rounded-3xl p-7 sm:p-8 backdrop-blur-xl relative shadow-2xl">
              
              {/* Header inside player */}
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <span className="relative flex h-3 w-3">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isPlaying ? 'bg-brand-leaf' : 'bg-slate-400'}`} />
                    <span className={`relative inline-flex rounded-full h-3 w-3 ${isPlaying ? 'bg-brand-leaf' : 'bg-slate-500'}`} />
                  </span>
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    {isPlaying ? "Live Frequency Preview Active" : "Interactive Audio Preview"}
                  </span>
                </div>
                <Volume2 size={18} className={isPlaying ? "text-brand-leaf animate-bounce" : "text-slate-400"} />
              </div>

              {/* Animated Waveform Visualizer */}
              <div className="h-28 bg-brand-950/80 rounded-2xl p-4 flex items-end justify-between gap-1.5 border border-white/5 mb-6 overflow-hidden">
                {[40, 65, 30, 85, 95, 50, 75, 45, 90, 60, 35, 80, 100, 70, 55, 90, 45, 60, 85, 40].map((height, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: isPlaying ? [`${Math.max(15, height * 0.3)}%`, `${height}%`, `${Math.max(20, height * 0.5)}%`] : '20%'
                    }}
                    transition={{
                      duration: 0.8 + (i % 5) * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className={`flex-1 rounded-full ${
                      isPlaying 
                        ? 'bg-gradient-to-t from-brand-teal via-brand-cyan to-brand-leaf' 
                        : 'bg-slate-700'
                    }`}
                  />
                ))}
              </div>

              {/* Currently Selected Info */}
              <div className="mb-6">
                <span className="text-xs font-bold uppercase text-brand-300 tracking-wider">Frequency Clinical Overview</span>
                <h4 className="text-lg font-bold text-white mt-1 mb-2">
                  {tracks[activeTrack].title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {tracks[activeTrack].description}
                </p>
              </div>

              {/* CTA button */}
              <div className="space-y-3 pt-2">
                <Link
                  to="/first-session"
                  className="w-full py-3.5 px-6 rounded-full font-bold text-sm text-white bg-gradient-to-r from-brand-teal to-brand-500 hover:from-brand-600 hover:to-brand-teal transition-all duration-300 text-center flex items-center justify-center space-x-2 shadow-lg shadow-brand-teal/30"
                >
                  <span>Experience In Your First Session</span>
                </Link>
                <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-400 font-medium">
                  <Shield size={12} className="text-brand-leaf" />
                  <span>100% Confidential • RCI & Neuroscience Backed Methodology</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SoundTherapySpotlight;
