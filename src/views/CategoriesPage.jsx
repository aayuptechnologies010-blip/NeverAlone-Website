import React, { useEffect } from 'react';
import Categories from '../components/Categories';
import ClinicalSpecialtiesGrid from '../components/ClinicalSpecialtiesGrid';
import Companions from '../components/Companions';
import HowItWorks from '../components/HowItWorks';
import AssessmentQuizModal from '../components/AssessmentQuizModal';
import FinalCTA from '../components/FinalCTA';
import EmergencySupport from '../components/EmergencySupport';

const CategoriesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fbfdfc] text-slate-800 min-h-screen pt-20">
      <Categories />
      <ClinicalSpecialtiesGrid />
      <Companions />
      <HowItWorks />
      <AssessmentQuizModal />
      <FinalCTA />
      <EmergencySupport />
    </div>
  );
};

export default CategoriesPage;
