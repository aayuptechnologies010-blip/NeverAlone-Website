import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, UserCheck, Video, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

const HeroSection = () => {
  const trustPoints = [
    { label: "Confidential & Private", icon: ShieldCheck },
    { label: "Qualified Therapists", icon: UserCheck },
    { label: "Online Sessions", icon: Video },
    { label: "Flexible Scheduling", icon: Calendar },
  ];

  return (
    <section className="relative pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-[#fbfdfc]">
      {/* Subtle soft background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00839a]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#083058]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#00839a]/10 border border-[#00839a]/20 text-[#00839a] text-xs font-semibold tracking-wide">
              <span>Where Minds Find Peace</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#083058] leading-[1.2] tracking-tight font-display">
              A Safe Space for Your Mind, Heart &amp; Wellbeing.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Life can feel overwhelming sometimes. You don't have to navigate it alone. Connect with a compassionate therapist and take the first step toward feeling better.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/first-session"
                className="px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-[#083058] hover:bg-[#0c4a6e] shadow-sm hover:shadow-md transition-all duration-200 text-center flex items-center justify-center space-x-2"
              >
                <span>Book Your First Session — ₹499</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/categories"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-[#083058] bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all duration-200 text-center"
              >
                Explore Therapies
              </Link>
            </div>

            {/* Trust Points Checklist */}
            <div className="pt-6 border-t border-slate-100">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {trustPoints.map((point, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle2 size={16} className="text-[#00839a] shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-700">{point.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Photography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-xl p-2 sm:p-3">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-100">
                <img
                  src="/images/neuravia-hero.jpg"
                  alt="Neuravia therapy room with therapist and client"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating verified badge */}
              <div className="mt-3 px-3 py-2 bg-slate-50 rounded-lg flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1.5 font-medium text-[#083058]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Verified Specialists Available
                </span>
                <span className="font-semibold text-[#00839a]">First Session ₹499</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
