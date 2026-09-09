import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Stethoscope, AlertCircle } from 'lucide-react';

export default function ProfDifference({ onExplore }) {
  return (
    <section id="difference" className="py-16 bg-brand-950 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-3xl font-semibold text-white mb-4">
            Friendly conversation and professional support are different.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            It is important to choose the right kind of support for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
          {/* Companion Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-romantic-DEFAULT/10 border border-romantic-DEFAULT/20 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-romantic-pink" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Companion Conversation</h3>
            </div>
            
            <p className="text-gray-400 mb-6 flex-1">
              General supportive conversation with empathetic listeners.
            </p>

            <div className="mb-8">
              <p className="text-sm font-semibold text-gray-300 uppercase tracking-widest mb-4">Can include:</p>
              <ul className="space-y-3">
                {[
                  'Listening and empathy',
                  'Everyday conversation',
                  'Friendly perspectives',
                  'Talking about relationships or career',
                  'General life situations'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-romantic-pink mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-6 border-t border-white/10 flex items-start gap-3 bg-red-500/5 p-4 rounded-xl border-red-500/10">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <p className="text-sm text-red-200/80 font-medium">
                Companions are not therapists. They do not diagnose or treat mental health conditions.
              </p>
            </div>
          </motion.div>

          {/* Professional Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-electric-cyan/5 border border-electric-cyan/20 rounded-3xl p-8 lg:p-10 flex flex-col relative overflow-hidden"
          >
            {/* Subtle highlight */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-electric-cyan/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-electric-cyan/10 border border-electric-cyan/20 flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-electric-cyan" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Professional Support</h3>
              </div>
              
              <p className="text-gray-400 mb-6 flex-1">
                Structured support from appropriately qualified mental-health professionals.
              </p>

              <div className="mb-8">
                <p className="text-sm font-semibold text-gray-300 uppercase tracking-widest mb-4">Can include:</p>
                <ul className="space-y-3">
                  {[
                    'Support from appropriately qualified professionals',
                    'Structured professional sessions',
                    'Specific areas of practice',
                    'Evidence-based approaches where appropriate'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6">
                <button
                  onClick={onExplore}
                  className="w-full py-4 rounded-xl text-brand-950 font-semibold bg-electric-cyan hover:bg-electric-cyan/90 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                >
                  Find a Professional
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
