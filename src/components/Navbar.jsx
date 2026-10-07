import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const logo = '/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Real genuine pages mapped in the application
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Therapies', path: '/categories' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Safety', path: '/safety' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-3 z-50 group">
            <img 
              src={logo} 
              alt="Neuravia Logo" 
              className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-102" 
            />
          </Link>

          {/* Desktop Navigation Menu with Genuine Pages & Active Indicator */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-all duration-200 rounded-lg whitespace-nowrap ${
                    isActive 
                      ? 'text-[#083058] font-bold bg-[#00839a]/10' 
                      : 'text-slate-600 hover:text-[#00839a] hover:bg-slate-50'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#00839a] rounded-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right: Login + Book a Session CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/signin"
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                location.pathname === '/signin' 
                  ? 'text-[#083058] font-bold bg-slate-100' 
                  : 'text-slate-700 hover:text-[#083058]'
              }`}
            >
              Login
            </Link>
            <Link
              to="/first-session"
              className="px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-[#083058] hover:bg-[#0c4a6e] shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              Book a Session — ₹499
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            aria-label="Toggle menu"
            className="md:hidden text-[#083058] z-50 p-2 rounded-lg hover:bg-slate-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-24 px-6 md:hidden shadow-2xl overflow-y-auto"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg font-medium border-b border-slate-100 pb-3 transition-colors flex items-center justify-between ${
                      isActive ? 'text-[#00839a] font-bold pl-2 border-l-4 border-l-[#00839a]' : 'text-slate-700 hover:text-[#083058]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#00839a]" />}
                  </Link>
                );
              })}
            </div>
            <div className="mt-8 flex flex-col space-y-3 pb-8">
              <Link
                to="/first-session"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 text-center text-sm font-bold text-white bg-[#083058] hover:bg-[#0c4a6e] rounded-xl shadow-md transition-all"
              >
                Book a Session — ₹499
              </Link>
              <Link
                to="/signin"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"
              >
                Login to Your Space
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
