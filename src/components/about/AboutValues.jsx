import React from 'react';
import { motion } from 'framer-motion';

export default function AboutValues({ values }) {
  return (
    <section className="py-16 bg-brand-900 relative">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-romantic-pink uppercase tracking-widest mb-6">
            What Guides Us
          </p>
          <h2 className="text-3xl md:text-3xl font-semibold text-white mb-8">
            The values behind every conversation.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, index) => (
            <motion.div
              key={val.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-brand-950 border border-white/5 hover:border-white/20 transition-all"
            >
              <div className="text-3xl font-serif italic text-white/10 mb-6 group-hover:text-romantic-pink/30 transition-colors">
                0{val.id}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{val.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
