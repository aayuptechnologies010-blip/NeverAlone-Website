import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Shruti',
    review: "It's amazing. I mean trust me if you are willing to have that change in you and you are at the correct place. Their way of handling situations and now my mind is really nice and I'm really happy with my mentor."
  },
  {
    name: 'Karthik',
    review: "When I contacted them, I was hesitant to begin counseling. I decided to enroll because of their individualized treatment plans, round-the-clock support, and complete freedom in terms of scheduling therapy. I've gotten really good at controlling my anxieties."
  },
  {
    name: 'Meera',
    review: "A therapy that will open your mind and heart, I thoroughly enjoyed it and learnt so much about my mind and emotions and how I want to incorporate it into my daily life, relationships and personality."
  }
];

const Testimonials = () => {
  return (
    <section className="py-10 bg-brand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-brand-500 font-semibold tracking-wide uppercase text-sm mb-3">Real People, Real Results</h2>
          <h3 className="text-3xl md:text-3xl font-semibold text-brand-950">What our users say about us.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((test, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-brand-100 hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-brand-100 rotate-180" />
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-brand-700 italic leading-relaxed mb-6">"{test.review}"</p>
              <div className="font-semibold text-brand-900 border-t border-brand-50 pt-4">- {test.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
