import React from 'react';
import { motion } from 'framer-motion';

export default function StepBasicDetails({ data, updateData, errors }) {
  const handleLangChange = (lang) => {
    const langs = data.languages.includes(lang)
      ? data.languages.filter(l => l !== lang)
      : [...data.languages, lang];
    updateData({ languages: langs });
  };

  const predefinedLangs = ['English', 'Hindi', 'Spanish', 'French', 'Regional Indian'];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">Let’s start with the basics.</h2>
        <p className="text-gray-400">Tell us who you are.</p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">First Name <span className="text-red-400">*</span></label>
            <input 
              type="text" 
              value={data.firstName}
              onChange={(e) => updateData({ firstName: e.target.value })}
              className={`w-full bg-white/5 border ${errors.firstName ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-electric-cyan/50'} rounded-xl px-4 py-3 text-white focus:outline-none focus:bg-white/10 transition-colors`} 
            />
            {errors.firstName && <p className="text-red-400 text-xs mt-1.5">{errors.firstName}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Last Name <span className="text-red-400">*</span></label>
            <input 
              type="text" 
              value={data.lastName}
              onChange={(e) => updateData({ lastName: e.target.value })}
              className={`w-full bg-white/5 border ${errors.lastName ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-electric-cyan/50'} rounded-xl px-4 py-3 text-white focus:outline-none focus:bg-white/10 transition-colors`} 
            />
            {errors.lastName && <p className="text-red-400 text-xs mt-1.5">{errors.lastName}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email Address <span className="text-red-400">*</span></label>
            <input 
              type="email" 
              value={data.email}
              onChange={(e) => updateData({ email: e.target.value })}
              className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-electric-cyan/50'} rounded-xl px-4 py-3 text-white focus:outline-none focus:bg-white/10 transition-colors`} 
            />
            {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Mobile Number <span className="text-red-400">*</span></label>
            <input 
              type="tel" 
              value={data.mobile}
              onChange={(e) => updateData({ mobile: e.target.value })}
              className={`w-full bg-white/5 border ${errors.mobile ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-electric-cyan/50'} rounded-xl px-4 py-3 text-white focus:outline-none focus:bg-white/10 transition-colors`} 
            />
            {errors.mobile && <p className="text-red-400 text-xs mt-1.5">{errors.mobile}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Age / Date of Birth <span className="text-red-400">*</span></label>
          <input 
            type="date" 
            value={data.dob}
            onChange={(e) => updateData({ dob: e.target.value })}
            className={`w-full bg-white/5 border ${errors.dob ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-electric-cyan/50'} rounded-xl px-4 py-3 text-white focus:outline-none focus:bg-white/10 transition-colors`} 
            style={{ colorScheme: 'dark' }}
          />
          {errors.dob && <p className="text-red-400 text-xs mt-1.5">{errors.dob}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">Languages <span className="text-red-400">*</span></label>
          <div className="flex flex-wrap gap-3">
            {predefinedLangs.map(lang => (
              <button
                key={lang}
                type="button"
                onClick={() => handleLangChange(lang)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                  data.languages.includes(lang)
                    ? 'bg-electric-cyan text-brand-950 border-electric-cyan'
                    : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
          {errors.languages && <p className="text-red-400 text-xs mt-2">{errors.languages}</p>}
        </div>

        <div className="pt-4 border-t border-white/10">
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center mt-0.5">
              <input
                type="checkbox"
                checked={data.confirmAge}
                onChange={(e) => updateData({ confirmAge: e.target.checked })}
                className="peer sr-only"
              />
              <div className={`w-5 h-5 border-2 rounded transition-colors ${
                data.confirmAge ? 'bg-electric-cyan border-electric-cyan' : errors.confirmAge ? 'border-red-500' : 'border-gray-500 group-hover:border-electric-cyan/50'
              }`}>
                {data.confirmAge && (
                  <svg className="w-4 h-4 text-brand-950 absolute top-0.5 left-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
            <div>
              <p className={`text-sm font-medium ${data.confirmAge ? 'text-white' : 'text-gray-300'}`}>
                I confirm that I am 18 years of age or older. <span className="text-red-400">*</span>
              </p>
              {errors.confirmAge && <p className="text-red-400 text-xs mt-1">{errors.confirmAge}</p>}
            </div>
          </label>
        </div>

      </div>
    </motion.div>
  );
}
