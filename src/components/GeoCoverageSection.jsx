import React from 'react';
import { MapPin, ShieldCheck, PhoneCall, Sparkles, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const topCities = [
  { city: 'Delhi NCR', therapists: '180+ Available', icon: '🏛️' },
  { city: 'Mumbai', therapists: '210+ Available', icon: '🌊' },
  { city: 'Bangalore', therapists: '240+ Available', icon: '💻' },
  { city: 'Hyderabad', therapists: '130+ Available', icon: '✨' },
  { city: 'Pune', therapists: '110+ Available', icon: '🌿' },
  { city: 'Chennai', therapists: '95+ Available', icon: '🌅' },
  { city: 'Kolkata', therapists: '85+ Available', icon: '🎭' },
  { city: 'Ahmedabad', therapists: '75+ Available', icon: '🪁' },
  { city: 'Pan-India / Remote', therapists: '500+ Online Now', icon: '🇮🇳' },
];

export default function GeoCoverageSection() {
  return (
    <section className="py-16 bg-brand-900/40 border-y border-white/5 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-electric-cyan/30 bg-electric-cyan/10 px-3 py-1 text-xs font-bold text-electric-cyan uppercase tracking-wider mb-3">
              <MapPin size={13} />
              <span>Pan-India Clinical Coverage</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Online Therapy & Emotional Support Across India
            </h2>
            <p className="mt-1.5 text-sm text-gray-300 max-w-2xl">
              Connect with certified psychologists fluent in <span className="text-electric-cyan font-medium">Hindi, English, Marathi, Tamil, Telugu, and Bengali</span> from any city.
            </p>
          </div>

          <Link
            to="/first-session"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white text-white hover:text-brand-950 font-bold px-5 py-2.5 text-xs transition-all border border-white/10"
          >
            <span>Book ₹499 Session Anywhere</span>
          </Link>
        </div>

        {/* City Grid for Local SEO Relevance */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-8">
          {topCities.map((item, idx) => (
            <Link
              key={idx}
              to="/first-session"
              className="p-3.5 rounded-2xl bg-brand-950/70 border border-white/10 hover:border-pink-500/40 hover:bg-brand-900 transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg">{item.icon}</span>
                <span className="text-[10px] font-bold text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded">
                  Active
                </span>
              </div>
              <div>
                <p className="text-xs font-bold text-white group-hover:text-pink-400 transition-colors">
                  {item.city}
                </p>
                <p className="text-[11px] text-gray-400">
                  {item.therapists}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Local Assurance Bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-white/5 text-xs text-gray-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-electric-cyan" />
            RCI Certified Therapists & Counsellors
          </span>
          <span className="flex items-center gap-1.5">
            <PhoneCall size={14} className="text-green-400" />
            100% Private Encrypted Audio Calling
          </span>
          <span className="flex items-center gap-1.5">
            <Heart size={14} className="text-pink-400" />
            Zero Stigma, Safe Healing Container
          </span>
        </div>

      </div>
    </section>
  );
}
