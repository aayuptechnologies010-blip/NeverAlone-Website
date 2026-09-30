import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const logo = '/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'First Session', path: '/first-session' },
    { name: 'Explore', path: '/categories' },
    { name: 'Companions', path: '/#companions' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Safety', path: '/safety' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? 'bg-white backdrop-blur-md shadow-md shadow-slate-900/5 py-3 border-b border-slate-100'
            : 'bg-white py-4 shadow-sm border-b border-slate-100'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 z-50 group">
            <img src={logo} alt="Neuravia Logo" className="h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isHash = link.path.includes('#');
              let isActive = false;
              if (isHash) {
                const hashPart = link.path.substring(link.path.indexOf('#'));
                isActive = location.pathname === '/' && location.hash === hashPart;
              } else {
                isActive = location.pathname === link.path && !location.hash;
              }

              const linkClasses = `relative px-3.5 py-2 text-sm font-medium transition-all duration-200 hover:text-brand-teal whitespace-nowrap rounded-lg ${isActive ? 'text-brand-navy font-bold' : 'text-slate-600'}`;

              const handleClick = (e) => {
                if (isHash && location.pathname === '/') {
                  e.preventDefault();
                  const targetId = link.path.substring(link.path.indexOf('#') + 1);
                  const element = document.getElementById(targetId);
                  if (element) {
                    const yOffset = -80;
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                    // Update URL hash without jumping
                    window.history.pushState(null, '', link.path);
                  }
                }
                setMobileMenuOpen(false);
              };

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={isHash ? handleClick : () => setMobileMenuOpen(false)}
                  className={linkClasses}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-brand-teal to-brand-green rounded-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center space-x-3">
            <Link 
              to="/signin" 
              className="px-4 py-2 rounded-full text-sm font-semibold text-brand-navy hover:text-brand-teal hover:bg-slate-50 border border-slate-200 transition-all duration-300 whitespace-nowrap"
            >
              Sign In
            </Link>
            <Link
              to="/first-session"
              className="px-5 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r from-brand-navy via-brand-teal to-brand-green hover:opacity-95 shadow-md shadow-brand-teal/20 transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              Get Support
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-brand-navy z-50 p-1 rounded-lg hover:bg-slate-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-24 px-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isHash = link.path.includes('#');
                let isActive = false;
                if (isHash) {
                  const hashPart = link.path.substring(link.path.indexOf('#'));
                  isActive = location.pathname === '/' && location.hash === hashPart;
                } else {
                  isActive = location.pathname === link.path && !location.hash;
                }
                
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-xl font-semibold border-b border-slate-100 pb-4 transition-colors ${isActive ? 'text-brand-teal' : 'text-slate-700 hover:text-brand-navy'}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <div className="mt-8 flex flex-col space-y-4">
              <Link
                to="/signin"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 text-center text-base font-semibold text-brand-navy bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"
              >
                Sign In
              </Link>
              <Link
                to="/first-session"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 text-center text-base font-bold text-white bg-gradient-to-r from-brand-navy via-brand-teal to-brand-green shadow-lg shadow-brand-teal/20 rounded-xl transition-all"
              >
                Get Support
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
