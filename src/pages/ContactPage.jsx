import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import SupportHero from '../components/support/SupportHero';
import SupportCategoryCards from '../components/support/SupportCategoryCards';
import SupportForm from '../components/support/SupportForm';
import SupportSafetyShortcut from '../components/support/SupportSafetyShortcut';
import SupportQuickHelp from '../components/support/SupportQuickHelp';
import SupportFaq from '../components/support/SupportFaq';
import SupportProfShortcut from '../components/support/SupportProfShortcut';
import SupportFinalCTA from '../components/support/SupportFinalCTA';

export default function ContactPage() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Parse query params for default category
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get('category');
    
    if (categoryParam) {
      setSelectedCategory(categoryParam);
      // Optional: delay scroll slightly to ensure page is rendered
      setTimeout(() => {
        scrollToForm();
      }, 500);
    }
  }, [location]);

  const scrollToForm = () => {
    const formSection = document.getElementById('support-form-section');
    if (formSection) {
      const yOffset = -80; // Offset for sticky header if any
      const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToCategories = () => {
    const catSection = document.getElementById('support-categories');
    if (catSection) {
      const yOffset = -80;
      const y = catSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    scrollToForm();
  };

  return (
    <div className="min-h-screen bg-brand-950 font-sans text-warm-white selection:bg-electric-cyan/30 selection:text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <SupportHero onGetSupport={scrollToCategories} />
        
        <SupportCategoryCards 
          selectedCategory={selectedCategory} 
          onSelectCategory={handleCategorySelect} 
        />

        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-12 pb-24 relative z-10">
          
          {/* Main Form Area (Left side on desktop) */}
          <div className="flex-1 w-full lg:max-w-3xl">
            <SupportForm category={selectedCategory} />
          </div>
          
          {/* Sidebar / Quick Help (Right side on desktop) */}
          <div className="w-full lg:w-80 flex-shrink-0 pt-12 lg:pt-12">
            <SupportQuickHelp />
            <SupportFaq />
            <SupportProfShortcut />
          </div>
          
        </div>

        <SupportSafetyShortcut />
        
        <SupportFinalCTA onGetSupport={scrollToCategories} />
        
      </motion.div>
    </div>
  );
}
