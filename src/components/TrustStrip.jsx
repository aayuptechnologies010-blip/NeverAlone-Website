import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Phone, Heart, UserCheck, Lock } from 'lucide-react';

const TrustStrip = () => {
  const trustPoints = [
    { icon: Heart, text: "No Judgment" },
    { icon: Lock, text: "Private Conversations" },
    { icon: UserCheck, text: "Real Human Connection" },
    { icon: Phone, text: "Phone Calls Only" },
    { icon: Shield, text: "Respectful Boundaries" },
  ];

  return (
    <>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      <div className="w-full bg-brand-900 border-y border-brand-800/60 py-2.5 overflow-hidden flex relative">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-900 to-transparent z-10 pointer-events-none" />

        {/* Marquee Animation */}
        <div className="animate-marquee flex w-max items-center cursor-default">
          {/* Duplicate the array to create seamless loop */}
          {[...trustPoints, ...trustPoints, ...trustPoints, ...trustPoints].map((point, index) => (
            <div key={index} className="flex items-center space-x-3 px-6 whitespace-nowrap">
              <div className="p-1.5 bg-brand-800/80 rounded-full border border-brand-teal/30 flex items-center justify-center">
                <point.icon size={13} className="text-brand-leaf" />
              </div>
              <span className="text-xs md:text-sm font-bold tracking-wider uppercase text-slate-200 whitespace-nowrap">{point.text}</span>
              <span className="text-brand-teal/40 ml-6 text-base">•</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TrustStrip;
