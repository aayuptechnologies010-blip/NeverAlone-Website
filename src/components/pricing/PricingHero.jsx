import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Phone, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingHero = () => {
  return (
    <section className="pt-20 pb-10 relative overflow-hidden text-center min-h-[40vh] flex flex-col justify-center">
      {/* Premium Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/pricing_hero_real_bg.jpg)' }}
      />
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-brand-950/85 backdrop-blur-[3px] z-0" />
      
      {/* Subtle Glows over the image */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-pink-600/10 via-purple-600/5 to-transparent blur-[100px] pointer-events-none z-0" />

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 backdrop-blur-md text-white text-[10px] md:text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6 shadow-xl"
        >
          <Heart size={12} className="text-pink-500 fill-pink-500" />
          Simple plans. More time to talk.
        </motion.div>
        
        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight tracking-tight"
        >
          Someone to talk to,
          <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 ml-2 md:ml-0">
            whenever you need the conversation.
          </span>
        </motion.h1>
        
        {/* Supporting text with gradient highlight */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-sm md:text-base mb-8 max-w-xl mx-auto font-medium"
        >
          Choose a plan that gives you one <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-bold">60‑minute</span> companion conversation every day.
        </motion.p>
        
        {/* Trust badges */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 text-gray-300 text-xs md:text-sm font-medium"
        >
          <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-sm"><ShieldCheck size={14} className="text-pink-400" /> Private</div>
          <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-sm"><Phone size={14} className="text-purple-400" /> Phone Calls Only</div>
          <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-sm"><span className="text-pink-400 font-bold">18+</span> Respectful</div>
        </motion.div>
        
        {/* Reassurance */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-500 text-[10px] md:text-xs tracking-wide uppercase"
        >
          No complicated pricing. Choose your plan and start talking.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingHero;
