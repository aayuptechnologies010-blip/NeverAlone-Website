import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HowFAQ = () => {
  const faqs = [
    { q: "How long is each call?", a: "Standard conversations are 60 minutes. You can purchase additional time if needed." },
    { q: "Can I choose my companion?", a: "Yes, you can browse and select the person you feel most comfortable talking to." },
    { q: "Can I change my companion?", a: "Absolutely. You can talk to a different companion for your next conversation." },
    { q: "What if I want to talk longer?", a: "You can purchase an extra 60 minutes for ₹199, subject to your companion's availability." },
    { q: "Are calls video calls?", a: "No. All conversations are audio-only phone calls for your privacy and comfort." },
    { q: "Can I meet my companion?", a: "No. Physical meetups are strictly prohibited on the platform." },
    { q: "What happens if my companion is unavailable?", a: "You can either choose a different time slot or find another great companion." }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-brand-900 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-white text-center mb-12">Common Questions</h2>
        
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-brand-950 border border-white/5 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-medium text-white">{faq.q}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-gray-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-4 text-gray-400 text-sm"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowFAQ;
