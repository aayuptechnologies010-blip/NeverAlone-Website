import React from 'react';
import { motion } from 'framer-motion';
import { XCircle } from 'lucide-react';

const notAllowed = [
  'Sexual services',
  'Explicit sexual content',
  'Explicit images',
  'Harassment',
  'Threats',
  'Coercion',
  'Blackmail',
  'Exploitation',
  'Requests for off-platform money',
  'Pressure for private/personal information',
  'Manipulation',
  'Offline/physical meetup requests'
];

export default function SafetyNotAllowed() {
  return (
    <section id="not-allowed" className="pb-24 bg-brand-950 relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-red-950/10 border border-red-500/20 rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
              <XCircle className="w-6 h-6 text-red-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Some lines should never be crossed.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            {notAllowed.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-start gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                <span className="text-red-200/80 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
