import React from 'react';
import { ShieldCheck, Award, Briefcase, Globe } from 'lucide-react';

export default function ProfCredentials({ professional }) {
  return (
    <section className="py-12 bg-brand-950">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-white mb-6">Professional credentials</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <CredentialCard
            icon={Award}
            title="Qualification"
            value={professional.qualification}
          />
          <CredentialCard
            icon={ShieldCheck}
            title="Verification Status"
            value={professional.verified ? 'Verified by Platform' : 'Pending Verification'}
            valueClass={professional.verified ? 'text-electric-cyan' : 'text-amber-400'}
          />
          <CredentialCard
            icon={Briefcase}
            title="Experience"
            value={professional.experience}
          />
          <CredentialCard
            icon={Globe}
            title="Languages"
            value={professional.languages.join(', ')}
          />
        </div>

        {/* Verification Notice */}
        <div className="bg-electric-cyan/5 border border-electric-cyan/20 rounded-xl p-4 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-electric-cyan flex-shrink-0" />
          <p className="text-sm text-gray-300">
            Professional profiles should only display qualifications that have been reviewed and approved by the platform.
          </p>
        </div>
      </div>
    </section>
  );
}

function CredentialCard({ icon: Icon, title, value, valueClass = 'text-white' }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-gray-400" />
      </div>
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
          {title}
        </p>
        <p className={`text-base font-medium ${valueClass}`}>
          {value}
        </p>
      </div>
    </div>
  );
}
