
'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const App = dynamic(() => import('../App'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-brand-950 flex items-center justify-center text-white font-sans">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-electric-cyan border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-400 text-sm tracking-wider uppercase">Loading Neuravia...</p>
      </div>
    </div>
  ),
});

export default function ClientApp() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-brand-950 flex items-center justify-center text-white font-sans">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-electric-cyan border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-400 text-sm tracking-wider uppercase">Loading Neuravia...</p>
        </div>
      </div>
    );
  }

  return <App />;
}
