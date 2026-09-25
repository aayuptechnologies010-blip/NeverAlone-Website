import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, Sparkles, LayoutDashboard, HelpCircle } from 'lucide-react';

export default function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-brand-950/90 backdrop-blur-lg border-t border-white/10 px-3 py-2 sm:hidden flex items-center justify-around shadow-2xl">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 text-[10px] font-medium transition-colors ${
            isActive ? 'text-electric-cyan' : 'text-gray-400 hover:text-white'
          }`
        }
      >
        <Home size={18} />
        <span>Home</span>
      </NavLink>

      <NavLink
        to="/first-session"
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 text-[10px] font-medium transition-colors ${
            isActive ? 'text-romantic-pink' : 'text-gray-400 hover:text-white'
          }`
        }
      >
        <Sparkles size={18} />
        <span>₹797 Session</span>
      </NavLink>

      <NavLink
        to="/companions"
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 text-[10px] font-medium transition-colors ${
            isActive ? 'text-electric-cyan' : 'text-gray-400 hover:text-white'
          }`
        }
      >
        <Users size={18} />
        <span>Companions</span>
      </NavLink>

      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 text-[10px] font-medium transition-colors ${
            isActive ? 'text-electric-cyan' : 'text-gray-400 hover:text-white'
          }`
        }
      >
        <LayoutDashboard size={18} />
        <span>Dashboard</span>
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 text-[10px] font-medium transition-colors ${
            isActive ? 'text-electric-cyan' : 'text-gray-400 hover:text-white'
          }`
        }
      >
        <HelpCircle size={18} />
        <span>Support</span>
      </NavLink>
    </nav>
  );
}
