import React from 'react';
import { MessageSquare } from 'lucide-react';

/**
 * Displays a conversation example with Person → Response format.
 */
export default function ConversationExample({ personSays, goodResponse, avoidResponse, avoidReason }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
      {/* Person */}
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
          <MessageSquare className="w-4 h-4 text-gray-400" />
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 max-w-md">
          <p className="text-sm text-white italic">"{personSays}"</p>
        </div>
      </div>

      {/* Good response */}
      <div className="ml-11">
        <p className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-1.5">Good response</p>
        <div className="bg-green-500/5 border border-green-500/20 rounded-xl px-4 py-3 max-w-md">
          <p className="text-sm text-green-200">"{goodResponse}"</p>
        </div>
      </div>

      {/* Avoid */}
      {avoidResponse && (
        <div className="ml-11">
          <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1.5">Avoid</p>
          <div className="bg-red-500/5 border border-red-500/20 rounded-xl px-4 py-3 max-w-md">
            <p className="text-sm text-red-200">"{avoidResponse}"</p>
          </div>
          {avoidReason && (
            <p className="text-xs text-gray-500 mt-2 ml-1">{avoidReason}</p>
          )}
        </div>
      )}
    </div>
  );
}
