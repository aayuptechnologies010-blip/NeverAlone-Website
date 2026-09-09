import React from 'react';
import { motion } from 'framer-motion';

const PageHero = ({ title, subtitle, badge, image }) => {
  return (
    <section className="relative bg-brand-950 text-white pt-32 pb-20 overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-800 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-12 w-72 h-72 bg-brand-700 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`flex flex-col gap-4 items-center ${image ? 'lg:flex-row lg:text-left' : 'text-center max-w-4xl mx-auto'}`}>
          
          <div className={`${image ? 'lg:w-1/2' : 'w-full'}`}>
            {badge && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 bg-brand-800/50 text-brand-200 border border-brand-700 backdrop-blur-sm"
              >
                {badge}
              </motion.div>
            )}

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-3xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6"
            >
              {title}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-xl md:text-2xl text-brand-300 leading-relaxed font-light ${!image && 'mx-auto'}`}
            >
              {subtitle}
            </motion.p>
          </div>

          {image && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-brand-800 rounded-[2rem] transform -rotate-3 scale-105 opacity-50 -z-10"></div>
              <img src={image} alt={title} className="rounded-[2rem] shadow-2xl object-cover w-full h-[400px] border border-brand-800/50" />
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
};

export default PageHero;
