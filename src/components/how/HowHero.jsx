import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HowHero = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-brand-950">
      <div className="absolute inset-0 pointer-events-none flex justify-center">
        <div className="w-[800px] h-[500px] bg-gradient-to-r from-romantic-DEFAULT/10 via-dream-DEFAULT/10 to-electric-DEFAULT/10 rounded-full blur-[120px] -translate-y-1/3" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-gray-300">Simple. Private. Human. 💗</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-6xl font-semibold text-white mb-6 leading-tight">
            Finding someone to talk to <br className="hidden md:block"/>
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-romantic-pink to-electric-cyan">should feel easy.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Tell us what kind of conversation you need, choose someone you feel comfortable with, pick a time and just talk.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Link 
              to="/categories" 
              className="w-full sm:w-auto px-8 py-4 rounded-full text-lg font-semibold text-brand-950 bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 transform hover:-translate-y-1"
            >
              Find Someone
            </Link>
            <button 
              onClick={() => document.getElementById('how-journey')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-lg font-medium text-white border border-white/20 hover:bg-white/5 transition-all duration-300"
            >
              See The Steps
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-3 text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">
            <span>18+</span>
            <span>•</span>
            <span>Private</span>
            <span>•</span>
            <span>Phone Calls Only</span>
            <span>•</span>
            <span>Respectful</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowHero;
