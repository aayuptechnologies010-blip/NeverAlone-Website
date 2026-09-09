import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Heart, Users, Briefcase, GraduationCap, Sparkles, Stethoscope } from 'lucide-react';

const ExploreComparison = () => {
  const comparisons = [
    { category: "Just Talk", bestFor: "Everyday conversation, venting, sharing, feeling connected.", icon: MessageCircle, bg: "bg-blue-500", light: "bg-blue-50", text: "text-blue-700" },
    { category: "Relationship", bestFor: "Dating, breakups, communication and relationship situations.", icon: Heart, bg: "bg-pink-500", light: "bg-pink-50", text: "text-pink-700" },
    { category: "Family", bestFor: "Family communication and personal situations.", icon: Users, bg: "bg-orange-500", light: "bg-orange-50", text: "text-orange-700" },
    { category: "Career", bestFor: "Jobs, interviews, workplace and career decisions.", icon: Briefcase, bg: "bg-emerald-500", light: "bg-emerald-50", text: "text-emerald-700" },
    { category: "College", bestFor: "Studies, campus life, confidence and future plans.", icon: GraduationCap, bg: "bg-purple-500", light: "bg-purple-50", text: "text-purple-700" },
    { category: "Flirty Mode", bestFor: "Playful, consensual, non-explicit adult conversation.", icon: Sparkles, bg: "bg-rose-500", light: "bg-rose-50", text: "text-rose-700" },
    { category: "Professional Support", bestFor: "Qualified mental-health support.", icon: Stethoscope, bg: "bg-slate-600", light: "bg-slate-50", text: "text-slate-700" }
  ];

  return (
    <section className="py-12 bg-brand-50 border-t border-brand-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-brand-900 mb-2"
          >
            Not sure which one is right for you?
          </motion.h2>
          <p className="text-gray-500 text-sm">A quick at-a-glance comparison to help you choose.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="bg-white border border-gray-100 rounded-2xl p-4 flex items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.bg}`}>
                <item.icon size={18} className="text-white" />
              </div>
              <div>
                <h4 className={`font-bold text-sm mb-0.5 ${item.text}`}>{item.category}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{item.bestFor}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => document.getElementById('mood-selector')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 rounded-full font-semibold text-white bg-brand-900 hover:bg-brand-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Help Me Choose
          </button>
        </div>

      </div>
    </section>
  );
};

export default ExploreComparison;
