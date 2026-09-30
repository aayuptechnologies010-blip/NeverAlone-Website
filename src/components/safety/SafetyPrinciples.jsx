import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Phone, MapPinOff, SquareUser, Hand, EyeOff } from 'lucide-react';

const icons = [
  { icon: Users, color: 'text-blue-500', bg: 'bg-blue-50 border-blue-100', hoverGlow: 'group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]' },
  { icon: Shield, color: 'text-emerald-500', bg: 'bg-emerald-50 border-emerald-100', hoverGlow: 'group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]' },
  { icon: Phone, color: 'text-purple-500', bg: 'bg-purple-50 border-purple-100', hoverGlow: 'group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]' },
  { icon: MapPinOff, color: 'text-pink-500', bg: 'bg-pink-50 border-pink-100', hoverGlow: 'group-hover:shadow-[0_0_20px_rgba(236,72,153,0.15)]' },
  { icon: Hand, color: 'text-amber-500', bg: 'bg-amber-50 border-amber-100', hoverGlow: 'group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]' },
  { icon: SquareUser, color: 'text-indigo-500', bg: 'bg-indigo-50 border-indigo-100', hoverGlow: 'group-hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]' },
  { icon: EyeOff, color: 'text-rose-500', bg: 'bg-rose-50 border-rose-100', hoverGlow: 'group-hover:shadow-[0_0_20px_rgba(244,63,94,0.15)]' },
];

export default function SafetyPrinciples({ principles }) {
  return (
    <section id="guidelines" className="py-24 bg-gray-50 relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white mb-6 shadow-sm"
          >
            <Shield className="w-4 h-4 text-emerald-500" />
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              Core Principles
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Safety is part of the conversation.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto font-medium"
          >
            These core principles guide how Neuravia operates to keep everyone comfortable, secure, and respected.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
          {principles.map((principle, index) => {
            const style = icons[index % icons.length];
            const Icon = style.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                key={principle.title}
                className={`group bg-white border border-gray-100 rounded-[2rem] p-8 flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${style.hoverGlow} ${
                  index === principles.length - 1 ? 'lg:col-span-3 xl:col-span-1 xl:col-start-4' : ''
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${style.bg} ${style.color}`}>
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                  {principle.title}
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed flex-1">
                  {principle.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
