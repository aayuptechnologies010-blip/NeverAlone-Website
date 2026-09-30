import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Phone, Heart, CheckCircle2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      className="relative pt-8 lg:pt-16 pb-10 overflow-hidden text-white bg-cover bg-center"
      style={{ backgroundImage: 'url(/hero_bg.jpg)' }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-brand-950/80 backdrop-blur-[2px]" />

      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-dream-DEFAULT/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-electric-DEFAULT/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-romantic-DEFAULT/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center">

          {/* LEFT SIDE: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-brand-900/80 border border-brand-700/60 backdrop-blur-md mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-leaf animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-brand-200 uppercase font-sans">Confidential & Empathetic Mental Health Care</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] mb-5 tracking-tight font-display">
              Where Minds Find Peace.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-teal to-brand-leaf font-serif italic font-normal">
                Someone Who Listens,
              </span>
              {' '}Whenever You Need.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl leading-relaxed font-normal">
              Talk about anxiety, relationship stress, burnout, or simply share what is on your mind. Private, 1-on-1 audio sessions with verified empathetic companions & therapists.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-6 w-full sm:w-auto">
              <Link
                to="/categories"
                className="px-7 py-3.5 rounded-full text-base font-bold text-white bg-gradient-to-r from-brand-teal to-brand-500 hover:from-brand-600 hover:to-brand-teal shadow-[0_0_25px_rgba(2,132,199,0.35)] transition-all duration-300 text-center transform hover:-translate-y-0.5 border border-cyan-300/30"
              >
                Find Someone To Talk To
              </Link>
              <Link
                to="/#how-it-works"
                className="px-7 py-3.5 rounded-full text-base font-semibold text-slate-200 bg-white/5 hover:bg-white/10 hover:text-white border border-white/15 transition-all duration-300 text-center backdrop-blur-sm"
              >
                How It Works
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-row items-center gap-3 text-xs md:text-sm text-gray-400 whitespace-nowrap overflow-x-auto pb-2 w-full custom-scrollbar">
              <div className="flex items-center space-x-1.5 shrink-0">
                <span className="font-semibold text-white bg-brand-800 px-1.5 rounded text-xs">18+</span>
                <span>Adults Only</span>
              </div>
              <div className="flex items-center space-x-1.5 shrink-0">
                <Shield size={14} className="text-romantic-pink" />
                <span>Private</span>
              </div>
              <div className="flex items-center space-x-1.5 shrink-0">
                <Phone size={14} className="text-electric-cyan" />
                <span>Phone Calls Only</span>
              </div>
              <div className="flex items-center space-x-1.5 shrink-0">
                <Heart size={14} className="text-dream-purple" />
                <span>Respectful</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Couple Image with Floating Bubbles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-sm mx-auto mt-8 lg:mt-0"
          >
            {/* Floating Bubble 1 - User */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-6 md:-left-10 bg-brand-900/90 backdrop-blur-md border border-brand-800 p-3 rounded-2xl rounded-br-sm shadow-[0_10px_30px_rgba(0,0,0,0.4)] z-20 max-w-[180px]"
            >
              <p className="text-xs text-gray-400">User: <br /><span className="text-white font-medium">"Can I just vent?"</span></p>
            </motion.div>

            {/* Floating Bubble 2 - Companion */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -right-4 md:-right-6 bg-brand-900/90 backdrop-blur-md border border-romantic-DEFAULT/30 p-3 rounded-2xl rounded-tl-sm shadow-[0_10px_30px_rgba(0,0,0,0.4)] z-20 max-w-[190px]"
            >
              <p className="text-xs text-gray-400">Aisha: <br /><span className="text-white font-medium inline-flex items-center gap-1">"Of course. I'm listening" <Heart size={12} className="text-romantic-pink inline fill-romantic-pink" /></span></p>
            </motion.div>

            {/* Glow behind image */}
            <div className="absolute -inset-4 bg-romantic-DEFAULT/20 rounded-3xl blur-2xl pointer-events-none" />

            {/* Main Couple Image */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.6)]">
              <img
                src="/hero_couple.jpg"
                alt="Two people having a heartfelt conversation"
                className="w-full h-auto object-cover"
              />
              {/* Bottom gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-brand-950/80 to-transparent" />
              
              {/* Available badge */}
              <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-brand-950/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-gray-300 font-medium">Someone is available right now</span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
