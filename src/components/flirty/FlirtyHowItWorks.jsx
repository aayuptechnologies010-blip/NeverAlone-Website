import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Choose Flirty Mode',
    desc: 'Confirm you are 18+ and ready for lighthearted conversation.',
  },
  {
    num: '02',
    title: 'Find someone whose personality feels right',
    desc: 'Browse verified companions who specialize in fun, flirty banter.',
  },
  {
    num: '03',
    title: 'Choose an available time',
    desc: 'Schedule a time that works for you, day or night.',
  },
  {
    num: '04',
    title: 'Talk through a private phone call',
    desc: 'Your number is never shared. Just talk and enjoy the chemistry.',
  },
];

export default function FlirtyHowItWorks() {
  return (
    <section id="how-it-works" className="py-16 relative bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-3xl font-semibold text-white mb-4">
            How Flirty Mode Works
          </h2>
          <p className="text-gray-400">
            A simple, safe and private way to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-3xl font-semibold text-white/5 mb-4 font-mono">
                {step.num}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-400">
                {step.desc}
              </p>
              {/* Connector line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[60%] w-full h-[1px] bg-white/10" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4">
          {['NO VIDEO', 'NO PHYSICAL MEETUPS', 'NON-EXPLICIT', '18+ ONLY'].map((badge) => (
            <div key={badge} className="px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-xs font-semibold tracking-wider text-red-400 uppercase">
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
