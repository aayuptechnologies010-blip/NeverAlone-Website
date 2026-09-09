import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Mission = () => {
  return (
    <section className="py-10 bg-brand-950 text-white relative overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-20 h-20 bg-brand-800/50 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl border border-brand-700"
        >
          <Heart className="w-10 h-10 text-brand-300" />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-3xl lg:text-6xl font-semibold tracking-tight mb-8 leading-tight"
        >
          Everyone deserves <br />
          <span className="text-brand-400">someone to talk to.</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-brand-200 leading-relaxed max-w-3xl mx-auto space-y-6 font-light"
        >
          <p>
            Never Alone started with a simple idea: <strong>Human connection should be easier to find.</strong>
          </p>
          <p>
            Whether you want to share your day, talk through a relationship, discuss a family situation, think about your career, have a fun conversation or seek professional support, the first step can simply be talking.
          </p>
          <p className="text-brand-100 font-medium">
            Our mission is to create a platform where people can connect through meaningful conversations while maintaining privacy, safety and clear boundaries.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {['Connection', 'Respect', 'Safety', 'Privacy', 'Boundaries', 'Humanity'].map(value => (
            <span key={value} className="px-6 py-2 rounded-full border border-brand-800 text-brand-300 font-medium bg-brand-900/50 backdrop-blur-sm">
              {value}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Mission;
