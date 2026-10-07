import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Calendar, Shield, Bell, Check, Edit2, LogOut, Loader2, AlertCircle } from 'lucide-react';
import { demoUser } from '../../data/dashboardDemo';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { getUserProfile, updateUserProfile, syncUserProfile } from '../../services/userService';

export default function ProfilePage() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(auth.currentUser);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    memberSince: 'Recently',
    anonymousMode: true,
    callNotifications: true,
    plan: 'Free Trial',
    photoURL: ''
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      if (user) {
        try {
          // Fetch existing Firestore data or sync it
          let data = await getUserProfile(user.uid);
          if (!data) {
            data = await syncUserProfile(user);
          }
          if (data) {
            setProfile({
              name: data.name || user.displayName || 'Member',
              email: data.email || user.email || '',
              phone: data.phone || user.phoneNumber || '',
              memberSince: data.memberSince || 'Recently',
              anonymousMode: data.anonymousMode !== undefined ? data.anonymousMode : true,
              callNotifications: data.callNotifications !== undefined ? data.callNotifications : true,
              plan: data.plan || 'Standard',
              photoURL: data.photoURL || user.photoURL || ''
            });
          }
        } catch (err) {
          console.error("Error loading profile data:", err);
        }
      } else {
        // Fallback for demo when not authenticated
        setProfile({
          name: demoUser.firstName,
          email: demoUser.email,
          phone: '+91 98765 43210',
          memberSince: demoUser.memberSince,
          anonymousMode: true,
          callNotifications: true,
          plan: 'Standard',
          photoURL: ''
        });
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    setError('');
    setSaving(true);
    try {
      if (currentUser?.uid) {
        await updateUserProfile(currentUser.uid, {
          name: profile.name,
          phone: profile.phone,
          anonymousMode: profile.anonymousMode,
          callNotifications: profile.callNotifications
        });
      }
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err) {
      console.error("Failed to update profile:", err);
      setError("Failed to save changes. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (e) {
      console.error(e);
    }
    navigate('/signin');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24 text-gray-400">
        <Loader2 className="w-8 h-8 animate-spin text-electric-cyan" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-white font-display">Your Profile</h1>
        <p className="text-sm text-gray-400 mt-1">
          Manage your personal details, privacy preferences and account security.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* User Card */}
        <div className="bg-brand-900/80 border border-white/10 rounded-3xl p-6 text-center flex flex-col items-center justify-between shadow-xl">
          <div className="flex flex-col items-center w-full">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-pink-500 to-cyan-400 p-1 mb-4 shadow-xl">
              {profile.photoURL || currentUser?.photoURL ? (
                <img src={profile.photoURL || currentUser?.photoURL} alt="Avatar" className="w-full h-full rounded-full object-cover" />
              ) : (
                <div className="w-full h-full rounded-full bg-brand-950 flex items-center justify-center text-3xl font-bold text-white">
                  {(profile.name || 'U')[0]?.toUpperCase()}
                </div>
              )}
            </div>
            <h2 className="text-xl font-bold text-white truncate w-full">{profile.name}</h2>
            <div className="inline-block mt-1 px-3 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-full">
              {profile.plan || 'Verified Member'}
            </div>
            <p className="text-xs text-gray-400 mt-3">Member since {profile.memberSince}</p>
          </div>

          <div className="w-full pt-6 border-t border-white/5 space-y-2 mt-6">
            <button
              onClick={handleSignOut}
              className="w-full py-2.5 px-4 rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 hover:bg-red-500/20 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <LogOut size={14} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Profile Edit Form */}
        <div className="md:col-span-2 bg-brand-900/80 border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl">
          {error && (
            <div className="mb-6 p-3.5 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-2.5 text-xs text-red-400">
              <AlertCircle size={16} className="shrink-0" />
              <span>{error}</span>
            </div>
          )}

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
                    required
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-brand-950 border border-white/10 text-white text-sm focus:outline-none focus:border-electric-cyan transition-colors"
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
                    disabled
                    value={profile.email}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-brand-950/60 border border-white/5 text-gray-400 text-sm focus:outline-none cursor-not-allowed"
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
                  placeholder="+91 98765 43210"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-brand-950 border border-white/10 text-white text-sm focus:outline-none focus:border-electric-cyan transition-colors"
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
                  className="w-5 h-5 accent-pink-600 rounded cursor-pointer"
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
                  className="w-5 h-5 accent-pink-600 rounded cursor-pointer"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                type="submit"
                disabled={saving}
                className="py-3 px-8 rounded-full font-bold text-sm text-brand-950 bg-gradient-to-r from-electric-cyan to-blue-400 hover:opacity-95 transition-all shadow-lg flex items-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                <span>{saving ? 'Saving...' : 'Save Changes'}</span>
              </button>

              {saved && (
                <span className="text-xs text-green-400 flex items-center gap-1 font-medium animate-fade-in">
                  <Check size={14} /> Profile updated in database
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
