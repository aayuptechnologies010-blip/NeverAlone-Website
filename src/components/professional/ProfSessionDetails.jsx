import React from 'react';
import { Stethoscope, Clock, Phone, IndianRupee } from 'lucide-react';

export default function ProfSessionDetails({ professional }) {
  return (
    <section className="py-12 bg-brand-950">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-white mb-6">Session information</h2>
        
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <DetailItem
              icon={Stethoscope}
              label="Session Type"
              value="Professional Support"
            />
            <DetailItem
              icon={Clock}
              label="Duration"
              value={professional.sessionDuration}
            />
            <DetailItem
              icon={Phone}
              label="Call Type"
              value="Private Phone Call"
            />
            <DetailItem
              icon={IndianRupee}
              label="Pricing"
              value={professional.pricing}
              valueClass="text-electric-cyan"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function DetailItem({ icon: Icon, label, value, valueClass = 'text-white' }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Icon className="w-4 h-4 text-gray-500" />
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
          {label}
        </span>
      </div>
      <span className={`text-base font-medium ${valueClass}`}>
        {value}
      </span>
    </div>
  );
}
