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
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-brand-200 uppercase font-sans">
                Evidence-Based CBT + Neuroscience Sound Therapy & Listening
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] mb-5 tracking-tight font-display">
              Where Minds Find Peace.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-teal to-brand-leaf font-serif italic font-normal">
                Scientifically Supported,
              </span>
              {' '}Empathetically Heard.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl leading-relaxed font-normal">
              Break free from anxiety, relationship stress, burnout, and overthinking. Private 1-on-1 audio sessions with verified listeners and certified therapists combining CBT with restorative acoustic waves.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-6 w-full sm:w-auto">
              <Link
                to="/first-session"
                className="px-7 py-3.5 rounded-full text-base font-bold text-white bg-gradient-to-r from-brand-teal to-brand-500 hover:from-brand-600 hover:to-brand-teal shadow-[0_0_25px_rgba(2,132,199,0.35)] transition-all duration-300 text-center transform hover:-translate-y-0.5 border border-cyan-300/30"
              >
                Book Your First Session
              </Link>
              <Link
                to="/categories"
                className="px-7 py-3.5 rounded-full text-base font-semibold text-slate-200 bg-white/5 hover:bg-white/10 hover:text-white border border-white/15 transition-all duration-300 text-center backdrop-blur-sm"
              >
                Explore Specialties
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

          {/* RIGHT SIDE: Interactive Calm Session Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-md mx-auto mt-8 lg:mt-0"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-teal/25 via-brand-cyan/20 to-brand-leaf/20 rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative bg-gradient-to-b from-brand-900/95 via-brand-900/90 to-brand-950 border border-brand-700/60 rounded-3xl p-6 sm:p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-xl">
              
              {/* Top Status Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center space-x-2.5">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-leaf opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-leaf" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Verified Session In-Progress</span>
                    <span className="text-[11px] text-slate-400">Audio Only • End-to-End Private</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-brand-teal/20 border border-brand-teal/30 text-[11px] font-semibold text-brand-300">
                  CBT + Sound
                </span>
              </div>

              {/* Therapist / Listener Active Card */}
              <div className="bg-brand-950/70 border border-white/10 rounded-2xl p-4 mb-4 flex items-center space-x-4">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-brand-teal to-brand-leaf p-0.5">
                    <div className="w-full h-full rounded-full bg-brand-900 flex items-center justify-center font-bold text-brand-200 text-lg">
                      DR
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-brand-leaf border-2 border-brand-950" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-base font-bold text-white truncate">Dr. Riya Sen</h3>
                    <CheckCircle2 size={14} className="text-brand-leaf shrink-0" />
                  </div>
                  <p className="text-xs text-brand-300 font-medium">RCI Registered • Clinical Psychologist</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Specializes in Anxiety, CBT & Emotional Balance</p>
                </div>
              </div>

              {/* Live Waveform / Audio State */}
              <div className="bg-brand-950/90 border border-brand-800/80 rounded-2xl p-4 mb-5">
                <div className="flex items-center justify-between text-xs text-slate-300 mb-2.5 font-medium">
                  <span className="flex items-center gap-1.5 text-brand-leaf">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-leaf animate-pulse" />
                    Alpha Wave Resonance (10 Hz)
                  </span>
                  <span className="text-slate-400">Live Calibration</span>
                </div>

                {/* Animated Wave Bars */}
                <div className="h-10 flex items-end justify-between gap-1 px-1">
                  {[45, 80, 50, 95, 60, 35, 75, 100, 55, 85, 40, 70, 90, 60, 40, 80, 95, 50, 75, 45].map((h, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [`${Math.max(20, h * 0.4)}%`, `${h}%`, `${Math.max(25, h * 0.6)}%`] }}
                      transition={{ duration: 1.2 + (i % 4) * 0.2, repeat: Infinity, ease: "easeInOut" }}
                      className="flex-1 rounded-full bg-gradient-to-t from-brand-teal via-brand-cyan to-brand-leaf"
                    />
                  ))}
                </div>
              </div>

              {/* Trust Features Grid */}
              <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-200">
                <div className="bg-white/5 border border-white/5 rounded-xl p-2.5 flex items-center space-x-2">
                  <Shield size={14} className="text-brand-teal shrink-0" />
                  <span>No Video • Phone Only</span>
                </div>
                <div className="bg-white/5 border border-white/5 rounded-xl p-2.5 flex items-center space-x-2">
                  <Heart size={14} className="text-brand-leaf shrink-0" />
                  <span>100% Non-Judgmental</span>
                </div>
              </div>

              {/* Bottom Quick Connect Action */}
              <Link
                to="/first-session"
                className="mt-5 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-brand-teal to-brand-500 hover:from-brand-600 hover:to-brand-teal text-white font-bold text-xs sm:text-sm text-center block transition-all shadow-md shadow-brand-teal/30"
              >
                Connect With An Available Specialist Now
              </Link>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
