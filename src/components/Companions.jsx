import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle2, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Companions = () => {
  const companions = [
    {
      name: "Aisha",
      style: "Warm & Easygoing",
      languages: "Hindi • English",
      interests: ["Music", "Movies", "Travel"],
      rating: "4.9",
      available: true,
      image: "/avatar_aisha.jpg"
    },
    {
      name: "Riya",
      style: "Great Listener",
      languages: "Hindi • English",
      interests: ["Books", "Career", "Food"],
      rating: "5.0",
      available: true,
      image: "/avatar_riya.jpg"
    },
    {
      name: "Ananya",
      style: "Fun & Energetic",
      languages: "Hindi • English",
      interests: ["Music", "Fashion", "Vlogs"],
      rating: "4.8",
      available: false,
      image: "/avatar_ananya.jpg"
    }
  ];

  return (
    <section id="companions" className="py-20 relative bg-brand-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Featured Companions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            A glimpse of the wonderful people waiting to listen. Choose someone who matches your vibe.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companions.map((companion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-950/80 backdrop-blur-sm border border-white/10 rounded-[2rem] overflow-hidden group hover:border-pink-500/40 hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="relative">
                    <img src={companion.image} alt={companion.name} className="w-20 h-20 rounded-2xl object-cover transform group-hover:scale-110 transition-transform duration-500 shadow-lg" />
                    <div className="absolute -bottom-2 -right-2 bg-brand-950 rounded-full p-1">
                      <CheckCircle2 size={18} className="text-electric-cyan" />
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center space-x-1 text-yellow-400 mb-3 bg-yellow-400/10 px-2 py-1 rounded-lg">
                      <Star size={14} className="fill-current" />
                      <span className="text-sm font-bold">{companion.rating}</span>
                    </div>
                    {companion.available ? (
                      <span className="flex items-center px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20 font-semibold shadow-[0_0_10px_rgba(34,197,94,0.2)]">
                        <span className="relative flex h-2 w-2 mr-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Online
                      </span>
                    ) : (
                      <span className="flex items-center px-3 py-1 bg-white/5 text-gray-400 text-xs rounded-full border border-white/10 font-semibold">
                        <span className="h-2 w-2 rounded-full bg-gray-500 mr-2"></span>
                        Busy
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-0.5 group-hover:text-pink-300 transition-colors">{companion.name}</h3>
                <p className="text-romantic-DEFAULT text-xs font-medium mb-4">{companion.style}</p>

                <div className="space-y-2.5 mb-5">
                  <p className="text-xs text-gray-300"><span className="text-gray-500">Speaks:</span> {companion.languages}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {companion.interests.map(interest => (
                      <span key={interest} className="text-[10px] px-2 py-1 bg-white/5 rounded-md text-gray-400 border border-white/10">{interest}</span>
                    ))}
                  </div>
                </div>

                <button className="w-full py-2.5 rounded-xl text-sm text-white font-medium bg-pink-600 hover:bg-pink-500 transition-all flex items-center justify-center space-x-1.5">
                  <Phone size={16} />
                  <span>Talk With {companion.name}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/categories" className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group">
            <span className="text-lg">Not feeling the vibe? Explore everyone</span>
            <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Companions;
