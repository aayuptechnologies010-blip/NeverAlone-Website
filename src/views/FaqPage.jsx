import React, { useEffect } from 'react';
import FAQ from '../components/FAQ';
import WhyNeuravia from '../components/WhyNeuravia';
import FinalCTA from '../components/FinalCTA';
import EmergencySupport from '../components/EmergencySupport';

export default function FaqPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fbfdfc] font-sans text-slate-800 pt-20">
      <FAQ />
      <WhyNeuravia />
      <FinalCTA />
      <EmergencySupport />
    </div>
  );
}
