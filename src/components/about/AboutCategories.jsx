import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Heart, Users, Briefcase, GraduationCap, Flame, Stethoscope } from 'lucide-react';

const categories = [
  {
    icon: MessageSquare,
    title: 'Just Talk',
    desc: 'For the days when you simply want someone to listen.',
  },
  {
    icon: Heart,
    title: 'Relationship Advice',
    desc: 'For conversations about dating, friendships, breakups, trust and communication.',
  },
  {
    icon: Users,
    title: 'Family & Personal Life',
    desc: 'For everyday family situations, boundaries and difficult conversations.',
  },
  {
    icon: Briefcase,
    title: 'Career & Work',
    desc: 'For work, goals, interviews, decisions and career changes.',
  },
  {
    icon: GraduationCap,
    title: 'College & Student Life',
    desc: 'For studies, friendships, campus life, exams and future plans.',
  }
];

export default function AboutCategories() {
  return (
    <section className="py-16 bg-brand-950 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-3xl font-semibold text-white mb-10 text-center">
          A space for real conversations.
        </h2>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors"
            >
              <cat.icon className="w-8 h-8 text-gray-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">{cat.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{cat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Special Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Flirty Mode */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-romantic-DEFAULT/10 to-dream-purple/10 border border-romantic-DEFAULT/20 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Flame className="w-8 h-8 text-romantic-pink" />
              <span className="px-3 py-1 rounded-full bg-romantic-DEFAULT/20 text-xs font-semibold text-romantic-300 tracking-wider">
                18+
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Flirty Mode</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              For light, playful, consensual and non-explicit conversation.
            </p>
          </motion.div>

          {/* Professional Support */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-electric-cyan/5 border border-electric-cyan/20 rounded-3xl p-8"
          >
            <Stethoscope className="w-8 h-8 text-electric-cyan mb-6" />
            <h3 className="text-xl font-semibold text-white mb-3">Professional Support</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              A separate service for appropriately qualified and verified professionals.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
