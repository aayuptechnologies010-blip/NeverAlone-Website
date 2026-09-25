import React, { useEffect, useState, useMemo } from 'react';
import CompanionsHero from '../components/companions/CompanionsHero';
import CompanionsFilter from '../components/companions/CompanionsFilter';
import CompanionsList from '../components/companions/CompanionsList';
import CompanionsMidCTA from '../components/companions/CompanionsMidCTA';
import CompanionsSafety from '../components/companions/CompanionsSafety';
import { companions as allCompanions } from '../data/companionsData';

const CompanionsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState([]);
  const [availableNowOnly, setAvailableNowOnly] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredCompanions = useMemo(() => {
    return allCompanions.filter((comp) => {
      // 1. Search Query filter (matches name, bio, interests, or style)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = comp.name?.toLowerCase().includes(query);
        const matchesBio = comp.shortBio?.toLowerCase().includes(query) || comp.fullBio?.toLowerCase().includes(query);
        const matchesStyle = comp.style?.toLowerCase().includes(query);
        const matchesInterests = comp.interests?.some(i => i.toLowerCase().includes(query));
        const matchesCategories = comp.categories?.some(c => c.toLowerCase().includes(query));

        if (!matchesName && !matchesBio && !matchesStyle && !matchesInterests && !matchesCategories) {
          return false;
        }
      }

      // 2. Available Now filter
      if (availableNowOnly) {
        const isOnline = comp.availability === 'Available now' || comp.availability?.toLowerCase().includes('now');
        if (!isOnline) return false;
      }

      // 3. Category & Language & Style filter chips
      if (activeFilters.length > 0) {
        // Must match at least one selected category if category filters are chosen, etc.
        const matchesAnyActive = activeFilters.some((filter) => {
          const inCategories = comp.categories?.includes(filter);
          const inLanguages = comp.languages?.some(l => l.toLowerCase().includes(filter.toLowerCase()));
          const inStyle = comp.style?.toLowerCase().includes(filter.toLowerCase());
          return inCategories || inLanguages || inStyle;
        });

        if (!matchesAnyActive) return false;
      }

      return true;
    });
  }, [searchQuery, activeFilters, availableNowOnly]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveFilters([]);
    setAvailableNowOnly(false);
  };

  return (
    <div className="bg-brand-950 text-white min-h-screen">
      <CompanionsHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-1/4 shrink-0">
            <CompanionsFilter 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              activeFilters={activeFilters}
              setActiveFilters={setActiveFilters}
              availableNowOnly={availableNowOnly}
              setAvailableNowOnly={setAvailableNowOnly}
            />
          </div>
          {/* Main List */}
          <div className="w-full lg:w-3/4">
            <CompanionsList 
              companions={filteredCompanions} 
              onResetFilters={handleResetFilters}
            />
            <CompanionsMidCTA />
          </div>
        </div>
      </div>
      <CompanionsSafety />
    </div>
  );
};

export default CompanionsPage;
