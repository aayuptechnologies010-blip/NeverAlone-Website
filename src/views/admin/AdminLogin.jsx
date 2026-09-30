import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, ChevronRight } from 'lucide-react';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Frontend demo bypass
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-brand-950 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-brand-900 border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-electric-cyan/10 flex items-center justify-center">
            <ShieldCheck className="w-8 h-8 text-electric-cyan" />
          </div>
        </div>
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">Admin Access</h1>
          <p className="text-sm text-gray-400">Manage Neuravia operations.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2">Admin ID</label>
            <input type="text" className="w-full bg-brand-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-electric-cyan focus:outline-none" placeholder="Enter ID" required />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2">Security Key</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-brand-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-electric-cyan focus:outline-none" placeholder="••••••••" required />
          </div>
          
          <button type="submit" className="w-full flex items-center justify-center gap-2 bg-electric-cyan hover:bg-electric-cyan/90 text-brand-950 font-bold py-3.5 px-4 rounded-xl transition-colors">
            Secure Access <ChevronRight className="w-5 h-5" />
          </button>
        </form>

        <p className="text-xs text-center text-gray-600 mt-8">Authorized personnel only.</p>
      </div>
    </div>
  );
}
