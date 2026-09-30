import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown, User, Settings, CreditCard, LogOut } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { demoUser } from '../../data/dashboardDemo';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

export default function DashboardHeader({ onMenuClick }) {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const currentUser = auth.currentUser;

  const displayName = currentUser?.displayName || demoUser.firstName;
  const displayEmail = currentUser?.email || demoUser.email;
  const avatarUrl = currentUser?.photoURL || demoUser.avatar;

  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (e) {
      console.error(e);
    }
    navigate('/signin');
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-brand-950/90 backdrop-blur-md border-b border-white/10">
      {/* Hamburger */}
      <button onClick={onMenuClick} className="text-gray-300 hover:text-white">
        <Menu className="w-6 h-6" />
      </button>

      {/* Center logo */}
      <Link to="/dashboard" className="flex items-center space-x-2">
        <div className="bg-white rounded-lg p-1 shadow-sm flex items-center justify-center border border-white/30">
          <img src="/logo.png" alt="Neuravia Logo" className="h-6 w-auto max-w-[120px] object-contain rounded" />
        </div>
      </Link>

      {/* Profile dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2"
        >
          <img
            src={avatarUrl}
            alt={displayName}
            className="w-8 h-8 rounded-full object-cover border border-white/20"
          />
          <ChevronDown className="w-4 h-4 text-gray-400 hidden sm:block" />
        </button>

        <AnimatePresence>
          {dropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 mt-2 w-52 bg-brand-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl py-2 z-50"
            >
              <div className="px-4 py-3 border-b border-white/10">
                <p className="text-sm font-medium text-white truncate">{displayName}</p>
                <p className="text-xs text-gray-400 truncate">{displayEmail}</p>
              </div>

              <Link
                to="/dashboard/profile"
                onClick={() => setDropdownOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                <User className="w-4 h-4" /> Profile
              </Link>
              <Link
                to="/dashboard/settings"
                onClick={() => setDropdownOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                <Settings className="w-4 h-4" /> Settings
              </Link>
              <Link
                to="/dashboard/plan"
                onClick={() => setDropdownOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                <CreditCard className="w-4 h-4" /> My Plan
              </Link>

              <div className="border-t border-white/10 mt-1">
                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    handleSignOut();
                  }}
                  className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-400 hover:text-red-300 hover:bg-white/5 transition-colors"
                >
                  <LogOut className="w-4 h-4" /> Sign Out
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
