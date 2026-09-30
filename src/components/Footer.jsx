import React from 'react';
import { Link } from 'react-router-dom';
import SeoKeywordCloud from './SeoKeywordCloud';
const logo = '/logo.png';

const Footer = () => {
  return (
    <footer className="bg-brand-950 pt-12 pb-6 border-t border-brand-800/40 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="flex items-center justify-center md:justify-start space-x-3 mb-6 group">
              <div className="bg-white rounded-xl p-1.5 shadow-md shadow-brand-500/10 flex items-center justify-center border border-white/30">
                <img src={logo} alt="Neuravia Logo" className="h-10 w-auto object-contain rounded-lg" />
              </div>
            </Link>
            <p className="text-brand-300/90 italic font-serif text-lg mb-6 tracking-wide">
              "Where Minds Find Peace."
            </p>
            <div className="flex items-center space-x-3 justify-center md:justify-start flex-wrap gap-y-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#1877f2] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#0a66c2] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-black border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#ff0000] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-3">Platform</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/first-session" className="text-gray-400 hover:text-white transition-colors">First Session</Link></li>
              <li><Link to="/#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/companions" className="text-gray-400 hover:text-white transition-colors">Companions</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Categories Links */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-3">Categories</h4>
            <ul className="space-y-3">
              <li><Link to="/categories" className="text-gray-400 hover:text-white transition-colors">Just Talk</Link></li>
              <li><Link to="/categories" className="text-gray-400 hover:text-white transition-colors">Relationship</Link></li>
              <li><Link to="/categories" className="text-gray-400 hover:text-white transition-colors">Family</Link></li>
              <li><Link to="/categories" className="text-gray-400 hover:text-white transition-colors">Career & College</Link></li>
              <li><Link to="/categories" className="text-gray-400 hover:text-white transition-colors">Mindfulness & Healing</Link></li>
              <li><Link to="/professional-support" className="text-cyan-400 hover:text-cyan-300 transition-colors">Professional Support</Link></li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div className="text-center md:text-left">
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

        {/* Dense SEO & GEO Keyword Footer Cloud */}
        <SeoKeywordCloud />

        {/* Bottom Safety Statement & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between w-full gap-4">
          <p className="text-[10px] md:text-xs font-semibold tracking-[0.1em] md:tracking-[0.2em] text-gray-500 text-center md:text-left">
            18+ <span className="mx-2">•</span> PHONE CALLS ONLY <span className="mx-2">•</span> RESPECTFUL <span className="mx-2">•</span> NON-EXPLICIT
          </p>
          <p className="text-[10px] md:text-xs text-gray-500 text-center md:text-right">
            &copy; {new Date().getFullYear()} Neuravia. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
