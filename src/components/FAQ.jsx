import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is Neuravia?",
      a: "Neuravia is a premium conversation platform where you can talk to someone who listens. It's for those moments when you just need to vent, seek advice, or hear a friendly voice."
    },
    {
      q: "Are calls video calls?",
      a: "No. All conversations on Neuravia are strictly audio phone calls to ensure your privacy and comfort."
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
      a: "No. Neuravia is not an adult services platform. All conversations must remain respectful and non-explicit. Explicit behavior will result in a ban."
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

  return (
    <section className="py-10 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-brand-900 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white border border-brand-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-brand-900">{faq.q}</span>
                <ChevronDown 
                  className={`text-brand-600 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
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
                    <div className="px-6 pb-5 text-gray-600">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
