import React from 'react';
import { Phone, VideoOff, IndianRupee, Clock } from 'lucide-react';

const ProfileCallInfo = () => {
  return (
    <section className="py-8 bg-brand-950">
      <div className="max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white mb-6">Your conversation</h2>
        
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-brand-900 border border-white/5 p-6 rounded-2xl flex items-start space-x-4">
            <Clock className="text-electric-cyan mt-1" size={24} />
            <div>
              <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-1">Duration</p>
              <p className="text-lg text-white font-medium">60 Minutes</p>
            </div>
          </div>

          <div className="bg-brand-900 border border-white/5 p-6 rounded-2xl flex items-start space-x-4">
            <Phone className="text-romantic-pink mt-1" size={24} />
            <div>
              <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-1">Type</p>
              <p className="text-lg text-white font-medium">Private Phone Call</p>
              <p className="text-xs text-gray-500 mt-1">Number stays private</p>
            </div>
          </div>

          <div className="bg-brand-900 border border-white/5 p-6 rounded-2xl flex items-start space-x-4">
            <VideoOff className="text-gray-500 mt-1" size={24} />
            <div>
              <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-1">Video</p>
              <p className="text-lg text-white font-medium">No Video</p>
            </div>
          </div>

          <div className="bg-brand-900 border border-white/5 p-6 rounded-2xl flex items-start space-x-4">
            <IndianRupee className="text-dream-DEFAULT mt-1" size={24} />
            <div>
              <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-1">Extra time</p>
              <p className="text-lg text-white font-medium">₹199 / Add. 60 Min</p>
              <p className="text-xs text-gray-500 mt-1">Subject to availability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCallInfo;
