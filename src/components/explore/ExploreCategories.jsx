import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Heart, Users, Briefcase, GraduationCap, Sparkles, Stethoscope, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExploreCategories = () => {
  const categories = [
    {
      id: "just-talk",
      title: "Just Talk",
      tagline: "No agenda. No pressure. Just talk.",
      desc: "Talk about your day, thoughts, hobbies, plans, worries, random things, or anything else on your mind.",
      icon: MessageCircle,
      chips: ["My Day", "Thoughts", "Movies", "Music", "Life", "Random Things"],
      iconBg: "bg-blue-500",
      accentColor: "text-blue-400",
      chipBg: "bg-blue-500/10 text-blue-300 border-blue-500/20",
      cta: "Find Someone To Talk To",
      ctaBg: "bg-blue-600 hover:bg-blue-500",
      isProfessional: false
    },
    {
      id: "relationship",
      title: "Relationship Advice",
      tagline: "Sometimes you just need another perspective.",
      desc: "Navigate the complexities of your love life with someone who can offer an objective, empathetic ear.",
      icon: Heart,
      chips: ["Dating", "Communication Problems", "Breakups", "Misunderstandings", "Friendship Problems", "Trust Issues", "Moving On"],
      iconBg: "bg-pink-500",
      accentColor: "text-pink-400",
      chipBg: "bg-pink-500/10 text-pink-300 border-pink-500/20",
      cta: "Talk It Through",
      ctaBg: "bg-pink-600 hover:bg-pink-500",
      isProfessional: false
    },
    {
      id: "family",
      title: "Family & Personal",
      tagline: "Some things are easier to say out loud.",
      desc: "Discuss the challenges that are closest to home without the fear of judgment from those involved.",
      icon: Users,
      chips: ["Family Disagreements", "Communication", "Generational Differences", "Personal Decisions", "Boundaries", "Difficult Conversations"],
      iconBg: "bg-orange-500",
      accentColor: "text-orange-400",
      chipBg: "bg-orange-500/10 text-orange-300 border-orange-500/20",
      cta: "Find Someone Who Listens",
      ctaBg: "bg-orange-600 hover:bg-orange-500",
      isProfessional: false
    },
    {
      id: "career",
      title: "Career & Work",
      tagline: "When your next move isn't clear.",
      desc: "Bounce ideas off someone who can help you see the bigger picture in your professional life.",
      icon: Briefcase,
      chips: ["Career Decisions", "Job Searches", "Interviews", "Workplace Situations", "Work Stress", "Professional Goals", "Changing Careers"],
      iconBg: "bg-emerald-500",
      accentColor: "text-emerald-400",
      chipBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
      cta: "Talk About What's Next",
      ctaBg: "bg-emerald-600 hover:bg-emerald-500",
      isProfessional: false
    },
    {
      id: "college",
      title: "College & Student Life",
      tagline: "Studies, friendships, pressure and future plans.",
      desc: "College is supposed to be the best time of your life, but it can also be the most stressful. Let's talk about it.",
      icon: GraduationCap,
      chips: ["Studies", "College Friendships", "Career Choices", "Exams", "Campus Life", "Future Plans", "Confidence"],
      iconBg: "bg-purple-500",
      accentColor: "text-purple-400",
      chipBg: "bg-purple-500/10 text-purple-300 border-purple-500/20",
      cta: "Talk To Someone",
      ctaBg: "bg-purple-600 hover:bg-purple-500",
      isProfessional: false
    },
    {
      id: "mindfulness",
      title: "Mindfulness & Healing",
      tagline: "Calm your thoughts. Regain your inner peace.",
      desc: "A dedicated safe space for anxiety relief, stress reduction, deep listening, and guided mindfulness conversations.",
      icon: Sparkles,
      chips: ["Anxiety Support", "Overthinking", "Panic Relief", "Breathing & Calm", "Emotional Healing", "Safe Space"],
      iconBg: "bg-cyan-500",
      accentColor: "text-cyan-400",
      chipBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
      cta: "Find Calm & Healing",
      ctaBg: "bg-cyan-600 hover:bg-cyan-500",
      isProfessional: false,
      badges: ["100% Confidential", "Zero Judgment", "Evidence-Based", "Phone Calls Only"]
    }
  ];

  return (
    <section id="all-categories" className="py-12 bg-brand-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        h

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`group bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl p-5 hover:bg-white/10 transition-all duration-300 flex flex-col hover:-translate-y-1 relative overflow-hidden ${category.isProfessional ? 'md:col-span-2 lg:col-span-3' : ''}`}
            >
              {/* Header */}
              <div className="flex items-start gap-3.5 mb-3 relative z-10">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${category.iconBg} shadow-md`}>
                  <category.icon size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-0.5">{category.title}</h3>
                  <p className={`text-[11px] font-semibold italic ${category.accentColor}`}>"{category.tagline}"</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-xs leading-relaxed mb-4 relative z-10">{category.desc}</p>

              {/* Professional info box */}
              {category.info && (
                <div className="bg-black/20 border border-white/5 rounded-lg p-3 mb-4 flex items-start gap-2.5 relative z-10">
                  <ShieldCheck className="text-gray-400 shrink-0 mt-0.5" size={14} />
                  <p className="text-[11px] text-gray-300 leading-relaxed font-medium">{category.info}</p>
                </div>
              )}

              {/* Flirty badges */}
              {category.badges && (
                <div className="flex flex-wrap gap-1.5 mb-4 relative z-10">
                  {category.badges.map(badge => (
                    <span key={badge} className="px-2 py-1 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] font-bold tracking-wide uppercase rounded-md flex items-center gap-1">
                      {badge === "Phone Calls Only" ? <PhoneCall size={10} /> : <ShieldCheck size={10} />}
                      {badge}
                    </span>
                  ))}
                </div>
              )}

              {/* Topic chips */}
              <div className="flex flex-wrap gap-1.5 mb-5 flex-grow content-start relative z-10">
                {category.chips.map(chip => (
                  <span key={chip} className={`text-[10px] px-2.5 py-1 rounded-md border font-medium ${category.chipBg}`}>
                    {chip}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link
                to="/categories"
                className={`mt-auto inline-flex items-center justify-center space-x-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold text-white transition-all duration-300 w-full relative z-10 ${category.ctaBg}`}
              >
                <span>{category.cta}</span>
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCategories;
