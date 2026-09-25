import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FileText, CheckCircle2 } from 'lucide-react';
import { PageHeader, StatusBadge } from './AdminPages1';
import { DEMO_PROFESSIONALS, DEMO_CONVERSATIONS, DEMO_SUBSCRIPTIONS, DEMO_CATEGORIES } from '../../data/adminData';

// --- PROFESSIONALS ---
export function AdminProfessionals() {
  return (
    <div className="space-y-6">
      <PageHeader title="Professional Support" desc="Manage verified professionals on the platform." />
      <div className="bg-brand-900 border border-white/5 rounded-2xl overflow-x-auto">
        <table className="w-full text-left whitespace-nowrap">
          <thead className="bg-white/5 text-xs text-gray-500 uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 font-medium">Professional</th>
              <th className="px-6 py-4 font-medium">Title</th>
              <th className="px-6 py-4 font-medium">Areas of Support</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm text-gray-300">
            {DEMO_PROFESSIONALS.map(p => (
              <tr key={p.id} className="hover:bg-white/[0.02]">
                <td className="px-6 py-4 font-bold text-white">{p.name}</td>
                <td className="px-6 py-4">{p.title}</td>
                <td className="px-6 py-4">{p.areas.join(', ')}</td>
                <td className="px-6 py-4"><StatusBadge status={p.status} /></td>
                <td className="px-6 py-4">
                  <Link to={`/admin/professionals/${p.id}`} className="text-electric-cyan hover:text-white font-bold text-xs">Manage</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function AdminProfessionalDetails() {
  const { id } = useParams();
  const p = DEMO_PROFESSIONALS.find(x => x.id === id) || DEMO_PROFESSIONALS[0];
  return (
    <div className="space-y-6">
      <Link to="/admin/professionals" className="text-xs font-bold text-gray-500 hover:text-white uppercase tracking-widest flex items-center gap-1">
        &larr; Back to Professionals
      </Link>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">{p.name}</h1>
          <p className="text-electric-cyan font-bold">{p.title}</p>
        </div>
        <StatusBadge status={p.status} />
      </div>

      <div className="bg-brand-900 border border-white/5 rounded-2xl p-6">
        <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Verification Actions</h3>
        {p.credentialStatus === 'Pending' ? (
          <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl mb-4">
            <p className="text-sm text-yellow-400 font-bold mb-2">Credential Review Required</p>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-yellow-500 text-brand-950 rounded-lg text-xs font-bold">Review Documents</button>
              <button className="px-4 py-2 border border-white/10 rounded-lg text-xs font-bold text-white hover:bg-white/5">Request Additional Info</button>
            </div>
          </div>
        ) : (
          <p className="text-sm text-green-400 flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/> Credentials Approved</p>
        )}
      </div>
    </div>
  );
}

// --- PROFESSIONAL APPLICATIONS ---
export function AdminProfessionalApplications() {
  return (
    <div className="space-y-6">
      <PageHeader title="Professional Applications" desc="Review applications and verify credentials." />
      <div className="bg-brand-900 border border-white/5 rounded-2xl p-10 text-center">
        <FileText className="w-10 h-10 text-gray-600 mx-auto mb-4" />
        <h3 className="text-lg font-bold text-white mb-2">No pending professional applications</h3>
        <p className="text-sm text-gray-400">All applications have been reviewed.</p>
      </div>
    </div>
  );
}

// --- CONVERSATIONS ---
export function AdminConversations() {
  return (
    <div className="space-y-6">
      <PageHeader title="Conversations" />
      <div className="bg-brand-900 border border-white/5 rounded-2xl overflow-x-auto">
        <table className="w-full text-left whitespace-nowrap">
          <thead className="bg-white/5 text-xs text-gray-500 uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 font-medium">Customer</th>
              <th className="px-6 py-4 font-medium">Provider</th>
              <th className="px-6 py-4 font-medium">Category</th>
              <th className="px-6 py-4 font-medium">Time / Dur</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm text-gray-300">
            {DEMO_CONVERSATIONS.map(c => (
              <tr key={c.id} className="hover:bg-white/[0.02]">
                <td className="px-6 py-4 font-medium text-white">{c.customer}</td>
                <td className="px-6 py-4">{c.provider} <span className="text-[10px] text-gray-500 ml-1">({c.type})</span></td>
                <td className="px-6 py-4">{c.category}</td>
                <td className="px-6 py-4">{c.date} • {c.time} <span className="text-gray-500">({c.duration})</span></td>
                <td className="px-6 py-4"><StatusBadge status={c.status} /></td>
                <td className="px-6 py-4">
                  <button className="text-electric-cyan hover:text-white font-bold text-xs">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --- SUBSCRIPTIONS ---
export function AdminSubscriptions() {
  return (
    <div className="space-y-6">
      <PageHeader title="Plans & Subscriptions" desc="Manage customer subscriptions." />
      <div className="bg-brand-900 border border-white/5 rounded-2xl overflow-x-auto">
        <table className="w-full text-left whitespace-nowrap">
          <thead className="bg-white/5 text-xs text-gray-500 uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 font-medium">Customer</th>
              <th className="px-6 py-4 font-medium">Plan</th>
              <th className="px-6 py-4 font-medium">Valid Dates</th>
              <th className="px-6 py-4 font-medium">Daily Access</th>
              <th className="px-6 py-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm text-gray-300">
            {DEMO_SUBSCRIPTIONS.map(s => (
              <tr key={s.id} className="hover:bg-white/[0.02]">
                <td className="px-6 py-4 font-medium text-white">{s.customer}</td>
                <td className="px-6 py-4 font-bold">{s.plan}</td>
                <td className="px-6 py-4">{s.start} — {s.end}</td>
                <td className="px-6 py-4">{s.dailyAccess}</td>
                <td className="px-6 py-4"><StatusBadge status={s.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --- CATEGORIES ---
export function AdminCategories() {
  return (
    <div className="space-y-6">
      <PageHeader title="Categories Management" desc="Enable or disable conversation categories." />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {DEMO_CATEGORIES.map(c => (
          <div key={c.id} className="bg-brand-900 border border-white/5 rounded-2xl p-6 relative">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-white">{c.name}</h3>
              <div className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${c.enabled ? 'bg-electric-cyan' : 'bg-gray-600'}`}>
                 <div className={`w-4 h-4 rounded-full bg-brand-950 transition-transform ${c.enabled ? 'translate-x-6' : 'translate-x-0'}`} />
              </div>
            </div>
            {c.is18 && <span className="inline-block px-2 py-1 bg-red-500/10 text-red-400 text-[10px] font-bold rounded uppercase mb-2">18+ Required • Consent Required</span>}
            <div className="mt-4 flex gap-4 text-xs font-bold">
              <button className="text-electric-cyan hover:text-white">Edit Description</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
