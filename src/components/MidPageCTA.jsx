import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MidPageCTA = () => {
  return (
    <section className="py-10 relative overflow-hidden flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-brand-50" />
      
      {/* Glowing background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-romantic-DEFAULT/10 via-dream-DEFAULT/10 to-electric-DEFAULT/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-medium text-gray-600 mb-8"
        >
          It's okay if you don't know what to say.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl text-gray-900 mb-2">Start with —</p>
          <h3 className="text-3xl md:text-5xl font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 leading-tight py-2">
            "Hey… I just need someone to talk to."
          </h3>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-xl text-brand-900 font-medium mb-8"
        >
          That's enough. 💗
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <Link 
            to="/categories" 
            className="inline-block px-10 py-5 rounded-full text-lg font-semibold text-white bg-brand-900 hover:shadow-[0_0_30px_rgba(30,58,138,0.3)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Find Someone
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MidPageCTA;
