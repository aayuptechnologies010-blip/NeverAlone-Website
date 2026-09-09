import React from 'react';
import { ShieldCheck, Phone, VideoOff, Flag, UserPlus } from 'lucide-react';

const CompanionsSafety = () => {
  return (
    <div className="py-10 border-t border-white/5 text-center bg-brand-950">
      <h3 className="text-xl font-semibold text-white mb-6">Comfort first. Boundaries always.</h3>
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-xs md:text-sm text-gray-400">
        <div className="flex items-center space-x-2">
          <ShieldCheck size={16} />
          <span>Verified profiles</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone size={16} />
          <span>Private calling</span>
        </div>
        <div className="flex items-center space-x-2">
          <VideoOff size={16} />
          <span>No video</span>
        </div>
        <div className="flex items-center space-x-2">
          <Flag size={16} />
          <span>Report anytime</span>
        </div>
        <div className="flex items-center space-x-2">
          <UserPlus size={16} />
          <span>18+ platform</span>
        </div>
      </div>
    </div>
  );
};

export default CompanionsSafety;
