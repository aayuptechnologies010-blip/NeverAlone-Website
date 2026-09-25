import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const ProfileStickyCTA = ({ companion }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-brand-950/90 backdrop-blur-lg border-t border-white/10 z-50 md:hidden flex items-center justify-between">
      <div>
        <p className="text-white font-semibold">{companion.name}</p>
        <p className="text-xs text-electric-cyan font-medium">{companion.availability}</p>
      </div>
      <Link 
        to={`/book?companion=${encodeURIComponent(companion.name)}&category=${encodeURIComponent(companion.categories?.[0] || 'Just Talk')}`}
        className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-romantic-DEFAULT to-electric-DEFAULT shadow-[0_0_15px_rgba(219,39,119,0.3)] flex items-center gap-2"
      >
        <Phone size={16} />
        <span>Talk Now</span>
      </Link>
    </div>
  );
};

export default ProfileStickyCTA;
