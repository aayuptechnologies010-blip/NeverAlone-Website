import React from 'react';
import { motion } from 'framer-motion';
import { Brain, HeartCrack, Layers, Compass, HelpCircle } from 'lucide-react';

const examples = [
  {
    icon: Brain,
    title: 'Ongoing emotional difficulties',
    desc: 'When feelings of sadness or anxiety persist and impact your daily life.',
  },
  {
    icon: Layers,
    title: 'Persistent stress or overwhelm',
    desc: 'When work, family, or life pressures feel consistently unmanageable.',
  },
  {
    icon: HeartCrack,
    title: 'Relationship concerns',
    desc: 'When you need professional guidance to navigate complex interpersonal dynamics.',
  },
  {
    icon: Compass,
    title: 'Personal challenges',
    desc: 'When you want to explore past experiences or behavioral patterns professionally.',
  },
  {
    icon: HelpCircle,
    title: 'Mental-health concerns',
    desc: 'When qualified support is appropriate for understanding and managing your mental health.',
  },
];

export default function ProfWhenToUse() {
  return (
    <section className="py-16 bg-brand-950 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-3xl font-semibold text-white mb-4">
            Looking for professional support?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            If you feel you may benefit from professional support, our verified professionals can provide structured guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {examples.map((example, index) => (
            <motion.div
              key={example.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-electric-cyan/30 transition-colors flex flex-col items-center text-center ${
                index === examples.length - 2 ? 'lg:col-start-2' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-electric-cyan/10 border border-electric-cyan/20 flex items-center justify-center mb-4">
                <example.icon className="w-6 h-6 text-electric-cyan" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {example.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {example.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
