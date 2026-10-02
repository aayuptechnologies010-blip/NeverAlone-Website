import React, { useEffect } from 'react';

// Import all homepage sections
import HeroSection from '../components/HeroSection';
import TrustStrip from '../components/TrustStrip';
import EmotionalIntro from '../components/EmotionalIntro';
import Categories from '../components/Categories';
import InteractiveQuestion from '../components/InteractiveQuestion';
import Companions from '../components/Companions';
import SoundTherapySpotlight from '../components/SoundTherapySpotlight';
import ClinicalSpecialtiesGrid from '../components/ClinicalSpecialtiesGrid';
import AssessmentQuizModal from '../components/AssessmentQuizModal';
import HowItWorks from '../components/HowItWorks';
import MidPageCTA from '../components/MidPageCTA';
import FirstSessionOffer from '../components/FirstSessionOffer';
import Testimonials from '../components/Testimonials';
import WhyNeuravia from '../components/WhyNeuravia';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
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
      <ClinicalSpecialtiesGrid />
      <SoundTherapySpotlight />
      <AssessmentQuizModal />
      <EmotionalIntro />
      <Categories />
      <InteractiveQuestion />
      <Companions />
      <HowItWorks />
      <MidPageCTA />
      <WhyNeuravia />
      <Testimonials />
      <Pricing />
      <FAQ />
      <GeoCoverageSection />
      <SafetyPreview />
      <FinalCTA />
    </div>
  );
};

export default Home;
