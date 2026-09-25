import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { professionalsDemo, professionalFilters, professionalFaqs } from '../data/professionalDemo';

import ProfHero from '../components/professional/ProfHero';
import ProfDifference from '../components/professional/ProfDifference';
import ProfWhenToUse from '../components/professional/ProfWhenToUse';
import ProfList from '../components/professional/ProfList';
import ProfBoundaries from '../components/professional/ProfBoundaries';
import ProfCrisis from '../components/professional/ProfCrisis';
import ProfFAQ from '../components/professional/ProfFAQ';
import ProfFinalCTA from '../components/professional/ProfFinalCTA';

export default function ProfessionalSupportPage() {
  const exploreRef = useRef(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleExplore = () => {
    if (exploreRef.current) {
      exploreRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-950 font-sans text-warm-white selection:bg-electric-cyan/30 selection:text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <ProfHero onExplore={handleExplore} />
        <ProfDifference onExplore={handleExplore} />
        <ProfWhenToUse />
        
        <div ref={exploreRef}>
          <ProfList professionals={professionalsDemo} filters={professionalFilters} />
        </div>
        
        <ProfBoundaries />
        <ProfCrisis />
        <ProfFAQ faqs={professionalFaqs} />
        <ProfFinalCTA onExplore={handleExplore} />
      </motion.div>
    </div>
  );
}
