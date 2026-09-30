import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, Heart, Mic, Shield, Clock, 
  MessageSquare, User, Briefcase, GraduationCap, Flame, AlertCircle,
  Phone, MicOff, Volume2, Flag
} from 'lucide-react';

export default function BecomeCompanionLanding() {
  return (
    <div className="min-h-screen bg-brand-950 font-sans text-warm-white selection:bg-romantic-DEFAULT/30 selection:text-white pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950 via-romantic-DEFAULT/5 to-brand-950 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8"
            >
              <span className="text-xs font-semibold text-romantic-pink uppercase tracking-wider">
                Become a Companion
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Be the person <br className="hidden md:block" />
              someone feels <br className="hidden md:block" />
              comfortable talking to.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400 mb-10 leading-relaxed max-w-lg"
            >
              Neuravia companions create respectful, meaningful conversations by listening well, communicating clearly and respecting boundaries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Link
                to="/become-a-companion/apply"
                className="px-8 py-4 rounded-full text-base font-semibold text-brand-950 bg-white hover:bg-gray-100 transition-colors text-center shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                Apply To Become A Companion
              </Link>
              <a
                href="#what-it-takes"
                className="px-8 py-4 rounded-full text-base font-medium text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors text-center"
              >
                See What It Takes
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-3 text-xs font-semibold text-gray-500 uppercase tracking-widest"
            >
              <span>18+</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span>Respectful</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span>Responsible</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span>Phone Calls Only</span>
            </motion.div>
          </div>

          {/* Conceptual Profile Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative lg:ml-auto w-full max-w-md"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-romantic-DEFAULT/20 to-electric-cyan/20 rounded-[2.5rem] blur-2xl transform rotate-3" />
            <div className="bg-brand-900 border border-white/10 rounded-[2.5rem] p-8 relative z-10 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                  <User className="w-8 h-8 text-gray-300" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white">Your Name</h3>
                    <CheckCircle2 className="w-4 h-4 text-electric-cyan" />
                  </div>
                  <p className="text-sm text-electric-cyan font-medium">Verified Companion</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-2">Languages</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 border border-white/10">English</span>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 border border-white/10">Hindi</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-2">Conversation Style</p>
                  <span className="px-3 py-1 rounded-full bg-romantic-DEFAULT/10 text-sm text-romantic-200 border border-romantic-DEFAULT/20">Warm & Easygoing</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-2">Availability</p>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Clock className="w-4 h-4 text-gray-400" />
                    Evenings & Weekends
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Role Notice */}
      <section className="py-12 bg-brand-950 border-t border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-electric-cyan/5 border border-electric-cyan/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-12">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-electric-cyan" />
                A companion is not a therapist.
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Companions provide conversation, listening, friendly general perspectives, and everyday discussion.
              </p>
            </div>
            <div className="flex-1 bg-brand-950/50 rounded-xl p-5 border border-white/5">
              <p className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Companions must NOT:</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400/50" /> Diagnose</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400/50" /> Prescribe medication</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400/50" /> Provide clinical treatment</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400/50" /> Claim to be a therapist</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Qualities */}
      <section id="what-it-takes" className="py-24 bg-brand-900 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              You don’t need perfect words. <br className="hidden md:block" />
              You need the right approach.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <QualityCard 
              icon={User} title="18+ Adult" 
              desc="You must be legally an adult to provide companion services on our platform."
            />
            <QualityCard 
              icon={Heart} title="Kind & Respectful" 
              desc="You treat people with dignity regardless of their background or situation."
            />
            <QualityCard 
              icon={Mic} title="Good Listener" 
              desc="You can give another person space to speak without making every conversation about yourself."
            />
            <QualityCard 
              icon={MessageSquare} title="Clear Communicator" 
              desc="You can express your thoughts clearly and engage in fluid conversation."
            />
            <QualityCard 
              icon={Clock} title="Reliable" 
              desc="You show up when you say you will and manage your availability responsibly."
            />
            <QualityCard 
              icon={Shield} title="Understands Boundaries" 
              desc="You know how to set healthy boundaries and respect the boundaries of others."
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-brand-950 relative border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            What companions can talk about
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            <CategoryChip icon={MessageSquare} text="Just Talk" />
            <CategoryChip icon={Heart} text="Relationship Advice" />
            <CategoryChip icon={User} text="Family & Personal Life" />
            <CategoryChip icon={Briefcase} text="Career & Work" />
            <CategoryChip icon={GraduationCap} text="College & Student Life" />
            <CategoryChip icon={Flame} text="Flirty Mode • 18+" isFlirty />
          </div>
        </div>
      </section>

      {/* Phone Call Preview & Editorial */}
      <section className="py-24 bg-brand-900 border-t border-white/5 overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          
          {/* Phone visual */}
          <div className="w-full max-w-sm flex-shrink-0">
            <div className="bg-brand-950 border border-white/10 rounded-[3rem] p-6 shadow-2xl relative h-[600px] flex flex-col items-center justify-center">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full" />
              
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-white mb-2">Customer</h3>
                <p className="text-electric-cyan font-mono text-lg">60:00</p>
              </div>

              <div className="grid grid-cols-2 gap-6 w-full px-8 mb-16">
                <div className="flex flex-col items-center gap-2">
                  <button className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300">
                    <MicOff className="w-6 h-6" />
                  </button>
                  <span className="text-xs text-gray-500">Mute</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <button className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300">
                    <Volume2 className="w-6 h-6" />
                  </button>
                  <span className="text-xs text-gray-500">Speaker</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <button className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300">
                    <Flag className="w-6 h-6" />
                  </button>
                  <span className="text-xs text-gray-500">Report</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <button className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center text-white shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                    <Phone className="w-6 h-6 transform rotate-[135deg]" />
                  </button>
                  <span className="text-xs text-gray-500">End</span>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              No camera. <br />Just conversation.
            </h2>
            <p className="text-lg text-gray-400 mb-12">
              Neuravia uses phone-call based conversations. We do not use video, webcams, or support physical meetups.
            </p>

            <div className="space-y-8">
              <EditorialItem 
                title="Listening" 
                desc="Give people room to talk." 
              />
              <EditorialItem 
                title="Respect" 
                desc="Different people will have different experiences and perspectives." 
              />
              <EditorialItem 
                title="Boundaries" 
                desc="Know what belongs in a companion conversation and what does not." 
              />
              <EditorialItem 
                title="Reliability" 
                desc="Be available when you commit to a conversation." 
              />
              <EditorialItem 
                title="Safety" 
                desc="Know when something should be reported or redirected to appropriate support." 
              />
            </div>
          </div>

        </div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-brand-950 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-16">How the application works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StepCard num="01" title="Tell Us About Yourself" />
            <StepCard num="02" title="Choose Your Conversation Categories" />
            <StepCard num="03" title="Set Your Availability" />
            <StepCard num="04" title="Complete Verification Details" />
            <StepCard num="05" title="Review Your Application" />
            <div className="bg-electric-cyan/10 border border-electric-cyan/20 p-6 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 text-6xl font-bold text-electric-cyan/5 -mt-2 -mr-2">06</div>
              <h3 className="text-lg font-bold text-electric-cyan mb-2 relative z-10">Training & Approval</h3>
              <p className="text-sm text-electric-cyan/70 relative z-10">Approved applicants will proceed to our onboarding and training process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-brand-900 border-t border-white/5 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">Think you’d be a good listener?</h2>
          <Link
            to="/become-a-companion/apply"
            className="inline-flex px-10 py-5 rounded-full text-lg font-bold text-brand-950 bg-white hover:bg-gray-100 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            Start Application
          </Link>
        </div>
      </section>
    </div>
  );
}

function QualityCard({ icon: Icon, title, desc }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
      <Icon className="w-8 h-8 text-electric-cyan mb-4" />
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function CategoryChip({ icon: Icon, text, isFlirty }) {
  return (
    <div className={`flex items-center gap-3 px-6 py-4 rounded-xl border ${
      isFlirty 
        ? 'bg-romantic-DEFAULT/10 border-romantic-DEFAULT/20 text-romantic-200'
        : 'bg-white/5 border-white/10 text-white'
    }`}>
      <Icon className={`w-5 h-5 ${isFlirty ? 'text-romantic-pink' : 'text-gray-400'}`} />
      <span className="font-medium text-sm">{text}</span>
    </div>
  );
}

function EditorialItem({ title, desc }) {
  return (
    <div>
      <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
}

function StepCard({ num, title }) {
  return (
    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 text-6xl font-bold text-white/5 -mt-2 -mr-2">{num}</div>
      <h3 className="text-lg font-bold text-white mt-4 relative z-10 pr-8">{title}</h3>
    </div>
  );
}
