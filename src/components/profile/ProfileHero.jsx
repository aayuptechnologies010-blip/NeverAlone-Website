import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Phone, Calendar } from 'lucide-react';

const ProfileHero = ({ companion }) => {
  return (
    <section className="bg-brand-950 pt-32 pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-romantic-DEFAULT/10 to-electric-DEFAULT/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-8 items-start">
          
          {/* Left: Premium Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full md:w-1/3 lg:w-2/5 shrink-0"
          >
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 p-1 bg-brand-900/50 backdrop-blur-sm">
              <img 
                src={companion.image} 
                alt={companion.name} 
                className="w-full aspect-[4/5] object-cover rounded-[1.75rem]"
              />
            </div>
          </motion.div>

          {/* Right: Profile Details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full md:w-2/3 lg:w-3/5"
          >
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl md:text-3xl font-semibold text-white">{companion.name}</h1>
              <CheckCircle2 size={24} className="text-electric-cyan" />
            </div>
            
            <p className="text-gray-400 font-medium mb-6">Verified Companion</p>

            <div className="space-y-4 mb-8">
              <p className="text-xl text-white font-serif italic">"{companion.shortBio}"</p>
              
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">{companion.style}</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">{companion.languages.join(" • ")}</span>
                <span className="px-3 py-1 bg-electric-cyan/10 border border-electric-cyan/20 text-electric-cyan rounded-full">
                  {companion.availability}
                </span>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Conversation Categories</h3>
              <div className="flex flex-wrap gap-2">
                {companion.categories.map(cat => (
                  <span key={cat} className="px-4 py-2 bg-brand-900 border border-white/10 rounded-xl text-gray-300 text-sm">
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 sm:flex-none px-8 py-4 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-romantic-DEFAULT to-electric-DEFAULT hover:shadow-[0_0_30px_rgba(219,39,119,0.3)] transition-all flex items-center justify-center gap-2">
                <Phone size={20} />
                <span>Talk With {companion.name}</span>
              </button>
              <button 
                onClick={() => document.getElementById('availability-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex-1 sm:flex-none px-8 py-4 rounded-xl text-lg font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <Calendar size={20} />
                <span>See Available Times</span>
              </button>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHero;
