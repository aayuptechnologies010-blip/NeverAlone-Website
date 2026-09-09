import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function FaqSupportCTA() {
  return (
    <section className="py-16 bg-brand-950 relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-electric-cyan/5 to-brand-950 pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
            Still Have A Question?
          </p>

          <h2 className="text-3xl md:text-3xl font-semibold text-white mb-6">
            Couldn’t find what you were looking for?
          </h2>

          <p className="text-gray-400 mb-10 text-lg">
            Reach out and let us know what you need help with.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 rounded-full text-base font-semibold text-brand-950 bg-white hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Contact Support
            </button>
            <Link
              to="/safety"
              className="px-8 py-4 rounded-full text-base font-medium text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
            >
              Visit Safety Center
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
