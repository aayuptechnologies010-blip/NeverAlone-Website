import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Tell us what you need' },
  { num: '02', title: 'Find someone who feels right' },
  { num: '03', title: 'Choose an available time' },
  { num: '04', title: 'Talk through a private phone call' }
];

export default function AboutJourney() {
  return (
    <section className="py-16 bg-brand-950 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-3xl font-semibold text-white mb-6">
            From ‘I need someone to talk to’ <br className="hidden md:block" />
            to a real conversation.
          </h2>
        </div>

        <div className="relative mb-12">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-brand-950 border border-white/10 flex items-center justify-center text-2xl font-semibold text-electric-cyan mb-6 relative z-10 shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                  {step.num}
                </div>
                <h3 className="text-lg font-semibold text-white max-w-[200px]">
                  {step.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-romantic-pink" />
              <span className="text-sm font-medium text-gray-300">Standard daily conversation: <span className="text-white">60 Minutes</span></span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-electric-cyan" />
              <span className="text-sm font-medium text-gray-300">Extra conversation time: <span className="text-white">₹199 / additional 60 minutes</span></span>
            </div>
          </div>
          
          <Link
            to="/how-it-works"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-semibold text-brand-950 bg-white hover:bg-gray-200 transition-colors whitespace-nowrap text-center"
          >
            See How It Works
          </Link>
        </div>

      </div>
    </section>
  );
}
