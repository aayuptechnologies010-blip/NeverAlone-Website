import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  User, 
  Users, 
  HeartHandshake, 
  Sparkles, 
  BrainCircuit, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';

const ClinicalSpecialtiesGrid = () => {
  const services = [
    {
      title: "Individual Therapy",
      desc: "One-to-one confidential sessions focused on your personal emotional wellbeing, goals and growth.",
      icon: User,
    },
    {
      title: "Couples Therapy",
      desc: "Build healthier communication patterns, rebuild trust, deepen understanding and resolve conflict.",
      icon: Users,
    },
    {
      title: "Family Therapy",
      desc: "Improve communication, heal relational strain and foster mutual support within your family circle.",
      icon: HeartHandshake,
    },
    {
      title: "Teen Support",
      desc: "A safe, supportive environment for teenagers facing academic pressure, identity and emotional challenges.",
      icon: Sparkles,
    },
    {
      title: "Stress Management",
      desc: "Learn practical, evidence-based coping tools to manage chronic stress and calm overwhelming thoughts.",
      icon: BrainCircuit,
    },
    {
      title: "Self-Esteem & Confidence",
      desc: "Understand negative self-talk, overcome imposter feelings and build greater inner confidence.",
      icon: ShieldCheck,
    }
  ];

  return (
    <section className="py-14 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-block px-3 py-1 rounded-full bg-[#083058]/5 text-[#083058] text-xs font-semibold uppercase tracking-wider mb-3">
            Therapy Services
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#083058] tracking-tight font-display mb-3">
            Therapy That Fits Your Needs
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Every person is different. Your support should be too.
          </p>
        </div>

        {/* 6 Therapy Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-[#fbfdfc] border border-slate-100 rounded-2xl p-6 hover:shadow-md hover:border-[#00839a]/30 transition-all text-left flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#00839a]/10 text-[#00839a] flex items-center justify-center mb-4">
                  <item.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#083058] mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200/50">
                <Link
                  to="/first-session"
                  className="text-xs font-semibold text-[#00839a] hover:text-[#083058] inline-flex items-center space-x-1 transition-colors"
                >
                  <span>Book for this service</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Link
            to="/categories"
            className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-[#083058] bg-white border border-slate-200 hover:bg-slate-50 shadow-sm transition-all"
          >
            <span>View All Therapies →</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ClinicalSpecialtiesGrid;
