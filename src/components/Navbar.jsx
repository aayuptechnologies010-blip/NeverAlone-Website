import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const logo = '/logo.jpeg';

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
            ? 'bg-brand-950/90 backdrop-blur-xl shadow-md py-3 border-b border-white/10'
            : 'bg-brand-900 py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 z-50">
            <img src={logo} alt="Never Alone Logo" className="h-14 w-auto rounded-md object-contain" />
            {/* <span className="text-xl font-semibold text-white tracking-wide">Never Alone</span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-0">
            {navLinks.map((link) => {
              const isHash = link.path.includes('#');
              let isActive = false;
              if (isHash) {
                const hashPart = link.path.substring(link.path.indexOf('#'));
                isActive = location.pathname === '/' && location.hash === hashPart;
              } else {
                isActive = location.pathname === link.path && !location.hash;
              }

              const linkClasses = `relative px-3 py-2 text-sm font-medium transition-colors hover:text-white whitespace-nowrap ${isActive ? 'text-white font-semibold' : 'text-gray-300'}`;

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
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-500"
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
              className="px-4 py-2 rounded-full text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-all duration-300 whitespace-nowrap"
            >
              Sign In
            </Link>
            <Link
              to="/first-session"
              className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-pink-600 hover:bg-pink-500 shadow-lg shadow-pink-600/20 transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              Get Support
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white z-50"
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
            className="fixed inset-0 z-40 bg-brand-950/95 backdrop-blur-xl flex flex-col pt-24 px-6 md:hidden"
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
                    className={`text-2xl font-medium border-b pb-4 transition-colors ${isActive ? 'text-pink-400 border-pink-500/50' : 'text-gray-300 border-white/5 hover:text-white'}`}
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
                className="w-full py-4 text-center text-lg font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl transition-all"
              >
                Sign In
              </Link>
              <Link
                to="/first-session"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 text-center text-lg font-medium text-white bg-pink-600 hover:bg-pink-500 shadow-lg shadow-pink-600/20 rounded-xl transition-all"
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
