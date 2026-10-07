import React, { useEffect } from 'react';

// Import all sections in blueprint sequence
import HeroSection from '../components/HeroSection';
import EmotionalIntro from '../components/EmotionalIntro';
import Categories from '../components/Categories';
import ClinicalSpecialtiesGrid from '../components/ClinicalSpecialtiesGrid';
import Companions from '../components/Companions';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import WhyNeuravia from '../components/WhyNeuravia';
import FirstSessionOffer from '../components/FirstSessionOffer';
import AssessmentQuizModal from '../components/AssessmentQuizModal';
import Testimonials from '../components/Testimonials';
import SoundTherapySpotlight from '../components/SoundTherapySpotlight';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import EmergencySupport from '../components/EmergencySupport';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fbfdfc] text-slate-800 min-h-screen">
      {/* 4. Homepage Hero */}
      <HeroSection />

      {/* 5. Intro — You Deserve to Feel Better */}
      <EmotionalIntro />

      {/* 6. What Are You Going Through? */}
      <Categories />

      {/* 7. Therapy Services */}
      <ClinicalSpecialtiesGrid />

      {/* 8. Therapist Section */}
      <Companions />

      {/* 9. How Neuravia Works */}
      <HowItWorks />

      {/* 10. Pricing — Main Conversion Section */}
      <Pricing />

      {/* 11. Why Neuravia? */}
      <WhyNeuravia />

      {/* 12. Emotional Section — Your Mental Wellbeing Matters */}
      <FirstSessionOffer />

      {/* 13. Free Self-Assessment */}
      <AssessmentQuizModal />

      {/* 14. Testimonials — Real People. Real Journeys. */}
      <Testimonials />

      {/* 15. Resources / Blog — Learn. Understand. Grow. */}
      <SoundTherapySpotlight />

      {/* 16. FAQ */}
      <FAQ />

      {/* 17. Final CTA */}
      <FinalCTA />

      {/* 18. Emergency Support */}
      <EmergencySupport />
    </div>
  );
};

export default Home;
