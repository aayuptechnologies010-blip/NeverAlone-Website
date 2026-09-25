import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingFirstSessionBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-16 sm:bottom-6 left-4 right-4 max-w-lg mx-auto z-40"
        >
          <div className="bg-brand-900/95 backdrop-blur-xl border border-pink-500/30 rounded-2xl p-3.5 shadow-[0_10px_35px_rgba(0,0,0,0.8)] flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-pink-500/15 border border-pink-500/30 text-pink-400 flex items-center justify-center shrink-0">
                <Sparkles size={18} />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-black text-white">₹797</span>
                  <span className="text-[10px] line-through text-gray-500">₹1,499</span>
                  <span className="text-[10px] font-bold text-green-400 bg-green-500/10 px-1.5 py-0.2 rounded">60 Min</span>
                </div>
                <p className="text-[11px] text-gray-300 font-medium">1-on-1 Confidential Therapy</p>
              </div>
            </div>

            <Link
              to="/book?serviceType=Professional+Support"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-bold text-xs shadow-md shadow-pink-600/30 transition flex items-center gap-1.5 shrink-0"
            >
              <span>Book Now</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
