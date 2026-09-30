import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  HelpCircle, 
  PhoneCall, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  HeartHandshake
} from 'lucide-react';

import SupportForm from '../components/support/SupportForm';

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    value: "care@neuravia.in",
    desc: "Average response in under 2 hours",
    action: "mailto:care@neuravia.in",
    actionLabel: "Send Email"
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Helpdesk",
    value: "+91 98765 43210",
    desc: "Direct support for active bookings",
    action: "https://wa.me/919876543210",
    actionLabel: "Chat on WhatsApp"
  },
  {
    icon: Clock,
    title: "Support Hours",
    value: "24/7 Available",
    desc: "Round the clock compassionate help",
    action: null,
    actionLabel: "Always Open"
  }
];

const quickFaqs = [
  {
    q: "How soon can I get a session?",
    a: "Same-day slots are available every hour. You can book in under 60 seconds from the booking page."
  },
  {
    q: "How do I reschedule a booked session?",
    a: "Open 'My Conversations' in your Dashboard, select your upcoming call, and choose Reschedule."
  },
  {
    q: "Is my conversation completely confidential?",
    a: "Yes. All calls take place through private, encrypted audio channels. Your identity remains 100% anonymous."
  },
  {
    q: "Can I choose my therapist or companion?",
    a: "Yes, you can browse all verified profiles, preview their experience, audio vibes, and language preferences before booking."
  }
];

export default function ContactPage() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-brand-950 font-sans text-white selection:bg-pink-500 selection:text-white">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HERO HEADER
      ────────────────────────────────────────────────────────────── */}
      <section className="relative pt-12 pb-14 sm:pt-16 sm:pb-20 border-b border-white/10 overflow-hidden">
        {/* Glow ambient */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[55rem] h-[30rem] bg-gradient-to-b from-pink-600/15 via-electric-cyan/10 to-transparent blur-[140px]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 text-xs font-bold text-pink-300 uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Here For You &bull; 24/7 Dedicated Care</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            We are always here to <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-pink-400 via-rose-300 to-electric-cyan bg-clip-text text-transparent">
              listen and assist you.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Have a question regarding your session, booking, plan, or need support? Reach out anytime — we're right here.
          </motion.p>

          {/* Quick Contact Cards Strip */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto text-left"
          >
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <div 
                  key={idx}
                  className="rounded-3xl border border-white/10 bg-brand-900/60 p-6 backdrop-blur-md hover:border-pink-500/30 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="h-10 w-10 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                      {method.title}
                    </h3>
                    <p className="text-base font-bold text-white mb-1">
                      {method.value}
                    </p>
                    <p className="text-xs text-gray-400">
                      {method.desc}
                    </p>
                  </div>

                  {method.action && (
                    <a
                      href={method.action}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-pink-400 hover:text-pink-300 transition-colors"
                    >
                      <span>{method.actionLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              );
            })}
          </motion.div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          2. MAIN CONTENT AREA: FORM + SIDEBAR HELP
      ────────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Main Support Form (7 cols) */}
            <div className="lg:col-span-7">
              <SupportForm 
                category={selectedCategory} 
                onSelectCategory={(cat) => setSelectedCategory(cat)}
              />
            </div>

            {/* Right Sidebar: FAQs + Trust & Safety Shortcuts (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Emergency Safety Alert Card */}
              <div className="rounded-3xl border border-red-500/30 bg-red-950/30 p-6 backdrop-blur-md">
                <div className="flex items-start gap-3.5">
                  <div className="h-10 w-10 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-red-100">Need Immediate Crisis Support?</h3>
                    <p className="mt-1 text-xs text-red-200/80 leading-relaxed">
                      Neuravia is not an emergency psychiatric hospital. If you are in immediate distress, please call the national helpline <strong>KIRAN (1800-599-0019)</strong> or <strong>112</strong> immediately.
                    </p>
                    <Link
                      to="/safety"
                      className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-red-200 hover:text-white underline underline-offset-4"
                    >
                      <span>Read Emergency & Safety Guidelines</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Instant FAQs Accordion */}
              <div className="rounded-3xl border border-white/10 bg-brand-900/60 p-6 sm:p-7 backdrop-blur-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-electric-cyan" />
                    <span>Quick Answers</span>
                  </h3>
                  <Link to="/faq" className="text-xs text-pink-400 hover:underline">
                    View All FAQs
                  </Link>
                </div>

                <div className="divide-y divide-white/10">
                  {quickFaqs.map((faq, idx) => {
                    const isOpen = activeFaq === idx;
                    return (
                      <div key={idx} className="py-3.5">
                        <button
                          type="button"
                          onClick={() => setActiveFaq(isOpen ? null : idx)}
                          className="flex w-full items-center justify-between gap-3 text-left text-xs sm:text-sm font-semibold text-white hover:text-pink-300 transition-colors cursor-pointer"
                        >
                          <span>{faq.q}</span>
                          <span className={`text-gray-400 text-lg transition-transform ${isOpen ? 'rotate-45 text-pink-400' : ''}`}>
                            +
                          </span>
                        </button>
                        {isOpen && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-2 text-xs text-gray-300 leading-relaxed font-light"
                          >
                            {faq.a}
                          </motion.p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Direct Booking Shortcut */}
              <div className="rounded-3xl border border-pink-500/20 bg-gradient-to-br from-pink-900/40 via-brand-900/80 to-brand-950 p-6 text-left relative overflow-hidden">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-9 w-9 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-300">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Looking for your First Session?</h4>
                    <p className="text-xs text-pink-300">60-Min 1-on-1 Consultation for ₹499</p>
                  </div>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  Connect with a qualified therapist or companion right away without waiting.
                </p>
                <Link
                  to="/first-session"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-brand-950 hover:bg-gray-100 transition-colors shadow-md"
                >
                  <span>Explore First Session (₹499)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
