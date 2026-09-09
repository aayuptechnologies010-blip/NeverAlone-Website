import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Volume2, PhoneOff, Flag, Shield } from 'lucide-react';

export default function FlirtyCallPreview() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-3xl font-semibold text-white mb-4">
            Private Phone Experience
          </h2>
          <p className="text-gray-400">
            A secure, audio-only space for chemistry to develop.
          </p>
        </div>

        {/* Phone UI Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-sm rounded-[40px] bg-brand-950 border-[6px] border-white/5 shadow-2xl overflow-hidden relative"
        >
          {/* Subtle background glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-romantic-DEFAULT/10 rounded-full blur-[60px] pointer-events-none" />
          
          <div className="px-6 py-8 flex flex-col h-full min-h-[500px]">
            {/* Top Bar */}
            <div className="flex justify-center mb-10">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <Shield className="w-3 h-3 text-electric-cyan" />
                <span className="text-[10px] font-medium text-gray-300">Flirty Mode • 18+</span>
              </div>
            </div>

            {/* Profile */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="relative mb-6">
                <div className="absolute -inset-2 rounded-full border border-romantic-DEFAULT/20 animate-pulse" />
                <img
                  src="https://i.pravatar.cc/300?img=47"
                  alt="Ananya"
                  className="w-28 h-28 rounded-full object-cover border-2 border-white/10 relative z-10"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Ananya</h3>
              <p className="text-3xl font-mono text-white mb-2 tracking-wider">42:18</p>
              <p className="text-xs text-gray-500">Conversation in progress</p>
            </div>

            {/* Controls */}
            <div className="mt-auto pt-10 pb-4">
              <div className="flex items-center justify-between px-4">
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <Mic className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[10px] text-gray-500">Mute</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <Volume2 className="w-5 h-5 text-gray-400" />
                  </div>
                  <span className="text-[10px] text-gray-500">Speaker</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center -mt-2">
                    <PhoneOff className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <Flag className="w-5 h-5 text-gray-400" />
                  </div>
                  <span className="text-[10px] text-gray-500">Report</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="text-sm font-medium text-romantic-pink mt-12 bg-romantic-DEFAULT/10 px-6 py-3 rounded-full">
          Your boundaries stay one tap away.
        </p>

        {/* Emphasize no video */}
        <div className="mt-8 flex gap-6">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-2">
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
              </svg>
            </div>
            <span className="text-xs text-gray-400 font-medium">No Video Button</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-2">
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
              </svg>
            </div>
            <span className="text-xs text-gray-400 font-medium">No Camera</span>
          </div>
        </div>

      </div>
    </section>
  );
}
