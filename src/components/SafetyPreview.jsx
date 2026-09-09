import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, EyeOff, Phone, Flag, UserPlus, Heart } from 'lucide-react';

const SafetyPreview = () => {
  const safetyPoints = [
    { icon: EyeOff, text: "Your number stays private" },
    { icon: ShieldCheck, text: "Verified companions" },
    { icon: Phone, text: "Phone calls only" },
    { icon: Flag, text: "Report anytime" },
    { icon: UserPlus, text: "18+ platform" },
    { icon: Heart, text: "Respectful boundaries" }
  ];

  return (
    <section className="py-10 bg-brand-900 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-electric-DEFAULT/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-brand-950 border border-white/10 rounded-[3rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 shadow-2xl shadow-black/20 relative overflow-hidden group">
          {/* Subtle background glow inside the box */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-romantic-DEFAULT/5 via-dream-DEFAULT/5 to-electric-DEFAULT/5 rounded-full blur-[80px] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
          
          <div className="lg:w-5/12 text-center lg:text-left relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
            >
              Feel close. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-blue-500">Stay protected.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base text-gray-400 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed"
            >
              Your safety and privacy are our top priorities. We use advanced technology to ensure every conversation is secure.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link 
                to="/safety" 
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-full font-semibold text-white bg-pink-600 hover:bg-pink-500 hover:shadow-[0_0_20px_rgba(219,39,119,0.3)] transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Visit Safety Center</span>
              </Link>
            </motion.div>
          </div>

          <div className="lg:w-7/12 w-full relative z-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {safetyPoints.map((point, index) => {
                const colors = [
                  "bg-pink-500",
                  "bg-emerald-500",
                  "bg-blue-500",
                  "bg-orange-500",
                  "bg-purple-500",
                  "bg-rose-500"
                ];
                const colorClass = colors[index % colors.length];

                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-brand-900 border border-white/10 rounded-[1.5rem] p-5 flex flex-col items-center justify-center text-center group/card hover:border-pink-500/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 mb-4 rounded-full flex items-center justify-center ${colorClass} shadow-inner group-hover/card:scale-110 transition-transform duration-300`}>
                      <point.icon size={20} className="text-white" />
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-gray-300 group-hover/card:text-white transition-colors">{point.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SafetyPreview;
