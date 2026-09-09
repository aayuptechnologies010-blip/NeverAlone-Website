import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { demoConversations } from '../../data/companionDashboardData';

const tabs = ['Upcoming', 'Completed', 'Cancelled', 'All'];

export default function CompanionConversations() {
  const [activeTab, setActiveTab] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = demoConversations.filter(c => {
    if (activeTab === 'Upcoming' && c.status !== 'upcoming') return false;
    if (activeTab === 'Completed' && c.status !== 'completed') return false;
    if (activeTab === 'Cancelled' && c.status !== 'cancelled') return false;
    if (search && !c.customer.toLowerCase().includes(search.toLowerCase()) && !c.category.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-1">My Conversations</h1>
        <p className="text-gray-400">View and manage your conversations.</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-white/10 pb-0 overflow-x-auto">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 text-sm font-semibold whitespace-nowrap transition-colors border-b-2 ${
              activeTab === tab
                ? 'text-electric-cyan border-electric-cyan'
                : 'text-gray-500 border-transparent hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name or category..."
          className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-electric-cyan/50 transition-colors"
        />
      </div>

      {/* List */}
      {filtered.length > 0 ? (
        <div className="space-y-3">
          {filtered.map(conv => (
            <div key={conv.id} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold text-electric-cyan flex-shrink-0">
                {conv.customer[0]}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-sm font-bold text-white">{conv.customer}</h3>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-400">{conv.category}</span>
                </div>
                <p className="text-xs text-gray-500">{conv.date} • {conv.time} • {conv.duration}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xs font-bold uppercase px-2 py-0.5 rounded-full border ${
                  conv.status === 'upcoming' ? 'text-electric-cyan bg-electric-cyan/10 border-electric-cyan/20' :
                  conv.status === 'completed' ? 'text-green-400 bg-green-500/10 border-green-500/20' :
                  'text-gray-500 bg-white/5 border-white/10'
                }`}>{conv.status}</span>
                <button className="text-xs font-semibold text-electric-cyan hover:text-white transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center">
          <p className="text-gray-400">No conversations found.</p>
        </div>
      )}
    </motion.div>
  );
}
