import React from 'react';
import { Sparkles } from 'lucide-react';

const ProfileStyle = ({ companion }) => {
  return (
    <section className="py-8 bg-brand-950">
      <div className="max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white mb-6">Her conversation style</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {companion.styleTraits.map(trait => (
            <div key={trait} className="flex items-center space-x-3 bg-brand-900 border border-white/5 p-4 rounded-xl">
              <Sparkles size={16} className="text-romantic-DEFAULT" />
              <span className="text-gray-300 font-medium">{trait}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileStyle;
