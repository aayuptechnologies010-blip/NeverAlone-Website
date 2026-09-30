import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Heart,
  HeartHandshake,
  Lock,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wind,
  Zap,
  Activity,
  Award,
  Calendar,
  Layers
} from 'lucide-react';
import VibeCheckAssessment from '../components/first-session/VibeCheckAssessment';
import FloatingFirstSessionBar from '../components/first-session/FloatingFirstSessionBar';

const bookingPath = '/book?serviceType=Professional+Support';

const concernsList = [
  {
    id: 'anxiety',
    title: 'Anxiety & Panic',
    badge: 'High Impact',
    icon: Wind,
    description: 'Persistent worry, panic attacks, racing thoughts, and difficulty calming the body.',
    solution: 'Evidence-based CBT & grounding methods to regain calm and control.'
  },
  {
    id: 'depression',
    title: 'Depression & Low Mood',
    badge: 'Compassionate Care',
    icon: HeartHandshake,
    description: 'Feeling disconnected, overwhelmed, emotionally drained, or struggling to find energy.',
    solution: 'A non-judgmental space to unpack emotions and rebuild daily balance.'
  },
  {
    id: 'overthinking',
    title: 'Overthinking & Mental Burnout',
    badge: 'Popular',
    icon: Brain,
    description: 'Mental loops, decision paralysis, nighttime exhaustion, and second-guessing every move.',
    solution: 'Practical clarity frameworks to break spirals and quiet an overactive mind.'
  },
  {
    id: 'relationships',
    title: 'Breakups & Relationship Stress',
    badge: 'Healing',
    icon: Heart,
    description: 'Heartbreak, communication conflicts, emotional dependency, or toxic dynamics.',
    solution: 'Clarity on boundaries, closure processing, and healthier relational habits.'
  },
  {
    id: 'ocd-trauma',
    title: 'Intrusive Thoughts & PTSD',
    badge: 'Specialized',
    icon: Activity,
    description: 'Repetitive intrusive patterns, trauma triggers, hypervigilance, and lingering distress.',
    solution: 'Structured trauma-informed care and cognitive tools to process deep distress.'
  },
  {
    id: 'adhd-focus',
    title: 'ADHD & Focus Struggles',
    badge: 'Executive Function',
    icon: Zap,
    description: 'Procrastination loops, emotional dysregulation, and time management battles.',
    solution: 'Tailored behavioral interventions and emotional regulation strategies.'
  }
];

const howItWorksSteps = [
  {
    step: '01',
    title: 'Select Your Slot & Focus Area',
    description: 'Pick an available time that fits your day (same-day slots available) and let us know what is on your mind.',
    subtext: 'Your first session is ₹499 for a complete 60-minute 1-on-1 consultation.'
  },
  {
    step: '02',
    title: 'Smart Therapist Matching',
    description: 'Our dedicated care team reviews your specific needs, background, and language preference to pair you with the best fit.',
    subtext: 'Hindi, English, and regional language support with verified specialists.'
  },
  {
    step: '03',
    title: 'Connect & Experience Healing',
    description: 'Join your 60-minute private audio session from anywhere. Share what feels important at your own pace.',
    subtext: 'No commitments required. Start with just one conversation.'
  }
];

const counselorProfiles = [
  {
    name: 'Dr. Sarah Jenkins',
    role: 'Clinical Psychologist (Ph.D.)',
    exp: '12+ Yrs Exp',
    lang: 'English, Hindi',
    focus: 'Anxiety, Trauma & CBT',
    image: 'https://i.pravatar.cc/300?img=47',
    rating: '4.9/5 (1.4k+ Sessions)'
  },
  {
    name: 'Amit Desai',
    role: 'Licensed Clinical Counsellor (M.A.)',
    exp: '8+ Yrs Exp',
    lang: 'English, Hindi, Marathi',
    focus: 'Relationships, Burnout & SFBT',
    image: 'https://i.pravatar.cc/300?img=11',
    rating: '4.9/5 (920+ Sessions)'
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Psychotherapist (Psy.D.)',
    exp: '15+ Yrs Exp',
    lang: 'English, Tamil, Hindi',
    focus: 'Depression, Grief & Psychodynamic',
    image: 'https://i.pravatar.cc/300?img=32',
    rating: '5.0/5 (2.1k+ Sessions)'
  },
  {
    name: 'Rohit Verma',
    role: 'Cognitive Behavioural Specialist',
    exp: '7+ Yrs Exp',
    lang: 'Hindi, English',
    focus: 'Overthinking, OCD & Stress Relief',
    image: 'https://i.pravatar.cc/300?img=68',
    rating: '4.8/5 (850+ Sessions)'
  }
];

const testimonials = [
  {
    name: 'Shruti M.',
    location: 'Bangalore',
    text: "I was overwhelmed with anxiety and felt hesitant to seek help. My first session here changed everything. My counsellor made me feel instantly understood. The CBT techniques and empathetic guidance have completely transformed how I handle daily stress.",
    tag: 'Treated for Anxiety & Panic'
  },
  {
    name: 'Karthik R.',
    location: 'Mumbai',
    text: "Decided to start because of the easy single-session option, round-the-clock slot flexibility, and total privacy. The 60-minute conversation helped me unpack months of burnout. My panic episodes have virtually disappeared. Truly grateful!",
    tag: 'Treated for Burnout & Stress'
  },
  {
    name: 'Meera P.',
    location: 'Delhi NCR',
    text: "This first session will open your mind and heart. I learned so much about emotional patterns and communication. You don't need to commit to huge packages upfront — starting with this one session was the best decision for my peace of mind.",
    tag: 'Treated for Low Mood & Relationships'
  }
];

const faqs = [
  {
    question: 'Who are we and how does Neuravia support your healing?',
    answer: 'Neuravia is a dedicated mental well-being platform designed to bridge the gap between emotional distress and meaningful healing. We offer confidential, accessible 1-on-1 therapy and emotional support sessions with qualified mental health professionals and empathetic listeners, combining evidence-based psychotherapy (CBT, SFBT, Mindfulness) with flexible, judgment-free care.'
  },
  {
    question: 'What actually happens in a first session?',
    answer: 'Your first session is an open, private 60-minute conversation. There is no test or expectation to have everything prepared. You and your therapist explore what you are currently going through, identify root triggers, ask questions freely, and design a customized, gentle plan forward.'
  },
  {
    question: 'Can I choose my therapist as per my own needs?',
    answer: 'Yes! You can explore specialized therapist profiles based on areas of practice (Anxiety, Depression, Trauma, Relationships), language preferences (English, Hindi, Marathi, Tamil, etc.), and therapeutic approaches, or allow our care team to match you.'
  },
  {
    question: 'What if I get emotional or cry during the session?',
    answer: 'It is completely normal and welcomed. Sessions are a safe, compassionate, and non-judgmental container where you are encouraged to express your true feelings without any fear or embarrassment.'
  },
  {
    question: 'Do I have to commit to long packages right away?',
    answer: 'Not at all. You can begin with a single 60-minute consultation at ₹499. Only after your first session and in agreement with your therapist do you decide whether and how you want to continue.'
  },
  {
    question: 'How is my privacy and identity protected?',
    answer: 'All sessions take place through encrypted, secure voice channels. Your personal details, assessment answers, and session records remain 100% private, confidential, and protected.'
  }
];

export default function FirstSessionPage() {
  const [selectedConcern, setSelectedConcern] = useState('anxiety');
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-950 text-white font-sans selection:bg-pink-500 selection:text-white">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION: Headline, Pricing Banner, & Quick Booking
      ────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-white/10">
        {/* Ambient Gradients */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[65rem] h-[35rem] bg-gradient-to-b from-pink-600/15 via-electric-cyan/10 to-transparent blur-[140px]" />
        <div className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 text-left"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 text-xs font-bold text-pink-300 uppercase tracking-widest mb-6">
                <Sparkles className="h-3.5 w-3.5 text-pink-400" />
                <span>ONLINE 1-ON-1 SESSIONS &bull; SAME-DAY SLOTS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                You don't need the perfect words. <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-pink-400 via-rose-300 to-electric-cyan bg-clip-text text-transparent">
                  Just a safe place to start.
                </span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl font-light">
                Talk with a qualified therapist, feel genuinely heard, and explore your next steps in a confidential, comfortable space. No long contracts or judgment.
              </p>

              {/* Price & Duration Feature Pills */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl px-4 py-2.5 backdrop-blur-md">
                  <span className="text-2xl font-black text-white">₹499</span>
                  <span className="text-xs text-gray-400">/ 60 Minutes Session</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl px-4 py-2.5 backdrop-blur-md text-xs font-semibold text-gray-200">
                  <Clock3 className="h-4 w-4 text-electric-cyan" />
                  <span>Choose an Available Slot</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl px-4 py-2.5 backdrop-blur-md text-xs font-semibold text-gray-200">
                  <ShieldCheck className="h-4 w-4 text-green-400" />
                  <span>100% Confidential Audio</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to={bookingPath}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-600 via-pink-500 to-rose-600 px-8 py-4 text-base font-bold text-white shadow-[0_0_30px_rgba(219,39,119,0.35)] transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(219,39,119,0.5)]"
                >
                  <span>Book Session &bull; ₹499</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/professional-support"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/30"
                >
                  <span>Meet All Therapists</span>
                </Link>
              </div>

              {/* Trust Subtext */}
              <div className="mt-8 flex items-center gap-4 text-xs text-gray-400">
                <div className="flex -space-x-2">
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-brand-950 object-cover" src="https://i.pravatar.cc/100?img=47" alt="Therapist" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-brand-950 object-cover" src="https://i.pravatar.cc/100?img=11" alt="Therapist" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-brand-950 object-cover" src="https://i.pravatar.cc/100?img=32" alt="Therapist" />
                </div>
                <div>
                  <div className="flex items-center text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-yellow-400" />
                    ))}
                    <span className="ml-1.5 font-bold text-white">4.9/5</span>
                  </div>
                  <span className="text-gray-400">Trusted by 10,000+ individuals across India</span>
                </div>
              </div>

            </motion.div>

            {/* Right Interactive Single Session Offer Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-3xl border border-white/15 bg-gradient-to-b from-brand-900/90 to-brand-950 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
                <div className="absolute -top-3.5 right-6 rounded-full bg-gradient-to-r from-electric-cyan to-pink-500 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest text-brand-950 shadow-md">
                  First Session Special
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-electric-cyan mb-1">
                  Single Session Pass
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Consultation, Assessment & Care
                </h3>
                <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                  Start wherever you are. Your first session is a space to share what matters, ask questions, and explore the next step together.
                </p>

                <div className="my-6 rounded-2xl bg-brand-950/80 border border-white/10 p-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-3xl font-extrabold text-white">₹499</span>
                      <span className="text-xs text-gray-400 line-through ml-2">₹1,499</span>
                    </div>
                    <span className="rounded-lg bg-green-500/10 border border-green-500/30 px-2.5 py-1 text-xs font-bold text-green-400">
                      Save 47% Today
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-gray-400">1 hr &bull; 60 Minutes &bull; Online Audio Consultation</p>
                </div>

                <ul className="space-y-3 mb-6 text-sm text-gray-200">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-electric-cyan shrink-0" />
                    <span>Private 1-on-1 audio call with qualified counsellor</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-electric-cyan shrink-0" />
                    <span>Choose Hindi, English, Marathi, or Tamil</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-electric-cyan shrink-0" />
                    <span>Personalized assessment & guidance plan</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-electric-cyan shrink-0" />
                    <span>No mandatory packages &bull; Re-book only if you want</span>
                  </li>
                </ul>

                <Link
                  to={bookingPath}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-4 font-bold text-brand-950 transition hover:bg-gray-100 hover:shadow-lg"
                >
                  <span>Book Now &bull; ₹499</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-gray-400 text-center">
                  <Lock className="h-3 w-3 text-gray-400" />
                  <span>100% Encrypted & Anonymous. Zero spam.</span>
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          2. HOW IT WORKS: 3 Simple Steps
      ────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-brand-900/40 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-pink-400">
              A Few Steps. A Real Conversation.
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
              Your first session, made simple.
            </h2>
            <p className="mt-4 text-base text-gray-300">
              We took away the complicated paperwork and long waiting lists so you can get support when you actually need it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorksSteps.map((stepItem, idx) => (
              <div 
                key={stepItem.step} 
                className="relative rounded-3xl border border-white/10 bg-brand-950/80 p-8 hover:border-pink-500/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-pink-500/80 group-hover:text-pink-400 transition-colors">
                    {stepItem.step}
                  </span>
                  <div className="h-10 w-10 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-electric-cyan">
                    {idx === 0 && <Calendar className="h-5 w-5" />}
                    {idx === 1 && <Users className="h-5 w-5" />}
                    {idx === 2 && <PhoneCall className="h-5 w-5" />}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {stepItem.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  {stepItem.description}
                </p>
                <div className="pt-4 border-t border-white/5 text-xs text-gray-400 font-medium">
                  {stepItem.subtext}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to={bookingPath}
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-3.5 font-bold text-brand-950 transition hover:bg-gray-100"
            >
              <span>Schedule in Under 60 Seconds</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          3. WHAT WE TREAT / AREAS OF FOCUS
      ────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-electric-cyan">
                Areas of Practice
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
                What we can help you navigate.
              </h2>
              <p className="mt-2 text-gray-400 text-sm max-w-xl">
                Whether it is a recent event or something you have carried for years, our therapists specialize in practical, compassionate recovery.
              </p>
            </div>
            <Link
              to={bookingPath}
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-pink-400 hover:text-pink-300"
            >
              <span>Book consultation for your condition</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {concernsList.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="rounded-3xl border border-white/10 bg-brand-900/60 p-7 hover:border-pink-500/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-12 w-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[10px] font-semibold text-gray-300">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs text-electric-cyan/90 font-medium leading-relaxed">
                      💡 {item.solution}
                    </p>
                    <Link
                      to={`${bookingPath}&concern=${encodeURIComponent(item.title)}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-pink-400 transition-colors"
                    >
                      <span>Start with this</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          4. GENTLE BEGINNING / WHY THIS MATTERS
      ────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-950 to-brand-900/40 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-pink-400">
                A Gentler Beginning
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Not a test. Not a formal interview. <br />
                Just two humans talking.
              </h2>
              <p className="mt-4 text-base text-gray-300 leading-relaxed">
                Many people delay seeking support because they worry about what to say or feeling judged. Here is how your first 60 minutes are designed:
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-2xl bg-electric-cyan/10 border border-electric-cyan/20 flex items-center justify-center text-electric-cyan font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Start with what matters to you</h3>
                    <p className="mt-1 text-sm text-gray-400">
                      A recent incident, an emotion that keeps lingering, or simply: <em>"I don't know where to start."</em> You set the pace.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Ask anything about the process</h3>
                    <p className="mt-1 text-sm text-gray-400">
                      Understand your therapist’s approach, ask about techniques, and evaluate if this is the right therapeutic match for you.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">From your comfortable, safe space</h3>
                    <p className="mt-1 text-sm text-gray-400">
                      Connect via private audio from home, during a walk, or in your room without stressful clinic visits.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  to={bookingPath}
                  className="inline-flex items-center gap-2 rounded-2xl bg-pink-600 hover:bg-pink-500 px-8 py-4 font-bold text-white shadow-lg shadow-pink-600/20 transition-all"
                >
                  <span>Secure Your Slot at ₹499</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Comparison Box: Professional Therapy vs Companion Chat */}
            <div className="space-y-6">
              <div className="rounded-3xl border border-electric-cyan/30 bg-electric-cyan/5 p-7 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-electric-cyan font-bold text-sm">
                    <ShieldCheck className="h-5 w-5" />
                    <span>Professional Therapy & Clinical Support</span>
                  </div>
                  <span className="text-xs font-bold text-electric-cyan bg-electric-cyan/10 px-2.5 py-1 rounded-full">₹499 First Session</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Conducted by qualified clinical psychologists and registered therapists. Best for Anxiety, Depression, Trauma, OCD, and structured mental health healing.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-300">
                  <span className="bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">&bull; Evidence-based CBT</span>
                  <span className="bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">&bull; Clinical Assessments</span>
                  <span className="bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">&bull; Coping Action Plans</span>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-brand-900/60 p-7">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-pink-400 font-bold text-sm">
                    <HeartHandshake className="h-5 w-5" />
                    <span>Empathetic Companion Conversations</span>
                  </div>
                  <span className="text-xs font-bold text-pink-400 bg-pink-500/10 px-2.5 py-1 rounded-full">Everyday Connection</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  For daily companionship, loneliness, venting after a tiring day, or sharing thoughts without clinical diagnosis or clinical treatments.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-300">
                  <span className="bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">&bull; Friendly Active Listening</span>
                  <span className="bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">&bull; Judgment-free venting</span>
                  <span className="bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">&bull; Available on Demand</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          5. THERAPIST PROFILES PREVIEW
      ────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-pink-400">
                Qualified & Compassionate
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
                The person you talk to matters.
              </h2>
              <p className="mt-2 text-gray-400 text-sm max-w-xl">
                Explore therapist backgrounds, verified qualifications, and therapeutic approaches before booking your 1-on-1 session.
              </p>
            </div>
            <Link
              to="/professional-support"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-electric-cyan hover:underline"
            >
              <span>View all verified practitioners</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {counselorProfiles.map((counselor, idx) => (
              <div 
                key={idx}
                className="rounded-3xl border border-white/10 bg-brand-900/70 p-6 flex flex-col justify-between hover:border-white/25 transition-all group"
              >
                <div>
                  <div className="relative mb-5 overflow-hidden rounded-2xl">
                    <img 
                      src={counselor.image} 
                      alt={counselor.name} 
                      className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-brand-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-green-400 border border-green-500/30 flex items-center gap-1">
                      <ShieldCheck className="h-3 w-3" />
                      <span>Verified</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white">{counselor.name}</h3>
                  <p className="text-xs text-electric-cyan font-medium mt-0.5">{counselor.role}</p>

                  <div className="mt-4 space-y-1.5 text-xs text-gray-300">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Experience:</span>
                      <span className="font-semibold">{counselor.exp}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Languages:</span>
                      <span className="font-semibold">{counselor.lang}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Specialization:</span>
                      <span className="font-semibold text-pink-300">{counselor.focus}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="text-yellow-400 font-bold flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400" />
                      {counselor.rating}
                    </span>
                  </div>
                  <Link
                    to={bookingPath}
                    className="block w-full py-2.5 text-center text-xs font-bold rounded-xl bg-white/10 hover:bg-white text-white hover:text-brand-950 transition-all"
                  >
                    Book with {counselor.name.split(' ')[0]}
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          6. USER REVIEWS & STORIES
      ────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-brand-900/30 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-pink-400">
              Transformative Conversations
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
              What people say about their first session.
            </h2>
            <p className="mt-4 text-base text-gray-300">
              Real feedback from individuals who took their first step with our counsellors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className="rounded-3xl border border-white/10 bg-brand-950/80 p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed italic mb-6">
                    "{t.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-white text-sm">{t.name}</h4>
                      <p className="text-xs text-gray-500">{t.location}</p>
                    </div>
                    <span className="text-[10px] font-semibold bg-pink-500/10 text-pink-300 px-2.5 py-1 rounded-full border border-pink-500/20">
                      {t.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          7. BOTTOM CTA CALLOUT BANNER
      ────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/30 via-brand-950 to-brand-900/50" />
        
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-electric-cyan">
            A Little Space. Just For You.
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-black text-white leading-tight">
            Start With One Session &mdash; ₹499
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-light">
            Talk to your therapist. Assess your current emotional space. Decide what is next together with complete peace of mind.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={bookingPath}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 px-9 py-4 text-base font-bold text-white shadow-xl shadow-pink-600/30 transition-all hover:scale-105"
            >
              <span>Book Your First Session (₹499)</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/categories"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-all"
            >
              <span>Explore Categories</span>
            </Link>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            ✓ 60-Minute 1-on-1 &bull; ✓ Same-Day Availability &bull; ✓ 100% Confidential
          </p>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          8. FAQ SECTION (Accordion)
      ────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 border-t border-white/10 bg-brand-950">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-electric-cyan">
              Have Questions?
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-white">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Everything you need to know about starting your first session with Neuravia.
            </p>
          </div>

          <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-brand-900/40 p-4 sm:p-6 backdrop-blur-md">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question} className="py-4">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 text-left font-semibold text-white hover:text-pink-300 transition-colors"
                  >
                    <span className="text-base sm:text-lg">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-pink-400' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 text-sm leading-relaxed text-gray-300"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-400 mb-4">Still have questions before getting started?</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-electric-cyan hover:underline"
            >
              <span>Contact our 24/7 care team</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 2-Minute Match Assessment Quiz */}
      <VibeCheckAssessment />

      {/* Floating Sticky Book Bar on Mobile */}
      <FloatingFirstSessionBar />

    </div>
  );
}
