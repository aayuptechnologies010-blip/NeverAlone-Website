import React from 'react';

const ProfileAbout = ({ companion }) => {
  return (
    <section className="py-12 bg-brand-950">
      <div className="max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white mb-6">Meet {companion.name}</h2>
        <div className="bg-brand-900/40 border border-white/5 rounded-[2rem] p-8 md:p-10">
          <p className="text-lg text-gray-300 leading-relaxed font-serif">
            {companion.longBio}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileAbout;
