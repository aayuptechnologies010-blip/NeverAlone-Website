import React from 'react';
import { Link } from 'react-router-dom';
import { companions } from '../../data/companionsData';
import CompanionCard from '../companions/CompanionCard';

export default function AboutCompanions() {
  // Select Aisha, Riya, Ananya
  const displayCompanions = companions.filter(c => 
    ['aisha', 'riya', 'ananya'].includes(c.id)
  );

  return (
    <section className="py-16 bg-brand-900 relative border-t border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-10">
          <p className="text-xs font-semibold text-romantic-pink uppercase tracking-widest mb-6">
            The People You Talk To
          </p>
          <h2 className="text-3xl md:text-3xl font-semibold text-white mb-6">
            Different personalities. <br className="hidden md:block" />
            Different conversations.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Choose people based on the kind of conversation you want, the languages you speak, shared interests and the conversation style that feels comfortable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {displayCompanions.map(companion => (
            <CompanionCard key={companion.id} companion={companion} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/categories"
            className="inline-flex px-8 py-4 rounded-full text-base font-semibold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            Explore Companions
          </Link>
        </div>

      </div>
    </section>
  );
}
