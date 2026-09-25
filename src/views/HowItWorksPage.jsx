import React, { useEffect } from 'react';
import HowHero from '../components/how/HowHero';
import HowJourney from '../components/how/HowJourney';
import HowPlans from '../components/how/HowPlans';
import HowExtraTime from '../components/how/HowExtraTime';
import HowFeedback from '../components/how/HowFeedback';
import HowPrivacy from '../components/how/HowPrivacy';
import HowFAQ from '../components/how/HowFAQ';
import HowFinalCTA from '../components/how/HowFinalCTA';

const HowItWorksPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-950 text-white min-h-screen">
      <HowHero />
      <HowJourney />
      <HowPlans />
      <HowExtraTime />
      <HowFeedback />
      <HowPrivacy />
      <HowFAQ />
      <HowFinalCTA />
    </div>
  );
};

export default HowItWorksPage;
