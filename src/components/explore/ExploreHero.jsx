import React from 'react';
import { motion } from 'framer-motion';

const ExploreHero = () => {
  const floatingPhrases = [
    { text: "Just need to vent", top: "20%", left: "6%", delay: 0 },
    { text: "Relationship on my mind", top: "28%", right: "8%", delay: 1 },
    { text: "Feeling a little alone", top: "62%", left: "5%", delay: 2 },
    { text: "Need another perspective", bottom: "25%", right: "10%", delay: 1.5 },
    { text: "Want something fun", top: "48%", right: "18%", delay: 0.5 },
  ];

  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-brand-950"
      style={{ backgroundImage: 'url(/hero_bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brand-950/80" />

      {/* Glow blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-pink-600/15 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />
      </div>

      {/* Floating Phrases (Desktop Only) */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block z-10">
        {floatingPhrases.map((phrase, idx) => (
          <motion.div
            key={idx}
            className="absolute px-4 py-2 rounded-full bg-white/8 border border-white/10 backdrop-blur-md text-sm text-gray-300 font-medium italic"
            style={{ top: phrase.top, left: phrase.left, right: phrase.right, bottom: phrase.bottom }}
            animate={{ y: [0, -12, 0], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: phrase.delay }}
          >
            {phrase.text}
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Pill badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-pink-600/15 border border-pink-500/20 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-pink-300">Choose what feels right today 💗</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-5">
            What do you feel like{' '}
            <br className="hidden md:block" />
            <span className="font-serif italic text-pink-400">talking about?</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            No complicated reason needed. Start with what's on your mind — we'll help you find the right kind of conversation.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full sm:w-auto">
            <button
              onClick={() => document.getElementById('mood-selector')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-brand-950 bg-white hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 transform hover:-translate-y-1"
            >
              Help Me Choose
            </button>
            <button
              onClick={() => document.getElementById('all-categories')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-medium text-white border border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              Browse All Conversations
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-400 font-medium uppercase tracking-wider">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">18+</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Private</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Phone Calls Only</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Respectful</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreHero;
