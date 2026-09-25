import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Phone, Calendar, Volume2, Square, Play, Sparkles } from 'lucide-react';

const ProfileHero = ({ companion }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const synthRef = useRef(null);

  const voiceSampleTexts = {
    aisha: "Hi there! I'm Aisha. If you're feeling overwhelmed, need to talk through your day, or just want someone who truly listens without judgment, I'm right here for you.",
    riya: "Hello, I'm Riya. Sometimes just having a peaceful space to share what's on your mind can make all the difference. Let's take it one step at a time.",
    ananya: "Hey! I'm Ananya. Whatever is stressing you out, remember you don't have to carry it alone. Looking forward to our conversation!",
    meera: "Namaste, I'm Meera. Take a deep breath. In our session, you can speak freely at your own pace.",
    kabir: "Hey brother, I'm Kabir. Whether it's career stress or life getting heavy, let's talk it out like good friends.",
    sana: "Hi, I'm Sana. Relationships and feelings can be complicated. I'm here to offer an empathetic, safe ear whenever you're ready."
  };

  const handlePlayVoice = () => {
    if (isPlaying) {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      setIsPlaying(false);
      return;
    }

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Reset any active speech
      
      const companionKey = companion?.id?.toLowerCase() || 'aisha';
      const textToSpeak = voiceSampleTexts[companionKey] || `Hi there! I'm ${companion.name}. I'm here to listen, support, and help you find peace of mind.`;
      
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.rate = 0.92; // Natural, calm speech speed
      utterance.pitch = 1.05; // Friendly warm tone

      // Try to find natural English/Indian English or Hindi voice
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(v => 
        (companionKey === 'kabir' ? (v.name.includes('Male') || v.name.includes('Ravi') || v.name.includes('David')) : (v.name.includes('Female') || v.name.includes('Zira') || v.name.includes('Heera') || v.name.includes('Google UK English Female') || v.name.includes('Samantha')))
      ) || voices[0];

      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      synthRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-speech is not supported on this browser.");
    }
  };

  return (
    <section className="bg-brand-950 pt-28 pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-pink-600/10 to-electric-cyan/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Left: Premium Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full md:w-1/3 lg:w-2/5 shrink-0"
          >
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 p-1.5 bg-brand-900/50 backdrop-blur-sm shadow-2xl">
              <img 
                src={companion.image} 
                alt={companion.name} 
                className="w-full aspect-[4/5] object-cover rounded-[1.75rem]"
              />
              <div className="absolute top-4 right-4 bg-brand-950/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-electric-cyan border border-electric-cyan/30 flex items-center gap-1.5">
                <Sparkles size={12} />
                <span>Verified Specialist</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Profile Details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full md:w-2/3 lg:w-3/5"
          >
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl md:text-4xl font-extrabold text-white">{companion.name}</h1>
              <CheckCircle2 size={24} className="text-electric-cyan" />
            </div>
            
            <p className="text-gray-400 font-medium mb-5">Verified Empathetic Listener &bull; 100% Confidential</p>

            <div className="space-y-4 mb-6">
              <p className="text-xl text-white font-serif italic text-pink-200">"{companion.shortBio}"</p>
              
              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-300">
                <span className="px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full font-medium">{companion.style}</span>
                <span className="px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full font-medium">{companion.languages.join(" • ")}</span>
                <span className="px-3.5 py-1.5 bg-green-500/10 border border-green-500/30 text-green-400 rounded-full font-bold">
                  {companion.availability}
                </span>
              </div>
            </div>

            {/* 🎙️ High-Quality Audio Voice Note Player */}
            <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-brand-900 via-brand-900/90 to-brand-950 border border-pink-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 max-w-lg shadow-lg relative overflow-hidden">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-pink-500/15 border border-pink-500/30 text-pink-400 flex items-center justify-center font-bold text-lg shrink-0">
                  <Volume2 className={`w-6 h-6 ${isPlaying ? 'animate-pulse text-pink-300' : 'text-pink-400'}`} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white flex items-center gap-2">
                    <span>Listen to {companion.name}'s Voice Note</span>
                    {isPlaying && <span className="text-[10px] bg-pink-500 text-white px-2 py-0.5 rounded-full font-extrabold animate-pulse">PLAYING</span>}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">Real voice intro &bull; 15s Preview</p>
                </div>
              </div>

              <button 
                type="button"
                onClick={handlePlayVoice}
                className={`w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                  isPlaying 
                    ? 'bg-red-500/20 text-red-300 border border-red-500/40 hover:bg-red-500/30' 
                    : 'bg-gradient-to-r from-pink-600 to-pink-500 text-white hover:opacity-90'
                }`}
              >
                {isPlaying ? (
                  <>
                    <Square size={13} className="fill-current" />
                    <span>Stop Voice</span>
                  </>
                ) : (
                  <>
                    <Play size={13} className="fill-current" />
                    <span>Play Voice Note</span>
                  </>
                )}
              </button>
            </div>

            <div className="mb-8">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Conversation Focus Areas</h3>
              <div className="flex flex-wrap gap-2">
                {companion.categories.map(cat => (
                  <span key={cat} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-200 text-xs font-medium">
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to={`/book?companion=${encodeURIComponent(companion.name)}&category=${encodeURIComponent(companion.categories[0] || 'Just Talk')}`}
                className="flex-1 sm:flex-none px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 hover:shadow-[0_0_30px_rgba(219,39,119,0.35)] transition-all flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                <span>Talk With {companion.name}</span>
              </Link>
              <button 
                onClick={() => document.getElementById('availability-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex-1 sm:flex-none px-8 py-4 rounded-2xl text-base font-semibold text-white bg-white/5 border border-white/15 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar size={18} />
                <span>See Available Slots</span>
              </button>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHero;
