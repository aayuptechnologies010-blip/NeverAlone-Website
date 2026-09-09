import React from 'react';
import { motion } from 'framer-motion';

const predefinedInterests = [
  'Music', 'Movies', 'Travel', 'Books', 'Food', 'Career', 
  'Technology', 'Sports', 'Fashion', 'Gaming', 'Art'
];

const predefinedStyles = [
  'Warm & Easygoing',
  'Great Listener',
  'Fun & Energetic',
  'Calm & Thoughtful',
  'Friendly & Supportive'
];

export default function StepAboutYou({ data, updateData, errors }) {
  
  const handleInterestToggle = (interest) => {
    const updated = data.interests.includes(interest)
      ? data.interests.filter(i => i !== interest)
      : [...data.interests, interest];
    updateData({ interests: updated });
  };

  const handleStyleToggle = (style) => {
    const updated = data.conversationStyles.includes(style)
      ? data.conversationStyles.filter(s => s !== style)
      : [...data.conversationStyles, style];
    updateData({ conversationStyles: updated });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">Help us understand your personality.</h2>
        <p className="text-gray-400">Tell us what makes you a great companion.</p>
      </div>

      <div className="space-y-8">
        
        {/* Interests */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">Interests <span className="text-red-400">*</span></label>
          <div className="flex flex-wrap gap-2">
            {predefinedInterests.map(interest => (
              <button
                key={interest}
                type="button"
                onClick={() => handleInterestToggle(interest)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  data.interests.includes(interest)
                    ? 'bg-electric-cyan/20 border-electric-cyan text-electric-cyan'
                    : 'bg-white/5 border-white/10 hover:border-white/30 text-gray-400 hover:text-white'
                }`}
              >
                {interest}
              </button>
            ))}
          </div>
          {errors.interests && <p className="text-red-400 text-xs mt-2">{errors.interests}</p>}
        </div>

        {/* Conversation Style */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">Conversation Style <span className="text-red-400">*</span></label>
          <div className="flex flex-wrap gap-2">
            {predefinedStyles.map(style => (
              <button
                key={style}
                type="button"
                onClick={() => handleStyleToggle(style)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  data.conversationStyles.includes(style)
                    ? 'bg-romantic-DEFAULT/20 border-romantic-DEFAULT text-romantic-200'
                    : 'bg-white/5 border-white/10 hover:border-white/30 text-gray-400 hover:text-white'
                }`}
              >
                {style}
              </button>
            ))}
          </div>
          {errors.conversationStyles && <p className="text-red-400 text-xs mt-2">{errors.conversationStyles}</p>}
        </div>

        {/* Introduction */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Tell us a little about yourself <span className="text-red-400">*</span></label>
          <p className="text-xs text-gray-500 mb-3">What do you enjoy talking about, and what kind of conversations do you feel most comfortable having?</p>
          <textarea 
            value={data.introduction}
            onChange={(e) => updateData({ introduction: e.target.value })}
            rows={5}
            className={`w-full bg-white/5 border ${errors.introduction ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-electric-cyan/50'} rounded-xl px-4 py-3 text-white focus:outline-none focus:bg-white/10 transition-colors resize-none`} 
          />
          <div className="flex justify-between items-center mt-1.5">
            {errors.introduction ? (
              <p className="text-red-400 text-xs">{errors.introduction}</p>
            ) : (
              <span className="text-xs text-gray-500">Do not include medical or therapeutic claims.</span>
            )}
            <span className="text-xs text-gray-500">{data.introduction.length} chars</span>
          </div>
        </div>

        {/* Experience */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Relevant experience (Optional)</label>
          <p className="text-xs text-gray-500 mb-3">Share any experience that may help us understand your communication or people skills.</p>
          <textarea 
            value={data.experience}
            onChange={(e) => updateData({ experience: e.target.value })}
            rows={3}
            className="w-full bg-white/5 border border-white/10 focus:border-electric-cyan/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:bg-white/10 transition-colors resize-none" 
          />
        </div>

      </div>
    </motion.div>
  );
}
