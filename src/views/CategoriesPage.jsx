import React, { useEffect } from 'react';
import ExploreHero from '../components/explore/ExploreHero';
import ExploreMoodSelector from '../components/explore/ExploreMoodSelector';
import ExploreComparison from '../components/explore/ExploreComparison';
import ExploreMatchPreview from '../components/explore/ExploreMatchPreview';
import ExploreSafety from '../components/explore/ExploreSafety';
import ExploreFinalCTA from '../components/explore/ExploreFinalCTA';

const CategoriesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-950 text-white min-h-screen">
      <ExploreHero />
      <ExploreMoodSelector />
      <ExploreComparison />
      <ExploreMatchPreview />
      <ExploreSafety />
      <ExploreFinalCTA />
    </div>
  );
};

export default CategoriesPage;
