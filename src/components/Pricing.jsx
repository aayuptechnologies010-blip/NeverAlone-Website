import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Single Session",
      price: "₹499",
      sessionsCount: 1,
      effective: "₹499 / session",
      savings: null,
      subtitle: "Start with one session.",
      badge: null,
      isBestValue: false,
      cta: "Book a Session — ₹499",
      features: [
        "Up to 50 minutes each",
        "Online sessions",
        "Confidential & private",
        "Flexible scheduling"
      ]
    },
    {
      name: "6 Session Plan",
      price: "₹2,500",
      sessionsCount: 6,
      effective: "₹417 / session",
      savings: "Save ₹494",
      subtitle: "Support for ongoing challenges.",
      badge: "POPULAR",
      isBestValue: false,
      cta: "Choose 6 Sessions",
      features: [
        "Up to 50 minutes each",
        "Online sessions",
        "Confidential & private",
        "Flexible scheduling"
      ]
    },
    {
      name: "12 Session Plan",
      price: "₹4,500",
      sessionsCount: 12,
      effective: "₹375 / session",
      savings: "Save ₹1,488",
      subtitle: "Comprehensive deep progress.",
      badge: "BEST VALUE",
      isBestValue: true,
      cta: "Choose 12 Sessions",
      features: [
        "Up to 50 minutes each",
        "Online sessions",
        "Confidential & private",
        "Flexible scheduling"
      ]
    },
    {
      name: "20 Session Plan",
      price: "₹8,000",
      sessionsCount: 20,
      effective: "₹400 / session",
      savings: "Save ₹1,980",
      subtitle: "Long-term healing & consistency.",
      badge: null,
      isBestValue: false,
      cta: "Choose 20 Sessions",
      features: [
        "Up to 50 minutes each",
        "Online sessions",
        "Confidential & private",
        "Flexible scheduling"
      ]
    },
    {
      name: "25 Session Plan",
      price: "₹10,000",
      sessionsCount: 25,
      effective: "₹400 / session",
      savings: "Save ₹2,475",
      subtitle: "Complete personal transformation.",
      badge: null,
      isBestValue: false,
      cta: "Choose 25 Sessions",
      features: [
        "Up to 50 minutes each",
        "Online sessions",
        "Confidential & private",
        "Flexible scheduling"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-14 sm:py-16 bg-[#fbfdfc] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-block px-3 py-1 rounded-full bg-[#00839a]/10 text-[#00839a] text-xs font-semibold uppercase tracking-wider mb-3">
            Simple & Transparent Pricing
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#083058] tracking-tight font-display mb-3">
            Professional Support, Made Accessible.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Start with one session or choose a plan that supports your longer journey.
          </p>
        </div>

        {/* 5 Plans Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch">
          {plans.map((plan, index) => {
            const isBest = plan.isBestValue;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`relative rounded-2xl p-6 text-left flex flex-col justify-between transition-all ${
                  isBest
                    ? 'bg-white border-2 border-[#00839a] shadow-xl ring-4 ring-[#00839a]/10'
                    : 'bg-white border border-slate-200/80 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Badges */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase shadow-sm ${
                        isBest
                          ? 'bg-[#00839a] text-white'
                          : 'bg-[#083058] text-white'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-bold text-[#083058] mb-1">{plan.name}</h3>
                  <p className="text-xs text-slate-500 mb-4 min-h-[1.2rem]">{plan.subtitle}</p>

                  {/* Price */}
                  <div className="mb-4 pb-4 border-b border-slate-100">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-3xl font-extrabold text-[#083058]">{plan.price}</span>
                      <span className="text-xs text-slate-500 font-medium">/ {plan.sessionsCount} {plan.sessionsCount === 1 ? 'session' : 'sessions'}</span>
                    </div>
                    
                    <div className="mt-2 flex items-center justify-between text-xs">
                      <span className="text-[#00839a] font-semibold">{plan.effective}</span>
                      {plan.savings && (
                        <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold text-[11px]">
                          {plan.savings}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2.5 mb-6 text-xs text-slate-600">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center space-x-2">
                        <Check size={14} className="text-[#00839a] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <Link
                    to="/first-session"
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-center block transition-all ${
                      isBest
                        ? 'bg-[#083058] hover:bg-[#0c4a6e] text-white shadow-md'
                        : 'bg-slate-50 hover:bg-slate-100 text-[#083058] border border-slate-200'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footnote reassurance */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-xl mx-auto">
          All session packages include flexible rollover, verified certified therapists, and confidential online audio/video slots.
        </div>

      </div>
    </section>
  );
};

export default Pricing;
