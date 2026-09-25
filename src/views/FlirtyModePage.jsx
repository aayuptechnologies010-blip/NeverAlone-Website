import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { flirtyVibes, flirtyCompanions, flirtyFaqs } from '../data/flirtyDemo';

import FlirtyConsentGate from '../components/flirty/FlirtyConsentGate';
import FlirtyHero from '../components/flirty/FlirtyHero';
import FlirtyVibeSelector from '../components/flirty/FlirtyVibeSelector';
import FlirtyCompanions from '../components/flirty/FlirtyCompanions';
import FlirtyWhatItIs from '../components/flirty/FlirtyWhatItIs';
import FlirtyBoundaries from '../components/flirty/FlirtyBoundaries';
import FlirtyConsentMatters from '../components/flirty/FlirtyConsentMatters';
import FlirtyHowItWorks from '../components/flirty/FlirtyHowItWorks';
import FlirtyCallPreview from '../components/flirty/FlirtyCallPreview';
import FlirtySafetyReporting from '../components/flirty/FlirtySafetyReporting';
import FlirtyFAQ from '../components/flirty/FlirtyFAQ';
import FlirtyFinalCTA from '../components/flirty/FlirtyFinalCTA';

export default function FlirtyModePage() {
  const [hasConsented, setHasConsented] = useState(false);
  const [selectedVibe, setSelectedVibe] = useState(null);
  
  const vibeSectionRef = useRef(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleConsent = () => {
    setHasConsented(true);
    window.scrollTo(0, 0);
  };

  const handleScrollToVibe = () => {
    if (vibeSectionRef.current) {
      vibeSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-950 font-sans text-warm-white selection:bg-romantic-DEFAULT selection:text-white">
      <AnimatePresence mode="wait">
        {!hasConsented ? (
          <FlirtyConsentGate key="consent" onConsent={handleConsent} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <FlirtyHero onScrollToVibe={handleScrollToVibe} />
            
            <div ref={vibeSectionRef}>
              <FlirtyVibeSelector
                vibes={flirtyVibes}
                selectedVibe={selectedVibe}
                onSelectVibe={setSelectedVibe}
              />
              <FlirtyCompanions
                companions={flirtyCompanions}
                selectedVibe={selectedVibe}
              />
            </div>
            
            <FlirtyWhatItIs />
            <FlirtyBoundaries />
            <FlirtyConsentMatters />
            <FlirtyHowItWorks />
            <FlirtyCallPreview />
            <FlirtySafetyReporting />
            <FlirtyFAQ faqs={flirtyFaqs} />
            <FlirtyFinalCTA onScrollToVibe={handleScrollToVibe} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
