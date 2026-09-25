import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { companions } from '../../data/companionsData';
import { professionalsDemo } from '../../data/professionalDemo';

export default function BookStepCompanion({ selectedCategory, selectedCompanion, preferences, onSelect }) {
  const isProfessionalSupport = selectedCategory === 'Professional Support';
  const concernAreas = {
    anxiety: 'Anxiety & Stress',
    stress: 'Anxiety & Stress',
    'low-mood': 'Depression',
    relationship: 'Relationship Issues',
  };
  const profiles = isProfessionalSupport
    ? [...professionalsDemo].sort((first, second) => {
        const score = (profile) => {
          let total = 0;
          if (concernAreas[preferences?.concern] && profile.areasOfPractice.includes(concernAreas[preferences.concern])) total += 2;
          if (preferences?.language && preferences.language !== 'No preference' && profile.languages.includes(preferences.language)) total += 1;
          return total;
        };
        return score(second) - score(first);
      })
    : companions.filter(
        (companion) => !companion.isProfessional && companion.categories.includes(selectedCategory)
      );

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-4xl mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-white mb-2">
          {isProfessionalSupport ? 'Choose a professional who feels right' : 'Who feels right to talk to?'}
        </h2>
        <p className="text-gray-400">
          {isProfessionalSupport
            ? 'We have placed profiles that best match your check-in first. You can still choose any professional.'
            : <>Select a companion for your <span className="text-white font-medium">{selectedCategory}</span> conversation.</>}
        </p>
      </div>

      {profiles.length === 0 ? (
        <div className="text-center py-12 bg-white/5 rounded-3xl border border-white/10">
          <p className="text-gray-400 mb-4">No matching profiles are available currently.</p>
          <button type="button" onClick={() => onSelect(null)} className="text-electric-cyan hover:underline">Go back and choose another category</button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {profiles.map((profile) => {
            const selected = selectedCompanion === profile.id;
            const verified = profile.isVerified || profile.verified;
            return (
              <button
                key={profile.id}
                type="button"
                onClick={() => onSelect(profile.id)}
                className={`p-4 rounded-2xl border transition-all text-left ${selected ? 'bg-brand-900 border-electric-cyan shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'bg-brand-950 border-white/10 hover:border-white/30'}`}
              >
                <div className="flex gap-4">
                  <img src={profile.image} alt={profile.name} className="w-20 h-20 rounded-xl object-cover" />
                  <div className="min-w-0 flex-grow">
                    <div className="flex items-center gap-1">
                      <h3 className="font-semibold text-white text-lg truncate">{profile.name}</h3>
                      {verified && <CheckCircle2 size={14} className="shrink-0 text-electric-cyan" />}
                    </div>
                    <p className="text-sm text-romantic-pink font-medium mb-1 truncate">
                      {isProfessionalSupport ? profile.qualification : profile.style}
                    </p>
                    {isProfessionalSupport && profile === profiles[0] && (preferences?.concern || preferences?.language) && (
                      <span className="mb-2 inline-flex rounded-full bg-electric-cyan/10 px-2 py-1 text-[10px] font-semibold text-electric-cyan">Recommended from your check-in</span>
                    )}
                    <p className="text-xs text-gray-500 mb-2">
                      {isProfessionalSupport ? `${profile.languages.join(' / ')} - ${profile.sessionDuration}` : profile.languages.join(' / ')}
                    </p>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] px-2 py-1 bg-white/5 rounded-md text-gray-400 truncate">
                        {isProfessionalSupport ? profile.pricing : profile.availability}
                      </span>
                      <span className={`shrink-0 text-xs font-semibold px-4 py-1.5 rounded-full ${selected ? 'bg-electric-cyan text-brand-950' : 'bg-white/10 text-white'}`}>
                        {selected ? 'Selected' : 'Choose'}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}
