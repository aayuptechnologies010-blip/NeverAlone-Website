import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What makes Neuravia different from traditional therapy platforms?",
      a: "Neuravia is the complete emotional wellness ecosystem combining RCI-certified psychological therapy (CBT, ERP) with evidence-backed neuroscience sound therapy & empathetic human companions. Sessions are 100% audio-first for total privacy and zero video fatigue."
    },
    {
      q: "What if I cry or get overwhelmed during my session?",
      a: "Crying is a completely natural, healthy somatic release. Our psychologists and verified listeners are trained to hold a gentle, safe, non-judgmental container for you to express your emotions freely without pressure."
    },
    {
      q: "Can I choose my psychologist or change my therapist?",
      a: "Yes! Finding the right therapeutic comfort is essential. You can browse verified specialists by language, qualification, and area of expertise (Anxiety, Depression, OCD, Couples, Overthinking) or switch anytime."
    },
    {
      q: "How many sessions will I need to see results?",
      a: "Mental health journeys are unique. Many clients feel profound relief and mental lightness after their very first session. Your therapist collaborates with you to build a practical 3-6 session milestone plan without lock-in."
    },
    {
      q: "Are conversations recorded or shared?",
      a: "Never. All calls are strictly confidential, end-to-end encrypted, and adhere to strict clinical privacy standards. Your phone number is masked, and zero audio recordings are stored."
    },
    {
      q: "How does the neuroscience sound therapy work with therapy?",
      a: "We integrate clinically researched acoustic wave frequencies (such as 10 Hz Alpha waves and 432 Hz Solfeggio tones) that stimulate neuroplasticity and calm amygdala hyperactivity, amplifying the cognitive clarity gained during talk therapy."
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
