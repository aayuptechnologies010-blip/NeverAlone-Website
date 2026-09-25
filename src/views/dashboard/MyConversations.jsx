import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { allConversations } from '../../data/dashboardDemo';

import ConversationTabs from '../../components/dashboard/ConversationTabs';
import ConversationCard from '../../components/dashboard/ConversationCard';
import RescheduleModal from '../../components/dashboard/RescheduleModal';
import CancelConversationModal from '../../components/dashboard/CancelConversationModal';
import FeedbackModal from '../../components/dashboard/FeedbackModal';
import EmptyState from '../../components/dashboard/EmptyState';

export default function MyConversations() {
  const [conversations, setConversations] = useState(() => {
    try {
      const localBookings = JSON.parse(localStorage.getItem('never_alone_bookings') || '[]');
      const formattedLocal = localBookings.map((b, idx) => ({
        id: `booked-${idx}-${Date.now()}`,
        companion: {
          name: b.companionName,
          image: b.companionImage || 'https://i.pravatar.cc/300?img=47',
          verified: true,
          style: 'Empathetic & Dedicated'
        },
        category: b.category,
        displayDate: b.date,
        displayTime: b.time,
        duration: b.duration?.includes('60') ? 60 : 60,
        status: 'Confirmed',
        plan: b.plan
      }));
      return [...formattedLocal, ...allConversations];
    } catch {
      return allConversations;
    }
  });
  const [activeTab, setActiveTab] = useState('upcoming');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterCompanion, setFilterCompanion] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Modals
  const [rescheduleTarget, setRescheduleTarget] = useState(null);
  const [cancelTarget, setCancelTarget] = useState(null);
  const [feedbackTarget, setFeedbackTarget] = useState(null);

  // Derive unique values for filters
  const categories = useMemo(
    () => [...new Set(conversations.map((c) => c.category))],
    [conversations]
  );
  const companions = useMemo(
    () => [...new Set(conversations.map((c) => c.companion.name))],
    [conversations]
  );

  // Filter logic
  const filtered = useMemo(() => {
    let list = conversations;

    // Tab filter
    if (activeTab === 'upcoming') list = list.filter((c) => c.status === 'Confirmed');
    else if (activeTab === 'completed')
      list = list.filter((c) => c.status === 'Completed');
    else if (activeTab === 'cancelled')
      list = list.filter((c) => c.status === 'Cancelled');

    // Category
    if (filterType) list = list.filter((c) => c.category === filterType);

    // Companion
    if (filterCompanion)
      list = list.filter((c) => c.companion.name === filterCompanion);

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (c) =>
          c.companion.name.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          c.displayDate.toLowerCase().includes(q)
      );
    }

    return list;
  }, [activeTab, conversations, filterType, filterCompanion, searchQuery]);

  const handleReschedule = (conversation, date, time) => {
    setConversations((current) => current.map((item) => item.id === conversation.id
      ? { ...item, displayDate: date, displayTime: time }
      : item));
  };

  const handleCancel = (conversation) => {
    setConversations((current) => current.map((item) => item.id === conversation.id
      ? { ...item, status: 'Cancelled' }
      : item));
  };

  // Empty state messages by tab
  const emptyMessages = {
    upcoming: {
      title: 'No upcoming conversations.',
      message: 'Whenever you feel like talking, someone is just a few steps away.',
    },
    completed: {
      title: 'No completed conversations yet.',
      message: 'Once you finish your first conversation, it will show up here.',
    },
    cancelled: {
      title: 'No cancelled conversations.',
      message: 'Good news — nothing has been cancelled.',
    },
    all: {
      title: 'No conversations found.',
      message: 'Try adjusting your search or filters.',
    },
  };

  const clearFilters = () => {
    setFilterType('');
    setFilterCompanion('');
    setSearchQuery('');
  };

  return (
    <>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          My Conversations
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Everything you've scheduled, completed or cancelled.
        </p>
      </motion.div>

      {/* Tabs */}
      <ConversationTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search conversations…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-romantic-DEFAULT/40 transition-colors"
          />
        </div>

        {/* Toggle filters (mobile) */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="sm:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
        </button>

        {/* Desktop filters */}
        <div className="hidden sm:flex gap-2">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 focus:outline-none focus:border-romantic-DEFAULT/40 appearance-none cursor-pointer"
          >
            <option value="">All Types</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <select
            value={filterCompanion}
            onChange={(e) => setFilterCompanion(e.target.value)}
            className="px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 focus:outline-none focus:border-romantic-DEFAULT/40 appearance-none cursor-pointer"
          >
            <option value="">All Companions</option>
            {companions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {(filterType || filterCompanion) && (
            <button
              onClick={clearFilters}
              className="px-3 py-2.5 rounded-xl text-xs text-gray-400 hover:text-white border border-white/10 hover:bg-white/5 transition-colors flex items-center gap-1"
            >
              <X className="w-3 h-3" /> Clear
            </button>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      {showFilters && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="sm:hidden flex flex-col gap-3 mb-6"
        >
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 focus:outline-none appearance-none"
          >
            <option value="">All Types</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <select
            value={filterCompanion}
            onChange={(e) => setFilterCompanion(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 focus:outline-none appearance-none"
          >
            <option value="">All Companions</option>
            {companions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {(filterType || filterCompanion) && (
            <button onClick={clearFilters} className="text-xs text-gray-400 hover:text-white">
              Clear Filters
            </button>
          )}
        </motion.div>
      )}

      {/* Conversation list */}
      <div className="space-y-3">
        {filtered.length > 0 ? (
          filtered.map((conv) => (
            <motion.div
              key={conv.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ConversationCard
                conversation={conv}
                onReschedule={(c) => setRescheduleTarget(c)}
                onCancel={(c) => setCancelTarget(c)}
                onFeedback={(c) => setFeedbackTarget(c)}
              />
            </motion.div>
          ))
        ) : (
          <EmptyState
            title={emptyMessages[activeTab]?.title}
            message={emptyMessages[activeTab]?.message}
          />
        )}
      </div>

      {/* Modals */}
      <RescheduleModal
        isOpen={!!rescheduleTarget}
        onClose={() => setRescheduleTarget(null)}
        companionName={rescheduleTarget?.companion?.name}
        onConfirm={(date, time) => handleReschedule(rescheduleTarget, date, time)}
      />
      <CancelConversationModal
        isOpen={!!cancelTarget}
        onClose={() => setCancelTarget(null)}
        companionName={cancelTarget?.companion?.name}
        onConfirm={() => handleCancel(cancelTarget)}
      />
      <FeedbackModal
        isOpen={!!feedbackTarget}
        onClose={() => setFeedbackTarget(null)}
        companionName={feedbackTarget?.companion?.name}
      />
    </>
  );
}
