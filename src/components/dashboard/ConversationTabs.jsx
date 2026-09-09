import React from 'react';
import { motion } from 'framer-motion';

const tabs = [
  { key: 'upcoming', label: 'Upcoming' },
  { key: 'completed', label: 'Completed' },
  { key: 'cancelled', label: 'Cancelled' },
  { key: 'all', label: 'All' },
];

// Animated tab strip with underline indicator.
export default function ConversationTabs({ activeTab, onTabChange }) {
  return (
    <div className="flex gap-1 border-b border-white/10 mb-6 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          className={`relative px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
            activeTab === tab.key ? 'text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          {tab.label}
          {activeTab === tab.key && (
            <motion.div
              layoutId="conversationTabIndicator"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-romantic-DEFAULT to-dream-purple rounded-full"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
