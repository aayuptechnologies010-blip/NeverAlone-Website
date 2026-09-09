import React from 'react';
import { motion } from 'framer-motion';

export default function AboutWhy() {
  return (
    <section className="py-16 md:py-16 bg-brand-950 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold text-romantic-pink uppercase tracking-widest mb-6">
              Why We Exist
            </p>
            <h2 className="text-3xl md:text-3xl lg:text-6xl font-semibold text-white leading-tight mb-8">
              Sometimes you don’t need answers. <br className="hidden md:block" />
              <span className="text-gray-400">You just need someone who listens.</span>
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              <p>
                Some days you want to talk about something important.
              </p>
              <p>
                Other days, you just want to talk about your day, your relationships, your career, college, family, music, movies, plans, confusion or completely random thoughts.
              </p>
              <p className="text-white font-medium">
                Never Alone gives those conversations a place to begin.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/20 to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=800&q=80" 
              alt="Warm conversation" 
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
