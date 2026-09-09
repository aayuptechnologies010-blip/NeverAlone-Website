import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PricingFinalCTA = () => {
  return (
    <section className="relative py-10 bg-white text-center px-1 overflow-hidden">
      
      {/* Colorful Background Blobs for Light Theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-pink-300/20 rounded-full blur-[100px] -translate-y-1/2 mix-blend-multiply" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-300/20 rounded-full blur-[120px] translate-y-1/3 mix-blend-multiply" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-amber-200/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-500 font-serif italic mb-6 text-xl"
        >
          "Sometimes you don't need a solution."
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 tracking-tight"
        >
          You just need someone <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            to listen.
          </span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-lg md:text-xl mb-5 max-w-2xl mx-auto font-medium"
        >
          Choose your plan. Choose your conversation. Start when you're ready.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4"
        >
          <Link 
            to="/book" 
            className="w-full sm:w-auto px-10 py-4 rounded-full font-bold text-black bg-pink-500 hover:bg-pink-600 shadow-[0_10px_30px_rgba(236,72,153,0.3)] hover:shadow-[0_15px_40px_rgba(236,72,153,0.4)] transition-all transform hover:-translate-y-1 text-lg"
          >
            Start Talking 💗
          </Link>
          <Link 
            to="/companions" 
            className="w-full sm:w-auto px-10 py-4 rounded-full font-bold text-black-700 bg-blue-500 hover:bg-blue-600 shadow-sm hover:shadow transition-all text-lg"
          >
            Find Someone First
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-3 md:gap-5 text-xs md:text-sm text-gray-400 font-bold uppercase tracking-widest"
        >
          <span className="bg-black px-4 py-2 rounded-full border border-gray-100">18+</span>
          <span className="hidden   sm:inline-block text-gray-300">•</span>
          <span className="bg-black px-4 py-2 rounded-full border border-gray-100">Private</span>
          <span className="hidden sm:inline-block text-gray-300">•</span>
          <span className="bg-black px-4 py-2 rounded-full border border-gray-100">Phone Calls Only</span>
          <span className="hidden sm:inline-block text-gray-300">•</span>
          <span className="bg-black px-4 py-2 rounded-full border border-gray-100">Respectful</span>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingFinalCTA;
