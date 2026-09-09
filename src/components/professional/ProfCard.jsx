import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Languages, Clock, IndianRupee } from 'lucide-react';

export default function ProfCard({ professional }) {
  const navigate = useNavigate();

  return (
    <div className="group rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-electric-cyan/40 transition-all hover:bg-white/10 flex flex-col h-full">
      {/* Profile Image & Badge */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={professional.image}
          alt={professional.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/40 to-transparent" />
        
        {/* Verified Badge */}
        {professional.verified && (
          <div className="absolute top-4 left-4 bg-brand-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-electric-cyan/30 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-electric-cyan" />
            <span className="text-[10px] font-semibold text-electric-cyan tracking-wider uppercase">
              Verified Professional
            </span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1 relative bg-brand-950">
        {/* Basic Info */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-white mb-1">{professional.name}</h3>
          <p className="text-sm font-medium text-electric-cyan">
            {professional.qualification}
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs text-gray-400 mb-6">
          <div className="flex items-center gap-1.5">
            <Languages className="w-3.5 h-3.5 text-gray-500" />
            <span className="truncate">{professional.languages.join(', ')}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-gray-500 font-semibold text-[10px] uppercase tracking-wider">EXP:</span>
            <span>{professional.experience}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-gray-500" />
            <span>{professional.sessionDuration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <IndianRupee className="w-3.5 h-3.5 text-gray-500" />
            <span>{professional.pricing}</span>
          </div>
        </div>

        {/* Areas of Practice */}
        <div className="mb-8 flex-1">
          <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-2 font-semibold">Areas of Practice</p>
          <div className="flex flex-wrap gap-2">
            {professional.areasOfPractice.slice(0, 3).map((area) => (
              <span key={area} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300">
                {area}
              </span>
            ))}
            {professional.areasOfPractice.length > 3 && (
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-500">
                +{professional.areasOfPractice.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 mt-auto">
          <button
            onClick={() => navigate(`/professionals/${professional.id}`)}
            className="w-full py-3 rounded-xl text-sm font-semibold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.2)]"
          >
            View Professional
          </button>
          <button
            onClick={() => navigate(`/professionals/${professional.id}#availability`)}
            className="w-full py-3 rounded-xl text-sm font-medium text-gray-300 border border-white/20 hover:bg-white/10 transition-colors"
          >
            See Availability
          </button>
        </div>
      </div>
    </div>
  );
}
