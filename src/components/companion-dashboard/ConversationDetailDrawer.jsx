import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, ShieldCheck } from 'lucide-react';
import CompanionStatusBadge from './CompanionStatusBadge';

export default function ConversationDetailDrawer({ conversation, isOpen, onClose }) {
  if (!conversation) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50"
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-brand-900 border-l border-white/10 z-50 flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-labelledby="conv-drawer-title"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h3 id="conv-drawer-title" className="text-lg font-semibold text-white">
                Conversation Summary
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-cyan"
                aria-label="Close drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-xl font-semibold text-electric-cyan">
                  {conversation.customer[0]}
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Customer</p>
                  <p className="text-lg font-semibold text-white">{conversation.customer}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <DetailField label="Category" value={conversation.category} />
                <DetailField label="Status" value={<CompanionStatusBadge status={conversation.status} />} />
                <DetailField label="Date" value={conversation.date} />
                <DetailField label="Time" value={conversation.time} />
                <DetailField label="Duration" value={conversation.duration} />
                <DetailField label="Call Type" value="Phone Call" />
              </div>

              <div className="bg-electric-cyan/5 border border-electric-cyan/20 rounded-xl p-4 flex gap-3">
                <ShieldCheck className="w-5 h-5 text-electric-cyan flex-shrink-0 mt-0.5" />
                <p className="text-xs text-gray-400">
                  Respect privacy and boundaries. You can end the conversation or report at any time.
                </p>
              </div>
            </div>

            <div className="p-6 border-t border-white/5 flex gap-3">
              <Link
                to={`/companion/conversations/${conversation.id}`}
                onClick={onClose}
                className="flex-1 px-4 py-3 rounded-xl text-sm font-semibold text-center text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-colors"
              >
                View Full Details
              </Link>
              {conversation.status === 'upcoming' && (
                <Link
                  to={`/companion/conversations/${conversation.id}?view=call`}
                  onClick={onClose}
                  className="px-4 py-3 rounded-xl text-sm font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </Link>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function DetailField({ label, value }) {
  return (
    <div>
      <p className="text-xs text-gray-500 uppercase font-semibold mb-1">{label}</p>
      <div className="text-sm text-white">{value}</div>
    </div>
  );
}
