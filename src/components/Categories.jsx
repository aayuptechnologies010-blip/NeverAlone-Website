import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  HeartHandshake, 
  Sparkles, 
  BatteryLow, 
  CloudRain, 
  Compass, 
  ArrowRight 
} from 'lucide-react';

const Categories = () => {
  const challenges = [
    {
      title: "Anxiety & Stress",
      desc: "Constant worrying, overthinking, restlessness or feeling overwhelmed by everyday pressures.",
      icon: Activity,
    },
    {
      title: "Relationship Challenges",
      desc: "Communication issues, emotional distance, conflicts, boundary concerns or breakups.",
      icon: HeartHandshake,
    },
    {
      title: "Self-Esteem",
      desc: "Build confidence, self-understanding and a healthier, kinder relationship with yourself.",
      icon: Sparkles,
    },
    {
      title: "Burnout",
      desc: "Feeling emotionally exhausted, unmotivated, overwhelmed or mentally drained from work/life.",
      icon: BatteryLow,
    },
    {
      title: "Depression & Low Mood",
      desc: "Compassionate support for persistent sadness, low motivation, loneliness and emotional heaviness.",
      icon: CloudRain,
    },
    {
      title: "Life Changes",
      desc: "Career shifts, family situations, loss, major transitions, relocation and uncertainty.",
      icon: Compass,
    }
  ];

  return (
    <section className="py-14 sm:py-16 bg-[#fbfdfc] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-block px-3 py-1 rounded-full bg-[#00839a]/10 text-[#00839a] text-xs font-semibold uppercase tracking-wider mb-3">
            Areas of Support
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#083058] tracking-tight font-display mb-4">
            Whatever You're Going Through, You Don't Have to Face It Alone.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Find guidance tailored specifically to what you are experiencing today.
          </p>
        </div>

        {/* 6 Challenges Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#00839a]/30 transition-all text-left flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#083058]/5 text-[#083058] flex items-center justify-center mb-4">
                  <item.icon size={22} className="text-[#00839a]" />
                </div>
                <h3 className="text-lg font-bold text-[#083058] mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100/60">
                <Link
                  to="/categories"
                  className="text-xs font-semibold text-[#00839a] hover:text-[#083058] inline-flex items-center space-x-1 transition-colors"
                >
                  <span>Explore support</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Link
            to="/categories"
            className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-[#083058] bg-white border border-slate-200 hover:bg-slate-50 shadow-sm transition-all"
          >
            <span>Explore All Areas</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Categories;
