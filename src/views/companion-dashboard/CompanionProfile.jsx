import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UploadCloud, FileCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { demoCompanion } from '../../data/companionDashboardData';

export default function CompanionProfile() {
  const [profile, setProfile] = useState({ ...demoCompanion });
  const [showPreview, setShowPreview] = useState(false);
  const [saved, setSaved] = useState(false);

  const update = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }));
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">My Companion Profile</h1>
          <p className="text-gray-400">Manage how you appear to customers.</p>
        </div>
        <button onClick={() => setShowPreview(!showPreview)} className="px-4 py-2 rounded-xl text-sm font-semibold text-electric-cyan bg-electric-cyan/10 border border-electric-cyan/20 hover:bg-electric-cyan/20 transition-colors">
          {showPreview ? 'Edit Profile' : 'Preview Customer View'}
        </button>
      </div>

      {showPreview ? (
        /* Profile Preview */
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center text-2xl font-bold text-electric-cyan">
              {profile.firstName[0]}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold text-white">{profile.firstName}</h3>
                <CheckCircle2 className="w-5 h-5 text-electric-cyan" />
              </div>
              <p className="text-sm text-gray-400">{profile.conversationStyle}</p>
            </div>
          </div>
          <div className="space-y-6">
            <ProfileField label="Languages" value={profile.languages.join(', ')} />
            <ProfileField label="Interests" value={profile.interests.join(', ')} />
            <ProfileField label="About" value={profile.introduction} />
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Categories</p>
              <div className="flex flex-wrap gap-2">
                {profile.categories.filter(c => c.enabled).map(c => (
                  <span key={c.id} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">{c.label}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Edit mode */
        <div className="space-y-6">
          {/* Photo */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Profile Photo</h3>
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center text-2xl font-bold text-electric-cyan">
                {profile.firstName[0]}
              </div>
              <label className="px-4 py-2 rounded-xl text-sm font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">
                Change Photo
                <input type="file" accept="image/*" className="hidden" />
              </label>
            </div>
          </div>

          {/* Basic info */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest">Basic Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <EditField label="First Name" value={profile.firstName} onChange={(v) => update('firstName', v)} />
              <EditField label="Last Name" value={profile.lastName} onChange={(v) => update('lastName', v)} />
            </div>
            <div>
              <label className="block text-xs text-gray-400 font-medium mb-1">Languages</label>
              <div className="flex flex-wrap gap-2">
                {['English', 'Hindi', 'Spanish', 'French'].map(lang => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => {
                      const langs = profile.languages.includes(lang) ? profile.languages.filter(l => l !== lang) : [...profile.languages, lang];
                      update('languages', langs);
                    }}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                      profile.languages.includes(lang) ? 'bg-electric-cyan text-brand-950 border-electric-cyan' : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/30'
                    }`}
                  >{lang}</button>
                ))}
              </div>
            </div>
            <EditField label="Conversation Style" value={profile.conversationStyle} onChange={(v) => update('conversationStyle', v)} />
          </div>

          {/* About */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">About</h3>
            <textarea
              value={profile.introduction}
              onChange={(e) => update('introduction', e.target.value)}
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-electric-cyan/50 resize-none"
            />
          </div>

          {/* Categories */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Conversation Categories</h3>
            <div className="space-y-3">
              {profile.categories.map(cat => (
                <div key={cat.id} className="flex items-center justify-between bg-brand-950 border border-white/10 rounded-xl p-4">
                  <span className={`text-sm font-medium ${cat.enabled ? 'text-white' : 'text-gray-500'}`}>{cat.label}</span>
                  {cat.id === 'flirty' ? (
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${
                      cat.status === 'Approved' ? 'text-green-400 bg-green-500/10 border-green-500/20' :
                      cat.status === 'Training Required' ? 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20' :
                      'text-gray-500 bg-white/5 border-white/10'
                    }`}>{cat.status || 'Not Enabled'}</span>
                  ) : (
                    <span className={`text-xs font-bold ${cat.enabled ? 'text-green-400' : 'text-gray-600'}`}>
                      {cat.enabled ? 'Active' : 'Inactive'}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Verification & Training */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-xs text-gray-500 uppercase font-bold mb-2">Verification</p>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-electric-cyan" />
                <span className="text-sm text-white font-medium">{profile.verificationStatus}</span>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-xs text-gray-500 uppercase font-bold mb-2">Training</p>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">Core: {profile.coreTraining}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center ${profile.flirtyTraining === 'Completed' ? 'text-green-400' : 'text-gray-600'}`}>
                    {profile.flirtyTraining === 'Completed' ? <CheckCircle2 className="w-4 h-4" /> : <span className="w-2 h-2 rounded-full bg-gray-600" />}
                  </span>
                  <span className="text-sm text-gray-400">Flirty: {profile.flirtyTraining}</span>
                </div>
              </div>
              <Link to="/companion/training" className="text-xs text-electric-cyan hover:text-white transition-colors font-semibold mt-3 inline-block">
                Review Training →
              </Link>
            </div>
          </div>

          {/* Important notice */}
          <div className="bg-electric-cyan/5 border border-electric-cyan/20 rounded-xl p-4 flex gap-3">
            <AlertCircle className="w-5 h-5 text-electric-cyan flex-shrink-0 mt-0.5" />
            <p className="text-xs text-gray-400">Regular companions are not therapists. Do not add unverified professional titles to your profile.</p>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={handleSave} className="px-8 py-3 rounded-xl text-sm font-bold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors">
              Save Profile
            </button>
            {saved && <span className="text-sm text-green-400 font-medium">Saved (frontend demo)</span>}
          </div>
        </div>
      )}
    </motion.div>
  );
}

function EditField({ label, value, onChange }) {
  return (
    <div>
      <label className="block text-xs text-gray-400 font-medium mb-1">{label}</label>
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-electric-cyan/50" />
    </div>
  );
}

function ProfileField({ label, value }) {
  return (
    <div>
      <p className="text-xs text-gray-500 uppercase font-semibold mb-1">{label}</p>
      <p className="text-sm text-gray-300">{value}</p>
    </div>
  );
}
