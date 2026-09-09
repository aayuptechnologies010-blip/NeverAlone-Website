import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-brand-950 pt-10 pb-5 border-t relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="Never Alone Logo" className="h-10 w-auto rounded-md object-contain" />
              <span className="text-xl font-semibold text-white tracking-wide">Never Alone</span>
            </Link>
            <p className="text-gray-400 italic font-serif text-lg mb-8">
              "Someone to talk to. Someone who listens."
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                Facebook
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Platform</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/companions" className="text-gray-400 hover:text-white transition-colors">Companions</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Categories Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Categories</h4>
            <ul className="space-y-3">
              <li><Link to="/categories" className="text-gray-400 hover:text-white transition-colors">Just Talk</Link></li>
              <li><Link to="/categories" className="text-gray-400 hover:text-white transition-colors">Relationship</Link></li>
              <li><Link to="/categories" className="text-gray-400 hover:text-white transition-colors">Family</Link></li>
              <li><Link to="/categories" className="text-gray-400 hover:text-white transition-colors">Career & College</Link></li>
              <li><Link to="/categories" className="text-pink-400 hover:text-pink-300 transition-colors">Flirty Mode</Link></li>
              <li><Link to="/categories" className="text-cyan-400 hover:text-cyan-300 transition-colors">Professional Support</Link></li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="text-white font-semibold mb-3">Support & Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/safety" className="text-gray-400 hover:text-white transition-colors">Safety Center</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-500 hover:text-gray-400 transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-500 hover:text-gray-400 transition-colors text-sm">Terms & Conditions</Link></li>
              <li><Link to="/refund" className="text-gray-500 hover:text-gray-400 transition-colors text-sm">Refund Policy</Link></li>
              <li><Link to="/guidelines" className="text-gray-500 hover:text-gray-400 transition-colors text-sm">Community Guidelines</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Safety Statement & Copyright */}
        <div className="pt-1  flex flex-col md:flex-row items-center ">
          <p className="text-[10px] md:text-xs font-semibold tracking-[0.1em] md:tracking-[0.2em] text-gray-500 text-center md:text-left">
            18+ <span className="mx-2">•</span> PHONE CALLS ONLY <span className="mx-2">•</span> RESPECTFUL <span className="mx-2">•</span> NON-EXPLICIT
          </p>
          <p className="text-[10px] md:text-xs text-gray-500 text-center md:text-right">
            &copy; {new Date().getFullYear()} Never Alone. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
