import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: "Starter Pack",
      sessions: "6 Sessions",
      price: "₹2,500",
      perSession: "₹416 / session",
      duration: "Flexible Scheduling",
      features: [
        "6 × 60-min audio sessions",
        "Private 1-on-1 conversations",
        "Dedicated companion matching",
        "All topic categories included"
      ],
      isPopular: false,
      isBestValue: false,
      badge: "Save 16%",
      gradient: "from-brand-teal to-brand-500"
    },
    {
      name: "Growth Pack",
      sessions: "12 Sessions",
      price: "₹4,500",
      perSession: "₹375 / session",
      duration: "Most Balanced",
      features: [
        "12 × 60-min audio sessions",
        "Priority companion matching",
        "Same-day slot availability",
        "Dedicated emotional check-ins",
        "Priority care support"
      ],
      isPopular: true,
      isBestValue: false,
      badge: "Most Popular",
      gradient: "from-brand-navy via-brand-teal to-brand-green"
    },
    {
      name: "Transformation",
      sessions: "20 Sessions",
      price: "₹8,000",
      perSession: "₹400 / session",
      duration: "Deep Healing",
      features: [
        "20 × 60-min audio sessions",
        "VIP listener priority",
        "Flexible rollover anytime",
        "Crisis safety shortcuts",
        "24/7 dedicated support"
      ],
      isPopular: false,
      isBestValue: false,
      badge: "Deep Support",
      gradient: "from-brand-teal to-brand-green"
    },
    {
      name: "Complete Wellness",
      sessions: "25 Sessions",
      price: "₹10,000",
      perSession: "₹400 / session",
      duration: "Full Journey",
      features: [
        "25 × 60-min audio sessions",
        "All-access companion pass",
        "No expiration on sessions",
        "Exclusive priority matching",
        "Complimentary family extension"
      ],
      isPopular: false,
      isBestValue: true,
      badge: "Best Value",
      gradient: "from-brand-green to-brand-teal"
    }
  ];

  return (
    <section className="py-12 bg-brand-950 relative border-t border-brand-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Single Session Banner */}
        <div className="max-w-4xl mx-auto mb-12 bg-gradient-to-r from-brand-900 via-brand-900/90 to-brand-800 border border-brand-teal/30 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left">
            <span className="inline-block px-3 py-1 bg-brand-leaf/10 border border-brand-leaf/40 text-brand-leaf text-xs font-bold uppercase rounded-full mb-2 tracking-wider">
              Single Session Flat Rate
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              1 Session — Flat ₹499
            </h3>
            <p className="text-slate-300 text-sm mt-1">
              60-minute confidential 1-on-1 private audio call. Try once with zero commitments.
            </p>
          </div>
          <Link
            to="/first-session"
            className="px-8 py-3.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-brand-teal to-brand-500 hover:from-brand-600 hover:to-brand-teal shadow-lg shadow-brand-500/25 transition-all whitespace-nowrap transform hover:-translate-y-0.5 border border-cyan-300/30"
          >
            Book 1 Session (₹499)
          </Link>
        </div>

        <div className="text-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-3 font-display"
          >
            Flexible Session Packages
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-slate-300"
          >
            Save more as you continue your healing journey. No expiration on sessions.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mt-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-brand-900/70 backdrop-blur-md rounded-3xl p-6 border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                plan.isPopular 
                  ? 'border-brand-teal shadow-[0_0_30px_rgba(2,132,199,0.2)] bg-brand-900/90 z-10' 
                  : 'border-white/10 hover:border-brand-teal/40 z-0'
              } flex flex-col`}
            >
              {plan.badge && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full text-[10px] font-bold text-white tracking-widest uppercase bg-gradient-to-r ${plan.gradient} shadow-md whitespace-nowrap`}>
                  {plan.badge}
                </div>
              )}

              <div className="text-center mb-6 mt-2">
                <h3 className="text-base text-slate-200 font-bold mb-1">{plan.name}</h3>
                <span className="text-xs font-semibold text-brand-leaf bg-brand-leaf/10 px-2.5 py-0.5 rounded-full inline-block mb-3">
                  {plan.sessions}
                </span>
                <div className="flex items-center justify-center mb-1">
                  <span className="text-3xl sm:text-4xl font-black text-white font-display">{plan.price}</span>
                </div>
                <p className="text-xs font-medium text-brand-300">{plan.perSession}</p>
              </div>

              <div className="space-y-2.5 flex-grow mb-6">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-2.5">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 bg-brand-leaf/10 mt-0.5">
                      <Check size={11} className="text-brand-leaf" />
                    </div>
                    <span className="text-xs text-slate-300 leading-snug">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/pricing" 
                className={`w-full py-3 rounded-xl text-sm font-bold text-center transition-all duration-300 ${
                  plan.isPopular 
                    ? 'bg-gradient-to-r from-brand-teal to-brand-500 text-white hover:opacity-95 shadow-md shadow-brand-teal/25' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Choose {plan.sessions}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <div className="bg-brand-900/40 border border-white/5 rounded-2xl p-4 backdrop-blur-sm">
            <p className="text-sm text-white font-medium mb-1.5">Extra Time: <span className="text-electric-cyan">₹199 / additional 60 minutes</span></p>
            <p className="text-[10px] md:text-xs text-gray-500">
              Note: The same companion is not guaranteed every day and availability may vary. Professional support/therapy pricing is not included in these standard companion plans.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
