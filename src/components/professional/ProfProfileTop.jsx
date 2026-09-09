import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Languages, Clock, IndianRupee } from 'lucide-react';

export default function ProfProfileTop({ professional, onBook }) {
  return (
    <section className="pt-32 pb-16 bg-brand-950 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-cyan/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-6 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3 max-w-sm mx-auto md:mx-0"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5]">
              <img
                src={professional.image}
                alt={professional.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950 to-transparent opacity-60" />
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 w-full"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-electric-cyan/10 border border-electric-cyan/20 mb-4">
              <CheckCircle2 className="w-4 h-4 text-electric-cyan" />
              <span className="text-xs font-semibold text-electric-cyan uppercase tracking-wider">
                Verified Professional
              </span>
            </div>

            <h1 className="text-3xl lg:text-3xl font-semibold text-white mb-2">
              {professional.name}
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              {professional.qualification}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-t border-b border-white/10 mb-8">
              <StatItem icon={Languages} label="Languages" value={professional.languages.join(', ')} />
              <StatItem icon={Clock} label="Duration" value={professional.sessionDuration} />
              <StatItem icon={IndianRupee} label="Pricing" value={professional.pricing} />
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Experience</span>
                <span className="text-sm font-medium text-white">{professional.experience}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onBook}
                className="px-8 py-4 rounded-xl text-base font-semibold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)] text-center"
              >
                Book Professional Session
              </button>
              <a
                href="#availability"
                className="px-8 py-4 rounded-xl text-base font-medium text-gray-300 border border-white/20 hover:bg-white/10 transition-colors text-center"
              >
                See Available Times
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ icon: Icon, label, value }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-gray-500 font-semibold">
        <Icon className="w-3.5 h-3.5" /> {label}
      </span>
      <span className="text-sm font-medium text-white">{value}</span>
    </div>
  );
}
