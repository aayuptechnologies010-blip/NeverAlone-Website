import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const allowed = [
  'Friendly conversation',
  'General life perspectives',
  'Relationship conversation',
  'Family conversation',
  'Career discussion',
  'College & student life',
  'Humor',
  'Compliments',
  'Mutual non-explicit flirting',
  'Everyday thoughts and experiences'
];

export default function SafetyAllowed() {
  return (
    <section id="allowed" className="py-16 md:py-16 bg-brand-950 relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-electric-cyan/10 border border-electric-cyan/20 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-electric-cyan" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Conversations that belong here
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            {allowed.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-start gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
