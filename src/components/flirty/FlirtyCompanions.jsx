import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Sparkles, Languages } from 'lucide-react';

export default function FlirtyCompanions({ companions, selectedVibe }) {
  const navigate = useNavigate();

  // Filter companions by vibe
  const filteredCompanions = selectedVibe
    ? companions.filter((c) => c.vibeMatches.includes(selectedVibe))
    : [];

  const handleChoose = (companionId) => {
    // Navigate to booking with Flirty Mode pre-selected
    navigate(`/book?companion=${companionId}&category=Flirty+Mode`);
  };

  return (
    <section className="pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatePresence mode="wait">
          {selectedVibe && (
            <motion.div
              key="results-header"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center mb-12"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-romantic-pink mb-2">
                Sounds like you might vibe with...
              </h3>
              <p className="text-sm text-gray-400">
                People you might vibe with based on your energy.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCompanions.map((companion, index) => (
              <motion.div
                key={companion.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group rounded-3xl bg-white/5 border border-romantic-DEFAULT/20 overflow-hidden hover:border-romantic-DEFAULT/50 transition-all hover:bg-white/10"
              >
                {/* Profile Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={companion.image}
                    alt={companion.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/20 to-transparent" />
                  
                  {/* Flirty Badge */}
                  <div className="absolute top-4 left-4 bg-brand-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-romantic-DEFAULT/30 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-romantic-pink" />
                    <span className="text-[10px] font-semibold text-romantic-pink tracking-wider uppercase">
                      Flirty Mode
                    </span>
                  </div>
                </div>

                <div className="p-6 relative">
                  {/* Name & verification */}
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-2xl font-semibold text-white">{companion.name}</h3>
                    {companion.verified && (
                      <CheckCircle2 className="w-5 h-5 text-electric-cyan" />
                    )}
                  </div>
                  
                  <p className="text-sm text-romantic-pink mb-4 font-medium">
                    {companion.style}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-4">
                    <Languages className="w-3.5 h-3.5" />
                    {companion.languages.join(' • ')}
                  </div>

                  <div className="mb-4">
                    <p className="text-[11px] uppercase tracking-wider text-gray-500 mb-2">Interests</p>
                    <div className="flex flex-wrap gap-2">
                      {companion.interests.map((interest) => (
                        <span key={interest} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6 bg-romantic-DEFAULT/5 border border-romantic-DEFAULT/10 rounded-xl p-4">
                    <p className="text-[11px] uppercase tracking-wider text-romantic-pink/70 mb-1">
                      Flirty Style
                    </p>
                    <p className="text-sm text-gray-200">
                      "{companion.tagline}"
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => handleChoose(companion.id)}
                      className="flex-1 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-romantic-DEFAULT to-dream-purple hover:shadow-[0_0_15px_rgba(219,39,119,0.4)] transition-all"
                    >
                      Choose {companion.name}
                    </button>
                    <button
                      onClick={() => navigate(`/companions/${companion.id}`)}
                      className="px-5 py-3 rounded-full text-sm font-medium text-gray-300 border border-white/20 hover:bg-white/10 transition-colors"
                    >
                      Profile
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
