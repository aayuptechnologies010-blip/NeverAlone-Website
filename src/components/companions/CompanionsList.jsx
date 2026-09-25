import React from 'react';
import CompanionCard from './CompanionCard';
import { Sparkles, RotateCcw } from 'lucide-react';

const CompanionsList = ({ companions = [], onResetFilters }) => {
  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">Companions & Therapists</h2>
          <p className="text-gray-400 text-sm">
            Showing <span className="text-electric-cyan font-semibold">{companions.length}</span> available companion{companions.length === 1 ? '' : 's'} ready to talk.
          </p>
        </div>
      </div>

      {companions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {companions.map(companion => (
            <CompanionCard key={companion.id} companion={companion} />
          ))}
        </div>
      ) : (
        <div className="py-16 px-6 text-center bg-brand-900/40 border border-white/10 rounded-3xl">
          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400">
            <Sparkles size={24} className="text-electric-cyan" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">No matching companions found</h3>
          <p className="text-gray-400 text-sm max-w-md mx-auto mb-6">
            Try adjusting your search criteria, language selection, or clearing active filters to find someone right now.
          </p>
          {onResetFilters && (
            <button
              type="button"
              onClick={onResetFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold hover:bg-white/20 transition"
            >
              <RotateCcw size={14} />
              <span>Reset all filters</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CompanionsList;
