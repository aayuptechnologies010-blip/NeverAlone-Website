import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Heart, Users, Briefcase, GraduationCap } from 'lucide-react';

const PricingCategories = () => {
  const categories = [
    { name: "Just Talk", icon: <MessageCircle size={20} />, color: "text-blue-500", bgHover: "hover:bg-blue-50", borderHover: "hover:border-blue-200", shadowHover: "hover:shadow-blue-500/20" },
    { name: "Relationship", icon: <Heart size={20} />, color: "text-pink-500", bgHover: "hover:bg-pink-50", borderHover: "hover:border-pink-200", shadowHover: "hover:shadow-pink-500/20" },
    { name: "Family & Personal", icon: <Users size={20} />, color: "text-purple-500", bgHover: "hover:bg-purple-50", borderHover: "hover:border-purple-200", shadowHover: "hover:shadow-purple-500/20" },
    { name: "Career & Work", icon: <Briefcase size={20} />, color: "text-amber-500", bgHover: "hover:bg-amber-50", borderHover: "hover:border-amber-200", shadowHover: "hover:shadow-amber-500/20" },
    { name: "College & Student Life", icon: <GraduationCap size={20} />, color: "text-emerald-500", bgHover: "hover:bg-emerald-50", borderHover: "hover:border-emerald-200", shadowHover: "hover:shadow-emerald-500/20" }
  ];

  return (
    <section className="py-10 bg-white border-b border-gray-200 text-center relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-3 sm:px-5 lg:px-8 relative z-10">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-gray-900 mb-1"
        >
          Talk about what's on your mind.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto"
        >
          Choose an eligible conversation category and find a companion who fits your style and availability.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6">
          {categories.map((cat, index) => (
            <motion.div 
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 200, damping: 20 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group flex items-center gap-4 px-6 py-4 rounded-2xl bg-white border border-gray-200 text-gray-700 font-bold transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl ${cat.bgHover} ${cat.borderHover} ${cat.shadowHover}`}
            >
              <div className={`p-2.5 rounded-xl bg-gray-50 group-hover:bg-white transition-colors duration-300 ${cat.color}`}>
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {cat.icon}
                </motion.div>
              </div>
              <span className="tracking-wide text-sm md:text-base">{cat.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-xs text-gray-500 font-medium inline-block px-6 py-2.5 rounded-full bg-gray-50 border border-gray-200"
        >
          Additional category-specific pricing may apply where configured.
        </motion.p>

      </div>
    </section>
  );
};

export default PricingCategories;
