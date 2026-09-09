import React from 'react';
import { Star } from 'lucide-react';

const HowFeedback = () => {
  const questions = [
    "Did they listen well?",
    "Did you feel comfortable?",
    "Was the conversation helpful?",
    "Would you talk to them again?"
  ];

  return (
    <section className="py-16 bg-brand-900 border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <h2 className="text-3xl md:text-3xl font-semibold text-white mb-6">After your conversation</h2>
        <p className="text-gray-400 text-lg mb-12">Help us maintain a safe and supportive community by sharing your feedback.</p>

        <div className="bg-brand-950 border border-white/10 rounded-3xl p-8 max-w-lg mx-auto shadow-2xl">
          <div className="flex justify-center mb-8 gap-2 text-gray-600">
            {[1, 2, 3, 4, 5].map(i => (
              <Star key={i} size={32} className={i <= 4 ? "text-yellow-500 fill-yellow-500" : ""} />
            ))}
          </div>

          <div className="space-y-4 mb-8 text-left">
            {questions.map((q, i) => (
              <div key={i} className="flex items-center justify-between bg-white/5 border border-white/5 p-4 rounded-xl">
                <span className="text-sm text-gray-300 font-medium">{q}</span>
                <div className="flex gap-2">
                  <div className="w-10 h-6 rounded-md bg-white/10" />
                  <div className="w-10 h-6 rounded-md bg-electric-cyan/20 border border-electric-cyan/30" />
                </div>
              </div>
            ))}
          </div>

          <button className="w-full py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors">
            Submit Feedback
          </button>
        </div>

      </div>
    </section>
  );
};

export default HowFeedback;
