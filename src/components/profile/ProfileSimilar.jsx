import React from 'react';
import CompanionCard from '../companions/CompanionCard';
import { companions } from '../../data/companionsData';
import { Link } from 'react-router-dom';

const ProfileSimilar = ({ currentCompanionId }) => {
  // Get 3 random/similar companions excluding the current one
  const similarCompanions = companions.filter(c => c.id !== currentCompanionId).slice(0, 3);

  if (similarCompanions.length === 0) return null;

  return (
    <section className="py-16 bg-brand-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white mb-8 text-center md:text-left">
          You might also feel comfortable talking to...
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {similarCompanions.map(companion => (
            <CompanionCard key={companion.id} companion={companion} />
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/companions" 
            className="inline-block px-8 py-3 rounded-full text-sm font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            Explore All Companions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProfileSimilar;
