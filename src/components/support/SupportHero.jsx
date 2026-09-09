import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function SupportHero({ onGetSupport }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-950 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950 via-electric-cyan/5 to-brand-950 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-electric-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8"
        >
          <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
            Contact & Support
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-3xl lg:text-6xl font-semibold text-white leading-tight mb-6"
        >
          How can we help?
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Whether it’s a booking question, account issue, safety concern or something else, tell us what you need help with.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
        >
          <button
            onClick={onGetSupport}
            className="px-8 py-4 rounded-full text-base font-semibold text-brand-950 bg-white hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Get Support
          </button>
          <Link
            to="/faq"
            className="px-8 py-4 rounded-full text-base font-medium text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
          >
            Browse FAQs
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-electric-cyan"
        >
          <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
          <span className="w-1 h-1 rounded-full bg-electric-cyan/30" />
          <Link to="/safety" className="hover:text-white transition-colors">Safety Center</Link>
          <span className="w-1 h-1 rounded-full bg-electric-cyan/30" />
          <Link to="/dashboard/conversations" className="hover:text-white transition-colors">My Conversations</Link>
          <span className="w-1 h-1 rounded-full bg-electric-cyan/30" />
          <Link to="/professional-support" className="hover:text-white transition-colors">Professional Support</Link>
        </motion.div>
      </div>
    </section>
  );
}
