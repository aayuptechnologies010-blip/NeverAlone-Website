import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Calendar, Shield, Bell, Check, Edit2, LogOut } from 'lucide-react';
import { demoUser } from '../../data/dashboardDemo';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  const navigate = useNavigate();
  const currentUser = auth.currentUser;
  
  const [profile, setProfile] = useState({
    name: currentUser?.displayName || demoUser.firstName,
    email: currentUser?.email || demoUser.email,
    phone: currentUser?.phoneNumber || '+91 98765 43210',
    memberSince: demoUser.memberSince,
    anonymousMode: true,
    callNotifications: true,
  });

  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (e) {
      console.error(e);
    }
    navigate('/signin');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-white">Your Profile</h1>
        <p className="text-sm text-gray-400 mt-1">
          Manage your personal details, privacy preferences and account security.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* User Card */}
        <div className="bg-brand-900/80 border border-white/10 rounded-3xl p-6 text-center flex flex-col items-center justify-between">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-pink-500 to-cyan-400 p-1 mb-4 shadow-xl">
              {currentUser?.photoURL ? (
                <img src={currentUser.photoURL} alt="Avatar" className="w-full h-full rounded-full object-cover" />
              ) : (
                <div className="w-full h-full rounded-full bg-brand-950 flex items-center justify-center text-3xl font-bold text-white">
                  {(profile.name || 'U')[0].toUpperCase()}
                </div>
              )}
            </div>
            <h2 className="text-xl font-bold text-white">{profile.name}</h2>
            <p className="text-xs text-electric-cyan font-medium mt-1">Verified Member</p>
            <p className="text-xs text-gray-400 mt-3">Member since {profile.memberSince}</p>
          </div>

          <div className="w-full pt-6 border-t border-white/5 space-y-2 mt-6">
            <button
              onClick={handleSignOut}
              className="w-full py-2.5 px-4 rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 hover:bg-red-500/20 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <LogOut size={14} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Profile Edit Form */}
        <div className="md:col-span-2 bg-brand-900/80 border border-white/10 rounded-3xl p-6 md:p-8">
          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Display Name
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-brand-950 border border-white/10 text-white text-sm focus:outline-none focus:border-electric-cyan"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-brand-950 border border-white/10 text-white text-sm focus:outline-none focus:border-electric-cyan"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Phone Number (Private & Encrypted)
              </label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                <input
                  type="text"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-brand-950 border border-white/10 text-white text-sm focus:outline-none focus:border-electric-cyan"
                />
              </div>
            </div>

            {/* Privacy Toggles */}
            <div className="pt-4 border-t border-white/5 space-y-4">
              <h3 className="text-sm font-semibold text-white">Privacy & Communication</h3>
              
              <div className="flex items-center justify-between p-4 bg-brand-950/60 rounded-2xl border border-white/5">
                <div>
                  <h4 className="text-sm font-medium text-white">Anonymous Voice Caller ID</h4>
                  <p className="text-xs text-gray-400">Keep your real phone number masked during all calls</p>
                </div>
                <input
                  type="checkbox"
                  checked={profile.anonymousMode}
                  onChange={(e) => setProfile({ ...profile, anonymousMode: e.target.checked })}
                  className="w-5 h-5 accent-pink-600 rounded"
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-brand-950/60 rounded-2xl border border-white/5">
                <div>
                  <h4 className="text-sm font-medium text-white">SMS / Call Reminders</h4>
                  <p className="text-xs text-gray-400">Receive 15-minute alert before scheduled sessions</p>
                </div>
                <input
                  type="checkbox"
                  checked={profile.callNotifications}
                  onChange={(e) => setProfile({ ...profile, callNotifications: e.target.checked })}
                  className="w-5 h-5 accent-pink-600 rounded"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                type="submit"
                className="py-3 px-8 rounded-full font-bold text-sm text-brand-950 bg-gradient-to-r from-electric-cyan to-blue-400 hover:opacity-95 transition-all shadow-lg"
              >
                Save Changes
              </button>

              {saved && (
                <span className="text-xs text-green-400 flex items-center gap-1 font-medium animate-fade-in">
                  <Check size={14} /> Profile updated successfully
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
