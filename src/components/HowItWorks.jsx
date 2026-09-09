import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MicOff, Volume2, PhoneOff, AlertTriangle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    { num: "01", title: "Tell us what you need", desc: "Choose a category that fits your mood today." },
    { num: "02", title: "Find your match", desc: "Browse profiles and pick someone you'd like to talk to." },
    { num: "03", title: "Choose a time", desc: "Connect instantly or schedule for later." },
    { num: "04", title: "Have your conversation", desc: "Relax and talk. No pressure, just connection." }
  ];

  return (
    <section id="how-it-works" className="py-10 relative bg-brand-950 overflow-hidden border-t border-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-4 items-center">
          
          {/* Left Side: Journey Steps */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-3xl font-semibold text-white mb-8"
            >
              How it works
            </motion.h2>

            <div className="space-y-10 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-800 before:to-transparent">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative flex items-start space-x-6"
                >
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-brand-900 border border-brand-700 shadow-[0_0_15px_rgba(219,39,119,0.3)] text-romantic-pink font-serif italic text-xl shrink-0">
                    {step.num}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Phone Call Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-[300px] h-[500px] bg-black rounded-[3rem] p-2 shadow-2xl relative border-4 border-gray-800 mt-10 lg:mt-0">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-20" />
              
              {/* Screen */}
              <div className="w-full h-full bg-brand-950 rounded-[2.5rem] overflow-hidden relative flex flex-col">
                {/* Call Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-900 to-brand-950" />
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-48 bg-romantic-DEFAULT/20 rounded-full blur-[60px]" />
                
                {/* Caller Info */}
                <div className="relative z-10 pt-14 px-6 text-center flex-grow">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-romantic-DEFAULT to-dream-DEFAULT rounded-full p-1 mb-3 shadow-[0_0_30px_rgba(219,39,119,0.3)]">
                    <img src="https://i.pravatar.cc/150?img=47" alt="Aisha" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">Aisha</h3>
                  <p className="text-xs text-gray-400 mb-2">Relationship Advice</p>
                  <p className="text-electric-cyan font-mono text-base">12:45</p>
                  
                  {/* Waveform graphic */}
                  <div className="flex items-center justify-center space-x-1 mt-6 h-6">
                    {[1, 2, 3, 4, 5, 4, 3, 2, 1].map((val, i) => (
                      <motion.div
                        key={i}
                        animate={{ height: ["20%", "100%", "20%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                        className="w-1 bg-white/50 rounded-full"
                        style={{ height: `${val * 20}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Call Controls */}
                <div className="relative z-10 pb-6 px-6">
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <button className="flex flex-col items-center space-y-1.5 group">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white/20 transition">
                        <MicOff size={20} />
                      </div>
                      <span className="text-[10px] text-gray-400">Mute</span>
                    </button>
                    <button className="flex flex-col items-center space-y-1.5 group">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white/20 transition">
                        <Volume2 size={20} />
                      </div>
                      <span className="text-[10px] text-gray-400">Speaker</span>
                    </button>
                    <button className="flex flex-col items-center space-y-1.5 group">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gray-400 group-hover:bg-white/20 transition">
                        <AlertTriangle size={20} />
                      </div>
                      <span className="text-[10px] text-gray-400">Report</span>
                    </button>
                  </div>
                  
                  <div className="flex justify-center">
                    <button className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all transform hover:scale-105">
                      <PhoneOff size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
