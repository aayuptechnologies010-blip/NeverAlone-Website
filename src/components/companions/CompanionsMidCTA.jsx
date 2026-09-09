import React from 'react';
import { Link } from 'react-router-dom';

const CompanionsMidCTA = () => {
  return (
    <div className="py-16 mt-8 mb-10 bg-gradient-to-br from-brand-900 to-brand-950 rounded-3xl border border-white/5 text-center relative overflow-hidden group">
      <div className="absolute inset-0 bg-romantic-DEFAULT/5 group-hover:bg-romantic-DEFAULT/10 transition-colors duration-500" />
      <div className="relative z-10 px-4">
        <h3 className="text-2xl font-semibold text-white mb-2">Not sure who to choose?</h3>
        <p className="text-gray-400 mb-6 text-sm">
          Start with the kind of conversation you need. We'll make the rest easier.
        </p>
        <Link 
          to="/categories" 
          className="inline-block px-8 py-3 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
        >
          Help Me Choose
        </Link>
      </div>
    </div>
  );
};

export default CompanionsMidCTA;
