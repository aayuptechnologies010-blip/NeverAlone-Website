import React from 'react';
import { Clock, Phone, VideoOff, ShieldAlert } from 'lucide-react';

export default function FaqQuickAnswers() {
  return (
    <section className="py-12 bg-brand-900 border-t border-b border-white/5">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-electric-cyan/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-electric-cyan" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white leading-tight">60 min</p>
              <p className="text-xs text-gray-400">Daily Conversation</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-8 bg-white/10" />

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-romantic-DEFAULT/10 flex items-center justify-center">
              <span className="text-romantic-pink font-semibold">₹</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-white leading-tight">₹199</p>
              <p className="text-xs text-gray-400">Extra 60 Minutes</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-8 bg-white/10" />

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
              <ShieldAlert className="w-5 h-5 text-gray-300" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white leading-tight">18+</p>
              <p className="text-xs text-gray-400">Adults Only</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-8 bg-white/10" />

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
              <Phone className="w-5 h-5 text-gray-300" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white leading-tight">Phone</p>
              <p className="text-xs text-gray-400">Calls Only</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-8 bg-white/10" />

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
              <VideoOff className="w-5 h-5 text-gray-300" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white leading-tight">No Video</p>
              <p className="text-xs text-gray-400">Ever</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
