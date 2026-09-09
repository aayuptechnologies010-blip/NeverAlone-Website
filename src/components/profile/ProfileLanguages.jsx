import React from 'react';
import { Languages } from 'lucide-react';

const ProfileLanguages = ({ companion }) => {
  return (
    <section className="py-8 bg-brand-950">
      <div className="max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
          <Languages className="text-electric-cyan" /> 
          Languages
        </h2>
        
        <div className="flex flex-wrap gap-4">
          {companion.languages.map(lang => (
            <div key={lang} className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-white font-medium">
              {lang}
            </div>
          ))}
          {companion.languages.includes("Hindi") && companion.languages.includes("English") && (
            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-gray-400 text-sm flex items-center">
              Comfortable in Hinglish
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfileLanguages;
