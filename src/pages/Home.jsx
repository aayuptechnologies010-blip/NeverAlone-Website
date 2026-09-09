import React, { useEffect } from 'react';

// Import all homepage sections
import HeroSection from '../components/HeroSection';
import TrustStrip from '../components/TrustStrip';
import EmotionalIntro from '../components/EmotionalIntro';
import Categories from '../components/Categories';
import InteractiveQuestion from '../components/InteractiveQuestion';
import Companions from '../components/Companions';
import HowItWorks from '../components/HowItWorks';
import MidPageCTA from '../components/MidPageCTA';
import FlirtyModeSpotlight from '../components/FlirtyModeSpotlight';
import WhyNeverAlone from '../components/WhyNeverAlone';
import Pricing from '../components/Pricing';
import SafetyPreview from '../components/SafetyPreview';
import FinalCTA from '../components/FinalCTA';

const Home = () => {
  // Ensure we scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <HeroSection />
      <TrustStrip />
      <EmotionalIntro />
      <Categories />
      <InteractiveQuestion />
      <Companions />
      <HowItWorks />
      <MidPageCTA />
      <FlirtyModeSpotlight />
      <WhyNeverAlone />
      <Pricing />
      <SafetyPreview />
      <FinalCTA />
    </div>
  );
};

export default Home;
