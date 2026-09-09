import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, CheckCircle2, ChevronRight, RotateCcw } from 'lucide-react';

const ExploreMatchPreview = () => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({ category: null, language: null, style: null });

  const categories = ["Just Talk", "Relationship", "Career", "Flirty Mode"];
  const languages = ["Hindi", "English", "Hindi + English"];
  const styles = ["Warm & Easygoing", "Great Listener", "Fun & Energetic", "Calm & Thoughtful"];

  const companions = [
    { name: "Aisha", style: "Warm & Easygoing", lang: "Hindi • English", img: "https://i.pravatar.cc/150?img=47" },
    { name: "Riya", style: "Great Listener", lang: "Hindi • English", img: "https://i.pravatar.cc/150?img=44" },
    { name: "Ananya", style: "Fun & Energetic", lang: "Hindi • English", img: "https://i.pravatar.cc/150?img=20" }
  ];

  const handleSelect = (key, value) => {
    setSelections(prev => ({ ...prev, [key]: value }));
    setTimeout(() => setStep(prev => prev + 1), 300);
  };

  const resetFlow = () => {
    setSelections({ category: null, language: null, style: null });
    setStep(1);
  };

  const stepOptions = [
    { key: 'category', label: 'Step 1: Choose category', options: categories },
    { key: 'language', label: 'Step 2: Choose preferred language', options: languages },
    { key: 'style', label: 'Step 3: Choose conversation style', options: styles },
  ];

  return (
    <section className="py-12 bg-brand-900 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-pink-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-white mb-2"
          >
            Your conversation. Your choice.
          </motion.h2>
          <p className="text-gray-400 text-base">Choose what's on your mind and we'll show people who fit that kind of conversation.</p>
        </div>

        <div className="bg-brand-950/70 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-xl min-h-[380px] flex flex-col justify-center">

          {/* Progress dots */}
          <div className="flex justify-center space-x-2 mb-10">
            {[1, 2, 3, 4].map(i => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-500 ${step >= i ? 'bg-pink-500 w-8' : 'bg-white/10 w-4'}`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* Steps 1, 2, 3 */}
            {step <= 3 && (
              <motion.div
                key={`step-${step}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                className="max-w-xl mx-auto text-center w-full"
              >
                <h3 className="text-xl text-white font-semibold mb-6">{stepOptions[step - 1].label}</h3>
                <div className={`grid gap-3 ${step === 1 ? 'grid-cols-2 gap-4' : step === 2 ? 'flex flex-col' : 'grid-cols-2'}`}>
                  {stepOptions[step - 1].options.map(option => {
                    if (step === 1) {
                      const categoryImages = {
                        "Just Talk": "/cat_just_talk.jpg",
                        "Relationship": "/cat_relationship.jpg",
                        "Career": "/cat_career.jpg",
                        "Flirty Mode": "/cat_flirty.jpg"
                      };
                      return (
                        <button
                          key={option}
                          onClick={() => handleSelect('category', option)}
                          className="relative h-28 sm:h-36 rounded-2xl overflow-hidden border border-white/10 group shadow-lg text-left"
                        >
                          <img src={categoryImages[option]} alt={option} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/30 to-brand-950/10 group-hover:from-pink-900/90 transition-colors duration-300" />
                          <div className="absolute bottom-3 left-4 right-2 z-10 flex items-center justify-between">
                            <span className="text-white font-bold text-sm sm:text-base tracking-wide">{option}</span>
                            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                              <ChevronRight size={14} className="text-white" />
                            </div>
                          </div>
                        </button>
                      );
                    }
                    return (
                      <button
                        key={option}
                        onClick={() => handleSelect(stepOptions[step - 1].key, option)}
                        className="py-3 px-5 rounded-xl border border-white/10 bg-white/5 hover:bg-pink-600/20 hover:border-pink-500/40 text-gray-300 hover:text-white transition-all duration-200 text-sm font-medium"
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Step 4: Results */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full text-center"
              >
                <h3 className="text-xl text-white font-semibold mb-1">Here are some companions for you</h3>
                <p className="text-gray-500 mb-6 text-sm">{selections.category} • {selections.language} • {selections.style}</p>

                <div className="grid md:grid-cols-3 gap-4 mb-8 text-left">
                  {companions.map((comp, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-brand-900 border border-white/10 p-4 rounded-2xl flex flex-col justify-between hover:border-pink-500/30 transition-colors"
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <img src={comp.img} alt={comp.name} className="w-11 h-11 rounded-full object-cover border border-white/20" />
                        <div>
                          <div className="flex items-center space-x-1">
                            <h4 className="text-white font-semibold text-sm">{comp.name}</h4>
                            <CheckCircle2 size={12} className="text-cyan-400" />
                          </div>
                          <p className="text-xs text-pink-400">{comp.style}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-white/5">
                        <span className="text-xs text-gray-500">{comp.lang}</span>
                        <div className="w-8 h-8 rounded-full bg-pink-600/20 flex items-center justify-center text-pink-400 hover:bg-pink-600 hover:text-white transition-colors">
                          <Phone size={14} />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <button className="px-8 py-3 rounded-full text-white font-semibold bg-pink-600 hover:bg-pink-500 transition-all flex items-center space-x-2 shadow-lg">
                    <span>View Matching Companions</span>
                    <ChevronRight size={18} />
                  </button>
                  <button onClick={resetFlow} className="px-6 py-3 rounded-full text-gray-400 hover:text-white flex items-center space-x-2 transition-colors text-sm">
                    <RotateCcw size={15} />
                    <span>Start Over</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ExploreMatchPreview;
