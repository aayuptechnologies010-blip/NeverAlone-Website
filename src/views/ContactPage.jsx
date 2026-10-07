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
  ArrowRight,
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
    q: "Can I choose my therapist?",
    a: "Yes, you can browse all verified profiles, preview their experience, specialties, and language preferences before booking."
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
    <div className="min-h-screen bg-[#fbfdfc] font-sans text-slate-800 pt-20">
      
      {/* 1. HERO HEADER */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00839a]/20 bg-[#00839a]/10 px-4 py-1.5 text-xs font-semibold text-[#00839a] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#00839a]" />
            <span>Here For You • 24/7 Dedicated Care</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#083058] font-display leading-tight">
            We are always here to <br className="hidden sm:inline" />
            <span className="text-[#00839a]">
              listen and assist you.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have a question regarding your session, booking, plan, or need support? Reach out anytime — we're right here.
          </p>

          {/* Quick Contact Cards Strip */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto text-left">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl border border-slate-100 bg-[#fbfdfc] p-6 shadow-sm hover:shadow-md hover:border-[#00839a]/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="h-10 w-10 rounded-xl bg-[#00839a]/10 flex items-center justify-center text-[#00839a] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                      {method.title}
                    </h3>
                    <p className="text-base font-bold text-[#083058] mb-1">
                      {method.value}
                    </p>
                    <p className="text-xs text-slate-600">
                      {method.desc}
                    </p>
                  </div>

                  {method.action && (
                    <a
                      href={method.action}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#00839a] hover:text-[#083058] transition-colors"
                    >
                      <span>{method.actionLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Main Support Form (7 cols) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm">
              <SupportForm 
                category={selectedCategory} 
                onSelectCategory={(cat) => setSelectedCategory(cat)}
              />
            </div>

            {/* Right Sidebar: FAQs + Trust & Safety Shortcuts (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Emergency Safety Alert Card */}
              <div className="rounded-2xl border border-rose-200 bg-rose-50/70 p-6 text-left">
                <div className="flex items-start gap-3.5">
                  <div className="h-10 w-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-rose-900">Need Immediate Crisis Support?</h3>
                    <p className="mt-1 text-xs text-rose-700 leading-relaxed">
                      Neuravia is not an emergency psychiatric service. If you are in immediate distress, please call the national helpline <strong>KIRAN (1800-599-0019)</strong> or <strong>112</strong> immediately.
                    </p>
                    <Link
                      to="/safety"
                      className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-rose-800 hover:underline"
                    >
                      <span>Read Safety Guidelines</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Instant FAQs Accordion */}
              <div className="rounded-2xl border border-slate-100 bg-white p-6 sm:p-7 shadow-sm text-left">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-bold text-[#083058] flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#00839a]" />
                    <span>Quick Answers</span>
                  </h3>
                  <Link to="/faq" className="text-xs text-[#00839a] font-semibold hover:underline">
                    View All FAQs
                  </Link>
                </div>

                <div className="divide-y divide-slate-100">
                  {quickFaqs.map((faq, idx) => {
                    const isOpen = activeFaq === idx;
                    return (
                      <div key={idx} className="py-3.5">
                        <button
                          type="button"
                          onClick={() => setActiveFaq(isOpen ? null : idx)}
                          className="flex w-full items-center justify-between gap-3 text-left text-xs sm:text-sm font-semibold text-[#083058] hover:text-[#00839a] transition-colors cursor-pointer"
                        >
                          <span>{faq.q}</span>
                          <span className={`text-slate-400 text-lg transition-transform ${isOpen ? 'rotate-45 text-[#00839a]' : ''}`}>
                            +
                          </span>
                        </button>
                        {isOpen && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-2 text-xs text-slate-600 leading-relaxed"
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
              <div className="rounded-2xl border border-slate-100 bg-white p-6 text-left shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-9 w-9 rounded-xl bg-[#00839a]/10 flex items-center justify-center text-[#00839a]">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#083058]">First Session Offer</h4>
                    <p className="text-xs text-slate-500">50-Min 1-on-1 Consultation for ₹499</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Connect with a qualified therapist right away without waiting.
                </p>
                <Link
                  to="/first-session"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#083058] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#0c4a6e] transition-colors shadow-sm"
                >
                  <span>Book First Session (₹499)</span>
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
