import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  X, 
  Star, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Globe, 
  GraduationCap, 
  Award, 
  Send, 
  ArrowRight,
  ShieldCheck,
  Video,
  UserCheck
} from 'lucide-react';
import { getApiUrl, resolveImageUrl } from '../config/api';

export default function TherapistProfileModal({ therapist, isOpen, onClose }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile'); // 'profile' or 'enquiry'
  
  // Enquiry form state
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [enquiryLoading, setEnquiryLoading] = useState(false);
  const [enquirySuccess, setEnquirySuccess] = useState(false);
  const [enquiryError, setEnquiryError] = useState('');

  if (!isOpen || !therapist) return null;

  const handleBook = () => {
    onClose();
    const tId = therapist._id || therapist.id || 'priya';
    const tName = encodeURIComponent(therapist.name || 'Dr. Priya Sharma');
    navigate(`/book?therapistId=${tId}&therapistName=${tName}`);
  };

  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    if (!enquiryForm.name.trim() || !enquiryForm.email.trim() || !enquiryForm.message.trim()) {
      setEnquiryError('Please fill in your name, email and message.');
      return;
    }

    setEnquiryLoading(true);
    setEnquiryError('');

    try {
      const apiUrl = getApiUrl();
      const payload = {
        name: enquiryForm.name,
        email: enquiryForm.email,
        phone: enquiryForm.phone,
        subject: `Enquiry for ${therapist.name}`,
        category: 'Therapist Session Consultation',
        message: `Therapist: ${therapist.name}\nClient Message: ${enquiryForm.message}`
      };

      const res = await fetch(`${apiUrl}/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        setEnquirySuccess(true);
      } else {
        setEnquiryError(data.message || 'Failed to submit enquiry. Please try again.');
      }
    } catch (err) {
      setEnquiryError('Unable to connect to service. Please try again.');
    } finally {
      setEnquiryLoading(false);
    }
  };

  // Helper arrays
  const parseList = (val, fallback = []) => {
    if (Array.isArray(val)) return val;
    if (typeof val === 'string' && val.trim()) {
      return val.split(',').map(s => s.trim()).filter(Boolean);
    }
    return fallback;
  };

  const treatsList = parseList(therapist.treats || therapist.specialties, ['Anxiety', 'Stress', 'Depression', 'Relationship Issues']);
  const ageGroupsList = parseList(therapist.ageGroups, ['Teenagers', 'Adults', 'Couples']);
  const therapyMethodsList = parseList(therapist.therapyMethods, ['CBT', 'Mindfulness', 'Counseling']);
  const languagesList = parseList(therapist.languages, ['Hindi', 'English']);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="bg-white rounded-3xl max-w-2xl w-full my-auto shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[92vh]"
        >
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-[#083058] to-[#0c4a6e] p-6 text-white relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Close Profile"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pt-2">
              {/* Photo with verified badge */}
              <div className="relative shrink-0">
                <img
                  src={resolveImageUrl(therapist.image || therapist.profilePhoto, 'https://images.unsplash.com/photo-1594824813637-8e6f14ddbd66?auto=format&fit=crop&w=400&q=80')}
                  alt={therapist.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white/20 shadow-md bg-slate-100"
                />
                {therapist.isVerified !== false && (
                  <span 
                    className="absolute bottom-0 right-0 bg-[#00839a] text-white p-1 rounded-full shadow-md border-2 border-white"
                    title="Neuravia Verified"
                  >
                    <CheckCircle2 size={16} />
                  </span>
                )}
              </div>

              {/* Bio Highlights */}
              <div className="text-center sm:text-left flex-1 min-w-0">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#00839a]/30 text-emerald-200 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                  <ShieldCheck size={13} />
                  <span>{therapist.verifiedBadge || 'Neuravia Verified'}</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-white">{therapist.name}</h2>
                <p className="text-xs text-slate-200 font-medium mt-0.5">{therapist.title || therapist.role}</p>
                
                {/* Metrics */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-3 text-xs text-slate-200">
                  <span className="flex items-center text-amber-300 font-bold">
                    <Star size={14} className="fill-amber-300 mr-1" />
                    <span>{therapist.rating || '4.8'}</span>
                  </span>
                  <span>&bull;</span>
                  <span className="font-semibold">{therapist.experience || '6+ Years'}</span>
                  <span>&bull;</span>
                  <span>{therapist.totalSessions || '500+ Sessions Completed'}</span>
                </div>
              </div>
            </div>

            {/* View Switcher Tabs */}
            <div className="flex gap-2 mt-6 pt-2 border-t border-white/10">
              <button
                onClick={() => setActiveTab('profile')}
                className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  activeTab === 'profile'
                    ? 'bg-white text-[#083058] shadow-sm'
                    : 'text-white/80 hover:bg-white/10'
                }`}
              >
                Therapist Full Profile
              </button>
              <button
                onClick={() => setActiveTab('enquiry')}
                className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  activeTab === 'enquiry'
                    ? 'bg-white text-[#083058] shadow-sm'
                    : 'text-white/80 hover:bg-white/10'
                }`}
              >
                Send Enquiry
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 overflow-y-auto flex-1 space-y-6">
            
            {activeTab === 'profile' ? (
              <div className="space-y-6">
                
                {/* 1. About Therapist */}
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    About Therapist
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    {therapist.about || therapist.bio || 'Dedicated clinical psychologist with expertise in anxiety, stress, emotional stability and interpersonal relationships. Committed to safe, non-judgmental guidance.'}
                  </p>
                </div>

                {/* 2. Key Clinical Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-3">
                    <GraduationCap className="text-[#00839a] shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="text-[11px] font-bold text-slate-400 uppercase">Qualification</p>
                      <p className="font-bold text-slate-800 mt-0.5">{therapist.qualification || 'M.A. Psychology, M.Phil Clinical'}</p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-3">
                    <Award className="text-[#00839a] shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="text-[11px] font-bold text-slate-400 uppercase">Specialization</p>
                      <p className="font-bold text-slate-800 mt-0.5">{therapist.specialization || therapist.specialties || 'Anxiety & Relationship Therapy'}</p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-3">
                    <Video className="text-[#00839a] shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="text-[11px] font-bold text-slate-400 uppercase">Session Mode</p>
                      <p className="font-bold text-slate-800 mt-0.5">{therapist.sessionMode || 'Online / In-Person / Both'}</p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-3">
                    <Clock className="text-[#00839a] shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="text-[11px] font-bold text-slate-400 uppercase">Duration &amp; Schedule</p>
                      <p className="font-bold text-slate-800 mt-0.5">{therapist.sessionDuration || '45–60 Minutes'} &bull; {therapist.availability || 'Mon–Sat, 10 AM–8 PM'}</p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-3 sm:col-span-2">
                    <Globe className="text-[#00839a] shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="text-[11px] font-bold text-slate-400 uppercase">Languages Spoken</p>
                      <p className="font-bold text-slate-800 mt-0.5">{languagesList.join(' &bull; ')}</p>
                    </div>
                  </div>
                </div>

                {/* 3. Expertise / Treats Tags */}
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Expertise / Concerns Treated
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {treatsList.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-[#00839a]/10 text-[#00839a] text-xs font-semibold rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 4. Age Groups & Therapy Methods */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Age Groups
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {ageGroupsList.map((grp, i) => (
                        <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md">
                          {grp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Therapy Methods
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {therapyMethodsList.map((method, i) => (
                        <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md">
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            ) : (
              /* ENQUIRY FORM */
              <div className="space-y-4">
                {enquirySuccess ? (
                  <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-100 space-y-3">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={24} />
                    </div>
                    <h4 className="text-base font-bold text-emerald-900">Enquiry Sent Successfully!</h4>
                    <p className="text-xs text-emerald-700 max-w-sm mx-auto">
                      Thank you. Our care coordination team and {therapist.name} have received your enquiry. We will reach out to you within 2-4 hours.
                    </p>
                    <button
                      onClick={() => { setEnquirySuccess(false); setActiveTab('profile'); }}
                      className="mt-3 px-5 py-2 text-xs font-bold text-white bg-[#083058] rounded-xl hover:bg-[#0c4a6e] transition-colors cursor-pointer"
                    >
                      Back to Profile
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleEnquirySubmit} className="space-y-4">
                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs">
                      <p className="font-bold text-[#083058]">Enquiring about therapy with {therapist.name}</p>
                      <p className="text-slate-500 text-[11px] mt-0.5">Ask questions about session timing, methods, or suitability before booking.</p>
                    </div>

                    {enquiryError && (
                      <p className="text-xs text-rose-600 font-semibold bg-rose-50 p-2.5 rounded-lg border border-rose-200">
                        {enquiryError}
                      </p>
                    )}

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={enquiryForm.name}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                        placeholder="Enter your name"
                        required
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#00839a] focus:bg-white"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={enquiryForm.email}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                          placeholder="name@example.com"
                          required
                          className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#00839a] focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          value={enquiryForm.phone}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#00839a] focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Your Concern or Question <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        rows={3}
                        value={enquiryForm.message}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                        placeholder="Briefly describe what you'd like guidance with..."
                        required
                        className="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#00839a] focus:bg-white resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={enquiryLoading}
                      className="w-full py-3 rounded-xl font-bold text-xs text-white bg-[#083058] hover:bg-[#0c4a6e] transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <Send size={15} />
                      <span>{enquiryLoading ? 'Submitting Enquiry...' : 'Submit Enquiry'}</span>
                    </button>
                  </form>
                )}
              </div>
            )}

          </div>

          {/* Modal Footer Bar */}
          <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <p className="text-[11px] text-slate-400 font-semibold uppercase">Consultation Fee</p>
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg font-bold text-[#083058]">{therapist.startingPrice || (therapist.pricePerSession ? `₹${therapist.pricePerSession}` : '₹499/session')}</span>
                <span className="text-[11px] text-slate-500">/ 50-60 min</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={() => setActiveTab('enquiry')}
                className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors cursor-pointer"
              >
                Send Enquiry
              </button>
              <button
                onClick={handleBook}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-[#083058] hover:bg-[#0c4a6e] rounded-xl shadow-md transition-all cursor-pointer"
              >
                <span>Book Session</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
