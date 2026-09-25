import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import { aboutValues, aboutTopics } from '../data/aboutDemo';

import AboutHero from '../components/about/AboutHero';
import AboutWhy from '../components/about/AboutWhy';
import AboutQuote from '../components/about/AboutQuote';
import AboutMission from '../components/about/AboutMission';
import AboutCategories from '../components/about/AboutCategories';
import AboutValues from '../components/about/AboutValues';
import AboutJourney from '../components/about/AboutJourney';
import AboutCompanions from '../components/about/AboutCompanions';
import AboutPrivacy from '../components/about/AboutPrivacy';
import AboutProfSupport from '../components/about/AboutProfSupport';
import AboutTopics from '../components/about/AboutTopics';
import AboutPhilosophy from '../components/about/AboutPhilosophy';
import AboutFinalCTA from '../components/about/AboutFinalCTA';

export default function About() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-950 font-sans text-warm-white selection:bg-romantic-DEFAULT/30 selection:text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <AboutHero />
        <AboutWhy />
        <AboutQuote />
        <AboutMission />
        <AboutCategories />
        <AboutValues values={aboutValues} />
        <AboutJourney />
        <AboutCompanions />
        <AboutPrivacy />
        <AboutProfSupport />
        <AboutTopics topics={aboutTopics} />
        <AboutPhilosophy />
        <AboutFinalCTA />
      </motion.div>
    </div>
  );
}
