import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, VideoOff, MapPinOff, Flag, HeartHandshake, UserPlus, Phone } from 'lucide-react';

const ExploreSafety = () => {
  const guidelines = [
    { icon: Phone, text: "Private phone conversations", color: "text-blue-500", bg: "bg-blue-50" },
    { icon: VideoOff, text: "No video", color: "text-purple-500", bg: "bg-purple-50" },
    { icon: MapPinOff, text: "No physical meetups through the platform", color: "text-orange-500", bg: "bg-orange-50" },
    { icon: Flag, text: "Report anytime", color: "text-red-500", bg: "bg-red-50" },
    { icon: HeartHandshake, text: "Respectful conversations", color: "text-pink-500", bg: "bg-pink-50" },
    { icon: UserPlus, text: "18+ only", color: "text-emerald-500", bg: "bg-emerald-50" }
  ];

  return (
    <section className="py-12 bg-brand-50 border-t border-brand-100 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-brand-100 rounded-3xl p-8 lg:p-12 shadow-lg">

          <div className="flex flex-col lg:flex-row items-start gap-10">

            {/* Left: Heading + CTA */}
            <div className="lg:w-1/3 text-center lg:text-left">
              <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-5 shadow-md">
                <ShieldCheck size={28} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-brand-900 mb-3">Comfort first.<br />Boundaries always.</h2>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">We maintain a strict code of conduct so you can talk freely and safely.</p>
              <Link
                to="/safety"
                className="inline-block px-6 py-3 rounded-full text-sm font-semibold text-white bg-brand-900 hover:bg-brand-800 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Read Our Safety Guidelines
              </Link>
            </div>

            {/* Right: Guidelines + extra notes */}
            <div className="lg:w-2/3 w-full">
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {guidelines.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.07 }}
                    className="flex items-center space-x-3 bg-white border border-gray-100 rounded-xl p-3 hover:shadow-sm transition-shadow"
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${item.bg}`}>
                      <item.icon size={16} className={item.color} />
                    </div>
                    <span className="font-medium text-sm text-gray-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Notes */}
              <div className="bg-brand-50 rounded-2xl p-5 border border-brand-100 space-y-4">
                <div>
                  <h4 className="text-pink-600 text-xs font-bold uppercase tracking-wider mb-1">For Flirty Mode:</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">Consensual and non-explicit only. Explicit behavior is strictly prohibited.</p>
                </div>
                <div className="w-full h-px bg-brand-100" />
                <div>
                  <h4 className="text-slate-600 text-xs font-bold uppercase tracking-wider mb-1">For Professional Support:</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">Only appropriately qualified and verified professionals provide therapy on this platform.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSafety;
