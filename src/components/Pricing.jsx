import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: "Weekly",
      price: "₹799",
      duration: "7 Days",
      features: ["1 hour every day", "Access to all demo categories", "Standard support"],
      isPopular: false,
      isBestValue: false,
      gradient: "from-gray-700 to-gray-600"
    },
    {
      name: "Monthly",
      price: "₹2,999",
      duration: "30 Days",
      features: ["1 hour every day", "Priority access", "Access to all demo categories", "Premium support"],
      isPopular: true,
      isBestValue: false,
      gradient: "from-romantic-DEFAULT to-dream-DEFAULT"
    },
    {
      name: "Yearly",
      price: "₹19,999",
      duration: "365 Days",
      features: ["1 hour every day", "VIP priority access", "Access to all demo categories", "24/7 Premium support"],
      isPopular: false,
      isBestValue: true,
      gradient: "from-electric-DEFAULT to-blue-500"
    }
  ];

  return (
    <section className="py-10 bg-brand-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-3xl font-semibold text-white mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Choose the plan that fits your needs. No hidden fees.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-center mt-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-brand-900 rounded-3xl p-6 md:p-8 border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                plan.isPopular 
                  ? 'border-romantic-DEFAULT/50 shadow-[0_0_30px_rgba(219,39,119,0.15)] lg:scale-105 z-10' 
                  : 'border-white/10 hover:border-white/30 z-0'
              } flex flex-col`}
            >
              {(plan.isPopular || plan.isBestValue) && (
                <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold text-white tracking-widest uppercase bg-gradient-to-r ${plan.gradient} shadow-lg`}>
                  {plan.isPopular ? "Most Popular" : "Best Value"}
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-lg text-gray-300 font-medium mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center mb-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                </div>
                <p className="text-xs text-gray-400">{plan.duration}</p>
              </div>

              <div className="space-y-3 flex-grow mb-6">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.isPopular ? 'bg-romantic-DEFAULT/20' : 'bg-white/5'}`}>
                      <Check size={12} className={plan.isPopular ? 'text-romantic-pink' : 'text-gray-400'} />
                    </div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/pricing" 
                className={`w-full py-3 rounded-full text-sm font-semibold text-center transition-all duration-300 ${
                  plan.isPopular 
                    ? 'bg-pink-600 text-white hover:bg-pink-500 hover:shadow-[0_0_20px_rgba(219,39,119,0.4)] transform hover:scale-105' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Start Talking
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
