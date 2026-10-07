import React from 'react';
import { Link } from 'react-router-dom';

const logo = '/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#083058] text-white pt-16 pb-8 border-t border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-4 text-left">
            <Link to="/" className="inline-block">
              <div className="bg-white rounded-xl p-2 inline-flex items-center shadow-sm">
                <img src={logo} alt="Neuravia Logo" className="h-10 w-auto object-contain" />
              </div>
            </Link>
            <p className="text-xs text-teal-200 font-bold uppercase tracking-wider">
              Mental Health Organisation
            </p>
            <p className="text-sm text-slate-300 italic font-serif">
              "Where Minds Find Peace."
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-left space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-300">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/categories" className="hover:text-white transition-colors">Therapies</Link></li>
              <li><Link to="/#therapists" className="hover:text-white transition-colors">Therapists</Link></li>
              <li><Link to="/#how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/#resources" className="hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="text-left space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-300">Support</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/first-session" className="hover:text-white transition-colors">Book a Session</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/safety" className="hover:text-white transition-colors">Emergency Support</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="text-left space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-300">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link></li>
              <li><Link to="/cancellation" className="hover:text-white transition-colors">Cancellation Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Neuravia Mental Health Organisation. All Rights Reserved.</p>
          <p className="text-slate-400">Private • Confidential • Compassionate Care</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
