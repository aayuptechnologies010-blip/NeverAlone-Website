import React, { useState } from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, MessageSquare, CalendarDays, Clock,
  DollarSign, User, ShieldCheck, BookOpen, LogOut, Menu, X, Bell
} from 'lucide-react';
import { demoCompanion, demoNotifications } from '../../data/companionDashboardData';
import { CompanionDashboardProvider, useCompanionDashboard } from './CompanionDashboardContext';

const navLinks = [
  { to: '/companion/dashboard', icon: LayoutDashboard, label: 'Overview', end: true },
  { to: '/companion/conversations', icon: MessageSquare, label: 'Conversations' },
  { to: '/companion/schedule', icon: CalendarDays, label: 'Schedule' },
  { to: '/companion/availability', icon: Clock, label: 'Availability' },
  { to: '/companion/earnings', icon: DollarSign, label: 'Earnings' },
  { to: '/companion/profile', icon: User, label: 'Profile' },
  { to: '/companion/safety', icon: ShieldCheck, label: 'Safety & Support' },
];

export default function CompanionDashboardLayout() {
  return (
    <CompanionDashboardProvider>
      <CompanionDashboardShell />
    </CompanionDashboardProvider>
  );
}

function CompanionDashboardShell() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAvailable, setIsAvailable } = useCompanionDashboard();
  const [showNotifs, setShowNotifs] = useState(false);
  const unreadCount = demoNotifications.filter((n) => !n.read).length;
  const canSetAvailable = demoCompanion.status === 'approved';

  const greeting = () => {
    const h = new Date().getHours();
    if (h < 12) return 'Good morning';
    if (h < 17) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="min-h-screen bg-brand-950 font-sans text-warm-white flex">
      
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-60 flex-shrink-0 border-r border-white/5 bg-brand-950 fixed inset-y-0 left-0 z-40">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-white/5">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-lg font-semibold text-white">Never Alone</span>
          </Link>
        </div>
        <div className="px-6 py-3">
          <span className="text-[10px] font-semibold text-electric-cyan uppercase tracking-[0.2em]">Companion</span>
        </div>

        <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
          {navLinks.map(link => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive ? 'bg-white/10 text-electric-cyan' : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <Icon className="w-[18px] h-[18px]" />
                {link.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="border-t border-white/5 px-3 py-4 space-y-1">
          <Link to="/companion/training" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
            <BookOpen className="w-[18px] h-[18px]" />
            Training
          </Link>
          <button className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors w-full text-left">
            <LogOut className="w-[18px] h-[18px]" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="fixed inset-y-0 left-0 w-72 bg-brand-950 border-r border-white/10 z-50 lg:hidden flex flex-col"
            >
              <div className="h-16 flex items-center justify-between px-6 border-b border-white/5">
                <span className="text-lg font-semibold text-white">Never Alone</span>
                <button onClick={() => setMobileOpen(false)} className="text-gray-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="px-6 py-3">
                <span className="text-[10px] font-semibold text-electric-cyan uppercase tracking-[0.2em]">Companion</span>
              </div>
              <nav className="flex-1 px-3 py-2 space-y-1">
                {navLinks.map(link => {
                  const Icon = link.icon;
                  return (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      end={link.end}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                          isActive ? 'bg-white/10 text-electric-cyan' : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`
                      }
                    >
                      <Icon className="w-[18px] h-[18px]" />
                      {link.label}
                    </NavLink>
                  );
                })}
              </nav>
              <div className="border-t border-white/5 px-3 py-4 space-y-1">
                <Link to="/companion/training" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                  <BookOpen className="w-[18px] h-[18px]" />
                  Training
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main area */}
      <div className="flex-1 lg:ml-60 flex flex-col min-h-screen">
        
        {/* Header */}
        <header className="sticky top-0 z-30 bg-brand-950/90 backdrop-blur-xl border-b border-white/5">
          <div className="flex items-center justify-between px-4 md:px-8 h-16">
            <div className="flex items-center gap-4">
              <button onClick={() => setMobileOpen(true)} className="lg:hidden text-gray-400 hover:text-white">
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <h2 className="text-base font-semibold text-white">{greeting()}, {demoCompanion.firstName}</h2>
                <p className="text-xs text-gray-500 hidden sm:block">Here's what your conversation schedule looks like.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Status toggle */}
              {canSetAvailable ? (
                <button
                  onClick={() => setIsAvailable(!isAvailable)}
                  aria-pressed={isAvailable}
                  className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors focus:outline-none focus:ring-2 focus:ring-electric-cyan ${
                    isAvailable
                      ? 'border-green-500/30 bg-green-500/10 text-green-400'
                      : 'border-gray-600 bg-white/5 text-gray-500'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isAvailable ? 'bg-green-400' : 'bg-gray-600'}`} />
                  {isAvailable ? 'Available' : 'Unavailable'}
                </button>
              ) : (
                <span className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border border-yellow-500/30 bg-yellow-500/10 text-yellow-400">
                  Not Active
                </span>
              )}

              {/* Notifications */}
              <div className="relative">
                <button onClick={() => setShowNotifs(!showNotifs)} className="relative text-gray-400 hover:text-white p-2 rounded-xl hover:bg-white/5 transition-colors">
                  <Bell className="w-5 h-5" />
                  {unreadCount > 0 && (
                    <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-electric-cyan text-brand-950 text-[10px] font-semibold flex items-center justify-center">{unreadCount}</span>
                  )}
                </button>
                <AnimatePresence>
                  {showNotifs && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 top-12 w-80 bg-brand-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50"
                    >
                      <div className="p-4 border-b border-white/5">
                        <p className="text-sm font-semibold text-white">Notifications</p>
                      </div>
                      {demoNotifications.length > 0 ? (
                        <div className="max-h-64 overflow-y-auto">
                          {demoNotifications.map(n => (
                            <div key={n.id} className={`px-4 py-3 border-b border-white/5 ${!n.read ? 'bg-electric-cyan/5' : ''}`}>
                              <p className="text-sm text-gray-300">{n.text}</p>
                              <p className="text-xs text-gray-500 mt-1">{n.time}</p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="p-6 text-center text-sm text-gray-500">You're all caught up.</div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Avatar */}
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold text-electric-cyan">
                {demoCompanion.firstName[0]}
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
