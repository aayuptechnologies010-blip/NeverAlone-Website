import React from 'react';
import { ArrowDown, VideoOff, MapPinOff, PhoneOff, Flag, UserPlus } from 'lucide-react';

const HowPrivacy = () => {
  return (
    <section className="py-16 bg-brand-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl md:text-3xl font-semibold text-white text-center mb-10">Private from start to finish.</h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Flow */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            {['Choose Companion', 'Book Time', 'Private Call', 'Feedback'].map((step, idx) => (
              <React.Fragment key={step}>
                <div className="w-64 py-4 rounded-2xl bg-brand-900 border border-white/10 text-center font-semibold text-white shadow-lg">
                  {step}
                </div>
                {idx < 3 && <ArrowDown size={24} className="text-white/20 my-3" />}
              </React.Fragment>
            ))}
          </div>

          {/* Trust Points */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: VideoOff, text: "No video" },
                { icon: MapPinOff, text: "No physical meetup through platform" },
                { icon: PhoneOff, text: "No unnecessary sharing of personal phone numbers" },
                { icon: Flag, text: "Report anytime" },
                { icon: UserPlus, text: "18+ platform" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-brand-900 flex items-center justify-center mb-4 text-electric-cyan">
                    <item.icon size={20} />
                  </div>
                  <span className="text-sm font-medium text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HowPrivacy;
