import React from 'react';

const ProfileTopics = ({ companion }) => {
  return (
    <section className="py-8 bg-brand-950">
      <div className="max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white mb-2">What can you talk about?</h2>
        <p className="text-gray-400 mb-6 text-sm">Anything within the conversation categories and community guidelines.</p>
        
        <div className="flex flex-wrap gap-3">
          {companion.interests.map(topic => (
            <div key={topic} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-300">
              {topic}
            </div>
          ))}
          {/* Add some general ones if they don't have many */}
          <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-300">Daily Life</div>
          <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-300">Random Thoughts</div>
        </div>
      </div>
    </section>
  );
};

export default ProfileTopics;
