import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Users, Sparkles, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';
import WhyNeuravia from '../components/WhyNeuravia';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';
import EmergencySupport from '../components/EmergencySupport';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fbfdfc] font-sans text-slate-800 pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#00839a]/10 text-[#00839a] text-xs font-semibold uppercase tracking-wider">
            About Neuravia
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#083058] tracking-tight font-display leading-tight">
            Where Minds Find Peace &amp; Genuine Care.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Neuravia is a mental health organisation dedicated to making compassionate, professional emotional support accessible, private, and stigma-free for everyone.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-14 sm:py-16 bg-[#fbfdfc] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm text-left space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#00839a]/10 text-[#00839a] flex items-center justify-center">
                <Heart size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[#083058] font-display">Our Mission</h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                To eliminate the barrier of seeking therapy by creating a calm, safe and non-judgmental space where individuals connect with verified professionals in comfort and privacy.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm text-left space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#083058]/5 text-[#083058] flex items-center justify-center">
                <Sparkles size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[#083058] font-display">Our Philosophy</h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Mental wellbeing deserves the exact same regular care, respect and attention as physical health. Small, supportive conversations can spark lifelong healing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyNeuravia />
      <Testimonials />
      <FinalCTA />
      <EmergencySupport />
    </div>
  );
}
