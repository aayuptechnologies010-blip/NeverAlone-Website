import React from 'react';
import { PageHeader, StatusBadge } from './AdminPages1';
import { DEMO_PRICING, DEMO_PAYMENTS, DEMO_REFUNDS, DEMO_REPORTS } from '../../data/adminData';

// --- PRICING ---
export function AdminPricing() {
  return (
    <div className="space-y-6">
      <PageHeader title="Pricing Configuration" desc="Manage subscription and extra-time pricing." />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {DEMO_PRICING.map(p => (
          <div key={p.id} className="bg-brand-900 border border-white/5 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-2">{p.name}</h3>
            <p className="text-3xl font-bold text-electric-cyan mb-4">{p.price}</p>
            <div className="space-y-2 text-sm text-gray-400 mb-6">
              <p>Duration: <span className="text-white">{p.duration}</span></p>
              <p>Daily Access: <span className="text-white">{p.daily}</span></p>
            </div>
            <button className="w-full py-2 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-bold text-white transition-colors">Edit Plan</button>
          </div>
        ))}
      </div>

      <div className="bg-brand-900 border border-white/5 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-2">Professional Support Pricing</h3>
        <p className="text-sm text-gray-400 mb-4">Pricing rules for professional sessions are kept entirely separate from regular subscriptions.</p>
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
          <span className="w-2 h-2 rounded-full bg-yellow-500" />
          <span className="text-sm font-bold text-yellow-500">Not Configured</span>
        </div>
      </div>
    </div>
  );
}

// --- PAYMENTS & REVENUE ---
export function AdminPayments() {
  return (
    <div className="space-y-6">
      <PageHeader title="Payments & Revenue" desc="View transaction history." />
      <div className="bg-brand-900 border border-white/5 rounded-2xl overflow-x-auto">
        <table className="w-full text-left whitespace-nowrap">
          <thead className="bg-white/5 text-xs text-gray-500 uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 font-medium">Transaction ID</th>
              <th className="px-6 py-4 font-medium">Customer</th>
              <th className="px-6 py-4 font-medium">Type</th>
              <th className="px-6 py-4 font-medium">Amount</th>
              <th className="px-6 py-4 font-medium">Date</th>
              <th className="px-6 py-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm text-gray-300">
            {DEMO_PAYMENTS.map(p => (
              <tr key={p.id} className="hover:bg-white/[0.02]">
                <td className="px-6 py-4 font-mono text-xs">{p.id}</td>
                <td className="px-6 py-4 font-medium text-white">{p.customer}</td>
                <td className="px-6 py-4">{p.type}</td>
                <td className="px-6 py-4 font-bold">{p.amount}</td>
                <td className="px-6 py-4">{p.date}</td>
                <td className="px-6 py-4"><StatusBadge status={p.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --- REFUNDS ---
export function AdminRefunds() {
  return (
    <div className="space-y-6">
      <PageHeader title="Refunds" desc="Manage refund requests." />
      <div className="bg-brand-900 border border-white/5 rounded-2xl overflow-x-auto">
        <table className="w-full text-left whitespace-nowrap">
          <thead className="bg-white/5 text-xs text-gray-500 uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 font-medium">Request</th>
              <th className="px-6 py-4 font-medium">Customer</th>
              <th className="px-6 py-4 font-medium">Amount</th>
              <th className="px-6 py-4 font-medium">Reason</th>
              <th className="px-6 py-4 font-medium">Requested</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm text-gray-300">
            {DEMO_REFUNDS.map(r => (
              <tr key={r.id} className="hover:bg-white/[0.02]">
                <td className="px-6 py-4 font-mono text-xs">{r.id}</td>
                <td className="px-6 py-4 font-medium text-white">{r.customer}</td>
                <td className="px-6 py-4 font-bold">{r.amount}</td>
                <td className="px-6 py-4">{r.reason}</td>
                <td className="px-6 py-4">{r.date}</td>
                <td className="px-6 py-4"><StatusBadge status={r.status} /></td>
                <td className="px-6 py-4">
                   <button className="text-electric-cyan hover:text-white font-bold text-xs">Review</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --- REPORTS ---
export function AdminReports() {
  return (
    <div className="space-y-6">
      <PageHeader title="Safety Reports" desc="Review and resolve platform safety concerns." />
      <div className="bg-brand-900 border border-white/5 rounded-2xl overflow-x-auto">
        <table className="w-full text-left whitespace-nowrap">
          <thead className="bg-white/5 text-xs text-gray-500 uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 font-medium">Report ID</th>
              <th className="px-6 py-4 font-medium">Reporter</th>
              <th className="px-6 py-4 font-medium">Reported User</th>
              <th className="px-6 py-4 font-medium">Reason</th>
              <th className="px-6 py-4 font-medium">Date</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm text-gray-300">
            {DEMO_REPORTS.map(r => (
              <tr key={r.id} className="hover:bg-white/[0.02]">
                <td className="px-6 py-4 font-mono text-xs">{r.id}</td>
                <td className="px-6 py-4 text-electric-cyan">{r.reporter}</td>
                <td className="px-6 py-4 font-bold text-white">{r.reported}</td>
                <td className="px-6 py-4">{r.reason}</td>
                <td className="px-6 py-4">{r.date}</td>
                <td className="px-6 py-4"><span className="px-2 py-1 rounded text-xs font-bold border uppercase tracking-wider bg-red-500/10 text-red-400 border-red-500/20">{r.status}</span></td>
                <td className="px-6 py-4">
                  <button className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold text-white transition-colors">Review Case</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --- SETTINGS ---
export function AdminSettings() {
  return (
    <div className="space-y-8">
      <PageHeader title="Platform Settings" desc="Core platform configuration and business rules." />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SettingSection title="General">
          <SettingRow label="Platform Name" value="Neuravia" />
          <SettingRow label="Tagline" value="Someone to talk to. Someone who listens." />
        </SettingSection>

        <SettingSection title="Conversation Rules">
          <SettingRow label="Standard Daily Minutes" value="60 Minutes" />
          <SettingRow label="Extra-Time Allowed" value="Yes" />
          <SettingRow label="Phone Calls Only" value="Enabled" />
          <SettingRow label="18+ Platform Enforcement" value="Enabled" />
        </SettingSection>

        <SettingSection title="Safety Rules">
          <SettingRow label="Online Only" value="Enabled" />
          <SettingRow label="No Physical Meetups" value="Strictly Enforced" />
          <SettingRow label="Non-Explicit Flirty Mode" value="Enabled" />
          <SettingRow label="Reporting System" value="Enabled" />
        </SettingSection>

        <SettingSection title="Professional Support">
          <SettingRow label="Professional Support" value="Enabled as Separate Service" />
          <SettingRow label="Credential Review" value="Mandatory" />
          <SettingRow label="Professional Pricing" value="Not Configured" />
        </SettingSection>
      </div>
    </div>
  );
}

function SettingSection({ title, children }) {
  return (
    <div className="bg-brand-900 border border-white/5 rounded-2xl p-6">
      <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 border-b border-white/5 pb-4">{title}</h3>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}

function SettingRow({ label, value }) {
  return (
    <div className="flex justify-between items-center gap-4">
      <span className="text-sm text-gray-400">{label}</span>
      <span className="text-sm font-bold text-white text-right">{value}</span>
    </div>
  );
}
