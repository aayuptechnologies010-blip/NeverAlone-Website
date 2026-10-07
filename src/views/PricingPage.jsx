import React, { useEffect } from 'react';
import Pricing from '../components/Pricing';
import WhyNeuravia from '../components/WhyNeuravia';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import EmergencySupport from '../components/EmergencySupport';

const PricingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fbfdfc] text-slate-800 min-h-screen pt-16">
      <div className="pt-8">
        <Pricing />
        <WhyNeuravia />
        <FAQ />
        <FinalCTA />
        <EmergencySupport />
      </div>
    </div>
  );
};

export default PricingPage;
