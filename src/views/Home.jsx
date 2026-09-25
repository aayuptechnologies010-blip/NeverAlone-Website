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
import FirstSessionOffer from '../components/FirstSessionOffer';
import Testimonials from '../components/Testimonials';
import WhyNeverAlone from '../components/WhyNeverAlone';
import Pricing from '../components/Pricing';
import SafetyPreview from '../components/SafetyPreview';
import FinalCTA from '../components/FinalCTA';

import GeoCoverageSection from '../components/GeoCoverageSection';

const Home = () => {
  // Ensure we scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-950 text-white min-h-screen">
      <HeroSection />
      <TrustStrip />
      <FirstSessionOffer />
      <EmotionalIntro />
      <Categories />
      <InteractiveQuestion />
      <Companions />
      <HowItWorks />
      <MidPageCTA />
      <WhyNeverAlone />
      <Testimonials />
      <Pricing />
      <GeoCoverageSection />
      <SafetyPreview />
      <FinalCTA />
    </div>
  );
};

export default Home;
