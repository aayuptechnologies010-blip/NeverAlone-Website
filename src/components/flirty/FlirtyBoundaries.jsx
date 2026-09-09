import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const allowed = [
  'Friendly flirting',
  'Playful conversation',
  'Humor',
  'Compliments',
  'Light romantic conversation',
  'Mutual non-explicit flirting',
];

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
  'Pressure for private information',
  'Offline/physical meetups',
];

export default function FlirtyBoundaries() {
  return (
    <section className="py-16 relative">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-3xl font-semibold text-white mb-4">
            Playful still means respectful.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We maintain strict boundaries to ensure everyone feels comfortable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
          {/* Allowed */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-emerald-900/10 border border-emerald-500/20 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-emerald-400">Allowed</h3>
            </div>
            <ul className="space-y-4">
              {allowed.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not Allowed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-red-900/10 border border-red-500/20 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-red-400">Not Allowed</h3>
            </div>
            <ul className="space-y-4">
              {notAllowed.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
