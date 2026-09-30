import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Brain, Heart, Shield, Sparkles } from 'lucide-react';

const cityDirectory = [
  { name: 'Delhi NCR', keywords: 'Online Counselling Delhi, Top Psychologists Gurgaon, Noida Mental Health' },
  { name: 'Mumbai', keywords: 'Therapists in Mumbai, Anxiety Counselling Bandra, CBT Experts South Bombay' },
  { name: 'Bangalore', keywords: 'Mental Health Tech Bangalore, Indiranagar Therapy, Overthinking Help Koramangala' },
  { name: 'Hyderabad', keywords: 'Psychologists Hyderabad, Gachibowli Relationship Counsellor, Hitec City Stress' },
  { name: 'Pune', keywords: 'Online Therapy Pune, Kothrud Depression Counselors, Viman Nagar Mental Wellness' },
  { name: 'Chennai', keywords: 'Online Psychologists Chennai, English & Tamil Therapy, Anna Nagar Counselling' },
  { name: 'Kolkata', keywords: 'Bengali & English Psychologists, Salt Lake Therapy, Park Street Counsellors' },
  { name: 'Ahmedabad', keywords: 'Gujarati & Hindi Therapy, SG Highway Mental Health Experts' },
  { name: 'Jaipur & Chandigarh', keywords: 'North India Online Therapy, Student Stress Counselling' },
  { name: 'Tier 2 & Remote India', keywords: 'Pan-India 24/7 Confidential Audio Therapy across 500+ Cities' },
];

const clinicalSpecialties = [
  { name: 'Anxiety & Panic Disorders', desc: 'CBT & Exposure response protocols for persistent panic and racing thoughts.' },
  { name: 'Depression & Low Energy', desc: 'Compassionate behavioral activation and emotional clarity.' },
  { name: 'Relationship & Heartbreak Recovery', desc: 'Attachment healing, closure support, and healthy emotional boundaries.' },
  { name: 'Intrusive Thoughts & OCD', desc: 'Structured trauma-informed cognitive tools to break obsessive cycles.' },
  { name: 'ADHD & Focus Struggles', desc: 'Executive function coaching and emotional dysregulation management.' },
  { name: 'Late-Night Venting & Companionship', desc: 'Immediate, judgment-free empathetic listeners ready to talk.' },
];

export default function SeoKeywordCloud() {
  return (
    <section className="py-12 bg-brand-950 border-t border-white/5 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* City & Regional Directory for Google Local Search Engine Optimization */}
        <div>
          <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
            <MapPin size={15} className="text-electric-cyan" />
            <span>Online Therapy & Psychological Counselling by Region & Cities</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {cityDirectory.map((c) => (
              <div key={c.name} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <Link to="/first-session" className="font-semibold text-gray-200 hover:text-pink-400 transition-colors block mb-1">
                  {c.name}
                </Link>
                <p className="text-[10px] text-gray-500 leading-tight">
                  {c.keywords}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Clinical Therapy Specialties */}
        <div>
          <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
            <Brain size={15} className="text-pink-400" />
            <span>Clinical Treatments, Evidence-Based Practices & Emotional Wellness</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {clinicalSpecialties.map((s) => (
              <div key={s.name} className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <Link to="/first-session" className="font-semibold text-gray-200 hover:text-electric-cyan transition-colors block mb-1">
                  {s.name}
                </Link>
                <p className="text-[11px] text-gray-500">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Long-tail SEO Narrative for High Search Authority */}
        <div className="p-5 rounded-2xl bg-brand-900/30 border border-white/5 space-y-3 leading-relaxed text-[11px] text-gray-400">
          <p>
            <strong className="text-gray-200">About Neuravia:</strong> Neuravia is India’s dedicated confidential mental health and emotional companionship platform. We bridge the gap between acute emotional distress, loneliness, and clinical psychological care. Whether you are searching for an <em>online clinical psychologist in Delhi</em>, an <em>anxiety specialist in Mumbai</em>, or an <em>empathetic listener in Hindi or English</em>, our platform provides encrypted, single-session ₹499 access without mandatory long-term contracts.
          </p>
          <p>
            Our network includes RCI verified clinical psychologists, psychotherapists, and trained empathetic companions. All conversations adhere to strict medical privacy standards and are conducted via private audio connections. National emergency crisis helpline support is available 24/7 via KIRAN (1800-599-0019) and Tele-MANAS (14416).
          </p>
        </div>

      </div>
    </section>
  );
}
