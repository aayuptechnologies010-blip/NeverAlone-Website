import React from 'react';
import { Check, X } from 'lucide-react';

/**
 * Do/Don't comparison card.
 * 
 * Props:
 *   doItems   – string[]
 *   dontItems – string[]
 */
export default function DoDontCard({ doItems = [], dontItems = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-5">
        <p className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-4">Do</p>
        <ul className="space-y-3">
          {doItems.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300 leading-relaxed">
              <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-5">
        <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-4">Don't</p>
        <ul className="space-y-3">
          {dontItems.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300 leading-relaxed">
              <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
