import React, { useState, useEffect } from 'react';
import PricingHero from '../components/pricing/PricingHero';
import PricingToggle from '../components/pricing/PricingToggle';
import PricingCards from '../components/pricing/PricingCards';
import PricingDailyMeaning from '../components/pricing/PricingDailyMeaning';
import PricingComparison from '../components/pricing/PricingComparison';
import PricingCategories from '../components/pricing/PricingCategories';
import PricingRecommendation from '../components/pricing/PricingRecommendation';
import PricingTransparency from '../components/pricing/PricingTransparency';
import PricingFAQ from '../components/pricing/PricingFAQ';
import PricingFinalCTA from '../components/pricing/PricingFinalCTA';

const PricingPage = () => {
  const [selectedDuration, setSelectedDuration] = useState('30 Days');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-950 text-white min-h-screen">
      <PricingHero />
      <PricingToggle selected={selectedDuration} onSelect={setSelectedDuration} />
      <PricingCards selectedDuration={selectedDuration} />
      <PricingDailyMeaning />
      <PricingComparison />
      <PricingCategories />
      <PricingRecommendation />
      <PricingTransparency />
      <PricingFAQ />
      <PricingFinalCTA />
    </div>
  );
};

export default PricingPage;
