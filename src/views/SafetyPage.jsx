import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, UserCheck, PhoneCall, AlertTriangle, CheckCircle2 } from 'lucide-react';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import EmergencySupport from '../components/EmergencySupport';

export default function SafetyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const safetyFeatures = [
    {
      title: "100% Confidential Conversations",
      desc: "All audio and video sessions take place over private, end-to-end encrypted channels. No recordings are ever stored.",
      icon: Lock
    },
    {
      title: "RCI Verified & Certified Professionals",
      desc: "Every psychologist and counsellor on Neuravia undergoes stringent credential verification and ethical background checks.",
      icon: UserCheck
    },
    {
      title: "Strict Non-Judgmental Space",
      desc: "A safe, respectful environment adhering strictly to clinical confidentiality and professional boundaries.",
      icon: ShieldCheck
    },
    {
      title: "Anonymous Options Available",
      desc: "Choose voice-only calls and display name aliases if you prefer maximum personal privacy.",
      icon: PhoneCall
    }
  ];

  return (
    <div className="min-h-screen bg-[#fbfdfc] font-sans text-slate-800 pt-20">
      {/* Hero */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#00839a]/10 text-[#00839a] text-xs font-semibold uppercase tracking-wider">
            Trust &amp; Confidentiality
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#083058] tracking-tight font-display leading-tight">
            Your Privacy &amp; Safety Are Our Highest Priority.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We hold ourselves to the highest standards of mental healthcare privacy, ethical guidelines and user protection.
          </p>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-14 sm:py-16 bg-[#fbfdfc] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8">
            {safetyFeatures.map((f, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-2xl p-7 shadow-sm text-left flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#00839a]/10 text-[#00839a] flex items-center justify-center shrink-0">
                  <f.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#083058] mb-2">{f.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <FinalCTA />
      <EmergencySupport />
    </div>
  );
}
