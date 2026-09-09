import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Phone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompanionCard = ({ companion }) => {
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
            <div className="absolute -bottom-2 -right-2 bg-brand-950 rounded-full p-1">
              <CheckCircle2 size={18} className="text-electric-cyan" />
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-2">
            <span className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs font-medium rounded-full">
              {companion.availability}
            </span>
            {companion.hasFlirtyMode && (
              <span className="px-2 py-1 bg-rose-500/10 border border-rose-500/20 text-rose-300 text-[10px] uppercase font-semibold rounded-full flex items-center gap-1">
                <Sparkles size={10} /> Flirty Mode
              </span>
            )}
          </div>
        </div>

        {/* Name & Short Bio */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-2xl font-semibold text-white">{companion.name}</h3>
            <span className="text-sm text-romantic-pink font-medium">• {companion.style}</span>
          </div>
          <p className="text-gray-300 font-serif italic text-sm">"{companion.shortBio}"</p>
        </div>

        {/* Details */}
        <div className="space-y-4 mb-8 flex-grow">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-2">Languages</p>
            <p className="text-sm text-gray-300">{companion.languages.join(" • ")}</p>
          </div>
          
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-2">Interests</p>
            <div className="flex flex-wrap gap-1.5">
              {companion.interests.slice(0, 4).map(interest => (
                <span key={interest} className="text-[11px] px-2 py-1 bg-white/5 border border-white/5 rounded-md text-gray-400">
                  {interest}
                </span>
              ))}
              {companion.interests.length > 4 && (
                <span className="text-[11px] px-2 py-1 bg-transparent text-gray-500">+{companion.interests.length - 4}</span>
              )}
            </div>
          </div>

          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-2">Categories</p>
            <div className="flex flex-wrap gap-1.5">
              {companion.categories.map(cat => (
                <span key={cat} className="text-[11px] px-2 py-1 bg-brand-950 border border-white/5 rounded-md text-gray-400">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex gap-3 mt-auto">
          <Link 
            to={`/companions/${companion.id}`} 
            className="flex-1 py-3 text-center rounded-xl text-sm font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            View Profile
          </Link>
          <Link 
            to={`/companions/${companion.id}`}
            className="flex-1 py-3 flex items-center justify-center gap-2 rounded-xl text-sm font-semibold text-white bg-white/10 border border-transparent group-hover:bg-gradient-to-r group-hover:from-romantic-DEFAULT group-hover:to-electric-DEFAULT transition-all"
          >
            <Phone size={14} />
            <span>Talk Now</span>
          </Link>
        </div>

      </div>
    </motion.div>
  );
};

export default CompanionCard;
