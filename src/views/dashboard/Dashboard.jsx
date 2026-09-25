import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  demoUser,
  nextConversation,
  dailyUsage,
  demoPlan,
  summaryCounts,
  recentConversations,
} from '../../data/dashboardDemo';

import NextConversationCard from '../../components/dashboard/NextConversationCard';
import DailyTimeCard from '../../components/dashboard/DailyTimeCard';
import CurrentPlanCard from '../../components/dashboard/CurrentPlanCard';
import ExtraTimeCard from '../../components/dashboard/ExtraTimeCard';
import QuickActions from '../../components/dashboard/QuickActions';
import ConversationSummary from '../../components/dashboard/ConversationSummary';
import RecentConversations from '../../components/dashboard/RecentConversations';
import EmotionalCard from '../../components/dashboard/EmotionalCard';
import ExtraTimeModal from '../../components/dashboard/ExtraTimeModal';
import MoodTrackerCard from '../../components/dashboard/MoodTrackerCard';

import { auth } from '../../firebase';

// Determines greeting based on current hour.
function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  return 'Good evening';
}

export default function Dashboard() {
  const [extraTimeOpen, setExtraTimeOpen] = useState(false);
  const currentUser = auth.currentUser;
  
  // Extract first name from authenticated user displayName or email
  const userName = currentUser?.displayName 
    ? currentUser.displayName.split(' ')[0] 
    : (currentUser?.email ? currentUser.email.split('@')[0] : demoUser.firstName);

  return (
    <>
      {/* ── Welcome ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          {getGreeting()}, {userName} 👋
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Here's what's happening with your conversations.
        </p>
      </motion.div>

      {/* ── Next Conversation (hero card) ── */}
      <div className="mb-8">
        <NextConversationCard conversation={nextConversation} />
      </div>

      {/* ── Two-column grid: Time + Plan ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <DailyTimeCard
          totalMinutes={dailyUsage.totalMinutes}
          usedMinutes={dailyUsage.usedMinutes}
        />
        <CurrentPlanCard plan={demoPlan} />
      </div>

      {/* ── Extra Time ── */}
      <div className="mb-8">
        <ExtraTimeCard
          price={demoPlan.extraTimePrice}
          duration={demoPlan.extraTimeDuration}
          onAddTime={() => setExtraTimeOpen(true)}
        />
      </div>

      {/* ── Daily Mood Journal ── */}
      <div className="mb-8">
        <MoodTrackerCard />
      </div>

      {/* ── Quick Actions ── */}
      <div className="mb-8">
        <QuickActions />
      </div>

      {/* ── Conversation Summary ── */}
      <div className="mb-8">
        <ConversationSummary counts={summaryCounts} />
      </div>

      {/* ── Recent Conversations ── */}
      <div className="mb-8">
        <RecentConversations conversations={recentConversations} />
      </div>

      {/* ── Emotional Card ── */}
      <div className="mb-4">
        <EmotionalCard />
      </div>

      {/* ── Extra-Time Modal ── */}
      <ExtraTimeModal
        isOpen={extraTimeOpen}
        onClose={() => setExtraTimeOpen(false)}
        price={demoPlan.extraTimePrice}
        duration={demoPlan.extraTimeDuration}
      />
    </>
  );
}
