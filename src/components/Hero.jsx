import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Heart, Shield, Lock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-brand-50 pt-16 pb-32 overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-40 left-0 -ml-20 w-72 h-72 bg-brand-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto pt-16">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white text-brand-700 shadow-sm border border-brand-100">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              18+ Private Platform
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-6xl lg:text-7xl font-semibold text-brand-950 tracking-tight leading-tight mb-6"
          >
            Someone to talk to. <br className="hidden md:block"/>
            <span className="text-brand-500">Someone who listens.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-xl text-brand-700 leading-relaxed max-w-2xl mx-auto mb-6"
          >
            Talk. Connect. Be Yourself. Never Alone is a private online conversation platform designed to make it easier to find someone to talk to.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#categories" 
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-full text-white bg-brand-900 hover:bg-brand-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Find Someone To Talk To
            </a>
            <a 
              href="#how-it-works" 
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-full text-brand-900 bg-white border border-brand-200 hover:bg-brand-50 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
            >
              Explore How It Works
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-brand-600 max-w-3xl mx-auto border-t border-brand-200 pt-8"
          >
            <div className="flex items-center justify-center gap-2">
              <Lock className="w-5 h-5 text-brand-500" />
              <span>Private & Secure</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-5 h-5 text-brand-500" />
              <span>Respectful Boundaries</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-5 h-5 text-brand-500" />
              <span>Phone Calls Only</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
