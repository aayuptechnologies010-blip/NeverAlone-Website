import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Compass, TrendingUp } from 'lucide-react';

const EmotionalIntro = () => {
  const pillars = [
    {
      title: "Feel Heard",
      description: "A safe space to express your thoughts and emotions freely without fear of judgment.",
      icon: HeartHandshake
    },
    {
      title: "Understand Yourself",
      description: "Discover underlying patterns, emotions and personal challenges with professional guidance.",
      icon: Compass
    },
    {
      title: "Move Forward",
      description: "Build healthier coping habits, stronger relationships and a more balanced, peaceful life.",
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-14 sm:py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Scene */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 p-2 sm:p-3 shadow-md">
              <div className="rounded-xl overflow-hidden aspect-[4/3] bg-slate-100">
                <img 
                  src="/images/neuravia-hero.jpg" 
                  alt="Therapist calmly listening to a client" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Text Content & Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-left space-y-6"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-[#083058]/5 text-[#083058] text-xs font-semibold uppercase tracking-wider">
              Care That Puts You First
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#083058] leading-tight font-display">
              You Deserve a Space Where You Can Truly Be Yourself.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              At Neuravia, we believe that mental wellbeing deserves the same care and attention as physical wellbeing. Our platform helps you connect with supportive professionals who listen without judgement and understand what you're going through.
            </p>

            {/* 3 Value Pillars */}
            <div className="grid sm:grid-cols-3 gap-5 pt-4">
              {pillars.map((p, idx) => (
                <div key={idx} className="bg-[#fbfdfc] border border-slate-100 rounded-xl p-5 hover:border-[#00839a]/30 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-[#00839a]/10 text-[#00839a] flex items-center justify-center mb-3">
                    <p.icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-[#083058] mb-1.5">{p.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default EmotionalIntro;
