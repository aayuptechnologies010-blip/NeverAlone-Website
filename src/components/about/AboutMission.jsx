import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, ShieldCheck, EyeOff } from 'lucide-react';

export default function AboutMission() {
  return (
    <section className="py-16 bg-brand-950 relative">
      <div className="max-w-5xl mx-auto px-4 text-center">
        
        <p className="text-xs font-semibold text-electric-cyan uppercase tracking-widest mb-6">
          Our Mission
        </p>
        
        <h2 className="text-3xl md:text-3xl font-semibold text-white mb-8 max-w-3xl mx-auto leading-tight">
          Make meaningful conversations easier to find.
        </h2>
        
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Our mission is to create a space where adults can connect through real conversations while keeping privacy, safety and personal boundaries at the center of the experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Pillar icon={HeartHandshake} title="Connection" />
          <Pillar icon={EyeOff} title="Privacy" />
          <Pillar icon={ShieldCheck} title="Respect" />
        </div>

      </div>
    </section>
  );
}

function Pillar({ icon: Icon, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-white/5 border border-white/10"
    >
      <div className="w-16 h-16 rounded-full bg-electric-cyan/10 flex items-center justify-center">
        <Icon className="w-8 h-8 text-electric-cyan" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </motion.div>
  );
}
