import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const ProfileSafety = () => {
  const controls = [
    "End the call anytime",
    "Mute anytime",
    "Report anytime",
    "Respectful boundaries",
    "No physical meetups",
    "No explicit conversations outside permitted guidelines"
  ];

  return (
    <section className="py-12 bg-brand-950">
      <div className="max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-brand-900 to-brand-950 border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden">
          <ShieldCheck size={120} className="absolute -right-10 -bottom-10 text-white/[0.03] pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold text-white mb-6">You're always in control.</h2>
            
            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-8">
              {controls.map((control, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-gray-300 text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-electric-cyan shrink-0" />
                  <span>{control}</span>
                </div>
              ))}
            </div>

            <Link 
              to="/safety" 
              className="inline-block px-6 py-2.5 rounded-full border border-white/20 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              View Safety Guidelines
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSafety;
