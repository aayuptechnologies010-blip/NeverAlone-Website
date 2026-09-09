import React from 'react';
import { Link } from 'react-router-dom';

const HowFinalCTA = () => {
  return (
    <section className="py-16 bg-brand-950 text-center px-4">
      <h2 className="text-3xl md:text-3xl font-semibold text-white mb-6">Your next conversation could be one click away.</h2>
      <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">Choose what's on your mind and find someone who feels right to talk to.</p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link 
          to="/book" 
          className="px-8 py-4 rounded-full font-semibold text-brand-950 bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
        >
          Find Someone To Talk To
        </Link>
        <Link 
          to="/companions" 
          className="px-8 py-4 rounded-full font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
        >
          Browse Companions
        </Link>
      </div>
    </section>
  );
};

export default HowFinalCTA;
