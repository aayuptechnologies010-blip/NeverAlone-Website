import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

export default function SafetyMentalHealth() {
  return (
    <section className="py-16 bg-brand-950 relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4">
        
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center">
          Conversation can help. Professional care is different.
        </h2>
        
        <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12 leading-relaxed">
          Regular companions can provide conversation, listening and general friendly perspectives, but they are not automatically mental-health professionals.
        </p>

        <div className="bg-red-950/20 border border-red-500/20 rounded-3xl p-8 mb-10 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-6 h-6 text-red-400" />
            <h3 className="text-lg font-semibold text-white">Companions must not:</h3>
          </div>
          
          <ul className="space-y-4">
            <ListItem text="Diagnose" />
            <ListItem text="Prescribe medication" />
            <ListItem text="Provide treatment" />
            <ListItem text="Claim therapist status" />
            <ListItem text="Advise users to stop prescribed treatment" />
          </ul>
        </div>

        <div className="text-center">
          <Link
            to="/professional-support"
            className="inline-flex px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
          >
            Explore Professional Support
          </Link>
        </div>

      </div>
    </section>
  );
}

function ListItem({ text }) {
  return (
    <li className="flex items-center gap-3 text-sm text-gray-300">
      <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
      {text}
    </li>
  );
}
