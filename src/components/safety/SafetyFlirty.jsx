import React from 'react';
import { Link } from 'react-router-dom';
import { HeartHandshake, CheckCircle2, XCircle } from 'lucide-react';

export default function SafetyFlirty() {
  return (
    <section id="flirty-mode" className="py-16 bg-brand-950 relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-br from-brand-950 via-romantic-DEFAULT/10 to-dream-purple/10 border border-romantic-DEFAULT/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-romantic-DEFAULT/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Flirty Mode still has boundaries.
            </h2>
            
            <div className="flex flex-wrap gap-2 mb-8">
              <Badge text="18+ Only" />
              <Badge text="Mutual Consent" />
              <Badge text="Non-Explicit" />
              <Badge text="Phone Calls Only" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              {/* Allowed */}
              <div>
                <h3 className="text-sm font-semibold text-romantic-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Allowed
                </h3>
                <ul className="space-y-3">
                  <ListItem text="Playful conversation" color="bg-romantic-pink" />
                  <ListItem text="Compliments" color="bg-romantic-pink" />
                  <ListItem text="Light romantic conversation" color="bg-romantic-pink" />
                  <ListItem text="Fun banter" color="bg-romantic-pink" />
                </ul>
              </div>

              {/* Not Allowed */}
              <div>
                <h3 className="text-sm font-semibold text-red-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <XCircle className="w-4 h-4" /> Not Allowed
                </h3>
                <ul className="space-y-3">
                  <ListItem text="Explicit sexual content" color="bg-red-400" />
                  <ListItem text="Sexual services" color="bg-red-400" />
                  <ListItem text="Coercion or Harassment" color="bg-red-400" />
                  <ListItem text="Physical meetups" color="bg-red-400" />
                  <ListItem text="Explicit images" color="bg-red-400" />
                </ul>
              </div>
            </div>

            <Link
              to="/flirty-mode"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
            >
              <HeartHandshake className="w-4 h-4" />
              View Flirty Mode Guidelines
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ text }) {
  return (
    <span className="px-3 py-1.5 rounded-full bg-black/40 border border-romantic-DEFAULT/30 text-xs font-semibold text-romantic-200 uppercase tracking-wider">
      {text}
    </span>
  );
}

function ListItem({ text, color }) {
  return (
    <li className="flex items-center gap-3 text-sm text-gray-300">
      <span className={`w-1.5 h-1.5 rounded-full ${color} flex-shrink-0`} />
      {text}
    </li>
  );
}
