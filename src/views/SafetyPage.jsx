import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import { safetyPrinciples, safetyFaqs } from '../data/safetyDemo';

import SafetyHero from '../components/safety/SafetyHero';
import SafetyPrinciples from '../components/safety/SafetyPrinciples';
import SafetyAllowed from '../components/safety/SafetyAllowed';
import SafetyNotAllowed from '../components/safety/SafetyNotAllowed';
import SafetyPrivacy from '../components/safety/SafetyPrivacy';
import SafetyReporting from '../components/safety/SafetyReporting';
import SafetyBlocking from '../components/safety/SafetyBlocking';
import SafetyFlirty from '../components/safety/SafetyFlirty';
import SafetyProfSupport from '../components/safety/SafetyProfSupport';
import SafetyMentalHealth from '../components/safety/SafetyMentalHealth';
import SafetyCrisis from '../components/safety/SafetyCrisis';
import SafetyCallPreview from '../components/safety/SafetyCallPreview';
import SafetyFAQ from '../components/safety/SafetyFAQ';
import SafetyFinalCTA from '../components/safety/SafetyFinalCTA';

export default function SafetyPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleReadGuidelines = () => {
    const el = document.getElementById('guidelines');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleReport = () => {
    const el = document.getElementById('reporting');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brand-950 font-sans text-warm-white selection:bg-electric-cyan/30 selection:text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <SafetyHero 
          onReadGuidelines={handleReadGuidelines} 
          onReport={handleReport} 
        />
        
        <SafetyPrinciples principles={safetyPrinciples} />
        
        {/* Allowed & Not Allowed Side by Side on Desktop */}
        <div className="bg-brand-950">
           <SafetyAllowed />
           <SafetyNotAllowed />
        </div>

        <SafetyPrivacy />
        <SafetyReporting />
        <SafetyBlocking />
        <SafetyFlirty />
        
        <SafetyProfSupport />
        <SafetyMentalHealth />
        
        <SafetyCrisis />
        <SafetyCallPreview />
        
        <SafetyFAQ faqs={safetyFaqs} />
        <SafetyFinalCTA />
      </motion.div>
    </div>
  );
}
