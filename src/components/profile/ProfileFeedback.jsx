import React from 'react';
import { Star } from 'lucide-react';

const ProfileFeedback = () => {
  const questions = [
    "Did they listen well?",
    "Did you feel comfortable?",
    "Was the conversation helpful?",
    "Would you talk to them again?"
  ];

  return (
    <section className="py-12 bg-brand-950">
      <div className="max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white mb-2">Feedback preview</h2>
        <p className="text-gray-400 text-sm mb-6 italic">This is the kind of feedback we collect after conversations.</p>
        
        <div className="bg-brand-900/30 border border-white/5 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-2 mb-6 pb-6 border-b border-white/5">
            <div className="flex text-yellow-500">
              {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-sm text-gray-300 font-medium">Standard Rating</span>
          </div>

          <div className="space-y-4">
            {questions.map((q, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm text-gray-300">{q}</span>
                <div className="w-16 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-electric-cyan w-[90%]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileFeedback;
