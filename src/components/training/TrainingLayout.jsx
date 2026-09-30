import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Home, BookOpen, BarChart3, FileText } from 'lucide-react';
import { useTraining } from './TrainingContext';

const sidebarLinks = [
  { to: '/companion/training', icon: Home, label: 'Overview', end: true },
  { to: '/companion/training/modules', icon: BookOpen, label: 'Modules' },
  { to: '/companion/training/progress', icon: BarChart3, label: 'Progress' },
  { to: '/companion/training/guidelines', icon: FileText, label: 'Guidelines' },
];

export default function TrainingLayout() {
  const { completedCount, requiredCount } = useTraining();
  const pct = Math.round((completedCount / requiredCount) * 100);

  return (
    <div className="min-h-screen bg-brand-950 font-sans text-warm-white flex flex-col">
      
      {/* Top bar (mobile + desktop) */}
      <header className="sticky top-0 z-50 bg-brand-950/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold text-white">Companion Training</span>
            <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-electric-cyan/10 text-electric-cyan text-xs font-semibold">
              {pct}%
            </span>
          </div>
          <NavLink to="/" className="text-sm text-gray-400 hover:text-white transition-colors">
            ← Back to Neuravia
          </NavLink>
        </div>
        
        {/* Mobile nav */}
        <nav className="md:hidden flex border-t border-white/5 overflow-x-auto">
          {sidebarLinks.map(link => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `flex-1 flex flex-col items-center gap-1 py-3 px-2 text-xs font-semibold transition-colors whitespace-nowrap ${
                    isActive ? 'text-electric-cyan border-b-2 border-electric-cyan' : 'text-gray-500'
                  }`
                }
              >
                <Icon className="w-4 h-4" />
                {link.label}
              </NavLink>
            );
          })}
        </nav>
      </header>

      <div className="flex flex-1 max-w-7xl mx-auto w-full">
        
        {/* Desktop sidebar */}
        <aside className="hidden md:flex flex-col w-56 flex-shrink-0 border-r border-white/5 py-8 px-4 gap-2">
          {sidebarLinks.map(link => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive ? 'bg-white/10 text-electric-cyan' : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <Icon className="w-4 h-4" />
                {link.label}
              </NavLink>
            );
          })}
          
          {/* Sidebar progress */}
          <div className="mt-auto pt-8 px-2">
            <p className="text-xs text-gray-500 mb-2">Progress</p>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-electric-cyan rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
            </div>
            <p className="text-xs text-gray-500 mt-2">{completedCount} of {requiredCount} modules</p>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 py-8 px-4 md:px-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
