import React, { useEffect } from 'react';
import CompanionsHero from '../components/companions/CompanionsHero';
import CompanionsFilter from '../components/companions/CompanionsFilter';
import CompanionsList from '../components/companions/CompanionsList';
import CompanionsMidCTA from '../components/companions/CompanionsMidCTA';
import CompanionsSafety from '../components/companions/CompanionsSafety';

const CompanionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-950 text-white min-h-screen">
      <CompanionsHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-1/4 shrink-0">
            <CompanionsFilter />
          </div>
          {/* Main List */}
          <div className="w-full lg:w-3/4">
            <CompanionsList />
            <CompanionsMidCTA />
          </div>
        </div>
      </div>
      <CompanionsSafety />
    </div>
  );
};

export default CompanionsPage;
