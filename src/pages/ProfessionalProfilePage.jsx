import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { professionalsDemo } from '../data/professionalDemo';

import ProfProfileTop from '../components/professional/ProfProfileTop';
import ProfAbout from '../components/professional/ProfAbout';
import ProfCredentials from '../components/professional/ProfCredentials';
import ProfSessionDetails from '../components/professional/ProfSessionDetails';
import ProfAvailability from '../components/professional/ProfAvailability';

export default function ProfessionalProfilePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const professional = professionalsDemo.find(p => p.id === id);

  if (!professional) {
    return (
      <div className="min-h-screen bg-brand-950 flex flex-col items-center justify-center text-white">
        <h2 className="text-2xl font-bold mb-4">Professional not found</h2>
        <button
          onClick={() => navigate('/professional-support')}
          className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          Back to Professionals
        </button>
      </div>
    );
  }

  const handleBook = () => {
    // Route to booking flow with serviceType flag
    navigate(`/book?companion=${professional.id}&serviceType=Professional+Support`);
  };

  return (
    <div className="min-h-screen bg-brand-950 font-sans text-warm-white selection:bg-electric-cyan/30 selection:text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <ProfProfileTop professional={professional} onBook={handleBook} />
        <ProfAbout professional={professional} />
        <ProfCredentials professional={professional} />
        <ProfSessionDetails professional={professional} />
        <ProfAvailability professional={professional} onBook={handleBook} />
      </motion.div>
    </div>
  );
}
