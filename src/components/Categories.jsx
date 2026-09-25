import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle, Heart, Users, Briefcase, GraduationCap, Sparkles, Stethoscope, ArrowRight } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "Just Talk",
      description: "No agenda. No pressure. Just talk.",
      icon: MessageCircle,
      gradient: "from-blue-500 to-cyan-400",
      isProfessional: false
    },
    {
      id: 2,
      title: "Relationship Advice",
      description: "Love, confusion, breakups or mixed signals.",
      icon: Heart,
      gradient: "from-romantic-DEFAULT to-romantic-pink",
      isProfessional: false
    },
    {
      id: 3,
      title: "Family & Personal",
      description: "Some things are easier to say out loud.",
      icon: Users,
      gradient: "from-orange-500 to-amber-400",
      isProfessional: false
    },
    {
      id: 4,
      title: "Career & Work",
      description: "When your next move isn't clear.",
      icon: Briefcase,
      gradient: "from-emerald-500 to-teal-400",
      isProfessional: false
    },
    {
      id: 5,
      title: "College & Student Life",
      description: "Studies, friendships, pressure & plans.",
      icon: GraduationCap,
      gradient: "from-dream-DEFAULT to-dream-purple",
      isProfessional: false
    },
    {
      id: 6,
      title: "Mindfulness & Healing",
      description: "Anxiety relief, emotional balance & safe listening.",
      icon: Sparkles,
      gradient: "from-cyan-500 to-blue-400",
      isProfessional: false
    },
  ];

  return (
    <section className="py-10 relative bg-brand-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-white mb-3"
          >
            What do you feel like talking about?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-gray-400"
          >
            No explanation needed. Just choose what feels right today.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden bg-brand-900 border border-white/8 hover:border-pink-500/30 hover:shadow-xl hover:shadow-pink-500/10 hover:-translate-y-1 transition-all duration-300 ${category.isProfessional ? 'lg:col-span-3 lg:w-1/3 lg:mx-auto' : ''}`}
            >
              {/* Hover glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
              
              <div className={`relative h-full rounded-[23px] p-6 flex flex-col transition-all duration-300 z-10`}>
                
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${category.gradient} shadow-sm transform group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon size={24} className="text-white" />
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-sm text-gray-400 mb-6 flex-grow">
                  {category.description}
                </p>

                <Link 
                  to="/categories" 
                  className="flex items-center text-sm font-semibold text-gray-400 group-hover:text-pink-400 transition-colors mt-auto"
                >
                  <span className="mr-2">Find My Person</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
