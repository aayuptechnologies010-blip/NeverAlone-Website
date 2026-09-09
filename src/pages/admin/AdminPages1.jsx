import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Users, UserCircle, BriefcaseMedical, CreditCard, MessageSquare, AlertTriangle, CheckCircle2, ChevronRight, XCircle, FileText, Search, Filter } from 'lucide-react';
import { STATS, RECENT_ACTIVITY, DEMO_CUSTOMERS, DEMO_COMPANIONS, DEMO_CONVERSATIONS } from '../../data/adminData';

// --- SHARED COMPONENTS ---
export const PageHeader = ({ title, desc }) => (
  <div className="mb-8">
    <h1 className="text-2xl font-bold text-white mb-1">{title}</h1>
    {desc && <p className="text-sm text-gray-400">{desc}</p>}
  </div>
);

export const StatusBadge = ({ status }) => {
  const colors = {
    Active: 'bg-green-500/10 text-green-400 border-green-500/20',
    Approved: 'bg-green-500/10 text-green-400 border-green-500/20',
    Completed: 'bg-green-500/10 text-green-400 border-green-500/20',
    Pending: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    Suspended: 'bg-red-500/10 text-red-400 border-red-500/20',
    Restricted: 'bg-red-500/10 text-red-400 border-red-500/20',
    Cancelled: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
  };
  const color = colors[status] || 'bg-white/5 text-gray-300 border-white/10';
  return <span className={`px-2 py-1 rounded text-xs font-bold border uppercase tracking-wider ${color}`}>{status}</span>;
};

// --- DASHBOARD ---
export function AdminDashboard() {
  return (
    <div className="space-y-8">
      <PageHeader title="Dashboard" desc="Overview of Never Alone platform activity." />
      
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Total Customers" value={STATS.totalCustomers.toLocaleString()} icon={Users} />
        <StatCard title="Active Subscriptions" value={STATS.activeSubscriptions.toLocaleString()} icon={CreditCard} />
        <StatCard title="Total Companions" value={STATS.totalCompanions} icon={UserCircle} />
        <StatCard title="Approved Professionals" value={STATS.approvedProfessionals} icon={BriefcaseMedical} />
        <StatCard title="Today's Conversations" value={STATS.conversationsToday} icon={MessageSquare} />
        <StatCard title="Pending Verifications" value={STATS.pendingVerifications} icon={FileText} alert />
        <StatCard title="Monthly Revenue" value={STATS.revenueMonthly} icon={CreditCard} />
        <StatCard title="Pending Refunds" value={STATS.refundsPending} icon={AlertTriangle} alert />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Today's Conversations */}
          <div className="bg-brand-900 border border-white/5 rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center">
              <h3 className="text-sm font-bold text-white uppercase tracking-widest">Today's Conversations</h3>
              <Link to="/admin/conversations" className="text-xs font-bold text-electric-cyan hover:text-white transition-colors">View All</Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-white/5 text-xs text-gray-500 uppercase">
                  <tr>
                    <th className="px-6 py-3 font-medium">Time</th>
                    <th className="px-6 py-3 font-medium">Customer</th>
                    <th className="px-6 py-3 font-medium">Provider</th>
                    <th className="px-6 py-3 font-medium">Service</th>
                    <th className="px-6 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm text-gray-300">
                  {DEMO_CONVERSATIONS.map(c => (
                    <tr key={c.id} className="hover:bg-white/[0.02]">
                      <td className="px-6 py-4">{c.time}</td>
                      <td className="px-6 py-4 font-medium text-white">{c.customer}</td>
                      <td className="px-6 py-4">{c.provider} <span className="text-[10px] text-gray-500 ml-1">({c.type})</span></td>
                      <td className="px-6 py-4">{c.category}</td>
                      <td className="px-6 py-4"><StatusBadge status={c.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Needs Attention */}
          <div className="bg-brand-900 border border-red-500/20 rounded-2xl p-6">
            <h3 className="text-sm font-bold text-red-400 flex items-center gap-2 mb-4 uppercase tracking-widest"><AlertTriangle className="w-4 h-4" /> Needs Attention</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between items-center bg-white/5 p-3 rounded-lg hover:bg-white/10 cursor-pointer">
                <span className="text-gray-300">Companion Apps Pending</span>
                <span className="font-bold text-white bg-red-500/20 text-red-400 px-2 py-0.5 rounded">12</span>
              </li>
              <li className="flex justify-between items-center bg-white/5 p-3 rounded-lg hover:bg-white/10 cursor-pointer">
                <span className="text-gray-300">Professional Credentials Pending</span>
                <span className="font-bold text-white bg-red-500/20 text-red-400 px-2 py-0.5 rounded">6</span>
              </li>
              <li className="flex justify-between items-center bg-white/5 p-3 rounded-lg hover:bg-white/10 cursor-pointer">
                <span className="text-gray-300">Safety Reports Open</span>
                <span className="font-bold text-white bg-red-500/20 text-red-400 px-2 py-0.5 rounded">1</span>
              </li>
              <li className="flex justify-between items-center bg-white/5 p-3 rounded-lg hover:bg-white/10 cursor-pointer">
                <span className="text-gray-300">Refund Requests Pending</span>
                <span className="font-bold text-white bg-red-500/20 text-red-400 px-2 py-0.5 rounded">5</span>
              </li>
            </ul>
          </div>

          {/* Recent Activity */}
          <div className="bg-brand-900 border border-white/5 rounded-2xl p-6">
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-widest">Recent Activity</h3>
            <ul className="space-y-4 relative before:absolute before:inset-y-0 before:left-2 before:w-px before:bg-white/10 ml-2">
              {RECENT_ACTIVITY.map(act => (
                <li key={act.id} className="relative flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full bg-brand-900 border-2 border-electric-cyan flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-300">{act.text}</p>
                    <p className="text-xs text-gray-500">{act.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, alert }) {
  return (
    <div className={`p-5 rounded-2xl border ${alert ? 'bg-red-500/5 border-red-500/20' : 'bg-brand-900 border-white/5'}`}>
      <div className="flex justify-between items-start mb-2">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{title}</p>
        <Icon className={`w-5 h-5 ${alert ? 'text-red-400' : 'text-electric-cyan/60'}`} />
      </div>
      <p className={`text-2xl font-bold ${alert ? 'text-red-400' : 'text-white'}`}>{value}</p>
    </div>
  );
}

// --- CUSTOMERS ---
export function AdminCustomers() {
  return (
    <div className="space-y-6">
      <PageHeader title="Customers" />
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-brand-900 p-4 rounded-2xl border border-white/5">
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 absolute left-3 top-3 text-gray-500" />
          <input type="text" placeholder="Search customers..." className="w-full bg-brand-950 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-electric-cyan" />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <select className="bg-brand-950 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-electric-cyan w-full sm:w-auto">
            <option>All Statuses</option><option>Active</option><option>Suspended</option>
          </select>
          <select className="bg-brand-950 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-electric-cyan w-full sm:w-auto">
            <option>All Plans</option><option>Weekly</option><option>Monthly</option><option>Yearly</option>
          </select>
        </div>
      </div>

      <div className="bg-brand-900 border border-white/5 rounded-2xl overflow-x-auto">
        <table className="w-full text-left whitespace-nowrap">
          <thead className="bg-white/5 text-xs text-gray-500 uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 font-medium">Customer</th>
              <th className="px-6 py-4 font-medium">Contact</th>
              <th className="px-6 py-4 font-medium">Plan</th>
              <th className="px-6 py-4 font-medium">Joined</th>
              <th className="px-6 py-4 font-medium">Conversations</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm text-gray-300">
            {DEMO_CUSTOMERS.map(c => (
              <tr key={c.id} className="hover:bg-white/[0.02]">
                <td className="px-6 py-4 font-bold text-white">{c.name}</td>
                <td className="px-6 py-4">{c.contact}</td>
                <td className="px-6 py-4">{c.plan}</td>
                <td className="px-6 py-4">{c.joined}</td>
                <td className="px-6 py-4">{c.conversations}</td>
                <td className="px-6 py-4"><StatusBadge status={c.status} /></td>
                <td className="px-6 py-4">
                  <Link to={`/admin/customers/${c.id}`} className="text-electric-cyan hover:text-white font-bold text-xs">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function AdminCustomerDetails() {
  const { id } = useParams();
  const c = DEMO_CUSTOMERS.find(x => x.id === id) || DEMO_CUSTOMERS[0];
  
  return (
    <div className="space-y-6">
      <Link to="/admin/customers" className="text-xs font-bold text-gray-500 hover:text-white uppercase tracking-widest flex items-center gap-1">
        &larr; Back to Customers
      </Link>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">{c.name}</h1>
          <p className="text-sm text-gray-400">Customer ID: {c.id} • Joined {c.joined}</p>
        </div>
        <StatusBadge status={c.status} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-brand-900 border border-white/5 rounded-2xl p-6 space-y-4">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Profile & Contact</h3>
          <div><p className="text-xs text-gray-500">Email</p><p className="text-sm font-medium text-white">{c.contact}</p></div>
          <div><p className="text-xs text-gray-500">Total Conversations</p><p className="text-sm font-medium text-white">{c.conversations}</p></div>
        </div>

        <div className="bg-brand-900 border border-white/5 rounded-2xl p-6 space-y-4">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Subscription</h3>
          <div><p className="text-xs text-gray-500">Current Plan</p><p className="text-sm font-medium text-white">{c.plan}</p></div>
          <button className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold text-white transition-colors">View Subscription Details</button>
        </div>
      </div>

      <div className="bg-brand-900 border border-white/5 rounded-2xl p-6">
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Account Actions</h3>
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-bold text-white transition-colors">Reset Password</button>
          {c.status === 'Suspended' ? (
             <button className="px-4 py-2 bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 rounded-xl text-sm font-bold text-green-400 transition-colors">Restore Account</button>
          ) : (
            <>
              <button className="px-4 py-2 bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/20 rounded-xl text-sm font-bold text-yellow-500 transition-colors">Restrict Account</button>
              <button className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 rounded-xl text-sm font-bold text-red-400 transition-colors">Suspend Account</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// --- COMPANIONS ---
export function AdminCompanions() {
  return (
    <div className="space-y-6">
      <PageHeader title="Companions" />
      <div className="bg-brand-900 border border-white/5 rounded-2xl overflow-x-auto">
        <table className="w-full text-left whitespace-nowrap">
          <thead className="bg-white/5 text-xs text-gray-500 uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 font-medium">Companion</th>
              <th className="px-6 py-4 font-medium">Languages</th>
              <th className="px-6 py-4 font-medium">Categories</th>
              <th className="px-6 py-4 font-medium">Training</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm text-gray-300">
            {DEMO_COMPANIONS.map(c => (
              <tr key={c.id} className="hover:bg-white/[0.02]">
                <td className="px-6 py-4 font-bold text-white">{c.name}</td>
                <td className="px-6 py-4">{c.languages.join(', ')}</td>
                <td className="px-6 py-4"><span className="truncate max-w-[200px] block">{c.categories.join(', ')}</span></td>
                <td className="px-6 py-4">{c.training}</td>
                <td className="px-6 py-4"><StatusBadge status={c.status} /></td>
                <td className="px-6 py-4">
                  <Link to={`/admin/companions/${c.id}`} className="text-electric-cyan hover:text-white font-bold text-xs">Manage</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function AdminCompanionDetails() {
  const { id } = useParams();
  const c = DEMO_COMPANIONS.find(x => x.id === id) || DEMO_COMPANIONS[0];
  return (
    <div className="space-y-6">
       <Link to="/admin/companions" className="text-xs font-bold text-gray-500 hover:text-white uppercase tracking-widest flex items-center gap-1">
        &larr; Back to Companions
      </Link>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">{c.name}</h1>
        <StatusBadge status={c.status} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-brand-900 border border-white/5 rounded-2xl p-6 space-y-4">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Profile</h3>
          <div><p className="text-xs text-gray-500">Languages</p><p className="text-sm text-white">{c.languages.join(', ')}</p></div>
          <div><p className="text-xs text-gray-500">Categories</p><p className="text-sm text-white">{c.categories.join(', ')}</p></div>
        </div>
        
        <div className="bg-brand-900 border border-white/5 rounded-2xl p-6 space-y-4">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Compliance</h3>
          <div><p className="text-xs text-gray-500">Training Status</p><p className="text-sm text-white">{c.training}</p></div>
          <div><p className="text-xs text-gray-500">Identity Verification</p><p className="text-sm text-white">{c.verification}</p></div>
        </div>

        <div className="bg-brand-900 border border-white/5 rounded-2xl p-6 space-y-4">
           <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Flirty Mode Status</h3>
           <p className="text-sm text-gray-400">Not Requested</p>
        </div>
      </div>
    </div>
  );
}

// --- COMPANION APPLICATIONS ---
export function AdminCompanionApplications() {
  return (
    <div className="space-y-6">
      <PageHeader title="Companion Applications" desc="Review and approve new companion signups." />
      
      <div className="bg-brand-900 border border-white/5 rounded-2xl p-10 text-center">
        <FileText className="w-10 h-10 text-gray-600 mx-auto mb-4" />
        <h3 className="text-lg font-bold text-white mb-2">No pending applications</h3>
        <p className="text-sm text-gray-400">All companion applications have been processed.</p>
      </div>
    </div>
  );
}
