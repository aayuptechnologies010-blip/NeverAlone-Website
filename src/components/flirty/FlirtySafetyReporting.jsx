import React from 'react';
import { ShieldAlert, PhoneOff, Flag, Ban, LifeBuoy } from 'lucide-react';

export default function FlirtySafetyReporting() {
  return (
    <section className="py-16 bg-brand-950/50 relative border-t border-b border-white/5">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-3xl font-semibold text-white mb-4">
            If the vibe changes, you're in control.
          </h2>
          <p className="text-gray-400">
            Safety and reporting features are built into every conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <SafetyCard icon={PhoneOff} title="End Call Anytime" />
          <SafetyCard icon={Flag} title="Report" />
          <SafetyCard icon={Ban} title="Block" />
          <SafetyCard icon={LifeBuoy} title="Safety Support" />
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/3">
              <div className="flex items-center gap-2 text-amber-400 mb-3">
                <ShieldAlert className="w-5 h-5" />
                <h3 className="text-lg font-semibold">Report Reasons</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Our support team reviews reports promptly. We take boundary violations seriously.
              </p>
            </div>
            <div className="md:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Explicit Content',
                  'Harassment',
                  'Asked To Meet Offline',
                  'Personal Information Pressure',
                  'Money Request',
                  'Other'
                ].map((reason) => (
                  <div key={reason} className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                    {reason}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SafetyCard({ icon: Icon, title }) {
  return (
    <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-gray-300" />
      </div>
      <h4 className="text-sm font-semibold text-white">{title}</h4>
    </div>
  );
}
