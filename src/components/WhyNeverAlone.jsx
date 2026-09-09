import React from 'react';
import { motion } from 'framer-motion';
import { Ear, MessageSquare, Lightbulb, HeartHandshake, ShieldCheck, Ruler } from 'lucide-react';

const WhyNeverAlone = () => {
  const benefits = [
    {
      title: "Someone Who Listens",
      desc: "We don't interrupt or judge. We're just here to hear you out when you need it most.",
      icon: Ear
    },
    {
      title: "Real Conversations",
      desc: "No bots, no scripted responses. Just genuine human connection and real empathy.",
      icon: MessageSquare
    },
    {
      title: "Fresh Perspective",
      desc: "Sometimes talking to a stranger gives you the clarity you couldn't find with friends.",
      icon: Lightbulb
    },
    {
      title: "No Judgment",
      desc: "A completely safe space where you can be yourself without fear of criticism.",
      icon: HeartHandshake
    },
    {
      title: "Privacy First",
      desc: "Your phone number is hidden. Your conversations are private. Your identity is safe.",
      icon: ShieldCheck
    },
    {
      title: "Clear Boundaries",
      desc: "A respectful environment where both you and your companion feel comfortable.",
      icon: Ruler
    }
  ];

  return (
    <section className="py-10 bg-brand-950 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-white mb-3"
          >
            Why Never Alone?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-gray-400"
          >
            Because everyone deserves to be heard.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const colors = [
              "bg-pink-500",
              "bg-emerald-500",
              "bg-blue-500",
              "bg-orange-500",
              "bg-purple-500",
              "bg-rose-500"
            ];
            const colorClass = colors[index % colors.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-brand-900 border border-white/8 p-6 rounded-[2rem] hover:shadow-xl hover:border-pink-500/30 hover:shadow-pink-500/10 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              >
                <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-5 shadow-md ${colorClass} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                    <benefit.icon size={26} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors">{benefit.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyNeverAlone;
