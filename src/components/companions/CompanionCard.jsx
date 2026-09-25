import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Phone, Sparkles, Volume2, Square } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompanionCard = ({ companion }) => {
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);

  const toggleVoice = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    if (isPlayingVoice) {
      window.speechSynthesis.cancel();
      setIsPlayingVoice(false);
      return;
    }

    window.speechSynthesis.cancel();
    const textToSpeak = `Hi there, I am ${companion.name}. ${companion.shortBio}. I am right here whenever you need someone to talk to.`;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = 0.95;
    utterance.pitch = companion.style?.includes('Fun') ? 1.1 : 0.95;

    utterance.onend = () => setIsPlayingVoice(false);
    utterance.onerror = () => setIsPlayingVoice(false);

    window.speechSynthesis.speak(utterance);
    setIsPlayingVoice(true);
  };

  const isOnline = companion.availability === 'Available now' || companion.availability?.toLowerCase().includes('now');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-brand-900/60 backdrop-blur-sm border border-white/10 rounded-[2rem] overflow-hidden group hover:border-white/20 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col h-full relative"
    >
      {/* Subtle Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-romantic-DEFAULT/0 to-electric-DEFAULT/0 group-hover:from-romantic-DEFAULT/10 group-hover:to-electric-DEFAULT/10 transition-colors duration-500 pointer-events-none" />

      <div className="p-6 relative z-10 flex flex-col h-full">
        
        {/* Header: Image & Badges */}
        <div className="flex justify-between items-start mb-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl overflow-hidden bg-brand-950 p-0.5 border border-white/10 group-hover:border-white/30 transition-colors">
              <img 
                src={companion.image} 
                alt={companion.name} 
                className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-brand-950 rounded-full p-1 shadow-md">
              <CheckCircle2 size={18} className="text-electric-cyan" />
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-2">
            <span className={`px-3 py-1 border text-xs font-medium rounded-full flex items-center gap-1.5 ${
              isOnline 
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                : 'bg-white/5 border-white/10 text-gray-300'
            }`}>
              {isOnline && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
              {companion.availability}
            </span>
            <span className="px-2.5 py-0.5 bg-electric-cyan/10 border border-electric-cyan/20 text-electric-cyan text-[10px] uppercase font-bold tracking-wider rounded-full flex items-center gap-1">
              <Sparkles size={10} /> Verified
            </span>
          </div>
        </div>

        {/* Name & Short Bio */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-2xl font-semibold text-white">{companion.name}</h3>
            <span className="text-xs text-romantic-pink font-medium px-2 py-0.5 rounded-full bg-romantic-DEFAULT/10">
              {companion.style}
            </span>
          </div>
          <p className="text-gray-300 font-serif italic text-sm line-clamp-2">"{companion.shortBio}"</p>
        </div>

        {/* Voice Note Quick Preview */}
        <div className="mb-4">
          <button
            type="button"
            onClick={toggleVoice}
            className={`w-full flex items-center justify-between px-3.5 py-2 rounded-xl border text-xs transition-all ${
              isPlayingVoice
                ? 'bg-romantic-DEFAULT/20 border-romantic-DEFAULT/40 text-white animate-pulse'
                : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              {isPlayingVoice ? <Square size={13} className="text-romantic-pink" /> : <Volume2 size={13} className="text-electric-cyan" />}
              <span>{isPlayingVoice ? 'Playing Voice Note...' : 'Listen to Voice Preview'}</span>
            </div>
            <span className="text-[10px] text-gray-400 font-mono">0:15</span>
          </button>
        </div>

        {/* Details */}
        <div className="space-y-4 mb-6 flex-grow">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1.5">Languages</p>
            <p className="text-xs text-gray-300 font-medium">{companion.languages.join(" • ")}</p>
          </div>
          
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1.5">Interests</p>
            <div className="flex flex-wrap gap-1.5">
              {companion.interests.slice(0, 3).map(interest => (
                <span key={interest} className="text-[11px] px-2 py-1 bg-white/5 border border-white/5 rounded-lg text-gray-400">
                  {interest}
                </span>
              ))}
              {companion.interests.length > 3 && (
                <span className="text-[11px] px-2 py-1 bg-transparent text-gray-500">+{companion.interests.length - 3}</span>
              )}
            </div>
          </div>

          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1.5">Focus Areas</p>
            <div className="flex flex-wrap gap-1.5">
              {companion.categories.slice(0, 2).map(cat => (
                <span key={cat} className="text-[11px] px-2 py-1 bg-brand-950 border border-white/5 rounded-lg text-gray-400">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex gap-2.5 mt-auto">
          <Link 
            to={`/companions/${companion.id}`} 
            className="flex-1 py-2.5 text-center rounded-xl text-xs font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            View Profile
          </Link>
          <Link 
            to={`/book?companionId=${companion.id}&category=${encodeURIComponent(companion.categories[0] || 'Just Talk')}`}
            className="flex-1 py-2.5 flex items-center justify-center gap-1.5 rounded-xl text-xs font-semibold text-brand-950 bg-electric-cyan hover:bg-cyan-300 transition-all font-sans shadow-md"
          >
            <Phone size={13} />
            <span>Talk Now</span>
          </Link>
        </div>

      </div>
    </motion.div>
  );
};

export default CompanionCard;
