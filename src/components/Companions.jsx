import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import TherapistProfileModal from './TherapistProfileModal';
import { getApiUrl, resolveImageUrl } from '../config/api';

const defaultTherapists = [
  {
    name: "Dr. Priya Sharma",
    role: "Clinical Psychologist / Therapist",
    title: "Clinical Psychologist / Therapist",
    experience: "6+ Years",
    qualification: "M.A. Psychology, M.Phil Clinical Psychology",
    specialization: "Anxiety, Stress & Relationship Therapy",
    specialties: "Anxiety • Stress • Relationships",
    languages: "Hindi • English",
    sessionMode: "Online / In-Person / Both",
    about: "Dedicated clinical psychologist with over 6 years of experience helping individuals, teens, and couples navigate anxiety, stress, emotional blockages, and interpersonal conflicts.",
    treats: ["Anxiety", "Stress", "Depression", "Relationship Issues"],
    ageGroups: ["Teenagers", "Adults", "Couples"],
    therapyMethods: ["CBT", "Mindfulness", "Counseling"],
    sessionDuration: "45–60 Minutes",
    availability: "Mon–Sat, 10 AM–8 PM",
    rating: "4.8",
    totalSessions: "500+ Sessions Completed",
    price: "₹499",
    startingPrice: "₹499/session",
    pricePerSession: 499,
    image: "https://images.unsplash.com/photo-1594824813637-8e6f14ddbd66?auto=format&fit=crop&w=600&q=80",
    id: "priya",
    isVerified: true,
    verifiedBadge: "Neuravia Verified"
  },
  {
    name: "Dr. Ananya Sharma",
    role: "Senior Clinical Psychologist (Ph.D.)",
    title: "Senior Clinical Psychologist (Ph.D.)",
    experience: "8+ Years",
    qualification: "Ph.D. Clinical Psychology, NIMHANS Certified",
    specialization: "Trauma, Panic & Emotional Regulation",
    specialties: "Trauma • Panic • Anxiety",
    languages: "Hindi • English",
    sessionMode: "Online / In-Person / Both",
    about: "Specializes in trauma-informed care and anxiety interventions. Warm, evidence-based approach designed to help you regain emotional stability.",
    treats: ["Anxiety", "Panic Attacks", "Trauma Recovery", "Self-Worth"],
    ageGroups: ["Adults", "Couples"],
    therapyMethods: ["CBT", "DBT", "Mindfulness"],
    sessionDuration: "50–60 Minutes",
    availability: "Mon–Fri, 11 AM–7 PM",
    rating: "4.9",
    totalSessions: "1,400+ Sessions Completed",
    price: "₹499",
    startingPrice: "₹499/session",
    pricePerSession: 499,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
    id: "ananya",
    isVerified: true,
    verifiedBadge: "Neuravia Verified"
  },
  {
    name: "Dr. Rahul Verma",
    role: "Counselling Psychologist",
    title: "Counselling Psychologist",
    experience: "6+ Years",
    qualification: "M.Sc. Counselling Psychology",
    specialization: "Work Burnout, Career Stress & Depression",
    specialties: "Depression • Burnout • Career Changes",
    languages: "Hindi • English",
    sessionMode: "Online / Both",
    about: "Provides a safe, non-judgmental space to unpack professional burnout, imposter syndrome, life crossroads, and mild to moderate depression.",
    treats: ["Depression", "Work Burnout", "Career Transitions", "Self-Esteem"],
    ageGroups: ["Young Adults", "Professionals"],
    therapyMethods: ["Person-Centered", "SFBT", "CBT"],
    sessionDuration: "45–60 Minutes",
    availability: "Mon–Sat, 12 PM–9 PM",
    rating: "4.8",
    totalSessions: "920+ Sessions Completed",
    price: "₹499",
    startingPrice: "₹499/session",
    pricePerSession: 499,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
    id: "rahul",
    isVerified: true,
    verifiedBadge: "Neuravia Verified"
  },
  {
    name: "Dr. Neha Singh",
    role: "Consultant Clinical Psychologist",
    title: "Consultant Clinical Psychologist",
    experience: "7+ Years",
    qualification: "M.Phil Clinical Psychology, RCI Registered",
    specialization: "Women's Wellbeing, Postpartum & OCD",
    specialties: "Women's Wellbeing • Stress • OCD",
    languages: "Hindi • English",
    sessionMode: "Online / In-Person / Both",
    about: "Deeply committed to maternal mental health, anxiety, and obsessive thoughts. Tailors practical coping exercises to each client's daily rhythm.",
    treats: ["Women's Wellbeing", "Postpartum Blues", "OCD", "Social Anxiety"],
    ageGroups: ["Teenagers", "Adults"],
    therapyMethods: ["ERP", "CBT", "Compassion Focused"],
    sessionDuration: "50–60 Minutes",
    availability: "Tue–Sun, 10 AM–6 PM",
    rating: "4.9",
    totalSessions: "1,100+ Sessions Completed",
    price: "₹499",
    startingPrice: "₹499/session",
    pricePerSession: 499,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    id: "neha",
    isVerified: true,
    verifiedBadge: "Neuravia Verified"
  }
];

const Companions = () => {
  const [therapists, setTherapists] = useState(defaultTherapists);
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTherapists = async () => {
      try {
        const apiUrl = getApiUrl();
        const res = await fetch(`${apiUrl}/therapists`);
        const json = await res.json();
        if (json.success && json.data?.length > 0) {
          const defaultImgs = [
            "https://images.unsplash.com/photo-1594824813637-8e6f14ddbd66?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
          ];
          setTherapists(json.data.map((t, idx) => {
            const img = resolveImageUrl(t.profilePhoto, defaultImgs[idx % defaultImgs.length]);
            return {
              ...t,
              name: t.name,
              role: t.title,
              title: t.title,
              experience: t.experience || '6+ Years',
              specialties: (t.specialties || t.treats || []).slice(0, 3).join(' • ') || 'Stress • Anxiety',
              languages: (t.languages || []).join(' • ') || 'Hindi • English',
              rating: t.rating ? String(t.rating) : '4.8',
              price: `₹${t.pricePerSession || 499}`,
              startingPrice: t.startingPrice || `₹${t.pricePerSession || 499}/session`,
              image: img || defaultImgs[idx % defaultImgs.length],
              id: t._id
            };
          }));
        }
      } catch (e) {
        // Fallback
      }
    };
    fetchTherapists();
  }, []);

  const handleOpenProfile = (t) => {
    setSelectedTherapist(t);
    setIsModalOpen(true);
  };

  const handleBookSession = (t) => {
    const tId = t._id || t.id;
    const tName = encodeURIComponent(t.name);
    navigate(`/book?therapistId=${tId}&therapistName=${tName}`);
  };

  return (
    <section id="therapists" className="py-8 sm:py-10 bg-[#fbfdfc] border-b border-slate-100">
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
            Explore verified therapist profiles, ask questions freely, or book your personalized 1-on-1 session.
          </p>
        </div>

        {/* 4 Therapist Cards with Photos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {therapists.map((t, index) => (
            <motion.div
              key={t.id || t._id || index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between group"
            >
              <div>
                {/* Photo with soft rounded frame */}
                <div className="flex items-center space-x-3.5 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#00839a]/20 shadow-sm shrink-0 bg-slate-100 cursor-pointer" onClick={() => handleOpenProfile(t)}>
                    <img 
                      src={t.image} 
                      alt={t.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                  <div>
                    <h3 
                      onClick={() => handleOpenProfile(t)}
                      className="text-base font-bold text-[#083058] leading-snug hover:text-[#00839a] cursor-pointer transition-colors"
                    >
                      {t.name}
                    </h3>
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

              {/* Action buttons: View Profile & Book Session */}
              <div className="grid grid-cols-2 gap-2 mt-5 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => handleOpenProfile(t)}
                  className="py-2 px-3 text-center text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200 cursor-pointer"
                >
                  View Profile
                </button>
                <button
                  type="button"
                  onClick={() => handleBookSession(t)}
                  className="py-2 px-3 text-center text-xs font-bold text-white bg-[#083058] hover:bg-[#0c4a6e] rounded-lg transition-colors shadow-sm cursor-pointer"
                >
                  Book Session
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Complete Therapist Profile Modal (With 18 details & Enquiry Form) */}
      <TherapistProfileModal
        therapist={selectedTherapist}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Companions;
