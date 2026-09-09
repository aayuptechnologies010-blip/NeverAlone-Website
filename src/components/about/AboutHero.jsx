import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-950 overflow-hidden">
      {/* Warm background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950 via-romantic-DEFAULT/5 to-brand-950 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-romantic-DEFAULT/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-romantic-DEFAULT/20 bg-romantic-DEFAULT/5 mb-8"
        >
          <span className="text-xs font-semibold text-romantic-300 uppercase tracking-wider">
            About Never Alone
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-3xl lg:text-7xl font-semibold text-white leading-tight mb-6"
        >
          Everyone deserves <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-romantic-pink to-electric-cyan">
            someone to talk to.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Never Alone exists to make meaningful human connection easier — giving adults a private, respectful place to talk, be heard and simply be themselves.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <Link
            to="/categories"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-brand-950 bg-white hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Find Someone To Talk To
          </Link>
          <Link
            to="/how-it-works"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-medium text-gray-300 border border-white/20 hover:bg-white/5 transition-colors"
          >
            How It Works
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm text-gray-500 uppercase tracking-widest font-medium"
        >
          <span>18+</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-700" />
          <span>Private</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-700" />
          <span>Respectful</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-700" />
          <span>Phone Calls Only</span>
        </motion.div>

        {/* Visual Composition */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 relative max-w-4xl mx-auto h-[300px] md:h-[400px] flex items-center justify-center"
        >
          {/* Connecting line */}
          <div className="absolute top-1/2 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-electric-cyan/30 to-transparent -translate-y-1/2" />
          
          {/* Left Person */}
          <div className="absolute left-0 md:left-10 top-1/2 -translate-y-1/2 z-10">
             <div className="relative">
               <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-brand-950 overflow-hidden shadow-2xl relative z-10">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" alt="Person" className="w-full h-full object-cover" />
               </div>
               <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl rounded-bl-none text-xs md:text-sm text-white shadow-xl whitespace-nowrap">
                  “Hey, I just need someone to talk to.”
               </div>
             </div>
          </div>

          {/* Right Person */}
          <div className="absolute right-0 md:right-10 top-1/2 -translate-y-1/2 z-10">
             <div className="relative">
               <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-brand-950 overflow-hidden shadow-2xl relative z-10">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" alt="Person" className="w-full h-full object-cover" />
               </div>
               <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-electric-cyan/20 backdrop-blur-md border border-electric-cyan/30 px-4 py-2 rounded-2xl rounded-tr-none text-xs md:text-sm text-white shadow-xl whitespace-nowrap">
                  “I’m listening. Take your time.”
               </div>
             </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
