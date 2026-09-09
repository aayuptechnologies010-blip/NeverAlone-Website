import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import ProfCard from './ProfCard';

export default function ProfList({ professionals, filters }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');

  // Filter logic
  const filteredProfessionals = professionals.filter((prof) => {
    const matchesSearch =
      prof.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prof.qualification.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prof.areasOfPractice.some((area) =>
        area.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
    const matchesArea =
      selectedArea === 'All' || prof.areasOfPractice.includes(selectedArea);
      
    const matchesLanguage =
      selectedLanguage === 'All' || prof.languages.includes(selectedLanguage);

    return matchesSearch && matchesArea && matchesLanguage;
  });

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-3xl font-semibold text-white mb-8">
            Find a qualified professional
          </h2>

          {/* Filters Bar */}
          <div className="flex flex-col lg:flex-row gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">
            
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, language or area of practice..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-brand-950/50 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-electric-cyan/50 transition-colors"
              />
            </div>

            {/* Dropdowns */}
            <div className="flex flex-col sm:flex-row gap-4 lg:w-auto">
              <div className="relative flex-1 sm:w-48">
                <select
                  value={selectedArea}
                  onChange={(e) => setSelectedArea(e.target.value)}
                  className="w-full appearance-none bg-brand-950/50 border border-white/10 rounded-xl pl-4 pr-10 py-3.5 text-sm text-white focus:outline-none focus:border-electric-cyan/50 transition-colors cursor-pointer"
                >
                  <option value="All">All Areas of Practice</option>
                  {filters.areasOfPractice.map((area) => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
                <Filter className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>

              <div className="relative flex-1 sm:w-48">
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="w-full appearance-none bg-brand-950/50 border border-white/10 rounded-xl pl-4 pr-10 py-3.5 text-sm text-white focus:outline-none focus:border-electric-cyan/50 transition-colors cursor-pointer"
                >
                  <option value="All">All Languages</option>
                  {filters.languages.map((lang) => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
                <Filter className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {filteredProfessionals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfessionals.map((prof) => (
              <ProfCard key={prof.id} professional={prof} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white/5 border border-white/10 rounded-3xl">
            <h3 className="text-xl font-semibold text-white mb-2">No professionals found</h3>
            <p className="text-gray-400">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>
    </section>
  );
}
