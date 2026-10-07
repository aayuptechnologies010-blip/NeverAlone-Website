import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, ShieldCheck } from 'lucide-react';

const Companions = () => {
  const therapists = [
    {
      name: "Dr. Ananya Sharma",
      role: "Clinical Psychologist",
      experience: "8+ Years",
      specialties: "Anxiety • Stress • Relationships",
      languages: "Hindi • English",
      rating: "4.9",
      price: "₹499",
      image: "/images/therapist-ananya.jpg",
      id: "ananya"
    },
    {
      name: "Dr. Rahul Verma",
      role: "Counselling Psychologist",
      experience: "6+ Years",
      specialties: "Depression • Self-Esteem • Life Changes",
      languages: "Hindi • English",
      rating: "4.8",
      price: "₹499",
      image: "/images/therapist-rahul.jpg",
      id: "rahul"
    },
    {
      name: "Dr. Neha Singh",
      role: "Clinical Psychologist",
      experience: "7+ Years",
      specialties: "Anxiety • Women's Wellbeing • Stress",
      languages: "Hindi • English",
      rating: "4.9",
      price: "₹499",
      image: "/images/therapist-neha.jpg",
      id: "neha"
    },
    {
      name: "Dr. Arjun Mehta",
      role: "Counselling Psychologist",
      experience: "5+ Years",
      specialties: "Relationships • Burnout • Self-Esteem",
      languages: "Hindi • English",
      rating: "4.8",
      price: "₹499",
      image: "/images/therapist-arjun.jpg",
      id: "arjun"
    }
  ];

  return (
    <section id="therapists" className="py-14 sm:py-16 bg-[#fbfdfc] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-block px-3 py-1 rounded-full bg-[#00839a]/10 text-[#00839a] text-xs font-semibold uppercase tracking-wider mb-3">
            Our Therapists
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#083058] tracking-tight font-display mb-3">
            Meet People Who Are Here to Listen.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Find a therapist who understands your needs, preferences and goals.
          </p>
        </div>

        {/* 4 Therapist Cards with Photos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {therapists.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between group"
            >
              <div>
                {/* Photo with soft rounded frame */}
                <div className="flex items-center space-x-3.5 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#00839a]/20 shadow-sm shrink-0 bg-slate-100">
                    <img 
                      src={t.image} 
                      alt={t.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#083058] leading-snug">{t.name}</h3>
                    <p className="text-xs text-[#00839a] font-medium">{t.role}</p>
                    <div className="flex items-center space-x-1 mt-0.5 text-xs text-amber-500 font-semibold">
                      <Star size={13} className="fill-amber-400 text-amber-400" />
                      <span>{t.rating}</span>
                      <span className="text-slate-400 font-normal ml-1">({t.experience})</span>
                    </div>
                  </div>
                </div>

                {/* Specialties & Language */}
                <div className="space-y-2 py-3 border-y border-slate-100 text-xs text-slate-600">
                  <p>
                    <span className="font-semibold text-slate-700">Focus:</span> {t.specialties}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-700">Languages:</span> {t.languages}
                  </p>
                </div>

                {/* Pricing info */}
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="text-xs text-slate-500">Per Session</span>
                  <span className="text-base font-bold text-[#083058]">{t.price}</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-2 gap-2 mt-5 pt-3 border-t border-slate-100">
                <Link
                  to="/first-session"
                  className="py-2 px-3 text-center text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
                >
                  View Profile
                </Link>
                <Link
                  to="/first-session"
                  className="py-2 px-3 text-center text-xs font-bold text-white bg-[#083058] hover:bg-[#0c4a6e] rounded-lg transition-colors shadow-sm"
                >
                  Book Session
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Companions;
