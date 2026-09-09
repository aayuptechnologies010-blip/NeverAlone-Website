import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  MessageSquare,
  Search,
  CreditCard,
  Clock,
  User,
  ShieldCheck,
  Settings,
  LogOut,
  X,
} from 'lucide-react';

const sidebarLinks = [
  { to: '/dashboard', label: 'Overview', icon: LayoutDashboard, end: true },
  { to: '/dashboard/conversations', label: 'My Conversations', icon: MessageSquare },
  { to: '/categories', label: 'Find Someone', icon: Search },
  { to: '/dashboard/plan', label: 'My Plan', icon: CreditCard },
  { to: '/dashboard/call-history', label: 'Call History', icon: Clock },
  { to: '/dashboard/profile', label: 'Profile', icon: User },
  { to: '/dashboard/support', label: 'Safety & Support', icon: ShieldCheck },
  { to: '/dashboard/settings', label: 'Settings', icon: Settings },
];

export default function DashboardSidebar({ onLinkClick }) {
  const navigate = useNavigate();

  return (
    <nav className="flex flex-col h-full px-4 py-6">
      {/* Logo + close button on mobile */}
      <div className="flex items-center justify-between mb-8 px-1">
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-romantic-DEFAULT to-electric-DEFAULT flex items-center justify-center">
            <span className="text-white font-semibold text-sm">NA</span>
          </div>
          <span className="text-lg font-semibold text-white tracking-wide">
            Never Alone
          </span>
        </button>

        {/* Only visible when used inside mobile drawer */}
        {onLinkClick && (
          <button
            onClick={onLinkClick}
            className="md:hidden text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Links */}
      <ul className="flex-1 space-y-1">
        {sidebarLinks.map((link) => {
          const Icon = link.icon;
          return (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-romantic-DEFAULT/20 to-dream-purple/20 text-white border border-white/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`
                }
                onClick={onLinkClick}
              >
                <Icon className="w-[18px] h-[18px] flex-shrink-0" />
                {link.label}
              </NavLink>
            </li>
          );
        })}
      </ul>

      {/* Sign out */}
      <button
        onClick={() => {
          console.log('Sign out – placeholder');
          if (onLinkClick) onLinkClick();
        }}
        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors mt-4"
      >
        <LogOut className="w-[18px] h-[18px]" />
        Sign Out
      </button>
    </nav>
  );
}
