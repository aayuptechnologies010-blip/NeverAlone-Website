import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';

const SoundTherapySpotlight = () => {
  const blogs = [
    {
      title: "5 Simple Ways to Manage Everyday Stress",
      category: "Stress Management",
      readTime: "4 min read"
    },
    {
      title: "How to Know When You Need Emotional Support",
      category: "Self-Awareness",
      readTime: "5 min read"
    },
    {
      title: "Understanding Anxiety & Overthinking",
      category: "Mental Health",
      readTime: "6 min read"
    },
    {
      title: "How Therapy Actually Works",
      category: "Therapy 101",
      readTime: "5 min read"
    },
    {
      title: "Building Healthy Emotional Boundaries",
      category: "Relationships",
      readTime: "4 min read"
    },
    {
      title: "How to Improve Your Emotional Wellbeing",
      category: "Wellbeing",
      readTime: "5 min read"
    }
  ];

  return (
    <section id="resources" className="py-14 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-block px-3 py-1 rounded-full bg-[#083058]/5 text-[#083058] text-xs font-semibold uppercase tracking-wider mb-3">
            Resources &amp; Insights
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#083058] tracking-tight font-display mb-3">
            Learn. Understand. Grow.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Helpful articles and practical guides written by mental health professionals.
          </p>
        </div>

        {/* 6 Blog Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((b, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-[#fbfdfc] border border-slate-100 rounded-2xl p-6 text-left hover:shadow-md hover:border-[#00839a]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="text-[#00839a] font-semibold">{b.category}</span>
                  <span>{b.readTime}</span>
                </div>
                <h3 className="text-base font-bold text-[#083058] mb-4 leading-snug hover:text-[#00839a] transition-colors cursor-pointer">
                  {b.title}
                </h3>
              </div>

              <div className="pt-3 border-t border-slate-100/80">
                <Link
                  to="/first-session"
                  className="text-xs font-semibold text-[#083058] hover:text-[#00839a] inline-flex items-center space-x-1 transition-colors"
                >
                  <span>Read article</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/categories"
            className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-[#083058] bg-white border border-slate-200 hover:bg-slate-50 shadow-sm transition-all"
          >
            <span>Explore Resources →</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default SoundTherapySpotlight;
