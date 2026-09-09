import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const FinalCTA = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is Never Alone?",
      a: "Never Alone is a premium conversation platform where you can talk to someone who listens. It's for those moments when you just need to vent, seek advice, or hear a friendly voice."
    },
    {
      q: "Are calls video calls?",
      a: "No. All conversations on Never Alone are strictly audio phone calls to ensure your privacy and comfort."
    },
    {
      q: "Can I choose my companion?",
      a: "Yes! You can browse through profiles, read about their style and interests, and choose the companion you feel most comfortable with."
    },
    {
      q: "Can I talk about relationships?",
      a: "Absolutely. Relationship advice and discussion is one of our most popular categories. Just select a companion who specializes in it."
    },
    {
      q: "What is Flirty Mode?",
      a: "Flirty Mode is a playful, lighthearted conversation category for adults. It involves fun banter and compliments, but is strictly non-explicit."
    },
    {
      q: "Is Flirty Mode sexual?",
      a: "No. Never Alone is not an adult services platform. All conversations must remain respectful and non-explicit. Explicit behavior will result in a ban."
    },
    {
      q: "Can I meet my companion?",
      a: "No. For the safety and privacy of both users and companions, physical meetups are strictly prohibited."
    },
    {
      q: "How long is each call?",
      a: "Standard sessions typically last for 60 minutes, depending on the plan you choose."
    },
    {
      q: "What if I want to talk longer?",
      a: "You can purchase additional time at ₹199 for an extra 60 minutes if your companion is available to continue."
    },
    {
      q: "Is professional support available?",
      a: "Yes, we have a dedicated category for Professional Support where you can connect with verified professionals. This is separate from our standard companion service."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const floatingHearts = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 10,
    size: Math.random() * 20 + 10, // between 10px and 30px
  }));

  return (
    <section className="py-20 relative overflow-hidden bg-brand-900 border-t border-white/10 min-h-[80vh] flex items-center">
      
      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-pink-500/30"
            style={{ left: heart.left, bottom: '-50px' }}
            animate={{ 
              y: ['0vh', '-100vh'],
              x: ['0px', `${Math.random() * 100 - 50}px`, `${Math.random() * 100 - 50}px`],
              opacity: [0, 0.8, 0],
              rotate: [0, Math.random() * 360]
            }}
            transition={{ 
              duration: heart.duration,
              repeat: Infinity,
              delay: heart.delay,
              ease: "linear"
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: heart.size, height: heart.size }}>
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Background Animated Heart Outline Effect */}
      <div className="absolute inset-0 flex items-center justify-start lg:justify-center pointer-events-none opacity-20 z-0">
        <svg viewBox="0 0 24 24" className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] translate-x-[-20%] lg:translate-x-[-40%]" fill="none" stroke="url(#heartGradientCTA)" strokeWidth="0.3">
          <defs>
            <linearGradient id="heartGradientCTA" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          <motion.path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Side: Call to Action */}
          <div className="text-center lg:text-left flex flex-col justify-center h-full">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl text-gray-400 mb-4 font-medium"
            >
              You don't need the perfect words.
            </motion.h2>

            <motion.h3 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-5xl lg:text-6xl font-serif italic text-white mb-8 leading-tight py-2"
            >
              You only need someone <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">willing to listen.</span>
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Link 
                to="/categories" 
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full text-lg font-semibold text-white bg-pink-600 hover:bg-pink-500 hover:shadow-[0_0_30px_rgba(219,39,119,0.4)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 mb-8 w-full sm:w-auto"
              >
                <span>Find My Person 💗</span>
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm font-medium text-gray-400"
            >
              <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-pink-500 mr-2"></span> 18+</span>
              <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span> Private</span>
              <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span> Phone Calls Only</span>
            </motion.div>
          </div>

          {/* Right Side: FAQ */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full bg-brand-950/50 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none hover:bg-white/5 transition-colors"
                  >
                    <span className="text-base font-medium text-gray-200">{faq.q}</span>
                    <ChevronDown 
                      className={`text-pink-400 transition-transform duration-300 shrink-0 ml-4 ${openIndex === index ? 'rotate-180' : ''}`} 
                      size={20} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-4 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-3">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            
            <style jsx>{`
              .custom-scrollbar::-webkit-scrollbar {
                width: 6px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.05);
                border-radius: 10px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: rgba(236, 72, 153, 0.3);
                border-radius: 10px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: rgba(236, 72, 153, 0.5);
              }
            `}</style>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
