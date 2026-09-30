import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PricingFAQ = () => {
  const faqs = [
    { q: "How long is each conversation?", a: "Standard companion access includes 60 minutes per day." },
    { q: "What if I want to talk longer?", a: "An additional 60 minutes can be purchased for ₹199, subject to availability." },
    { q: "Can I continue with the same companion?", a: "For an extension, continuing with the current companion is subject to their availability." },
    { q: "Will I get the same companion every day?", a: "No individual companion is guaranteed to be available every day." },
    { q: "Can I choose my companion?", a: "Where availability allows, users can browse and choose from eligible companions." },
    { q: "Is professional support included?", a: "No. Professional mental-health support is a separately identified service with its own pricing." },
    { q: "Is Flirty Mode included?", a: "Availability and pricing for Flirty Mode depend on the platform's configured plan/category rules." },
    { q: "Are calls video calls?", a: "No. Neuravia is phone-call only." },
    { q: "Can I buy more than one extension?", a: "Multiple extensions may be purchased when available." }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-brand-950 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-white text-center mb-12">Pricing FAQ</h2>
        
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-brand-900 border border-white/5 rounded-2xl overflow-hidden">
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

export default PricingFAQ;
