import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';

// Layout component for the customer dashboard area.
// Desktop: fixed sidebar + scrollable main content.
// Mobile: top header bar + slide-in drawer.
export default function DashboardLayout() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-950 text-warm-white">
      {/* ── Desktop sidebar (fixed) ── */}
      <aside className="hidden md:flex md:flex-col fixed inset-y-0 left-0 w-60 z-30 border-r border-white/10 bg-brand-950/80 backdrop-blur-xl">
        <DashboardSidebar />
      </aside>

      {/* ── Mobile top bar ── */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-20">
        <DashboardHeader onMenuClick={() => setMobileNavOpen(true)} />
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileNavOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileNavOpen(false)}
            />
            {/* Drawer */}
            <motion.aside
              key="drawer"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 left-0 z-50 w-64 bg-brand-950 border-r border-white/10 backdrop-blur-xl"
            >
              <DashboardSidebar onLinkClick={() => setMobileNavOpen(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ── Main content area ── */}
      <main className="md:ml-60 min-h-screen pt-16 md:pt-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
