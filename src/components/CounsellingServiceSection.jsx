import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  Calendar, 
  Sparkles, 
  Heart, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Smile,
  Compass
} from 'lucide-react';

const CounsellingServiceSection = () => {
  const whatsappUrl = "https://wa.me/919876543210?text=Hi%20Neuravia%2C%20I%20would%20like%20to%20book%20a%20counselling%20session.";

  return (
    <section className="py-16 relative bg-brand-950 overflow-hidden border-t border-white/10">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-teal/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Container with warm styling & glass border */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-b from-[#092a35]/90 via-brand-900/95 to-brand-950 border border-emerald-500/20 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.6)] overflow-hidden"
        >
          {/* Subtle decorative top bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400" />

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Visual Artwork Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-6 flex flex-col items-center"
            >
              <div className="relative group w-full max-w-lg rounded-2xl overflow-hidden border-2 border-emerald-500/30 shadow-2xl bg-brand-900/40">
                {/* Visual Header pill */}
                <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                  <span className="inline-flex items-center space-x-1.5 bg-emerald-950/80 backdrop-blur-md border border-emerald-500/40 px-3 py-1 rounded-full text-emerald-300 text-xs font-semibold shadow-lg">
                    <Sparkles size={13} className="text-emerald-400 animate-pulse" />
                    <span>Safe & Non-Judgmental</span>
                  </span>
                  <span className="inline-flex items-center space-x-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-slate-300 text-xs font-medium">
                    <Heart size={12} className="text-rose-400 fill-rose-400" />
                    <span>You are not alone</span>
                  </span>
                </div>

                {/* Illustration Image */}
                <img 
                  src="/images/counselling_service.jpg" 
                  alt="Counselling Service - A safe space to talk, heal and grow" 
                  className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Bottom Overlay Pill on Image */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="bg-emerald-950/90 backdrop-blur-md border border-emerald-400/30 rounded-xl p-3 text-center shadow-lg">
                    <p className="text-xs sm:text-sm font-medium text-emerald-200 flex items-center justify-center space-x-1.5">
                      <span>Untangle your thoughts with compassionate listeners</span>
                      <Smile size={15} className="text-emerald-300" />
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Information & Actions */}
            <div className="lg:col-span-6 text-left space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles size={14} className="text-emerald-400" />
                <span>Counselling & Talk Therapy</span>
              </div>

              {/* Title & Subheading */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display leading-[1.15]">
                  A safe space to talk, <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300">
                    heal and grow.
                  </span>
                </h2>
                <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
                  Feeling overwhelmed or carrying thoughts you cannot share with anyone? Connect with verified counsellors and empathetic listeners anytime from the comfort and privacy of your room.
                </p>
              </div>

              {/* Feature Points */}
              <div className="grid sm:grid-cols-2 gap-3.5 pt-1">
                <div className="flex items-start space-x-3 bg-white/5 border border-white/10 rounded-2xl p-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold">100% Confidential</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Completely anonymous & end-to-end private</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-white/5 border border-white/10 rounded-2xl p-3.5">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Compass size={18} />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold">Custom Guidance</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Stress, anxiety, burnout & relationships</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                {/* WhatsApp Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2.5 px-6 py-4 rounded-2xl font-bold text-base text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-[0_0_25px_rgba(37,211,102,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageCircle size={20} className="fill-white/20" />
                  <span>Chat on WhatsApp</span>
                  <ArrowRight size={17} />
                </a>

                {/* Direct Booking on Web */}
                <Link
                  to="/first-session"
                  className="flex items-center justify-center space-x-2 px-6 py-4 rounded-2xl font-bold text-base text-slate-900 bg-white hover:bg-slate-100 shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Calendar size={18} className="text-emerald-700" />
                  <span>Book Appointment</span>
                </Link>
              </div>

              {/* Subtext reassurance */}
              <div className="flex items-center space-x-2 text-xs text-slate-400 pt-1">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>Instant confirmation • Available today in slots from ₹499</span>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CounsellingServiceSection;
