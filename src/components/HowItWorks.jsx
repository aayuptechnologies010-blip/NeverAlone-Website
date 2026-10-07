import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageSquarePlus, UserCheck, CalendarCheck, Sparkles, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "Tell Us What You Need",
      desc: "Share what you're going through and what kind of support, language or focus you're looking for.",
      icon: MessageSquarePlus
    },
    {
      num: "02",
      title: "Find Your Therapist",
      desc: "Explore verified therapists based on your specific needs, language preferences and goals.",
      icon: UserCheck
    },
    {
      num: "03",
      title: "Book Your Session",
      desc: "Choose a convenient date and time for your online 1-on-1 session in under a minute.",
      icon: CalendarCheck
    },
    {
      num: "04",
      title: "Start Your Journey",
      desc: "Meet your therapist in a confidential safe space and begin your path toward better wellbeing.",
      icon: Sparkles
    }
  ];

  return (
    <section id="how-it-works" className="py-14 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-block px-3 py-1 rounded-full bg-[#083058]/5 text-[#083058] text-xs font-semibold uppercase tracking-wider mb-3">
            Simple 4-Step Process
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#083058] tracking-tight font-display mb-3">
            Starting Therapy Is Easier Than You Think.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            No complicated paperwork. Just supportive care when you need it.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#fbfdfc] border border-slate-100 rounded-2xl p-6 text-left relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00839a]/10 text-[#00839a] flex items-center justify-center font-bold">
                    <step.icon size={22} />
                  </div>
                  <span className="text-2xl font-black text-slate-200 font-display">{step.num}</span>
                </div>
                <h3 className="text-lg font-bold text-[#083058] mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/first-session"
            className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-[#083058] hover:bg-[#0c4a6e] shadow-sm hover:shadow-md transition-all"
          >
            <span>Find My Therapist →</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
