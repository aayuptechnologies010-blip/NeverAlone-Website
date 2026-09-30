import React, { useState } from 'react';
import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, Users, UserCircle, BriefcaseMedical, BookOpen,
  MessageSquare, CreditCard, Tag, DollarSign, ShieldAlert,
  Settings, Menu, X, Bell, LogOut, FileText
} from 'lucide-react';

export default function AdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate('/admin/login');
  };

  const navGroups = [
    {
      label: 'OVERVIEW',
      items: [{ to: '/admin', icon: LayoutDashboard, label: 'Dashboard', end: true }]
    },
    {
      label: 'PEOPLE',
      items: [
        { to: '/admin/customers', icon: Users, label: 'Customers' },
        { to: '/admin/companions', icon: UserCircle, label: 'Companions' },
        { to: '/admin/companion-applications', icon: FileText, label: 'Companion Apps' },
        { to: '/admin/professionals', icon: BriefcaseMedical, label: 'Professionals' },
        { to: '/admin/professional-applications', icon: FileText, label: 'Professional Apps' }
      ]
    },
    {
      label: 'OPERATIONS',
      items: [
        { to: '/admin/conversations', icon: MessageSquare, label: 'Conversations' },
        { to: '/admin/subscriptions', icon: CreditCard, label: 'Subscriptions' },
        { to: '/admin/categories', icon: Tag, label: 'Categories' },
        { to: '/admin/pricing', icon: DollarSign, label: 'Pricing' }
      ]
    },
    {
      label: 'FINANCE',
      items: [
        { to: '/admin/payments', icon: DollarSign, label: 'Payments' },
        { to: '/admin/refunds', icon: CreditCard, label: 'Refunds' }
      ]
    },
    {
      label: 'TRUST & SAFETY',
      items: [
        { to: '/admin/reports', icon: ShieldAlert, label: 'Reports' }
      ]
    },
    {
      label: 'SYSTEM',
      items: [
        { to: '/admin/settings', icon: Settings, label: 'Settings' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-brand-950 font-sans text-warm-white flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 flex-shrink-0 border-r border-white/5 bg-brand-900 fixed inset-y-0 left-0 z-40">
        <div className="h-16 flex items-center px-6 border-b border-white/5 gap-2.5">
          <div className="bg-white rounded-xl p-1 shadow-sm flex items-center justify-center border border-white/30">
            <img src="/logo.png" alt="Neuravia Logo" className="h-7 w-auto max-w-[130px] object-contain rounded" />
          </div>
        </div>
        <div className="px-6 py-3">
          <span className="text-[10px] font-semibold text-electric-cyan uppercase tracking-[0.2em] bg-electric-cyan/10 px-2 py-1 rounded">Admin</span>
        </div>

        <nav className="flex-1 px-4 py-2 overflow-y-auto space-y-6 hide-scrollbar">
          {navGroups.map((group, i) => (
            <div key={i}>
              <h4 className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-3 px-2">{group.label}</h4>
              <div className="space-y-1">
                {group.items.map(link => {
                  const Icon = link.icon;
                  return (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      end={link.end}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          isActive ? 'bg-white/10 text-electric-cyan' : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`
                      }
                    >
                      <Icon className="w-[18px] h-[18px]" />
                      {link.label}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="border-t border-white/5 p-4">
          <div className="flex items-center gap-3 mb-4 px-2">
            <div className="w-8 h-8 rounded-full bg-electric-cyan/20 flex items-center justify-center text-electric-cyan font-semibold text-sm">A</div>
            <div>
              <p className="text-sm font-semibold text-white">Admin User</p>
            </div>
          </div>
          <button onClick={handleSignOut} className="flex items-center gap-3 px-3 py-2 w-full text-left rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
            <LogOut className="w-[18px] h-[18px]" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Mobile Drawer (Truncated for brevity but functional) */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 z-50 lg:hidden" onClick={() => setMobileOpen(false)} />
            <motion.aside initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }} className="fixed inset-y-0 left-0 w-64 bg-brand-900 border-r border-white/10 z-50 lg:hidden flex flex-col overflow-y-auto">
              <div className="h-16 flex items-center justify-between px-6 border-b border-white/5">
                <span className="text-lg font-semibold text-white tracking-wide">Neuravia</span>
                <button onClick={() => setMobileOpen(false)} className="text-gray-400 hover:text-white"><X className="w-5 h-5" /></button>
              </div>
              <nav className="flex-1 px-4 py-4 space-y-6">
                {navGroups.map((group, i) => (
                  <div key={i}>
                    <h4 className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-3 px-2">{group.label}</h4>
                    <div className="space-y-1">
                      {group.items.map(link => {
                        const Icon = link.icon;
                        return (
                          <NavLink key={link.to} to={link.to} end={link.end} onClick={() => setMobileOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-white/10 text-electric-cyan' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                            <Icon className="w-[18px] h-[18px]" /> {link.label}
                          </NavLink>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        <header className="sticky top-0 z-30 bg-brand-950/80 backdrop-blur-lg border-b border-white/5 h-16 flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-4">
            <button onClick={() => setMobileOpen(true)} className="lg:hidden text-gray-400 hover:text-white">
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-lg font-semibold text-white hidden sm:block">Admin Portal</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-electric-cyan border border-brand-950"></span>
            </button>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
