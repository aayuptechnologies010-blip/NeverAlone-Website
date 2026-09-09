import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import { faqCategories, faqs } from '../data/faqData';

import FaqHero from '../components/faq/FaqHero';
import FaqCategories from '../components/faq/FaqCategories';
import FaqList from '../components/faq/FaqList';
import FaqQuickAnswers from '../components/faq/FaqQuickAnswers';
import FaqSupportCTA from '../components/faq/FaqSupportCTA';

export default function FaqPage() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].id);

  // Handle URL hash deep linking on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    const hash = location.hash.replace('#', '');
    if (hash) {
      const foundCat = faqCategories.find(c => c.id === hash);
      if (foundCat) {
        setActiveCategory(foundCat.id);
        // If there's a hash, we clear search so category takes precedence
        setSearchQuery('');
      } else {
        // If hash is not a category, it might be a popular search keyword (e.g. #pricing)
        setSearchQuery(hash.replace('-', ' '));
      }
    }
  }, [location.hash]);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setSearchQuery(''); // clear search when manually switching categories
  };

  const handleChipClick = (term) => {
    setSearchQuery(term);
  };

  // Filter FAQs based on search query or active category
  const displayedFaqs = useMemo(() => {
    if (searchQuery.trim().length > 0) {
      const lowerQuery = searchQuery.toLowerCase();
      return faqs.filter(faq => 
        faq.question.toLowerCase().includes(lowerQuery) ||
        faq.answer.toLowerCase().includes(lowerQuery) ||
        faq.keywords.toLowerCase().includes(lowerQuery) ||
        faq.category.toLowerCase().includes(lowerQuery)
      );
    } else {
      return faqs.filter(faq => faq.category === activeCategory);
    }
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-brand-950 font-sans text-warm-white selection:bg-electric-cyan/30 selection:text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <FaqHero 
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onChipClick={handleChipClick}
        />

        <FaqQuickAnswers />

        <section className="py-20 md:py-32 relative bg-brand-950">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
            
            {/* Show category sidebar only if not actively searching */}
            {searchQuery.trim().length === 0 ? (
              <FaqCategories 
                categories={faqCategories}
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
              />
            ) : (
              <div className="hidden md:block w-64 flex-shrink-0" /> // spacer
            )}

            <div className="flex-1 w-full">
              <FaqList 
                faqs={displayedFaqs}
                isSearching={searchQuery.trim().length > 0}
                onClearSearch={() => setSearchQuery('')}
              />
            </div>
            
          </div>
        </section>

        <FaqSupportCTA />
        
      </motion.div>
    </div>
  );
}
