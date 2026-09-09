import React from 'react';
import CompanionCard from './CompanionCard';
import { companions } from '../../data/companionsData';

const CompanionsList = () => {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">People you might vibe with</h2>
        <p className="text-gray-400 text-sm md:text-base">Explore companions and find someone whose vibe feels right.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {companions.map(companion => (
          <CompanionCard key={companion.id} companion={companion} />
        ))}
      </div>

      {/* Demo Empty State (Commented out, but ready for logic integration) */}
      {/*
      <div className="py-12 text-center bg-white/5 border border-white/10 rounded-[2rem] mt-6">
        <h3 className="text-2xl font-semibold text-white mb-3">No perfect match yet?</h3>
        <p className="text-gray-400 mb-6">Try changing your filters — someone might be just one click away.</p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-2 rounded-full border border-white/20 text-white hover:bg-white/5">Clear Filters</button>
        </div>
      </div>
      */}
    </div>
  );
};

export default CompanionsList;
