import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Shruti',
    review: "It's amazing. If you are willing to have that change in you, you are at the right place. Their way of handling situations and listening without judgment helped me find calm and real peace of mind."
  },
  {
    name: 'Karthik',
    review: "I was hesitant to talk to someone. But their individualized approach, round-the-clock availability, and complete scheduling freedom made it so easy. I've gotten so much better at managing my anxiety."
  },
  {
    name: 'Meera',
    review: "A conversation that truly opened my mind and heart. I felt completely heard and understood. It gave me clarity for my relationships and everyday thoughts."
  }
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-brand-950 relative overflow-hidden border-t border-white/5">
      {/* Glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-dream-purple/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-electric-cyan font-semibold tracking-widest uppercase text-xs mb-2">Real People, Real Experience</h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">What people say after their first talk.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-brand-900/80 p-8 rounded-3xl border border-white/10 hover:border-white/20 hover:shadow-2xl transition-all relative flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/10 rotate-180" />
              <div>
                <div className="flex gap-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 italic text-sm leading-relaxed mb-6 font-serif">"{test.review}"</p>
              </div>
              <div className="font-semibold text-white border-t border-white/5 pt-4 flex items-center justify-between">
                <span>{test.name}</span>
                <span className="text-xs text-electric-cyan font-normal bg-electric-cyan/10 px-2 py-0.5 rounded-full">Verified User</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
