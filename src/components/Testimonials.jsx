import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I finally found a space where I could talk openly without feeling judged.",
      author: "Neha",
      age: 27,
      tag: "Anxiety & Stress"
    },
    {
      quote: "The sessions helped me understand my thoughts and handle stress much better.",
      author: "Rahul",
      age: 31,
      tag: "Work Burnout"
    },
    {
      quote: "Starting therapy was difficult, but Neuravia made the process feel simple and comfortable.",
      author: "Anonymous",
      age: 29,
      tag: "Self-Esteem"
    }
  ];

  return (
    <section className="py-14 sm:py-16 bg-[#fbfdfc] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-block px-3 py-1 rounded-full bg-[#00839a]/10 text-[#00839a] text-xs font-semibold uppercase tracking-wider mb-3">
            Real Stories
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#083058] tracking-tight font-display mb-3">
            Real People. Real Journeys.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            How small conversations create meaningful personal breakthroughs.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white border border-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-[#083058]/5 text-[#00839a] flex items-center justify-center mb-4">
                  <Quote size={18} />
                </div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  “{t.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#083058]">{t.author}, {t.age}</h4>
                  <span className="text-xs text-slate-400">{t.tag}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
