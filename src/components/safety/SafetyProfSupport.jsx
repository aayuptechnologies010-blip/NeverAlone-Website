import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Stethoscope } from 'lucide-react';

export default function SafetyProfSupport() {
  return (
    <section id="professional-support" className="py-16 bg-brand-950 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-3xl font-semibold text-white mb-4">
            Know who you're talking to.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We maintain a strict separation between regular companions and professional support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Regular Companion */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-gray-300" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Regular Companion</h3>
            </div>
            
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Can:</p>
              <ul className="space-y-2">
                <ListItem text="Listen and talk" color="bg-gray-400" />
                <ListItem text="Share friendly general perspectives" color="bg-gray-400" />
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-3">Cannot:</p>
              <ul className="space-y-2">
                <ListItem text="Diagnose" color="bg-red-400" />
                <ListItem text="Prescribe" color="bg-red-400" />
                <ListItem text="Provide treatment" color="bg-red-400" />
                <ListItem text="Claim to be a therapist" color="bg-red-400" />
              </ul>
            </div>
          </div>

          {/* Professional Support */}
          <div className="bg-electric-cyan/5 border border-electric-cyan/20 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-electric-cyan/10 flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-electric-cyan" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Professional Support</h3>
            </div>
            
            <ul className="space-y-4">
              <ListItem text="Separate service" color="bg-electric-cyan" />
              <ListItem text="Appropriately qualified professionals" color="bg-electric-cyan" />
              <ListItem text="Separate pricing" color="bg-electric-cyan" />
              <ListItem text="Separate professional profile/booking flow" color="bg-electric-cyan" />
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/professional-support"
            className="inline-flex px-8 py-4 rounded-full text-sm font-semibold text-brand-950 bg-electric-cyan hover:bg-electric-cyan/90 transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)]"
          >
            Learn About Professional Support
          </Link>
        </div>
      </div>
    </section>
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
