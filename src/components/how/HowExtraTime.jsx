import React from 'react';
import { Plus, Phone, VideoOff, Check } from 'lucide-react';

const HowExtraTime = () => {
  return (
    <section className="py-16 bg-brand-950 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-brand-900 to-brand-950 border border-white/10 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-6 lg:gap-20 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-dream-DEFAULT/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="w-full md:w-1/2 relative z-10">
            <h2 className="text-3xl md:text-3xl font-semibold text-white mb-6">Not ready to stop talking?</h2>
            
            <div className="mb-8">
              <div className="flex justify-between text-sm mb-2 font-medium">
                <span className="text-romantic-pink">55 mins used</span>
                <span className="text-gray-500">60 mins total</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="w-[92%] h-full bg-gradient-to-r from-romantic-pink to-romantic-DEFAULT rounded-full" />
              </div>
            </div>

            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl mb-8 flex items-center justify-between">
              <div>
                <div className="text-white font-semibold text-lg mb-1">Add 1 More Hour</div>
                <div className="text-sm text-gray-400">Continue your conversation</div>
              </div>
              <div className="text-2xl font-semibold text-electric-cyan">₹199</div>
            </div>

            <button className="w-full py-4 rounded-xl text-brand-950 bg-white font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Add Extra Time
            </button>
          </div>

          <div className="w-full md:w-1/2 relative z-10">
            <h3 className="text-xl font-semibold text-white mb-6">Benefits</h3>
            <ul className="space-y-4">
              {[
                { icon: Plus, text: "+60 additional minutes" },
                { icon: Phone, text: "Private phone call" },
                { icon: Check, text: "Continue with current companion subject to availability" },
                { icon: VideoOff, text: "No video" },
                { icon: Check, text: "Multiple extensions may be purchased when available" }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300">
                  <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon size={12} className="text-electric-cyan" />
                  </div>
                  <span className="text-sm md:text-base leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HowExtraTime;
