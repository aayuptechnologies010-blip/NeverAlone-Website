import React from 'react';

export default function ProfAbout({ professional }) {
  return (
    <section className="py-12 bg-brand-950">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-white mb-6">About</h2>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 leading-relaxed text-lg mb-8">
            {professional.about}
          </p>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Professional Approach
            </h3>
            <p className="text-white">
              {professional.approach}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
