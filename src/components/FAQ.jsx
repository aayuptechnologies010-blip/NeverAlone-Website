import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How does therapy work?",
      a: "Therapy is a collaborative process where you connect with a trained professional in a safe, confidential environment. Together, you discuss what's on your mind, explore emotional patterns, and develop healthy coping strategies."
    },
    {
      q: "Are my sessions confidential?",
      a: "Yes, 100%. All conversations and details shared during your sessions are strictly private and protected under professional confidentiality ethics and data protection standards."
    },
    {
      q: "How long is one session?",
      a: "Each standard 1-on-1 therapy session lasts up to 50 minutes, providing ample time to share, reflect and work on practical tools."
    },
    {
      q: "Can I choose my therapist?",
      a: "Yes. You can explore our verified therapist profiles, their experience, areas of specialization and languages to choose the professional who best suits your preferences."
    },
    {
      q: "Can I change my therapist later?",
      a: "Absolutely. We understand that personal connection is essential for effective therapy. You can switch to another therapist at any time with zero hassle."
    },
    {
      q: "Can I take therapy online?",
      a: "Yes. All sessions are conducted online via private audio/video calls, allowing you to join comfortably from your home or any private space."
    },
    {
      q: "What happens during my first session?",
      a: "Your first session is an introductory conversation. Your therapist will listen to your concerns, understand your background and goals, and outline a supportive path forward."
    },
    {
      q: "Can I cancel or reschedule my appointment?",
      a: "Yes, you can easily reschedule or cancel your appointment from your dashboard with at least 12 hours advance notice."
    },
    {
      q: "How do the session packages work?",
      a: "Session plans (6, 12, 20 or 25 sessions) offer discounted per-session rates with no expiration. You can book individual sessions whenever convenient for you."
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-14 sm:py-16 bg-[#fbfdfc] border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-block px-3 py-1 rounded-full bg-[#00839a]/10 text-[#00839a] text-xs font-semibold uppercase tracking-wider mb-3">
            Got Questions?
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#083058] tracking-tight font-display mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Everything you need to know about starting your therapy journey with Neuravia.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-sm sm:text-base font-semibold text-[#083058] hover:text-[#00839a] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 shrink-0 ml-4 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#00839a]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
