import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, Heart, Calendar, Home, Sparkles } from 'lucide-react';

const WhyNeuravia = () => {
  const points = [
    {
      title: "Private & Confidential",
      desc: "Your conversations deserve a safe, secure and private space.",
      icon: ShieldCheck
    },
    {
      title: "Qualified Professionals",
      desc: "Connect with verified and experienced mental health professionals.",
      icon: UserCheck
    },
    {
      title: "Compassionate Care",
      desc: "No judgement. No pressure. Just genuine empathy and support.",
      icon: Heart
    },
    {
      title: "Flexible Sessions",
      desc: "Choose a schedule that seamlessly fits your daily routine.",
      icon: Calendar
    },
    {
      title: "Online Support",
      desc: "Access therapy from the comfort and privacy of your home.",
      icon: Home
    },
    {
      title: "Personalized Approach",
      desc: "Your journey is unique. Your care plan should be too.",
      icon: Sparkles
    }
  ];

  return (
    <section className="py-14 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-block px-3 py-1 rounded-full bg-[#083058]/5 text-[#083058] text-xs font-semibold uppercase tracking-wider mb-3">
            Why Choose Us
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#083058] tracking-tight font-display mb-3">
            Care That Puts You First.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Designed to make asking for help comfortable, simple and empowering.
          </p>
        </div>

        {/* 6 Grid items */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-[#fbfdfc] border border-slate-100 rounded-2xl p-6 text-left hover:border-[#00839a]/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00839a]/10 text-[#00839a] flex items-center justify-center mb-4">
                <pt.icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-[#083058] mb-2">{pt.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pt.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyNeuravia;
