import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PricingCards = ({ selectedDuration }) => {
  const packs = [
    {
      id: "1 Session",
      badge: "Single Trial",
      title: "1 Session",
      price: "499",
      subtext: "Flat fee • Zero commitment",
      desc: "One 60-minute confidential 1-on-1 audio consultation.",
      features: [
        "60 minutes private audio call",
        "Empathetic listener matching",
        "Choose English, Hindi & regional",
        "Encrypted & 100% confidential"
      ],
      isPopular: false,
      btnText: "Book 1 Session (₹499)",
      link: "/first-session"
    },
    {
      id: "6 Sessions",
      badge: "Save 16%",
      title: "6 Sessions",
      price: "2,500",
      subtext: "₹416 / session",
      desc: "6 hours of personal, empathetic conversations.",
      features: [
        "6 × 60-min audio sessions",
        "Flexible schedule at your pace",
        "Same-day slot allocation",
        "All category topics included"
      ],
      isPopular: false,
      btnText: "Get 6 Sessions (₹2,500)",
      link: "/book"
    },
    {
      id: "12 Sessions",
      badge: "Most Popular",
      title: "12 Sessions",
      price: "4,500",
      subtext: "₹375 / session (Save 25%)",
      desc: "Comprehensive weekly support for emotional growth.",
      features: [
        "12 × 60-min audio sessions",
        "Priority companion matching",
        "Dedicated emotional check-ins",
        "Flexible session rollover"
      ],
      isPopular: true,
      btnText: "Get 12 Sessions (₹4,500)",
      link: "/book"
    },
    {
      id: "20 Sessions",
      badge: "Deep Support",
      title: "20 Sessions",
      price: "8,000",
      subtext: "₹400 / session",
      desc: "Deep healing journey with continuous listener access.",
      features: [
        "20 × 60-min audio sessions",
        "VIP listener priority",
        "No session expiration date",
        "24/7 dedicated support"
      ],
      isPopular: false,
      btnText: "Get 20 Sessions (₹8,000)",
      link: "/book"
    },
    {
      id: "25 Sessions",
      badge: "Best Value",
      title: "25 Sessions",
      price: "10,000",
      subtext: "₹400 / session • Full Access",
      desc: "Ultimate long-term wellness pass for peace of mind.",
      features: [
        "25 × 60-min audio sessions",
        "Full companion access pass",
        "Lifetime session validity",
        "Complimentary family share option"
      ],
      isPopular: false,
      btnText: "Get 25 Sessions (₹10,000)",
      link: "/book"
    }
  ];

  return (
    <section className="py-10 bg-brand-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mt-6">
          {packs.map((pack, idx) => (
            <motion.div 
              key={pack.id}
              whileHover={{ y: -6 }}
              className={`flex flex-col bg-brand-900/70 backdrop-blur-md border rounded-[1.5rem] p-6 relative transition-all duration-300 shadow-xl ${
                pack.isPopular 
                  ? 'border-brand-teal shadow-[0_0_30px_rgba(2,132,199,0.25)] bg-brand-900/90 md:scale-[1.02]' 
                  : 'border-white/10 hover:border-brand-teal/40'
              }`}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-bold text-brand-leaf uppercase tracking-[0.2em] bg-brand-leaf/10 px-2.5 py-1 rounded-full border border-brand-leaf/30">
                  {pack.badge}
                </span>
                <span className="text-xs text-slate-400 font-semibold">{pack.id}</span>
              </div>

              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-xl font-bold text-brand-300">₹</span>
                <span className="text-4xl font-extrabold text-white font-display">{pack.price}</span>
              </div>
              <div className="text-xs text-brand-teal font-semibold mb-3">{pack.subtext}</div>
              <p className="text-slate-300 font-serif italic mb-6 text-sm">{pack.desc}</p>

              <ul className="space-y-3 mb-6 flex-grow">
                {pack.features.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <Check size={16} className="text-brand-leaf shrink-0 mt-0.5" />
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-5 text-[11px] text-slate-400 text-center py-2.5 border-t border-white/10">
                Extra time: ₹199 / additional 60 mins
              </div>

              <Link 
                to={pack.link} 
                className={`block text-center w-full py-3.5 rounded-xl text-sm font-bold transition-all shadow-md ${
                  pack.isPopular
                    ? 'bg-gradient-to-r from-brand-navy via-brand-teal to-brand-green text-white hover:opacity-95 shadow-brand-teal/30'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
                }`}
              >
                {pack.btnText}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-12 bg-white/5 border border-brand-teal/20 rounded-2xl p-5 text-center max-w-2xl mx-auto shadow-md">
          <h4 className="text-white text-sm font-bold mb-1">100% Flexible & No Hidden Fees</h4>
          <p className="text-xs text-slate-300">
            All plans include private 1-on-1 audio sessions with verified empathetic listeners. Sessions never expire.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
